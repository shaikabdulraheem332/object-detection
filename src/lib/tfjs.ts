import type * as cocoSsd from '@tensorflow-models/coco-ssd';
import { detectVisualFeatureFallbacks, isLivingThing } from './analyzer';

let modelPromise: Promise<cocoSsd.ObjectDetection> | null = null;
let cachedModel: cocoSsd.ObjectDetection | null = null;

export async function loadCocoModel(): Promise<cocoSsd.ObjectDetection> {
  if (cachedModel) return cachedModel;

  if (!modelPromise) {
    modelPromise = (async () => {
      await import('@tensorflow/tfjs');
      const coco = await import('@tensorflow-models/coco-ssd');
      const loaded = await coco.load({
        base: 'lite_mobilenet_v2',
      });
      cachedModel = loaded;
      return loaded;
    })();
  }

  return modelPromise;
}

export async function detectObjectsInElement(
  element: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement,
  threshold: number = 0.4,
  ctx?: CanvasRenderingContext2D | null
): Promise<{ class: string; score: number; bbox: [number, number, number, number] }[]> {
  try {
    const model = await loadCocoModel();
    // Increase maxNumBoxes to 50 to detect ALL visible non-living objects individually
    const predictions = await model.detect(element, 50, threshold);

    // STRICT LIVING THING FILTER STAGE: Immediately discard humans, animals, plants, biological food
    const formatted = predictions
      .filter((pred) => !isLivingThing(pred.class))
      .map((pred) => ({
        class: pred.class,
        score: pred.score,
        bbox: pred.bbox as [number, number, number, number],
      }));

    if (formatted.length === 0 && ctx) {
      const width = ctx.canvas?.width || (element as HTMLImageElement).naturalWidth || 640;
      const height = ctx.canvas?.height || (element as HTMLImageElement).naturalHeight || 480;
      const featureDetections = detectVisualFeatureFallbacks(ctx, width, height);
      return featureDetections.filter((item) => !isLivingThing(item.class));
    }

    return formatted;
  } catch (err) {
    console.warn('TensorFlow.js model inference fallback triggered:', err);
    if (ctx) {
      const width = ctx.canvas?.width || (element as HTMLImageElement).naturalWidth || 640;
      const height = ctx.canvas?.height || (element as HTMLImageElement).naturalHeight || 480;
      return detectVisualFeatureFallbacks(ctx, width, height).filter((item) => !isLivingThing(item.class));
    }
    return [];
  }
}
