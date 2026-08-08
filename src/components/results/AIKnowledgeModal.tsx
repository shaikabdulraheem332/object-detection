'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  BookOpen,
  ShieldCheck,
  Zap,
  Volume2,
  VolumeX,
  Cpu,
  Sparkles,
  Award,
  CheckCircle2,
  Info,
  Layers,
} from 'lucide-react';
import { DetectedObject } from '@/lib/types';
import { soundManager } from '@/lib/audio';

interface AIKnowledgeModalProps {
  object: DetectedObject | null;
  onClose: () => void;
}

// Helper: strip slashes, special symbols before TTS
function cleanForSpeech(text: string): string {
  return text
    .replace(/\//g, ' and ')
    .replace(/&/g, ' and ')
    .replace(/\|/g, ', ')
    .replace(/–/g, ' to ')
    .replace(/—/g, ', ')
    .replace(/\(/g, ', ')
    .replace(/\)/g, ', ')
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export default function AIKnowledgeModal({ object, onClose }: AIKnowledgeModalProps) {
  // ✅ Hooks always at top — before any conditional returns
  const [isSpeakingModal, setIsSpeakingModal] = useState<boolean>(false);

  // Stop speech when modal closes or object changes
  useEffect(() => {
    return () => {
      soundManager.stopSpeaking();
    };
  }, [object]);

  if (!object || !object.knowledge) return null;

  const k = object.knowledge;

  const fullText = cleanForSpeech(
    `Here is what I know about ${object.displayName}. ${k.scientificOrTechName}. Primary use: ${k.primaryUses}. Fun fact: ${k.funFact}`
  );

  const handleSpeechNarrator = () => {
    if (isSpeakingModal) {
      soundManager.stopSpeaking();
      setIsSpeakingModal(false);
    } else {
      const started = soundManager.speakText(fullText, 1.0, 1.0);
      setIsSpeakingModal(!!started);
    }
  };

  const handleClose = () => {
    soundManager.stopSpeaking();
    setIsSpeakingModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/40 text-neon-cyan">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-white">{object.displayName}</h3>
                {object.subCategory && (
                  <span className="text-xs font-mono text-neon-cyan px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/30">
                    {object.subCategory}
                  </span>
                )}
                <span className="text-xs font-mono text-neon-emerald bg-neon-emerald/10 border border-neon-emerald/30 px-2 py-0.5 rounded-full">
                  {Math.round(object.score * 100)}% Confidence
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-0.5">{k.scientificOrTechName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleSpeechNarrator}
              title={isSpeakingModal ? 'Stop Voice Reader' : 'Listen to AI Voice Explanation'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                isSpeakingModal
                  ? 'bg-laser-pink/30 border border-laser-pink/60 text-laser-pink shadow-neon-pink'
                  : 'bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/20'
              }`}
            >
              {isSpeakingModal ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {isSpeakingModal ? 'Stop Voice' : 'AI Voice Reader'}
              </span>
            </button>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl glass-panel-interactive text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Knowledge Body Grid */}
        <div className="space-y-5 text-xs text-gray-200">
          
          {/* Primary Uses & Purpose */}
          <div className="p-4 rounded-2xl bg-cyber-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-neon-cyan font-mono uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-neon-cyan" />
              Primary Purpose &amp; Practical Uses
            </h4>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{k.primaryUses}</p>
          </div>

          {/* Technical Specifications / Materials */}
          <div className="p-4 rounded-2xl bg-cyber-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-neon-purple font-mono uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neon-purple" />
              Technical &amp; Biological Specifications
            </h4>
            <ul className="space-y-1.5 pt-1">
              {(k.specifications || []).map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neon-purple shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Characteristics & Features */}
          <div className="p-4 rounded-2xl bg-cyber-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-laser-pink font-mono uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-laser-pink" />
              Key Features &amp; Performance Attributes
            </h4>
            <ul className="space-y-1.5 pt-1">
              {(k.keyFeatures || []).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <Layers className="w-3.5 h-3.5 text-laser-pink shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Human / Animal Context Details */}
          {k.humanDetails && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-white/10 space-y-2">
              <h4 className="text-xs font-bold text-neon-amber font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-amber" />
                Context &amp; Background Information
              </h4>
              <p className="text-gray-300 leading-relaxed">{k.humanDetails}</p>
            </div>
          )}

          {/* Safety & Legal Status */}
          <div className="p-4 rounded-2xl bg-neon-emerald/10 border border-neon-emerald/30 space-y-2">
            <h4 className="text-xs font-bold text-neon-emerald font-mono uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neon-emerald" />
              Safety Standards &amp; Legal Regulatory Classification
            </h4>
            <p className="text-gray-200 leading-relaxed">{k.safetyAndLegalStatus}</p>
          </div>

          {/* Fun Trivia Fact */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-neon-cyan" />
              Did You Know? (AI Knowledge Trivia)
            </h4>
            <p className="text-gray-300 italic">&quot;{k.funFact}&quot;</p>
          </div>

          {/* Person Profile */}
          {k.personProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-cyan/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-cyan font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-cyan" />
                Detailed Person Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Full Name:</span>
                    <p className="text-white font-semibold">{k.personProfile.fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Profession:</span>
                    <p className="text-white">{k.personProfile.profession}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Nationality:</span>
                    <p className="text-white">{k.personProfile.nationality}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Lifespan:</span>
                    <p className="text-white">{k.personProfile.birthDate} - {k.personProfile.deathDate || 'Present'}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Birth Place:</span>
                  <p className="text-white">{k.personProfile.birthPlace}</p>
                </div>
                <div>
                  <span className="text-gray-400">Historical Importance:</span>
                  <p className="text-gray-300">{k.personProfile.historicalImportance}</p>
                </div>
                <div>
                  <span className="text-gray-400">Major Contributions:</span>
                  <ul className="mt-1 space-y-1">
                    {k.personProfile.majorContributions.map((contrib, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-cyan">•</span>
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-gray-400">Timeline:</span>
                  <ul className="mt-1 space-y-1">
                    {(k.personProfile.timeline || []).map((event, idx) => (
                      <li key={idx} className="text-gray-300 text-xs">{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Landmark Profile */}
          {k.landmarkProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-purple/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-purple font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-purple" />
                Detailed Landmark Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Place Name:</span>
                    <p className="text-white font-semibold">{k.landmarkProfile.placeName}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <p className="text-white">{k.landmarkProfile.city}, {k.landmarkProfile.country}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Built Year:</span>
                    <p className="text-white">{k.landmarkProfile.builtYear}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Architect:</span>
                    <p className="text-white">{k.landmarkProfile.architect}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Height/Size:</span>
                  <p className="text-white">{k.landmarkProfile.heightOrSize}</p>
                </div>
                <div>
                  <span className="text-gray-400">UNESCO Status:</span>
                  <p className="text-neon-emerald">{k.landmarkProfile.unescoStatus}</p>
                </div>
                <div>
                  <span className="text-gray-400">History:</span>
                  <p className="text-gray-300">{k.landmarkProfile.history}</p>
                </div>
                <div>
                  <span className="text-gray-400">Tourism Information:</span>
                  <p className="text-gray-300">{k.landmarkProfile.tourismInfo}</p>
                </div>
                <div>
                  <span className="text-gray-400">Interesting Facts:</span>
                  <ul className="mt-1 space-y-1">
                    {k.landmarkProfile.interestingFacts.map((fact, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Vehicle Profile */}
          {k.vehicleProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-laser-pink/30 space-y-3">
              <h4 className="text-xs font-bold text-laser-pink font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-laser-pink" />
                Detailed Vehicle Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Brand:</span>
                    <p className="text-white font-semibold">{k.vehicleProfile.brand}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Model:</span>
                    <p className="text-white">{k.vehicleProfile.model}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Vehicle Type:</span>
                    <p className="text-white">{k.vehicleProfile.vehicleType}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Manufacturer:</span>
                    <p className="text-white">{k.vehicleProfile.manufacturer}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Engine:</span>
                    <p className="text-white">{k.vehicleProfile.engine}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Fuel Type:</span>
                    <p className="text-white">{k.vehicleProfile.fuelType}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Country:</span>
                    <p className="text-white">{k.vehicleProfile.country}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Approx. Price:</span>
                    <p className="text-neon-emerald">{k.vehicleProfile.approximatePrice}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Key Features:</span>
                  <ul className="mt-1 space-y-1">
                    {k.vehicleProfile.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-laser-pink">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Phone Profile */}
          {k.mobilePhoneProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-cyan/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-cyan font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-cyan" />
                Detailed Mobile Phone Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Brand:</span>
                    <p className="text-white font-semibold">{k.mobilePhoneProfile.brand}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Model:</span>
                    <p className="text-white">{k.mobilePhoneProfile.model}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Operating System:</span>
                    <p className="text-white">{k.mobilePhoneProfile.operatingSystem}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Processor:</span>
                    <p className="text-white">{k.mobilePhoneProfile.processor}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">RAM:</span>
                    <p className="text-white">{k.mobilePhoneProfile.ram}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Storage:</span>
                    <p className="text-white">{k.mobilePhoneProfile.storage}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Camera:</span>
                    <p className="text-white">{k.mobilePhoneProfile.camera}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Battery:</span>
                    <p className="text-white">{k.mobilePhoneProfile.battery}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Screen Size:</span>
                    <p className="text-white">{k.mobilePhoneProfile.screenSize}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Approx. Price:</span>
                    <p className="text-neon-emerald">{k.mobilePhoneProfile.approximatePrice}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Key Features:</span>
                  <ul className="mt-1 space-y-1">
                    {k.mobilePhoneProfile.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-cyan">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Furniture Profile */}
          {k.furnitureProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-amber/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-amber font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-amber" />
                Detailed Furniture Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-400">Object Name:</span>
                  <p className="text-white font-semibold">{k.furnitureProfile.objectName}</p>
                </div>
                <div>
                  <span className="text-gray-400">Materials:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {k.furnitureProfile.material.map((mat, idx) => (
                      <span key={idx} className="text-xs bg-neon-amber/20 text-neon-amber px-2 py-0.5 rounded">{mat}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Uses:</span>
                  <ul className="mt-1 space-y-1">
                    {k.furnitureProfile.uses.map((use, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-amber">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-gray-400">Common Locations:</span>
                  <ul className="mt-1 space-y-1">
                    {k.furnitureProfile.commonLocations.map((loc, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-amber">•</span>
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-gray-400">Maintenance Tips:</span>
                  <ul className="mt-1 space-y-1">
                    {(k.furnitureProfile.maintenanceTips || []).map((tip, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-amber">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Clothing Profile */}
          {k.clothingProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-purple/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-purple font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-purple" />
                Detailed Clothing Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <p className="text-white font-semibold">{k.clothingProfile.name}</p>
                </div>
                <div>
                  <span className="text-gray-400">Category:</span>
                  <p className="text-white">{k.clothingProfile.category}</p>
                </div>
                <div>
                  <span className="text-gray-400">Materials:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {(k.clothingProfile.material || []).map((mat, idx) => (
                      <span key={idx} className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded">{mat}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Uses:</span>
                  <ul className="mt-1 space-y-1">
                    {k.clothingProfile.uses.map((use, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-purple">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-gray-400">Popular Brands:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {(k.clothingProfile.popularBrands || []).map((brand, idx) => (
                      <span key={idx} className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded">{brand}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Animal Profile */}
          {k.animalProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-emerald/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-emerald font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-emerald" />
                Detailed Animal Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <p className="text-white font-semibold">{k.animalProfile.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Scientific Name:</span>
                    <p className="text-white italic">{k.animalProfile.scientificName}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Habitat:</span>
                    <p className="text-white">{k.animalProfile.habitat}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Diet:</span>
                    <p className="text-white">{k.animalProfile.diet}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Lifespan:</span>
                    <p className="text-white">{k.animalProfile.lifespan}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Conservation Status:</span>
                    <p className="text-neon-emerald">{k.animalProfile.conservationStatus}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Interesting Facts:</span>
                  <ul className="mt-1 space-y-1">
                    {k.animalProfile.interestingFacts.map((fact, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-emerald">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Plant Profile */}
          {k.plantProfile && (
            <div className="p-4 rounded-2xl bg-cyber-900/80 border border-neon-cyan/30 space-y-3">
              <h4 className="text-xs font-bold text-neon-cyan font-mono uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-neon-cyan" />
                Detailed Plant Profile
              </h4>
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <p className="text-white font-semibold">{k.plantProfile.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Scientific Name:</span>
                    <p className="text-white italic">{k.plantProfile.scientificName}</p>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Uses:</span>
                  <ul className="mt-1 space-y-1">
                    {k.plantProfile.uses.map((use, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-cyan">•</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-gray-400">Medicinal Benefits:</span>
                  <ul className="mt-1 space-y-1">
                    {(k.plantProfile.medicinalBenefits || []).map((benefit, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-neon-cyan">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-400">Water Requirement:</span>
                    <p className="text-white">{k.plantProfile.waterRequirement}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Sunlight Requirement:</span>
                    <p className="text-white">{k.plantProfile.sunlightRequirement}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-white/10 pt-4">
          <button
            onClick={handleClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-cyber-950 font-bold text-xs shadow-neon-cyan"
          >
            CLOSE KNOWLEDGE EXPANDER
          </button>
        </div>
      </div>
    </div>
  );
}
