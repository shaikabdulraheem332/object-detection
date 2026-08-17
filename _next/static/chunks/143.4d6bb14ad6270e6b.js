"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{43343:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(46040);function a(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&r.util.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}},50652:function(e,t,n){n.d(t,{bk:function(){return i},fC:function(){return s}});var r=n(46040),a=n(43343);function i(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}let s={kernelName:r.Abs,backendName:"cpu",kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend;(0,a.H)(t,"abs");let s=new Float32Array(r.util.sizeFromShape(t.shape));return s=i(n.data.get(t.dataId).values),n.makeOutput(s,t.shape,t.dtype)}}},7152:function(e,t,n){n.d(t,{EH:function(){return s},IH:function(){return l},j4:function(){return u}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e+t),o=(0,i.H)((e,t,n,r)=>({real:e+n,imag:t+r})),l=(0,i.j)(r.Add,s,o),u={kernelName:r.Add,backendName:"cpu",kernelFunc:l}},91299:function(e,t,n){n.d(t,{W:function(){return a},i:function(){return i}});var r=n(46040);function a(e,t,n,a,i){let s=r.util.sizeFromShape(a),o=r.util.makeZerosTypedArray(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error("Input x must be non-negative!");r>=i||(s>0?o[r]+=t[n]:o[r]+=1)}return o}function i(e,t,n,a=!1){let i=e.shape[0],s=e.shape[1],o=(0,r.buffer)([i,n],t.dtype);for(let r=0;r<i;r++)for(let i=0;i<s;i++){let s=e.get(r,i);if(s<0)throw Error("Input x must be non-negative!");s>=n||(a?o.set(1,r,s):t.size>0?o.set(o.get(r,s)+t.get(r,i),r,s):o.set(o.get(r,s)+1,r,s))}return o}},44876:function(e,t,n){n.d(t,{T0:function(){return l},nv:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e&t),o=(0,i.j)(r.BitwiseAnd,s),l={kernelName:r.BitwiseAnd,backendName:"cpu",kernelFunc:o}},92432:function(e,t,n){n.d(t,{Mq:function(){return h},pj:function(){return c},sJ:function(){return u}});var r=n(46040),a=n(80438),i=n(82571),s=n(30926),o=n(36583),l=n(1974);function u(e,t,n,i){if("int32"===i)return[t,"int32",Int32Array.from(e)];if("bool"===i){let i=r.util.toTypedArray([0],n),[s,o]=(0,a.b)((e,t)=>e!==t?1:0)(t,[],e,i,"bool");return[o,"bool",s]}throw Error(`Error in Cast: failed to cast ${n} to ${i}`)}function c(e){let{inputs:t,backend:n,attrs:a}=e,{x:h}=t,{dtype:d}=a;if("complex64"===d){if("complex64"===h.dtype)return(0,o.y)({inputs:{x:h},backend:n});let e=(0,i.l)(n,h.shape,h.dtype),t=c({inputs:{x:h},backend:n,attrs:{dtype:"float32"}}),r=(0,s.P)({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if("complex64"===h.dtype){let e=(0,l.k)({inputs:{input:h},backend:n}),t=c({inputs:{x:e},backend:n,attrs:{dtype:d}});return n.disposeIntermediateTensorInfo(e),t}if(!r.util.hasEncodingLoss(h.dtype,d)){let e=(0,o.y)({inputs:{x:h},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:d}}let[p,f,m]=u(n.data.get(h.dataId).values,h.shape,h.dtype,d);return n.makeTensorInfo(p,f,m)}let h={kernelName:r.Cast,backendName:"cpu",kernelFunc:c}},97369:function(e,t,n){n.d(t,{__:function(){return s},y2:function(){return l}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.ceil(e)),o=(0,i.O)(r.Ceil,s),l={kernelName:r.Ceil,backendName:"cpu",kernelFunc:o}},30926:function(e,t,n){function r(e){let{inputs:t,backend:n}=e,{real:r,imag:a}=t,i=n.data.get(r.dataId).values,s=n.data.get(a.dataId).values,o=n.makeTensorInfo(r.shape,"complex64");return n.data.get(o.dataId).complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",i),imag:n.makeTensorInfo(a.shape,"float32",s)},o}n.d(t,{P:function(){return r},z:function(){return a}});let a={kernelName:n(46040).Complex,backendName:"cpu",kernelFunc:r}},7851:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(46040);function a(e,t,n,a){let i=r.util.getArrayFromDType(n,r.util.sizeFromShape(t));if(a&&"string"!==n){let t=0;e.forEach(e=>{let n=r.util.sizeFromShape(e.shape);i.set(e.vals,t),t+=n})}else{let a=0;e.forEach(e=>{let s="string"===n?r.backend_util.fromUint8ToStringArray(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let r=n*t[1]+a;for(let t=0;t<e.shape[1];++t)i[r+t]=s[o++]}a+=e.shape[1]})}return i}},10545:function(e,t,n){n.d(t,{Dg:function(){return o},Kx:function(){return l},tW:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e===t?1:0),o=(0,i.j)(r.Equal,s,null,"bool"),l={kernelName:r.Equal,backendName:"cpu",kernelFunc:o}},58275:function(e,t,n){n.d(t,{Qq:function(){return o},Ro:function(){return s},SX:function(){return l}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.exp(e)),o=(0,i.O)(r.Exp,s,"float32"),l={kernelName:r.Exp,backendName:"cpu",kernelFunc:o}},85591:function(e,t,n){n.d(t,{OF:function(){return s},Vu:function(){return l}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.expm1(e)),o=(0,i.O)(r.Expm1,s),l={kernelName:r.Expm1,backendName:"cpu",kernelFunc:o}},23813:function(e,t,n){n.d(t,{Ao:function(){return l},r6:function(){return s}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.floor(e)),o=(0,i.O)(r.Floor,s),l={kernelName:r.Floor,backendName:"cpu",kernelFunc:o}},98951:function(e,t,n){n.d(t,{EE:function(){return l},JP:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>Math.floor(e/t)),o=(0,i.j)(r.FloorDiv,s,null,"int32"),l={kernelName:r.FloorDiv,backendName:"cpu",kernelFunc:o}},69169:function(e,t,n){n.d(t,{m:function(){return a}});var r=n(46040);function a(e,t,n,a,i,s,o,l,u){let c=(0,r.buffer)([a,s],n);for(let n=0;n<a;n++){let r=[],a=0;for(let t=0;t<i;t++){let s=e[n*i+t];a+=s*o[t],r.push(s)}if(a<0||a>=u/s)throw Error(`Invalid indices: ${r} does not index into ${l}`);for(let e=0;e<s;e++)c.values[n*s+e]=t.get(...t.indexToLoc(a*s+e))}return c}},53964:function(e,t,n){n.d(t,{i:function(){return a}});var r=n(46040);function a(e,t,n){let a=(0,r.buffer)(n,e.dtype);for(let n=0;n<a.size;++n){let r=a.indexToLoc(n).slice(),i=r[0],s=r[2],o=t.locToIndex([i,s]);r[2]=t.values[o];let l=e.locToIndex(r);0<=l&&l<e.values.length&&(a.values[n]=e.values[l])}return a}},90054:function(e,t,n){n.d(t,{Ce:function(){return l},o:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e>t?1:0),o=(0,i.j)(r.Greater,s,null,"bool"),l={kernelName:r.Greater,backendName:"cpu",kernelFunc:o}},66450:function(e,t,n){n.d(t,{HL:function(){return s},V:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e>=t?1:0),o=(0,i.j)(r.GreaterEqual,s,null,"bool"),l={kernelName:r.GreaterEqual,backendName:"cpu",kernelFunc:o}},36583:function(e,t,n){function r(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}n.d(t,{I:function(){return a},y:function(){return r}});let a={kernelName:n(46040).Identity,backendName:"cpu",kernelFunc:r}},94626:function(e,t,n){n.d(t,{rO:function(){return s},zh:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e<t?1:0),o=(0,i.j)(r.Less,s,null,"bool"),l={kernelName:r.Less,backendName:"cpu",kernelFunc:o}},79776:function(e,t,n){n.d(t,{lx:function(){return s},m3:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e<=t?1:0),o=(0,i.j)(r.LessEqual,s,null,"bool"),l={kernelName:r.LessEqual,backendName:"cpu",kernelFunc:o}},12950:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(46040);function a(e,t,n){let a=(t-e)/(n-1),i=r.util.makeZerosTypedArray(n,"float32");i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+a;return i}},90290:function(e,t,n){n.d(t,{vX:function(){return s},xM:function(){return l}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.log(e)),o=(0,i.O)(r.Log,s),l={kernelName:r.Log,backendName:"cpu",kernelFunc:o}},42529:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(46040);function a(e,t,n,a){let i=r.util.getTypedArrayFromDType(a,r.util.sizeFromShape(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}},34536:function(e,t,n){n.d(t,{eJ:function(){return l},wS:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>Math.max(e,t)),o=(0,i.j)(r.Maximum,s),l={kernelName:r.Maximum,backendName:"cpu",kernelFunc:o}},60168:function(e,t,n){n.d(t,{u0:function(){return l},vP:function(){return s}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>Math.min(e,t)),o=(0,i.j)(r.Minimum,s),l={kernelName:r.Minimum,backendName:"cpu",kernelFunc:o}},11247:function(e,t,n){n.d(t,{$3:function(){return s},Jp:function(){return l},f$:function(){return u}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e*t),o=(0,i.H)((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n})),l=(0,i.j)(r.Multiply,s,o),u={kernelName:r.Multiply,backendName:"cpu",kernelFunc:l}},40358:function(e,t,n){n.d(t,{AF:function(){return o},uC:function(){return s}});var r=n(46040),a=n(43343),i=n(11247);function s(e,t,n){let a=r.util.createScalarValue(-1,n);return(0,i.$3)([],t,a,e,n)}let o={kernelName:r.Neg,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r}=t;(0,a.H)(r,"neg");let[i,o]=s(n.data.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,i)}}},40298:function(e,t,n){n.d(t,{Gj:function(){return s},nP:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e!==t?1:0),o=(0,i.j)(r.NotEqual,s,null,"bool"),l={kernelName:r.NotEqual,backendName:"cpu",kernelFunc:o}},18787:function(e,t,n){n.d(t,{Iz:function(){return o},Qg:function(){return s}});var r=n(46040),a=n(43343),i=n(76086);function s(e,t,n,a){let[i,s]=r.backend_util.computeOutAndReduceShapes(e,a),o=(0,r.upcastType)(t,"int32"),l=r.util.makeZerosTypedArray(r.util.sizeFromShape(i),o),u=r.util.sizeFromShape(s);for(let e=0;e<l.length;++e){let t=e*u,r=1;for(let e=0;e<u;++e)r*=n[t+e];l[e]=r}return{outVals:l,outShape:i,outDtype:o}}let o={kernelName:r.Prod,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:o}=e,{x:l}=t,{axis:u,keepDims:c}=o;(0,a.H)(l,"prod");let h=l.shape.length,d=r.util.parseAxisParam(u,l.shape),p=r.backend_util.getAxesPermutation(d,h),f=d,m=l,g=[];null!=p&&(g.push(m=(0,i.p)({inputs:{x:l},backend:n,attrs:{perm:p}})),f=r.backend_util.getInnerMostAxes(f.length,h));let x=n.data.get(m.dataId).values,{outVals:b,outShape:y,outDtype:v}=s(m.shape,m.dtype,x,f),k=y;return c&&(k=r.backend_util.expandShapeToKeepDim(y,d)),g.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(k,v,b)}}},48153:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(46040);function a(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function i(e,t,n,i,s,o,l,u){if(0===e.length)throw Error("paramsNestedSplits must be non empty");if(0===t[0].length)throw Error("Split tensors must not be scalars");if(!function(e,t,n){e.forEach((e,a)=>{if(e<0||e>=n){let i=r.util.indexToLoc(a,t.length,r.util.computeStrides(t)).join(",");throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}(o,l,t[0][0]-1),0===i.length)throw Error("params.rank must be nonzero");let{outSplits:c,valueSlices:h,numValues:d}=function(e,t,n,r){let a=[],i=0,s=Array(t.length-1+n.length).fill(null).map(()=>[0]);!function(e,t){for(let n=0;n<e.length;++n){let r=e[n],a=n===e.length-1?t:e[n+1].length;if(0===r.length)throw Error("Ragged splits may not be empty");if(r[0]<0)throw Error("Ragged splits must be non-negative");if(r[r.length-1]>a)throw Error("Ragged splits must not point past values");for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error("Ragged splits must be sorted in ascending order")}}(n,r);let o=1;for(let e=0;e<t.length-1;++e){o*=t[e];let n=t[e+1];for(let t=1;t<o+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],l=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],a=e+t.length-1;if(a>=0){let e=s[a],t=e[e.length-1]-r[o];for(let e=o;e<l;++e)s[a].push(r[e+1]+t)}o=r[o],l=r[l]}l!==o&&(a.push([o,l]),i+=l-o)}return{outSplits:s,valueSlices:a,numValues:i}}(o,l,e,i[0]),p=function(e){let t=[];for(let n=0;n<e.length;++n){let a=e[n].length,i=r.util.getArrayFromDType("int32",a);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}(c),f=function(e,t,n,i,s){let o=t.slice();o[0]=s;let l=r.util.getArrayFromDType(n,r.util.sizeFromShape(o)),u=e.length,c=0===u?0:u/t[0];return!function(e,t,n,r,i,s){let o=a(t,2)[1],l=a(s,2)[1],u=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[u*l+t]=e[n*o+t];++u}}(e,t,i,c,l,o),[l,o]}(n,i,s,h,d);return[p,f[0],f[1]]}},83230:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(46040);function a(e,t,n,a,i,s,o){if(t.length>1)throw Error("starts must be a scalar or vector");if(i.length>1)throw Error("limits must be a scalar or vector");if(o.length>1)throw Error("deltas must be a scalar or vector");let l=0===t.length,u=0===i.length,c=0===o.length,h=[];l||h.push(t[0]),u||h.push(i[0]),c||h.push(o[0]);for(let e=1;e<h.length;++e)if(h[e]!==h[e-1])throw Error("starts, limits, and deltas must have the same shape");let d=0===h.length?1:h[0],p=r.util.getArrayFromDType("int32",d+1);p[0]=0;for(let t=0;t<d;++t){let n;let r=l?e[0]:e[t],i=u?a[0]:a[t],o=c?s[0]:s[t];if(0===o)throw Error("Requires delta != 0");if(o>0&&i<r||o<0&&i>r)n=0;else if((n=Math.ceil(Math.abs((i-r)/o)))>2147483647)throw Error("Requires ((limit - start) / delta) <= 2147483647");p[t+1]=p[t]+n}let f=p[d],m=r.util.getArrayFromDType(n,f),g=0;for(let t=0;t<d;++t){let n=p[t+1]-p[t],r=l?e[0]:e[t],a=c?s[0]:s[t];for(let e=0;e<n;++e)m[g++]=r,r+=a}return[p,m]}},30792:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(46040),a=r.backend_util.RowPartitionType;class i{constructor(e,t,n,a,i,s,o,l,u,c){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=a,this.valuesDType=i,this.defaultValue=s,this.defaultValueShape=o,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=r.backend_util.getRowPartitionTypesHelper(c),this.raggedRank=r.backend_util.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===a.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===a.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case a.VALUE_ROWIDS:return i.getMaxWidthValueRowID(t);case a.ROW_SPLITS:return i.getMaxWidthRowSplit(t);default:throw Error(`Cannot handle partition type ${a[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(0===t||1===t)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(0===t)return 0;let n=0,r=e[0],a=0;for(let i=1;i<t;++i){let t=e[i];t!==r&&(r=t,a=Math.max(i-n,a),n=i)}return Math.max(t-n,a)}tensorShapeFromTensor(e,t,n=!0){if(0===t.length){if(-1===e[0])return[];throw Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return o(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;r.backend_util.validateDefaultValueShape(n,t);let a=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=r.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank,a,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let a=Math.min(e,n),i=[],s=0;for(let e=0;e<a;++e,s+=t)i.push(s);for(let t=a;t<e;++t)i.push(-1);return r.util.assert(i.length===e,()=>"Final length of result must be equal to firstDimension."),i}calculateOutputIndexRowSplit(e,t,n,r){let a=e.length,i=[];for(let s=0;s<a-1;++s){let a=e[s+1]-e[s],o=Math.min(r,a),l=t[s];-1===l&&(o=0);for(let e=0;e<o;++e)i.push(l),l+=n;for(let e=0;e<a-o;++e)i.push(-1)}if(a>0&&i.length!==e[a-1])throw Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,n,r){let a=e.length,i=[];if(0===a)return[];let s=0,o=e[0];if(o>=t.length)throw Error(`Got currentValueRowId=${o}, which is not less than ${t.length}`);let l=t[o];i.push(l);for(let u=1;u<a;++u){let a=e[u];if(a===o)l>=0&&(++s<r?l+=n:l=-1);else{if(s=0,o=a,a>=t.length)throw Error(`Got nextValueRowId=${a} which is not less than ${t.length}`);l=t[a]}i.push(l)}if(i.length!==e.length)throw Error("Invalid row ids.");return i}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),s=this.getRowPartitionTypeByDimension(e);switch(s){case a.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case a.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${a[s]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case a.FIRST_DIM_SIZE:return e[0];case a.VALUE_ROWIDS:throw Error("Cannot handle VALUE_ROWIDS in first dimension.");case a.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${a[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let a=o(t,!1),i=r.util.getArrayFromDType(this.valuesDType,r.util.sizeFromShape(a));if(n[0]*t[0]>0){let r=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)r=this.calculateOutputIndex(e-1,r,n[e],t[e]);this.setOutput(this.raggedRank,r,i,a)}return[a,i]}setOutput(e,t,n,a){if(0===n.length)return;let i=this.values,o=a.slice();o=o.slice(e+1);let l=r.util.sizeFromShape(o),u=t.length,c=this.defaultValue;if(c.length!==l&&1!==c.length){let e=this.defaultValueShape;(0,r.tidy)(()=>{let t=(0,r.reshape)(c,e);c=(0,r.broadcastTo)(t,o).dataSync()})}let h=0,d=0,p=0;for(let e=0;e<=u;++e){let r=e<u?t[e]:-1;if(r===p){++p;continue}if(d<p){let e=i.subarray(h*l);s(n.subarray(d*l),e,(p-d)*l)}if(e>=u&&(r=Math.floor(n.length/l)),r>p){if(1===this.defaultValue.length)n.subarray(p*l,r*l).fill(this.defaultValue[0]),p=r;else for(;r>p;)s(n.slice(p*l),c,l),++p}r<0?(h=e+1,d=p):(h=e,p=(d=p)+1)}}}function s(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function o(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function l(e,t,n,r,a,s,o,l,u,c){return new i(e,t,n,r,a,s,o,l,u,c).compute()}},24971:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(46040);function a(e,t,n,a){let i=e<t&&n<0,s=t<e&&n>1;if(e===t||i||s)return r.util.makeZerosTypedArray(0,a);let o=Math.abs(Math.ceil((t-e)/n)),l=r.util.makeZerosTypedArray(o,a);t<e&&1===n&&(n=-1),l[0]=e;for(let e=1;e<l.length;e++)l[e]=l[e-1]+n;return l}},1974:function(e,t,n){function r(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.real,i=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,i)}n.d(t,{O:function(){return a},k:function(){return r}});let a={kernelName:n(46040).Real,backendName:"cpu",kernelFunc:r}},23894:function(e,t,n){n.d(t,{FY:function(){return l},zd:function(){return s}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>1/Math.sqrt(e)),o=(0,i.O)(r.Rsqrt,s),l={kernelName:r.Rsqrt,backendName:"cpu",kernelFunc:o}},54589:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(46040);function a(e,t,n,a,i,s,o,l,u,c){let h=e.values,d=t.values;if(0===a)return(0,r.buffer)(n,t.dtype);let p=u instanceof r.TensorBuffer?u:(0,r.buffer)([a/i,i],t.dtype);"string"==typeof u?p.values.fill(u):"number"==typeof u?p.values.fill(u):"boolean"==typeof u&&p.values.fill(+u);for(let e=0;e<s;e++){let r=[],s=0;for(let t=0;t<o;t++){let n=h[e*o+t];r.push(n),s+=n*l[t]}if(s<0||s>=a/i)throw Error(`Invalid indices: ${r} does not index into ${n}`);for(let n=0;n<i;n++)c?p.values[s*i+n]+=d[e*i+n]:p.values[s*i+n]=0===t.rank?d[0]:d[e*i+n]}return p}},94559:function(e,t,n){n.d(t,{BP:function(){return l},VY:function(){return s},XD:function(){return o}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>1/(1+Math.exp(-e))),o=(0,i.A)(r.Sigmoid,e=>1/(1+Math.exp(-e))),l={kernelName:r.Sigmoid,backendName:"cpu",kernelFunc:o}},12092:function(e,t,n){n.d(t,{C6:function(){return o},rT:function(){return i},tP:function(){return s}});var r=n(46040),a=n(43343);function i(e,t,n,a,i){let s=r.slice_util.isSliceContinous(a,t,n),o=r.util.sizeFromShape(n),l=r.util.computeStrides(a);if(s){let n=r.slice_util.computeFlatOffset(t,l);return"string"===i?e.slice(n,n+o):e.subarray(n,n+o)}let u="string"===i?r.backend_util.fromUint8ToStringArray(e):e,c=(0,r.buffer)(a,i,u),h=(0,r.buffer)(n,i);for(let e=0;e<h.size;++e){let n=h.indexToLoc(e),r=n.map((e,n)=>e+t[n]);h.set(c.get(...r),...n)}return"string"===i?r.backend_util.fromStringArrayToUint8(h.values):h.values}function s(e){let{inputs:t,backend:n,attrs:s}=e,{x:o}=t,{begin:l,size:u}=s;(0,a.H)(o,"slice");let[c,h]=r.slice_util.parseSliceParams(o,l,u);r.slice_util.assertParamsValid(o,c,h);let d=i(n.data.get(o.dataId).values,c,h,o.shape,o.dtype);return n.makeTensorInfo(h,o.dtype,d)}let o={kernelName:r.Slice,backendName:"cpu",kernelFunc:s}},48560:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(46040);function a(e,t,n,a,i,s,o){let l=t[0],u=s[0],c=Array(u),h=Array(l),d=t[1];if(0===u){if(0!==l)throw Error(r.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(l));return[r.util.getArrayFromDType(n,0),[0,d],r.util.getArrayFromDType(i,0),c,h]}let p=!0,f=0,m=Array(u).fill(0);for(let t=0;t<l;++t){let n=e[t*d];if(n<0)throw Error(r.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(t,n));if(n>=u)throw Error(r.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(t,n,u));++m[n],p=p&&n>=f,f=n}let g=!0;for(let e=0;e<u;++e){let t=0===m[e];c[e]=t,g=g&&!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(g&&p){for(let e=0;e<l;++e)h[e]=e;return[e,[l,d],a,c,h]}{let t=m[u-1],s=r.util.getArrayFromDType(n,t*d),p=r.util.getArrayFromDType(i,t),f=Array(u).fill(0);for(let t=0;t<l;++t){let n=e[t*d],r=f[n],i=(0===n?0:m[n-1])+r;f[n]++;for(let n=0;n<d;++n)s[i*d+n]=e[t*d+n];p[i]=a[t],h[t]=i}for(let e=0;e<u;++e)if(0===f[e]){let t=0===e?0:m[e-1];s[t*d+0]=e;for(let e=1;e<d;++e)s[t*d+e]=0;p[t]=o}return[s,[t,d],p,c,h]}}},38668:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(46040);function a(e,t,n,a,i){let s=r.util.sizeFromShape(a),o=t[0],l=i.length,u=[],c=1,h=-1;for(let e=0;e<l;++e){let t=i[e];if(-1===t){if(-1!==h)throw Error(r.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(h,e));h=e,u.push(1)}else{if(t<0)throw Error(r.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(e,t));c*=t,u.push(t)}}if(-1!==h){if(c<=0)throw Error(r.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let e=Math.trunc(s/c);if(c*e!==s)throw Error(r.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(a,u));u[h]=e}if(r.util.sizeFromShape(u)!==s)throw Error(r.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(a,u));let d=a.length,p=[];if(d>0){p[d-1]=1;for(let e=d-2;e>=0;--e)p[e]=p[e+1]*a[e+1]}let f=[];if(l>0){f[l-1]=1;for(let e=l-2;e>=0;--e)f[e]=f[e+1]*u[e+1]}let m=r.util.getArrayFromDType(n,o*l);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*p[r];for(let e=0;e<l;++e)m[t*l+e]=Math.trunc(n/f[e]),n%=f[e]}return[m,[o,l],u]}},11017:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(46040);function a(e,t,n,a,i,s=!1,o=0){let l=a.length,u=[t[0],e.length/t[0]],c=u[1],h=l>0?i[l-1]+1:0;if(h<0)throw Error(r.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let d=t.slice();d[0]=h;let p=d.reduce((e,t)=>e*t,1),f=r.util.getArrayFromDType(n,p);if(0===l)return h>0&&f.fill(o),[f,d];if(h<=0)throw Error(r.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=0,g=1,x=0,b=i[0];for(;;){let t=0;if(g<l){if(b===(t=i[g])){++g;continue}if(b>=t)throw Error(r.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(b<0||b>=h)throw Error(r.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b,h));b>x&&f.fill(o,x*c,b*c);for(let t=m;t<g;++t){let n=a[t];if(n<0||n>=u[0])throw Error(r.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(t,a[t],u[0]));for(let t=0;t<c;t++)f[b*c+t]+=e[n*c+t]}if(s)for(let e=0;e<c;e++)f[b*c+e]/=g-m;if(m=g,++g,x=b+1,b=t,g>l)break}return x<h&&f.fill(o,x*c,h*c),[f,d]}},68747:function(e,t,n){n.d(t,{cz:function(){return l},zT:function(){return s}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)(e=>Math.sqrt(e)),o=(0,i.A)(r.Sqrt,e=>Math.sqrt(e)),l={kernelName:r.Sqrt,backendName:"cpu",kernelFunc:o}},41039:function(e,t,n){n.d(t,{Hz:function(){return s},MS:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>{let n=e-t;return n*n}),o=(0,i.j)(r.SquaredDifference,s),l={kernelName:r.SquaredDifference,backendName:"cpu",kernelFunc:o}},66830:function(e,t,n){n.d(t,{P:function(){return s},j:function(){return l}});var r=n(46040),a=n(63808),i=n(18659);let s=(0,a.a)((e,t)=>{let{pattern:n,replaceGlobal:r,rewrite:a}=t;return e.replace(new RegExp(n,r?"g":""),a)}),o=(0,i.O)(r.StaticRegexReplace,s),l={kernelName:r.StaticRegexReplace,backendName:"cpu",kernelFunc:o}},67275:function(e,t,n){n.d(t,{t:function(){return a}});var r=n(46040);function a(e,t,n,a){let i=(0,r.buffer)(e,t.dtype);for(let e=0;e<i.size;e++){let r=i.indexToLoc(e),s=Array(r.length);for(let e=0;e<s.length;e++)s[e]=r[e]*n[e]+a[e];i.set(t.get(...s),...r)}return i}},37913:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(46040);class a{constructor(e,t,n,a,i,s){this.separator=r.util.encodeString(e),this.nGramWidths=t,this.leftPad=r.util.encodeString(n),this.rightPad=r.util.encodeString(a),this.padWidth=i,this.preserveShort=s}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){return Math.max(0,e+2*this.getPadWidth(t)-t+1)}createNGrams(e,t,n,r,a,i){for(let s=0;s<a;++s){let o;let l=this.getPadWidth(i),u=Math.max(0,l-s),c=Math.max(0,l-(a-(s+1))),h=i-(u+c),d=t+(u>0?0:s-l);o=0+u*this.leftPad.length;for(let t=0;t<h;++t)o+=e[d+t].length;o+=c*this.rightPad.length+(u+c+h-1)*this.separator.length,n[r+s]=new Uint8Array(o);let p=n[r+s],f=0,m=e=>e.forEach(e=>p[f++]=e);for(let e=0;e<u;++e)m(this.leftPad),m(this.separator);for(let t=0;t<h-1;++t)m(e[d+t]),m(this.separator);if(h>0){m(e[d+h-1]);for(let e=0;e<c;++e)m(this.separator),m(this.rightPad)}else{for(let e=0;e<c-1;++e)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(e,t){let n=e.length,a=t.length;if(a>0){let e=t[0];if(0!==e)throw Error(`First split value must be 0, got ${e}`);for(let r=1;r<a;++r){let a=t[r]>=e;if(!(a=a&&t[r]<=n))throw Error(`Invalid split value ${t[r]}, must be in [${e}, ${n}]`);e=t[r]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=a-1,s=r.util.getArrayFromDType("int32",a);if(0===n||0===a){let e=Array(n);for(let e=0;e<=i;++e)s[e]=0;return[e,s]}s[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&0===r&&(r=1),s[e]=s[e-1]+r}let o=Array(s[i]);for(let n=0;n<i;++n){let r=t[n],a=s[n];if(this.nGramWidths.forEach(i=>{let s=t[n+1]-t[n],l=this.getNumNGrams(s,i);this.createNGrams(e,r,o,a,l,i),a+=l}),this.preserveShort&&a===s[n]){let i=t[n+1]-t[n];if(0===i)continue;let s=i+2*this.padWidth;this.createNGrams(e,r,o,a,1,s)}}return[o,s]}}function i(e,t,n,r,i,s,o,l){return new a(n,r,i,s,o,l).compute(e,t)}},64116:function(e,t,n){n.d(t,{Q:function(){return a}});var r=n(46040);function a(e,t,n){let a=e.length,i=[],s=0,o=0,l=Array(a);for(let r=0;r<a;++r){let a=i.length;!function(e,t,n,r){if(!e.length)return;if(0===t.length){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(1===t.length){let a=t[0],i=e.indexOf(a);for(;-1!==i;){let t=e.subarray(0,i);n&&0===t.length||r.push(t),i=(e=e.subarray(i+1)).indexOf(a)}n&&0===e.length||r.push(e);return}let a=0;for(let i=0;i<e.length+1;i++)if(i===e.length||-1!==t.indexOf(e[i])){let t=e.subarray(a,i);n&&0===t.length||r.push(t),a=i+1}}(e[r],t,n,i);let u=i.length-a;l[r]=u,s+=u,o=Math.max(o,u)}let u=r.util.getArrayFromDType("int32",2*s),c=Array(s),h=[a,o],d=0;for(let e=0;e<a;++e)for(let t=0;t<l[e];++t)u[2*d]=e,u[2*d+1]=t,c[d]=i[d],++d;return[u,c,h]}},76989:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(46040);function a(e,t){let n=r.util.getArrayFromDType("int32",e.length);for(let a=0;a<e.length;++a)n[a]=r.util.fingerPrint64(e[a]).modulo(t).getLowBitsUnsigned();return n}},52199:function(e,t,n){n.d(t,{GR:function(){return u},VY:function(){return s},lu:function(){return l}});var r=n(46040),a=n(80438),i=n(98150);let s=(0,a.b)((e,t)=>e-t),o=(0,i.H)((e,t,n,r)=>({real:e-n,imag:t-r})),l=(0,i.j)(r.Sub,s,o),u={kernelName:r.Sub,backendName:"cpu",kernelFunc:l}},20868:function(e,t,n){n.d(t,{R:function(){return a}});var r=n(46040);function a(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let a=(0,r.buffer)(n,e.dtype);for(let t=0;t<a.values.length;++t){let n=a.indexToLoc(t),r=Array(e.rank);for(let t=0;t<r.length;t++)r[t]=n[t]%e.shape[t];let i=e.locToIndex(r);a.values[t]=e.values[i]}return a}},40005:function(e,t,n){n.d(t,{W:function(){return i}});var r=n(46040);let a=(e,t)=>{let n=t.value-e.value;return 0===n?e.index-t.index:n};function i(e,t,n,i,s){let o=t[t.length-1],[l,u]=[e.length/o,o],c=r.util.getTypedArrayFromDType(n,l*i),h=r.util.getTypedArrayFromDType("int32",l*i);for(let t=0;t<l;t++){let n=t*u,o=e.subarray(n,n+u),l=Array(o.length);o.forEach((e,t)=>l[t]={value:e,index:t}),i<l.length&&(function e(t,n,i=0,s=t.length-1){for(;s>i;){if(s-i>600){let r=s-i+1,a=n-i+1,o=Math.log(r),l=.5*Math.exp(2*o/3),u=.5*Math.sqrt(o*l*(r-l)/r)*Math.sign(a-r/2),c=Math.max(i,Math.floor(n-a*l/r+u)),h=Math.min(s,Math.floor(n+(r-a)*l/r+u));e(t,n,c,h)}let o=t[n],l=i,u=s;for(r.util.swap(t,i,n),a(t[s],o)>0&&r.util.swap(t,i,s);l<u;){for(r.util.swap(t,l,u),l++,u--;0>a(t[l],o);)l+=1;for(;a(t[u],o)>0;)u-=1}0===a(t[i],o)?r.util.swap(t,i,u):(u+=1,r.util.swap(t,u,s)),u<=n&&(i=u+1),n<=u&&(s=u-1)}}(l,i),l=l.slice(0,i)),s&&l.sort(a);let d=t*i,p=c.subarray(d,d+i),f=h.subarray(d,d+i);for(let e=0;e<i;e++)p[e]=l[e].value,f[e]=l[e].index}let d=t.slice();return d[d.length-1]=i,[(0,r.buffer)(d,n,c),(0,r.buffer)(d,"int32",h)]}},76086:function(e,t,n){n.d(t,{b:function(){return o},p:function(){return s}});var r=n(46040),a=n(43343),i=n(26339);function s(e){let{inputs:t,attrs:n,backend:r}=e,{x:s}=t,{perm:o}=n;(0,a.H)(s,"transpose");let l=Array(s.shape.length);for(let e=0;e<l.length;e++)l[e]=s.shape[o[e]];let u=r.data.get(s.dataId).values,c=(0,i.H)(u,s.shape,s.dtype,o,l);return{dataId:r.write(c,l,s.dtype),shape:l,dtype:s.dtype}}let o={kernelName:r.Transpose,backendName:"cpu",kernelFunc:s}},26339:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(46040);function a(e,t,n,a,i){let s=t.length,o=r.util.sizeFromShape(t),l=r.util.computeStrides(t),u=r.util.computeStrides(i),c=r.util.getTypedArrayFromDType(n,r.util.sizeFromShape(i));for(let t=0;t<o;++t){let n=r.util.indexToLoc(t,s,l),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[a[e]];c[r.util.locToIndex(i,s,u)]=e[t]}return c}},54430:function(e,t,n){n.d(t,{S:function(){return a}});var r=n(46040);function a(e,t,n,a){let i=r.util.parseAxisParam(t,n)[0],s=[1,n[0],1];for(let e=0;e<i;e++)s[0]*=n[e];s[1]=n[i];for(let e=i+1;e<n.length;e++)s[2]*=n[e];let o=new Map,l=new Int32Array(n[i]),u=new r.TensorBuffer(s,a,e),c=[],h=1===s[0]&&1===s[2];for(let t=0;t<n[i];t++){let n;if(h)n=e[t].toString();else{let e=[];for(let n=0;n<s[0];n++)for(let r=0;r<s[2];r++)e.push(u.get(n,t,r));n=e.join(",")}let r=o.get(n);if(null!=r)l[t]=r;else{let e=o.size;o.set(n,e),l[t]=e,c.push(t)}}let d=s.slice();d[1]=o.size;let p=new r.TensorBuffer(d,a);c.forEach((e,t)=>{for(let n=0;n<s[0];n++)for(let r=0;r<s[2];r++)p.set(u.get(n,e,r),n,t,r)});let f=n.slice();return f[i]=d[1],{outputValues:p.values,outputShape:f,indices:l}}},11163:function(e,t,n){n.r(t),n.d(t,{addImpl:function(){return a.EH},bincountImpl:function(){return i.W},bincountReduceImpl:function(){return i.i},bitwiseAndImpl:function(){return s.nv},castImpl:function(){return o.sJ},ceilImpl:function(){return l.__},concatImpl:function(){return u.j},equalImpl:function(){return c.tW},expImpl:function(){return h.Ro},expm1Impl:function(){return d.OF},floorDivImpl:function(){return f.JP},floorImpl:function(){return p.r6},gatherNdImpl:function(){return m.m},gatherV2Impl:function(){return g.i},greaterEqualImpl:function(){return b.HL},greaterImpl:function(){return x.o},lessEqualImpl:function(){return v.lx},lessImpl:function(){return y.rO},linSpaceImpl:function(){return k.b},logImpl:function(){return I.vX},maxImpl:function(){return C.B},maximumImpl:function(){return w.wS},minimumImpl:function(){return S.vP},multiplyImpl:function(){return N.$3},negImpl:function(){return T.uC},notEqualImpl:function(){return A.Gj},prodImpl:function(){return $.Qg},raggedGatherImpl:function(){return E.c},raggedRangeImpl:function(){return F.S},raggedTensorToTensorImpl:function(){return R.p},rangeImpl:function(){return D.b},rsqrtImpl:function(){return _.zd},scatterImpl:function(){return O.N},sigmoidImpl:function(){return M.VY},simpleAbsImpl:function(){return r.bk},sliceImpl:function(){return z.rT},sparseFillEmptyRowsImpl:function(){return L.c},sparseReshapeImpl:function(){return P.U},sparseSegmentReductionImpl:function(){return B.V},sqrtImpl:function(){return W.zT},squaredDifferenceImpl:function(){return V.Hz},staticRegexReplaceImpl:function(){return G.P},stridedSliceImpl:function(){return U.t},stringNGramsImpl:function(){return H.A},stringSplitImpl:function(){return j.Q},stringToHashBucketFastImpl:function(){return X.h},subImpl:function(){return q.VY},tileImpl:function(){return K.R},topKImpl:function(){return Q.W},transposeImpl:function(){return Y.H},uniqueImpl:function(){return Z.S}});var r=n(50652),a=n(7152),i=n(91299),s=n(44876),o=n(92432),l=n(97369),u=n(7851),c=n(10545),h=n(58275),d=n(85591),p=n(23813),f=n(98951),m=n(69169),g=n(53964),x=n(90054),b=n(66450),y=n(94626),v=n(79776),k=n(12950),I=n(90290),C=n(42529),w=n(34536),S=n(60168),N=n(11247),T=n(40358),A=n(40298),$=n(18787),E=n(48153),F=n(83230),R=n(30792),D=n(24971),_=n(23894),O=n(54589),M=n(94559),z=n(12092),L=n(48560),P=n(38668),B=n(11017),W=n(68747),V=n(41039),G=n(66830),U=n(67275),H=n(37913),j=n(64116),X=n(76989),q=n(52199),K=n(20868),Q=n(40005),Y=n(26339),Z=n(54430)},80438:function(e,t,n){n.d(t,{b:function(){return a}});var r=n(46040);function a(e){return(t,n,a,i,s)=>{let o=r.backend_util.assertAndGetBroadcastShape(t,n),l=o.length,u=r.util.computeStrides(o),c=r.util.sizeFromShape(o),h=r.util.getTypedArrayFromDType(s,c),d=t.length,p=n.length,f=r.util.computeStrides(t),m=r.util.computeStrides(n),g=r.backend_util.getBroadcastDims(t,o),x=r.backend_util.getBroadcastDims(n,o);if(g.length+x.length===0)for(let t=0;t<h.length;++t)h[t]=e(a[t%a.length],i[t%i.length]);else for(let t=0;t<h.length;++t){let n=r.util.indexToLoc(t,l,u),s=n.slice(-d);g.forEach(e=>s[e]=0);let o=r.util.locToIndex(s,d,f),c=n.slice(-p);x.forEach(e=>c[e]=0);let b=r.util.locToIndex(c,p,m);h[t]=e(a[o],i[b])}return[h,o]}}},98150:function(e,t,n){n.d(t,{H:function(){return l},j:function(){return o}});var r=n(46040),a=n(43343),i=n(92432),s=n(30926);function o(e,t,n,o){return null==n?({inputs:n,backend:i})=>{let{a:s,b:l}=n;(0,a.H)([s,l],e);let u=i.data.get(s.dataId).values,c=i.data.get(l.dataId).values,h="string"===s.dtype?r.backend_util.fromUint8ToStringArray(u):u,d="string"===s.dtype?r.backend_util.fromUint8ToStringArray(c):c,p=o||s.dtype,[f,m]=t(s.shape,l.shape,h,d,p);return i.makeTensorInfo(m,p,f)}:({inputs:e,backend:r})=>{let{a,b:l}=e;if("complex64"===a.dtype||"complex64"===l.dtype){let e=(0,i.pj)({inputs:{x:a},backend:r,attrs:{dtype:"complex64"}}),t=r.data.get(e.dataId),o=t.complexTensorInfos.real,u=t.complexTensorInfos.imag,c=r.data.get(o.dataId).values,h=r.data.get(u.dataId).values,d=(0,i.pj)({inputs:{x:l},backend:r,attrs:{dtype:"complex64"}}),p=r.data.get(d.dataId),f=p.complexTensorInfos.real,m=p.complexTensorInfos.imag,g=r.data.get(f.dataId).values,x=r.data.get(m.dataId).values,[b,y,v]=n(a.shape,l.shape,c,h,g,x),k=r.makeTensorInfo(v,"float32",b),I=r.makeTensorInfo(v,"float32",y),C=(0,s.P)({inputs:{real:k,imag:I},backend:r});return r.disposeIntermediateTensorInfo(e),r.disposeIntermediateTensorInfo(d),r.disposeIntermediateTensorInfo(k),r.disposeIntermediateTensorInfo(I),C}{let e=r.data.get(a.dataId).values,n=r.data.get(l.dataId).values,i=o||a.dtype,[s,u]=t(a.shape,l.shape,e,n,i);return r.makeTensorInfo(u,i,s)}}}function l(e){return(t,n,a,i,s,o)=>{let l=r.backend_util.assertAndGetBroadcastShape(t,n),u=r.util.sizeFromShape(l),c=l.length,h=r.util.computeStrides(l),d=r.util.getTypedArrayFromDType("float32",u),p=r.util.getTypedArrayFromDType("float32",u),f=r.backend_util.getBroadcastDims(t,l),m=r.backend_util.getBroadcastDims(n,l),g=r.backend_util.mergeRealAndImagArrays(a,i),x=r.backend_util.mergeRealAndImagArrays(s,o),b=t.length,y=r.util.computeStrides(t),v=n.length,k=r.util.computeStrides(n);if(f.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%g.length,r=t%x.length,a=e(g[2*n],g[2*n+1],x[2*r],x[2*r+1]);d[t]=a.real,p[t]=a.imag}else for(let t=0;t<d.length;t++){let n=r.util.indexToLoc(t,c,h),a=n.slice(-b);f.forEach(e=>a[e]=0);let i=r.util.locToIndex(a,b,y),s=n.slice(-v);m.forEach(e=>s[e]=0);let o=r.util.locToIndex(s,v,k),l=e(g[2*i],g[2*i+1],x[2*o],x[2*o+1]);d[t]=l.real,p[t]=l.imag}return[d,p,l]}}},63808:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(46040);function a(e){return(t,n,a)=>{let i=r.util.getArrayFromDType(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],a);return i}}},18659:function(e,t,n){n.d(t,{A:function(){return s},O:function(){return o}});var r=n(46040),a=n(43343),i=n(63808);function s(e,t,n){return o(e,(0,i.a)(t),n)}function o(e,t,n){return({inputs:i,attrs:s,backend:o})=>{let l;let{x:u}=i;(0,a.H)(u,e);let c=o.data.get(u.dataId).values;if("string"===u.dtype){if(!Array.isArray(c))throw Error("String tensor's value was not an instance of Array");l=r.backend_util.fromUint8ToStringArray(c)}else l=c;let h=n||u.dtype,d=t(l,h,s);return o.makeTensorInfo(u.shape,h,d)}}},82571:function(e,t,n){n.d(t,{l:function(){return function e(t,n,i="float32"){if("complex64"===i){let r=e(t,n,"float32"),i=e(t,n,"float32");return(0,a.P)({inputs:{real:r,imag:i},backend:t})}let s=r.util.makeZerosTypedArray(r.util.sizeFromShape(n),i);return t.makeTensorInfo(n,i,s)}}});var r=n(46040),a=n(30926)},90756:function(e,t,n){n.d(t,{jl:function(){return function e(t,n){if(!(t in a)||null!=n){let e=function(e,t){if(1!==e&&2!==e)throw Error("Cannot get WebGL rendering context, WebGL is disabled.");let n=null==t?function(e){if(!(0,r.env)().getBool("IS_SAFARI")&&"undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw Error("Cannot create a canvas in this context")}(e):t;return(n.addEventListener("webglcontextlost",t=>{t.preventDefault(),delete a[e]},!1),(0,r.env)().getBool("SOFTWARE_WEBGL_ENABLED")&&(i.failIfMajorPerformanceCaveat=!1),1===e)?n.getContext("webgl",i)||n.getContext("experimental-webgl",i):n.getContext("webgl2",i)}(t,n);if(null===e)return console.log("Could not get context for WebGL version",t),null;a[t]=e}let s=a[t];return null==s||s.isContextLost()?(delete a[t],e(t)):(s.disable(s.DEPTH_TEST),s.disable(s.STENCIL_TEST),s.disable(s.BLEND),s.disable(s.DITHER),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SAMPLE_COVERAGE),s.enable(s.SCISSOR_TEST),s.enable(s.CULL_FACE),s.cullFace(s.BACK),a[t])}},nd:function(){return s}});var r=n(46040);let a={},i={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function s(e,t){a[e]=t}},77615:function(e,t,n){n.d(t,{_:function(){return o}});var r=n(73821),a=n(70943),i=n(70445),s=n(77275);class o{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=s.m1.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,r.A)();this.outputShape=e,this.enableShapeUniforms=(0,a.C9)(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?i.Kn(["r","c","d"],e):i.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}},17325:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(73821),a=n(70943),i=n(70445),s=n(77275);class o{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=s.m1.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=(0,r.A)();this.outputShape=e,this.enableShapeUniforms=(0,a.C9)(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?i.Kn(["r","c","d"],e):i.RW(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}},1206:function(e,t,n){n.d(t,{q:function(){return s}});var r=n(73821),a=n(70445),i=n(77275);class s{constructor(e){this.variableNames=["A"],this.outTexUsage=i.v2.DOWNLOAD;let t=(0,r.A)();this.outputShape=e,this.userCode=`
      ${a.ye}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}},48840:function(e,t,n){n.d(t,{d:function(){return s}});var r=n(73821),a=n(70445),i=n(77275);class s{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=i.v2.DOWNLOAD;let t=(0,r.A)();this.outputShape=e,this.userCode=`
      ${a.ye}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}},98155:function(e,t,n){n.d(t,{F:function(){return o}});var r=n(73821),a=n(70943),i=n(70445);let s={R:0,G:1,B:2,A:3};class o{constructor(e,t=!1,n="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=(0,r.A)();this.outputShape=e,this.enableShapeUniforms=(0,a.C9)(this.outputShape.length);let l="result";t&&(l="floor(result * 255. + 0.5)");let u="";for(let e=0;e<n.length;e++){let t=n[e];u+=`
          if(offset == ${e}) {
            result = values[${s[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?i.nc():i.ku(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${u}
        }
        ${o.output} = vec4(${l}, 0., 0., 0.);
      }
    `}}},16545:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(73821),a=n(70943),i=n(70445);class s{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=(0,r.A)();this.outputShape=e,this.enableShapeUniforms=(0,a.C9)(this.outputShape.length);let s="",o="result";t&&(o="floor(result * 255. + 0.5)");for(let t=0;t<=1;t++)for(let r=0;r<=1;r++){let a=2*t+r;s+=`
          localCoords = coords;
          if(localCoords[2] + ${r} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${r};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?i.nc():i.ku(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${s}

          ${n.output} = ${o};
        }
    `}}},32156:function(e,t,n){var r=n(46040),a=n(3326);let i=(0,r.env)();i.registerFlag("HAS_WEBGL",()=>i.getNumber("WEBGL_VERSION")>0),i.registerFlag("WEBGL_VERSION",()=>(0,a.isWebGLVersionEnabled)(2)?2:(0,a.isWebGLVersionEnabled)(1)?1:0),i.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1),i.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>2===i.get("WEBGL_VERSION")),i.registerFlag("WEBGL_CPU_FORWARD",()=>!0),i.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1),i.registerFlag("WEBGL_PACK",()=>i.getBool("HAS_WEBGL")),i.registerFlag("WEBGL_PACK_NORMALIZATION",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_CLIP",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_REDUCE",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_LAZILY_UNPACK",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_CONV_IM2COL",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>i.getBool("WEBGL_PACK")),i.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>(0,a.getWebGLMaxTextureSize)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>(0,a.getMaxTexturesInShader)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let e=i.getNumber("WEBGL_VERSION");return 0===e?0:(0,a.getWebGLDisjointQueryTimerVersion)(e)}),i.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>i.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!r.device_util.isMobile()),i.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>(0,a.isCapableOfRenderingToFloatTexture)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>!i.getBool("WEBGL_FORCE_F16_TEXTURES")&&i.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")),i.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>(0,a.isDownloadFloatTextureEnabled)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_FENCE_API_ENABLED",()=>(0,a.isWebGLFenceEnabled)(i.getNumber("WEBGL_VERSION"))),i.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>i.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0),i.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),i.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>r.device_util.isMobile()?1:-1,e=>{if("number"!=typeof e)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&-1!==e)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),i.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128),i.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1),i.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5),i.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128),i.registerFlag("WEBGL_EXP_CONV",()=>!1),i.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>i.getBool("IS_TEST")),i.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0),i.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1),i.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1),i.registerFlag("ENGINE_COMPILE_ONLY",()=>!1)},73821:function(e,t,n){n.d(t,{A:function(){return a}});var r=n(46040);function a(){let e,t,n,a,i,s,o,l,u,c;return 2===(0,r.env)().getNumber("WEBGL_VERSION")?(e="#version 300 es",t="in",n="out",a="in",i="texture",s="outputColor",o="out vec4 outputColor;",l=(0,r.env)().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",n="varying",a="varying",i="texture2D",s="gl_FragColor",o="",l=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:a,texture2D:i,output:s,defineOutput:o,defineSpecialNaN:l,defineSpecialInf:u,defineRound:c}}},37394:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(46040),a=n(90756),i=n(28657),s=n(77275),o=n(3326);class l{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=(0,r.env)().getNumber("WEBGL_VERSION");if(null!=e?(this.gl=e,(0,a.nd)(t,e)):this.gl=(0,a.jl)(t),e=this.gl,2===(0,r.env)().getNumber("WEBGL_VERSION")){let t=e;this.createVertexArray=()=>o.callAndCheck(t,()=>t.createVertexArray()),this.bindVertexArray=e=>o.callAndCheck(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>o.callAndCheck(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>o.callAndCheck(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(null!=e){let t=e.getExtension("OES_vertex_array_object");if(null==t)throw Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>o.callAndCheck(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>o.callAndCheck(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>o.callAndCheck(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>o.callAndCheck(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n="WEBGL_color_buffer_float",l="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,r.env)().getNumber("WEBGL_VERSION")){let e="OES_texture_half_float";if(this.textureFloatExtension=o.getExtensionOrThrow(this.gl,"OES_texture_float"),o.hasExtension(this.gl,e))this.textureHalfFloatExtension=o.getExtensionOrThrow(this.gl,e);else if((0,r.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),o.hasExtension(this.gl,l))this.colorBufferHalfFloatExtension=o.getExtensionOrThrow(this.gl,l);else if((0,r.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",o.hasExtension(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(o.hasExtension(this.gl,l))this.colorBufferHalfFloatExtension=this.gl.getExtension(l);else throw Error("GL context does not support color renderable floats");this.vertexBuffer=i.createVertexBuffer(this.gl),this.indexBuffer=i.createIndexBuffer(this.gl),this.framebuffer=o.createFramebuffer(this.gl),this.textureConfig=s.Sq(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,r.env)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;o.callAndCheck(e,()=>e.finish()),o.callAndCheck(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),o.callAndCheck(e,()=>e.deleteFramebuffer(this.framebuffer)),o.callAndCheck(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),o.callAndCheck(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),o.callAndCheck(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),i.createFloat32MatrixTexture(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),i.createFloat16MatrixTexture(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),i.createUnsignedBytesMatrixTexture(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),i.uploadPixelDataToTexture(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),i.uploadDenseMatrixToTexture(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),i.createFloat16PackedMatrixTexture(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),i.createPackedMatrixTexture(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(o.unbindColorTextureFromFramebuffer(this.gl,this.framebuffer),this.outputTexture=null),o.callAndCheck(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>i.downloadByteEncodedFloatMatrixFromOutputTexture(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,a,s){return i.downloadPackedMatrixFromBuffer(this.gl,e,t,n,r,a,s,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return i.downloadFloat32MatrixFromBuffer(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=i.createBufferFromOutputTexture(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if((0,r.env)().getBool("WEBGL_FENCE_API_ENABLED")){let r=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let t=e.clientWaitSync(r,0,0);return t===e.ALREADY_SIGNALED||t===e.CONDITION_SATISFIED},t=r}else(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>i.downloadMatrixFromPackedOutputTexture(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;null==this.vertexShader&&(this.vertexShader=i.createVertexShader(t));let n=o.createProgram(t);o.callAndCheck(t,()=>t.attachShader(n,this.vertexShader)),o.callAndCheck(t,()=>t.attachShader(n,e)),o.linkProgram(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&o.validateProgram(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;o.callAndCheck(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),i.bindVertexProgramAttributeStreams(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&(o.callAndCheck(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&this.debug&&o.validateProgram(this.gl,this.program),o.callAndCheck(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return(this.throwIfDisposed(),n)?o.getProgramUniformLocationOrThrow(this.gl,e,t):o.getProgramUniformLocation(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),o.callAndCheck(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),o.bindTextureToProgramUniformSampler(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,a]=s.qe(t,n);this.setOutputMatrixTextureDriver(e,r,a)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&o.validateProgram(this.gl,this.program),o.validateFramebuffer(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;this.debug&&(console.assert(this.getVertexArray()===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()),o.callAndCheck(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),o.callAndCheck(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=o.getExtensionOrThrow(this.gl,2===(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(2===(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await r.util.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,(0,r.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(0===t)return null;if(2===t){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(0===t)return!0;if(2===t){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),r&&!this.disjoint}{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=function(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){let n;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||("setTimeoutCustom"in(0,r.env)().platform&&(n=(0,r.env)().platform.setTimeoutCustom.bind((0,r.env)().platform)),r.util.repeatedTry(()=>(this.pollItems(),0===this.itemsToPoll.length),()=>0,null,n))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),o.bindColorTextureToFramebuffer(this.gl,e,this.framebuffer),this.debug&&o.validateFramebuffer(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(o.bindColorTextureToFramebuffer(this.gl,this.outputTexture,this.framebuffer),this.debug&&o.validateFramebuffer(this.gl)):o.unbindColorTextureFromFramebuffer(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;o.bindColorTextureToFramebuffer(r,e,this.framebuffer),this.debug&&o.validateFramebuffer(r),this.outputTexture=e,o.callAndCheck(r,()=>r.viewport(0,0,t,n)),o.callAndCheck(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),o.callAndCheck(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw Error("No GPU program is currently set.")}}},70943:function(e,t,n){n.d(t,{C9:function(){return h},IJ:function(){return s},Yv:function(){return o},_s:function(){return u},mi:function(){return c}});var r=n(46040),a=n(89201),i=n(3326);function s(e,t,n,s){let l=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),u=l.map(e=>e.shapeInfo),c={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},h=a.Vm(l,c,t),d=(0,i.createFragmentShader)(e.gl,h),p=e.createProgram(d);return(0,r.env)().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:d,source:h,webGLProgram:p,inShapeInfos:u,outShapeInfo:c,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(p),Object.assign({program:t,fragmentShader:d,source:h,webGLProgram:p,inShapeInfos:u,outShapeInfo:c},o(e,t,p)))}function o(e,t,n){let a,i,s;let o=[],l=[],u=null,c=null;for(let a of(c=e.getUniformLocation(n,"NAN",!1),1===(0,r.env)().getNumber("WEBGL_VERSION")&&(u=e.getUniformLocation(n,"INFINITY",!1)),t.variableNames)){let r={name:a,uniform:e.getUniformLocation(n,a,!1),offset:e.getUniformLocation(n,`offset${a}`,!1)};t.enableShapeUniforms&&(r.shape=e.getUniformLocation(n,`${a}Shape`,!1),r.texShape=e.getUniformLocation(n,`${a}TexShape`,!1)),o.push(r)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,"outShape",!1),s=e.getUniformLocation(n,"outShapeStrides",!1),i=e.getUniformLocation(n,"outTexShape",!1)),t.customUniforms)for(let r of t.customUniforms)l.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:o,customUniformLocations:l,infLoc:u,nanLoc:c,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:i}}function l(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let a=e.logicalShape,i=t[n],s=i.shape;if(!r.util.arraysEqual(a,s))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${a} and ${s} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,l=i.isUniform?null:i.texData.texShape;if(!r.util.arraysEqual(o,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${l} must match`)})}function u(e,t,n,i,s){t.program.enableShapeUniforms||(l(t.inShapeInfos,n),l([t.outShapeInfo],[i]));let o=i.texData.texture,u=i.texData.texShape;i.texData.isPacked?e.setOutputPackedMatrixTexture(o.texture,u[0],u[1]):e.setOutputMatrixTexture(o.texture,u[0],u[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),1===(0,r.env)().getNumber("WEBGL_VERSION")&&null!==t.infLoc&&e.gl.uniform1f(t.infLoc,1/0),null!==t.nanLoc&&e.gl.uniform1f(t.nanLoc,NaN);for(let i=0;i<n.length;++i){let s=n[i],{uniform:o,offset:l,shape:u,texShape:c}=t.variablesLocations[i];if(u){let{uniformShape:n}=a.Tt(t.program.packedInputs,s.shape,s.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(u,new Int32Array(n));break;case 2:e.gl.uniform2iv(u,new Int32Array(n));break;case 3:e.gl.uniform3iv(u,new Int32Array(n));break;case 4:e.gl.uniform4iv(u,new Int32Array(n))}}if(c&&e.gl.uniform2i(c,s.texData.texShape[0],s.texData.texShape[1]),null!=o){if(s.isUniform){if(2>r.util.sizeFromShape(s.shape))e.gl.uniform1f(o,s.uniformValues[0]);else{let t=s.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(o,t)}continue}null!=s.texData.slice&&null!=l&&e.gl.uniform1i(l,s.texData.slice.flatOffset),e.setInputMatrixTexture(s.texData.texture.texture,o,i)}}let c=t.outShapeLocation;if(c)switch(i.shape.length){case 1:e.gl.uniform1iv(c,new Int32Array(i.shape));break;case 2:e.gl.uniform2iv(c,new Int32Array(i.shape));break;case 3:e.gl.uniform3iv(c,new Int32Array(i.shape));break;case 4:e.gl.uniform4iv(c,new Int32Array(i.shape))}if(t.outShapeStridesLocation){let n=r.util.computeStrides(i.shape);switch(i.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n))}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,i.texData.texShape[0],i.texData.texShape[1]),t.program.customUniforms&&s)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],i=s[n];if("float"===r.type)e.gl.uniform1fv(a,i);else if("vec2"===r.type)e.gl.uniform2fv(a,i);else if("vec3"===r.type)e.gl.uniform3fv(a,i);else if("vec4"===r.type)e.gl.uniform4fv(a,i);else if("int"===r.type)e.gl.uniform1iv(a,i);else if("ivec2"===r.type)e.gl.uniform2iv(a,i);else if("ivec3"===r.type)e.gl.uniform3iv(a,i);else if("ivec4"===r.type)e.gl.uniform4iv(a,i);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function c(e,t,n){let i="";t.concat(n).forEach(t=>{let s=null!=t.texData&&null!=t.texData.slice&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let o=t.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:c}=a.Tt(e.packedInputs,t.shape,o),h="",d="",p="";if(1===u.length&&e.packedInputs){let e=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];h=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){let e=r.util.computeStrides(u);p=`${e[0]===o[1]}_${e[e.length-1]===o[1]}`}}else d=`${u[0]>1}_${u[1]>1}`;let f=t.shape.length,m=2===u.length&&r.util.arraysEqual(t.shape,o),g=1===r.util.sizeFromShape(t.shape),x=r.backend_util.getBroadcastDims(t.shape,n.shape),b=!e.packedInputs&&f===n.shape.length&&r.util.arraysEqual(o,n.texData.texShape),y=e.packedInputs||u.length>2?"":`${o[0]>1}_${o[1]>1}`;i+=`${f}_${b}_${l?c:""}_${u.length}_${g}_${x}_${m}_${h}_${d}_${p}_${y}_${s}`}else{let e=t.isUniform?"uniform":t.texData.texShape;i+=`${t.shape}_${e}_${s}`}});let s=e.userCode;return e.constructor.name+("_"+i+"_"+s)+`${(0,r.env)().getNumber("WEBGL_VERSION")}`}function h(e){return(0,r.env)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}},28657:function(e,t,n){n.r(t),n.d(t,{bindVertexProgramAttributeStreams:function(){return k},createBufferFromOutputTexture:function(){return w},createFloat16MatrixTexture:function(){return f},createFloat16PackedMatrixTexture:function(){return v},createFloat32MatrixTexture:function(){return d},createIndexBuffer:function(){return u},createPackedMatrixTexture:function(){return b},createUnsignedBytesMatrixTexture:function(){return g},createVertexBuffer:function(){return l},createVertexShader:function(){return o},downloadByteEncodedFloatMatrixFromOutputTexture:function(){return N},downloadFloat32MatrixFromBuffer:function(){return S},downloadMatrixFromPackedOutputTexture:function(){return A},downloadPackedMatrixFromBuffer:function(){return T},getInternalFormatForFloat16MatrixTexture:function(){return p},getInternalFormatForFloat16PackedMatrixTexture:function(){return y},getInternalFormatForFloat32MatrixTexture:function(){return h},getInternalFormatForPackedMatrixTexture:function(){return x},getInternalFormatForUnsignedBytesMatrixTexture:function(){return m},uploadDenseMatrixToTexture:function(){return I},uploadPixelDataToTexture:function(){return C}});var r=n(46040),a=n(73821),i=n(77275),s=n(3326);function o(e){let t=(0,a.A)(),n=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return s.createVertexShader(e,n)}function l(e){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return s.createStaticVertexBuffer(e,t)}function u(e){let t=new Uint16Array([0,1,2,2,1,3]);return s.createStaticIndexBuffer(e,t)}function c(e,t,n,a,i,o){s.validateTextureSize(t,n);let l=s.createTexture(e),u=e.TEXTURE_2D;return s.callAndCheck(e,()=>e.bindTexture(u,l)),s.callAndCheck(e,()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),s.callAndCheck(e,()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),s.callAndCheck(e,()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST)),s.callAndCheck(e,()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST)),1===(0,r.env)().getNumber("WEBGL_VERSION")?s.callAndCheck(e,()=>e.texImage2D(u,0,a,t,n,0,i,o,null)):s.callAndCheck(e,()=>e.texStorage2D(u,1,a,t,n)),s.callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:l,texShape:[n,t]}}function h(e){return e.internalFormatFloat}function d(e,t,n,r){let[a,s]=i.kk(t,n);return c(e,a,s,h(r),r.textureFormatFloat,e.FLOAT)}function p(e){return e.internalFormatHalfFloat}function f(e,t,n,r){let[a,s]=i.kk(t,n);return c(e,a,s,p(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function m(e){return e.downloadTextureFormat}function g(e,t,n,r){let[a,s]=i.kk(t,n);return c(e,a,s,m(r),e.RGBA,e.UNSIGNED_BYTE)}function x(e){return e.internalFormatPackedFloat}function b(e,t,n,r){let[a,s]=i.qe(t,n);return c(e,a,s,x(r),e.RGBA,e.FLOAT)}function y(e){return e.internalFormatPackedHalfFloat}function v(e,t,n,r){let[a,s]=i.qe(t,n);return c(e,a,s,y(r),e.RGBA,r.textureTypeHalfFloat)}function k(e,t,n){return s.callAndCheck(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),s.bindVertexBufferToProgramAttribute(e,t,"clipSpacePos",n,3,20,0)&&s.bindVertexBufferToProgramAttribute(e,t,"uv",n,2,20,12)}function I(e,t,n,a,i,o){let l,u,c;s.callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,t)),i instanceof Uint8Array?(l=new Uint8Array(n*a*4),u=e.UNSIGNED_BYTE,c=e.RGBA):(l=new Float32Array(n*a*4),u=e.FLOAT,c=o.internalFormatPackedFloat),l.set(i),2===(0,r.env)().getNumber("WEBGL_VERSION")?s.callAndCheck(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,a,e.RGBA,u,l)):s.callAndCheck(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,a,0,e.RGBA,u,l)),s.callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function C(e,t,n){s.callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?2===(0,r.env)().getNumber("WEBGL_VERSION")?s.callAndCheck(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):s.callAndCheck(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):2===(0,r.env)().getNumber("WEBGL_VERSION")?s.callAndCheck(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):s.callAndCheck(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),s.callAndCheck(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function w(e,t,n,r){let a=e.createBuffer();s.callAndCheck(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,a));let i=16*t*n;return s.callAndCheck(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,i,e.STREAM_READ)),s.callAndCheck(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),s.callAndCheck(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),a}function S(e,t,n){let r=new Float32Array(n);return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,r),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),r}function N(e,t,n,r){let[a,o]=i.kk(t,n),l=new Uint8Array(i.yb(t*n,4));return s.callAndCheck(e,()=>e.readPixels(0,0,a,o,r.downloadTextureFormat,e.UNSIGNED_BYTE,l)),new Float32Array(l.buffer)}function T(e,t,n,r,a,s,o,l){let u=new Float32Array(i.Se(s,o));return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,u),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),u}function A(e,t,n){let r=new Float32Array(t*n*4);return s.callAndCheck(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}},26357:function(e,t,n){n.d(t,{$O:function(){return I},$j:function(){return U},$u:function(){return G},A0:function(){return H},AR:function(){return B},B_:function(){return g},Bk:function(){return W},Bo:function(){return N},CJ:function(){return M},CV:function(){return Y},F1:function(){return V},Fv:function(){return Q},KX:function(){return q},LS:function(){return P},M8:function(){return E},MZ:function(){return p},PQ:function(){return v},Qs:function(){return $},Rn:function(){return y},Sd:function(){return k},St:function(){return D},TD:function(){return f},Tg:function(){return A},Th:function(){return S},UN:function(){return O},X8:function(){return L},XM:function(){return s},Y1:function(){return _},_9:function(){return j},aX:function(){return h},cK:function(){return r},cZ:function(){return T},cm:function(){return o},cx:function(){return i},fy:function(){return F},gv:function(){return c},hO:function(){return R},ji:function(){return x},kI:function(){return X},kY:function(){return b},m$:function(){return m},n7:function(){return u},nL:function(){return C},nT:function(){return z},oC:function(){return K},pk:function(){return l},qO:function(){return a},r:function(){return w},tx:function(){return d}});let{addImpl:r,bincountImpl:a,bincountReduceImpl:i,bitwiseAndImpl:s,castImpl:o,ceilImpl:l,concatImpl:u,equalImpl:c,expImpl:h,expm1Impl:d,floorImpl:p,gatherNdImpl:f,gatherV2Impl:m,greaterImpl:g,greaterEqualImpl:x,lessImpl:b,lessEqualImpl:y,linSpaceImpl:v,logImpl:k,maxImpl:I,maximumImpl:C,minimumImpl:w,multiplyImpl:S,negImpl:N,notEqualImpl:T,prodImpl:A,raggedGatherImpl:$,raggedRangeImpl:E,raggedTensorToTensorImpl:F,rangeImpl:R,rsqrtImpl:D,scatterImpl:_,sigmoidImpl:O,simpleAbsImpl:M,sliceImpl:z,sparseFillEmptyRowsImpl:L,sparseReshapeImpl:P,sparseSegmentReductionImpl:B,sqrtImpl:W,staticRegexReplaceImpl:V,stridedSliceImpl:G,stringNGramsImpl:U,stringSplitImpl:H,stringToHashBucketFastImpl:j,subImpl:X,tileImpl:q,topKImpl:K,transposeImpl:Q,uniqueImpl:Y}=n(11163)},33525:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(70943),a=n(30688),i=n(89201);class s{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=(0,r.C9)(this.outputShape.length),0===this.rank)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=(0,a.Ky)("rc",this.rank),t=(0,i.kW)(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),s=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${s}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let a=`${0===n?"r":"rp1"}, ${0===r?"c":"cp1"}`;for(let t=2;t<this.rank;t++)a=`${e[e.length-1-t]},`+a;t.push(a)}return t}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+="||");return t}getSetup(e){if(1===this.rank)return"";let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);if(1===this.rank){let e=this.enableShapeUniforms?"outShape":this.outputShape[0];return`getA(rc), (rc + 1 >= ${e} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}},30688:function(e,t,n){function r(e,t){return["x","y","z","w","u","v"].slice(0,t).map(t=>`${e}.${t}`)}function a(e,t){return 1===t?[e]:r(e,t)}function i(e,t){if(1===e)return"rc";let n="";for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=",");return n}n.d(t,{Ky:function(){return a},Qc:function(){return i},k6:function(){return r}})},1811:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(70943),a=n(70445);class i{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=(0,r.C9)(this.outputShape.length);let n="";for(let e=0;e<4;e++){let t="thisRC = rc;";e%2==1&&(t+="thisRC.z += 1;"),e>1&&(t+="thisRC.y += 1;"),n+=`
        ${t}
        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?"}":""}
      `}this.userCode=`
      ${function(e,t){let n=t?a.al(["r","c","d"],"inputShape"):a.RW(["r","c","d"],e);return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${n}
      return ivec3(r, c, d);
    }
  `}(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?a.nc():a.ku(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${n}

        setOutput(result);
      }
    `}}},70445:function(e,t,n){n.d(t,{Kn:function(){return i},RW:function(){return a},al:function(){return s},ku:function(){return o},nc:function(){return l},ye:function(){return u}});var r=n(46040);function a(e,t,n="index"){let a=r.util.computeStrides(t);return a.map((t,r)=>{let i=`int ${e[r]} = ${n} / ${t}`,s=r===a.length-1?`int ${e[r+1]} = ${n} - ${e[r]} * ${t}`:`index -= ${e[r]} * ${t}`;return`${i}; ${s};`}).join("")}function i(e,t,n="index"){let a=r.util.computeStrides(t);return a.map((t,r)=>{let i=`int ${e[r]} = ${n} / outShapeStrides[${r}]`,s=r===a.length-1?`int ${e[r+1]} = ${n} - ${e[r]} * outShapeStrides[${r}]`:`index -= ${e[r]} * outShapeStrides[${r}]`;return`${i}; ${s};`}).join("")}function s(e,t,n="index"){let r=function(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),a=Array(n-1);a[n-2]=r[n-1];for(let e=n-3;e>=0;--e)a[e]=`(${a[e+1]} * ${r[e+1]})`;return a}(e.map((e,t)=>t),t);return r.map((t,a)=>{let i=`int ${e[a]} = ${n} / ${r[a]}`,s=a===r.length-1?`int ${e[a+1]} = ${n} - ${e[a]} * ${r[a]}`:`index -= ${e[a]} * ${r[a]}`;return`${i}; ${s};`}).join("")}function o(e){let t=r.util.computeStrides(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function l(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}let u=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`},77275:function(e,t,n){n.d(t,{Se:function(){return f},Sq:function(){return m},V9:function(){return l},Yz:function(){return d},kk:function(){return c},m1:function(){return s},qe:function(){return p},v2:function(){return o},yb:function(){return h}});var r,a,i,s,o,l,u=n(46040);function c(e,t){return[t,e]}function h(e,t){return e*t}function d(e){let t=u.util.sizeFromShape(e);return u.util.sizeToSquarishShape(Math.ceil(t/4))}function p(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function f(e,t){let[n,r]=p(e,t);return n*r*4}function m(e,t){let n,r,a,i,s,o,l,c,h,d;return 2===(0,u.env)().getNumber("WEBGL_VERSION")?(n=e.R32F,r=e.R16F,a=e.RGBA16F,i=e.RGBA32F,s=e.RED,l=4,c=1,h=e.HALF_FLOAT,d=e.FLOAT,o=e.RGBA8):(n=e.RGBA,r=e.RGBA,a=e.RGBA,i=e.RGBA,s=e.RGBA,l=4,c=4,h=null!=t?t.HALF_FLOAT_OES:null,d=e.FLOAT,o=e.RGBA),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:i,textureFormatFloat:s,downloadTextureFormat:o,downloadUnpackNumChannels:l,defaultNumChannels:c,textureTypeHalfFloat:h,textureTypeFloat:d}}(r=s||(s={}))[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH",(a=o||(o={}))[a.RENDER=0]="RENDER",a[a.UPLOAD=1]="UPLOAD",a[a.PIXELS=2]="PIXELS",a[a.DOWNLOAD=3]="DOWNLOAD",(i=l||(l={}))[i.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",i[i.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",i[i.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",i[i.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",i[i.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"},92541:function(e,t,n){n.d(t,{I:function(){return s}});var r=n(46040),a=n(28657),i=n(77275);class s{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r;let a=l(t,n),s=u(e,a,n);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let c=o(e,a,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=c,this.log();let e=this.freeTextures[s].pop();return this.usedTextures[s].push(e),e}return a===i.V9.PACKED_2X2_FLOAT32?r=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===i.V9.PACKED_2X2_FLOAT16?r=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===i.V9.UNPACKED_FLOAT32?r=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===i.V9.UNPACKED_FLOAT16?r=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===i.V9.PACKED_4X1_UNSIGNED_BYTE&&(r=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(r),this.numUsedTextures++,this._numBytesAllocated+=c,this.log(),r}releaseTexture(e,t,n,a){if(null==this.freeTextures)return;let i=l(n,a),s=u(t,i,a);s in this.freeTextures||(this.freeTextures[s]=[]);let c=o(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,a),h=(0,r.env)().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==h&&this._numBytesAllocated>h?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=c):(this.freeTextures[s].push(e),this.numFreeTextures++,this._numBytesFree+=c),this.numUsedTextures--;let d=this.usedTextures[s],p=d&&d.indexOf(e);if(null==p||p<0)throw Error("Cannot release a texture that was never provided by this texture manager");d[p]=d[d.length-1],d.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function o(e,t,n,r,s){let o;let l=function(e,t){switch(e){case i.V9.PACKED_2X2_FLOAT32:return(0,a.getInternalFormatForPackedMatrixTexture)(t);case i.V9.PACKED_2X2_FLOAT16:return(0,a.getInternalFormatForFloat16PackedMatrixTexture)(t);case i.V9.UNPACKED_FLOAT32:return(0,a.getInternalFormatForFloat32MatrixTexture)(t);case i.V9.UNPACKED_FLOAT16:return(0,a.getInternalFormatForFloat16MatrixTexture)(t);case i.V9.PACKED_4X1_UNSIGNED_BYTE:return(0,a.getInternalFormatForUnsignedBytesMatrixTexture)(t);default:throw Error(`Unknown physical texture type ${e}`)}}(t,r);if(s){let[t,n]=(0,i.qe)(e[0],e[1]);o=t*n}else{let[t,n]=(0,i.kk)(e[0],e[1]);o=t*n}return o*function(e,t){if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F||t===e.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}(n,l)}function l(e,t){if(e===i.v2.UPLOAD)return i.V9.PACKED_2X2_FLOAT32;if(e===i.v2.RENDER||null==e)return(0,r.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?i.V9.PACKED_2X2_FLOAT32:i.V9.UNPACKED_FLOAT32:t?i.V9.PACKED_2X2_FLOAT16:i.V9.UNPACKED_FLOAT16;if(e===i.v2.DOWNLOAD||e===i.v2.PIXELS)return i.V9.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function u(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}},35626:function(e,t,n){n.d(t,{Cv:function(){return l},D1:function(){return i},Et:function(){return o},RX:function(){return u},Tq:function(){return d},bl:function(){return h},eW:function(){return c},l:function(){return a},t$:function(){return s}});var r=n(70943);class a{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=(0,r.C9)(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}let i="if (isnan(x)) return x;",s="return x;",o="return abs(x);",l="return (x >= 0.0) ? x : (exp(x) - 1.0);",u=i+`
  return (x < 0.0) ? 0.0 : x;
`,c=i+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,h="return x;",d="return 1.0 / (1.0 + exp(-1.0 * x));"},85243:function(e,t,n){n.d(t,{Cv:function(){return i},RX:function(){return s},Tq:function(){return l},cc:function(){return u},eW:function(){return o},t$:function(){return a}});var r=n(70943);let a="return x;",i=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,s=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,o=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,l="return 1.0 / (1.0 + exp(-1.0 * x));";class u{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=(0,r.C9)(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}},33375:function(e,t,n){n.d(t,{W:function(){return s}});var r=n(70943),a=n(30688),i=n(89201);class s{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=(0,r.C9)(this.outputShape.length);let t=e.length,n=(0,a.Ky)("rc",t),s=(0,i.kW)(t),o=(0,a.Qc)(t,n),l=n.slice(-2),u=t<=1?"rc":`vec2(${l.join(",")})`;this.userCode=`
      void main() {
        ${s} rc = getOutputCoords();
        vec4 packedInput = getA(${o});

        setOutput(getChannel(packedInput, ${u}));
      }
    `}}},3326:function(e,t,n){let r,a;n.r(t),n.d(t,{assertNotComplex:function(){return ee},bindCanvasToFramebuffer:function(){return F},bindColorTextureToFramebuffer:function(){return R},bindTextureToProgramUniformSampler:function(){return E},bindTextureUnit:function(){return N},bindVertexBufferToProgramAttribute:function(){return S},callAndCheck:function(){return l},canBeRepresented:function(){return u},createFragmentShader:function(){return p},createFramebuffer:function(){return w},createProgram:function(){return g},createStaticIndexBuffer:function(){return v},createStaticVertexBuffer:function(){return y},createTexture:function(){return I},createVertexShader:function(){return d},getBatchDim:function(){return L},getExtensionOrThrow:function(){return h},getFramebufferErrorMessage:function(){return O},getMaxTexturesInShader:function(){return j},getNumChannels:function(){return k},getProgramUniformLocation:function(){return $},getProgramUniformLocationOrThrow:function(){return A},getRowsCols:function(){return P},getShapeAs3D:function(){return B},getTextureShapeFromLogicalShape:function(){return W},getWebGLDisjointQueryTimerVersion:function(){return X},getWebGLErrorMessage:function(){return c},getWebGLMaxTextureSize:function(){return G},hasExtension:function(){return q},isCapableOfRenderingToFloatTexture:function(){return Q},isDownloadFloatTextureEnabled:function(){return Y},isReshapeFree:function(){return V},isWebGLFenceEnabled:function(){return J},isWebGLVersionEnabled:function(){return K},linkProgram:function(){return x},logShaderSourceAndInfoLog:function(){return m},resetMaxTextureSize:function(){return U},resetMaxTexturesInShader:function(){return H},unbindColorTextureFromFramebuffer:function(){return D},unbindTextureUnit:function(){return T},validateFramebuffer:function(){return _},validateProgram:function(){return b},validateTextureSize:function(){return C}});var i=n(46040),s=n(90756),o=n(77275);function l(e,t){let n=t();return(0,i.env)().getBool("DEBUG")&&function(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error("WebGL Error: "+c(e,t))}(e),n}function u(e){return!!((0,i.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||596e-10<Math.abs(e)&&65504>Math.abs(e))}function c(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function h(e,t){return M(e,()=>e.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function d(e,t){let n=M(e,()=>e.createShader(e.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(l(e,()=>e.shaderSource(n,t)),l(e,()=>e.compileShader(n)),!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(n)),Error("Failed to compile vertex shader.");return n}function p(e,t){let n=M(e,()=>e.createShader(e.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(l(e,()=>e.shaderSource(n,t)),l(e,()=>e.compileShader(n)),(0,i.env)().get("ENGINE_COMPILE_ONLY"))return n;if(!1===e.getShaderParameter(n,e.COMPILE_STATUS))throw m(t,e.getShaderInfoLog(n)),Error("Failed to compile fragment shader.");return n}let f=/ERROR: [0-9]+:([0-9]+):/g;function m(e,t){let n=f.exec(t);if(null==n){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],a=e.split("\n"),s=a.length.toString().length+2,o=a.map((e,t)=>i.util.rightPad((t+1).toString(),s)+e),l=0;for(let e=0;e<o.length;e++)l=Math.max(o[e].length,l);let u=o.slice(0,r-1),c=o.slice(r-1,r),h=o.slice(r);console.log(u.join("\n")),console.log(t.split("\n")[0]),console.log(`%c ${i.util.rightPad(c[0],l)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(h.join("\n"))}function g(e){return M(e,()=>e.createProgram(),"Unable to create WebGLProgram.")}function x(e,t){if(l(e,()=>e.linkProgram(t)),!(0,i.env)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(t,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Failed to link vertex and fragment shaders.")}function b(e,t){if(l(e,()=>e.validateProgram(t)),!1===e.getProgramParameter(t,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(t)),Error("Shader program validation failed.")}function y(e,t){let n=M(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return l(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),l(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function v(e,t){let n=M(e,()=>e.createBuffer(),"Unable to create WebGLBuffer");return l(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),l(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function k(){return 2===(0,i.env)().getNumber("WEBGL_VERSION")?1:4}function I(e){return M(e,()=>e.createTexture(),"Unable to create WebGLTexture.")}function C(e,t){let n=(0,i.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0)throw Error(`Requested texture size [${e}x${t}] is invalid.`);if(e>n||t>n)throw Error(`Requested texture size [${e}x${t}] greater than WebGL maximum on this browser / GPU [${n}x${n}].`)}function w(e){return M(e,()=>e.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function S(e,t,n,r,a,i,s){let o=e.getAttribLocation(t,n);return -1!==o&&(l(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),l(e,()=>e.vertexAttribPointer(o,a,e.FLOAT,!1,i,s)),l(e,()=>e.enableVertexAttribArray(o)),!0)}function N(e,t,n){z(e,n),l(e,()=>e.activeTexture(e.TEXTURE0+n)),l(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function T(e,t){z(e,t),l(e,()=>e.activeTexture(e.TEXTURE0+t)),l(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function A(e,t,n){return M(e,()=>e.getUniformLocation(t,n),'uniform "'+n+'" not present in program.')}function $(e,t,n){return e.getUniformLocation(t,n)}function E(e,t,n,r){l(e,()=>N(e,t,r)),l(e,()=>e.uniform1i(n,r))}function F(e){l(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),l(e,()=>e.viewport(0,0,e.canvas.width,e.canvas.height)),l(e,()=>e.scissor(0,0,e.canvas.width,e.canvas.height))}function R(e,t,n){l(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),l(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function D(e,t){l(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),l(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function _(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error("Error binding framebuffer: "+O(e,t))}function O(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function M(e,t,n){let r=l(e,()=>t());if(null==r)throw Error(n);return r}function z(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function L(e,t=2){return i.util.sizeFromShape(e.slice(0,e.length-t))}function P(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function B(e){let t=[1,1,1];return 0===e.length||1===e.length&&1===e[0]||(t=[L(e),...P(e)]),t}function W(e,t=!1){let n=(0,i.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),r=(0,i.env)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");r===1/0&&(0,i.env)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(r=n/2),t&&(n*=2,r*=2,1===(e=e.map((t,n)=>n>=e.length-2?i.util.nearestLargerEven(e[n]):e[n])).length&&(e=[2,e[0]])),2!==e.length&&(e=i.util.squeezeShape(e).newShape);let a=i.util.sizeFromShape(e),s=null;e.length<=1&&a<=n?s=[1,a]:2===e.length&&e[0]<=n&&e[1]<=n?s=e:3===e.length&&e[0]*e[1]<=n&&e[2]<=n?s=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=n&&e[1]*e[2]<=n?s=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=n&&e[3]<=n?s=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(s=[e[0],e[1]*e[2]*e[3]]);let o=null!=s&&Math.max(...s)>r&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(null==s||o){if(t){let t=L(e),n=2,r=2;e.length&&([n,r]=P(e)),a=n/2*t*(r/2),s=i.util.sizeToSquarishShape(a).map(e=>2*e)}else s=i.util.sizeToSquarishShape(a)}return s}function V(e,t){if(e=e.slice(-2),t=t.slice(-2),i.util.arraysEqual(e,t)||!e.length||!t.length||0===e[0]||0===e[1]||0===t[0]||0===t[1])return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||n%2==0&&r%2==0&&(1===e[0]||1===t[0]))return!0}return e[1]===t[1]&&e[0]%2==0&&t[0]%2==0}function G(e){if(null==r){let t=(0,s.jl)(e);r=t.getParameter(t.MAX_TEXTURE_SIZE)}return r}function U(){r=null}function H(){a=null}function j(e){if(null==a){let t=(0,s.jl)(e);a=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,a)}function X(e){if(0===e)return 0;let t=(0,s.jl)(e);return q(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:q(t,"EXT_disjoint_timer_query")?1:0}function q(e,t){return null!=e.getExtension(t)}function K(e){try{let t=(0,s.jl)(e);if(null!=t)return!0}catch(e){console.log("Error when getting WebGL context: ",e)}return!1}function Q(e){if(0===e)return!1;let t=(0,s.jl)(e);if(1===e){if(!q(t,"OES_texture_float"))return!1}else if(!q(t,"EXT_color_buffer_float"))return!1;return Z(t)}function Y(e){if(0===e)return!1;let t=(0,s.jl)(e);if(1===e){if(!q(t,"OES_texture_float")||!q(t,"WEBGL_color_buffer_float"))return!1}else{if(q(t,"EXT_color_buffer_float"))return Z(t);let e="EXT_color_buffer_half_float";if(q(t,e)){let n=t.getExtension(e);return function(e,t){let n=(0,o.Sq)(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(a),i}(t,n)}return!1}return Z(t)}function Z(e){let t=(0,o.Sq)(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),a}function J(e){return 2===e&&null!=(0,s.jl)(e).fenceSync}function ee(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&i.util.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}},39992:function(e,t,n){n.d(t,{GD:function(){return C},Gc:function(){return x},aI:function(){return S}});var r=n(46040),a=n(1552),i=n(94120);class s extends r.serialization.Serializable{getConfig(){return{}}}class o extends s{apply(e,t=1){return a.py(e,t)}}o.className="elu",r.serialization.registerClass(o);class l extends s{apply(e){return r.selu(e)}}l.className="selu",r.serialization.registerClass(l);class u extends s{apply(e){return r.relu(e)}}u.className="relu",r.serialization.registerClass(u);class c extends s{apply(e){return(0,r.tidy)(()=>r.minimum(6,r.relu(e)))}}c.className="relu6",r.serialization.registerClass(c);class h extends s{apply(e){return e}}h.className="linear",r.serialization.registerClass(h);class d extends s{apply(e){return r.sigmoid(e)}}d.className="sigmoid",r.serialization.registerClass(d);class p extends s{apply(e){return a.HX(e)}}p.className="hardSigmoid",r.serialization.registerClass(p);class f extends s{apply(e){return r.softplus(e)}}f.className="softplus",r.serialization.registerClass(f);class m extends s{apply(e){return a.O(e)}}m.className="softsign",r.serialization.registerClass(m);class g extends s{apply(e){return r.tanh(e)}}g.className="tanh",r.serialization.registerClass(g);class x extends s{apply(e,t=-1){return r.softmax(e,t)}}x.className="softmax",r.serialization.registerClass(x);class b extends s{apply(e,t=-1){return r.logSoftmax(e,t)}}b.className="logSoftmax",r.serialization.registerClass(b);class y extends s{apply(e){return(0,r.tidy)(()=>r.tidy(()=>{let t=r.mul(.5,r.add(1,r.erf(r.div(e,Math.sqrt(2)))));return r.mul(e,t)}))}}y.className="gelu",r.serialization.registerClass(y);class v extends s{apply(e){return(0,r.tidy)(()=>r.mul(.5,r.mul(e,r.add(1,r.tanh(r.mul(r.sqrt(r.div(2,Math.PI)),r.add(e,r.mul(.044715,r.pow(e,3)))))))))}}v.className="gelu_new",r.serialization.registerClass(v);class k extends s{apply(e){return(0,r.tidy)(()=>r.mul(e,r.tanh(r.softplus(e))))}}k.className="mish",r.serialization.registerClass(k);class I extends s{apply(e,t=1){return(0,r.tidy)(()=>r.mul(r.sigmoid(r.mul(e,t)),e))}}function C(e){return e.getClassName()}function w(e,t={}){return(0,i.tU)(e,r.serialization.SerializationMap.getMap().classNameMap,t,"activation")}function S(e){if(null==e){let e={};return e.className="linear",e.config={},w(e)}if("string"==typeof e){let t={};return t.className=e,t.config={},w(t)}return e instanceof s?e:w(e)}I.className="swish",r.serialization.registerClass(I)},10685:function(e,t,n){let r;n.d(t,{Ho:function(){return i},rf:function(){return s}});var a=n(46040);function i(){return null==r&&(r=(0,a.backend)().epsilon()),r}function s(){return"channelsLast"}},76334:function(e,t,n){n.d(t,{L:function(){return a},s:function(){return s}});let r=0;function a(){return r++}let i={};function s(e=""){return e in i||(i[e]=0),i[e]+=1,e+i[e].toString()}},1552:function(e,t,n){n.d(t,{AK:function(){return v},GZ:function(){return x},Gg:function(){return b},HX:function(){return A},Iq:function(){return k},KC:function(){return $},O:function(){return N},Uz:function(){return d},a2:function(){return w},c9:function(){return p},dt:function(){return u},h6:function(){return I},mV:function(){return g},nG:function(){return y},pj:function(){return l},py:function(){return S},rv:function(){return T},rx:function(){return c},uI:function(){return m},xH:function(){return h}});var r=n(46040),a=n(38440),i=n(64579),s=n(86314),o=n(10685);function l(e,t){return r.cast(e,t)}function u(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),r.reshape(e,n)}function c(e,t){return(0,r.tidy)(()=>{if(2!==e.shape.length)throw new i.nu(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return b(u(e,1),[1,t,1])})}function h(e){let t=[s.NS(e.shape)];return r.reshape(e,t)}function d(e){if(e.rank<=1)throw new i.nu(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);let t=[e.shape[0],s.NS(e.shape,1)];return r.reshape(e,t)}function p(e,t,n){return(0,r.tidy)(()=>{switch(e.rank){case 1:return r.slice1d(e,t,n);case 2:return r.slice2d(e,[t,0],[n,e.shape[1]]);case 3:return r.slice3d(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return r.slice4d(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return r.slice(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return r.slice(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new i.nu(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function f(e,t,n){return(0,r.tidy)(()=>{switch(e.rank){case 1:return r.slice1d(e,t,n);case 2:return r.slice2d(e,[0,t],[e.shape[0],n]);case 3:return r.slice3d(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return r.slice4d(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new i.nu(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function m(e,t,n,a){return(0,r.tidy)(()=>{switch(e.rank){case 1:return r.slice1d(e,t,n);case 2:switch(a){case 1:return p(e,t,n);case 2:return f(e,t,n);default:throw new i.nu(`The axis is not within the rank of the tensor ${a}`)}case 3:switch(a){case 1:return p(e,t,n);case 2:return r.slice3d(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return f(e,t,n);default:throw new i.nu(`The axis is not within the rank of the tensor ${a}`)}case 4:switch(a){case 1:return p(e,t,n);case 2:return r.slice4d(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return r.slice4d(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return f(e,t,n);default:throw new i.nu(`The axis is not within the rank of the tensor ${a}`)}default:throw new i.nu(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function g(e,t=-1){let n;return t<0&&(t=0!==(n=e[0].rank)?n:0),t===e[0].rank&&(t=-1),r.concat(e,t)}function x(e,t){switch(e.rank){case 1:return r.concat1d([e,t]);case 2:return r.concat2d([e,t],0);case 3:return r.concat3d([e,t],0);case 4:return r.concat4d([e,t],0);default:throw new i.nu(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function b(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new i.nu(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return r.tile(e,t)}function y(e,t=0,n=1,a,i){return r.randomNormal(e,t,n,a,i)}function v(e,t,n,a){if(e.rank<2||t.rank<2)throw new i.nj(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new i.nj(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(2===e.rank&&2===t.rank)return r.fused.matMul({a:e,b:t,transposeA:!1,transposeB:!1,bias:a?C(e.rank,a,(0,o.rf)()):null,activation:n});{let i=e.shape.slice(),s=i.pop();e=r.reshape(e,[-1,s]);let l=t.shape.slice(),u=l.pop(),c=l.pop(),h=[...l,u],d=Array.from({length:t.rank},(e,n)=>0===n?t.rank-2:n<=t.rank-2?n-1:n);t=r.reshape(r.transpose(t,d),[c,-1]);let p=[...i,...h];return r.reshape(r.fused.matMul({a:e,b:t,transposeA:!1,transposeB:!1,bias:a?C(e.rank,a,(0,o.rf)()):null,activation:n}),p)}}function k(e,t,n){return(0,r.tidy)(()=>(t=Array.isArray(t)?(0,r.tensor1d)(t,"int32"):r.cast(t,"int32"),r.gather(e,t,n)))}function I(e){return r.mul(e,e)}function C(e,t,n){let a=t.shape;if(1!==t.rank&&t.rank!==e)throw new i.nu(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(5===e){if("channelsFirst"===n)return 1===a.length?r.reshape(t,[1,a[0],1,1,1]):r.reshape(t,[1,a[3],a[0],a[1],a[2]]);if("channelsLast"===n)return 1===a.length?r.reshape(t,[1,1,1,1,a[0]]):r.reshape(t,[1].concat(a))}else if(4===e){if("channelsFirst"===n)return 1===a.length?r.reshape(t,[1,a[0],1,1]):r.reshape(t,[1,a[2],a[0],a[1]]);if("channelsLast"===n)return 1===a.length?r.reshape(t,[1,1,1,a[0]]):r.reshape(t,[1].concat(a))}else if(3===e){if("channelsFirst"===n)return 1===a.length?r.reshape(t,[1,a[0],1]):r.reshape(t,[1,a[1],a[0]]);if("channelsLast"===n)return 1===a.length?r.reshape(t,[1,1,a[0]]):r.reshape(t,[1].concat(a))}else if(e<3)return t;throw new i.nu(`Unsupported input rank by biasAdd: ${t.rank}`)}function w(e,t,n){return(0,r.tidy)(()=>(null==n&&(n=(0,o.rf)()),(0,a.cj)(n),r.add(e,C(e.rank,t,n))))}function S(e,t=1){if(1!==t)throw new i.nj(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return r.elu(e)}function N(e){return(0,r.tidy)(()=>r.div(e,r.add(r.abs(e),1)))}function T(e,t,n,a){return(0,r.tidy)(()=>r.dropout(e,t,n,a))}function A(e){return(0,r.tidy)(()=>{let t=r.add(.5,r.mul(.2,e));return r.clipByValue(t,0,1)})}function $(e,t,n=!1){return n?e():t()}},19914:function(e,t,n){n.d(t,{Ay:function(){return d},BO:function(){return c},CZ:function(){return f},Sk:function(){return m},ex:function(){return u},iT:function(){return p},m$:function(){return g}});var r,a,i=n(46040),s=n(64579),o=n(10525),l=n(94120);(r=a||(a={}))[r.SILENT=0]="SILENT",r[r.VERBOSE=1]="VERBOSE";class u{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}}class c{constructor(e,t=10){null==e&&(e=[]),this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){for(let n of(null==t&&(t={}),this.callbacks))await n.onEpochBegin(e,t)}async onEpochEnd(e,t){for(let n of(null==t&&(t={}),this.callbacks))await n.onEpochEnd(e,t)}async onBatchBegin(e,t){for(let n of(null==t&&(t={}),this.callbacks))await n.onBatchBegin(e,t)}async onBatchEnd(e,t){for(let n of(null==t&&(t={}),this.callbacks))await n.onBatchEnd(e,t)}async onTrainBegin(e){for(let t of(null==e&&(e={}),this.callbacks))await t.onTrainBegin(e)}async onTrainEnd(e){for(let t of(null==e&&(e={}),this.callbacks))await t.onTrainEnd(e)}}class h extends u{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){null==t&&(t={});let n=null==t.size?0:t.size;for(let e in this.seen+=n,t){let r=t[e];if("number"==typeof r)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let a=(0,i.tidy)(()=>(0,i.add)(this.totals[e],(0,i.mul)(r,n)));this.totals[e]=a,null!=t&&t.dispose()}}}async onEpochEnd(e,t){if(null!=t)for(let e of this.params.metrics)null!=this.totals[e]&&("number"==typeof this.totals[e]?t[e]=this.totals[e]/this.seen:(0,i.tidy)(()=>{let n=(0,i.mul)((0,i.div)(1,this.seen),this.totals[e]);t[e]=n,this.totals[e].dispose(),(0,i.keep)(t[e])}))}}class d extends u{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){for(let n in null==t&&(t={}),this.epoch.push(e),t)null==this.history[n]&&(this.history[n]=[]),this.history[n].push(t[n])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let a=this.history[r];for(let i=0;i<a.length;++i)if("number"!=typeof a[i]){let s=a[i];e.push(s.data()),t.push(r),n.push(i)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}}class p extends u{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||i.nextFrame,this.yieldEvery=t||"auto","auto"===this.yieldEvery&&(this.yieldEvery=125),"never"===this.yieldEvery&&null!=e.onYield)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");i.util.isNumber(this.yieldEvery)&&(this.maybeWait=l.Ds(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];null!=this.yield&&(await (0,o.Z)(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,null!=this.epochBegin&&(await (0,o.Z)(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];null!=this.epochEnd&&(await (0,o.Z)(t),n.push(this.epochEnd(e,t))),"epoch"===this.yieldEvery&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){null!=this.batchBegin&&(await (0,o.Z)(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];null!=this.batchEnd&&(await (0,o.Z)(t),n.push(this.batchEnd(e,t))),"batch"===this.yieldEvery?n.push(this.nextFrameFunc()):i.util.isNumber(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){null!=this.trainBegin&&(await (0,o.Z)(e),await this.trainBegin(e))}async onTrainEnd(e){null!=this.trainEnd&&(await (0,o.Z)(e),await this.trainEnd(e))}}function f(e,t){return(null==e&&(e={}),e instanceof u)?[e]:Array.isArray(e)&&e[0]instanceof u?e:l.zZ(e).map(e=>new p(e,t))}class m{constructor(){}static registerCallbackConstructor(e,t){i.util.assert(e>=0&&Number.isInteger(e),()=>`Verbosity level is expected to be an integer >= 0, but got ${e}`),m.checkForDuplicate(t),null==m.constructors[e]&&(m.constructors[e]=[]),m.constructors[e].push(t)}static checkForDuplicate(e){for(let t in m.constructors)m.constructors[+t].forEach(t=>{if(t===e)throw new s.nu("Duplicate callback constructor.")})}static clear(){m.constructors={}}static createCallbacks(e){let t=[];for(let n in m.constructors){let r=+n;e>=r&&t.push(...m.constructors[r])}return t.map(e=>new e)}}function g(e,t,n,r,a,i,s,o,l){let u=new d,p=[new h,...m.createCallbacks(t)];null!=e&&p.push(...e),p.push(u);let f=new c(p);return f.setParams({epochs:n,initialEpoch:r,samples:a,steps:i,batchSize:s,verbose:t,doValidation:o,metrics:l}),{callbackList:f,history:u}}m.constructors={}},38440:function(e,t,n){n.d(t,{Lp:function(){return u},MU:function(){return d},cj:function(){return s},f4:function(){return h},w8:function(){return p},wU:function(){return o},zb:function(){return l}});var r=n(43872),a=n(94120);let i=new Map;function s(e){(0,a.xn)(r.PS,"DataFormat",e)}function o(e){(0,a.xn)(r.Mz,"InterpolationFormat",e)}function l(e){(0,a.xn)(r.zx,"PaddingMode",e)}function u(e){(0,a.xn)(r.MK,"PoolMode",e)}let c=[];function h(e,t){c.push(e);try{let e=t();return c.pop(),e}catch(e){throw c.pop(),e}}function d(e){if(!m(e))throw Error("Not a valid tensor name: '"+e+"'");return(0===c.length?"":c.join("/")+"/")+e}function p(e){if(!m(e))throw Error("Not a valid tensor name: '"+e+"'");i.has(e)||i.set(e,0);let t=i.get(e);if(i.set(e,i.get(e)+1),!(t>0))return e;{let n=`${e}_${t}`;return i.set(n,1),n}}let f=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function m(e){return!!e.match(f)}},22380:function(e,t,n){n.d(t,{Ad:function(){return m},Yq:function(){return l},cK:function(){return u},he:function(){return c},iL:function(){return h},xF:function(){return p}});var r=n(46040),a=n(10685),i=n(94120);function s(e,t){return(0,r.tidy)(()=>r.sqrt(r.sum(r.mul(e,e),t,!0)))}class o extends r.serialization.Serializable{getConfig(){return{}}}class l extends o{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=null!=e.maxValue?e.maxValue:this.defaultMaxValue,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(e){return(0,r.tidy)(()=>{let t=s(e,this.axis),n=r.clipByValue(t,0,this.maxValue);return r.mul(e,r.div(n,r.add((0,a.Ho)(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}l.className="MaxNorm",r.serialization.registerClass(l);class u extends o{constructor(e){super(),this.defaultAxis=0,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(e){return(0,r.tidy)(()=>r.div(e,r.add((0,a.Ho)(),s(e,this.axis))))}getConfig(){return{axis:this.axis}}}u.className="UnitNorm",r.serialization.registerClass(u);class c extends o{apply(e){return r.relu(e)}}c.className="NonNeg",r.serialization.registerClass(c);class h extends o{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=null!=e.minValue?e.minValue:this.defaultMinValue,this.maxValue=null!=e.maxValue?e.maxValue:this.defaultMaxValue,this.rate=null!=e.rate?e.rate:this.defaultRate,this.axis=null!=e.axis?e.axis:this.defaultAxis}apply(e){return(0,r.tidy)(()=>{let t=s(e,this.axis),n=r.add(r.mul(this.rate,r.clipByValue(t,this.minValue,this.maxValue)),r.mul(1-this.rate,t));return r.mul(e,r.div(n,r.add((0,a.Ho)(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}h.className="MinMaxNorm",r.serialization.registerClass(h);let d={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function p(e){return(0,i.Kj)(e)}function f(e,t={}){return(0,i.tU)(e,r.serialization.SerializationMap.getMap().classNameMap,t,"constraint")}function m(e){return null==e?null:"string"==typeof e?f({className:e in d?d[e]:e,config:{}}):e instanceof o?e:f(e)}},95241:function(e,t,n){n.d(t,{l2:function(){return u},ht:function(){return p},kS:function(){return d}});var r=n(46040),a=n(64579);class i{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}}var s=n(94120),o=n(84996),l=n(64580);class u{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof u)for(let t in e.id2Value)this.id2Value[t]=e.id2Value[t],t in e.id2Mask&&(this.id2Mask[t]=e.id2Mask[t]);else{if(null==e)return;for(let t of e)this.add(t.key,t.value)}}add(e,t,n){if(null==this.id2Value[e.id])this.id2Value[e.id]=function(e,t){if(null==e.dtype||e.dtype===t.dtype)return t;try{return(0,r.cast)(t,e.dtype)}catch(n){throw new a.nu(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}(e,t),this.name2Id[e.name]=e.id,null!=n&&(this.id2Mask[e.id]=n);else throw new a.nu(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return null!=this.id2Value[e.id]}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof l.Iy){if(null!=this.id2Value[e.id])return this.id2Value[e.id];throw new a.nu(`Nonexistent key: ${e.name}`)}{let t=this.name2Id[e];if(null==t)throw new a.nu(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof l.Iy){if(null!=this.id2Value[e.id])return this.id2Mask[e.id];throw new a.nu(`Nonexistent key: ${e.name}`)}{let t=this.name2Id[e];if(null==t)throw new a.nu(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){null!=this.id2Mask&&(0,r.dispose)(this.id2Mask)}}let c=new i,h=new i;function d(e){null!=c&&c.setMaxEntries(e),null!=h&&h.setMaxEntries(e)}function p(e,t,n,a){let i;let l=null!=n&&n.training,d=Array.isArray(e),p=d?e:[e],m=p.map(e=>e.name),g=[],x=t.names();for(let e of m)-1!==x.indexOf(e)?g.push(t.getValue(e)):g.push(null);null!=a&&(a.maxNumTensors=-1/0,a.minNumTensors=1/0);let b=m.join(",")+"|"+t.names().sort().join(","),y=c.get(b);if(null==y){let e=function(e,t){r.util.assert(null!=e&&e.length>0,()=>"Expected at least one fetch, got none");let n=[],a={};if(1===e.length){let r=f(e[0],t);n=r.sorted,a=r.recipientMap}else{let r=new Set;for(let i of e){let{sorted:e,recipientMap:s}=f(i,t);for(let t of e)r.has(t.name)||(n.push(t),r.add(t.name));for(let e in s)null==a[e]&&(a[e]=new Set),s[e].forEach(t=>a[e].add(t))}}return{sorted:n,recipientCounts:function(e){let t={};for(let n in e)t[n]=e[n].size;return t}(a)}}(p,t);y=e.sorted,i=e.recipientCounts,c.put(b,y),h.put(b,i)}i={},l||Object.assign(i,h.get(b));let v=new u(t);for(let e=0;e<y.length;++e){if(null!=a){let e=(0,r.memory)().numTensors;e>a.maxNumTensors&&(a.maxNumTensors=e),e<a.minNumTensors&&(a.minNumTensors=e)}let u=y[e],c=u.sourceLayer;if(c instanceof o.l)continue;let h=[],d=[],p=[],f=!1;for(let e of u.inputs){let n=v.getValue(e),r=v.getMask(e);h.push(n),d.push(r),null!=r&&(f=!0),l||(i[e.name]--,0!==i[e.name]||t.hasKey(e)||-1!==m.indexOf(e.name)||n.isDisposed||!0===e.sourceLayer.stateful||p.push(n))}f&&((n=n||{}).mask=d[0]);let x=(0,s.zZ)(c.apply(h,n)),b=null;c.supportsMasking&&(b=c.computeMask(h,d));let k=function(e){let t;if(1===e.sourceLayer.inboundNodes.length)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}(u),I=Array.isArray(k)?k:[k];for(let e=0;e<I.length;++e){v.hasKey(I[e])||v.add(I[e],x[e],Array.isArray(b)?b[0]:b);let t=m.indexOf(I[e].name);-1!==t&&(g[t]=x[e])}l||(0,r.dispose)(p)}return v.disposeMasks(),d?g:g[0]}function f(e,t){let n=new Set,r=[],a={};for(let e of t.names())n.add(e);let i=[],s=[];for(i.push(e);i.length>0;){let e=i[i.length-1];if(n.has(e.name)){i.pop();continue}let t=s[s.length-1]===i.length-1;if(0===e.inputs.length||t)i.pop(),r.push(e),n.add(e.name),t&&s.pop();else for(let t of(s.push(i.length-1),e.inputs))null==a[t.name]&&(a[t.name]=new Set),a[t.name].add(e.name),n.has(t.name)||i.push(t)}return{sorted:r,recipientMap:a}}},84996:function(e,t,n){n.d(t,{I:function(){return l},l:function(){return o}});var r=n(46040),a=n(76334),i=n(64579),s=n(64580);class o extends s.mh{constructor(e){if(super({dtype:e.dtype,name:null!=e.name?e.name:(0,a.s)("input").toString()}),null==e.batchSize&&(e.batchSize=null),null==e.sparse&&(e.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=e.sparse,null!=e.inputShape&&null!=e.batchInputShape)throw new i.nu("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let t=e.batchInputShape;if(null==t){if(null==e.inputShape)throw new i.nu("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(null!=e.batchSize)throw new i.nu("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");let n=e.dtype||"float32";this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new s.Iy(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new s.NB({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new i.nu(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}function l(e){if(null==e.batchShape&&null==e.shape)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(null!=e.batchShape&&null!=e.shape)throw new i.nu("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;null!=e.shape&&null==t&&(t=[null].concat(e.shape));let n=e.dtype;return null==n&&(n="float32"),new o({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}o.className="InputLayer",r.serialization.registerClass(o)},64580:function(e,t,n){n.d(t,{Iy:function(){return p},NB:function(){return m},Zg:function(){return d},hA:function(){return function e(t,n,r){if((null==n||null!=r&&r>0)&&(n=t.sourceLayer,r=t.nodeIndex),0===n.inboundNodes.length)return[t];{let t=n.inboundNodes[r];if(0===t.inboundLayers.length)return t.inputTensors;{let n=[];for(let r=0;r<t.inboundLayers.length;r++)for(let a of e(t.inputTensors[r],t.inboundLayers[r],t.nodeIndices[r]))-1===n.indexOf(a)&&n.push(a);return n}}}},mh:function(){return x}});var r=n(46040),a=n(76334),i=n(38440),s=n(64579),o=n(79878),l=n(94120),u=n(97982),c=n(34923),h=n(48234);class d{constructor(e){this.dtype=e.dtype,this.shape=e.shape,null!=e.shape?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}}class p{constructor(e,t,n,r,s,o,l){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=s,this.outputTensorIndex=l,this.id=(0,a.L)(),null!=o&&(this.originalName=(0,i.MU)(o),this.name=(0,i.w8)(this.originalName)),this.rank=t.length}}let f=0;class m{constructor(e,t){for(let n of(this.callArgs=t,this.id=f++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes,e.inboundLayers))null!=n&&n.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)null!=t?e.push(t.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let g=0;class x extends r.serialization.Serializable{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=g++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=l.D1(e)+"_"+(0,a.s)(e)}if(this.name=t,this.trainable_=null==e.trainable||e.trainable,null!=e.inputShape||null!=e.batchInputShape){let t;if(null!=e.batchInputShape)t=e.batchInputShape;else if(null!=e.inputShape){let n=null;null!=e.batchSize&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;null==n&&(n=e.inputDType),null==n&&(n="float32"),this.dtype=n}null!=e.weights?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+"_ib-"+t.toString()}getNodeAtIndex(e,t){if(0===this.inboundNodes.length)throw new s.LH(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new s.nu(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return l.Bq(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return l.Bq(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new s.j1(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(0===this.inboundNodes.length)throw new s.j1(`Layer ${this.name} is not connected, no input to return.`);return l.Bq(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(0===this.inboundNodes.length)throw new s.j1(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new s.j1(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return l.Bq(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){let t=l.zZ(e);if(null==this.inputSpec||0===this.inputSpec.length)return;let n=l.zZ(this.inputSpec);if(t.length!==n.length)throw new s.nu(`Layer ${this.name} expects ${n.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let e=0;e<t.length;e++){let r=t[e],a=n[e];if(null==a)continue;let i=r.rank;if(null!=a.ndim&&i!==a.ndim)throw new s.nu(`Input ${e} is incompatible with layer ${this.name}: expected ndim=${a.ndim}, found ndim=${i}`);if(null!=a.maxNDim&&i>a.maxNDim)throw new s.nu(`Input ${e} is incompatible with layer ${this.name}: expected max_ndim=${a.maxNDim}, found ndim=${i}`);if(null!=a.minNDim&&i<a.minNDim)throw new s.nu(`Input ${e} is incompatible with layer ${this.name}: expected min_ndim=${a.minNDim}, found ndim=${i}.`);if(null!=a.dtype&&r.dtype!==a.dtype)throw new s.nu(`Input ${e} is incompatible with layer ${this.name} : expected dtype=${a.dtype}, found dtype=${r.dtype}.`);if(a.axes){let t=r.shape;for(let n in a.axes){let r=Number(n),i=a.axes[n],o=r>=0?t[r]:t[t.length+r];if(null!=i&&-1===[i,null].indexOf(o))throw new s.nu(`Input ${e} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${i} but got shape ${t}.`)}}if(null!=a.shape)for(let t=0;t<a.shape.length;++t){let n=a.shape[t],i=r.shape[t];if(null!=n&&null!=i&&n!==i)throw new s.nu(`Input ${e} is incompatible with layer ${this.name}: expected shape=${a.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){null!=this._callHook&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t=t||{},this.assertNotDisposed();let n=l.zZ(e),r=function(e){let t=!0;for(let n of l.zZ(e))if(!(n instanceof p)){t=!1;break}return t}(e),a=function(e){let t=!0;for(let n of l.zZ(e))if(n instanceof p){t=!1;break}return t}(e);if(r===a)throw new s.nu("Arguments to apply() must be all SymbolicTensors or all Tensors");return(0,i.f4)(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of l.zZ(e))t.push(n.shape);this.build(l.Bq(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),null===this._refCount&&a&&(this._refCount=1)}if(this.assertInputCompatibility(e),a){let r=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,r);let a=l.zZ(r),i=[];for(let e of a)-1!==n.indexOf(e)&&(e=e.clone()),i.push(e);if(r=l.Bq(i),null!=this.activityRegularizer)throw new s.nj("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return r}{let n;let r=function(e){e=l.zZ(e);let t=[];for(let n of e)t.push(n.shape);return l.Bq(t)}(e),a=this.computeOutputShape(r),i="float32";if(this.warnOnIncompatibleInputShape(Array.isArray(e)?r[0]:r),n=null!=a&&a.length>0&&Array.isArray(a[0])?a.map((n,r)=>new p(i,n,this,l.zZ(e),t,this.name,r)):new p(i,a,this,l.zZ(e),t,this.name),this.addInboundNode(e,n,null,null,r,a,t),this._refCount++,null!=this.activityRegularizer)throw new s.nj("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return n}})}warnOnIncompatibleInputShape(e){if(null!=this.batchInputShape){if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{null!=n&&null!=e[r]&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}}get outputShape(){if(null==this.inboundNodes||0===this.inboundNodes.length)throw new s.j1(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);-1===e.indexOf(n)&&e.push(n)}if(1===e.length){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&1===e.length?e[0]:e}throw new s.j1(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new s.LH(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return c.t(this.weights)}build(e){this.built=!0}getWeights(e=!1){return(0,h.FQ)(e?this.trainableWeights:this.weights)}setWeights(e){(0,r.tidy)(()=>{let t=this.weights;if(t.length!==e.length)throw new s.nu(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(0===t.length)return;let n=[],a=(0,h.FQ)(t);for(let i=0;i<a.length;++i){let o=a[i],l=t[i],u=e[i];if(!r.util.arraysEqual(o.shape,u.shape))throw new s.nu(`Layer weight shape ${o.shape} not compatible with provided weight shape ${u.shape}`);n.push([l,u])}(0,h.zb)(n)})}addWeight(e,t,n,r,a,i,l,u){if(-1!==this._addedWeightNames.indexOf(e))throw new s.nu(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),null==n&&(n="float32"),this.fastWeightInitDuringBuild&&(r=null!=u?u():(0,o.L5)("zeros"));let c=r.apply(t,n),d=new h.fU(c,n,e,i,l);return c.dispose(),null!=a&&this.addLoss(()=>a.apply(d.read())),null==i&&(i=!0),i?this._trainableWeights.push(d):this._nonTrainableWeights.push(d),d}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){null==e||Array.isArray(e)&&0===e.length||(e=l.zZ(e),void 0!==this._losses&&null!==this._losses&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(null!=t){if(Array.isArray(t))t.forEach(e=>{if(null!=e)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)}return null}return t}setMaskMetadata(e,t,n){if(!this.supportsMasking)return;let r=this.computeMask(e,n),a=l.zZ(t),i=l.zZ(r);if(a.length!==i.length)throw Error(`${this.name} outputs ${a.length} tensors but ${a.length} masks for those tensors`);for(let e=0;e<a.length;e++)a[e].kerasMask=i[e]}addInboundNode(e,t,n,r,a,i,s=null){let o=l.zZ(e);t=l.zZ(t),n=l.zZ(n),r=l.zZ(r),a=u.x6(a),i=u.x6(i);let c=[],h=[],d=[];for(let e of o)c.push(e.sourceLayer),h.push(e.nodeIndex),d.push(e.tensorIndex);new m({outboundLayer:this,inboundLayers:c,nodeIndices:h,tensorIndices:d,inputTensors:o,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:a,outputShapes:i},s);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return null!=this.batchInputShape&&(e.batchInputShape=this.batchInputShape),null!=this.dtype&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(0===this._refCount)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(null===this._refCount)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return 0==--this._refCount&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}}},37064:function(e,t,n){n.d(t,{D:function(){return p},y:function(){return h}});var r=n(46040),a=n(19914),i=n(64579),s=n(10525),o=n(94120),l=n(25602);function u(e,t){let n,a;n=t.xs,a=t.ys,r.util.assert(null!=n&&null!=a,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let i=c("input",e.inputNames,n),s=c("output",e.outputNames,a),o=i[0].shape[0];r.util.assert(i.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${i.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),r.util.assert(s.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${s.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<i.length;t++)r.util.assert(i[t].shape[0]===o,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${i[t].shape[0]}; expected  ${o} based on input ${e.inputNames[0]}.`);for(let t=0;t<s.length;t++)r.util.assert(s[t].shape[0]===o,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${s[t].shape[0]}; expected  ${o} based on input ${e.inputNames[0]}.`);return{xs:i,ys:s}}function c(e,t,n){if(n instanceof r.Tensor)return[n];if(Array.isArray(n))return r.util.assert(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let a of t){if(null==n[a])throw new i.nu(`The feature data generated by the dataset lacks the required ${e} key '${a}'.`);r.push(n[a])}return r}}async function h(e,t,n){let c=null!=n.batchesPerEpoch;if(r.util.assert(null!=e.optimizer,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),r.util.assert(null!=n,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),r.util.assert(null!=n.epochs&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),r.util.assert(!c||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),r.util.assert(null==n.validationSplit,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error("Cannot start training because another fit() call is ongoing.");e.isTraining=!0;try{let h,p,f,m;let g=null!=n.validationData;if(g){if(d(n.validationData))r.util.assert(null==n.validationBatches||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=function(e){if(3===e.length)throw new i.nj("Validation with sample weights is not implemented yet.");return{xs:e[0],ys:e[1]}}(n.validationData);h=e.xs,p=e.ys}}let x=e.makeTrainFunction(),b=e.getDedupedMetricsNames();f=g?b.slice().concat(b.map(e=>"val_"+e)):b.slice();let y=(0,a.CZ)(n.callbacks,n.yieldEvery),v=null==n.verbose?1:n.verbose,{callbackList:k,history:I}=(0,a.m$)(y,v,n.epochs,null,null,(m=null,null!=n.batchesPerEpoch?m=n.batchesPerEpoch:Number.isFinite(t.size)&&(m=t.size),m),null,g,f);k.setModel(e),e.history=I,await k.onTrainBegin(),e.stopTraining_=!1;let C=null==n.initialEpoch?0:n.initialEpoch,w=await t.iterator();for(;C<n.epochs;){let a={};await k.onEpochBegin(C);let i=0,f=0;for(c||(w=await t.iterator());!c||i<n.batchesPerEpoch;){let t=await w.next();if(c&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${i} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(null!=t.value){let{xs:a,ys:o}=u(e,t.value),c={};c.batch=f,c.size=a[0].shape[0],await k.onBatchBegin(f,c);let h=[];if(null!=n.classWeight){let t=(0,l.Vf)(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)h.push(await (0,l.tl)(o[e],null,t[e]))}let d=a.concat(o).concat(h),p=x(d);r.dispose(d);for(let e=0;e<b.length;++e){let t=b[e],n=p[e];c[t]=n,r.keep(n)}await k.onBatchEnd(f,c),(0,s.i)(c),f++,i++}if(c?i>=n.batchesPerEpoch:t.done){if(g){let t;t=d(n.validationData)?(0,o.zZ)(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):(0,o.zZ)(e.evaluate(h,p,{batchSize:null==n.validationBatchSize?32:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)a[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await k.onEpochEnd(C,a),C++,e.stopTraining_)break}return await k.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function d(e){return"function"==typeof e.iterator}async function p(e,t,n){let a=null!=(n=n||{}).batches,s=e.testFunction,l=[];if(n.verbose>0)throw new i.nj("Verbose mode is not implemented yet.");r.util.assert(!a||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let c="function"==typeof t.next?t:await t.iterator(),h=0,d=0;for(;!a||d<n.batches;){let t=await c.next();if(l=r.tidy(()=>{if(t.value){let{xs:n,ys:a}=u(e,t.value),i=n.concat(a),o=r.tidy(()=>s(i));if(r.dispose(i),0===d)for(let e=0;e<o.length;++e)l.push((0,r.scalar)(0));let c=i[0].shape[0];for(let e=0;e<o.length;++e){let t=o[e],n=l[e];l[e]=r.tidy(()=>r.add(l[e],r.mul(c,t))),d>0&&r.dispose(n)}r.dispose(o),h+=c,++d}return l}),t.done){a&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<l.length;++e){let t=l[e];l[e]=r.div(l[e],h),r.dispose(t)}return(0,o.Bq)(l)}},85583:function(e,t,n){n.d(t,{R_:function(){return o},YV:function(){return l},YX:function(){return function e(t,n){return r.tidy(()=>null==t?null:Array.isArray(t)?t.map(t=>e(t,n)):(0,a.Iq)(t,"int32"===n.dtype?n:r.cast(n,"int32")))}},fQ:function(){return i},kS:function(){return u},sf:function(){return s}});var r=n(46040),a=n(1552);function i(e){r.util.assert(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function s(e,t,n){return null==e?[null]:Array.isArray(e)?e.map(e=>(0,a.c9)(e,t,n-t)):(0,a.c9)(e,t,n-t)}function o(e,t){let n=[],r=0,a=null;for(;r<e;)(a=r+t)>=e&&(a=e),n.push([r,a]),r=a;return n}function l(e){let t=[];e instanceof r.Tensor&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(1===r.rank)t.push((0,a.dt)(r,1));else if(0===r.rank)throw Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");else t.push(r)}return t}function u(e,t){if(null==e)return;let n=[];if(t instanceof r.Tensor)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(null!=t)for(let e in t){let r=t[e];n.push(r.id)}let a=[];if(e instanceof r.Tensor)-1===n.indexOf(e.id)&&a.push(e);else if(Array.isArray(e))e.forEach(e=>{-1===n.indexOf(e.id)&&a.push(e)});else if(null!=e)for(let t in e){let r=e[t];-1===n.indexOf(r.id)&&a.push(r)}a.forEach(e=>{e.isDisposed||e.dispose()})}},25602:function(e,t,n){n.d(t,{Vf:function(){return a},mo:function(){return s},tl:function(){return i}});var r=n(46040);function a(e,t){return function(e,t,n){let r=t.length;if(null==e||Array.isArray(e)&&0===e.length)return t.map(e=>null);if(1===r)return Array.isArray(e)&&1===e.length?e:"object"==typeof e&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}if("object"==typeof e&&Object.keys(e).length>0&&"object"==typeof e[Object.keys(e)[0]]){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}(e,t,"classWeight")}async function i(e,t,n,a){if(null!=t||null!=a)throw Error("Support sampleWeight is not implemented yet");if(null==n)return null;{let t=(0,r.tidy)(()=>{if(1===e.shape.length)return(0,r.clone)(e);if(2===e.shape.length){if(e.shape[1]>1)return(0,r.argMax)(e,1);if(1===e.shape[1])return(0,r.reshape)(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),a=Array.from(await t.data());(0,r.dispose)(t);let i=[];return a.forEach(e=>{if(null==n[e])throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),(0,r.tensor1d)(i,"float32")}}function s(e,t){return(0,r.mul)(e,t)}},64579:function(e,t,n){n.d(t,{LH:function(){return a},j1:function(){return r},nj:function(){return s},nu:function(){return i},ps:function(){return o}});class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}}class a extends Error{constructor(e){super(e),Object.setPrototypeOf(this,a.prototype)}}class i extends Error{constructor(e){super(e),Object.setPrototypeOf(this,i.prototype)}}class s extends Error{constructor(e){super(e),Object.setPrototypeOf(this,s.prototype)}}class o extends Error{constructor(e){super(e),Object.setPrototypeOf(this,o.prototype)}}},70738:function(e,t,n){n.d(t,{FB:function(){return s.FB},Pe:function(){return l},gl:function(){return c},o4:function(){return o},qH:function(){return u}});var r=n(19914),a=n(84996),i=n(6897),s=n(72978);function o(e){return new i.QV(e)}function l(e){return new s.sb(e)}function u(e){return(0,a.I)(e)}function c(e,t){r.Sk.registerCallbackConstructor(e,t)}},79878:function(e,t,n){n.d(t,{sr:function(){return f},Jf:function(){return k},sq:function(){return v},RP:function(){return I},rB:function(){return C},iJ:function(){return b},m7:function(){return h},V9:function(){return w},yD:function(){return S},M6:function(){return p},vG:function(){return N},MD:function(){return g},Is:function(){return m},w8:function(){return x},xc:function(){return y},H_:function(){return d},L5:function(){return E},Cx:function(){return $}});var r=n(46040),a=n(1552),i=n(38440),s=n(64579);let o=["fanIn","fanOut","fanAvg"],l=["normal","uniform","truncatedNormal"];var u=n(94120),c=n(86314);class h extends r.serialization.Serializable{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class d extends h{apply(e,t){return(0,r.zeros)(e,t)}}d.className="Zeros",r.serialization.registerClass(d);class p extends h{apply(e,t){return(0,r.ones)(e,t)}}p.className="Ones",r.serialization.registerClass(p);class f extends h{constructor(e){if(super(),"object"!=typeof e)throw new s.nu(`Expected argument of type ConstantConfig but got ${e}`);if(void 0===e.value)throw new s.nu(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return(0,r.tidy)(()=>(0,r.mul)((0,r.scalar)(this.value),(0,r.ones)(e,t)))}getConfig(){return{value:this.value}}}f.className="Constant",r.serialization.registerClass(f);class m extends h{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return(0,r.randomUniform)(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}m.className="RandomUniform",r.serialization.registerClass(m);class g extends h{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if("float32"!==(t=t||"float32")&&"int32"!==t)throw new s.nj(`randomNormal does not support dType ${t}.`);return a.nG(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}g.className="RandomNormal",r.serialization.registerClass(g);class x extends h{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if("float32"!==(t=t||"float32")&&"int32"!==t)throw new s.nj(`truncatedNormal does not support dType ${t}.`);return(0,r.truncatedNormal)(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}x.className="TruncatedNormal",r.serialization.registerClass(x);class b extends h{constructor(e){super(),this.gain=null!=e.gain?e.gain:1}apply(e,t){return(0,r.tidy)(()=>{if(2===e.length&&e[0]===e[1])return(0,r.mul)(this.gain,(0,r.eye)(e[0]));throw new s.nu("Identity matrix initializer can only be used for 2D square matrices.")})}getConfig(){return{gain:this.gain}}}b.className="Identity",r.serialization.registerClass(b);class y extends h{constructor(e){var t,n;if(super(),e.scale<0)throw new s.nu(`scale must be a positive float. Got: ${e.scale}`);this.scale=null==e.scale?1:e.scale,this.mode=null==e.mode?"fanIn":e.mode,t=this.mode,(0,u.xn)(o,"FanMode",t),this.distribution=null==e.distribution?"normal":e.distribution,n=this.distribution,(0,u.xn)(l,"Distribution",n),this.seed=e.seed}apply(e,t){let n=function(e,t="channelsLast"){let n,r;if((0,i.cj)(t),2===e.length)n=e[0],r=e[1];else if(-1!==[3,4,5].indexOf(e.length)){if("channelsFirst"===t){let t=(0,c.NS)(e,2);n=e[1]*t,r=e[0]*t}else if("channelsLast"===t){let t=(0,c.NS)(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=(0,c.NS)(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}(e),a=n[0],o=n[1],l=this.scale;if("fanIn"===this.mode?l/=Math.max(1,a):"fanOut"===this.mode?l/=Math.max(1,o):l/=Math.max(1,(a+o)/2),"normal"===this.distribution){let n=Math.sqrt(l);if("float32"!==(t=t||"float32")&&"int32"!==t)throw new s.nj(`${this.getClassName()} does not support dType ${t}.`);return(0,r.truncatedNormal)(e,0,n,t,this.seed)}{let n=Math.sqrt(3*l);return(0,r.randomUniform)(e,-n,n,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}y.className="VarianceScaling",r.serialization.registerClass(y);class v extends y{constructor(e){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:null==e?null:e.seed})}getClassName(){return y.className}}v.className="GlorotUniform",r.serialization.registerClass(v);class k extends y{constructor(e){super({scale:1,mode:"fanAvg",distribution:"normal",seed:null==e?null:e.seed})}getClassName(){return y.className}}k.className="GlorotNormal",r.serialization.registerClass(k);class I extends y{constructor(e){super({scale:2,mode:"fanIn",distribution:"normal",seed:null==e?null:e.seed})}getClassName(){return y.className}}I.className="HeNormal",r.serialization.registerClass(I);class C extends y{constructor(e){super({scale:2,mode:"fanIn",distribution:"uniform",seed:null==e?null:e.seed})}getClassName(){return y.className}}C.className="HeUniform",r.serialization.registerClass(C);class w extends y{constructor(e){super({scale:1,mode:"fanIn",distribution:"normal",seed:null==e?null:e.seed})}getClassName(){return y.className}}w.className="LeCunNormal",r.serialization.registerClass(w);class S extends y{constructor(e){super({scale:1,mode:"fanIn",distribution:"uniform",seed:null==e?null:e.seed})}getClassName(){return y.className}}S.className="LeCunUniform",r.serialization.registerClass(S);class N extends h{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=null==e.gain?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return(0,r.tidy)(()=>{if(e.length<2)throw new s.nj("Shape must be at least 2D.");if("int32"!==t&&"float32"!==t&&void 0!==t)throw TypeError(`Unsupported data type ${t}.`);let n=r.util.sizeFromShape(e.slice(0,-1)),i=e[e.length-1],o=n*i;o>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${o}) elements: Slowness may result.`);let l=a.nG([Math.max(i,n),Math.min(i,n)],0,1,t,this.seed),u=r.linalg.qr(l,!1),c=u[0],h=u[1].flatten().stridedSlice([0],[Math.min(i,n)*Math.min(i,n)],[Math.min(i,n)+1]);return c=(0,r.mul)(c,h.sign()),n<i&&(c=c.transpose()),(0,r.mul)((0,r.scalar)(this.gain),c.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}}N.className="Orthogonal",r.serialization.registerClass(N);let T={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function A(e,t={}){return(0,u.tU)(e,r.serialization.SerializationMap.getMap().classNameMap,t,"initializer")}function $(e){return(0,u.Kj)(e)}function E(e){if("string"==typeof e){let t=e in T?T[e]:e;if("GlorotNormal"===t)return new k;if("GlorotUniform"===t)return new v;{if("HeNormal"===t)return new I;if("HeUniform"===t)return new C;if("LeCunNormal"===t)return new w;if("LeCunUniform"===t)return new S;let e={};return e.className=t,e.config={},A(e)}}return e instanceof h?e:A(e)}},43872:function(e,t,n){n.d(t,{MK:function(){return s},Mz:function(){return a},PS:function(){return r},eY:function(){return o},zx:function(){return i}});let r=["channelsFirst","channelsLast"],a=["nearest","bilinear"],i=["valid","same","causal"],s=["max","avg"],o=["sum","mul","concat","ave"]},95807:function(e,t,n){n.d(t,{Cv:function(){return f},Gc:function(){return g},Ln:function(){return m},UH:function(){return d},_H:function(){return p},qi:function(){return h}});var r=n(46040),a=n(39992),i=n(22380),s=n(64580),o=n(64579),l=n(79878),u=n(18030),c=n(97982);class h extends s.mh{constructor(e){super(null==e?{}:e),this.supportsMasking=!0,null!=e&&(this.maxValue=e.maxValue)}call(e,t){e=(0,c.nQ)(e);let n=(0,r.relu)(e);return null!=this.maxValue&&(n=(0,r.clipByValue)(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue};return Object.assign(e,super.getConfig()),e}}h.className="ReLU",r.serialization.registerClass(h);class d extends s.mh{constructor(e){super(null==e?{}:e),this.DEFAULT_ALPHA=.3,null==e&&(e={}),this.alpha=null==e.alpha?this.DEFAULT_ALPHA:e.alpha}call(e,t){let n=(0,c.nQ)(e);return(0,r.leakyRelu)(n,this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha};return Object.assign(e,super.getConfig()),e}}d.className="LeakyReLU",r.serialization.registerClass(d);class p extends s.mh{constructor(e){if(super(null==e?{}:e),this.DEFAULT_ALPHA_INITIALIZER="zeros",null==e&&(e={}),this.supportsMasking=!0,this.alphaInitializer=(0,l.L5)(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=(0,u.EC)(e.alphaRegularizer),this.alphaConstraint=(0,i.Ad)(e.alphaConstraint),null==e.sharedAxes)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if("number"==typeof e.sharedAxes)this.sharedAxes=[e.sharedAxes];else throw new o.nu(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){let t=(e=(0,c.Wf)(e)).slice(1);if(null!=this.sharedAxes)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight("alpha",t,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(null!=this.sharedAxes)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new s.Zg({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=(0,c.nQ)(e),(0,r.prelu)(e,this.alpha.read())}getConfig(){let e={alphaInitializer:(0,l.Cx)(this.alphaInitializer),alphaRegularizer:(0,u.SG)(this.alphaRegularizer),alphaConstraint:(0,i.xF)(this.alphaConstraint),sharedAxes:this.sharedAxes};return Object.assign(e,super.getConfig()),e}}p.className="PReLU",r.serialization.registerClass(p);class f extends s.mh{constructor(e){if(super(null==e?{}:e),this.DEFAULT_ALPHA=1,null==e&&(e={}),null!=e.alpha&&e.alpha!==this.DEFAULT_ALPHA)throw new o.nj(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=null==e.alpha?this.DEFAULT_ALPHA:e.alpha}call(e,t){let n=(0,c.nQ)(e);return(0,r.elu)(n)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha};return Object.assign(e,super.getConfig()),e}}f.className="ELU",r.serialization.registerClass(f);class m extends s.mh{constructor(e){super(null==e?{}:e),this.DEFAULT_THETA=1,null==e&&(e={}),this.theta=null==e.theta?this.DEFAULT_THETA:e.theta}call(e,t){let n=(0,c.nQ)(e);return(0,r.mul)(n,(0,r.cast)((0,r.greater)(n,this.theta),"float32"))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta};return Object.assign(e,super.getConfig()),e}}m.className="ThresholdedReLU",r.serialization.registerClass(m);class g extends s.mh{constructor(e){super(null==e?{}:e),this.DEFAULT_AXIS=1,null==e&&(e={}),this.softmax=new a.Gc().apply,this.axis=null==e.axis?this.DEFAULT_AXIS:e.axis}call(e,t){return(0,r.tidy)(()=>{let n=(0,c.nQ)(e),a=t.mask;if(null!=a){let e=(0,r.mul)((0,r.sub)((0,r.ones)(n.shape),(0,r.cast)(a,n.dtype)),(0,r.scalar)(-1e9));n=(0,r.add)(n,e)}return this.axis instanceof Array?this.axis.length>1?(0,r.exp)((0,r.sub)(n,(0,r.logSumExp)(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis};return Object.assign(e,super.getConfig()),e}}g.className="Softmax",r.serialization.registerClass(g)},45748:function(e,t,n){n.d(t,{$:function(){return f}});var r=n(46040),a=n(10685),i=n(1552),s=n(38440),o=n(22380),l=n(64579),u=n(79878),c=n(18030),h=n(59997),d=n(97982),p=n(19458);class f extends p.nx{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=null==e.depthMultiplier?1:e.depthMultiplier,this.depthwiseInitializer=(0,u.L5)(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=(0,o.Ad)(e.depthwiseConstraint),this.depthwiseRegularizer=(0,c.EC)(e.depthwiseRegularizer)}build(e){if((e=(0,d.Wf)(e)).length<4)throw new l.nu(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t="channelsFirst"===this.dataFormat?1:3;if(null==e[t]||e[t]<0)throw new l.nu(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return(0,r.tidy)(()=>{let t=function(e,t,n=[1,1],i="valid",o,u){return(0,r.tidy)(()=>{null==o&&(o=(0,a.rf)()),(0,s.cj)(o);let u=(0,p.aP)(e,o);if(4!==e.rank)throw new l.nu(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(4!==t.rank)throw new l.nu(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return u=r.depthwiseConv2d(u,t,n,"same"===i?"same":"valid","NHWC",null),"channelsFirst"===o&&(u=r.transpose(u,[0,3,1,2])),u})}(e=(0,d.nQ)(e),this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,0);return this.useBias&&(t=i.a2(t,this.bias.read(),this.dataFormat)),null!=this.activation&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=(0,d.Wf)(e);let t="channelsFirst"===this.dataFormat?e[2]:e[1],n="channelsFirst"===this.dataFormat?e[3]:e[2],r="channelsFirst"===this.dataFormat?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,a=(0,h.kt)(t,this.kernelSize[0],this.padding,this.strides[0]),i=(0,h.kt)(n,this.kernelSize[1],this.padding,this.strides[1]);return"channelsFirst"===this.dataFormat?[e[0],r,a,i]:[e[0],a,i,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=(0,u.Cx)(this.depthwiseInitializer),e.depthwiseRegularizer=(0,c.SG)(this.depthwiseRegularizer),e.depthwiseConstraint=(0,o.xF)(this.depthwiseRegularizer),e}}f.className="DepthwiseConv2D",r.serialization.registerClass(f)},83078:function(e,t,n){n.d(t,{a:function(){return m},p:function(){return g}});var r=n(46040),a=n(1552),i=n(38440),s=n(64580),o=n(64579),l=n(79878),u=n(59997),c=n(94120),h=n(97982),d=n(85903),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};class f extends d.$p{constructor(e){if(e.unroll)throw new o.nj("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(e.cell))throw new o.nj("It is not possible at the moment to stack convolutional cells.");super(e),this.inputSpec=[new s.Zg({ndim:5})]}call(e,t){return r.tidy(()=>{if(null!=this.cell.dropoutMask&&(r.dispose(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(r.dispose(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new o.nu("ConvRNN2D cell does not support constants");let n=null==t?null:t.mask,a=null==t?null:t.training,i=null==t?null:t.initialState;return super.call(e,{mask:n,training:a,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return r.tidy(()=>{let{stateSize:t}=this.cell,n=e.shape,a=this.computeSingleOutputShape(n),i=[a[0],...a.slice(2)],s=r.zeros(i);return Array.isArray(t)?Array(t.length).fill(s):[s]})}resetStates(e,t=!1){r.tidy(()=>{if(!this.stateful)throw new o.j1("Cannot call resetStates() on an RNN Layer that is not stateful.");let n=this.inputSpec[0].shape,a=this.computeSingleOutputShape(n),i=[a[0],...a.slice(2)];if(null==n[0])throw new o.nu("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(null==this.getStates())Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>r.zeros(i)):this.states_=[r.zeros(i)];else if(null==e)r.dispose(this.states_),null!=this.keptStates&&(r.dispose(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>r.zeros(i)):this.states_[0]=r.zeros(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new o.nu(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):r.dispose(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t];if(!r.util.arraysEqual(n.shape,i))throw new o.nu(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>r.keep(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:a,strides:i,dilationRate:s}=this.cell,o="channelsFirst"===t,l=e[o?3:2],c=e[o?4:3],h=(0,u.kt)(l,r[0],a,i[0],s[0]),d=(0,u.kt)(c,r[1],a,i[1],s[1]);return[...e.slice(0,2),...o?[n,h,d]:[h,d,n]]}}f.className="ConvRNN2D";class m extends d.U7{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:a,dataFormat:s,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,(0,c.iQ)(this.filters,"filters"),this.kernelSize=(0,u.AF)(n,2,"kernelSize"),this.kernelSize.forEach(e=>(0,c.iQ)(e,"kernelSize")),this.strides=(0,u.AF)(r||1,2,"strides"),this.strides.forEach(e=>(0,c.iQ)(e,"strides")),this.padding=a||"valid",(0,i.zb)(this.padding),this.dataFormat=s||"channelsLast",(0,i.cj)(this.dataFormat),this.dilationRate=(0,u.AF)(o||1,2,"dilationRate"),this.dilationRate.forEach(e=>(0,c.iQ)(e,"dilationRate"))}build(e){var t;e=(0,h.Wf)(e);let n="channelsFirst"===this.dataFormat?1:e.length-1;if(null==e[n])throw new o.nu(`The channel dimension of the input should be defined. Found ${e[n]}`);let i=e[n],s=this.kernelSize.concat([i,4*this.filters]);this.kernel=this.addWeight("kernel",s,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let u=this.kernelSize.concat([this.filters,4*this.filters]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",u,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,i=this.filters;e=new((t=class extends l.m7{apply(e,t){let s=n.apply([i]),o=r.ones([i]),l=n.apply([2*i]);return a.mV([s,o,l])}}).className="CustomInit",t)}else e=this.biasInitializer;this.bias=this.addWeight("bias",[4*this.filters],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return r.tidy(()=>{if(3!==e.length)throw new o.nu(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,a=e[0],i=e[1],s=e[2];0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=(0,d._0)({ones:()=>r.onesLike(a),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let l=this.dropoutMask,u=(e,t,n)=>t&&t[n]?r.mul(t[n],e):e,c=u(a,l,0),h=u(a,l,1),p=u(a,l,2),f=u(a,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=(0,d._0)({ones:()=>r.onesLike(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let m=this.recurrentDropoutMask,g=u(i,m,0),x=u(i,m,1),b=u(i,m,2),y=u(i,m,3),[v,k,I,C]=r.split(this.kernel.read(),4,3),[w,S,N,T]=this.useBias?r.split(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,v,w,this.padding),h=this.inputConv(h,k,S,this.padding),p=this.inputConv(p,I,N,this.padding),f=this.inputConv(f,C,T,this.padding);let[A,$,E,F]=r.split(this.recurrentKernel.read(),4,3);g=this.recurrentConv(g,A),x=this.recurrentConv(x,$),b=this.recurrentConv(b,E),y=this.recurrentConv(y,F);let R=this.recurrentActivation.apply(r.add(c,g)),D=this.recurrentActivation.apply(r.add(h,x)),_=r.add(r.mul(D,s),r.mul(R,this.activation.apply(r.add(p,b)))),O=r.mul(this.recurrentActivation.apply(r.add(f,y)),this.activation.apply(_));return[O,O,_]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=p(e,["units"]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,i){let s=r.conv2d(e,t,this.strides,i||"valid","channelsFirst"===this.dataFormat?"NCHW":"NHWC",this.dilationRate);return n?a.a2(s,n,this.dataFormat):s}recurrentConv(e,t){return r.conv2d(e,t,1,"same","channelsFirst"===this.dataFormat?"NCHW":"NHWC")}}m.className="ConvLSTM2DCell",r.serialization.registerClass(m);class g extends f{constructor(e){super(Object.assign(Object.assign({},e),{cell:new m(e)}))}static fromConfig(e,t){return new e(t)}}g.className="ConvLSTM2D",r.serialization.registerClass(g)},16735:function(e,t,n){n.d(t,{E7:function(){return y},Ex:function(){return m},HZ:function(){return v},Jq:function(){return b},Jw:function(){return I},mb:function(){return g},qj:function(){return x},vf:function(){return f},xV:function(){return k}});var r=n(46040),a=n(39992),i=n(1552),s=n(22380),o=n(64580),l=n(64579),u=n(79878),c=n(18030),h=n(94120),d=n(86314),p=n(97982);class f extends o.mh{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(null==this.noiseShape)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(null==this.noiseShape[e]?t[e]:this.noiseShape[e]);return n}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,p.nQ)(e);if(0<this.rate&&this.rate<1){let e=null!=t.training&&t.training,r=this.getNoiseShape(n);return i.KC(()=>i.rv(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed};return Object.assign(e,super.getConfig()),e}dispose(){return super.dispose()}}f.className="Dropout",r.serialization.registerClass(f);class m extends f{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}}m.className="SpatialDropout1D",r.serialization.registerClass(m);class g extends o.mh{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",null==e.batchInputShape&&null==e.inputShape&&null!=e.inputDim){let t=null;null!=e.batchSize&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,(0,h.iQ)(this.units,"units"),this.activation=(0,a.aI)(e.activation),null!=e.useBias&&(this.useBias=e.useBias),this.kernelInitializer=(0,u.L5)(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=(0,u.L5)(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=(0,s.Ad)(e.kernelConstraint),this.biasConstraint=(0,s.Ad)(e.biasConstraint),this.kernelRegularizer=(0,c.EC)(e.kernelRegularizer),this.biasRegularizer=(0,c.EC)(e.biasRegularizer),this.activityRegularizer=(0,c.EC)(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){let t=(e=(0,p.Wf)(e))[e.length-1];null==this.kernel&&(this.kernel=this.addWeight("kernel",[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){let t=(e=(0,p.Wf)(e)).slice();return t[t.length-1]=this.units,t}call(e,t){return(0,r.tidy)(()=>{let n;this.invokeCallHook(e,t);let r=(0,p.nQ)(e),a=(0,h.WT)(this.activation.getClassName());return null!=a?n=i.AK(r,this.kernel.read(),a,this.bias?this.bias.read():null):(n=i.AK(r,this.kernel.read()),null!=this.bias&&(n=i.a2(n,this.bias.read())),null!=this.activation&&(n=this.activation.apply(n))),n})}getConfig(){let e={units:this.units,activation:(0,a.GD)(this.activation),useBias:this.useBias,kernelInitializer:(0,u.Cx)(this.kernelInitializer),biasInitializer:(0,u.Cx)(this.biasInitializer),kernelRegularizer:(0,c.SG)(this.kernelRegularizer),biasRegularizer:(0,c.SG)(this.biasRegularizer),activityRegularizer:(0,c.SG)(this.activityRegularizer),kernelConstraint:(0,s.xF)(this.kernelConstraint),biasConstraint:(0,s.xF)(this.biasConstraint)};return Object.assign(e,super.getConfig()),e}}g.className="Dense",r.serialization.registerClass(g);class x extends o.mh{constructor(e){super(e=e||{}),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){for(let t of(e=(0,p.Wf)(e)).slice(1))if(null==t)throw new l.nu(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],(0,d.NS)(e,1)]}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,p.nQ)(e);if("channelsFirst"===this.dataFormat&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=(0,r.transpose)(n,e)}return i.Uz(n)})}getConfig(){let e={};return null!=this.dataFormat&&(e.dataFormat=this.dataFormat),Object.assign(e,super.getConfig()),e}}x.className="Flatten",r.serialization.registerClass(x);class b extends o.mh{constructor(e){super(e),this.supportsMasking=!0,this.activation=(0,a.aI)(e.activation)}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,p.nQ)(e);return this.activation.apply(n)})}getConfig(){let e={activation:(0,a.GD)(this.activation)};return Object.assign(e,super.getConfig()),e}}b.className="Activation",r.serialization.registerClass(b);class y extends o.mh{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return(0,r.tidy)(()=>(e=(0,p.nQ)(e),i.rx(e,this.n)))}getConfig(){let e={n:this.n};return Object.assign(e,super.getConfig()),e}}y.className="RepeatVector",r.serialization.registerClass(y);class v extends o.mh{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||null==e}fixUnknownDimension(e,t){let n="Total size of new array must be unchanged.",r=t.slice(),a=1,i=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t)){if(null===i)i=e;else throw new l.nu("Can only specifiy one unknown dimension.")}else a*=t}let s=(0,d.NS)(e);if(null!==i){if(0===a||s%a!=0)throw new l.nu(n);r[i]=s/a}else if(s!==a)throw new l.nu(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,p.nQ)(e),a=n.shape,i=a.slice(0,1).concat(this.fixUnknownDimension(a.slice(1),this.targetShape));return(0,r.reshape)(n,i)})}getConfig(){let e={targetShape:this.targetShape};return Object.assign(e,super.getConfig()),e}}v.className="Reshape",r.serialization.registerClass(v);class k extends o.mh{constructor(e){if(super(e),null==e.dims)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=(0,d.w6)(1,e.dims.length+1);if(!r.util.arraysEqual(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new o.Zg({ndim:this.dims.length+1})]}computeOutputShape(e){let t=(e=(0,p.Wf)(e)).slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return(0,r.transpose)((0,p.nQ)(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims};return Object.assign(e,super.getConfig()),e}}k.className="Permute",r.serialization.registerClass(k);class I extends o.mh{constructor(e){super(null==e?{}:e),this.supportsMasking=!0,null!=e?this.maskValue=null==e.maskValue?0:e.maskValue:this.maskValue=0}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){let n=(0,p.nQ)(e);return(0,r.any)((0,r.notEqual)(n,this.maskValue),-1)}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,p.nQ)(e),a=(0,r.any)((0,r.notEqual)(n,this.maskValue),-1,!0);return(0,r.mul)(n,(0,r.cast)(a,n.dtype))})}}I.className="Masking",r.serialization.registerClass(I)},35372:function(e,t,n){n.d(t,{C:function(){return d}});var r=n(46040),a=n(1552),i=n(22380),s=n(64580),o=n(64579),l=n(79878),u=n(18030),c=n(94120),h=n(97982);class d extends s.mh{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",null==e.batchInputShape&&null==e.inputShape){let t=null;null!=e.batchSize&&(t=e.batchSize),null==e.inputLength?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(c.zZ(e.inputLength))}this.inputDim=e.inputDim,c.iQ(this.inputDim,"inputDim"),this.outputDim=e.outputDim,c.iQ(this.outputDim,"outputDim"),this.embeddingsInitializer=(0,l.L5)(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=(0,u.EC)(e.embeddingsRegularizer),this.activityRegularizer=(0,u.EC)(e.activityRegularizer),this.embeddingsConstraint=(0,i.Ad)(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return(0,r.tidy)(()=>this.maskZero?(e=(0,h.nQ)(e),(0,r.notEqual)(e,(0,r.zerosLike)(e))):null)}computeOutputShape(e){if(e=(0,h.Wf)(e),null==this.inputLength)return[...e,this.outputDim];let t=c.zZ(this.inputLength);if(t.length!==e.length-1)throw new o.nu(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let a=t[r],i=e[r+1];if(null!=a&&null!=i&&a!==i)throw new o.nu(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);null==a&&(t[n]=i),n++}}return[e[0],...t,this.outputDim]}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,h.nQ)(e);"int32"!==n.dtype&&(n=a.pj(n,"int32"));let i=a.Iq(this.embeddings.read(),(0,r.reshape)(n,[n.size]));return(0,r.reshape)(i,(0,h.Wf)(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:(0,l.Cx)(this.embeddingsInitializer),embeddingsRegularizer:(0,u.SG)(this.embeddingsRegularizer),activityRegularizer:(0,u.SG)(this.activityRegularizer),embeddingsConstraint:(0,i.xF)(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength};return Object.assign(e,super.getConfig()),e}}d.className="Embedding",r.serialization.registerClass(d)},57779:function(e,t,n){n.d(t,{Ag:function(){return f},BM:function(){return m},mm:function(){return d},oT:function(){return y},q8:function(){return g},wY:function(){return p},yR:function(){return x}});var r=n(46040),a=n(1552),i=n(64580),s=n(64579),o=n(51957),l=n(94120),u=n(86314),c=n(97982);class h extends i.mh{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new s.nj}computeElementwiseOpOutputShape(e,t){if(null==e||null==t)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(0===t.length)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let a=e[e.length-t.length+r],i=t[r];if(null==a||null==i||a<0||i<0)n.push(null);else if(1===a)n.push(i);else if(1===i)n.push(a);else{if(a!==i)throw new s.nu("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(t));n.push(a)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[(0,c.Wf)(e)]),e.length<2)throw new s.nu(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)null!=n&&null!==n[0]&&t.push(n[0]);if((t=l.Tw(t)).length>1)throw new s.nu(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=null==e[0]?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=null==e[t]?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);-1===e.indexOf(null)&&1===l.Tw(r).length?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return(0,r.tidy)(()=>{if(!this.reshapeRequired)return this.mergeFunction(e);{let t=[],n=e.map(e=>e.rank);if(-1===n.indexOf(null)){let r=u.Fp(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=a.dt(n,1);t.push(n)}return this.mergeFunction(t)}{let n=!1;for(let a of e){let e=a.rank;if(null==e){let e=a.shape,i=e[0],s=e.slice(1).concat([i]),o=r.reshape(a,[i].concat(u.NS(e.slice(1))));o=r.transpose(o,[1,0]),o=r.reshape(o,s),t.push(o),n=!0}else if(e>1){let i=u.w6(1,e).concat([0]);t.push(r.transpose(a,i)),n=!0}else t.push(a)}let a=this.mergeFunction(t),i=a.rank;if(n){if(null==i){let e=a.shape,t=e.length,n=e[t-1],i=[n].concat(e.slice(0,e.length-1));a=r.reshape(r.transpose(r.reshape(a,[-1,n]),[1,0]),i)}else if(i>1){let e=[i-1].concat(u.w6(0,i-1));a=r.transpose(a,e)}}return a}}})}computeOutputShape(e){let t;t=null==e[0]?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=null==e[n]?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)null!=t&&null!==t[0]&&n.push(t[0]);return 1===(n=l.Tw(n)).length?n.concat(t):[null].concat(t)}computeMask(e,t){return r.tidy(()=>{if(null==t)return null;if(!Array.isArray(t))throw new s.nu("`mask` should be an Array");if(!Array.isArray(e))throw new s.nu("`inputs` should be an Array");if(t.length!==e.length)throw new s.nu(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>null==e))return null;let n=(t=t.map(e=>null==e?e:r.expandDims(e,0)))[0];for(let e=1;e<t.length-1;++e)n=r.logicalAnd(n,t[e]);return n})}}class d extends h{constructor(e){super(e)}mergeFunction(e){return(0,r.tidy)(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=r.add(t,e[n]);return t})}}d.className="Add",r.serialization.registerClass(d);class p extends h{constructor(e){super(e)}mergeFunction(e){return(0,r.tidy)(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=r.mul(t,e[n]);return t})}}p.className="Multiply",r.serialization.registerClass(p);class f extends h{constructor(e){super(e)}mergeFunction(e){return(0,r.tidy)(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=r.add(t,e[n]);return r.mul(1/e.length,t)})}}f.className="Average",r.serialization.registerClass(f);class m extends h{constructor(e){super(e)}mergeFunction(e){return(0,r.tidy)(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=r.maximum(t,e[n]);return t})}}m.className="Maximum",r.serialization.registerClass(m);class g extends h{constructor(e){super(e)}mergeFunction(e){return(0,r.tidy)(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=r.minimum(t,e[n]);return t})}}g.className="Minimum",r.serialization.registerClass(g);class x extends h{constructor(e){super(e),this.DEFAULT_AXIS=-1,null==e&&(e={}),this.axis=null==e.axis?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||1===e.length)throw new s.nu("A `Concatenate` layer should be called on a list of at least 2 inputs");let t=!0;for(let n of e)if(null!=n){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let a=e[t].slice();a.splice(this.axis,1);let i=!1;for(let e of n)if(r.util.arraysEqual(e,a)){i=!0;break}i||n.push(a)}if(n.length>1)throw new s.nu("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return(0,r.tidy)(()=>a.mV(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new s.nu("A `Concatenate` layer should be called on a list of inputs.");let t=e[0].slice(),n=this.axis<0?t.length+this.axis:this.axis;for(let r of e.slice(1)){if(null==t[n]||null==r[n]){t[n]=null;break}t[n]+=r[n]}return t}computeMask(e,t){if(null==t)return null;if(!Array.isArray(t))throw new s.nu("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new s.nu("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new s.nu(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return r.tidy(()=>{let n=!0;if(t.forEach(e=>{if(null!=e){n=!1;return}}),n)return null;let a=[];for(let n=0;n<e.length;++n)null==t[n]?a.push(r.cast(r.onesLike(e[n]),"bool")):t[n].rank<e[n].rank?a.push(r.expandDims(t[n],-1)):a.push(t[n]);let i=r.concat(a,this.axis);return r.all(i,-1,!1)})}getConfig(){let e={axis:this.axis};return Object.assign(e,super.getConfig()),e}}function b(e,t){for(;e<0;)e+=t;return e}x.className="Concatenate",r.serialization.registerClass(x);class y extends h{constructor(e){super(e),this.axes=e.axes,this.normalize=null!=e.normalize&&e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){r.util.assert(Array.isArray(e)&&2===e.length&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new s.nj("Dot layer does not support tensors of 4D or higher rank yet.");let a=this.interpretAxes(t,n);if(t[a[0]]!==n[a[1]])throw new s.nu(`Dimension incompatibility: ${t[a[0]]} !== ${n[a[1]]}`)}mergeFunction(e){let t;if(2!==e.length)throw new s.nu(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let n=e[0],a=e[1];return t=Array.isArray(this.axes)?this.axes.map((t,n)=>b(t,e[n].shape.length)):[b(this.axes,n.shape.length),b(this.axes,a.shape.length)],this.normalize&&(n=(0,o.Eq)(n,t[0]),a=(0,o.Eq)(a,t[1])),function(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new s.nj("batchDot is not implemented for tensors of 4D or higher rank yet");if(r.util.assert(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),r.util.assert(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),"number"==typeof n&&(n=[n,n]),"complex64"===e.dtype||"complex64"===t.dtype)throw new s.nj("batchDot is not implemented for complex64-type Tensors yet.");let a=e.shape.length,i=t.shape.length;null==n&&(n=[a-1,i-2]);let o=n;return r.tidy(()=>{let n,s;if(a>i){n=a-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=r.reshape(t,t.shape.concat(e))}else if(i>a){n=i-a;let t=[];for(let e=0;e<n;++e)t.push(1);e=r.reshape(e,e.shape.concat(t))}else n=0;if(2===e.shape.length&&2===t.shape.length)s=o[0]===o[1]?r.sum(r.mul(e,t),o[0]):r.sum(r.mul(r.transpose(e,[1,0]),t),o[1]);else{let n=o[0]!==e.shape.length-1,a=o[1]===t.shape.length-1;s=r.matMul(e,t,n,a)}if(n>0){let e;e=a>i?a+i-3:a-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);s=r.squeeze(s,t)}return 1===s.shape.length&&(s=r.expandDims(s,1)),s})}(n,a,t)}interpretAxes(e,t){return Array.isArray(this.axes)?this.axes:[b(this.axes,e.length),b(this.axes,t.length)]}computeOutputShape(e){r.util.assert(Array.isArray(e)&&2===e.length&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new s.nj("Dot layer does not support tensors of 4D or higher rank yet.");let a=this.interpretAxes(t,n);t.splice(a[0],1),n.splice(a[1],1),n.splice(0,1);let i=t.concat(n);return 1===i.length&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize};return Object.assign(e,super.getConfig()),e}}y.className="Dot",r.serialization.registerClass(y)},59544:function(e,t,n){n.d(t,{Qt:function(){return o},ZM:function(){return l},aj:function(){return u}});var r=n(46040),a=n(1552),i=n(64580),s=n(97982);class o extends i.mh{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,s.nQ)(e);return a.KC(()=>(0,r.add)(a.nG(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}}o.className="GaussianNoise",r.serialization.registerClass(o);class l extends i.mh{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t);let n=(0,s.nQ)(e);return this.rate>0&&this.rate<1?a.KC(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return(0,r.mul)(n,a.nG(n.shape,1,e))},()=>n,t.training||!1):n})}}l.className="GaussianDropout",r.serialization.registerClass(l);class u extends i.mh{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||(0,s.nQ)(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return(0,r.tidy)(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return a.KC(()=>{let t=(0,s.nQ)(e),i=(0,r.greaterEqual)((0,r.randomUniform)(n),this.rate);i=a.pj(i,"float32");let o=((1-this.rate)*(1+3.09091329228798*this.rate))**-.5,l=-(-1.7580993408473766*o)*this.rate,u=(0,r.add)((0,r.mul)(t,i),(0,r.mul)((0,r.add)(i,-1),-1.7580993408473766));return(0,r.add)((0,r.mul)(u,o),l)},()=>(0,s.nQ)(e),t.training||!1)}return e})}}u.className="AlphaDropout",r.serialization.registerClass(u)},3697:function(e,t,n){n.d(t,{XM:function(){return p},pz:function(){return f}});var r=n(46040),a=n(22380),i=n(64580),s=n(64579),o=n(79878),l=n(18030),u=n(94120),c=n(86314),h=n(97982);function d(e,t,n,a,i,o=.001){let l;if(2===e.rank)l=r.batchNorm2d(e,t,n,a,i,o);else if(3===e.rank)l=r.batchNorm3d(e,t,n,a,i,o);else if(4===e.rank)l=r.batchNorm4d(e,t,n,a,i,o);else throw new s.nj(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return l}class p extends i.mh{constructor(e){null==e&&(e={}),super(e),this.supportsMasking=!0,this.axis=null==e.axis?-1:e.axis,this.momentum=null==e.momentum?.99:e.momentum,this.epsilon=null==e.epsilon?.001:e.epsilon,this.center=null==e.center||e.center,this.scale=null==e.scale||e.scale,this.betaInitializer=(0,o.L5)(e.betaInitializer||"zeros"),this.gammaInitializer=(0,o.L5)(e.gammaInitializer||"ones"),this.movingMeanInitializer=(0,o.L5)(e.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=(0,o.L5)(e.movingVarianceInitializer||"ones"),this.betaConstraint=(0,a.Ad)(e.betaConstraint),this.gammaConstraint=(0,a.Ad)(e.gammaConstraint),this.betaRegularizer=(0,l.EC)(e.betaRegularizer),this.gammaRegularizer=(0,l.EC)(e.gammaRegularizer)}build(e){e=(0,h.Wf)(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(null==n)throw new s.nu(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new i.Zg({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight("gamma",r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return(0,r.tidy)(()=>{let n=null!=t.training&&t.training,a=(0,h.nQ)(e),i=a.shape,s=i.length,o=c.w6(0,s),l=this.axis>=0?this.axis:this.axis+s;o.splice(l,1);let p=u.JE(1,s);p[l]=i[l];let f=o.slice();f.sort();let m=!r.util.arraysEqual(f,c.w6(0,s).slice(0,s-1));if(!n)return(()=>{if(!m)return d(a,this.movingMean.read(),this.movingVariance.read(),null==this.beta?null:this.beta.read(),null==this.gamma?null:this.gamma.read(),this.epsilon);{let e=(0,r.reshape)(this.movingMean.read(),p);return d(a,e,(0,r.reshape)(this.movingVariance.read(),p),this.center?(0,r.reshape)(this.beta.read(),p):null,this.scale?(0,r.reshape)(this.gamma.read(),p):null,this.epsilon)}})();let[g,x,b]=function(e,t,n,a,i=.001){return r.util.arraysEqual(a.slice().sort(),c.w6(0,e.rank-1))?function(e,t,n,a,i=.001){return(0,r.tidy)(()=>{let s=r.moments(e,a),o=s.mean,l=s.variance;return[d(e,o,l,n,t,i),o,l]})}(e,t,n,a,i):function(e,t,n,a,i=.001){return(0,r.tidy)(()=>{let s=r.moments(e,a),o=s.mean,l=s.variance,u=[];for(let t of c.w6(0,e.rank))-1!==a.indexOf(t)?u.push(1):u.push(e.shape[t]);let h=(0,r.reshape)(o,u),p=(0,r.reshape)(l,u),f=null==t?null:(0,r.reshape)(t,u);return[d(e,h,p,null==n?null:(0,r.reshape)(n,u),f,i),o,l]})}(e,t,n,a,i)}(a,this.gamma.read(),this.beta.read(),o,this.epsilon),y=(e,t,n)=>{r.tidy(()=>{let a=e.read(),i=r.mul(r.sub(a,t),1-n);e.write(r.sub(a,i))})};return(()=>{y(this.movingMean,x,this.momentum),y(this.movingVariance,b,this.momentum)})(),g})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:(0,o.Cx)(this.betaInitializer),gammaInitializer:(0,o.Cx)(this.gammaInitializer),movingMeanInitializer:(0,o.Cx)(this.movingMeanInitializer),movingVarianceInitializer:(0,o.Cx)(this.movingVarianceInitializer),betaRegularizer:(0,l.SG)(this.betaRegularizer),gammaRegularizer:(0,l.SG)(this.gammaRegularizer),betaConstraint:(0,a.xF)(this.betaConstraint),gammaConstraint:(0,a.xF)(this.gammaConstraint)};return Object.assign(e,super.getConfig()),e}}p.className="BatchNormalization",r.serialization.registerClass(p);class f extends i.mh{constructor(e){if(null==e&&(e={}),super(e),this.axis=null==e.axis?-1:e.axis,"number"==typeof this.axis){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=null==e.epsilon?.001:e.epsilon,this.center=null==e.center||e.center,this.scale=null==e.scale||e.scale,this.betaInitializer=(0,o.L5)(e.betaInitializer||"zeros"),this.gammaInitializer=(0,o.L5)(e.gammaInitializer||"ones"),this.betaRegularizer=(0,l.EC)(e.betaRegularizer),this.gammaRegularizer=(0,l.EC)(e.gammaRegularizer),this.supportsMasking=!0}build(e){let t=(e=(0,h.Wf)(e)).length;"number"==typeof this.axis&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==u.Tw(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.scale?this.gamma=this.addWeight("gamma",n,"float32",this.gammaInitializer,this.gammaRegularizer,!0):this.gamma=null,this.center?this.beta=this.addWeight("beta",n,"float32",this.betaInitializer,this.betaRegularizer,!0):this.beta=null,this.built=!0}call(e,t){let n=(0,h.nQ)(e),a=n.shape,i=a.length;return(0,r.tidy)(()=>{let{mean:e,variance:t}=(0,r.moments)(n,this.axis,!0),s=u.JE(1,i);for(let e of this.axis)s[e]=a[e];let o=e=>null!=e&&e.shape.length!==i?r.reshape(e,s):e,l=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,h=[],p=[];for(let e=0;e<i;++e)-1!==this.axis.indexOf(e)?(h.push(a[e]),p.push(1)):(h.push(1),p.push(a[e]));return e=r.tile(e,h),t=r.tile(t,h),null!=l&&(l=r.tile(l,p)),null!=c&&(c=r.tile(c,p)),d(n,e,t,c,l,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:(0,o.Cx)(this.betaInitializer),gammaInitializer:(0,o.Cx)(this.gammaInitializer),betaRegularizer:(0,l.SG)(this.betaRegularizer),gammaRegularizer:(0,l.SG)(this.gammaRegularizer)};return Object.assign(e,super.getConfig()),e}}f.className="LayerNormalization",r.serialization.registerClass(f)},87085:function(e,t,n){n.d(t,{Zm:function(){return l}});var r=n(46040),a=n(10685),i=n(64580),s=n(64579),o=n(97982);class l extends i.mh{constructor(e){if(null==e&&(e={}),super(e),this.dataFormat=null==e.dataFormat?(0,a.rf)():e.dataFormat,null==e.padding)this.padding=[[1,1],[1,1]];else if("number"==typeof e.padding)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{let t,n;if(e.padding=e.padding,2!==e.padding.length)throw new s.nu(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);if("number"==typeof e.padding[0])t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,2!==e.padding[0].length)throw new s.nu(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],2!==e.padding[1].length)throw new s.nu(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new i.Zg({ndim:4})]}computeOutputShape(e){let t,n;return(e=(0,o.Wf)(e),"channelsFirst"===this.dataFormat)?(t=null!=e[2]&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=null!=e[3]&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=null!=e[1]&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=null!=e[2]&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return(0,r.tidy)(()=>{var t,n,i;return t=(0,o.nQ)(e),n=this.padding,i=this.dataFormat,(0,r.tidy)(()=>{let e;if(4!==t.rank)throw new s.nu(`temporalPadding expects input tensor to be 4-D, but received a ${t.rank}-D tensor.`);if(null==n&&(n=[[1,1],[1,1]]),2!==n.length||2!==n[0].length||2!==n[1].length)throw new s.nu("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(null==i&&(i=(0,a.rf)()),"channelsLast"!==i&&"channelsFirst"!==i)throw new s.nu(`Unknown data format: ${i}. Supported data formats are 'channelsLast' and 'channelsFirst.`);return e="channelsFirst"===i?[[0,0],[0,0],n[0],n[1]]:[[0,0],n[0],n[1],[0,0]],r.pad(t,e)})})}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat};return Object.assign(e,super.getConfig()),e}}l.className="ZeroPadding2D",r.serialization.registerClass(l)},29426:function(e,t,n){n.d(t,{B1:function(){return g},CQ:function(){return v},FG:function(){return S},Sc:function(){return I},e5:function(){return N},g8:function(){return x},rQ:function(){return A},ux:function(){return y},vu:function(){return $},xv:function(){return C}});var r=n(46040),a=n(10685),i=n(1552),s=n(38440),o=n(64580),l=n(64579),u=n(59997),c=n(94120),h=n(97982),d=n(19458);function p(e,t,n,i,o,l){return(0,r.tidy)(()=>{let u;(0,s.cj)(o),(0,s.Lp)(l),(0,s.zb)(i),null==n&&(n=[1,1]),null==i&&(i="valid"),null==o&&(o=(0,a.rf)()),null==l&&(l="max"),e=(0,d.aP)(e,o);let c="same"===i?"same":"valid";return u="max"===l?r.maxPool(e,t,n,c):r.avgPool(e,t,n,c),"channelsFirst"===o&&(u=r.transpose(u,[0,3,1,2])),u})}function f(e,t,n,i,o,l){return(0,r.tidy)(()=>{let u;(0,s.cj)(o),(0,s.Lp)(l),(0,s.zb)(i),null==n&&(n=[1,1,1]),null==i&&(i="valid"),null==o&&(o=(0,a.rf)()),null==l&&(l="max"),e=(0,d.fN)(e,o);let c="same"===i?"same":"valid";return u="max"===l?r.maxPool3d(e,t,n,c):r.avgPool3d(e,t,n,c),"channelsFirst"===o&&(u=r.transpose(u,[0,4,1,2,3])),u})}class m extends o.mh{constructor(e){if(null==e.poolSize&&(e.poolSize=2),super(e),"number"==typeof e.poolSize)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&1===e.poolSize.length&&"number"==typeof e.poolSize[0])this.poolSize=e.poolSize;else throw new l.nu(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if((0,c.iQ)(this.poolSize,"poolSize"),null==e.strides)this.strides=this.poolSize;else if("number"==typeof e.strides)this.strides=[e.strides];else if(Array.isArray(e.strides)&&1===e.strides.length&&"number"==typeof e.strides[0])this.strides=e.strides;else throw new l.nu(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);(0,c.iQ)(this.strides,"strides"),this.padding=null==e.padding?"valid":e.padding,(0,s.zb)(this.padding),this.inputSpec=[new o.Zg({ndim:3})]}computeOutputShape(e){e=(0,h.Wf)(e);let t=(0,u.kt)(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return(0,r.tidy)(()=>{this.invokeCallHook(e,t),e=i.dt((0,h.nQ)(e),2);let n=this.poolingFunction((0,h.nQ)(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return r.squeeze(n,[2])})}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides};return Object.assign(e,super.getConfig()),e}}class g extends m{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),p(e,t,n,r,a,"max")}}g.className="MaxPooling1D",r.serialization.registerClass(g);class x extends m{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),p(e,t,n,r,a,"avg")}}x.className="AveragePooling1D",r.serialization.registerClass(x);class b extends o.mh{constructor(e){if(null==e.poolSize&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],null==e.strides)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(2!==e.strides.length)throw new l.nu(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];(0,c.iQ)(this.poolSize,"poolSize"),(0,c.iQ)(this.strides,"strides"),this.padding=null==e.padding?"valid":e.padding,this.dataFormat=null==e.dataFormat?"channelsLast":e.dataFormat,(0,s.cj)(this.dataFormat),(0,s.zb)(this.padding),this.inputSpec=[new o.Zg({ndim:4})]}computeOutputShape(e){e=(0,h.Wf)(e);let t="channelsFirst"===this.dataFormat?e[2]:e[1],n="channelsFirst"===this.dataFormat?e[3]:e[2];return(t=(0,u.kt)(t,this.poolSize[0],this.padding,this.strides[0]),n=(0,u.kt)(n,this.poolSize[1],this.padding,this.strides[1]),"channelsFirst"===this.dataFormat)?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return(0,r.tidy)(()=>(this.invokeCallHook(e,t),this.poolingFunction((0,h.nQ)(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat};return Object.assign(e,super.getConfig()),e}}class y extends b{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),p(e,t,n,r,a,"max")}}y.className="MaxPooling2D",r.serialization.registerClass(y);class v extends b{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),p(e,t,n,r,a,"avg")}}v.className="AveragePooling2D",r.serialization.registerClass(v);class k extends o.mh{constructor(e){if(null==e.poolSize&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],null==e.strides)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(3!==e.strides.length)throw new l.nu(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];(0,c.iQ)(this.poolSize,"poolSize"),(0,c.iQ)(this.strides,"strides"),this.padding=null==e.padding?"valid":e.padding,this.dataFormat=null==e.dataFormat?"channelsLast":e.dataFormat,(0,s.cj)(this.dataFormat),(0,s.zb)(this.padding),this.inputSpec=[new o.Zg({ndim:5})]}computeOutputShape(e){e=(0,h.Wf)(e);let t="channelsFirst"===this.dataFormat?e[2]:e[1],n="channelsFirst"===this.dataFormat?e[3]:e[2],r="channelsFirst"===this.dataFormat?e[4]:e[3];return(t=(0,u.kt)(t,this.poolSize[0],this.padding,this.strides[0]),n=(0,u.kt)(n,this.poolSize[1],this.padding,this.strides[1]),r=(0,u.kt)(r,this.poolSize[2],this.padding,this.strides[2]),"channelsFirst"===this.dataFormat)?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return(0,r.tidy)(()=>(this.invokeCallHook(e,t),this.poolingFunction((0,h.nQ)(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat};return Object.assign(e,super.getConfig()),e}}class I extends k{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),f(e,t,n,r,a,"max")}}I.className="MaxPooling3D",r.serialization.registerClass(I);class C extends k{constructor(e){super(e)}poolingFunction(e,t,n,r,a){return(0,s.cj)(a),(0,s.zb)(r),f(e,t,n,r,a,"avg")}}C.className="AveragePooling3D",r.serialization.registerClass(C);class w extends o.mh{constructor(e){super(e),this.inputSpec=[new o.Zg({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new l.nj}}class S extends w{constructor(e){super(e||{})}call(e,t){return(0,r.tidy)(()=>{let t=(0,h.nQ)(e);return r.mean(t,1)})}}S.className="GlobalAveragePooling1D",r.serialization.registerClass(S);class N extends w{constructor(e){super(e||{})}call(e,t){return(0,r.tidy)(()=>{let t=(0,h.nQ)(e);return r.max(t,1)})}}N.className="GlobalMaxPooling1D",r.serialization.registerClass(N);class T extends o.mh{constructor(e){super(e),this.dataFormat=null==e.dataFormat?"channelsLast":e.dataFormat,(0,s.cj)(this.dataFormat),this.inputSpec=[new o.Zg({ndim:4})]}computeOutputShape(e){return"channelsLast"===this.dataFormat?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new l.nj}getConfig(){let e={dataFormat:this.dataFormat};return Object.assign(e,super.getConfig()),e}}class A extends T{call(e,t){return(0,r.tidy)(()=>{let t=(0,h.nQ)(e);return"channelsLast"===this.dataFormat?r.mean(t,[1,2]):r.mean(t,[2,3])})}}A.className="GlobalAveragePooling2D",r.serialization.registerClass(A);class $ extends T{call(e,t){return(0,r.tidy)(()=>{let t=(0,h.nQ)(e);return"channelsLast"===this.dataFormat?r.max(t,[1,2]):r.max(t,[2,3])})}}$.className="GlobalMaxPooling2D",r.serialization.registerClass($)},26118:function(e,t,n){n.d(t,{Q:function(){return l}});var r=n(64580),a=n(46040),i=n(97982),s=n(64579),o=n(1552);class l extends r.mh{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode="multiHot"}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode};return Object.assign(e,super.getConfig()),e}computeOutputShape(e){return null==(e=(0,i.Wf)(e))?[this.numTokens]:("oneHot"===this.outputMode&&1!==e[e.length-1]?e.push(this.numTokens):e[e.length-1]=this.numTokens,e)}call(e,t){return(0,a.tidy)(()=>{let n;if("int32"!==(e=(0,i.nQ)(e)).dtype&&(e=o.pj(e,"int32")),void 0!==t.countWeights){if("count"!==this.outputMode)throw new s.nu(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=(0,i.nQ)(t.countWeights)}let r=(0,a.max)(e),l=(0,a.min)(e),u=(0,a.greater)(this.numTokens,r).bufferSync().get(0),c=(0,a.greaterEqual)(l,0).bufferSync().get(0);if(!(u&&c))throw new s.nu(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return function(e,t,n,r){let l,u=(0,i.nQ)(e);if("int32"!==u.dtype&&(u=o.pj(u,"int32")),"int"===t)return u;let c=u.shape;if(0===u.rank&&(u=(0,a.expandDims)(u,-1)),"oneHot"===t&&1!==u.shape[u.shape.length-1]&&(u=(0,a.expandDims)(u,-1)),u.rank>2)throw new s.nu(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${c} which would result in output rank ${u.rank}.`);let h=["multiHot","oneHot"].includes(t),d=u;if(l=void 0!==r&&"count"===t?(0,a.denseBincount)(d,r,n,h):(0,a.denseBincount)(d,[],n,h),"tfIdf"!==t)return l;if(r)return(0,a.mul)(l,r);throw new s.nu("When outputMode is 'tfIdf', weights must be provided.")}(e,this.outputMode,this.numTokens,n)})}}l.className="CategoryEncoding",a.serialization.registerClass(l)},3429:function(e,t,n){n.d(t,{d:function(){return u}});var r=n(46040),a=n(97982),i=n(64580),s=n(1552);let{resizeBilinear:o,cropAndResize:l}=r.image;class u extends i.mh{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,i,o,u,c,h){return(0,r.tidy)(()=>{let d;let p=!1,f=(i+t)/u,m=(o+n)/c,g=[t/u,n/c,f,m],x=[];3===e.rank?(p=!0,d=(0,r.stack)([e])):d=e;for(let e=0;e<d.shape[0];e++)x.push(g);let b=l(d,(0,r.tensor)(x,[x.length,4]),(0,r.range)(0,x.length,1,"int32"),[i,o],"nearest");return p?s.pj((0,a.nQ)((0,r.unstack)(b)),h):s.pj(b,h)})}upsize(e,t,n,a){return(0,r.tidy)(()=>{let r=o(e,[t,n]);return s.pj(r,a)})}call(e,t){return(0,r.tidy)(()=>{let t=(0,a.nQ)(e),n=t.dtype,r=t.shape,i=r[r.length-3],s=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let l=0;return(s!==this.width&&0===(l=Math.floor((s-this.width)/2))&&(l=1),o>=0&&l>=0)?this.centerCrop(t,o,l,this.height,this.width,i,s,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width};return Object.assign(e,super.getConfig()),e}computeOutputShape(e){let t=(e=(0,a.Wf)(e)).length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}}u.className="CenterCrop",r.serialization.registerClass(u)},17570:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(64580),a=n(46040),i=n(97982),s=n(1552);class o extends r.mh{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){let e={scale:this.scale,offset:this.offset};return Object.assign(e,super.getConfig()),e}call(e,t){return(0,a.tidy)(()=>("float32"!==(e=(0,i.nQ)(e)).dtype&&(e=s.pj(e,"float32")),(0,a.add)((0,a.mul)(e,this.scale),this.offset)))}}o.className="Rescaling",a.serialization.registerClass(o)},60427:function(e,t,n){n.d(t,{D:function(){return l}});var r=n(46040),a=n(64580),i=n(64579),s=n(97982);let o=new Set(["bilinear","nearest"]);class l extends a.mh{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation){if(o.has(e.interpolation))this.interpolation=e.interpolation;else throw new i.nu(`Invalid interpolation parameter: ${e.interpolation} is not implemented`)}else this.interpolation="bilinear";this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){let t=(e=(0,s.Wf)(e))[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio};return Object.assign(e,super.getConfig()),e}call(e,t){return(0,r.tidy)(()=>{let t=[this.height,this.width];if("bilinear"===this.interpolation)return r.image.resizeBilinear(e,t,!this.cropToAspectRatio);if("nearest"===this.interpolation)return r.image.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...o]} are supported`)})}}l.className="Resizing",r.serialization.registerClass(l)},96128:function(e,t,n){n.d(t,{z:function(){return c}});var r=n(46040),a=n(97982),i=n(64579),s=n(64580);class o{constructor(e){this.seed=e}next(){if(void 0!==this.seed)return this.seed++}}o.className="RandomSeed";class l extends s.mh{constructor(e){super(e),this.randomGenerator=new o(e.seed)}getConfig(){let e={seed:this.randomGenerator.seed};return Object.assign(e,super.getConfig()),e}}l.className="BaseRandomLayer";let u=new Set(["bilinear","nearest"]);class c extends l{constructor(e){super(e);let{factor:t,interpolation:n="bilinear"}=e;if(this.factor=t,Array.isArray(this.factor)&&2===this.factor.length)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new i.nu(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new i.nu(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new i.nu(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n){if(u.has(n))this.interpolation=n;else throw new i.nu(`Invalid interpolation parameter: ${n} is not implemented`)}}getConfig(){let e={factor:this.factor,interpolation:this.interpolation};return Object.assign(e,super.getConfig()),e}computeOutputShape(e){let t=(e=(0,a.Wf)(e))[2];return[this.imgHeight,-1,t]}call(e,t){return(0,r.tidy)(()=>{let t=(0,a.nQ)(e);this.imgHeight=t.shape[t.shape.length-3];let n=t.shape[t.shape.length-2];this.widthFactor=(0,r.randomUniform)([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let i=this.widthFactor.dataSync()[0]*n;i=Math.round(i);let s=[this.imgHeight,i];switch(this.interpolation){case"bilinear":return r.image.resizeBilinear(e,s);case"nearest":return r.image.resizeNearestNeighbor(e,s);default:throw Error(`Interpolation is ${this.interpolation}
          but only ${[...u]} are supported`)}})}}c.className="RandomWidth",r.serialization.registerClass(c)},25732:function(e,t,n){n.d(t,{v:function(){return i}});var r=n(46040),a=n(94120);function i(e,t={},n=!1){return(0,a.tU)(e,r.serialization.SerializationMap.getMap().classNameMap,t,"layer",n)}},9959:function(e,t,n){n.d(t,{V9:function(){return f},j8:function(){return m}});var r=n(46040),a=n(1552),i=n(38440),s=n(64580),o=n(64579),l=n(43872),u=n(94120),c=n(97982),h=n(85903),d=n(25732);class p extends s.mh{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return null!=this.layer&&this.layer.trainable}set trainable(e){null!=this.layer&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}};return Object.assign(e,super.getConfig()),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.layer&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,a=(0,d.v)(r,n);delete t.layer;let i={layer:a};return Object.assign(i,t),new e(i)}}class f extends p{constructor(e){super(e),this.supportsMasking=!0}build(e){if((e=(0,c.Wf)(e)).length<3)throw new o.nu(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){let t=[(e=(0,c.Wf)(e))[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return(0,r.tidy)(()=>(e=(0,c.nQ)(e),(0,h.nd)((e,n)=>[(0,c.nQ)(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}}f.className="TimeDistributed",r.serialization.registerClass(f);class m extends p{constructor(e){var t;super(e);let n=e.layer.getConfig(),r={};r.className=e.layer.getClassName(),r.config=n,this.forwardLayer=(0,d.v)(r),n.goBackwards=!0!==n.goBackwards;let a={};if(a.className=e.layer.getClassName(),a.config=n,this.backwardLayer=(0,d.v)(a),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=void 0===e.mergeMode?"concat":e.mergeMode,t=this.mergeMode,u.xn(l.eY,"BidirectionalMergeMode",t),e.weights)throw new o.nj("weights support is not implemented for Bidirectional layer yet.");this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,null!=this.forwardLayer&&(this.forwardLayer.trainable=e),null!=this.backwardLayer&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=Math.floor(e.length/2);this.forwardLayer.setWeights(e.slice(0,t)),this.backwardLayer.setWeights(e.slice(t))}computeOutputShape(e){let t,n,r,a=this.forwardLayer.computeOutputShape(e);return(Array.isArray(a)&&Array.isArray(a[0])||(a=[a]),this.returnState&&(r=a.slice(1)),t=a[0],"concat"===this.mergeMode?(t[t.length-1]*=2,n=[t]):n=null==this.mergeMode?[t,t.slice()]:[t],this.returnState)?null==this.mergeMode?n.concat(r).concat(r.slice()):[t].concat(r).concat(r.slice()):u.Bq(n)}apply(e,t){let n=null==t?null:t.initialState,r=null==t?null:t.constants;null==t&&(t={});let a=(0,h.lx)(e,n,r,this.numConstants);if(e=a.inputs,n=a.initialState,r=a.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(null==n||0===n.length)&&null==r)return super.apply(e,t);let i=[],l=[];if(null!=n){let e=n.length;if(e%2>0)throw new o.nu("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,i.push(...n);let r=n.map(e=>new s.Zg({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),l.push(...r)}if(null!=r)throw new o.nj("Support for constants in Bidirectional layers is not implemented yet.");let u=i[0]instanceof s.Iy;for(let e of i)if(e instanceof s.Iy!==u)throw new o.nu("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(!u)return super.apply(e,t);{let n=[e].concat(i),r=this.inputSpec.concat(l),a=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=a,s}}call(e,t){return(0,r.tidy)(()=>{let n,i,s,o;let l=t.initialState;if(null==l)n=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let r=l.slice(0,l.length/2),a=l.slice(l.length/2);n=this.forwardLayer.call(e,Object.assign(t,{initialState:r})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:a}))}return(this.returnState&&(Array.isArray(n)&&(s=n.slice(1).concat(i.slice(1))),n=n[0],i=i[0]),this.returnSequences&&(i=r.reverse(i,1)),"concat"===this.mergeMode?o=a.mV([n,i]):"sum"===this.mergeMode?o=r.add(n,i):"ave"===this.mergeMode?o=r.mul(.5,r.add(n,i)):"mul"===this.mergeMode?o=r.mul(n,i):null==this.mergeMode&&(o=[n,i]),this.returnState)?null==this.mergeMode?o.concat(s):[o].concat(s):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){(0,i.f4)(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),(0,i.f4)(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){let n;if(Array.isArray(t)&&(t=t[0]),n=this.returnSequences?null==this.mergeMode?[t,t]:t:null==this.mergeMode?[null,null]:null,!this.returnState)return n;{let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e).concat(e)}}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),null!=this.forwardLayer&&this.forwardLayer.setFastWeightInitDuringBuild(e),null!=this.backwardLayer&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode};return Object.assign(e,super.getConfig()),e}static fromConfig(e,t){let n=(0,d.v)(t.layer);if(delete t.layer,null!=t.numConstants)throw new o.nj("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");return t.layer=n,new e(t)}}m.className="Bidirectional",r.serialization.registerClass(m)},10525:function(e,t,n){n.d(t,{Z:function(){return a},i:function(){return i}});var r=n(46040);async function a(e){if(null==e)return;let t=[],n=[],a=[];for(let r in e){let i=e[r];"number"!=typeof i&&(t.push(i.data()),n.push(r),a.push(i))}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];(0,r.dispose)(a)}}function i(e){if(null!=e)for(let t in e){let n=e[t];"number"!=typeof n&&n.dispose()}}},51957:function(e,t,n){n.d(t,{Eq:function(){return o},FD:function(){return l},KM:function(){return d},Ls:function(){return f},U2:function(){return g},dr:function(){return m},fO:function(){return p},ke:function(){return u},t3:function(){return c},uq:function(){return h}});var r=n(46040),a=n(10685),i=n(1552),s=n(64579);function o(e,t){return(0,r.tidy)(()=>{"float32"!==e.dtype&&(e=r.cast(e,"float32"));let n=r.sum(i.h6(e),t,!0),s=r.fill(n.shape,(0,a.Ho)()),o=r.sqrt(r.maximum(n,s));return r.div(e,o)})}function l(e,t){return(0,r.tidy)(()=>r.mean(i.h6(r.sub(t,e)),-1))}function u(e,t){return(0,r.tidy)(()=>r.mean(r.abs(r.sub(t,e)),-1))}function c(e,t){return(0,r.tidy)(()=>{let n=r.sub(e,t),i=r.clipByValue(r.abs(e),(0,a.Ho)(),Number.MAX_VALUE),s=r.abs(r.div(n,i));return r.mul(100,r.mean(s,-1))})}function h(e,t,n=!1){return(0,r.tidy)(()=>{if(n)t=r.softmax(t);else{let e=r.sum(t,t.shape.length-1,!0);t=r.div(t,e)}return t=r.clipByValue(t,(0,a.Ho)(),1-(0,a.Ho)()),r.neg(r.sum(r.mul(r.cast(e,"float32"),r.log(t)),t.shape.length-1))})}function d(e,t,n=!1){return(0,r.tidy)(()=>{let s=r.cast(r.floor(i.xH(e)),"int32"),o=(t=r.clipByValue(t,(0,a.Ho)(),1-(0,a.Ho)())).shape;return h(r.reshape(r.oneHot(s,o[o.length-1]),o),t,n)})}function p(e,t){return(0,r.tidy)(()=>{let n;return n=r.clipByValue(t,(0,a.Ho)(),1-(0,a.Ho)()),n=r.log(r.div(n,r.sub(1,n))),r.mean(function(e,t){if(!r.util.arraysEqual(e.shape,t.shape))throw new s.nu(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return(0,r.tidy)(()=>{let n=r.relu(t),a=r.neg(r.abs(t));return r.add(r.sub(n,r.mul(t,e)),r.log1p(r.exp(a)))})}(e,n),-1)})}function f(e,t){return(0,r.tidy)(()=>{let n=o(e,-1),a=o(t,-1),i=r.mul(n,a);return r.neg(r.sum(i,-1))})}let m={meanSquaredError:l,meanAbsoluteError:u,meanAbsolutePercentageError:c,meanSquaredLogarithmicError:function(e,t){return(0,r.tidy)(()=>{let n=r.clipByValue(t,(0,a.Ho)(),Number.MAX_VALUE),s=r.log(r.add(1,n)),o=r.clipByValue(e,(0,a.Ho)(),Number.MAX_VALUE),l=r.log(r.add(1,o));return r.mean(i.h6(r.sub(s,l)),-1)})},squaredHinge:function(e,t){return(0,r.tidy)(()=>{let n=r.maximum(0,r.sub(1,r.mul(e,t)));return r.mean(i.h6(n),-1)})},hinge:function(e,t){return(0,r.tidy)(()=>{let n=r.maximum(0,r.sub(1,r.mul(e,t)));return r.mean(n,-1)})},categoricalHinge:function(e,t){return(0,r.tidy)(()=>{let n=r.sum(r.mul(e,t),-1),a=r.max(r.mul(r.sub(1,e),t),-1);return r.maximum(0,r.add(1,r.sub(a,n)))})},logcosh:function(e,t){return(0,r.tidy)(()=>{let n=r.sub(t,e),a=r.sub(r.add(n,r.softplus(r.mul(-2,n))),Math.log(2));return r.mean(a,-1)})},categoricalCrossentropy:h,sparseCategoricalCrossentropy:d,binaryCrossentropy:p,kullbackLeiblerDivergence:function(e,t){return(0,r.tidy)(()=>{let n=r.clipByValue(e,(0,a.Ho)(),1),i=r.clipByValue(t,(0,a.Ho)(),1);return r.sum(r.mul(e,r.log(r.div(n,i))),-1)})},poisson:function(e,t){return(0,r.tidy)(()=>{let n=r.log(r.add((0,a.Ho)(),t));return r.mean(r.sub(t,r.mul(e,n)),-1)})},cosineProximity:f};function g(e){if("string"!=typeof e)return e;{if(e in m)return m[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new s.nu(t)}}},30632:function(e,t,n){n.d(t,{G5:function(){return u},KM:function(){return w},TY:function(){return f},U2:function(){return N},_F:function(){return l},aI:function(){return T},ch:function(){return h},fO:function(){return p},nP:function(){return m},uq:function(){return I},wC:function(){return d}});var r=n(46040),a=n(1552),i=n(64579),s=n(51957),o=n(94120);function l(e,t){return(0,r.tidy)(()=>{let n=r.mul(.5,r.onesLike(t)),i=a.pj(r.greater(t,n),e.dtype);return r.mean(r.equal(e,i),-1)})}function u(e,t){return(0,r.tidy)(()=>a.pj(r.equal(r.argMax(e,-1),r.argMax(t,-1)),"float32"))}function c(e,t){return(0,r.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(e,1),r.equal(t,1))),"float32"))}function h(e,t){return(0,r.tidy)(()=>{let n=c(e,t),a=(0,r.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(e,0),r.equal(t,1))),"float32")),i=r.add(n,a);return r.cast(r.where(r.greater(i,0),r.div(n,i),0),"float32")})}function d(e,t){return(0,r.tidy)(()=>{let n=c(e,t),a=(0,r.tidy)(()=>r.cast(r.sum(r.logicalAnd(r.equal(e,1),r.equal(t,0))),"float32")),i=r.add(n,a);return r.cast(r.where(r.greater(i,0),r.div(n,i),0),"float32")})}function p(e,t){return(0,s.fO)(e,t)}function f(e,t){return e.rank===t.rank&&(e=r.squeeze(e,[e.rank-1])),(t=r.argMax(t,-1)).dtype!==e.dtype&&(t=r.cast(t,e.dtype)),r.cast(r.equal(e,t),"float32")}function m(e,t){return(0,r.tidy)(()=>{let n=e.sub(t).square().sum(),a=e.sub(e.mean()).square().sum();return r.scalar(1).sub(n.div(a))})}let g=s.FD,x=s.FD,b=s.ke,y=s.ke,v=s.t3,k=s.t3,I=s.uq,C=s.Ls,w=s.KM,S={binaryAccuracy:l,categoricalAccuracy:u,precision:h,categoricalCrossentropy:I,sparseCategoricalCrossentropy:w,mse:g,MSE:x,mae:b,MAE:y,mape:v,MAPE:k,cosine:C};function N(e){if("string"==typeof e&&e in S)return S[e];if("string"!=typeof e&&null!=e)return e;throw new i.nu(`Unknown metric ${e}`)}function T(e){if(o.hu(null!==e,`Unknown LossOrMetricFn ${e}`),"string"==typeof e)return e;{let t;for(let n of Object.keys(s.dr))if(s.dr[n]===e){t=n;break}if(void 0!==t)return t;for(let n of Object.keys(S))if(S[n]===e){t=n;break}return void 0!==t?t:e.name}}},72978:function(e,t,n){n.d(t,{FB:function(){return f},p5:function(){return p},sb:function(){return g}});var r=n(46040),a=n(76334),i=n(84996),s=n(64580),o=n(6897),l=n(64579),u=n(25732),c=n(94120),h=n(23218),d=n(97982);async function p(e,t){"modelTopology"in e||(e={modelTopology:e});let n=e.modelTopology;null!=n.model_config&&(n=n.model_config);let a=(0,h.a)(n),i=(0,u.v)(a,t);if(null!=e.weightsManifest){let t=await r.io.loadWeights(e.weightsManifest,e.pathPrefix,i.weights.map(e=>e.originalName)),n={};for(let e of i.weights)n[e.originalName]=t[e.originalName];i.loadWeights(n),(0,r.dispose)(t)}return i}async function f(e,t){if(null==t&&(t={}),"string"==typeof e){let n=r.io.getLoadHandlers(e,t);if(0===n.length)n.push(r.io.browserHTTPRequest(e,t));else if(n.length>1)throw new l.nu(`Found more than one (${n.length}) load handlers for URL '${e}'`);e=n[0]}return m(e,void 0,t)}async function m(e,t,n){if(null==n&&(n={}),null==e.load)throw new l.nu("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let a=await e.load(),i=a.modelTopology;null!=i.model_config&&(i=i.model_config);let s=null==n.strict||n.strict,o=null!=a.weightData&&null!=a.weightSpecs&&s,c=(0,u.v)((0,h.a)(i),t,o),d=a.trainingConfig;if(null!=d&&c.loadTrainingConfig(d),null!=a.userDefinedMetadata&&c.setUserDefinedMetadata(a.userDefinedMetadata),null!=a.weightData){if(null==a.weightSpecs)throw new l.nu("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");let{modelWeights:e,optimizerWeights:t}=function(e,t){let n=r.io.decodeWeights(e,t),a={},i=[];return t.forEach(e=>{"optimizer"===e.group?i.push({name:e.name,tensor:n[e.name]}):a[e.name]=n[e.name]}),{modelWeights:a,optimizerWeights:i}}(a.weightData,a.weightSpecs);c.loadWeights(e,s),null!=c.optimizer&&t.length>0&&await c.optimizer.setWeights(t),(0,r.dispose)(e),(0,r.dispose)(t.map(e=>e.tensor))}return c}class g extends o.QV{constructor(e){if(super({inputs:[],outputs:[]}),e=e||{},this.trainable=!0,this.built=!1,this.name=null!=e.name?e.name:(0,a.s)("sequential_"),null!=e.layers)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new l.nu(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(e){let t;let n=e instanceof g||e instanceof o.QV;if(n){if(1!==(t=e).outputs.length)throw new l.nu("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(1!==t.inputs.length)throw new l.nu("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(0===this.outputs.length){if(0===e.inboundNodes.length){if(null==e.batchInputShape)throw new l.nu("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let t=(0,i.I)({batchShape:e.batchInputShape,dtype:e.dtype,name:e.name+"_input"});e.apply(t)}if(n)this.outputs=t.outputs,this.inputs=t.inputs;else{if(1!==e.inboundNodes.length)throw new l.nu(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${e.name} which has ${e.inboundNodes.length} pre-existing inbound connections.`);if(1!==e.inboundNodes[0].outputTensors.length)throw new l.nu("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[e.inboundNodes[0].outputTensors[0]],this.inputs=(0,s.hA)(this.outputs[0])}this.inboundNodes=[],new s.NB({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:c.JE(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let t=e.apply(this.outputs[0]);if(Array.isArray(t))throw TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(e),this.outputs=[t],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(e),this.built=!1}pop(){if(0===this.layers.length)throw TypeError("There are no layers in the model.");if(this.layers.pop(),0===this.layers.length)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return null==this.model&&this.build(),this.model.call(e,t)}build(e){if((0,d.Wf)(e),0===this.inputs.length||0===this.outputs.length)throw TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new o.QV({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){null==this.model&&this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new l.LH("The model needs to be compiled before being used.");return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new l.LH("The model needs to be compiled before being used.");return this.model.evaluateDataset(e,t)}predict(e,t={}){return null==this.model&&this.build(),this.model.predict(e,t)}predictOnBatch(e){return null==this.model&&this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return null==this.model?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new l.LH("The model needs to be compiled before being used.");return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new l.LH("The model needs to be compiled before being used.");return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(e,t,n={},a=!1){let i;let s={};if(t instanceof Array){if(!(null!=t[0].className)||"Merge"===t[0].className)throw new l.nu("Legacy serialization format not supported yet.");i=t}else r.util.assert(null!=t.layers,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=t.layers,delete t.layers,s=t;let o=new e(s);if(!(o instanceof g))throw new l.nj(`Sequential.fromConfig called on non-Sequential input: ${o}`);for(let e of i){let t=void 0,n=(0,u.v)(e,t,a);a&&n.setFastWeightInitDuringBuild(!0),o.add(n)}return o}set stopTraining(e){if(null==this.model)throw new l.nu("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=e}get stopTraining(){if(null==this.model)throw new l.nu("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}}g.className="Sequential",r.serialization.registerClass(g)},86754:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(46040),a=n(10685),i=n(64579);function s(e){let t={Adagrad:()=>r.train.adagrad(.01),Adadelta:()=>r.train.adadelta(1,.95,(0,a.Ho)()),Adam:()=>r.train.adam(.001,.9,.999,(0,a.Ho)()),Adamax:()=>r.train.adamax(.002,.9,.999,(0,a.Ho)(),0),RMSProp:()=>r.train.rmsprop(.001,.9,0,(0,a.Ho)()),SGD:()=>r.train.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new i.nu(`Unknown Optimizer ${e}`)}},18030:function(e,t,n){n.d(t,{EC:function(){return f},SG:function(){return d},Xm:function(){return l},l1:function(){return u},l2:function(){return c}});var r=n(46040),a=n(1552),i=n(94120);function s(e){if(null!=e&&"object"!=typeof e)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}class o extends r.serialization.Serializable{}class l extends o{constructor(e){super(),s(e),this.l1=null==e||null==e.l1?.01:e.l1,this.l2=null==e||null==e.l2?.01:e.l2,this.hasL1=0!==this.l1,this.hasL2=0!==this.l2}apply(e){return(0,r.tidy)(()=>{let t=(0,r.zeros)([1]);return this.hasL1&&(t=(0,r.add)(t,(0,r.sum)(r.mul(this.l1,(0,r.abs)(e))))),this.hasL2&&(t=(0,r.add)(t,(0,r.sum)(r.mul(this.l2,a.h6(e))))),r.reshape(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}}function u(e){return s(e),new l({l1:null!=e?e.l1:null,l2:0})}function c(e){return s(e),new l({l2:null!=e?e.l2:null,l1:0})}l.className="L1L2",r.serialization.registerClass(l);let h={l1l2:"L1L2"};function d(e){return(0,i.Kj)(e)}function p(e,t={}){return(0,i.tU)(e,r.serialization.SerializationMap.getMap().classNameMap,t,"regularizer")}function f(e){return null==e?null:"string"==typeof e?p({className:e in h?h[e]:e,config:{}}):e instanceof o?e:p(e)}},84562:function(e,t,n){n.d(t,{WE:function(){return r}});function r(e,t,n=!1){if(null==e||"object"!=typeof e||Object.getPrototypeOf(e)!==Object.prototype||!function e(t){if(null===t)return!0;if("object"==typeof t){if(Object.getPrototypeOf(t)===Object.prototype){for(let n of Object.keys(t))if("string"!=typeof n||!e(t[n]))return!1;return!0}if(!Array.isArray(t))return!1;for(let n of t)if(!e(n))return!1;return!0}{let e=typeof t;return"string"===e||"number"===e||"boolean"===e}}(e))throw Error("User-defined metadata is expected to be a JSON object, but is not.");if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= 1048576.`)}}},59997:function(e,t,n){n.d(t,{$U:function(){return l},AF:function(){return s},kt:function(){return o}});var r=n(64579),a=n(94120),i=n(86314);function s(e,t,n){if("number"==typeof e)return(0,a.JE)(e,t);if(e.length!==t)throw new r.nu(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let a=0;a<t;++a){let s=e[a];if(!(0,i.U)(s))throw new r.nu(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${s}`)}return e}function o(e,t,n,r,a=1){return null==e?e:Math.floor((("same"===n?e:e-(t+(t-1)*(a-1))+1)+r-1)/r)}function l(e,t,n,a){if(null==e)return null;if("valid"===a)e=e*t+(0,i.Fp)([n-t,0]);else if("same"===a)e*=t;else throw new r.nu(`Unsupport padding mode: ${a}.`);return e}},94120:function(e,t,n){n.d(t,{Bq:function(){return l},D1:function(){return c},Ds:function(){return v},JE:function(){return i},Kj:function(){return p},L7:function(){return m},Mx:function(){return y},QX:function(){return o},Tw:function(){return g},WT:function(){return k},hu:function(){return s},iQ:function(){return function e(t,n){Array.isArray(t)?(r.util.assert(t.length>0,()=>`${n} is unexpectedly an empty array.`),t.forEach((t,r)=>e(t,`element ${r+1} of ${n}`))):r.util.assert(Number.isInteger(t)&&t>0,()=>`Expected ${n} to be a positive integer, but got ${function e(t){return null===t?"null":Array.isArray(t)?"["+t.map(t=>e(t)).join(",")+"]":"string"==typeof t?`"${t}"`:`${t}`}(t)}.`)}},nK:function(){return x},tU:function(){return f},xn:function(){return b},zW:function(){return h},zZ:function(){return u}});var r=n(46040),a=n(64579);function i(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}{let n=Array(t);return n.fill(e),n}}function s(e,t){if(!e)throw new a.ps(t)}function o(e,t){let n=0;for(let r of e)r===t&&n++;return n}function l(e){return 1===e.length?e[0]:e}function u(e){return Array.isArray(e)?e:[e]}function c(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return"_"!==t[0]?t:"private"+t}function h(e){return e.length<=1||-1===e.indexOf("_")?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}let d={};function p(e){if(null==e)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function f(e,t={},n={},r="object",i=!1){if("string"==typeof e){let i;if(e in n)i=n[e];else if(e in d)i=d[e];else if(null==(i=t[e]))throw new a.nu(`Unknown ${r}: ${e}. This may be due to one of the following reasons:
1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}{let s,o;if(null==e.className||null==e.config)throw new a.nu(`${r}: Improper config format: ${JSON.stringify(e)}.
'className' and 'config' must set.`);let l=e.className;if(l in n?[s,o]=n[l]:l in d?[s,o]=d.className:l in t&&([s,o]=t[l]),null==s)throw new a.nu(`Unknown ${r}: ${l}. This may be due to one of the following reasons:
1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(null!=o){let t={};for(let e of Object.keys(d))t[e]=d[e];for(let e of Object.keys(n))t[e]=n[e];e.config.customObjects=t;let r=Object.assign({},d);for(let e of Object.keys(n))d[e]=n[e];!function e(t){if(null!=t&&"object"==typeof t){if(Array.isArray(t))t.forEach(t=>e(t));else for(let n of Object.keys(t)){let r=t[n];null!=r&&"object"==typeof r&&(Array.isArray(r)||"ndarray"!==r.type||"number"!=typeof r.value?e(r):t[n]=r.value)}}}(e.config);let a=o(s,e.config,n,i);return d=Object.assign({},r),a}{let t=Object.assign({},d);for(let e of Object.keys(n))d[e]=n[e];let r=new s(e.config);return d=Object.assign({},t),r}}}function m(e,t){return -1*(e<t?-1:e>t?1:0)}function g(e){if(null==e)return e;let t=[];for(let n of e)-1===t.indexOf(n)&&t.push(n);return t}function x(e){if(null==e)throw new a.nu(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function b(e,t,n){if(null!=n&&0>e.indexOf(n))throw new a.nu(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function y(e,t,n=0,r=1/0){return s(n>=0),s(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function v(e,t,n){let a,i=null!=n?n():r.util.now();return(...s)=>{let o=null!=n?n():r.util.now();return o-i<t?a:(i=o,a=e(...s))}}function k(e){return"relu"===e?"relu":"linear"===e?"linear":"elu"===e?"elu":null}},85037:function(e,t,n){n.d(t,{I:function(){return a}});var r=n(34923);function a(e,t,n,a=console.log){let s;let o=function(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||1===e.length&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let a of n.inboundNodes)if(-1!==r.indexOf(a)){if(e){t=!1;break}e=!0}if(!t)break}return t}(e),l=["Layer (type)","Input Shape","Output shape","Param #"];if(o?(t=t||90,n=n||[.32,.61,.89,1]):(t=t||115,n=n||[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e))),!o)for(let t in l.push("Receives inputs"),s=[],e.nodesByDepth)s.push(...e.nodesByDepth[t]);a("_".repeat(t)),i(l,n,a),a("=".repeat(t));let u=e.layers;for(let e=0;e<u.length;++e)o?function(e,t,n){let r,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(",")}catch(e){a="multiple"}try{r=JSON.stringify(e.outputShape)}catch(e){r="multiple"}let s=e.name,o=e.getClassName();i([`${s} (${o})`,a,r,e.countParams().toString()],t,n)}(u[e],n,a):function(e,t,n,r){let a,s;try{s=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(",")}catch(e){s="multiple"}try{a=JSON.stringify(e.outputShape)}catch(e){a="multiple"}let o=[];for(let t of e.inboundNodes)if(null==n||!(n.length>0)||-1!==n.indexOf(t))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],a=t.tensorIndices[e];o.push(`${n}[${r}][${a}]`)}let l=e.name,u=e.getClassName(),c=0===o.length?"":o[0];i([`${l} (${u})`,s,a,e.countParams().toString(),c],t,r);for(let e=1;e<o.length;++e)i(["","","","",o[e]],t,r)}(u[e],n,s,a),a((e===u.length-1?"=":"_").repeat(t));e.checkTrainableWeightsConsistency();let c=null!=e.collectedTrainableWeights?(0,r.t)(e.collectedTrainableWeights):(0,r.t)(e.trainableWeights),h=(0,r.t)(e.nonTrainableWeights);a(`Total params: ${c+h}`),a(`Trainable params: ${c}`),a(`Non-trainable params: ${h}`),a("_".repeat(t))}function i(e,t,n=console.log){let r="";for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+" "),r+=e[n],r=r.slice(0,t[n]),r+=" ".repeat(t[n]-r.length);n(r)}},86314:function(e,t,n){n.d(t,{Fp:function(){return o},NS:function(){return i},U:function(){return a},VV:function(){return s},w6:function(){return l}});var r=n(64579);function a(e){return e===parseInt(e.toString(),10)}function i(e,t,n){null==t&&(t=0),null==n&&(n=e.length);let r=1;for(let a=t;a<n;++a)r*=e[a];return r}function s(e){if(0===e.length)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function o(e){if(0===e.length)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function l(e,t){if(t<e)throw new r.nu(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}},23218:function(e,t,n){n.d(t,{a:function(){return function e(t,n){if(null===t)return null;if("string"==typeof t)return r.zW(t);if("number"==typeof t||"boolean"==typeof t)return t;if(t instanceof Array){let r=[],i=t.length;for(let s=0;s<i;++s){let i=t[s];a(n,s,i)?r.push(i):r.push(e(i,n))}return r}{let n={};for(let a of Object.keys(t)){let i=t[a];if("name"===a&&"string"==typeof i)n[a]=i;else{let t=r.zW(a);n[t]=e(i,t)}}return n}}},q:function(){return function e(t,n){if(null==t)return null;if("string"==typeof t)return r.D1(t);if("number"==typeof t||"boolean"==typeof t)return t;if(t instanceof Array){let r=[],i=t.length;for(let s=0;s<i;++s){let i=t[s];a(n,s,i)?r.push(i):r.push(e(i,n))}return r}{let n={};for(let a of Object.keys(t)){let i=t[a],s=r.D1(a);("name"===a||"className"===a)&&"string"==typeof i?n[s]=i:n[s]=e(i,a)}return n}}}});var r=n(94120);function a(e,t,n){return("inboundNodes"===e||"outputLayers"===e||"inputLayers"===e)&&0===t&&"string"==typeof n}},97982:function(e,t,n){n.d(t,{Wf:function(){return o},XO:function(){return a},nQ:function(){return s},x6:function(){return i}});var r=n(64579);function a(e){return Array.isArray(e)&&Array.isArray(e[0])}function i(e){return 0===e.length?[]:Array.isArray(e[0])?e:[e]}function s(e){let t;if(Array.isArray(e)){if(1!==e.length)throw new r.nu(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function o(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))return e;if(1===e.length)return e[0];throw new r.nu(`Expected exactly 1 Shape; got ${e.length}`)}},34923:function(e,t,n){n.d(t,{t:function(){return r}});function r(e){let t=0;for(let n of e)0===n.shape.length?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}},48234:function(e,t,n){n.d(t,{FQ:function(){return l},fU:function(){return o},zb:function(){return u}});var r=n(46040),a=n(76334),i=n(38440);n(64579);let s="Variable";class o{constructor(e,t="float32",n=s,o=!0,l=null){this.dtype=null==t?"float32":t,this.shape=e.shape,this.id=(0,a.L)(),n=null==n?s:n,this.originalName=(0,i.MU)(n),this.name=(0,i.w8)(this.originalName),this.trainable_=o,this.constraint=l,this.val=r.variable(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),function(e,t){if(e.shape.toString()!==t.shape.toString())throw Error("Shape mismatch: "+JSON.stringify(e.shape)+" vs. "+JSON.stringify(t.shape))}(this.val,e),this.val.id!==e.id&&(this.val.assign(e),null!=this.constraint&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}function l(e){return e.map(e=>e.read())}function u(e){e.forEach(e=>{e[0].write(e[1])})}},55690:function(e,t,n){n.d(t,{i:function(){return r}});let r="4.22.0"},72919:function(e,t,n){let r;n.r(t),n.d(t,{Abs:function(){return f.Abs},Acos:function(){return f.Acos},Acosh:function(){return f.Acosh},AdadeltaOptimizer:function(){return f.AdadeltaOptimizer},AdagradOptimizer:function(){return f.AdagradOptimizer},AdamOptimizer:function(){return f.AdamOptimizer},AdamaxOptimizer:function(){return f.AdamaxOptimizer},Add:function(){return f.Add},AddN:function(){return f.AddN},All:function(){return f.All},Any:function(){return f.Any},ArgMax:function(){return f.ArgMax},ArgMin:function(){return f.ArgMin},Asin:function(){return f.Asin},Asinh:function(){return f.Asinh},Atan:function(){return f.Atan},Atan2:function(){return f.Atan2},Atanh:function(){return f.Atanh},AvgPool:function(){return f.AvgPool},AvgPool3D:function(){return f.AvgPool3D},AvgPool3DGrad:function(){return f.AvgPool3DGrad},AvgPoolGrad:function(){return f.AvgPoolGrad},BatchMatMul:function(){return f.BatchMatMul},BatchToSpaceND:function(){return f.BatchToSpaceND},Bincount:function(){return f.Bincount},BitwiseAnd:function(){return f.BitwiseAnd},BroadcastArgs:function(){return f.BroadcastArgs},BroadcastTo:function(){return f.BroadcastTo},Callback:function(){return ac},CallbackList:function(){return as.BO},Cast:function(){return f.Cast},Ceil:function(){return f.Ceil},ClipByValue:function(){return f.ClipByValue},Complex:function(){return f.Complex},ComplexAbs:function(){return f.ComplexAbs},Concat:function(){return f.Concat},Conv2D:function(){return f.Conv2D},Conv2DBackpropFilter:function(){return f.Conv2DBackpropFilter},Conv2DBackpropInput:function(){return f.Conv2DBackpropInput},Conv3D:function(){return f.Conv3D},Conv3DBackpropFilterV2:function(){return f.Conv3DBackpropFilterV2},Conv3DBackpropInputV2:function(){return f.Conv3DBackpropInputV2},Cos:function(){return f.Cos},Cosh:function(){return f.Cosh},CropAndResize:function(){return f.CropAndResize},Cumprod:function(){return f.Cumprod},Cumsum:function(){return f.Cumsum},CustomCallback:function(){return as.iT},DataStorage:function(){return f.DataStorage},DenseBincount:function(){return f.DenseBincount},DepthToSpace:function(){return f.DepthToSpace},DepthwiseConv2dNative:function(){return f.DepthwiseConv2dNative},DepthwiseConv2dNativeBackpropFilter:function(){return f.DepthwiseConv2dNativeBackpropFilter},DepthwiseConv2dNativeBackpropInput:function(){return f.DepthwiseConv2dNativeBackpropInput},Diag:function(){return f.Diag},Dilation2D:function(){return f.Dilation2D},Dilation2DBackpropFilter:function(){return f.Dilation2DBackpropFilter},Dilation2DBackpropInput:function(){return f.Dilation2DBackpropInput},Draw:function(){return f.Draw},ENV:function(){return f.ENV},EarlyStopping:function(){return ap},Einsum:function(){return f.Einsum},Elu:function(){return f.Elu},EluGrad:function(){return f.EluGrad},Environment:function(){return f.Environment},Equal:function(){return f.Equal},Erf:function(){return f.Erf},Exp:function(){return f.Exp},ExpandDims:function(){return f.ExpandDims},Expm1:function(){return f.Expm1},FFT:function(){return f.FFT},Fill:function(){return f.Fill},FlipLeftRight:function(){return f.FlipLeftRight},Floor:function(){return f.Floor},FloorDiv:function(){return f.FloorDiv},FromPixels:function(){return f.FromPixels},FusedBatchNorm:function(){return f.FusedBatchNorm},FusedConv2D:function(){return f.FusedConv2D},FusedDepthwiseConv2D:function(){return f.FusedDepthwiseConv2D},GPGPUContext:function(){return uH.A},GatherNd:function(){return f.GatherNd},GatherV2:function(){return f.GatherV2},GraphModel:function(){return av.GraphModel},Greater:function(){return f.Greater},GreaterEqual:function(){return f.GreaterEqual},History:function(){return as.Ay},IFFT:function(){return f.IFFT},Identity:function(){return f.Identity},Imag:function(){return f.Imag},InputSpec:function(){return am.Zg},IsFinite:function(){return f.IsFinite},IsInf:function(){return f.IsInf},IsNan:function(){return f.IsNan},KernelBackend:function(){return f.KernelBackend},LRN:function(){return f.LRN},LRNGrad:function(){return f.LRNGrad},LayerVariable:function(){return ab.fU},LayersModel:function(){return ao.QV},LeakyRelu:function(){return f.LeakyRelu},Less:function(){return f.Less},LessEqual:function(){return f.LessEqual},LinSpace:function(){return f.LinSpace},Log:function(){return f.Log},Log1p:function(){return f.Log1p},LogSoftmax:function(){return f.LogSoftmax},LogicalAnd:function(){return f.LogicalAnd},LogicalNot:function(){return f.LogicalNot},LogicalOr:function(){return f.LogicalOr},LogicalXor:function(){return f.LogicalXor},LowerBound:function(){return f.LowerBound},MathBackendCPU:function(){return iv},MathBackendWebGL:function(){return uB.QC},MatrixBandPart:function(){return f.MatrixBandPart},Max:function(){return f.Max},MaxPool:function(){return f.MaxPool},MaxPool3D:function(){return f.MaxPool3D},MaxPool3DGrad:function(){return f.MaxPool3DGrad},MaxPoolGrad:function(){return f.MaxPoolGrad},MaxPoolWithArgmax:function(){return f.MaxPoolWithArgmax},Maximum:function(){return f.Maximum},Mean:function(){return f.Mean},Min:function(){return f.Min},Minimum:function(){return f.Minimum},MirrorPad:function(){return f.MirrorPad},Mod:function(){return f.Mod},MomentumOptimizer:function(){return f.MomentumOptimizer},Multinomial:function(){return f.Multinomial},Multiply:function(){return f.Multiply},Neg:function(){return f.Neg},NonMaxSuppressionV3:function(){return f.NonMaxSuppressionV3},NonMaxSuppressionV4:function(){return f.NonMaxSuppressionV4},NonMaxSuppressionV5:function(){return f.NonMaxSuppressionV5},NotEqual:function(){return f.NotEqual},OP_SCOPE_SUFFIX:function(){return f.OP_SCOPE_SUFFIX},OneHot:function(){return f.OneHot},OnesLike:function(){return f.OnesLike},Optimizer:function(){return f.Optimizer},OptimizerConstructors:function(){return f.OptimizerConstructors},Pack:function(){return f.Pack},PadV2:function(){return f.PadV2},Pool:function(){return f.Pool},Pow:function(){return f.Pow},Prelu:function(){return f.Prelu},Prod:function(){return f.Prod},RMSPropOptimizer:function(){return f.RMSPropOptimizer},RNN:function(){return ax.$p},RaggedGather:function(){return f.RaggedGather},RaggedRange:function(){return f.RaggedRange},RaggedTensorToTensor:function(){return f.RaggedTensorToTensor},Range:function(){return f.Range},Rank:function(){return f.Rank},Real:function(){return f.Real},RealDiv:function(){return f.RealDiv},Reciprocal:function(){return f.Reciprocal},Reduction:function(){return f.Reduction},Relu:function(){return f.Relu},Relu6:function(){return f.Relu6},Reshape:function(){return f.Reshape},ResizeBilinear:function(){return f.ResizeBilinear},ResizeBilinearGrad:function(){return f.ResizeBilinearGrad},ResizeNearestNeighbor:function(){return f.ResizeNearestNeighbor},ResizeNearestNeighborGrad:function(){return f.ResizeNearestNeighborGrad},Reverse:function(){return f.Reverse},RotateWithOffset:function(){return f.RotateWithOffset},Round:function(){return f.Round},Rsqrt:function(){return f.Rsqrt},SGDOptimizer:function(){return f.SGDOptimizer},ScatterNd:function(){return f.ScatterNd},SearchSorted:function(){return f.SearchSorted},Select:function(){return f.Select},Selu:function(){return f.Selu},Sequential:function(){return at.sb},Sigmoid:function(){return f.Sigmoid},Sign:function(){return f.Sign},Sin:function(){return f.Sin},Sinh:function(){return f.Sinh},Slice:function(){return f.Slice},Softmax:function(){return f.Softmax},Softplus:function(){return f.Softplus},SpaceToBatchND:function(){return f.SpaceToBatchND},SparseFillEmptyRows:function(){return f.SparseFillEmptyRows},SparseReshape:function(){return f.SparseReshape},SparseSegmentMean:function(){return f.SparseSegmentMean},SparseSegmentSum:function(){return f.SparseSegmentSum},SparseToDense:function(){return f.SparseToDense},SplitV:function(){return f.SplitV},Sqrt:function(){return f.Sqrt},Square:function(){return f.Square},SquaredDifference:function(){return f.SquaredDifference},StaticRegexReplace:function(){return f.StaticRegexReplace},Step:function(){return f.Step},StridedSlice:function(){return f.StridedSlice},StringNGrams:function(){return f.StringNGrams},StringSplit:function(){return f.StringSplit},StringToHashBucketFast:function(){return f.StringToHashBucketFast},Sub:function(){return f.Sub},Sum:function(){return f.Sum},SymbolicTensor:function(){return am.Iy},Tan:function(){return f.Tan},Tanh:function(){return f.Tanh},Tensor:function(){return f.Tensor},TensorBuffer:function(){return f.TensorBuffer},TensorScatterUpdate:function(){return f.TensorScatterUpdate},Tile:function(){return f.Tile},TopK:function(){return f.TopK},Transform:function(){return f.Transform},Transpose:function(){return f.Transpose},Unique:function(){return f.Unique},Unpack:function(){return f.Unpack},UnsortedSegmentSum:function(){return f.UnsortedSegmentSum},UpperBound:function(){return f.UpperBound},Variable:function(){return f.Variable},ZerosLike:function(){return f.ZerosLike},_FusedMatMul:function(){return f._FusedMatMul},abs:function(){return f.abs},acos:function(){return f.acos},acosh:function(){return f.acosh},add:function(){return f.add},addN:function(){return f.addN},all:function(){return f.all},any:function(){return f.any},argMax:function(){return f.argMax},argMin:function(){return f.argMin},asin:function(){return f.asin},asinh:function(){return f.asinh},atan:function(){return f.atan},atan2:function(){return f.atan2},atanh:function(){return f.atanh},avgPool:function(){return f.avgPool},avgPool3d:function(){return f.avgPool3d},backend:function(){return f.backend},backend_util:function(){return f.backend_util},basicLSTMCell:function(){return f.basicLSTMCell},batchNorm:function(){return f.batchNorm},batchNorm2d:function(){return f.batchNorm2d},batchNorm3d:function(){return f.batchNorm3d},batchNorm4d:function(){return f.batchNorm4d},batchToSpaceND:function(){return f.batchToSpaceND},bincount:function(){return f.bincount},bitwiseAnd:function(){return f.bitwiseAnd},booleanMaskAsync:function(){return f.booleanMaskAsync},broadcastArgs:function(){return f.broadcastArgs},broadcastTo:function(){return f.broadcastTo},broadcast_util:function(){return f.broadcast_util},browser:function(){return f.browser},buffer:function(){return f.buffer},callbacks:function(){return af},cast:function(){return f.cast},ceil:function(){return f.ceil},clipByValue:function(){return f.clipByValue},clone:function(){return f.clone},complex:function(){return f.complex},concat:function(){return f.concat},concat1d:function(){return f.concat1d},concat2d:function(){return f.concat2d},concat3d:function(){return f.concat3d},concat4d:function(){return f.concat4d},constraints:function(){return l},conv1d:function(){return f.conv1d},conv2d:function(){return f.conv2d},conv2dTranspose:function(){return f.conv2dTranspose},conv3d:function(){return f.conv3d},conv3dTranspose:function(){return f.conv3dTranspose},copyRegisteredKernels:function(){return f.copyRegisteredKernels},cos:function(){return f.cos},cosh:function(){return f.cosh},cosineWindow:function(){return f.cosineWindow},cumprod:function(){return f.cumprod},cumsum:function(){return f.cumsum},customGrad:function(){return f.customGrad},data:function(){return p},denseBincount:function(){return f.denseBincount},deprecationWarn:function(){return f.deprecationWarn},depthToSpace:function(){return f.depthToSpace},depthwiseConv2d:function(){return f.depthwiseConv2d},deregisterOp:function(){return av.deregisterOp},device_util:function(){return f.device_util},diag:function(){return f.diag},dilation2d:function(){return f.dilation2d},disableDeprecationWarnings:function(){return f.disableDeprecationWarnings},dispose:function(){return f.dispose},disposeVariables:function(){return f.disposeVariables},div:function(){return f.div},divNoNan:function(){return f.divNoNan},dot:function(){return f.dot},dropout:function(){return f.dropout},einsum:function(){return f.einsum},elu:function(){return f.elu},enableDebugMode:function(){return f.enableDebugMode},enableProdMode:function(){return f.enableProdMode},enclosingPowerOfTwo:function(){return f.enclosingPowerOfTwo},engine:function(){return f.engine},ensureShape:function(){return f.ensureShape},env:function(){return f.env},equal:function(){return f.equal},erf:function(){return f.erf},euclideanNorm:function(){return f.euclideanNorm},exp:function(){return f.exp},expandDims:function(){return f.expandDims},expm1:function(){return f.expm1},eye:function(){return f.eye},fft:function(){return f.fft},fill:function(){return f.fill},findBackend:function(){return f.findBackend},findBackendFactory:function(){return f.findBackendFactory},floor:function(){return f.floor},floorDiv:function(){return f.floorDiv},forceHalfFloat:function(){return uj},fused:function(){return f.fused},gather:function(){return f.gather},gatherND:function(){return f.gatherND},gather_util:function(){return f.gather_util},getBackend:function(){return f.getBackend},getGradient:function(){return f.getGradient},getKernel:function(){return f.getKernel},getKernelsForBackend:function(){return f.getKernelsForBackend},gpgpu_util:function(){return uV},grad:function(){return f.grad},grads:function(){return f.grads},greater:function(){return f.greater},greaterEqual:function(){return f.greaterEqual},ifft:function(){return f.ifft},imag:function(){return f.imag},image:function(){return f.image},inTopKAsync:function(){return f.inTopKAsync},initializers:function(){return u},input:function(){return ag.qH},io:function(){return f.io},irfft:function(){return f.irfft},isFinite:function(){return f.isFinite},isInf:function(){return f.isInf},isNaN:function(){return f.isNaN},keep:function(){return f.keep},kernel_impls:function(){return f.kernel_impls},layers:function(){return rj},leakyRelu:function(){return f.leakyRelu},less:function(){return f.less},lessEqual:function(){return f.lessEqual},linalg:function(){return f.linalg},linspace:function(){return f.linspace},loadGraphModel:function(){return av.loadGraphModel},loadGraphModelSync:function(){return av.loadGraphModelSync},loadLayersModel:function(){return ag.FB},localResponseNormalization:function(){return f.localResponseNormalization},log:function(){return f.log},log1p:function(){return f.log1p},logSigmoid:function(){return f.logSigmoid},logSoftmax:function(){return f.logSoftmax},logSumExp:function(){return f.logSumExp},logicalAnd:function(){return f.logicalAnd},logicalNot:function(){return f.logicalNot},logicalOr:function(){return f.logicalOr},logicalXor:function(){return f.logicalXor},losses:function(){return f.losses},lowerBound:function(){return f.lowerBound},matMul:function(){return f.matMul},math:function(){return f.math},max:function(){return f.max},maxPool:function(){return f.maxPool},maxPool3d:function(){return f.maxPool3d},maxPoolWithArgmax:function(){return f.maxPoolWithArgmax},maximum:function(){return f.maximum},mean:function(){return f.mean},memory:function(){return f.memory},meshgrid:function(){return f.meshgrid},metrics:function(){return c},min:function(){return f.min},minimum:function(){return f.minimum},mirrorPad:function(){return f.mirrorPad},mod:function(){return f.mod},model:function(){return ag.o4},models:function(){return h},moments:function(){return f.moments},movingAverage:function(){return f.movingAverage},mul:function(){return f.mul},multiRNNCell:function(){return f.multiRNNCell},multinomial:function(){return f.multinomial},neg:function(){return f.neg},nextFrame:function(){return f.nextFrame},norm:function(){return f.norm},notEqual:function(){return f.notEqual},oneHot:function(){return f.oneHot},ones:function(){return f.ones},onesLike:function(){return f.onesLike},op:function(){return f.op},outerProduct:function(){return f.outerProduct},pad:function(){return f.pad},pad1d:function(){return f.pad1d},pad2d:function(){return f.pad2d},pad3d:function(){return f.pad3d},pad4d:function(){return f.pad4d},pool:function(){return f.pool},pow:function(){return f.pow},prelu:function(){return f.prelu},print:function(){return f.print},prod:function(){return f.prod},profile:function(){return f.profile},raggedGather:function(){return f.raggedGather},raggedRange:function(){return f.raggedRange},raggedTensorToTensor:function(){return f.raggedTensorToTensor},rand:function(){return f.rand},randomGamma:function(){return f.randomGamma},randomNormal:function(){return f.randomNormal},randomStandardNormal:function(){return f.randomStandardNormal},randomUniform:function(){return f.randomUniform},randomUniformInt:function(){return f.randomUniformInt},range:function(){return f.range},ready:function(){return f.ready},real:function(){return f.real},reciprocal:function(){return f.reciprocal},registerBackend:function(){return f.registerBackend},registerCallbackConstructor:function(){return ag.gl},registerGradient:function(){return f.registerGradient},registerKernel:function(){return f.registerKernel},registerOp:function(){return av.registerOp},regularizers:function(){return d},relu:function(){return f.relu},relu6:function(){return f.relu6},removeBackend:function(){return f.removeBackend},reshape:function(){return f.reshape},reverse:function(){return f.reverse},reverse1d:function(){return f.reverse1d},reverse2d:function(){return f.reverse2d},reverse3d:function(){return f.reverse3d},reverse4d:function(){return f.reverse4d},rfft:function(){return f.rfft},round:function(){return f.round},rsqrt:function(){return f.rsqrt},scalar:function(){return f.scalar},scatterND:function(){return f.scatterND},scatter_util:function(){return f.scatter_util},searchSorted:function(){return f.searchSorted},selu:function(){return f.selu},separableConv2d:function(){return f.separableConv2d},sequential:function(){return ag.Pe},serialization:function(){return f.serialization},setBackend:function(){return f.setBackend},setPlatform:function(){return f.setPlatform},setWebGLContext:function(){return uU.nd},setdiff1dAsync:function(){return f.setdiff1dAsync},shared:function(){return ik},sigmoid:function(){return f.sigmoid},sign:function(){return f.sign},signal:function(){return f.signal},sin:function(){return f.sin},sinh:function(){return f.sinh},slice:function(){return f.slice},slice1d:function(){return f.slice1d},slice2d:function(){return f.slice2d},slice3d:function(){return f.slice3d},slice4d:function(){return f.slice4d},slice_util:function(){return f.slice_util},softmax:function(){return f.softmax},softplus:function(){return f.softplus},spaceToBatchND:function(){return f.spaceToBatchND},sparse:function(){return f.sparse},sparseToDense:function(){return f.sparseToDense},spectral:function(){return f.spectral},split:function(){return f.split},sqrt:function(){return f.sqrt},square:function(){return f.square},squaredDifference:function(){return f.squaredDifference},squeeze:function(){return f.squeeze},stack:function(){return f.stack},step:function(){return f.step},stridedSlice:function(){return f.stridedSlice},string:function(){return f.string},sub:function(){return f.sub},sum:function(){return f.sum},sumOutType:function(){return f.sumOutType},tan:function(){return f.tan},tanh:function(){return f.tanh},tensor:function(){return f.tensor},tensor1d:function(){return f.tensor1d},tensor2d:function(){return f.tensor2d},tensor3d:function(){return f.tensor3d},tensor4d:function(){return f.tensor4d},tensor5d:function(){return f.tensor5d},tensor6d:function(){return f.tensor6d},tensorScatterUpdate:function(){return f.tensorScatterUpdate},tensor_util:function(){return f.tensor_util},test_util:function(){return f.test_util},tidy:function(){return f.tidy},tile:function(){return f.tile},time:function(){return f.time},topk:function(){return f.topk},train:function(){return f.train},transpose:function(){return f.transpose},truncatedNormal:function(){return f.truncatedNormal},unique:function(){return f.unique},unregisterGradient:function(){return f.unregisterGradient},unregisterKernel:function(){return f.unregisterKernel},unsortedSegmentSum:function(){return f.unsortedSegmentSum},unstack:function(){return f.unstack},upcastType:function(){return f.upcastType},upperBound:function(){return f.upperBound},util:function(){return f.util},valueAndGrad:function(){return f.valueAndGrad},valueAndGrads:function(){return f.valueAndGrads},variable:function(){return f.variable},variableGrads:function(){return f.variableGrads},version:function(){return mB},version_converter:function(){return av.version_converter},version_core:function(){return f.version_core},version_cpu:function(){return iI},version_layers:function(){return ay.i},version_webgl:function(){return uW},webgl:function(){return uX},webgl_util:function(){return uG},where:function(){return f.where},whereAsync:function(){return f.whereAsync},zeros:function(){return f.zeros},zerosLike:function(){return f.zerosLike}});var a,i,s,o,l={};n.r(l),n.d(l,{maxNorm:function(){return rN},minMaxNorm:function(){return r$},nonNeg:function(){return rA},unitNorm:function(){return rT}});var u={};n.r(u),n.d(u,{constant:function(){return rD},glorotNormal:function(){return rB},glorotUniform:function(){return rP},heNormal:function(){return rW},heUniform:function(){return rV},identity:function(){return rz},leCunNormal:function(){return rG},leCunUniform:function(){return rU},ones:function(){return rR},orthogonal:function(){return rH},randomNormal:function(){return rO},randomUniform:function(){return r_},truncatedNormal:function(){return rM},varianceScaling:function(){return rL},zeros:function(){return rF}});var c={};n.r(c),n.d(c,{MAPE:function(){return r6},MSE:function(){return r8},binaryAccuracy:function(){return rK},binaryCrossentropy:function(){return rQ},categoricalAccuracy:function(){return rZ},categoricalCrossentropy:function(){return rJ},cosineProximity:function(){return r2},mape:function(){return r5},meanAbsoluteError:function(){return r3},meanAbsolutePercentageError:function(){return r4},meanSquaredError:function(){return r9},mse:function(){return r7},precision:function(){return r0},r2Score:function(){return ae},recall:function(){return r1},sparseCategoricalAccuracy:function(){return rY}});var h={};n.r(h),n.d(h,{modelFromJSON:function(){return at.p5}});var d={};n.r(d),n.d(d,{l1:function(){return aa},l1l2:function(){return ar},l2:function(){return ai}});var p={};n.r(p),n.d(p,{CSVDataset:function(){return a3},Dataset:function(){return aj},FileDataSource:function(){return iu},TextLineDataset:function(){return aY},URLDataSource:function(){return ic},array:function(){return aq},csv:function(){return ih},func:function(){return id},generator:function(){return ip},microphone:function(){return ig},version_data:function(){return ix},webcam:function(){return im},zip:function(){return aK}});var f=n(46040),m=n(35047),g=n(58893),x=n(45314),b=n(9794);let y={kernelName:m.SYM,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,b.N)((0,g.p)(n,"float32"),-1))}}};var v=n(83511),k=n(22666),I=n(16070),C=n(99467),w=n(77941),S=n(35799);let N={kernelName:m.VGw,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=(0,w.h)((0,g.p)(n,"float32")),r=(0,C._)((0,S.l)((0,I.i)(1),t));return(0,k.W)((0,v.h)(e,r))}}}},T={kernelName:m.SpW,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=(0,C._)((0,S.l)((0,w.h)((0,g.p)(n,"float32")),1));return(0,v.h)(e,t)}}}};var A=n(95221),$=n(96439),E=n(71101);let F={kernelName:m.mm_,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=A.assertAndGetBroadcastShape(n.shape,r.shape);return{a:()=>{let t=e,r=A.getReductionAxes(n.shape,a);return r.length>0&&(t=(0,E.S)(t,r)),(0,$.X)(t,n.shape)},b:()=>{let t=e,n=A.getReductionAxes(r.shape,a);return n.length>0&&(t=(0,E.S)(t,n)),(0,$.X)(t,r.shape)}}}},R={kernelName:m.Xze,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}};var D=n(72898);let _={kernelName:m.sJF,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,D.P)(n)}}},O={kernelName:m.aJk,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,D.P)(n)}}},M={kernelName:m.M2y,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,C._)((0,S.l)((0,I.i)(1),(0,w.h)((0,g.p)(n,"float32")))))}}};var z=n(83266);let L={kernelName:m.qw7,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=(0,C._)((0,z.I)((0,I.i)(1),(0,w.h)((0,g.p)(n,"float32"))));return(0,v.h)(e,t)}}}},P={kernelName:m.QCc,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,A.assertAndGetBroadcastShape)(n.shape,r.shape);return{a:()=>{let t=(0,z.I)((0,w.h)(n),(0,w.h)(r)),i=(0,x.d)(e,(0,v.h)(r,t)),s=(0,A.getReductionAxes)(n.shape,a);return s.length>0&&(i=(0,E.S)(i,s)),(0,$.X)(i,n.shape)},b:()=>{let t=(0,z.I)((0,w.h)(n),(0,w.h)(r)),i=(0,k.W)((0,x.d)(e,(0,v.h)(n,t))),s=(0,A.getReductionAxes)(r.shape,a);return s.length>0&&(i=(0,E.S)(i,s)),(0,$.X)(i,r.shape)}}}},B={kernelName:m.jMg,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,z.I)((0,w.h)((0,g.p)(n,"float32")),1))}}},W={kernelName:m.Oyi,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,S.l)((0,I.i)(1),(0,w.h)((0,g.p)(n,"float32"))))}}};var V=n(49681),G=n(50971),U=n(2771),H=n(79011),j=n(32888);let X=(0,j.op)({avgPool3dGrad_:function(e,t,n,r,a,i){let s=(0,G._1)(e,"dy","avgPool3dGrad"),o=(0,G._1)(t,"input","avgPool3dGrad"),l=s,u=o,c=!1;4===o.rank&&(c=!0,l=(0,$.X)(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),u=(0,$.X)(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),U.hu(5===l.rank,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),U.hu(5===u.rank,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),(0,H.m)("avgPool3dGrad",a,i);let h={dy:l,input:u},d=V.BV.runKernel(m.IMb,h,{filterSize:n,strides:r,pad:a,dimRoundingMode:i});return c?(0,$.X)(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}}),q={kernelName:m._k9,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:a,strides:i,pad:s,dimRoundingMode:o}=n;return{x:()=>X(e,r,a,i,s,o)}}},K=(0,j.op)({avgPoolGrad_:function(e,t,n,r,a){let i=(0,G._1)(e,"dy","avgPoolGrad"),s=(0,G._1)(t,"input","avgPoolGrad");U.hu(s.rank===i.rank,()=>`Rank of input (${s.rank}) does not match rank of dy (${i.rank})`);let o=s,l=i,u=!1;3===s.rank&&(u=!0,o=(0,$.X)(s,[1,s.shape[0],s.shape[1],s.shape[2]]),l=(0,$.X)(i,[1,i.shape[0],i.shape[1],i.shape[2]])),U.hu(4===l.rank,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),U.hu(4===o.rank,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${o.rank}.`);let c={dy:l,input:o},h=V.BV.runKernel(m.ROF,c,{filterSize:n,strides:r,pad:a});return u?(0,$.X)(h,[h.shape[1],h.shape[2],h.shape[3]]):h}}),Q={kernelName:m.JhU,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:a,strides:i,pad:s}=n;return{x:()=>K(e,r,a,i,s)}}};var Y=n(45193);let Z={kernelName:m.XLW,inputsToSave:["a","b"],gradFunc:(e,t,n)=>{let[r,a]=t,{transposeA:i,transposeB:s}=n;return i||s?!i&&s?{a:()=>(0,Y.O)(e,a,!1,!1),b:()=>(0,Y.O)(e,r,!0,!1)}:i&&!s?{a:()=>(0,Y.O)(a,e,!1,!0),b:()=>(0,Y.O)(r,e,!1,!1)}:{a:()=>(0,Y.O)(a,e,!0,!0),b:()=>(0,Y.O)(e,r,!0,!0)}:{a:()=>(0,Y.O)(e,a,!1,!0),b:()=>(0,Y.O)(r,e,!0,!1)}}};var J=n(5802);let ee={kernelName:m.zws,gradFunc:(e,t,n)=>{let{blockShape:r,crops:a}=n;return{x:()=>(0,J.f)(e,r,a)}}},et={kernelName:m.Ly9,gradFunc:(e,t,n)=>{let r=n.inputShape,a=n.shape,i=Array.from(a);for(let e=r.length-1;e>=0;e--)if(r[e]===a[e])i[e]=1;else if(1!==r[e])throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<i.length;e++)i[e]>1&&s.push(e);return{x:()=>(0,E.S)(e,s,!0)}}},en={kernelName:m.RFZ,gradFunc:e=>({x:()=>e.clone()})},er={kernelName:m.gJX,gradFunc:e=>({x:()=>(0,D.P)(e)})};var ea=n(39344),ei=n(7444),es=n(85364),eo=n(81275);let el={kernelName:m.xnO,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:a,clipValueMax:i}=n;return{x:()=>(0,eo.a)((0,es.H)((0,ea.b)(r,a),(0,ei.z)(r,i)),e,(0,D.P)(e))}}},eu={kernelName:m.yj2,inputsToSave:["x"],gradFunc:y.gradFunc};var ec=n(59509);let eh={kernelName:m.Eh3,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:a}=n,i=(0,U.EC)(a,t[0].shape)[0],s=r.map(e=>e[i]);return(0,ec.V)(e,s,i).map(e=>()=>e)}};var ed=n(16453),ep=n(28725);let ef={kernelName:m.mhS,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{let[r,a]=t,{dilations:i,strides:s,pad:o,dataFormat:l}=n;return U.hu(H.I0(i),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`),{x:()=>(0,ep._)(r.shape,e,a,s,o,l),filter:()=>(0,ed.p)(r,e,a.shape,s,o,l)}}};var em=n(93468);let eg={kernelName:m.wm,inputsToSave:["dy","filter"],gradFunc:(e,t,n)=>{let[r,a]=t,{strides:i,pad:s,dataFormat:o,dimRoundingMode:l}=n;return{dy:()=>(0,em.T)(e,a,i,s,o,1,l),filter:()=>(0,ed.p)(e,r,a.shape,i,s,o,l)}}},ex=(0,j.op)({conv3DBackpropFilter_:function(e,t,n,r,a){let i=e;4===e.rank&&(i=(0,$.X)(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let s=t;4===s.rank&&(s=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),U.hu(5===i.rank,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${i.shape}.`),U.hu(5===s.rank,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${s.shape}.`),U.hu(5===n.length,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),U.hu(i.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${i.shape[4]}) must match input depth in filter (${n[3]}.`),U.hu(s.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${s.shape[4]}) must match output depth for filter (${n[4]}).`);let o={x:i,dy:s};return V.BV.runKernel(m.o2y,o,{strides:r,pad:a,filterShape:n})}});var eb=n(59457);let ey={kernelName:m.x12,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{let{dilations:r,strides:a,pad:i}=n;U.hu((0,H.I0)(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[s,o]=t;return{x:()=>(0,eb._)(s.shape,e,o,a,i),filter:()=>ex(s,e,o.shape,a,i)}}};var ev=n(59633);let ek={kernelName:m.mc4,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)((0,k.W)((0,ev.O)((0,g.p)(n,"float32"))),e)}}};var eI=n(63533);let eC={kernelName:m.TR1,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)((0,eI.R)((0,g.p)(n,"float32")),e)}}};var ew=n(47050),eS=n(87905),eN=n(26439);let eT={kernelName:m.iHb,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{axis:a,exclusive:i,reverse:s}=n;return{x:()=>{let t=(0,ew.Q3)([a],r.rank),n=(0,eS.z)(e,a,i,!s);return null!=t&&(n=(0,eN.p)(n,t)),n}}}};var eA=n(77982),e$=n(83171);let eE={kernelName:m.cie,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{let{dilations:r,strides:a,pad:i,dimRoundingMode:s}=n,o=null==r?[1,1]:r;U.hu(H.I0(o),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);let[l,u]=t;return U.hu(4===l.rank,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),U.hu(4===u.rank,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),U.hu(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),U.hu(H.jT(a,o),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${a} and dilations '${o}'.`),H.m("depthwiseConv2d",i,s),{x:()=>(0,e$.v)(l.shape,e,u,a,i,o,s),filter:()=>(0,eA.z)(l,e,u.shape,a,i,o,s)}}},eF={kernelName:m.p4S,inputsToSave:["x","filter"],gradFunc:(e,t,n)=>{let[r,a]=t,i={x:r,filter:a,dy:e},s={x:r,filter:a,dy:e};return{x:()=>V.BV.runKernel(m.ekb,i,n),filter:()=>V.BV.runKernel(m.Vn9,s,n)}}},eR={kernelName:m.SX0,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>V.BV.runKernel(m.HEU,r)}}};var eD=n(17840);let e_={kernelName:m.Omj,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t,r=(0,x.d)((0,eD.Q)((0,k.W)((0,w.h)(n))),2/Math.sqrt(Math.PI));return{x:()=>(0,x.d)(e,r)}}},eO={kernelName:m.NEP,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,n)}}},eM={kernelName:m.YFo,inputsToSave:["input"],gradFunc:(e,t)=>{let[n]=t;return{input:()=>(0,$.X)(e,n.shape)}}},ez={kernelName:m.Y0y,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,eD.Q)(n))}}},eL={kernelName:m.OR,gradFunc:e=>({x:()=>(0,D.P)(e)})},eP={kernelName:m.jeX,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,A.assertAndGetBroadcastShape)(n.shape,r.shape);return{a:()=>{let t=(0,v.h)(e,(0,g.p)(r,"float32")),i=(0,A.getReductionAxes)(n.shape,a);return i.length>0?(0,$.X)((0,E.S)(t,i),n.shape):t},b:()=>{let t=(0,x.d)(e,(0,g.p)(n,"float32")),i=(0,A.getReductionAxes)(r.shape,a);i.length>0&&(t=(0,$.X)((0,E.S)(t,i),r.shape));let s=(0,w.h)(r);return(0,k.W)((0,v.h)(t,(0,g.p)(s,"float32")))}}}};var eB=n(4542),eW=n(47642);let eV={kernelName:m.sHE,inputsToSave:["x","mean","variance","scale"],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[a,i,s,o]=t,l=null==o?(0,I.i)(1):o,u=(0,A.getReductionAxes)(i.shape,a.shape),c=[];if(1===i.rank){for(let e=0;e<a.shape.length-1;++e)c.push(a.shape[e]);c.push(1)}let h=(0,S.l)(a,i),d=(0,x.d)(e,l),p=(0,eB.b)((0,z.I)(s,(0,I.i)(r))),f=(0,x.d)((0,x.d)((0,x.d)(p,p),p),(0,I.i)(-.5));return{x:()=>1===i.rank?(0,$.X)((0,x.d)((0,x.d)(e,(0,eW.G)((0,$.X)(p,[1,1,1,i.shape[0]]),c)),l),a.shape):(0,$.X)((0,x.d)((0,x.d)(e,p),l),a.shape),mean:()=>{let e=(0,x.d)((0,x.d)(p,(0,I.i)(-1)),d);return 1===i.rank&&(e=(0,E.S)(e,u)),(0,$.X)(e,i.shape)},variance:()=>{let e=(0,x.d)((0,x.d)(f,h),d);return 1===i.rank&&(e=(0,E.S)(e,u)),(0,$.X)(e,i.shape)},scale:()=>{let t=(0,x.d)(h,p),n=(0,x.d)(e,t);return 1===i.rank&&(n=(0,E.S)(n,u)),(0,$.X)(n,i.shape)},offset:()=>{let t=e;return 1===i.rank&&(t=(0,E.S)(t,u)),(0,$.X)(t,i.shape)}}}};var eG=n(95363),eU=n(13844);let eH={kernelName:m.qi_,inputsToSave:["x","indices"],gradFunc:(e,t,n)=>{let[r,a]=t,{axis:i,batchDims:s}=n,o=(0,U.EC)(i,r.shape)[0],l=(e,t,n)=>()=>{let r=e.shape,a=t.size,s=r.slice(0,o),l=s.length,u=r.slice(i,r.length).slice(1),c=u.length,h=ej(0,l),d=ej(l+1,l+1+c),p=eX([s,[a],u]),f=(0,$.X)(n,p),m=(0,$.X)(t,[a]),g=eX([[l],h,d]),x=(0,eN.p)(f,g),b=(0,eU.p)(x,m,e.shape[o]),y=(0,ew.LJ)(g);return(0,eN.p)(b,y)};if(1!==s)return{x:l(r,a,e),indices:()=>a};{let t=r.shape[0],n=r.split(t,0);return{x:()=>(0,eG.k)(n.map((t,n)=>l(t,a.slice(n,1),e.slice(n,1))())).reshape(r.shape),indices:()=>a}}}};function ej(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function eX(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}let eq={kernelName:m.Acj,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>(0,D.P)(n),b:()=>(0,D.P)(r)}}},eK={kernelName:m.iJz,gradFunc:e=>({x:()=>(0,g.p)(e,"float32")})},eQ={kernelName:m.avt,gradFunc:e=>({x:()=>(0,D.P)(e)})},eY={kernelName:m.iWB,gradFunc:e=>({x:()=>(0,D.P)(e)})},eZ={kernelName:m.r7n,gradFunc:e=>({x:()=>(0,D.P)(e)})};var eJ=n(95334);let e0={kernelName:m.J$2,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{alpha:a}=n,i=(0,eJ.p)(r,0);return{x:()=>(0,eo.a)(i,e,(0,x.d)(e,a))}}},e1={kernelName:m.kU,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,z.I)(n,1))}}},e2={kernelName:m.ZbH,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,g.p)(n,"float32"))}}},e3={kernelName:m.qCd,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:a}=n;return{logits:()=>{let t=(0,eD.Q)(r);return(0,S.l)(e,(0,x.d)((0,E.S)(e,a,!0),t))}}}},e4=(0,j.op)({localResponseNormalizationBackprop_:function(e,t,n,r=5,a=1,i=1,s=.5){return V.BV.runKernel(m.Hhh,{x:e,y:t,dy:n},{depthRadius:r,bias:a,alpha:i,beta:s})}}),e6={kernelName:m.eZ0,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,a]=t,{depthRadius:i,bias:s,alpha:o,beta:l}=n;return{x:()=>e4(r,a,e,i,s,o,l)}}};var e5=n(5252);function e9(e,t,n,r){return t.rank<n.rank&&(t=(0,$.X)(t,ew.rv(t.shape,r))),e.rank<n.rank&&(e=(0,$.X)(e,ew.rv(e.shape,r))),{x:()=>(0,x.d)(e,(0,g.p)((0,e5.D)(n,t),e.dtype))}}let e8={kernelName:m.YoZ,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,a=t[0],i=t[1],s=U.EC(r,a.shape),o=e9(e,i,a,s);return{x:()=>o.x()}}};var e7=n(78461);let te={kernelName:m.BMI,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>(0,x.d)(e,(0,g.p)((0,ea.b)(n,r),"float32")),b:()=>(0,x.d)(e,(0,g.p)((0,e7.d)(n,r),"float32"))}}},tt=(0,j.op)({maxPool3dGrad_:function(e,t,n,r,a,i,s){let o=(0,G._1)(e,"dy","maxPool3dGrad"),l=(0,G._1)(t,"input","maxPool3dGrad"),u=(0,G._1)(n,"output","maxPool3dGrad"),c=o,h=l,d=u,p=!1;4===l.rank&&(p=!0,c=(0,$.X)(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),h=(0,$.X)(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),U.hu(5===c.rank,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),U.hu(5===h.rank,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),U.hu(5===d.rank,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),(0,H.m)("maxPool3dGrad",i,s);let f={dy:c,input:h,output:d},g=V.BV.runKernel(m.OU7,f,{filterSize:r,strides:a,pad:i,dimRoundingMode:s});return p?(0,$.X)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}}),tn={kernelName:m.OAf,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,a]=t,{filterSize:i,strides:s,pad:o,dimRoundingMode:l}=n;return{x:()=>tt(e,r,a,i,s,o,l)}}},tr=(0,j.op)({maxPoolGrad_:function(e,t,n,r,a,i,s){let o=(0,G._1)(e,"dy","maxPoolGrad"),l=(0,G._1)(t,"input","maxPoolGrad"),u=(0,G._1)(n,"output","maxPoolGrad");return U.hu(l.rank===o.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${o.rank})`),U.hu(4===o.rank,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${o.rank}.`),U.hu(4===l.rank,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),H.m("maxPoolGrad",i,s),V.BV.runKernel(m.OV7,{dy:o,input:l,output:u},{filterSize:r,strides:a,pad:i,dimRoundingMode:s})}}),ta={kernelName:m.mTV,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,a]=t,{filterSize:i,strides:s,pad:o}=n;return{x:()=>tr(e,r,a,i,s,o)}}};var ti=n(36374);let ts={kernelName:m.q2K,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{axis:a}=n,i=U.EC(a,r.shape),s=(0,ew.kz)(r.shape,i)[1],o=U.NA(s);return{x:()=>{let t=r.shape.slice();i.forEach(e=>{t[e]=1});let n=(0,$.X)(e,t);return(0,v.h)((0,x.d)(n,(0,ti.i)(r.shape,"float32")),o)}}}},to={kernelName:m.c17,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[a,i]=t,s=U.EC(r,a.shape),o=e9(e,i,a,s);return{x:()=>o.x()}}},tl={kernelName:m.q8u,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>(0,x.d)(e,(0,g.p)((0,ei.z)(n,r),"float32")),b:()=>(0,x.d)(e,(0,g.p)((0,eJ.p)(n,r),"float32"))}}};var tu=n(90308);let tc={kernelName:m.jQs,inputsToSave:["x"],gradFunc:(e,t,n)=>{let r=t[0],{paddings:a}=n,i=a.map(e=>e[0]);return{x:()=>(0,tu.t)(e,i,r.shape)}}};var th=n(8703);let td={kernelName:m.Vbg,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,A.assertAndGetBroadcastShape)(n.shape,r.shape);return{a:()=>{let t=(0,A.getReductionAxes)(n.shape,a);return t.length>0?(0,$.X)((0,E.S)(e,t),n.shape):e},b:()=>{let t=(0,x.d)(e,(0,k.W)((0,th.G)((0,v.h)(n,r)))),i=(0,A.getReductionAxes)(r.shape,a);return i.length>0?(0,$.X)((0,E.S)(t,i),r.shape):t}}}},tp={kernelName:m.wYn,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,A.assertAndGetBroadcastShape)(n.shape,r.shape);return{a:()=>{let t=(0,x.d)(e,(0,g.p)(r,"float32")),i=(0,A.getReductionAxes)(n.shape,a);return i.length>0?(0,$.X)((0,E.S)(t,i),n.shape):t},b:()=>{let t=(0,x.d)(e,(0,g.p)(n,"float32")),i=(0,A.getReductionAxes)(r.shape,a);return i.length>0?(0,$.X)((0,E.S)(t,i),r.shape):t}}}},tf={kernelName:m.kuV,gradFunc:e=>({x:()=>(0,k.W)(e)})};var tm=n(40290);let tg={kernelName:m.we_,inputsToSave:["indices"],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>(0,tm.l)(n.shape,"float32")}}},tx={kernelName:m.qWM,gradFunc:e=>({x:()=>(0,D.P)(e)})};var tb=n(51863);let ty={kernelName:m.QiL,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return(0,tb.H)(e,r).map(e=>()=>e)}},tv={kernelName:m.lyA,inputsToSave:["x"],gradFunc:(e,t,n)=>{let r=t[0],{paddings:a}=n,i=a.map(e=>e[0]);return{x:()=>(0,tu.t)(e,i,r.shape)}}};var tk=n(78399),tI=n(12611);let tC={kernelName:m.pe_,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,a]=t,i=A.assertAndGetBroadcastShape(n.shape,r.shape);return{a:()=>{let t=(0,g.p)(r,"float32"),a=(0,x.d)(e,(0,x.d)(t,(0,tI.s)(n,(0,S.l)(t,(0,I.i)(1))))),s=A.getReductionAxes(n.shape,i);return s.length>0&&(a=(0,E.S)(a,s)),(0,$.X)(a,n.shape)},b:()=>{let t=(0,eJ.p)(n,0),s=(0,eo.a)(t,(0,tk.c)(n),(0,D.P)(n)),o=(0,x.d)(e,(0,x.d)(a,s)),l=A.getReductionAxes(r.shape,i);return l.length>0&&(o=(0,E.S)(o,l)),(0,$.X)(o,r.shape)}}}},tw={kernelName:m.o0g,inputsToSave:["x","alpha"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,eJ.p)(n,0);return{x:()=>(0,eo.a)(a,e,(0,x.d)(e,r)),alpha:()=>{let t=(0,eo.a)(a,(0,D.P)(e),(0,x.d)(e,n)),i=(0,A.getReductionAxes)(r.shape,e.shape);return i.length>0&&(t=(0,E.S)(t,i)),(0,$.X)(t,r.shape)}}}};var tS=n(66464);let tN={kernelName:m.DlI,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{axis:a}=n,i=[];return i=null==a?r.shape.map((e,t)=>t):"number"==typeof a?[a]:a,{x:()=>(function(e,t,n){let r=e.shape.length,a=r-n.length,i=ew.Q3(n,r),s=e;null!=i&&(s=(0,eN.p)(e,i));let o=s.shape.slice(),l=o.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);o.push(l);let u=function(e,t,n){let r=e.shape.slice();r[n]=1;let a=(0,$.X)(t,r),i=(0,tS.$)(e,n,!0,!1),s=(0,tS.$)(e,n,!0,!0),o=(0,x.d)(i,s);return(0,x.d)(a,o)}(s.reshape(o),t,a);if(u=u.reshape(s.shape),null!=i){let e=ew.LJ(i);u=(0,eN.p)(u,e)}return u})(r,e,i)}}},tT={kernelName:m.oHH,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=A.assertAndGetBroadcastShape(n.shape,r.shape);return{a:()=>{let t=(0,v.h)(e,(0,g.p)(r,"float32")),i=A.getReductionAxes(n.shape,a);return i.length>0?(0,$.X)((0,E.S)(t,i),n.shape):t},b:()=>{let t=(0,x.d)(e,(0,g.p)(n,"float32")),i=A.getReductionAxes(r.shape,a);i.length>0&&(t=(0,$.X)((0,E.S)(t,i),r.shape));let s=(0,w.h)(r);return(0,k.W)((0,v.h)(t,(0,g.p)(s,"float32")))}}}},tA={kernelName:m.$HU,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,k.W)((0,w.h)(n)))}}},t$={kernelName:m.SbG,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t,r=(0,x.d)((0,ei.z)(n,6),(0,b.N)(n));return{x:()=>(0,x.d)(e,(0,g.p)(r,"float32"))}}},tE={kernelName:m.qkr,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,g.p)((0,b.N)(n),"float32"))}}},tF={kernelName:m.HZH,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,$.X)(e,n.shape)}}},tR={kernelName:m._Yw,inputsToSave:["images"],gradFunc:(e,t,n)=>{let[r]=t,a={dy:e,images:r};return{images:()=>V.BV.runKernel(m.zbQ,a,n)}}},tD={kernelName:m.dpD,inputsToSave:["images"],gradFunc:(e,t,n)=>{let[r]=t,a={dy:e,images:r};return{images:()=>V.BV.runKernel(m.Hmb,a,n)}}};var t_=n(36439);let tO={kernelName:m.mKl,gradFunc:(e,t,n)=>{let{dims:r}=n,a=(0,U.EC)(r,e.shape);return{x:()=>(0,t_.G)(e,a)}}},tM={kernelName:m.e07,gradFunc:e=>({x:()=>(0,D.P)(e)})},tz={kernelName:m.bV0,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,k.W)((0,v.h)(e,(0,x.d)((0,tI.s)(n,1.5),2)))}}};var tL=n(67667);let tP={kernelName:m.PhF,inputsToSave:["condition"],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>(0,g.p)((0,D.P)(n),"float32"),t:()=>(0,x.d)(e,(0,g.p)(n,e.dtype)),e:()=>(0,x.d)(e,(0,g.p)((0,tL.h)(n),e.dtype))}}};var tB=n(97184);let tW={kernelName:m.oFR,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=(0,eJ.p)(n,(0,I.i)(0)),r=(0,I.i)(tB.y),a=(0,I.i)(tB.$),i=(0,x.d)(e,a),s=(0,x.d)((0,x.d)(e,r),(0,eD.Q)((0,g.p)(n,"float32")));return(0,eo.a)(t,i,s)}}}},tV={kernelName:m.a5O,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,x.d)(n,(0,S.l)((0,I.i)(1),n)))}}},tG={kernelName:m.i5y,gradFunc:e=>({x:()=>(0,D.P)(e)})};var tU=n(14215);let tH={kernelName:m.RQH,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)((0,tU.m)((0,g.p)(n,"float32")),e)}}};var tj=n(66484);let tX={kernelName:m.wYB,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)((0,tj.f)((0,g.p)(n,"float32")),e)}}};var tq=n(93649),tK=n(96614);let tQ={kernelName:m.p2w,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{begin:a,size:i}=n,s=r.shape,[o,l]=(0,tK.parseSliceParams)(r,a,i),u=[];for(let t=0;t<e.rank;t++)u.push([o[t],s[t]-o[t]-l[t]]);return{x:()=>(0,tq.v)(e,u)}}},tY={kernelName:m.Gcp,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:a}=n,i=(0,x.d)(e,r);return{logits:()=>(0,S.l)(i,(0,x.d)((0,E.S)(i,[a],!0),r))}}};var tZ=n(95986);let tJ={kernelName:m.MRv,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,tZ.X)(n))}}};var t0=n(96336);let t1={kernelName:m.TQc,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:a}=n;return{x:()=>(0,t0.E)(e,r,a)}}};var t2=n(8863);let t3={kernelName:m.L8s,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>(0,t2.z)(e,r)}}},t4={kernelName:m.FKq,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,x.d)((0,C._)((0,g.p)(n,"float32")),2))}}},t6={kernelName:m.bK0,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)(e,(0,x.d)((0,g.p)(n,"float32"),2))}}},t5={kernelName:m._tC,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=(0,I.i)(2);return{a:()=>(0,x.d)(e,(0,x.d)(a,(0,S.l)(n,r))),b:()=>(0,x.d)(e,(0,x.d)(a,(0,S.l)(r,n)))}}},t9={kernelName:m.h8e,gradFunc:e=>({x:()=>(0,D.P)(e)})},t8={kernelName:m.Tr8,inputsToSave:["a","b"],gradFunc:(e,t)=>{let[n,r]=t,a=A.assertAndGetBroadcastShape(n.shape,r.shape);return{a:()=>{let t=e,r=A.getReductionAxes(n.shape,a);return r.length>0&&(t=(0,E.S)(t,r)),(0,$.X)(t,n.shape)},b:()=>{let t=e,n=A.getReductionAxes(r.shape,a);return n.length>0&&(t=(0,E.S)(t,n)),(0,$.X)((0,k.W)(t),r.shape)}}}},t7={kernelName:m.GBy,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,a=r.shape.slice(),{axis:i}=n;(0,U.EC)(i,r.shape).forEach(e=>{a[e]=1});let s=(0,$.X)(e,a),o=(0,x.d)(s,(0,ti.i)(r.shape,"float32"));return{x:()=>o}}},ne={kernelName:m.sEM,inputsToSave:["x"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,v.h)(e,(0,w.h)((0,tU.m)(n)))}}},nt={kernelName:m.MIZ,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(0,x.d)((0,S.l)((0,I.i)(1),(0,w.h)(n)),e)}}},nn={kernelName:m.n9L,inputsToSave:["x"],gradFunc:(e,t,n)=>{let[r]=t,{reps:a}=n;return{x:()=>{let t=(0,D.P)(r);if(1===r.rank)for(let n=0;n<a[0];++n)t=(0,z.I)(t,(0,tu.t)(e,[n*r.shape[0]],[r.shape[0]]));else if(2===r.rank)for(let n=0;n<a[0];++n)for(let i=0;i<a[1];++i)t=(0,z.I)(t,(0,tu.t)(e,[n*r.shape[0],i*r.shape[1]],[r.shape[0],r.shape[1]]));else if(3===r.rank)for(let n=0;n<a[0];++n)for(let i=0;i<a[1];++i)for(let s=0;s<a[2];++s)t=(0,z.I)(t,(0,tu.t)(e,[n*r.shape[0],i*r.shape[1],s*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(4===r.rank)for(let n=0;n<a[0];++n)for(let i=0;i<a[1];++i)for(let s=0;s<a[2];++s)for(let o=0;o<a[3];++o)t=(0,z.I)(t,(0,tu.t)(e,[n*r.shape[0],i*r.shape[1],s*r.shape[2],o*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}},nr={kernelName:m.G3Y,gradFunc:(e,t,n)=>{let{perm:r}=n,a=ew.LJ(r);return{x:()=>(0,eN.p)(e,a)}}},na={kernelName:m.ToN,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>(0,eG.k)(e,r)}}};var ni=n(4968),ns=n(83655),no=n(92673);let nl={kernelName:m.Qvg,inputsToSave:["segmentIds"],gradFunc:(e,t)=>{let[n]=t;return{x:()=>(function(e,t){let n=(0,no.g)(t,(0,D.P)(t)),r=(0,ns.I)(e,n),a=(0,ea.b)(t,(0,I.i)(0,"int32")),i=r.rank-a.rank;for(let e=0;e<i;++e)a=(0,ni.d)(a,e+1);a=(0,es.H)(a,(0,ti.i)(r.shape,"bool"));let s=(0,D.P)(r);return(0,eo.a)(a,r,s)})(e,n)}}},nu={kernelName:m.RuY,gradFunc:e=>({x:()=>(0,D.P)(e)})};var nc=n(29922);for(let e of[y,N,T,F,R,_,O,M,L,P,B,W,q,Q,Z,ee,et,en,er,el,eu,eh,eg,ef,ey,ek,eC,eT,eE,eF,tT,eR,e_,eO,eM,ez,eP,eL,eV,eH,eq,eK,eQ,eY,eZ,e0,e1,e2,e3,e6,e8,e8,te,tn,ta,ts,to,tl,tc,td,tp,tf,tg,tx,ty,tv,tv,tC,tw,tN,tA,t$,tE,tF,tR,tD,tO,tM,tz,tP,tW,tV,tG,tH,tX,tQ,tY,tJ,t1,t1,t3,t3,t4,t5,t6,t9,t8,t7,ne,nt,nn,nr,na,nl,nu])(0,nc.Li)(e);var nh=n(99044),nd=n(86150);(0,nd.t3)().prototype.abs=function(){return this.throwIfDisposed(),(0,nh.W)(this)};var np=n(54868);(0,nd.t3)().prototype.acos=function(){return this.throwIfDisposed(),(0,np.K)(this)};var nf=n(99997);(0,nd.t3)().prototype.acosh=function(){return this.throwIfDisposed(),(0,nf._)(this)},(0,nd.t3)().prototype.add=function(e){return this.throwIfDisposed(),(0,z.I)(this,e)};var nm=n(45195);(0,nd.t3)().prototype.all=function(e,t){return this.throwIfDisposed(),(0,nm.$)(this,e,t)};var ng=n(6591);(0,nd.t3)().prototype.any=function(e,t){return this.throwIfDisposed(),(0,ng.Y)(this,e,t)};var nx=n(21231);(0,nd.t3)().prototype.argMax=function(e){return this.throwIfDisposed(),(0,nx.N)(this,e)};var nb=n(29896);(0,nd.t3)().prototype.argMin=function(e){return this.throwIfDisposed(),(0,nb.v)(this,e)},(0,nd.t3)().prototype.asScalar=function(){return this.throwIfDisposed(),(0,U.hu)(1===this.size,()=>"The array must have only 1 element."),(0,$.X)(this,[])},(0,nd.t3)().prototype.asType=function(e){return this.throwIfDisposed(),(0,g.p)(this,e)},(0,nd.t3)().prototype.as1D=function(){return this.throwIfDisposed(),(0,$.X)(this,[this.size])},(0,nd.t3)().prototype.as2D=function(e,t){return this.throwIfDisposed(),(0,$.X)(this,[e,t])},(0,nd.t3)().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),(0,$.X)(this,[e,t,n])},(0,nd.t3)().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),(0,$.X)(this,[e,t,n,r])},(0,nd.t3)().prototype.as5D=function(e,t,n,r,a){return this.throwIfDisposed(),(0,$.X)(this,[e,t,n,r,a])};var ny=n(37662);(0,nd.t3)().prototype.asin=function(){return this.throwIfDisposed(),(0,ny.Z)(this)};var nv=n(98491);(0,nd.t3)().prototype.asinh=function(){return this.throwIfDisposed(),(0,nv.V)(this)};var nk=n(27053);(0,nd.t3)().prototype.atan=function(){return this.throwIfDisposed(),(0,nk.z)(this)};var nI=n(15624);(0,nd.t3)().prototype.atan2=function(e){return this.throwIfDisposed(),(0,nI.f)(this,e)};var nC=n(38578);(0,nd.t3)().prototype.atanh=function(){return this.throwIfDisposed(),(0,nC.C)(this)};var nw=n(72126);(0,nd.t3)().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),(0,nw.w)(this,e,t,n,r)},(0,nd.t3)().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),(0,t0.E)(this,e,t)};var nS=n(60592);(0,nd.t3)().prototype.batchNorm=function(e,t,n,r,a){return this.throwIfDisposed(),(0,nS.t)(this,e,t,n,r,a)};var nN=n(25896);(0,nd.t3)().prototype.broadcastTo=function(e){return this.throwIfDisposed(),(0,nN.U)(this,e)},(0,nd.t3)().prototype.cast=function(e){return this.throwIfDisposed(),(0,g.p)(this,e)};var nT=n(61109);(0,nd.t3)().prototype.ceil=function(){return this.throwIfDisposed(),(0,nT.m)(this)};var nA=n(57463);(0,nd.t3)().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),(0,nA.i)(this,e,t)},(0,nd.t3)().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof nd.es&&(e=[e]),(0,t2.z)([this,...e],t)};var n$=n(26412);(0,nd.t3)().prototype.conv1d=function(e,t,n,r,a,i){return this.throwIfDisposed(),(0,n$.P)(this,e,t,n,r,a,i)};var nE=n(35883);(0,nd.t3)().prototype.conv2dTranspose=function(e,t,n,r,a){return this.throwIfDisposed(),(0,nE.b)(this,e,t,n,r,a)},(0,nd.t3)().prototype.conv2d=function(e,t,n,r,a,i){return this.throwIfDisposed(),(0,em.T)(this,e,t,n,r,a,i)},(0,nd.t3)().prototype.cos=function(){return this.throwIfDisposed(),(0,tU.m)(this)},(0,nd.t3)().prototype.cosh=function(){return this.throwIfDisposed(),(0,tj.f)(this)},(0,nd.t3)().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),(0,tS.$)(this,e,t,n)},(0,nd.t3)().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),(0,eS.z)(this,e,t,n)};var nF=n(51558);(0,nd.t3)().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),(0,nF.n)(this,e,t)};var nR=n(52489);(0,nd.t3)().prototype.depthwiseConv2d=function(e,t,n,r,a,i){return this.throwIfDisposed(),(0,nR.B)(this,e,t,n,r,a,i)};var nD=n(22341);(0,nd.t3)().prototype.dilation2d=function(e,t,n,r,a){return this.throwIfDisposed(),(0,nD.W)(this,e,t,n,r,a)};var n_=n(62802);(0,nd.t3)().prototype.divNoNan=function(e){return this.throwIfDisposed(),(0,n_.N)(this,e)},(0,nd.t3)().prototype.div=function(e){return this.throwIfDisposed(),(0,v.h)(this,e)};var nO=n(5280);(0,nd.t3)().prototype.dot=function(e){return this.throwIfDisposed(),(0,nO.A)(this,e)};var nM=n(74077);(0,nd.t3)().prototype.elu=function(){return this.throwIfDisposed(),(0,nM.p)(this)},(0,nd.t3)().prototype.equal=function(e){return this.throwIfDisposed(),(0,e5.D)(this,e)};var nz=n(42710);(0,nd.t3)().prototype.erf=function(){return this.throwIfDisposed(),(0,nz.q)(this)};var nL=n(5646);(0,nd.t3)().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),(0,nL.d)(this,e,t)},(0,nd.t3)().prototype.exp=function(){return this.throwIfDisposed(),(0,eD.Q)(this)},(0,nd.t3)().prototype.expandDims=function(e){return this.throwIfDisposed(),(0,ni.d)(this,e)};var nP=n(82908);(0,nd.t3)().prototype.expm1=function(){return this.throwIfDisposed(),(0,nP.t)(this)};var nB=n(36368);(0,nd.t3)().prototype.fft=function(){return this.throwIfDisposed(),(0,nB.k)(this)},(0,nd.t3)().prototype.flatten=function(){return this.throwIfDisposed(),(0,$.X)(this,[this.size])},(0,nd.t3)().prototype.floor=function(){return this.throwIfDisposed(),(0,th.G)(this)};var nW=n(77576);(0,nd.t3)().prototype.floorDiv=function(e){return this.throwIfDisposed(),(0,nW.q)(this,e)},(0,nd.t3)().prototype.gather=function(e,t,n){return this.throwIfDisposed(),(0,ns.I)(this,e,t,n)},(0,nd.t3)().prototype.greaterEqual=function(e){return this.throwIfDisposed(),(0,ea.b)(this,e)},(0,nd.t3)().prototype.greater=function(e){return this.throwIfDisposed(),(0,eJ.p)(this,e)};var nV=n(93267);(0,nd.t3)().prototype.ifft=function(){return this.throwIfDisposed(),(0,nV.S)(this)};var nG=n(33170);(0,nd.t3)().prototype.irfft=function(){return this.throwIfDisposed(),(0,nG.w)(this)};var nU=n(15242);(0,nd.t3)().prototype.isFinite=function(){return this.throwIfDisposed(),(0,nU.x)(this)};var nH=n(12705);(0,nd.t3)().prototype.isInf=function(){return this.throwIfDisposed(),(0,nH.U)(this)};var nj=n(71402);(0,nd.t3)().prototype.isNaN=function(){return this.throwIfDisposed(),(0,nj.i)(this)};var nX=n(16437);(0,nd.t3)().prototype.leakyRelu=function(e){return this.throwIfDisposed(),(0,nX.h)(this,e)},(0,nd.t3)().prototype.lessEqual=function(e){return this.throwIfDisposed(),(0,ei.z)(this,e)},(0,nd.t3)().prototype.less=function(e){return this.throwIfDisposed(),(0,e7.d)(this,e)};var nq=n(63798);(0,nd.t3)().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),(0,nq.G)(this,e,t,n,r)};var nK=n(9773);(0,nd.t3)().prototype.logSigmoid=function(){return this.throwIfDisposed(),(0,nK.e)(this)};var nQ=n(28152);(0,nd.t3)().prototype.logSoftmax=function(e){return this.throwIfDisposed(),(0,nQ.C)(this,e)};var nY=n(51555);(0,nd.t3)().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),(0,nY.l)(this,e,t)},(0,nd.t3)().prototype.log=function(){return this.throwIfDisposed(),(0,tk.c)(this)};var nZ=n(59865);(0,nd.t3)().prototype.log1p=function(){return this.throwIfDisposed(),(0,nZ.K)(this)},(0,nd.t3)().prototype.logicalAnd=function(e){return this.throwIfDisposed(),(0,es.H)(this,e)},(0,nd.t3)().prototype.logicalNot=function(){return this.throwIfDisposed(),(0,tL.h)(this)};var nJ=n(53851);(0,nd.t3)().prototype.logicalOr=function(e){return this.throwIfDisposed(),(0,nJ.K)(this,e)};var n0=n(59147);(0,nd.t3)().prototype.logicalXor=function(e){return this.throwIfDisposed(),(0,n0.e)(this,e)},(0,nd.t3)().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),(0,Y.O)(this,e,t,n)};var n1=n(7761);(0,nd.t3)().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),(0,n1._)(this,e,t,n,r)};var n2=n(23262);(0,nd.t3)().prototype.max=function(e,t){return this.throwIfDisposed(),(0,n2.F)(this,e,t)},(0,nd.t3)().prototype.maximum=function(e){return this.throwIfDisposed(),(0,no.g)(this,e)};var n3=n(60697);(0,nd.t3)().prototype.mean=function(e,t){return this.throwIfDisposed(),(0,n3.J)(this,e,t)};var n4=n(2376);(0,nd.t3)().prototype.min=function(e,t){return this.throwIfDisposed(),(0,n4.V)(this,e,t)};var n6=n(26004);(0,nd.t3)().prototype.minimum=function(e){return this.throwIfDisposed(),(0,n6.L)(this,e)};var n5=n(36821);(0,nd.t3)().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),(0,n5.V)(this,e,t)};var n9=n(23459);(0,nd.t3)().prototype.mod=function(e){return this.throwIfDisposed(),(0,n9.w)(this,e)},(0,nd.t3)().prototype.mul=function(e){return this.throwIfDisposed(),(0,x.d)(this,e)},(0,nd.t3)().prototype.neg=function(){return this.throwIfDisposed(),(0,k.W)(this)};var n8=n(95872);(0,nd.t3)().prototype.norm=function(e,t,n){return this.throwIfDisposed(),(0,n8.K)(this,e,t,n)};var n7=n(21834);(0,nd.t3)().prototype.notEqual=function(e){return this.throwIfDisposed(),(0,n7.Q)(this,e)};var re=n(88713);(0,nd.t3)().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),(0,re.l)(this,e,t,n)};var rt=n(18272);(0,nd.t3)().prototype.onesLike=function(){return this.throwIfDisposed(),(0,rt.J)(this)},(0,nd.t3)().prototype.pad=function(e,t){return this.throwIfDisposed(),(0,tq.v)(this,e,t)};var rn=n(16617);(0,nd.t3)().prototype.pool=function(e,t,n,r,a,i){return this.throwIfDisposed(),(0,rn.d)(this,e,t,n,r,a,i)},(0,nd.t3)().prototype.pow=function(e){return this.throwIfDisposed(),(0,tI.s)(this,e)};var rr=n(39427);(0,nd.t3)().prototype.prelu=function(e){return this.throwIfDisposed(),(0,rr.A)(this,e)};var ra=n(85367);(0,nd.t3)().prototype.prod=function(e,t){return this.throwIfDisposed(),(0,ra.W)(this,e,t)};var ri=n(11174);(0,nd.t3)().prototype.reciprocal=function(){return this.throwIfDisposed(),(0,ri.M)(this)};var rs=n(50114);(0,nd.t3)().prototype.relu=function(){return this.throwIfDisposed(),(0,rs.U)(this)};var ro=n(96762);(0,nd.t3)().prototype.relu6=function(){return this.throwIfDisposed(),(0,ro.b)(this)},(0,nd.t3)().prototype.reshapeAs=function(e){return this.throwIfDisposed(),(0,$.X)(this,e.shape)},(0,nd.t3)().prototype.reshape=function(e){return this.throwIfDisposed(),(0,$.X)(this,e)};var rl=n(91517);(0,nd.t3)().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),(0,rl.I)(this,e,t,n)};var ru=n(21214);(0,nd.t3)().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),(0,ru.j)(this,e,t,n)},(0,nd.t3)().prototype.reverse=function(e){return this.throwIfDisposed(),(0,t_.G)(this,e)};var rc=n(47797);(0,nd.t3)().prototype.rfft=function(){return this.throwIfDisposed(),(0,rc.Q)(this)};var rh=n(51100);(0,nd.t3)().prototype.round=function(){return this.throwIfDisposed(),(0,rh.N)(this)},(0,nd.t3)().prototype.rsqrt=function(){return this.throwIfDisposed(),(0,eB.b)(this)};var rd=n(90615);(0,nd.t3)().prototype.selu=function(){return this.throwIfDisposed(),(0,rd.U)(this)};var rp=n(58661);(0,nd.t3)().prototype.separableConv2d=function(e,t,n,r,a,i){return this.throwIfDisposed(),(0,rp.U)(this,e,t,n,r,a,i)},(0,nd.t3)().prototype.sigmoid=function(){return this.throwIfDisposed(),(0,tZ.X)(this)};var rf=n(22140);(0,nd.t3)().prototype.sign=function(){return this.throwIfDisposed(),(0,rf.X)(this)},(0,nd.t3)().prototype.sin=function(){return this.throwIfDisposed(),(0,ev.O)(this)},(0,nd.t3)().prototype.sinh=function(){return this.throwIfDisposed(),(0,eI.R)(this)},(0,nd.t3)().prototype.slice=function(e,t){return this.throwIfDisposed(),(0,tu.t)(this,e,t)};var rm=n(63919);(0,nd.t3)().prototype.softmax=function(e){return this.throwIfDisposed(),(0,rm.X)(this,e)};var rg=n(34779);(0,nd.t3)().prototype.softplus=function(){return this.throwIfDisposed(),(0,rg.W)(this)},(0,nd.t3)().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),(0,J.f)(this,e,t)},(0,nd.t3)().prototype.split=function(e,t){return this.throwIfDisposed(),(0,ec.V)(this,e,t)},(0,nd.t3)().prototype.sqrt=function(){return this.throwIfDisposed(),(0,C._)(this)},(0,nd.t3)().prototype.square=function(){return this.throwIfDisposed(),(0,w.h)(this)};var rx=n(67436);(0,nd.t3)().prototype.squaredDifference=function(e){return this.throwIfDisposed(),(0,rx.$)(this,e)};var rb=n(48772);(0,nd.t3)().prototype.squeeze=function(e){return this.throwIfDisposed(),(0,rb.L)(this,e)},(0,nd.t3)().prototype.stack=function(e,t){this.throwIfDisposed();let n=e instanceof nd.es?[this,e]:[this,...e];return(0,eG.k)(n,t)},(0,nd.t3)().prototype.step=function(e){return this.throwIfDisposed(),(0,b.N)(this,e)};var ry=n(32360);(0,nd.t3)().prototype.stridedSlice=function(e,t,n,r,a,i,s,o){return this.throwIfDisposed(),(0,ry.N)(this,e,t,n,r,a,i,s,o)},(0,nd.t3)().prototype.sub=function(e){return this.throwIfDisposed(),(0,S.l)(this,e)},(0,nd.t3)().prototype.sum=function(e,t){return this.throwIfDisposed(),(0,E.S)(this,e,t)};var rv=n(36764);(0,nd.t3)().prototype.tan=function(){return this.throwIfDisposed(),(0,rv.O)(this)};var rk=n(13831);(0,nd.t3)().prototype.tanh=function(){return this.throwIfDisposed(),(0,rk.A)(this)},(0,nd.t3)().prototype.tile=function(e){return this.throwIfDisposed(),(0,eW.G)(this,e)},(0,nd.t3)().prototype.toBool=function(){return this.throwIfDisposed(),(0,g.p)(this,"bool")},(0,nd.t3)().prototype.toFloat=function(){return this.throwIfDisposed(),(0,g.p)(this,"float32")},(0,nd.t3)().prototype.toInt=function(){return this.throwIfDisposed(),(0,g.p)(this,"int32")};var rI=n(86845);(0,nd.t3)().prototype.topk=function(e,t){return this.throwIfDisposed(),(0,rI.h)(this,e,t)},(0,nd.t3)().prototype.transpose=function(e){return this.throwIfDisposed(),(0,eN.p)(this,e)};var rC=n(38613);(0,nd.t3)().prototype.unique=function(e){return this.throwIfDisposed(),(0,rC.T)(this,e)},(0,nd.t3)().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),(0,eU.p)(this,e,t)},(0,nd.t3)().prototype.unstack=function(e){return this.throwIfDisposed(),(0,tb.H)(this,e)},(0,nd.t3)().prototype.where=function(e,t){return this.throwIfDisposed(),(0,eo.a)(e,this,t)},(0,nd.t3)().prototype.zerosLike=function(){return this.throwIfDisposed(),(0,D.P)(this)};var rw=n(95241);(0,f.env)().registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,rw.kS);var rS=n(22380);function rN(e){return new rS.Yq(e)}function rT(e){return new rS.cK(e)}function rA(){return new rS.he}function r$(e){return new rS.iL(e)}var rE=n(79878);function rF(){return new rE.H_}function rR(){return new rE.M6}function rD(e){return new rE.sr(e)}function r_(e){return new rE.Is(e)}function rO(e){return new rE.MD(e)}function rM(e){return new rE.w8(e)}function rz(e){return new rE.iJ(e)}function rL(e){return new rE.xc(e)}function rP(e){return new rE.sq(e)}function rB(e){return new rE.Jf(e)}function rW(e){return new rE.RP(e)}function rV(e){return new rE.rB(e)}function rG(e){return new rE.V9(e)}function rU(e){return new rE.yD(e)}function rH(e){return new rE.vG(e)}var rj=n(30163),rX=n(51957),rq=n(30632);function rK(e,t){return rq._F(e,t)}function rQ(e,t){return rq.fO(e,t)}function rY(e,t){return rq.TY(e,t)}function rZ(e,t){return rq.G5(e,t)}function rJ(e,t){return rq.uq(e,t)}function r0(e,t){return rq.ch(e,t)}function r1(e,t){return rq.wC(e,t)}function r2(e,t){return rX.Ls(e,t)}function r3(e,t){return rX.ke(e,t)}function r4(e,t){return rX.t3(e,t)}function r6(e,t){return rX.t3(e,t)}function r5(e,t){return rX.t3(e,t)}function r9(e,t){return rX.FD(e,t)}function r8(e,t){return rX.FD(e,t)}function r7(e,t){return rX.FD(e,t)}function ae(e,t){return rq.nP(e,t)}var at=n(72978),an=n(18030);function ar(e){return new an.Xm(e)}function aa(e){return an.l1(e)}function ai(e){return an.l2(e)}var as=n(19914),ao=n(6897),al=n(64579),au=n(10525);class ac extends as.ex{constructor(){super(...arguments),this.model=null}setModel(e){if(!(e instanceof ao.QV))throw Error("model must be a LayersModel, not some other Container");this.model=e}}function ah(e,t){return e<t}function ad(e,t){return e>t}class ap extends ac{constructor(e){if(super(),null==e&&(e={}),e.restoreBestWeights)throw new al.nj("restoreBestWeights = True is not implemented in EarlyStopping yet.");this.monitor=e.monitor||"val_loss",this.minDelta=Math.abs(e.minDelta||0),this.patience=e.patience||0,this.verbose=e.verbose||0,this.mode=e.mode||"auto",this.baseline=e.baseline,-1===["auto","min","max"].indexOf(this.mode)&&(console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`),this.mode="auto"),"min"===this.mode?this.monitorFunc=ah:"max"===this.mode?this.monitorFunc=ad:-1!==this.monitor.indexOf("acc")?this.monitorFunc=ad:this.monitorFunc=ah,this.monitorFunc===ah&&(this.minDelta*=-1)}async onTrainBegin(e){this.wait=0,this.stoppedEpoch=0,null!=this.baseline?this.best=this.baseline:this.best=this.monitorFunc===ah?1/0:-1/0}async onEpochEnd(e,t){await (0,au.Z)(t);let n=this.getMonitorValue(t);null!=n&&(this.monitorFunc(n-this.minDelta,this.best)?(this.best=n,this.wait=0):(this.wait++,this.wait>=this.patience&&(this.stoppedEpoch=e,this.model.stopTraining=!0)))}async onTrainEnd(e){this.stoppedEpoch>0&&this.verbose&&console.log(`Epoch ${this.stoppedEpoch}: early stopping.`)}getMonitorValue(e){null==e&&(e={});let t=e[this.monitor];return null==t&&console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(e)}`),t}}let af={earlyStopping:function(e){return new ap(e)}};var am=n(64580),ag=n(70738),ax=n(85903),ab=n(48234),ay=n(55690),av=n(65269),ak=n(59900);function aI(e,t,n=new Map,r=new Set){if(null==e)return null;if("function"==typeof Blob&&e instanceof Blob)return e.slice();if(r.has(e))throw Error("Circular references are not supported.");if(n.has(e))return n.get(e);let a=t(e);if(a.recurse&&null!==a.value)throw Error("A deep map function may not return both a value and recurse=true.");if(!a.recurse)return n.set(e,a.value),a.value;if(aS(e)){let a=Array.isArray(e)?[]:{};for(let i in r.add(e),e){let s=aI(e[i],t,n,r);a[i]=s}return r.delete(e),e.__proto__&&(a.__proto__=e.__proto__),a}throw Error(`Can't recurse into non-iterable type: ${e}`)}function aC(e){return null===e?null:aS(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}async function aw(e,t){let n=new Map;for(let r of(aI(e,t,n),Array.from(n.keys()))){let e=n.get(r);if(f.util.isPromise(e)){let t=await e;n.set(r,t)}}return aI(e,t,n)}function aS(e){let t=!1;if(f.env().get("IS_BROWSER"))t=e instanceof TextDecoder;else{let{StringDecoder:r}=n(34977);t=e instanceof r}return null!=e&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||"object"==typeof e&&!(e instanceof f.Tensor)&&!(e instanceof Promise)&&!t)}function aN(e){return e instanceof f.Tensor?{value:e.clone(),recurse:!1}:aS(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}class aT{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,null==e)throw RangeError("Can't create a ring buffer of unknown capacity.");if(e<1)throw RangeError("Can't create ring buffer of capacity < 1.");this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError("Can't get item at a negative index.");return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError("Can't set item at a negative index.");this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return 0===this.length()}push(e){if(this.isFull())throw RangeError("Ring buffer is full.");this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError("Ring buffer is empty.");this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError("Ring buffer is full.");this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError("Ring buffer is empty.");let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError("Ring buffer is empty.");let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}}class aA extends aT{constructor(){super(aA.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=2*this.capacity,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}}aA.INITIAL_CAPACITY=32;class a${async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)n=e((t=await this.next()).value)}handleErrors(e){return new aL(this,e)}filter(e){return new aM(this,e)}map(e){return new az(this,e)}mapAsync(e){return new aP(this,e)}serialMapAsync(e){return new aP(this,e).serial()}flatmap(e){return new aW(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>!0===e)}rowMajorBatch(e,t=!0){return new aO(this,e,t)}columnMajorBatch(e,t=!0,n=aC){return this.rowMajorBatch(e,t).map(e=>(function(e,t=aC){return function e(t,n,r=new Set){let a=t[0];if(r.has(a))throw Error("Circular references are not supported.");let i=n(t);if(i.recurse&&null!==i.value)throw Error("A deep zip function may not return both a value and recurse=true.");if(!i.recurse)return i.value;if(aS(a)){let i=Array.isArray(a)?[]:{};for(let s in r.add(a),a){let a=e(t.map(e=>e[s]),n,r);i[s]=a}return r.delete(a),i}throw Error(`Can't recurse into non-iterable type: ${a}`)}(e,t)})(e,n))}concatenate(e,t){return new aV(new aE([this,e]),t)}take(e){return e<0||null==e?this:new a_(this,e)}skip(e){return e<0||null==e?this:new aD(this,e)}prefetch(e){return new aU(this,e)}shuffle(e,t){return new aH(this,e,t)}serial(){return new aR(this)}}class aE extends a${constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:aI(e,aN),done:!1}}}class aF extends a${constructor(e){super(),this.nextFn=e}summary(){return"Function call"}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}}class aR extends a${constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}}class aD extends a${constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;f.dispose(e.value)}return this.upstream.next()}}class a_ extends a${constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}}class aO extends a${constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done){if(this.enableSmallLastBatch&&e.length>0)return{value:e,done:!1};return{value:null,done:!0}}e.push(t.value)}return{value:e,done:!1}}}class aM extends a${constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;f.dispose(e.value)}}}class az extends a${constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=f.tensor_util.getTensorsInContainer(e.value),n=this.transform(e.value),r=f.tensor_util.getTensorsInContainer(n);for(let e of t)f.tensor_util.isTensorInList(e,r)||e.dispose();return{value:n,done:!1}}}class aL extends a${constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}}class aP extends a${constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=f.tensor_util.getTensorsInContainer(e.value),n=await this.transform(e.value),r=f.tensor_util.getTensorsInContainer(n);for(let e of t)f.tensor_util.isTensorInList(e,r)||e.dispose();return{value:n,done:!1}}}class aB extends a${constructor(){super(),this.outputQueue=new aA,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;0===this.outputQueue.length();)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}}class aW extends aB{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=f.tensor_util.getTensorsInContainer(e.value),n=this.transform(e.value),r=f.tensor_util.getTensorsInContainer(n);for(let e of(this.outputQueue.pushAll(n),t))f.tensor_util.isTensorInList(e,r)||e.dispose();return!0}}class aV extends a${constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return"TODO: fill in upstream of chained summaries -> Chained"}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,null==this.iterator){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,null!=this.baseErrorHandler&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}}(a=s||(s={}))[a.FAIL=0]="FAIL",a[a.SHORTEST=1]="SHORTEST",a[a.LONGEST=2]="LONGEST";class aG extends a${constructor(e,t=s.FAIL){super(),this.iterators=e,this.mismatchMode=t,this.count=0,this.currentPromise=null}summary(){return"{TODO: fill in upstream of zip summaries} -> Zip"}async nextState(e){await e;let t=0,n=0,r=await aw(this.iterators,function(e){return e instanceof a$?{value:e.next().then(e=>(t++,e.done&&n++,e.value)),recurse:!1}:{value:null,recurse:!0}});if(t===n)return{value:null,done:!0};if(n>0)switch(this.mismatchMode){case s.FAIL:throw Error(`Zipped streams should have the same length. Mismatched at element ${this.count}.`);case s.SHORTEST:return{value:null,done:!0};case s.LONGEST:}return this.count++,{value:r,done:!1}}async next(){return this.currentPromise=this.nextState(this.currentPromise),this.currentPromise}}class aU extends a${constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new aT(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}}class aH extends aU{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=ak.alea(n||f.util.now().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(!t.done)return this.refill(),t;this.upstreamExhausted=!0}return{value:null,done:!0}}}class aj{constructor(){this.size=null}batch(e,t=!0){let n=this;return f.util.assert(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`),aX(async()=>(await n.iterator()).columnMajorBatch(e,t,aQ),this.size===1/0||null==this.size?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e))}concatenate(e){let t=this;return aX(async()=>(await t.iterator()).concatenate(await e.iterator()),this.size===1/0||e.size===1/0?1/0:null!=this.size&&null!=e.size?this.size+e.size:null)}filter(e){let t=this;return aX(async()=>(await t.iterator()).filter(t=>f.tidy(()=>e(t))),this.size===1/0?1/0:null)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return aX(async()=>(await t.iterator()).map(t=>f.tidy(()=>e(t))),this.size)}mapAsync(e){let t=this;return aX(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(null==e)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return aX(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this;return aX(async()=>new aV(new aF(async()=>({value:await t.iterator(),done:!1})).take(e),void 0),null!=this.size&&e>0?this.size*e:0===e?0:null!=this.size&&(void 0===e||e<0)?1/0:null)}skip(e){let t=this;return aX(async()=>(await t.iterator()).skip(e),null!=this.size&&e>=0&&this.size>=e?this.size-e:null!=this.size&&(this.size<e||void 0===e||e<0)?0:null)}shuffle(e,t,n=!0){if(null==e||e<0){if(null==this.size)throw RangeError("`Dataset.shuffle()` requires bufferSize to be specified.");throw RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`)}let r=this,a=ak.alea(t||f.util.now().toString());return aX(async()=>{let t=a.int32();return n&&(t+=a.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this;return aX(async()=>(await t.iterator()).take(e),null!=this.size&&this.size>e?e:null!=this.size&&this.size<=e?this.size:null)}async toArray(){if(this.size===1/0)throw Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error("Can not convert infinite data stream to array.");return(await this.iterator()).toArrayForTest()}}function aX(e,t=null){return new class extends aj{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function aq(e){return aX(async()=>new aE(e),e.length)}function aK(e){let t;if(!aS(e))throw Error("The argument to zip() must be an object or array.");if(Array.isArray(e))for(let n=0;n<e.length;n++)t=null==t?e[n].size:Math.min(t,e[n].size);else if(e instanceof Object)for(let n in e)t=null==t?e[n].size:Math.min(t,e[n].size);return aX(async()=>(function(e,t=s.FAIL){return new aG(e,t)})(await aw(e,e=>{if(e instanceof aj)return{value:e.iterator(),recurse:!1};if(aS(e))return{value:null,recurse:!0};throw Error("Leaves of the structure passed to zip() must be Datasets, not primitives.")}),s.SHORTEST),t)}function aQ(e){var t,n;return null===e?null:null==(t=e[0])||null===(n=t)||"object"!=typeof n&&"function"!=typeof n||Array.isArray(t)||"object"==typeof t&&t instanceof f.Tensor||f.util.isTypedArray(t)?{value:function(e){if(0===e.length)throw Error("Can't make a batch of zero elements.");return e[0]instanceof f.Tensor?f.stack(e):f.tensor(e)}(e),recurse:!1}:{value:null,recurse:!0}}aj.MAX_BUFFER_SIZE=1e4;class aY extends aj{constructor(e){super(),this.input=e}async iterator(){return(await this.input.iterator()).decodeUTF8().split("\n").map(e=>(e.endsWith("\r")&&(e=e.slice(0,-1)),e))}}let aZ=Symbol("out"),aJ=Symbol("field"),a0=Symbol("quote"),a1=Symbol("quoteafterquote"),a2=Symbol("quoteinquote");class a3 extends aj{async columnNames(){return this.columnNamesValidated||await this.setColumnNames(),this.configuredColumnsOnly?Object.keys(this.columnConfigs):this.fullColumnNames}async setColumnNames(){let e=await this.maybeReadHeaderLine();if(this.fullColumnNames||e)this.fullColumnNames&&e&&f.util.assert(e.length===this.fullColumnNames.length,()=>"The length of provided columnNames ("+this.fullColumnNames.length.toString()+") does not match the length of the header line read from file ("+e.length.toString()+").");else throw Error("Column names must be provided if there is no header line.");this.fullColumnNames||(this.fullColumnNames=e);let t=this.fullColumnNames.reduce((e,t)=>(e[t]=e[t]+1||1,e),{}),n=Object.keys(t).filter(e=>t[e]>1);if(f.util.assert(0===n.length,()=>"Duplicate column names found: "+n.toString()),this.columnConfigs){for(let e of Object.keys(this.columnConfigs))if(-1===this.fullColumnNames.indexOf(e))throw Error('The key "'+e+'" provided in columnConfigs does not match any of the column names ('+this.fullColumnNames.toString()+").")}this.columnNamesValidated=!0}async maybeReadHeaderLine(){if(!this.hasHeader)return null;{let e=await this.base.iterator(),t=await e.next();if(t.done)throw Error("No data was found for CSV parsing.");let n=t.value;return this.parseRow(n,!1)}}constructor(e,t){super(),this.input=e,this.hasHeader=!0,this.fullColumnNames=null,this.columnNamesValidated=!1,this.columnConfigs=null,this.configuredColumnsOnly=!1,this.delimiter=",",this.delimWhitespace=!1,this.base=new aY(e),t||(t={}),this.hasHeader=!1!==t.hasHeader,this.fullColumnNames=t.columnNames,this.columnConfigs=t.columnConfigs,this.configuredColumnsOnly=t.configuredColumnsOnly,t.delimWhitespace?(f.util.assert(null==t.delimiter,()=>"Delimiter should not be provided when delimWhitespace is true."),this.delimWhitespace=!0,this.delimiter=" "):this.delimiter=t.delimiter?t.delimiter:","}async iterator(){this.columnNamesValidated||await this.setColumnNames();let e=await this.base.iterator();return this.hasHeader&&(e=e.skip(1)),e.map(e=>this.makeDataElement(e))}makeDataElement(e){let t=this.parseRow(e),n={},r={};for(let a=0;a<this.fullColumnNames.length;a++){let i=this.fullColumnNames[a],s=this.columnConfigs?this.columnConfigs[i]:null;if(!this.configuredColumnsOnly||s){let o=t[a],l=null;if(""===o){if(s&&void 0!==s.default)l=s.default;else if(s&&(s.required||s.isLabel))throw Error(`Required column ${i} is empty in this line: ${e}`);else l=void 0}else{let e=Number(o);if(isNaN(e))l=s&&"bool"===s.dtype?this.getBoolean(o):o;else if(s&&s.dtype)switch(s.dtype){case"float32":default:l=e;break;case"int32":l=Math.floor(e);break;case"bool":l=this.getBoolean(o)}else l=e}s&&s.isLabel?r[i]=l:n[i]=l}}return 0===Object.keys(r).length?n:{xs:n,ys:r}}getBoolean(e){return"1"===e||"true"===e.toLowerCase()?1:0}parseRow(e,t=!0){let n=[],r=0,a=e.length,i=aZ;for(let t=0;t<a;t++)switch(i){case aZ:switch(e.charAt(t)){case'"':r=t+1,i=a0;break;case this.delimiter:if(r=t+1," "===this.delimiter&&this.delimWhitespace)break;n.push(""),i=aZ;break;default:i=aJ,r=t}break;case aJ:e.charAt(t)===this.delimiter&&(n.push(e.substring(r,t)),i=aZ,r=t+1);break;case a0:'"'===e.charAt(t)&&(i=a1);break;case a1:switch(e.charAt(t)){case this.delimiter:n.push(e.substring(r,t-1)),i=aZ,r=t+1;break;case'"':i=a0;break;default:i=a2}break;case a2:'"'===e.charAt(t)&&(i=a0)}if(i===a1?n.push(e.substring(r,a-1)):n.push(e.substring(r)),t&&n.length!==this.fullColumnNames.length)throw Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${n}`);return n}}class a4 extends a${constructor(e){super(),this.microphoneConfig=e,this.isClosed=!1,this.fftSize=e.fftSize||1024;let t=Math.log2(this.fftSize);if(this.fftSize<0||t<4||t>14||!Number.isInteger(t))throw Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);if(this.numFrames=e.numFramesPerSpectrogram||43,this.sampleRateHz=e.sampleRateHz,this.columnTruncateLength=e.columnTruncateLength||this.fftSize,this.audioTrackConstraints=e.audioTrackConstraints,this.smoothingTimeConstant=e.smoothingTimeConstant||0,this.includeSpectrogram=!1!==e.includeSpectrogram,this.includeWaveform=!0===e.includeWaveform,!this.includeSpectrogram&&!this.includeWaveform)throw Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.")}summary(){return"microphone"}static async create(e={}){if(!(0,f.env)().get("IS_BROWSER"))throw Error("microphone API is only supported in browser environment.");let t=new a4(e);return await t.start(),t}async start(){try{this.stream=await navigator.mediaDevices.getUserMedia({audio:null==this.audioTrackConstraints||this.audioTrackConstraints,video:!1})}catch(e){throw Error(`Error thrown while initializing video stream: ${e.message}`)}if(!this.stream)throw Error("Could not obtain audio from microphone.");let e=window.AudioContext||window.webkitAudioContext;if(this.audioContext=new e,this.sampleRateHz){if(this.audioContext.sampleRate!==this.sampleRateHz)throw Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`)}else this.sampleRateHz=this.audioContext.sampleRate;let t=this.audioContext.createMediaStreamSource(this.stream);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=2*this.fftSize,this.analyser.smoothingTimeConstant=this.smoothingTimeConstant,t.connect(this.analyser),this.freqData=new Float32Array(this.fftSize),this.timeData=new Float32Array(this.fftSize)}async next(){let e,t;if(this.isClosed)return{value:null,done:!0};let n=await this.getAudioData();if(this.includeSpectrogram){let t=this.flattenQueue(n.freqDataQueue);e=this.getTensorFromAudioDataArray(t,[this.numFrames,this.columnTruncateLength,1])}if(this.includeWaveform){let e=this.flattenQueue(n.timeDataQueue);t=this.getTensorFromAudioDataArray(e,[this.numFrames*this.fftSize,1])}return{value:{spectrogram:e,waveform:t},done:!1}}async capture(){return(await this.next()).value}async getAudioData(){let e=[],t=[],n=0;return new Promise(r=>{let a=setInterval(()=>{this.includeSpectrogram&&(this.analyser.getFloatFrequencyData(this.freqData),this.freqData[0]===-1/0&&r({freqDataQueue:e,timeDataQueue:t}),e.push(this.freqData.slice(0,this.columnTruncateLength))),this.includeWaveform&&(this.analyser.getFloatTimeDomainData(this.timeData),t.push(this.timeData.slice())),++n===this.numFrames&&(clearInterval(a),r({freqDataQueue:e,timeDataQueue:t}))},this.fftSize/this.sampleRateHz*1e3)})}stop(){!this.isClosed&&(this.isClosed=!0,this.analyser.disconnect(),this.audioContext.close(),null!=this.stream&&this.stream.getTracks().length>0&&this.stream.getTracks()[0].stop())}toArray(){throw Error("Can not convert infinite audio stream to array.")}getSampleRate(){return this.sampleRateHz}flattenQueue(e){let t=e[0].length,n=new Float32Array(e.length*t);return e.forEach((e,r)=>n.set(e,r*t)),n}getTensorFromAudioDataArray(e,t){let n=new Float32Array(f.util.sizeFromShape(t));return n.set(e,n.length-e.length),(0,f.tensor)(n,t)}}class a6 extends a${constructor(e,t){if(super(),this.webcamVideoElement=e,this.webcamConfig=t,this.isClosed=!0,this.resize=!1,this.needToResize()){if(this.resize=!0,this.cropSize=[this.webcamConfig.resizeHeight,this.webcamConfig.resizeWidth],this.cropBoxInd=(0,f.tensor1d)([0],"int32"),this.webcamConfig.centerCrop){let e=1*this.webcamConfig.resizeWidth/this.webcamVideoElement.width,t=1*this.webcamConfig.resizeHeight/this.webcamVideoElement.height,n=(1-e)/2,r=(1-t)/2;this.cropBox=(0,f.tensor2d)([r,n,t+r,n+e],[1,4])}else this.cropBox=(0,f.tensor2d)([0,0,1,1],[1,4])}}summary(){return"webcam"}static async create(e,t={}){if(!(0,f.env)().get("IS_BROWSER"))throw Error("tf.data.webcam is only supported in browser environment.");if(!e){if(e=document.createElement("video"),!t.resizeWidth||!t.resizeHeight)throw Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");e.width=t.resizeWidth,e.height=t.resizeHeight}let n=new a6(e,t);return await n.start(),n}async start(){this.webcamConfig.facingMode&&f.util.assert("user"===this.webcamConfig.facingMode||"environment"===this.webcamConfig.facingMode,()=>`Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);try{this.stream=await navigator.mediaDevices.getUserMedia({video:{deviceId:this.webcamConfig.deviceId,facingMode:this.webcamConfig.facingMode?this.webcamConfig.facingMode:"user",width:this.webcamVideoElement.width,height:this.webcamVideoElement.height}})}catch(e){throw e.message=`Error thrown while initializing video stream: ${e.message}`,e}if(!this.stream)throw Error("Could not obtain video from webcam.");try{this.webcamVideoElement.srcObject=this.stream}catch(e){console.log(e),this.webcamVideoElement.src=window.URL.createObjectURL(this.stream)}return this.webcamVideoElement.play(),this.isClosed=!1,new Promise(e=>{this.webcamVideoElement.onloadedmetadata=()=>{e()}})}async next(){let e;if(this.isClosed)return{value:null,done:!0};try{e=f.browser.fromPixels(this.webcamVideoElement)}catch(e){throw Error(`Error thrown converting video to pixels: ${JSON.stringify(e)}`)}if(!this.resize)return{value:e,done:!1};try{return{value:this.cropAndResizeFrame(e),done:!1}}catch(e){throw Error(`Error thrown cropping the video: ${e.message}`)}finally{e.dispose()}}needToResize(){return!!this.webcamConfig.resizeWidth&&!!this.webcamConfig.resizeHeight&&(this.webcamVideoElement.width!==this.webcamConfig.resizeWidth||this.webcamVideoElement.height!==this.webcamConfig.resizeHeight)}cropAndResizeFrame(e){return(0,f.tidy)(()=>{let t;let n=(0,f.expandDims)((0,f.cast)(e,"float32"),0),r=(t=f.image.cropAndResize(n,this.cropBox,this.cropBoxInd,this.cropSize,"bilinear")).shape;return(0,f.reshape)(t,r.slice(1))})}async capture(){return(await this.next()).value}stop(){this.stream.getTracks().forEach(e=>e.stop());try{this.webcamVideoElement.srcObject=null}catch(e){console.log(e),this.webcamVideoElement.src=null}this.isClosed=!0}toArray(){throw Error("Can not convert infinite video stream to array.")}}class a5{}class a9 extends a${split(e){return new a8(this,e)}}class a8 extends a9{constructor(e,t){super(),this.upstream=e,this.impl=new a7(e,t)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class a7 extends aB{constructor(e,t){super(),this.upstream=e,this.separator=t,this.carryover=""}summary(){return`${this.upstream.summary()} -> Split('${this.separator}')`}async pump(){let e=await this.upstream.next();if(e.done)return""!==this.carryover&&(this.outputQueue.push(this.carryover),this.carryover="",!0);let t=e.value.split(this.separator);for(let e of(t[0]=this.carryover+t[0],t.slice(0,-1)))this.outputQueue.push(e);return this.carryover=t[t.length-1],!0}}var ie=n(96434).Buffer;class it extends a${decodeUTF8(){return new ir(this)}}class ir extends a9{constructor(e){super(),this.upstream=e,this.impl=new ia(e)}summary(){return this.impl.summary()}async next(){return this.impl.next()}}class ia extends aB{constructor(e){if(super(),this.upstream=e,(0,f.env)().get("IS_BROWSER"))this.decoder=new TextDecoder("utf-8");else{let{StringDecoder:e}=n(31601);this.decoder=new e("utf8")}}summary(){return`${this.upstream.summary()} -> Utf8`}async pump(){let e,t;let n=await this.upstream.next();return!n.done&&(e=n.value,t=(0,f.env)().get("IS_BROWSER")?this.decoder.decode(e,{stream:!0}):this.decoder.write(ie.from(e.buffer)),this.outputQueue.push(t),!0)}}class ii extends it{constructor(e,t={}){super(),this.file=e,this.options=t,f.util.assert(e instanceof Uint8Array||!!(0,f.env)().get("IS_BROWSER")&&(e instanceof File||e instanceof Blob),()=>"FileChunkIterator only supports File, Blob and Uint8Array right now."),this.offset=t.offset||0,this.chunkSize=t.chunkSize||1048576}summary(){return`FileChunks ${this.file}`}async next(){if(this.offset>=(this.file instanceof Uint8Array?this.file.byteLength:this.file.size))return{value:null,done:!0};let e=new Promise((e,t)=>{let n=this.offset+this.chunkSize;if(this.file instanceof Uint8Array)e(new Uint8Array(this.file.slice(this.offset,n)));else{let r=new FileReader;r.onload=n=>{let a=r.result;if(a instanceof ArrayBuffer&&(a=new Uint8Array(a)),!(a instanceof Uint8Array))return t(TypeError("FileReader returned unknown type."));e(a)},r.onabort=e=>t(Error("Aborted")),r.onerror=e=>t(Error(e.type));let a=this.file.slice(this.offset,n);r.readAsArrayBuffer(a)}this.offset=n});return{value:await e,done:!1}}}async function is(e,t={},n){let r,a;"string"==typeof e?r=e:(r=e.url,a=io(e));let i=await (n||f.util.fetch)(r,a);if(i.ok)return new ii(new Uint8Array(await i.arrayBuffer()),t);throw Error(i.statusText)}let io=e=>({method:e.method,headers:e.headers,body:e.body,mode:e.mode,credentials:e.credentials,cache:e.cache,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity});function il(e){return"string"==typeof e&&"file://"===e.slice(0,7)}class iu extends a5{constructor(e,t={}){super(),this.input=e,this.options=t}async iterator(){if(il(this.input)&&(0,f.env)().get("IS_NODE")){let e=n(67792);this.input=e.readFileSync(this.input.slice(7))}return new ii(this.input,this.options)}}class ic extends a5{constructor(e,t={}){super(),this.url=e,this.fileOptions=t}async iterator(){return il(this.url)?new iu(this.url,this.fileOptions).iterator():is(this.url,this.fileOptions)}}function ih(e,t={}){return new a3(new ic(e),t)}function id(e){let t=new aF(e);return aX(async()=>t)}function ip(e){return aX(async()=>{let t=await e();return new aF(()=>t.next())})}async function im(e,t){return a6.create(e,t)}async function ig(e){return a4.create(e)}let ix="4.22.0";var ib=n(43343);let iy=f.kernel_impls.whereImpl;class iv extends f.KernelBackend{nextDataId(){return iv.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new f.DataStorage(this,(0,f.engine)())}write(e,t,n){this.firstUse&&(this.firstUse=!1,(0,f.env)().get("IS_NODE")&&f.backend_util.warn("\n============================\nHi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. \n============================"));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if("string"===t&&null!=n&&n.length>0&&f.util.isString(n[0])){let a=n.map(e=>f.util.encodeString(e));r=this.write(a,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,a){this.data.set(e,{values:t,dtype:r,refCount:a})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);if("complex64"===t){let e=this.readSync(n.real.dataId),t=this.readSync(n.imag.dataId);return f.backend_util.mergeRealAndImagArrays(e,t)}return f.util.convertBackendValuesAndArrayBuffer(this.data.get(e).values,t)}bufferSync(e){let t=this.readSync(e.dataId);if("string"===e.dtype)try{let n=t.map(e=>f.util.decodeString(e));return(0,f.buffer)(e.shape,e.dtype,n)}catch(e){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,f.buffer)(e.shape,e.dtype,t)}makeOutput(e,t,n){return(0,f.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);null!=n&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=f.util.now();return e(),{kernelMs:f.util.now()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(e){(0,ib.H)([e],"where");let t=this.readSync(e.dataId);return iy(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}iv.nextDataId=0;var ik=n(11163);let iI="4.22.0";(0,f.registerBackend)("cpu",()=>new iv,1);var iC=n(18659);let iw=(0,iC.A)(f.Elu,e=>e>=0?e:Math.exp(e)-1),iS={kernelName:f.Elu,backendName:"cpu",kernelFunc:iw};var iN=n(36583);function iT(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{alpha:i}=r;(0,ib.H)([a],"leakyRelu");let s=f.util.sizeFromShape(a.shape),o=n.data.get(a.dataId).values,l=f.util.getTypedArrayFromDType("float32",s);for(let e=0;e<o.length;e++)l[e]=o[e]<0?i*o[e]:o[e];return n.makeTensorInfo(a.shape,"float32",l)}let iA={kernelName:f.LeakyRelu,backendName:"cpu",kernelFunc:iT};var i$=n(80438);let iE=(0,i$.b)((e,t)=>e<0?t*e:e);function iF(e){let{inputs:t,backend:n}=e,{x:r,alpha:a}=t;(0,ib.H)([r,a],"prelu");let i=n.data.get(r.dataId).values,s=n.data.get(a.dataId).values,[o,l]=iE(r.shape,a.shape,i,s,"float32");return n.makeTensorInfo(l,"float32",o)}let iR={kernelName:f.Prelu,backendName:"cpu",kernelFunc:iF},iD=(0,iC.A)(f.Relu,e=>Math.max(0,e)),i_={kernelName:f.Relu,backendName:"cpu",kernelFunc:iD},iO=(0,iC.A)(f.Relu6,e=>Math.min(Math.max(0,e),6)),iM={kernelName:f.Relu6,backendName:"cpu",kernelFunc:iO};var iz=n(94559);function iL(e,t,n,r,a){if("linear"===n)return(0,iN.y)({inputs:{x:t},backend:e});if("relu"===n)return iD({inputs:{x:t},backend:e});if("elu"===n)return iw({inputs:{x:t},backend:e});if("relu6"===n)return iO({inputs:{x:t},backend:e});if("prelu"===n)return iF({inputs:{x:t,alpha:r},backend:e});if("leakyrelu"===n)return iT({inputs:{x:t},backend:e,attrs:{alpha:a}});if("sigmoid"===n)return(0,iz.XD)({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}var iP=n(7152);function iB(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{shape:i}=r,s=f.util.sizeFromShape(a.shape),o=f.util.inferFromImplicitShape(i,s),l=f.util.sizeFromShape(o);f.util.assert(s===l,()=>`The new shape (${o}) has ${l} elements and the old shape (${a.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`),n.incRef(a.dataId);let u=n.data.get(a.dataId);if(null!=u.complexTensorInfos){let e=u.complexTensorInfos.real,t=u.complexTensorInfos.imag;e.shape=o,t.shape=o}return{dataId:a.dataId,shape:o,dtype:a.dtype}}let iW={kernelName:f.Reshape,backendName:"cpu",kernelFunc:iB};function iV(e){let{inputs:t,backend:n,attrs:r}=e,{a,b:i}=t,{transposeA:s,transposeB:o}=r;(0,ib.H)([a,i],"matMul");let l=a.shape.length,u=i.shape.length,c=s?a.shape[l-2]:a.shape[l-1],h=o?i.shape[u-1]:i.shape[u-2],d=s?a.shape[l-1]:a.shape[l-2],p=o?i.shape[u-2]:i.shape[u-1],m=a.shape.slice(0,-2),g=i.shape.slice(0,-2),x=f.util.sizeFromShape(m),b=f.util.sizeFromShape(g),y=f.broadcast_util.assertAndGetBroadcastShape(a.shape.slice(0,-2),i.shape.slice(0,-2)).concat([d,p]);f.util.assert(c===h,()=>`Error in matMul: inner shapes (${c}) and (${h}) of Tensors with shapes ${a.shape} and ${i.shape} and transposeA=${s} and transposeB=${o} must match.`);let v=iB({inputs:{x:a},backend:n,attrs:{shape:s?[x,c,d]:[x,d,c]}}),k=iB({inputs:{x:i},backend:n,attrs:{shape:o?[b,p,h]:[b,h,p]}}),I=s?v.shape[1]:v.shape[2],C=s?v.shape[2]:v.shape[1],w=o?k.shape[1]:k.shape[2],S=Math.max(x,b),N=n.data.get(v.dataId).values,T=n.data.get(k.dataId).values,A=f.util.computeStrides(v.shape),$=f.util.computeStrides(k.shape),[E,F,R]=s?[A[0],1,A[1]]:[A[0],A[1],1],[D,_,O]=o?[1,$[1],$[0]]:[$[1],1,$[0]],M=C*w,z=(0,f.buffer)([S,C,w],v.dtype),L=z.values,P=n.blockSize;for(let e=0;e<S;e++){let t=e%x,n=e%b;for(let r=0;r<C;r+=P){let a=Math.min(r+P,C);for(let i=0;i<w;i+=P){let s=Math.min(i+P,w);for(let o=0;o<I;o+=P){let l=Math.min(o+P,I);for(let u=r;u<a;u++)for(let r=i;r<s;r++){let a=0;for(let e=o;e<l;e++)a+=N[t*E+u*F+e*R]*T[e*D+r*_+n*O];L[e*M+(u*w+r)]+=a}}}}}return n.disposeIntermediateTensorInfo(v),n.disposeIntermediateTensorInfo(k),n.makeTensorInfo(y,z.dtype,z.values)}let iG={kernelName:f.BatchMatMul,backendName:"cpu",kernelFunc:iV},iU={kernelName:f._FusedMatMul,backendName:"cpu",kernelFunc:function(e){let t,n,r;let{inputs:a,backend:i,attrs:s}=e,{a:o,b:l,bias:u,preluActivationWeights:c}=a,{transposeA:h,transposeB:d,activation:p,leakyreluAlpha:f}=s,m=[];for(let e of(t=iV({inputs:{a:o,b:l},attrs:{transposeA:h,transposeB:d},backend:i}),u&&(n=(0,iP.IH)({inputs:{a:t,b:u},backend:i}),m.push(t),t=n),p&&(r=iL(i,t,p,c,f),m.push(t),t=r),m))i.disposeIntermediateTensorInfo(e);return t}};var iH=n(50652);let ij=(0,iC.A)(f.Acos,e=>Math.acos(e)),iX={kernelName:f.Acos,backendName:"cpu",kernelFunc:ij},iq=(0,iC.A)(f.Acosh,e=>Math.acosh(e)),iK={kernelName:f.Acosh,backendName:"cpu",kernelFunc:iq},iQ={kernelName:f.AddN,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e;(0,ib.H)(t,"addN");let r=t.map(e=>n.data.get(e.dataId).values),a=(0,f.buffer)(t[0].shape,t[0].dtype),i=a.values;for(let e=0;e<t.length;e++){let t=r[e];for(let e=0;e<i.length;e++)i[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}};var iY=n(76086);let iZ={kernelName:f.All,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,keepDims:s}=r;(0,ib.H)(a,"all");let o=f.util.parseAxisParam(i,a.shape),l=o,u=f.backend_util.getAxesPermutation(l,a.shape.length),c=a;null!=u&&(c=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:u}}),l=f.backend_util.getInnerMostAxes(l.length,a.shape.length)),f.backend_util.assertAxesAreInnerMostDims("all",l,c.shape.length);let[h,d]=f.backend_util.computeOutAndReduceShapes(c.shape,l),p=f.util.sizeFromShape(d),m=f.util.makeZerosTypedArray(f.util.sizeFromShape(h),c.dtype),g=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=g[t];for(let e=0;e<p;++e){let r=g[t+e];n=n&&r}m[e]=n}null!=u&&n.disposeIntermediateTensorInfo(c);let x=n.makeTensorInfo(h,c.dtype,m);if(s){let e=iB({inputs:{x:x},backend:n,attrs:{shape:f.backend_util.expandShapeToKeepDim(h,o)}});return n.disposeIntermediateTensorInfo(x),e}return x}},iJ={kernelName:f.Any,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,keepDims:s}=r;(0,ib.H)(a,"any");let o=f.util.parseAxisParam(i,a.shape),l=o,u=f.backend_util.getAxesPermutation(l,a.shape.length),c=a;null!=u&&(c=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:u}}),l=f.backend_util.getInnerMostAxes(l.length,a.shape.length)),f.backend_util.assertAxesAreInnerMostDims("any",l,c.shape.length);let[h,d]=f.backend_util.computeOutAndReduceShapes(c.shape,l),p=f.util.sizeFromShape(d),m=f.util.makeZerosTypedArray(f.util.sizeFromShape(h),c.dtype),g=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=g[t];for(let e=0;e<p;++e){let r=g[t+e];n=n||r}m[e]=n}null!=u&&n.disposeIntermediateTensorInfo(c);let x=n.makeTensorInfo(h,c.dtype,m);if(s){let e=iB({inputs:{x:x},backend:n,attrs:{shape:f.backend_util.expandShapeToKeepDim(h,o)}});return n.disposeIntermediateTensorInfo(x),e}return x}},i0={kernelName:f.ArgMax,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i}=r;(0,ib.H)(a,"argMax");let s=f.util.parseAxisParam(i,a.shape),o=f.backend_util.getAxesPermutation(s,a.shape.length),l=a,u=[];null!=o&&(u.push(l=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:o}})),s=f.backend_util.getInnerMostAxes(s.length,l.shape.length)),s=[s[0]],f.backend_util.assertAxesAreInnerMostDims("argMax",s,l.shape.length);let[c,h]=f.backend_util.computeOutAndReduceShapes(l.shape,s),d=f.util.sizeFromShape(c),p=f.util.makeZerosTypedArray(d,"int32"),m=f.util.sizeFromShape(h),g=n.data.get(l.dataId).values;for(let e=0;e<p.length;++e){let t=e*m,n=g[t],r=0;for(let e=0;e<m;++e){let a=g[t+e];a>n&&(n=a,r=e)}p[e]=r}return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(c,"int32",p)}},i1={kernelName:f.ArgMin,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i}=r;(0,ib.H)(a,"argMin");let s=f.util.parseAxisParam(i,a.shape),o=f.backend_util.getAxesPermutation(s,a.shape.length),l=a,u=[];null!=o&&(u.push(l=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:o}})),s=f.backend_util.getInnerMostAxes(s.length,l.shape.length)),s=[s[0]],f.backend_util.assertAxesAreInnerMostDims("argMin",s,l.shape.length);let[c,h]=f.backend_util.computeOutAndReduceShapes(l.shape,s),d=f.util.sizeFromShape(c),p=f.util.makeZerosTypedArray(d,"int32"),m=f.util.sizeFromShape(h),g=n.data.get(l.dataId).values;for(let e=0;e<p.length;++e){let t=e*m,n=g[t],r=0;for(let e=0;e<m;++e){let a=g[t+e];a<n&&(n=a,r=e)}p[e]=r}return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(c,"int32",p)}},i2=(0,iC.A)(f.Asin,e=>Math.asin(e)),i3={kernelName:f.Asin,backendName:"cpu",kernelFunc:i2},i4=(0,iC.A)(f.Asinh,e=>Math.asinh(e)),i6={kernelName:f.Asinh,backendName:"cpu",kernelFunc:i4},i5=(0,iC.A)(f.Atan,e=>Math.atan(e)),i9={kernelName:f.Atan,backendName:"cpu",kernelFunc:i5};var i8=n(98150);let i7=(0,i$.b)((e,t)=>Math.atan2(e,t)),se=(0,i8.j)(f.Atan2,i7),st={kernelName:f.Atan2,backendName:"cpu",kernelFunc:se},sn=(0,iC.A)(f.Atanh,e=>Math.atanh(e)),sr={kernelName:f.Atanh,backendName:"cpu",kernelFunc:sn};function sa(e,t,n,r,a,i){let s=a.strideHeight,o=a.strideWidth,l=a.dilationHeight,u=a.dilationWidth,c=a.effectiveFilterHeight,h=a.effectiveFilterWidth,d=a.padInfo.top,p=a.padInfo.left,m="max"===i?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=(0,f.buffer)(a.outShape,n),x=g.values,b=a.outShape[1]*a.outShape[2]*a.outShape[3],y=a.outShape[2]*a.outShape[3],v=a.outShape[3];for(let t=0;t<a.batchSize;++t){let n=t*b,f=t*r[0];for(let t=0;t<a.inChannels;++t)for(let g=0;g<a.outHeight;++g){let b=g*s-d,k=Math.max(0,b),I=Math.min(a.inHeight,c+b),C=n+g*y;for(let n=0;n<a.outWidth;++n){let s=n*o-p,c=Math.max(0,s),d=Math.min(a.inWidth,h+s),g=m,b=0,y=0;for(let n=k;n<I;n+=l){let a=f+n*r[1];for(let n=c;n<d;n+=u){let s=e[a+n*r[2]+t];"max"===i&&s>g?g=s:"avg"===i&&(b+=s,y++)}if(isNaN(g))break}x[C+n*v+t]="avg"===i?b/y:g}}}return g}function si(e,t,n,r,a=!1,i=!1){let s=(0,f.buffer)(r.outShape,"int32"),o=r.strideHeight,l=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,g=(0,f.buffer)(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let f=n*o-p,x=f;for(;x<0;)x+=u;let b=Math.min(r.inHeight,h+f);for(let o=0;o<r.outWidth;++o){let h=o*l-m,p=h;for(;p<0;)p+=c;let y=Math.min(r.inWidth,d+h),v=Number.NEGATIVE_INFINITY,k=-1;for(let n=x;n<b;n+=u){let s=n-f;for(let o=p;o<y;o+=c){let l=o-h,u=g.get(e,n,o,t);u>v&&(v=u,k=a?i?((e*r.inHeight+n)*r.inWidth+o)*r.inChannels+t:(n*r.inWidth+o)*r.inChannels+t:s*d+l)}}s.set(k,e,n,o,t)}}return s}function ss(e,t,n,r,a,i){let s=a.strideDepth,o=a.strideHeight,l=a.strideWidth,u=a.dilationDepth,c=a.dilationHeight,h=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,m=a.effectiveFilterWidth,g=a.padInfo.front,x=a.padInfo.top,b=a.padInfo.left,y="max"===i?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,v=(0,f.buffer)(a.outShape,n),k=v.values,I=a.outShape[1]*a.outShape[2]*a.outShape[3]*a.outShape[4],C=a.outShape[2]*a.outShape[3]*a.outShape[4],w=a.outShape[3]*a.outShape[4],S=a.outShape[4];for(let t=0;t<a.batchSize;++t){let n=t*I,f=t*r[0];for(let t=0;t<a.inChannels;++t)for(let v=0;v<a.outDepth;++v){let I=v*s-g,N=I;for(;N<0;)N+=u;let T=Math.min(a.inDepth,d+I),A=n+v*C;for(let n=0;n<a.outHeight;++n){let s=n*o-x,d=s;for(;d<0;)d+=c;let g=Math.min(a.inHeight,p+s),v=A+n*w;for(let n=0;n<a.outWidth;++n){let s=n*l-b,o=s;for(;o<0;)o+=h;let p=Math.min(a.inWidth,m+s),x=v+n*S,I=y,C=0,w=0;for(let n=N;n<T;n+=u){let a=f+n*r[1];for(let n=d;n<g;n+=c){let s=a+n*r[2];for(let n=o;n<p;n+=h){let a=e[s+n*r[3]+t];if("max"===i&&a>I?I=a:"avg"===i&&(C+=a,w++),isNaN(I))break}if(isNaN(I))break}if(isNaN(I))break}k[x+t]="avg"===i?C/Math.max(w,1):I}}}}return v}let so={kernelName:f.AvgPool,backendName:"cpu",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n;(0,ib.H)(i,"avgPool");let{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=a;f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let c=f.backend_util.computePool2DInfo(i.shape,s,o,1,l,u);if(1===c.filterWidth&&1===c.filterHeight&&f.util.arraysEqual(c.inShape,c.outShape))t=(0,iN.y)({inputs:{x:i},backend:r});else{let e=r.data.get(i.dataId).values,n=f.util.computeStrides(i.shape),a=sa(e,i.shape,i.dtype,n,c,"avg");t=r.makeTensorInfo(c.outShape,i.dtype,a.values)}return t}},sl={kernelName:f.AvgPool3D,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:i,strides:s,pad:o,dimRoundingMode:l,dataFormat:u}=r;(0,ib.H)(a,"avgPool3d");let c=f.backend_util.computePool3DInfo(a.shape,i,s,1,o,l,u),h=ss(n.data.get(a.dataId).values,a.shape,a.dtype,f.util.computeStrides(a.shape),c,"avg");return n.makeTensorInfo(h.shape,"float32",h.values)}},su={kernelName:f.AvgPool3DGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t,{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=r;(0,ib.H)([a,i],"avgPool3DGrad");let c=f.backend_util.computePool3DInfo(i.shape,s,o,1,l,u),h=c.strideDepth,d=c.strideHeight,p=c.strideWidth,m=c.filterDepth,g=c.filterHeight,x=c.filterWidth,b=c.dilationDepth,y=c.dilationHeight,v=c.dilationWidth,k=c.effectiveFilterDepth,I=c.effectiveFilterHeight,C=c.effectiveFilterWidth,w=k-1-c.padInfo.front,S=C-1-c.padInfo.left,N=I-1-c.padInfo.top,T=(0,f.buffer)(i.shape,"float32"),A=1/(m*g*x),$=n.bufferSync(a);for(let e=0;e<c.batchSize;++e)for(let t=0;t<c.inChannels;++t)for(let n=0;n<c.inDepth;++n)for(let r=0;r<c.inHeight;++r)for(let a=0;a<c.inWidth;++a){let i=n-w,s=r-N,o=a-S,l=0;for(let n=0;n<k;n+=b){let r=(i+n)/h;if(!(r<0)&&!(r>=c.outDepth)&&Math.floor(r)===r)for(let n=0;n<I;n+=y){let a=(s+n)/d;if(!(a<0)&&!(a>=c.outHeight)&&Math.floor(a)===a)for(let n=0;n<C;n+=v){let i=(o+n)/p;i<0||i>=c.outWidth||Math.floor(i)!==i||(l+=$.get(e,r,a,i,t))}}}T.set(l*A,e,n,r,a,t)}return n.makeTensorInfo(T.shape,T.dtype,T.values)}},sc={kernelName:f.AvgPoolGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t;(0,ib.H)([a,i],"avgPoolGrad");let{filterSize:s,strides:o,pad:l}=r,u=f.backend_util.computePool2DInfo(i.shape,s,o,1,l),c=u.strideHeight,h=u.strideWidth,d=u.filterHeight,p=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,y=b-1-u.padInfo.left,v=x-1-u.padInfo.top,k=(0,f.buffer)(i.shape,"float32"),I=1/(d*p),C=n.data.get(a.dataId).values,w=(0,f.buffer)(a.shape,"float32",C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let a=n-v,i=r-y,s=0;for(let n=0;n<x;n+=m){let r=(a+n)/c;if(!(r<0)&&!(r>=u.outHeight)&&Math.floor(r)===r)for(let n=0;n<b;n+=g){let a=(i+n)/h;a<0||a>=u.outWidth||Math.floor(a)!==a||(s+=w.get(e,r,a,t))}}k.set(s*I,e,n,r,t)}return n.makeTensorInfo(k.shape,k.dtype,k.values)}},sh={kernelName:f.FusedBatchNorm,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,scale:i,offset:s,mean:o,variance:l}=t;f.util.assert(o.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),f.util.assert(null==s||o.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),f.util.assert(null==i||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),(0,ib.H)([a,o,l,i,s],"batchNorm");let{varianceEpsilon:u}=r;null==u&&(u=.001);let c=n.data.get(a.dataId).values,h=n.data.get(o.dataId).values,d=n.data.get(l.dataId).values,p=i?n.data.get(i.dataId).values:new Float32Array([1]),m=s?n.data.get(s.dataId).values:new Float32Array([0]),g=new Float32Array(c.length),x=m.length,b=p.length,y=d.length,v=h.length,k=0,I=0,C=0,w=0;for(let e=0;e<c.length;++e)g[e]=m[k++]+(c[e]-h[I++])*p[C++]/Math.sqrt(d[w++]+u),k>=x&&(k=0),I>=v&&(I=0),C>=b&&(C=0),w>=y&&(w=0);return n.makeTensorInfo(a.shape,a.dtype,g)}};var sd=n(12092);let sp={kernelName:f.BatchToSpaceND,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:i,crops:s}=r;(0,ib.H)([a],"batchToSpaceND");let o=i.reduce((e,t)=>e*t),l=f.backend_util.getReshaped(a.shape,i,o),u=f.backend_util.getPermuted(l.length,i.length),c=f.backend_util.getReshapedPermuted(a.shape,i,o),h=f.backend_util.getSliceBeginCoords(s,i.length),d=f.backend_util.getSliceSize(c,s,i.length),p=iB({inputs:{x:a},backend:n,attrs:{shape:l}}),m=(0,iY.p)({inputs:{x:p},backend:n,attrs:{perm:u}}),g=iB({inputs:{x:m},backend:n,attrs:{shape:c}}),x=(0,sd.tP)({inputs:{x:g},backend:n,attrs:{begin:h,size:d}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),x}};var sf=n(91299);let sm={kernelName:f.Bincount,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:i}=t,{size:s}=r,o=n.data.get(a.dataId).values,l=n.data.get(i.dataId).values,u=(0,sf.W)(o,l,i.dtype,i.shape,s);return n.makeTensorInfo([s],i.dtype,u)}};var sg=n(44876);let sx={kernelName:f.BroadcastArgs,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{s0:r,s1:a}=t,i=n.data.get(r.dataId).values,s=n.data.get(a.dataId).values,o=f.backend_util.assertAndGetBroadcastShape(Array.from(i),Array.from(s));return n.makeTensorInfo([o.length],"int32",Int32Array.from(o))}};var sb=n(92432),sy=n(97369);let sv=(0,iC.A)(f.ClipByValue,(e,t)=>e>t.clipValueMax?t.clipValueMax:e<t.clipValueMin?t.clipValueMin:e),sk={kernelName:f.ClipByValue,backendName:"cpu",kernelFunc:sv};var sI=n(30926);let sC={kernelName:f.ComplexAbs,backendName:"cpu",kernelFunc:e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(f.util.sizeFromShape(t.shape)),a=n.data.get(t.dataId),i=a.complexTensorInfos.real,s=a.complexTensorInfos.imag,o=n.data.get(i.dataId).values,l=n.data.get(s.dataId).values;for(let e=0;e<o.length;e++){let t=o[e],n=l[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,"float32")}};var sw=n(7851);function sS(e){let{inputs:t,backend:n}=e,{input:r}=t,a=n.data.get(r.dataId).complexTensorInfos.imag,i=n.data.get(a.dataId).values;return n.makeTensorInfo(a.shape,a.dtype,i)}let sN={kernelName:f.Imag,backendName:"cpu",kernelFunc:sS};var sT=n(1974);function sA(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r,i=f.util.parseAxisParam(a,t[0].shape)[0],s=t.map(e=>e.shape);f.backend_util.assertParamsConsistent(s,i);let o=f.backend_util.computeOutShape(t.map(e=>e.shape),i);if(0===f.util.sizeFromShape(o))return n.makeTensorInfo(o,t[0].dtype,[]);let l=t.filter(e=>f.util.sizeFromShape(e.shape)>0);if(1===l.length)return(0,iN.y)({inputs:{x:l[0]},backend:n});if("complex64"===l[0].dtype){let e=l.map(e=>(0,sT.k)({inputs:{input:e},backend:n})),t=l.map(e=>sS({inputs:{input:e},backend:n})),r=sA({inputs:e,backend:n,attrs:{axis:i}}),a=sA({inputs:t,backend:n,attrs:{axis:i}}),s=(0,sI.P)({inputs:{real:r,imag:a},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(a),s}let u=l.map(e=>{let t=f.util.sizeFromShape(e.shape.slice(i));return iB({inputs:{x:e},backend:n,attrs:{shape:[-1,t]}})}),c=u.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=f.backend_util.computeOutShape(u.map(e=>e.shape),1);let h=1===u[0].shape[0],d=(0,sw.j)(c,o,t[0].dtype,h),p=f.backend_util.computeOutShape(l.map(e=>e.shape),i),m=n.makeTensorInfo(p,t[0].dtype,d);return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}let s$={kernelName:f.Concat,backendName:"cpu",kernelFunc:sA};function sE(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i}=t,{strides:s,pad:o,dataFormat:l,dilations:u,dimRoundingMode:c}=r;(0,ib.H)([a,i],"conv2d");let h=f.backend_util.convertConv2DDataFormat(l),d=f.backend_util.computeConv2DInfo(a.shape,i.shape,s,u,o,c,!1,h),p=d.filterHeight,m=d.filterWidth,g=d.dilationHeight,x=d.dilationWidth,b=d.padInfo.left,y=d.padInfo.top,v="channelsLast"===d.dataFormat,k=new f.TensorBuffer(d.outShape,a.dtype),I=f.util.computeStrides(a.shape),C=f.util.computeStrides(i.shape),w=I[0],S=v?I[1]:I[2],N=v?I[2]:1,T=v?1:I[1],A=k.strides[0],$=v?k.strides[1]:k.strides[2],E=v?k.strides[2]:1,F=v?1:k.strides[1],R=n.data.get(a.dataId).values,D=n.data.get(i.dataId).values,_=k.values;for(let e=0;e<d.batchSize;++e){let t=e*w,n=e*A;for(let e=0;e<d.outHeight;++e){let r=n+e*$,a=e*d.strideHeight-y;for(let e=0;e<p;++e){let n=a+e*g;if(n<0||n>=d.inHeight)continue;let i=e*C[0],s=t+n*S;for(let e=0;e<d.outWidth;++e){let t=r+e*E,n=e*d.strideWidth-b;for(let e=0;e<m;++e){let r=n+e*x;if(r<0||r>=d.inWidth)continue;let a=i+e*C[1],o=s+r*N,l=a;for(let e=0;e<d.inChannels;++e){let n=R[o+e*T];for(let e=0;e<d.outChannels;++e)_[t+e*F]+=n*D[l+e];l+=d.outChannels}}}}}}return n.makeTensorInfo(k.shape,k.dtype,_)}let sF={kernelName:f.Conv2D,backendName:"cpu",kernelFunc:sE},sR={kernelName:f.Conv2DBackpropFilter,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,pad:o,dataFormat:l,dimRoundingMode:u,filterShape:c}=r;(0,ib.H)([a,i],"conv2dBackpropFilter");let h=f.backend_util.convertConv2DDataFormat(l),d=f.backend_util.computeConv2DInfo(a.shape,c,s,1,o,u,!1,h),{strideHeight:p,strideWidth:m,filterHeight:g,filterWidth:x}=d,b="channelsLast"===d.dataFormat,y=new f.TensorBuffer(d.filterShape,"float32"),v=d.padInfo.left,k=d.padInfo.top,I=n.data.get(a.dataId).values,C=n.data.get(i.dataId).values,w=new f.TensorBuffer(a.shape,a.dtype,I),S=new f.TensorBuffer(i.shape,i.dtype,C);for(let e=0;e<g;++e){let t=Math.max(0,Math.ceil((k-e)/p)),n=Math.min(d.outHeight,(d.inHeight+k-e)/p);for(let r=0;r<x;++r){let a=Math.max(0,Math.ceil((v-r)/m)),i=Math.min(d.outWidth,(d.inWidth+v-r)/m);for(let s=0;s<d.inChannels;++s)for(let o=0;o<d.outChannels;++o){let l=0;for(let u=0;u<d.batchSize;++u)for(let c=t;c<n;++c){let t=e+c*p-k;for(let e=a;e<i;++e){let n=r+e*m-v;b?l+=w.get(u,t,n,s)*S.get(u,c,e,o):l+=w.get(u,s,t,n)*S.get(u,o,c,e)}}y.set(l,e,r,s,o)}}}return n.makeTensorInfo(y.shape,y.dtype,y.values)}},sD={kernelName:f.Conv2DBackpropInput,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{inputShape:s,strides:o,pad:l,dataFormat:u,dimRoundingMode:c}=r;(0,ib.H)([a,i],"conv2dBackpropInput");let h=f.util.computeStrides(i.shape),d=f.util.computeStrides(a.shape),p=f.backend_util.convertConv2DDataFormat(u),m=f.backend_util.computeConv2DInfo(s,i.shape,o,1,l,c,!1,p),g=new f.TensorBuffer(m.inShape,"float32"),x=g.values,b=n.data.get(a.dataId).values,y=n.data.get(i.dataId).values,[v,k,I]=h,{batchSize:C,filterHeight:w,filterWidth:S,inChannels:N,inHeight:T,inWidth:A,outChannels:$,outHeight:E,outWidth:F,strideHeight:R,strideWidth:D}=m;p=m.dataFormat;let _=w-1-m.padInfo.top,O=S-1-m.padInfo.left,M="channelsLast"===p,z=g.strides[0],L=M?g.strides[1]:g.strides[2],P=M?g.strides[2]:1,B=M?1:g.strides[1],W=d[0],V=M?d[1]:d[2],G=M?d[2]:1,U=M?1:d[1];for(let e=0;e<C;++e)for(let t=0;t<N;++t)for(let n=0;n<T;++n){let r=n-_,a=Math.max(0,Math.ceil(r/R)),i=Math.min(E,(w+r)/R);for(let s=0;s<A;++s){let o=s-O,l=Math.max(0,Math.ceil(o/D)),u=Math.min(F,(S+o)/D),c=0;for(let n=a;n<i;++n){let a=n*R-r;for(let r=l;r<u;++r){let i=r*D-o,s=W*e+V*n+G*r,l=v*(w-1-a)+k*(S-1-i)+I*t;for(let e=0;e<$;++e)c+=b[s+U*e]*y[l+e]}}x[z*e+L*n+P*s+B*t]=c}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}},s_={kernelName:f.Conv3D,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i}=t,{strides:s,pad:o,dilations:l}=r;(0,ib.H)([a,i],"conv3d");let u=f.backend_util.computeConv3DInfo(a.shape,i.shape,s,l,o),{filterDepth:c,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:m,dilationWidth:g,padInfo:x}=u,b=x.front,y=x.left,v=x.top,k=new f.TensorBuffer(u.outShape,a.dtype),I=n.data.get(a.dataId).values,C=n.data.get(i.dataId).values,w=k.values,S=f.util.computeStrides(a.shape),N=f.util.computeStrides(i.shape);for(let e=0;e<u.batchSize;++e){let t=e*S[0],n=e*k.strides[0];for(let e=0;e<u.outDepth;++e){let r=n+e*k.strides[1],a=e*u.strideDepth-b;for(let e=0;e<c;++e){let n=a+e*p;if(n<0||n>=u.inDepth)continue;let i=e*N[0],s=t+n*S[1];for(let e=0;e<u.outHeight;++e){let t=r+e*k.strides[2],n=e*u.strideHeight-v;for(let e=0;e<h;++e){let r=n+e*m;if(r<0||r>=u.inHeight)continue;let a=i+e*N[1],o=s+r*S[2];for(let e=0;e<u.outWidth;++e){let n=t+e*u.outChannels,r=e*u.strideWidth-y;for(let e=0;e<d;++e){let t=r+e*g;if(t<0||t>=u.inWidth)continue;let i=a+e*N[2],s=o+t*u.inChannels,l=i;for(let e=0;e<u.inChannels;++e){let t=I[s+e];for(let e=0;e<u.outChannels;++e)w[n+e]+=t*C[l+e];l+=u.outChannels}}}}}}}}return n.makeTensorInfo(k.shape,k.dtype,k.values)}},sO={kernelName:f.Conv3DBackpropFilterV2,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,pad:o,filterShape:l}=r;(0,ib.H)([a,i],"conv3dBackpropFilterV2");let u=f.util.computeStrides(a.shape),c=f.util.computeStrides(i.shape),h=f.backend_util.computeConv3DInfo(a.shape,l,s,1,o),d=h.strideDepth,p=h.strideHeight,m=h.strideWidth,g=h.filterDepth,x=h.filterHeight,b=h.filterWidth,y=new f.TensorBuffer(h.filterShape,"float32"),v=y.values,[k,I,C,w]=y.strides,S=n.data.get(i.dataId).values,[N,T,A,$]=c,E=n.data.get(a.dataId).values,[F,R,D,_]=u,O=h.padInfo.front,M=h.padInfo.left,z=h.padInfo.top;for(let e=0;e<g;++e){let t=Math.max(0,Math.ceil((O-e)/d)),n=Math.min(h.outDepth,(h.inDepth+O-e)/d),r=e*k;for(let a=0;a<x;++a){let i=Math.max(0,Math.ceil((z-a)/p)),s=Math.min(h.outHeight,(h.inHeight+z-a)/p),o=a*I+r;for(let r=0;r<b;++r){let l=Math.max(0,Math.ceil((M-r)/m)),u=Math.min(h.outWidth,(h.inWidth+M-r)/m),c=r*C+o;for(let o=0;o<h.inChannels;++o){let f=o*w+c;for(let c=0;c<h.outChannels;++c){let g=0;for(let f=0;f<h.batchSize;++f){let h=f*F,x=f*N;for(let f=t;f<n;++f){let t=(e+f*d-O)*R+h,n=f*T+x;for(let e=i;e<s;++e){let i=(a+e*p-z)*D+t,s=e*A+n;for(let e=l;e<u;++e){let t=(r+e*m-M)*_+i,n=e*$+s;g+=E[t+o]*S[n+c]}}}}v[f+c]=g}}}}}return n.makeTensorInfo(y.shape,y.dtype,y.values)}},sM={kernelName:f.Conv3DBackpropInputV2,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{pad:s,strides:o,inputShape:l}=r;(0,ib.H)([a],"conv3dBackpropInputV2");let u=f.util.computeStrides(a.shape),c=f.util.computeStrides(i.shape),h=f.backend_util.computeConv3DInfo(l,i.shape,o,1,s),d=new f.TensorBuffer(h.inShape,"float32"),p=d.values,[m,g,x,b]=d.strides,y=n.data.get(a.dataId).values,[v,k,I,C]=u,w=n.data.get(i.dataId).values,[S,N,T,A]=c,{batchSize:$,filterDepth:E,filterHeight:F,filterWidth:R,inChannels:D,inDepth:_,inHeight:O,inWidth:M,outChannels:z,outDepth:L,outHeight:P,outWidth:B,strideDepth:W,strideHeight:V,strideWidth:G}=h,U=E-1-h.padInfo.front,H=F-1-h.padInfo.top,j=R-1-h.padInfo.left;for(let e=0;e<$;++e)for(let t=0;t<D;++t)for(let n=0;n<_;++n){let r=n-U,a=Math.max(0,Math.ceil(r/W)),i=Math.min(L,(E+r)/W);for(let s=0;s<O;++s){let o=s-H,l=Math.max(0,Math.ceil(o/V)),u=Math.min(P,(F+o)/V);for(let c=0;c<M;++c){let h=c-j,d=Math.max(0,Math.ceil(h/G)),f=Math.min(B,(R+h)/G),$=0;for(let n=a;n<i;++n){let a=n*W-r;for(let r=l;r<u;++r){let i=r*V-o;for(let s=d;s<f;++s){let o=s*G-h,l=v*e+k*n+I*r+C*s,u=S*(E-1-a)+N*(F-1-i)+T*(R-1-o)+A*t;for(let e=0;e<z;++e)$+=y[l+e]*w[u+e]}}}p[m*e+g*n+x*s+b*c+t]=$}}}return n.makeTensorInfo(d.shape,d.dtype,d.values)}},sz=(0,iC.A)(f.Cos,e=>Math.cos(e)),sL={kernelName:f.Cos,backendName:"cpu",kernelFunc:sz},sP=(0,iC.A)(f.Cosh,e=>Math.cosh(e)),sB={kernelName:f.Cosh,backendName:"cpu",kernelFunc:sP},sW={kernelName:f.CropAndResize,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{image:a,boxes:i,boxInd:s}=t,{cropSize:o,method:l,extrapolationValue:u}=r,[c,h,d,p]=a.shape,m=i.shape[0],[g,x]=o,b=(0,f.buffer)([m,g,x,p],"float32"),y=n.data.get(i.dataId).values,v=n.data.get(s.dataId).values,k=n.data.get(a.dataId).values,I=f.util.computeStrides(a.shape),C=f.util.computeStrides(b.shape);for(let e=0;e<m;e++){let t=4*e,n=y[t],r=y[t+1],a=y[t+2],i=y[t+3],s=v[e];if(s>=c)continue;let o=g>1?(a-n)*(h-1)/(g-1):0,f=x>1?(i-r)*(d-1)/(x-1):0;for(let t=0;t<g;t++){let c=g>1?n*(h-1)+t*o:.5*(n+a)*(h-1);if(c<0||c>h-1){for(let n=0;n<x;n++)for(let r=0;r<p;r++){let a=r+n*C[2]+t*C[1]+e*C[0];b.values[a]=u}continue}if("bilinear"===l){let n=Math.floor(c),a=Math.ceil(c),o=c-n;for(let l=0;l<x;l++){let c=x>1?r*(d-1)+l*f:.5*(r+i)*(d-1);if(c<0||c>d-1){for(let n=0;n<p;n++){let r=n+l*C[2]+t*C[1]+e*C[0];b.values[r]=u}continue}let h=Math.floor(c),m=Math.ceil(c),g=c-h;for(let r=0;r<p;r++){let i=r+h*I[2]+n*I[1]+s*I[0],u=k[i],c=k[i=r+m*I[2]+n*I[1]+s*I[0]],d=k[i=r+h*I[2]+a*I[1]+s*I[0]],p=k[i=r+m*I[2]+a*I[1]+s*I[0]],f=u+(c-u)*g,x=d+(p-d)*g;i=r+l*C[2]+t*C[1]+e*C[0],b.values[i]=f+(x-f)*o}}}else for(let n=0;n<x;++n){let a=x>1?r*(d-1)+n*f:.5*(r+i)*(d-1);if(a<0||a>d-1){for(let r=0;r<p;r++){let a=r+n*C[2]+t*C[1]+e*C[0];b.values[a]=u}continue}let o=Math.round(a),l=Math.round(c);for(let r=0;r<p;r++){let a=r+o*I[2]+l*I[1]+s*I[0],i=r+n*C[2]+t*C[1]+e*C[0];b.values[i]=k[a]}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}},sV={kernelName:f.Cumprod,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,exclusive:s,reverse:o}=r;(0,ib.H)(a,"cumprod");let l=f.backend_util.getAxesPermutation([i],a.shape.length),u=a;null!=l&&(u=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:l}}));let c=f.backend_util.getInnerMostAxes(1,a.shape.length)[0];if(c!==u.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${u.shape.length-1} but got axis=${c}`);let h=(0,f.upcastType)(u.dtype,"int32"),d=f.util.makeOnesTypedArray(f.util.sizeFromShape(u.shape),h),p=n.data.get(u.dataId).values,m=u.shape[u.shape.length-1],g=o?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=g(e,t);if(0===t)d[n]=s?1:p[n];else{let r=g(e,t-1);d[n]=s?p[r]*d[r]:p[n]*d[r]}}let x=n.makeTensorInfo(u.shape,h,d);if(null!=l){let e=f.backend_util.getUndoAxesPermutation(l),t=(0,iY.p)({inputs:{x:x},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(u),t}return x}},sG={kernelName:f.Cumsum,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,exclusive:s,reverse:o}=r;(0,ib.H)(a,"cumsum");let l=f.backend_util.getAxesPermutation([i],a.shape.length),u=a;null!=l&&(u=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:l}}));let c=f.backend_util.getInnerMostAxes(1,a.shape.length)[0];if(c!==u.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${u.shape.length-1} but got axis=${c}`);let h=(0,f.upcastType)(u.dtype,"int32"),d=f.util.makeZerosTypedArray(f.util.sizeFromShape(u.shape),h),p=n.data.get(u.dataId).values,m=u.shape[u.shape.length-1],g=o?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=g(e,t);if(0===t)d[n]=s?0:p[n];else{let r=g(e,t-1);d[n]=s?p[r]+d[r]:p[n]+d[r]}}let x=n.makeTensorInfo(u.shape,h,d);if(null!=l){let e=f.backend_util.getUndoAxesPermutation(l),t=(0,iY.p)({inputs:{x:x},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(u),t}return x}},sU={kernelName:f.DenseBincount,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:i}=t,{size:s,binaryOutput:o}=r;if(1===a.shape.length){let e=n.data.get(a.dataId).values,t=n.data.get(i.dataId).values,r=(0,sf.W)(e,t,i.dtype,i.shape,s);return n.makeTensorInfo([s],i.dtype,r)}if(2===a.shape.length){let e=n.bufferSync(a),t=n.bufferSync(i),r=(0,sf.i)(e,t,s,o);return n.makeTensorInfo(r.shape,i.dtype,r.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}},sH={kernelName:f.DepthToSpace,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockSize:i,dataFormat:s}=r;f.util.assert("NHWC"===s,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${s}`);let o=a.shape[0],l=a.shape[1],u=a.shape[2],c=a.shape[3],h=l*i,d=u*i,p=c/(i*i),m=n.data.get(a.dataId).values,g=new Float32Array(o*h*d*p),x=0;for(let e=0;e<o;++e)for(let t=0;t<h;++t){let n=Math.floor(t/i),r=t%i;for(let t=0;t<d;++t){let a=Math.floor(t/i),s=t%i,o=(r*i+s)*p;for(let t=0;t<p;++t){let r=t+o+c*(a+u*(n+l*e));g[x++]=m[r]}}}return n.makeTensorInfo([o,h,d,p],a.dtype,g)}};function sj(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i}=t,{strides:s,pad:o,dilations:l,dimRoundingMode:u}=r;(0,ib.H)([a,i],"depthwiseConv2DNative");let c=f.util.computeStrides(a.shape),h=f.util.computeStrides(i.shape),d=l;null==d&&(d=[1,1]),f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(s,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${s} and dilations '${d}'`);let p=f.backend_util.computeConv2DInfo(a.shape,i.shape,s,d,o,u,!0),{filterHeight:m,filterWidth:g,dilationHeight:x,dilationWidth:b,padInfo:y}=p,v=y.left,k=y.top,I=p.outChannels/p.inChannels,C=new f.TensorBuffer(p.outShape,a.dtype),w=n.data.get(a.dataId).values,S=n.data.get(i.dataId).values,N=C.values;for(let e=0;e<p.batchSize;++e){let t=e*c[0],n=e*C.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*C.strides[1],a=e*p.strideHeight-k;for(let e=0;e<m;++e){let n=a+e*x;if(n<0||n>=p.inHeight)continue;let i=e*h[0],s=t+n*c[1];for(let e=0;e<p.outWidth;++e){let t=r+e*C.strides[2],n=e*p.strideWidth-v;for(let e=0;e<g;++e){let r=n+e*b;if(r<0||r>=p.inWidth)continue;let a=i+e*h[1],o=s+r*p.inChannels,l=t,u=a;for(let e=0;e<p.inChannels;++e){let t=w[o+e];for(let e=0;e<I;++e)N[l+e]+=t*S[u+e];l+=I,u+=I}}}}}}return n.makeTensorInfo(C.shape,C.dtype,C.values)}let sX={kernelName:f.DepthwiseConv2dNative,backendName:"cpu",kernelFunc:sj},sq={kernelName:f.DepthwiseConv2dNativeBackpropFilter,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,dilations:o,pad:l,dimRoundingMode:u,filterShape:c}=r;(0,ib.H)([a,i],"depthwiseConv2dNativeBackpropFilter");let h=f.backend_util.computeConv2DInfo(a.shape,c,s,o,l,u,!0),{strideHeight:d,strideWidth:p,filterHeight:m,filterWidth:g}=h,x=new f.TensorBuffer(h.filterShape,"float32"),b=h.padInfo.left,y=h.padInfo.top,v=h.outChannels/h.inChannels,k=n.data.get(a.dataId).values,I=new f.TensorBuffer(a.shape,a.dtype,k),C=n.data.get(i.dataId).values,w=new f.TensorBuffer(i.shape,i.dtype,C);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((y-e)/d)),n=Math.min(h.outHeight,(h.inHeight+y-e)/d);for(let r=0;r<g;++r){let a=Math.max(0,Math.ceil((b-r)/p)),i=Math.min(h.outWidth,(h.inWidth+b-r)/p);for(let s=0;s<h.outChannels;++s){let o=Math.trunc(s/v),l=s%v,u=0;for(let l=0;l<h.batchSize;++l)for(let c=t;c<n;++c){let t=e+c*d-y;for(let e=a;e<i;++e){let n=r+e*p-b;u+=I.get(l,t,n,o)*w.get(l,c,e,s)}}x.set(u,e,r,o,l)}}}return n.makeTensorInfo(x.shape,x.dtype,x.values)}},sK={kernelName:f.DepthwiseConv2dNativeBackpropInput,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{strides:s,dilations:o,pad:l,dimRoundingMode:u,inputShape:c}=r;(0,ib.H)([a,i],"depthwiseConv2DNativeBackpropInput");let h=f.util.computeStrides(a.shape),d=f.util.computeStrides(i.shape),p=f.backend_util.computeConv2DInfo(c,i.shape,s,o,l,u,!0),m=new f.TensorBuffer(p.inShape,"float32"),g=m.values,[x,b,y]=m.strides,v=n.data.get(a.dataId).values,[k,I,C]=h,w=n.data.get(i.dataId).values,[S,N,T]=d,{batchSize:A,filterHeight:$,filterWidth:E,inChannels:F,inHeight:R,inWidth:D,outChannels:_,outHeight:O,outWidth:M,strideHeight:z,strideWidth:L}=p,P=$-1-p.padInfo.top,B=E-1-p.padInfo.left,W=_/F;for(let e=0;e<A;++e)for(let t=0;t<F;++t)for(let n=0;n<R;++n){let r=n-P,a=Math.max(0,Math.ceil(r/z)),i=Math.min(O,($+r)/z);for(let s=0;s<D;++s){let o=s-B,l=Math.max(0,Math.ceil(o/L)),u=Math.min(M,(E+o)/L),c=0;for(let n=a;n<i;++n){let a=n*z-r;for(let r=l;r<u;++r){let i=r*L-o,s=k*e+I*n+C*r,l=S*($-1-a)+N*(E-1-i)+T*t;for(let e=0;e<W;++e)c+=v[s+(t*W+e)]*w[l+e]}}g[x*e+b*n+y*s+t]=c}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}},sQ={kernelName:f.Diag,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r}=t,a=f.util.sizeFromShape(r.shape),i=n.data.get(r.dataId).values,s=(0,f.buffer)([a,a],r.dtype),o=s.values;for(let e=0;e<i.length;e++)o[e*a+e]=i[e];let l=[...r.shape,...r.shape];return n.makeTensorInfo(l,s.dtype,s.values)}},sY={kernelName:f.Dilation2D,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:a}=e,{strides:i,pad:s,dilations:o}=n,l=t.data.get(r.dataId).values,u=r.shape.length,c=t.data.get(a.dataId).values,h=a.shape.length,{batchSize:d,inHeight:p,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:y,strideHeight:v,strideWidth:k,filterHeight:I,filterWidth:C,dilationHeight:w,dilationWidth:S,outShape:N}=f.backend_util.computeDilation2DInfo(r.shape,a.shape,i,s,"NHWC",o),T=f.util.sizeFromShape(N),A=N.length,$=f.util.getArrayFromDType(r.dtype,T);for(let e=0;e<d;++e)for(let t=0;t<x;++t){let n=t*v-y.top;for(let i=0;i<b;++i){let s=i*k-y.left;for(let o=0;o<g;++o){let d=Number.MIN_SAFE_INTEGER;for(let t=0;t<I;++t){let i=n+t*w;if(i>=0&&i<p)for(let n=0;n<C;++n){let p=s+n*S;if(p>=0&&p<m){let s=f.util.locToIndex([e,i,p,o],u,f.util.computeStrides(r.shape)),m=f.util.locToIndex([t,n,o],h,f.util.computeStrides(a.shape)),g=l[s]+c[m];g>d&&(d=g)}}}$[f.util.locToIndex([e,t,i,o],A,f.util.computeStrides(N))]=d}}}return{dataId:t.write(f.util.toTypedArray($,r.dtype),N,r.dtype),shape:N,dtype:r.dtype}}},sZ={kernelName:f.Dilation2DBackpropFilter,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:a,dy:i}=e,{strides:s,pad:o,dilations:l}=n,u=f.util.toNestedArray(r.shape,t.data.get(r.dataId).values),c=f.util.toNestedArray(a.shape,t.data.get(a.dataId).values),{batchSize:h,inHeight:d,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:v,filterHeight:k,filterWidth:I,dilationHeight:C,dilationWidth:w,outShape:S}=f.backend_util.computeDilation2DInfo(r.shape,a.shape,s,o,"NHWC",l);f.util.assert(i.rank===S.length,()=>`Error in ${f.Dilation2DBackpropFilter}, dy must have the same rank as output ${S.length}, but got ${i.rank}`);let N=f.util.toNestedArray(S,t.data.get(i.dataId).values),T=f.util.makeZerosNestedTypedArray(a.shape,a.dtype);for(let e=0;e<h;++e)for(let t=0;t<g;++t){let n=t*y-b.top;for(let r=0;r<x;++r){let a=r*v-b.left;for(let i=0;i<m;++i){let s=Number.MIN_SAFE_INTEGER,o=0,l=0;for(let t=0;t<k;++t){let r=n+t*C;if(r>=0&&r<d)for(let n=0;n<I;++n){let h=a+n*w;if(h>=0&&h<p){let a=u[e][r][h][i]+c[t][n][i];a>s&&(s=a,o=t,l=n)}}}T[o][l][i]+=N[e][t][r][i]}}}return{dataId:t.write(f.util.toTypedArray(T,r.dtype),a.shape,a.dtype),shape:a.shape,dtype:a.dtype}}},sJ={kernelName:f.Dilation2DBackpropInput,backendName:"cpu",kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:a,dy:i}=e,{strides:s,pad:o,dilations:l}=n,u=f.util.toNestedArray(r.shape,t.data.get(r.dataId).values),c=f.util.toNestedArray(a.shape,t.data.get(a.dataId).values),{batchSize:h,inHeight:d,inWidth:p,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:y,strideWidth:v,filterHeight:k,filterWidth:I,dilationHeight:C,dilationWidth:w,outShape:S}=f.backend_util.computeDilation2DInfo(r.shape,a.shape,s,o,"NHWC",l);f.util.assert(i.rank===S.length,()=>`Error in ${f.Dilation2DBackpropInput}, dy must have the same rank as output ${S.length}, but got ${i.rank}`);let N=f.util.toNestedArray(S,t.data.get(i.dataId).values),T=f.util.makeZerosNestedTypedArray(r.shape,r.dtype);for(let e=0;e<h;++e)for(let t=0;t<g;++t){let n=t*y-b.top;for(let r=0;r<x;++r){let a=r*v-b.left;for(let i=0;i<m;++i){let s=Number.MIN_SAFE_INTEGER,o=n<0?0:n,l=a<0?0:a;for(let t=0;t<k;++t){let r=n+t*C;if(r>=0&&r<d)for(let n=0;n<I;++n){let h=a+n*w;if(h>=0&&h<p){let a=u[e][r][h][i]+c[t][n][i];a>s&&(s=a,o=r,l=h)}}}T[e][o][l][i]+=N[e][t][r][i]}}}return{dataId:t.write(f.util.toTypedArray(T,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},s0={kernelName:f.Draw,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{image:a}=t,{canvas:i,options:s}=r,{contextOptions:o,imageOptions:l}=s||{},u=(null==l?void 0:l.alpha)||1,c=(null==o?void 0:o.contextType)||"2d";if("2d"!==c)throw Error(`Context type ${o.contextType} is not supported by the CPU backend.`);let h=i.getContext(c,(null==o?void 0:o.contextAttributes)||{});if(null==h)throw Error(`Could not get the context with ${c} type.`);let[d,p]=a.shape.slice(0,2),f=2===a.shape.length?1:a.shape[2],m=n.data.get(a.dataId).values,g="float32"===a.dtype?255:1,x=new Uint8ClampedArray(p*d*4);for(let e=0;e<d*p;++e){let t=[0,0,0,255*u];for(let n=0;n<f;n++){let r=m[e*f+n];if("float32"===a.dtype){if(r<0||r>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if("int32"===a.dtype&&(r<0||r>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);1===f?(t[0]=r*g,t[1]=r*g,t[2]=r*g):t[n]=r*g}let n=4*e;x[n+0]=Math.round(t[0]),x[n+1]=Math.round(t[1]),x[n+2]=Math.round(t[2]),x[n+3]=Math.round(t[3])}i.width=p,i.height=d;let b=new ImageData(x,p,d);return h.putImageData(b,0,0),a}};var s1=n(11247),s2=n(82571);function s3(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{axis:s,keepDims:o}=a;(0,ib.H)(i,"sum");let l=(t="bool"===i.dtype?(0,sb.pj)({inputs:{x:i},backend:r,attrs:{dtype:"int32"}}):(0,iN.y)({inputs:{x:i},backend:r})).shape.length,u=f.util.parseAxisParam(s,t.shape),c=f.backend_util.getAxesPermutation(u,l),h=u,d=t;null!=c&&(d=(0,iY.p)({inputs:{x:t},backend:r,attrs:{perm:c}}),h=f.backend_util.getInnerMostAxes(h.length,l)),f.backend_util.assertAxesAreInnerMostDims("sum",h,d.shape.length);let[p,m]=f.backend_util.computeOutAndReduceShapes(d.shape,h),g=f.backend_util.upcastType(d.dtype,"int32"),x=(0,s2.l)(r,p,g),b=f.util.sizeFromShape(m),y=r.data.get(x.dataId).values,v=r.data.get(d.dataId).values;for(let e=0;e<y.length;++e){let t=e*b,n=0;for(let e=0;e<b;++e)n+=v[t+e];y[e]=n}if(o){let e=f.backend_util.expandShapeToKeepDim(x.shape,u),t=x;x=iB({inputs:{x:x},backend:r,attrs:{shape:e}}),r.disposeIntermediateTensorInfo(t)}return r.disposeIntermediateTensorInfo(t),null!=c&&r.disposeIntermediateTensorInfo(d),x}let s4={kernelName:f.Sum,backendName:"cpu",kernelFunc:s3},s6={kernelName:f.Einsum,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{equation:a}=r,{allDims:i,summedDims:s,idDims:o}=f.backend_util.decodeEinsumEquation(a,t.length);f.backend_util.checkEinsumDimSizes(i.length,o,t);let{path:l,steps:u}=f.backend_util.getEinsumComputePath(s,o),c=u.length,h=null,d=i.length,p=[];for(let e=0;e<c;++e){for(let r of u[e]){let e;let{permutationIndices:a,expandDims:i}=f.backend_util.getEinsumPermutation(d,o[r]);f.backend_util.isIdentityPermutation(a)?e=t[r]:(e=(0,iY.p)({inputs:{x:t[r]},backend:n,attrs:{perm:a}}),p.push(e));let s=e.shape.slice();for(let e=0;e<i.length;++e)s.splice(i[e],0,1);f.util.arraysEqual(e.shape,s)||(e=iB({inputs:{x:e},backend:n,attrs:{shape:s}}),p.push(e)),null===h?h=e:(h=(0,s1.Jp)({inputs:{a:e,b:h},backend:n}),p.push(h))}e<c-1&&(l[e]>=0&&(h=s3({inputs:{x:h},backend:n,attrs:{axis:l[e]-(i.length-d),keepDims:!1}}),p.push(h)),d--)}for(let e of p)e!==h&&n.disposeIntermediateTensorInfo(e);return h}},s5={kernelName:f.EluGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{dy:r,y:a}=t;(0,ib.H)([r,a],"eluGrad");let i=new Float32Array(f.util.sizeFromShape(a.shape)),s=n.data.get(a.dataId).values,o=n.data.get(r.dataId).values;for(let e=0;e<s.length;++e){let t=s[e];t>=0?i[e]=o[e]:i[e]=o[e]*(t+1)}return n.makeTensorInfo(a.shape,"float32",i)}};var s9=n(10545);let s8=f.backend_util.ERF_P,s7=f.backend_util.ERF_A1,oe=f.backend_util.ERF_A2,ot=f.backend_util.ERF_A3,on=f.backend_util.ERF_A4,or=f.backend_util.ERF_A5,oa=(0,iC.A)(f.Erf,e=>{let t=Math.abs(e),n=1/(1+s8*t);return Math.sign(e)*(1-((((or*n+on)*n+ot)*n+oe)*n+s7)*n*Math.exp(-t*t))}),oi={kernelName:f.Erf,backendName:"cpu",kernelFunc:oa};var os=n(58275);function oo(e){let{inputs:t,backend:n,attrs:r}=e,{input:a}=t,{dim:i}=r,s=a.shape.length,o=a.shape.slice(),l=i;return i<0&&(f.util.assert(-(s+1)<=i,()=>`Axis must be in the interval [${-(s+1)}, ${s}]`),l=s+i+1),o.splice(l,0,1),iB({inputs:{x:a},backend:n,attrs:{shape:o}})}let ol={kernelName:f.ExpandDims,backendName:"cpu",kernelFunc:oo};var ou=n(85591);let oc=(0,i$.b)((e,t)=>e/t),oh=(0,i8.j)(f.RealDiv,oc),od={kernelName:f.RealDiv,backendName:"cpu",kernelFunc:oh};var op=n(52199);function of(e,t,n){let r=e.shape,a=r[0],i=r[1],s=n.data.get(e.dataId),o=s.complexTensorInfos.real,l=s.complexTensorInfos.imag,u=[a,i],c=f.util.sizeFromShape(u),h=f.util.getTypedArrayFromDType("float32",c),d=f.util.getTypedArrayFromDType("float32",c);for(let e=0;e<a;e++){let r=(0,sd.tP)({inputs:{x:o},backend:n,attrs:{begin:[e,0],size:[1,i]}}),a=(0,sd.tP)({inputs:{x:l},backend:n,attrs:{begin:[e,0],size:[1,i]}}),s=(0,sI.P)({inputs:{real:r,imag:a},backend:n}),{real:u,imag:c}=function(e,t,n){let r=f.util.sizeFromShape(e.shape),a=n.data.get(e.dataId),i=n.data.get(a.complexTensorInfos.real.dataId).values,s=n.data.get(a.complexTensorInfos.imag.dataId).values;if((r&r-1)==0){let a=function e(t,n,r,a,i){if(1===r)return{real:t,imag:n};let s=f.backend_util.mergeRealAndImagArrays(t,n),o=r/2,l=f.backend_util.complexWithEvenIndex(s),u=l.real,c=l.imag,h=[u.length],d=i.makeTensorInfo(h,"float32",u),p=i.makeTensorInfo(h,"float32",c),m=(0,sI.P)({inputs:{real:d,imag:p},backend:i}),g=f.backend_util.complexWithOddIndex(s),x=g.real,b=g.imag,y=[x.length],v=i.makeTensorInfo(y,"float32",x),k=i.makeTensorInfo(y,"float32",b),I=(0,sI.P)({inputs:{real:v,imag:k},backend:i}),C=e(u,c,o,a,i),w=C.real,S=C.imag,N=[w.length],T=i.makeTensorInfo(N,"float32",w),A=i.makeTensorInfo(N,"float32",S),$=(0,sI.P)({inputs:{real:T,imag:A},backend:i}),E=e(x,b,o,a,i),F=E.real,R=E.imag,D=[F.length],_=i.makeTensorInfo(D,"float32",F),O=i.makeTensorInfo(D,"float32",R),M=(0,sI.P)({inputs:{real:_,imag:O},backend:i}),z=f.backend_util.exponents(r,a),L=[z.real.length],P=i.makeTensorInfo(L,"float32",z.real),B=i.makeTensorInfo(L,"float32",z.imag),W=(0,sI.P)({inputs:{real:P,imag:B},backend:i}),V=(0,s1.Jp)({inputs:{a:W,b:M},backend:i}),G=(0,iP.IH)({inputs:{a:$,b:V},backend:i}),U=(0,op.lu)({inputs:{a:$,b:V},backend:i}),H=(0,sT.k)({inputs:{input:G},backend:i}),j=(0,sT.k)({inputs:{input:U},backend:i}),X=sS({inputs:{input:G},backend:i}),q=sS({inputs:{input:U},backend:i}),K=sA({inputs:[H,j],backend:i,attrs:{axis:0}}),Q=sA({inputs:[X,q],backend:i,attrs:{axis:0}}),Y=i.data.get(K.dataId).values,Z=i.data.get(Q.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(m),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(k),i.disposeIntermediateTensorInfo(I),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(A),i.disposeIntermediateTensorInfo($),i.disposeIntermediateTensorInfo(_),i.disposeIntermediateTensorInfo(O),i.disposeIntermediateTensorInfo(M),i.disposeIntermediateTensorInfo(P),i.disposeIntermediateTensorInfo(B),i.disposeIntermediateTensorInfo(W),i.disposeIntermediateTensorInfo(V),i.disposeIntermediateTensorInfo(G),i.disposeIntermediateTensorInfo(U),i.disposeIntermediateTensorInfo(H),i.disposeIntermediateTensorInfo(X),i.disposeIntermediateTensorInfo(j),i.disposeIntermediateTensorInfo(q),i.disposeIntermediateTensorInfo(K),i.disposeIntermediateTensorInfo(Q),{real:Y,imag:Z}}(i,s,r,t,n),o=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(o,"float32",a.real),t=n.makeTensorInfo(o,"float32",a.imag),i=n.makeTensorInfo([],"float32",f.util.createScalarValue(r,"float32")),s=(0,iN.y)({inputs:{x:i},backend:n}),l=od.kernelFunc({inputs:{a:e,b:i},backend:n}),u=od.kernelFunc({inputs:{a:t,b:s},backend:n}),c=n.data.get(l.dataId).values,h=n.data.get(u.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),{real:c,imag:h}}return a}{let e=function(e,t,n){let r=new Float32Array(2*t);for(let a=0;a<t;a++){let i=0,s=0;for(let r=0;r<t;r++){let o=f.backend_util.exponent(a*r,t,n),l=f.backend_util.getComplexWithIndex(e,r);i+=l.real*o.real-l.imag*o.imag,s+=l.real*o.imag+l.imag*o.real}n&&(i/=t,s/=t),f.backend_util.assignToTypedArray(r,i,s,a)}return r}(f.backend_util.mergeRealAndImagArrays(i,s),r,t);return f.backend_util.splitRealAndImagArrays(e)}}(s,t,n),p=f.backend_util.mergeRealAndImagArrays(u,c);for(let t=0;t<i;t++){let n=f.backend_util.getComplexWithIndex(p,t);h[e*i+t]=n.real,d[e*i+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(s)}let p=n.makeTensorInfo(u,"float32",h),m=n.makeTensorInfo(u,"float32",d),g=(0,sI.P)({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),g}let om={kernelName:f.FFT,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{input:r}=t,a=f.util.sizeFromShape(r.shape),i=r.shape[r.shape.length-1],s=iB({inputs:{x:r},backend:n,attrs:{shape:[a/i,i]}}),o=of(s,!1,n),l=iB({inputs:{x:o},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),l}};function og(e){let{backend:t,attrs:n}=e,{shape:r,value:a,dtype:i}=n,s=i||f.util.inferDtype(a),o=f.util.getArrayFromDType(s,f.util.sizeFromShape(r));return function(e,t,n){e.fill(t)}(o,a,0),t.makeTensorInfo(r,s,o)}let ox={kernelName:f.Fill,backendName:"cpu",kernelFunc:og},ob={kernelName:f.FlipLeftRight,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,a=f.util.getTypedArrayFromDType(r.dtype,f.util.sizeFromShape(r.shape)),[i,s,o,l]=r.shape,u=n.data.get(r.dataId).values;for(let e=0;e<i;e++){let t=e*o*s*l;for(let e=0;e<s;e++){let n=o*l*e;for(let e=0;e<o;e++){let r=e*l;for(let i=0;i<l;i++){let s=Math.round(o-e-1),c=t+n+r+i,h=u[c];s>=0&&s<o&&(h=u[t+n+s*l+i]),a[c]=h}}}}return{dataId:n.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}};var oy=n(23813),ov=n(98951);let ok={kernelName:f.FusedConv2D,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i,bias:s,preluActivationWeights:o}=t,{strides:l,pad:u,dataFormat:c,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=r,m=sE({inputs:{x:a,filter:i},backend:n,attrs:{strides:l,pad:u,dataFormat:c,dilations:h,dimRoundingMode:d}});if(s){let e=m;if("NCHW"===c&&1===s.shape.length&&1!==s.shape[0]){let e=iB({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});m=(0,iP.IH)({inputs:{a:m,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else m=(0,iP.IH)({inputs:{a:m,b:s},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=m;if("NCHW"===c&&"prelu"===p&&1===o.shape.length&&1!==o.shape[0]){let e=iB({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});m=iL(n,m,p,e,f),n.disposeIntermediateTensorInfo(e)}else m=iL(n,m,p,o,f);n.disposeIntermediateTensorInfo(e)}return m}},oI={kernelName:f.FusedDepthwiseConv2D,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i,bias:s,preluActivationWeights:o}=t,{strides:l,pad:u,dataFormat:c,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=r,m=sj({inputs:{x:a,filter:i},backend:n,attrs:{strides:l,pad:u,dataFormat:c,dilations:h,dimRoundingMode:d}});if(s){let e=m;m=(0,iP.IH)({inputs:{a:m,b:s},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=m;m=iL(n,m,p,o,f),n.disposeIntermediateTensorInfo(e)}return m}};var oC=n(69169);let ow={kernelName:f.GatherNd,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{params:r,indices:a}=t,i=f.util.sizeFromShape(r.shape),s=a.shape,o=s[s.length-1],[l,u,c,h]=f.backend_util.prepareAndValidate(r,a);if(0===u)return n.makeTensorInfo(l,r.dtype,[]);let d=n.data.get(a.dataId).values,p=n.bufferSync(r),m=(0,oC.m)(d,p,r.dtype,u,o,c,h,r.shape,i);return n.makeTensorInfo(l,r.dtype,m.values)}};var oS=n(53964);let oN={kernelName:f.GatherV2,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,indices:i}=t,{axis:s,batchDims:o}=r;(0,ib.H)([a,i],"gatherV2");let l=f.util.parseAxisParam(s,a.shape)[0],u=n.data.get(i.dataId).values,c=a.shape[l];for(let e=0;e<u.length;++e){let t=u[e];f.util.assert(t<=c-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${c-1}]`)}let h=o;null==o&&(h=0);let d=f.util.sizeFromShape(i.shape),p=f.backend_util.segment_util.collectGatherOpShapeInfo(a,i,l,h),m=iB({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),g=iB({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,d/p.batchSize]}}),x=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],b=n.bufferSync(g),y=n.bufferSync(m),v=(0,oS.i)(y,b,x);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}};var oT=n(90054),oA=n(66450);let o$={kernelName:f.IFFT,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{input:r}=t,a=f.util.sizeFromShape(r.shape),i=r.shape[r.shape.length-1],s=iB({inputs:{x:r},backend:n,attrs:{shape:[a/i,i]}}),o=of(s,!0,n),l=iB({inputs:{x:o},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(o),l}},oE=(0,iC.A)(f.IsFinite,e=>Number.isFinite(e)?1:0,"bool"),oF={kernelName:f.IsFinite,backendName:"cpu",kernelFunc:oE},oR=(0,iC.A)(f.IsInf,e=>Math.abs(e)===1/0?1:0,"bool"),oD={kernelName:f.IsInf,backendName:"cpu",kernelFunc:oR},o_=(0,iC.A)(f.IsNan,e=>Number.isNaN(e)?1:0,"bool"),oO={kernelName:f.IsNan,backendName:"cpu",kernelFunc:o_};var oM=n(94626),oz=n(79776),oL=n(12950);let oP={kernelName:f.LinSpace,backendName:"cpu",kernelFunc:function(e){let{backend:t,attrs:n}=e,{start:r,stop:a,num:i}=n,s=(0,oL.b)(r,a,i);return t.makeTensorInfo([s.length],"float32",s)}};var oB=n(90290);let oW=(0,iC.A)(f.Log1p,e=>Math.log1p(e)),oV={kernelName:f.Log1p,backendName:"cpu",kernelFunc:oW},oG=(0,i$.b)((e,t)=>e&&t),oU=(0,i8.j)(f.LogicalAnd,oG,null,"bool"),oH={kernelName:f.LogicalAnd,backendName:"cpu",kernelFunc:oU},oj=(0,iC.A)(f.LogicalNot,e=>e?0:1,"bool"),oX={kernelName:f.LogicalNot,backendName:"cpu",kernelFunc:oj},oq=(0,i$.b)((e,t)=>e||t),oK=(0,i8.j)(f.LogicalOr,oq,null,"bool"),oQ={kernelName:f.LogicalOr,backendName:"cpu",kernelFunc:oK},oY={kernelName:f.LRN,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{depthRadius:i,bias:s,alpha:o,beta:l}=r;(0,ib.H)(a,"LRN");let u=a.shape[3],c=u-1,h=n.data.get(a.dataId).values,d=f.util.sizeFromShape(a.shape),p=new Float32Array(d);for(let e=0;e<d;e++){let t=function(e){let t=e%u,n=e-t+Math.max(0,t-i),r=e-t+Math.min(t+i,c),a=0;for(;n<=r;n++){let e=h[n];a+=e*e}return a}(e),n=h[e]*Math.pow(s+o*t,-l);p[e]=n}return n.makeTensorInfo(a.shape,a.dtype,p)}},oZ={kernelName:f.LRNGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,y:i,dy:s}=t,{depthRadius:o,bias:l,alpha:u,beta:c}=r;(0,ib.H)(s,"LRNGrad");let h=f.util.sizeFromShape(s.shape),d=s.shape[3],p=n.data.get(s.dataId).values,m=n.data.get(a.dataId).values,g=n.data.get(i.dataId).values,x=new Float32Array(h);for(let e=0;e<h;e++){let t=e%d,n=e-t+Math.max(0,t-o),r=e-t+Math.min(d,t+o+1),a=0;for(let e=n;e<r;e++)a+=Math.pow(m[e],2);a=u*a+l;for(let t=n;t<r;t++){let n=-2*u*c*m[t]*g[e]/a;e===t&&(n+=Math.pow(a,-c)),n*=p[e],x[t]+=n}}return n.makeTensorInfo(s.shape,a.dtype,x)}};var oJ=n(42529),o0=n(26339);function o1(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reductionIndices:i,keepDims:s}=r,o=a.shape,l=o.length,u=f.util.parseAxisParam(i,o),c=u,h=f.backend_util.getAxesPermutation(c,l),d=n.data.get(a.dataId).values;if(null!=h){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=o[h[t]];d=(0,o0.H)(d,o,a.dtype,h,e),c=f.backend_util.getInnerMostAxes(c.length,l),o=e}(0,ib.H)(a,"max"),f.backend_util.assertAxesAreInnerMostDims("max",c,l);let[p,m]=f.backend_util.computeOutAndReduceShapes(o,c),g=f.util.sizeFromShape(m),x=(0,oJ.B)(d,g,p,a.dtype),b=n.write(x,p,a.dtype),y=p;return s&&(y=f.backend_util.expandShapeToKeepDim(p,u)),{dataId:b,shape:y,dtype:a.dtype}}let o2={kernelName:f.Max,backendName:"cpu",kernelFunc:o1};var o3=n(34536);let o4={kernelName:f.MaxPool,backendName:"cpu",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n;(0,ib.H)(i,"maxPool");let{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=a;f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let c=f.backend_util.computePool2DInfo(i.shape,s,o,1,l,u);if(1===c.filterWidth&&1===c.filterHeight&&f.util.arraysEqual(c.inShape,c.outShape))t=(0,iN.y)({inputs:{x:i},backend:r});else{let e=r.data.get(i.dataId).values,n=f.util.computeStrides(i.shape),a=sa(e,i.shape,i.dtype,n,c,"max");t=r.makeTensorInfo(c.outShape,i.dtype,a.values)}return t}},o6={kernelName:f.MaxPool3D,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:i,strides:s,pad:o,dimRoundingMode:l,dataFormat:u}=r;(0,ib.H)(a,"maxPool3d");let c=f.backend_util.computePool3DInfo(a.shape,i,s,1,o,l,u),h=ss(n.data.get(a.dataId).values,a.shape,a.dtype,f.util.computeStrides(a.shape),c,"max");return n.makeTensorInfo(h.shape,"float32",h.values)}},o5={kernelName:f.MaxPool3DGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t,{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=r;(0,ib.H)([a,i],"maxPool3DGrad");let c=f.backend_util.computePool3DInfo(i.shape,s,o,1,l,u),h=function(e,t){let n=(0,f.buffer)(t.outShape,"int32"),r=t.strideDepth,a=t.strideHeight,i=t.strideWidth,s=t.dilationDepth,o=t.dilationHeight,l=t.dilationWidth,u=t.effectiveFilterDepth,c=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let f=0;f<t.batchSize;++f)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){let b=x*r-d,y=b;for(;y<0;)y+=s;let v=Math.min(t.inDepth,u+b);for(let r=0;r<t.outHeight;++r){let u=r*a-p,d=u;for(;d<0;)d+=o;let k=Math.min(t.inHeight,c+u);for(let a=0;a<t.outWidth;++a){let p=a*i-m,I=p;for(;I<0;)I+=l;let C=Math.min(t.inWidth,h+p),w=Number.NEGATIVE_INFINITY,S=-1;for(let t=y;t<v;t+=s){let n=t-b;for(let r=d;r<k;r+=o){let a=r-u;for(let i=I;i<C;i+=l){let s=i-p,o=e.get(f,t,r,i,g);o>=w&&(w=o,S=n*c*h+a*c+s)}}}n.set(S,f,x,r,a,g)}}}return n}(n.bufferSync(i),c),d=c.strideDepth,p=c.strideHeight,m=c.strideWidth,g=c.dilationDepth,x=c.dilationHeight,b=c.dilationWidth,y=c.effectiveFilterDepth,v=c.effectiveFilterHeight,k=c.effectiveFilterWidth,I=y-1-c.padInfo.front,C=k-1-c.padInfo.left,w=v-1-c.padInfo.top,S=(0,f.buffer)(i.shape,"float32"),N=n.bufferSync(a);for(let e=0;e<c.batchSize;++e)for(let t=0;t<c.inChannels;++t)for(let n=0;n<c.inDepth;++n)for(let r=0;r<c.inHeight;++r)for(let a=0;a<c.inWidth;++a){let i=n-I,s=r-w,o=a-C,l=0;for(let n=0;n<y;n+=g){let r=(i+n)/d;if(!(r<0)&&!(r>=c.outDepth)&&Math.floor(r)===r)for(let a=0;a<v;a+=x){let i=(s+a)/p;if(!(i<0)&&!(i>=c.outHeight)&&Math.floor(i)===i)for(let s=0;s<k;s+=b){let u=(o+s)/m;if(u<0||u>=c.outWidth||Math.floor(u)!==u)continue;let d=y*v*k-1-h.get(e,r,i,u,t)===n*v*k+a*k+s?1:0;0!==d&&(l+=N.get(e,r,i,u,t)*d)}}}S.set(l,e,n,r,a,t)}return n.makeTensorInfo(S.shape,S.dtype,S.values)}},o9={kernelName:f.MaxPoolGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i,output:s}=t;(0,ib.H)([i,s],"maxPoolGrad");let{filterSize:o,strides:l,pad:u,dimRoundingMode:c}=r,h=f.backend_util.computePool2DInfo(i.shape,o,l,1,u,c),d=n.data.get(i.dataId).values,p=(0,f.buffer)(h.outShape,i.dtype,si(d,i.shape,i.dtype,h).values),m=h.strideHeight,g=h.strideWidth,x=h.dilationHeight,b=h.dilationWidth,y=h.effectiveFilterHeight,v=h.effectiveFilterWidth,k=v-1-h.padInfo.left,I=y-1-h.padInfo.top,C=(0,f.buffer)(i.shape,"float32"),w=n.data.get(a.dataId).values,S=(0,f.buffer)(a.shape,"float32",w);for(let e=0;e<h.batchSize;++e)for(let t=0;t<h.inChannels;++t)for(let n=0;n<h.inHeight;++n)for(let r=0;r<h.inWidth;++r){let a=n-I,i=r-k,s=0;for(let n=0;n<y;n+=x){let r=(a+n)/m;if(!(r<0)&&!(r>=h.outHeight)&&Math.floor(r)===r)for(let a=0;a<v;a+=b){let o=(i+a)/g;if(o<0||o>=h.outWidth||Math.floor(o)!==o)continue;let l=y*v-1-p.get(e,r,o,t)===n*v+a?1:0;0!==l&&(s+=S.get(e,r,o,t)*l)}}C.set(s,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}},o8={kernelName:f.MaxPoolWithArgmax,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:a,strides:i,pad:s,includeBatchInIndex:o}=t;(0,ib.H)(r,"MaxPoolWithArgmax");let l=n.data.get(r.dataId).values,u=f.backend_util.computePool2DInfo(r.shape,a,i,[1,1],s),[c,h]=function(e,t,n,r,a){let i=f.util.computeStrides(t),s=sa(e,t,n,i,a,"max"),o=si(e,t,n,a,!0,r);return[s.values,o.values]}(l,r.shape,r.dtype,o,u),d=n.write(c,u.outShape,r.dtype),p=n.write(h,u.outShape,r.dtype);return[{dataId:d,shape:u.outShape,dtype:r.dtype},{dataId:p,shape:u.outShape,dtype:"int32"}]}},o7={kernelName:f.Mean,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,keepDims:s}=r,o=f.util.parseAxisParam(i,a.shape),l=f.backend_util.computeOutAndReduceShapes(a.shape,o)[1],u=f.util.sizeFromShape(l),c=[],h=n.makeTensorInfo([],"float32",new Float32Array([u]));c.push(h);let d=(0,sb.pj)({inputs:{x:a},backend:n,attrs:{dtype:"float32"}});c.push(d);let p=oh({inputs:{a:d,b:h},backend:n});c.push(p);let m=s3({inputs:{x:p},backend:n,attrs:{axis:i,keepDims:s}});return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}},le={kernelName:f.Min,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,keepDims:s}=r;(0,ib.H)(a,"min");let o=f.util.parseAxisParam(i,a.shape),l=o,u=f.backend_util.getAxesPermutation(l,a.shape.length),c=a;null!=u&&(c=(0,iY.p)({inputs:{x:a},backend:n,attrs:{perm:u}}),l=f.backend_util.getInnerMostAxes(l.length,a.shape.length)),f.backend_util.assertAxesAreInnerMostDims("min",l,c.shape.length);let[h,d]=f.backend_util.computeOutAndReduceShapes(c.shape,l),p=f.util.sizeFromShape(d),m=f.util.makeZerosTypedArray(f.util.sizeFromShape(h),c.dtype),g=n.data.get(c.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=g[t];for(let e=0;e<p;++e){let r=g[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}null!=u&&n.disposeIntermediateTensorInfo(c);let x=n.makeTensorInfo(h,c.dtype,m);if(s){let e=iB({inputs:{x:x},backend:n,attrs:{shape:f.backend_util.expandShapeToKeepDim(h,o)}});return n.disposeIntermediateTensorInfo(x),e}return x}};var lt=n(60168);let ln={kernelName:f.MirrorPad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:i,mode:s}=r;(0,ib.H)(a,"mirrorPad");let o=i.map((e,t)=>e[0]+a.shape[t]+e[1]),l=i.map(e=>e[0]),u=i.map((e,t)=>e[0]+a.shape[t]),c="reflect"===s?0:1,h=n.data.get(a.dataId).values,d=a.shape.length,p=f.util.computeStrides(a.shape),m=f.util.sizeFromShape(o),g=o.length,x=f.util.computeStrides(o),b=f.util.getTypedArrayFromDType(a.dtype,m);for(let e=0;e<m;e++){let t=f.util.indexToLoc(e,g,x);for(let e=0;e<g;e++)t[e]<l[e]?t[e]=2*l[e]-t[e]-c:t[e]>=u[e]&&(t[e]=(u[e]-1)*2-t[e]+c);t=t.map((e,t)=>e-l[t]);let n=f.util.locToIndex(t,d,p);b[e]=h[n]}return{dataId:n.write(b,o,a.dtype),shape:o,dtype:a.dtype}}},lr=(0,i$.b)((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t}),la=(0,i8.j)(f.Mod,lr),li={kernelName:f.Mod,backendName:"cpu",kernelFunc:la};function ls(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{dim:i}=r,s=a.shape.length,o=i;if(-1===o&&(o=s-1),o!==s-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${s} and dim was ${o}`);let l=f.util.parseAxisParam([o],a.shape),u=o1({inputs:{x:a},backend:n,attrs:{reductionIndices:l,keepDims:!1}}),c=f.backend_util.expandShapeToKeepDim(u.shape,l),h=iB({inputs:{x:u},backend:n,attrs:{shape:c}}),d=(0,op.lu)({inputs:{a:a,b:h},backend:n}),p=(0,os.Qq)({inputs:{x:d},backend:n}),m=s3({inputs:{x:p},backend:n,attrs:{axis:l,keepDims:!1}}),g=iB({inputs:{x:m},backend:n,attrs:{shape:c}}),x=oh({inputs:{a:p,b:g},backend:n});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),x}let lo={kernelName:f.Softmax,backendName:"cpu",kernelFunc:ls},ll={kernelName:f.Multinomial,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{numSamples:i,seed:s,normalized:o}=r;(0,ib.H)(a,"multinomial");let l=o?a:ls({inputs:{logits:a},backend:n,attrs:{dim:-1}}),u=l.shape[0],c=l.shape[1],h=n.data.get(l.dataId).values,d=[u,i],p=f.util.makeZerosTypedArray(f.util.sizeFromShape(d),"int32");for(let e=0;e<u;++e){let t=e*c,n=new Float32Array(c-1);n[0]=h[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+h[t+e];let r=ak.alea(s.toString()),a=e*i;for(let e=0;e<i;++e){let t=r();p[a+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[a+e]=r;break}}}return o||n.disposeIntermediateTensorInfo(l),n.makeTensorInfo(d,"int32",p)}};var lu=n(40358);let lc=f.kernel_impls.nonMaxSuppressionV3Impl,lh={kernelName:f.NonMaxSuppressionV3,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l}=r;(0,ib.H)(a,"NonMaxSuppression");let{selectedIndices:u}=lc(n.data.get(a.dataId).values,n.data.get(i.dataId).values,s,o,l);return n.makeTensorInfo([u.length],"int32",new Int32Array(u))}},ld=f.kernel_impls.nonMaxSuppressionV4Impl,lp={kernelName:f.NonMaxSuppressionV4,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l,padToMaxOutputSize:u}=r;(0,ib.H)(a,"NonMaxSuppressionPadded");let{selectedIndices:c,validOutputs:h}=ld(n.data.get(a.dataId).values,n.data.get(i.dataId).values,s,o,l,u);return[n.makeTensorInfo([c.length],"int32",new Int32Array(c)),n.makeTensorInfo([],"int32",new Int32Array([h]))]}},lf=f.kernel_impls.nonMaxSuppressionV5Impl,lm={kernelName:f.NonMaxSuppressionV5,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l,softNmsSigma:u}=r;(0,ib.H)(a,"NonMaxSuppressionWithScore");let{selectedIndices:c,selectedScores:h}=lf(n.data.get(a.dataId).values,n.data.get(i.dataId).values,s,o,l,u);return[n.makeTensorInfo([c.length],"int32",new Int32Array(c)),n.makeTensorInfo([h.length],"float32",new Float32Array(h))]}};var lg=n(40298);let lx={kernelName:f.OneHot,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{indices:a}=t,{dtype:i,depth:s,onValue:o,offValue:l}=r;(0,ib.H)(a,"oneHot");let u=f.util.sizeFromShape(a.shape),c=new Float32Array(u*s);c.fill(l);let h=n.data.get(a.dataId).values;for(let e=0;e<u;++e)h[e]>=0&&h[e]<s&&(c[e*s+h[e]]=o);return n.makeTensorInfo([...a.shape,s],i,c)}};function lb(e){let{inputs:t,backend:n}=e,{x:r}=t;if("string"===r.dtype)throw Error("zerosLike is not supported for string tensors");if("complex64"!==r.dtype)return og({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}});{let e=(0,sT.k)({inputs:{input:r},backend:n}),t=lb({inputs:{x:e},backend:n}),a=sS({inputs:{input:r},backend:n}),i=lb({inputs:{x:a},backend:n}),s=(0,sI.P)({inputs:{real:t,imag:i},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(i),s}}let ly={kernelName:f.ZerosLike,backendName:"cpu",kernelFunc:lb},lv={kernelName:f.OnesLike,backendName:"cpu",kernelFunc:function e(t){let{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw Error("onesLike is not supported for string tensors");if("complex64"!==a.dtype)return og({backend:r,attrs:{shape:a.shape,value:1,dtype:a.dtype}});{let t=(0,sT.k)({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),i=sS({inputs:{input:a},backend:r}),s=lb({inputs:{x:i},backend:r}),o=(0,sI.P)({inputs:{real:n,imag:s},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(s),o}}};function lk(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r;if(1===t.length)return oo({inputs:{input:t[0]},backend:n,attrs:{dim:a}});let i=t[0].shape,s=t[0].dtype;t.forEach(e=>{f.util.assertShapesMatch(i,e.shape,"All tensors passed to stack must have matching shapes"),f.util.assert(s===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let o=[],l=sA({inputs:t.map(e=>{let t=oo({inputs:{input:e},backend:n,attrs:{dim:a}});return o.push(t),t}),backend:n,attrs:{axis:a}});return o.forEach(e=>n.disposeIntermediateTensorInfo(e)),l}let lI={kernelName:f.Pack,backendName:"cpu",kernelFunc:lk},lC={kernelName:f.PadV2,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:i,constantValue:s}=r;(0,ib.H)(a,"pad");let o=i.map((e,t)=>e[0]+a.shape[t]+e[1]),l=i.map(e=>e[0]),u=n.data.get(a.dataId).values,c=f.util.sizeFromShape(a.shape),h=a.shape.length,d=f.util.computeStrides(a.shape),p=f.util.sizeFromShape(o),m=o.length,g=f.util.computeStrides(o),x=f.util.getTypedArrayFromDType(a.dtype,p);0!==s&&x.fill(s);for(let e=0;e<c;e++){let t=f.util.indexToLoc(e,h,d).map((e,t)=>e+l[t]);x[f.util.locToIndex(t,m,g)]=u[e]}return{dataId:n.write(x,o,a.dtype),shape:o,dtype:a.dtype}}},lw=(0,i$.b)((e,t)=>Math.pow(e,t)),lS=(0,i8.j)(f.Pow,lw),lN={kernelName:f.Pow,backendName:"cpu",kernelFunc:lS};var lT=n(18787),lA=n(48153);let l$={kernelName:f.RaggedGather,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:a,paramsDenseValues:i,indices:s}=t,{outputRaggedRank:o}=r,l=a.map(e=>n.data.get(e.dataId).values),u=a.map(e=>e.shape),c=n.data.get(i.dataId).values,h=n.data.get(s.dataId).values,[d,p,f]=(0,lA.c)(l,u,c,i.shape,i.dtype,h,s.shape,o),m=d.map(e=>n.makeTensorInfo([e.length],"int32",e)),g=n.makeTensorInfo(f,i.dtype,p);return m.concat([g])}};var lE=n(83230);let lF={kernelName:f.RaggedRange,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{starts:r,limits:a,deltas:i}=t,s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,l=n.data.get(i.dataId).values,[u,c]=(0,lE.S)(s,r.shape,r.dtype,o,a.shape,l,i.shape);return[n.makeTensorInfo([u.length],"int32",u),n.makeTensorInfo([c.length],r.dtype,c)]}};var lR=n(30792);let lD={kernelName:f.RaggedTensorToTensor,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{shape:a,values:i,defaultValue:s,rowPartitionTensors:o}=t,{rowPartitionTypes:l}=r,u=n.data.get(a.dataId).values,c=n.data.get(i.dataId).values,h=n.data.get(s.dataId).values,d=o.map(e=>n.data.get(e.dataId).values),p=o.map(e=>e.shape),[f,m]=(0,lR.p)(u,a.shape,c,i.shape,i.dtype,h,s.shape,d,p,l);return n.makeTensorInfo(f,i.dtype,m)}};var l_=n(24971);let lO={kernelName:f.Range,backendName:"cpu",kernelFunc:function(e){let{backend:t,attrs:n}=e,{start:r,stop:a,dtype:i,step:s}=n,o=(0,l_.b)(r,a,s,i);return t.makeTensorInfo([o.length],i,o)}},lM=(0,iC.A)(f.Reciprocal,e=>1/e),lz={kernelName:f.Reciprocal,backendName:"cpu",kernelFunc:lM},lL={kernelName:f.ResizeBilinear,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:i,halfPixelCenters:s,size:o}=r;(0,ib.H)(a,"resizeBilinear");let l=f.util.computeStrides(a.shape),[u,c]=o,[h,d,p,m]=a.shape,g=n.data.get(a.dataId).values,x=new Float32Array(f.util.sizeFromShape([h,u,c,m])),b=[i&&u>1?d-1:d,i&&c>1?p-1:p],y=[i&&u>1?u-1:u,i&&c>1?c-1:c],v=0,k=b[0]/y[0],I=b[1]/y[1];for(let e=0;e<h;e++)for(let t=0;t<u;t++){let n;let r=Math.max(0,Math.floor(n=s?k*(t+.5)-.5:k*t)),a=n-r,i=Math.min(d-1,Math.ceil(n)),o=e*l[0]+r*l[1],u=e*l[0]+i*l[1];for(let e=0;e<c;e++){let t;let n=Math.max(0,Math.floor(t=s?I*(e+.5)-.5:I*e)),r=t-n,i=Math.min(p-1,Math.ceil(t)),c=o+n*l[2],h=u+n*l[2],d=o+i*l[2],f=u+i*l[2];for(let e=0;e<m;e++){let t=g[c+e],n=g[h+e],i=g[d+e],s=g[f+e],o=t+(i-t)*r,l=o+(n+(s-n)*r-o)*a;x[v++]=l}}}return n.makeTensorInfo([h,u,c,m],"float32",x)}},lP={kernelName:f.ResizeBilinearGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:i}=t,{alignCorners:s}=r;(0,ib.H)([i,a],"resizeBilinearGrad");let o=f.util.computeStrides(a.shape),[l,u,c,h]=a.shape,[,d,p]=i.shape,m=new Float32Array(l*u*c*h),g=[s&&d>1?u-1:u,s&&p>1?c-1:c],x=[s&&d>1?d-1:d,s&&p>1?p-1:p],b=g[0]/x[0],y=g[1]/x[1],v=n.data.get(i.dataId).values,k=0;for(let e=0;e<l;e++){let t=e*o[0];for(let e=0;e<d;e++){let n=e*b,r=Math.floor(n),a=Math.min(Math.ceil(n),u-1),i=t+r*o[1],s=t+a*o[1],l=n-r,d=1-l;for(let e=0;e<p;e++){let t=e*y,n=Math.floor(t),r=Math.min(Math.ceil(t),c-1),a=t-n,u=1-a,p=i+n*o[2],f=i+r*o[2],g=s+n*o[2],x=s+r*o[2],b=d*u,I=d*a,C=l*u,w=l*a;for(let e=0;e<h;e++){let t=v[k++];m[p+e]+=t*b,m[f+e]+=t*I,m[g+e]+=t*C,m[x+e]+=t*w}}}}return n.makeTensorInfo([l,c,u,h],"float32",m)}},lB={kernelName:f.ResizeNearestNeighbor,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:i,halfPixelCenters:s,size:o}=r;(0,ib.H)(a,"resizeNearestNeighbor");let l=f.util.computeStrides(a.shape),[u,c]=o,[h,d,p,m]=a.shape,g=n.data.get(a.dataId).values,x=new Float32Array(h*u*c*m),b=[i&&u>1?d-1:d,i&&c>1?p-1:p],y=[i&&u>1?u-1:u,i&&c>1?c-1:c],v=b[0]/y[0],k=b[1]/y[1],I=0;for(let e=0;e<h;e++){let t=e*l[0];for(let e=0;e<u;e++){let n=s?v*(e+.5):v*e,r=Math.min(d-1,i?Math.round(n):Math.floor(n));s&&(r=Math.max(0,r));let a=t+r*l[1];for(let e=0;e<c;e++){let t=s?k*(e+.5):k*e,n=Math.min(p-1,i?Math.round(t):Math.floor(t));s&&(n=Math.max(0,n));let r=a+n*l[2];for(let e=0;e<m;e++){let t=g[r+e];x[I++]=t}}}}return n.makeTensorInfo([h,u,c,m],a.dtype,x)}},lW={kernelName:f.ResizeNearestNeighborGrad,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:i}=t,{alignCorners:s}=r;(0,ib.H)([i,a],"resizeNearestNeighborGrad");let o=f.util.computeStrides(a.shape),l=f.util.computeStrides(i.shape),[u,c,h,d]=a.shape,[,p,m]=i.shape,g=new Float32Array(u*c*h*d),x=n.data.get(i.dataId).values,b=[s&&p>1?c-1:c,s&&m>1?h-1:h],y=[s&&p>1?p-1:p,s&&m>1?m-1:m],v=b[0]/y[0],k=b[1]/y[1],I=1/v,C=1/k,w=2*Math.ceil(I)+2,S=2*Math.ceil(C)+2;for(let e=0;e<u;e++){let t=e*o[0];for(let e=0;e<c;e++){let n=t+e*o[1],r=Math.floor(Math.floor(e*I)-w/2);for(let a=0;a<h;a++){let i=n+a*o[2],u=Math.floor(Math.floor(a*C)-S/2);for(let n=0;n<d;n++){let o=0;for(let i=0;i<w;i++){let d=i+r;if(d<0||d>=p)continue;let f=t+d*l[1],g=d*v;if(e===Math.min(c-1,s?Math.round(g):Math.floor(g)))for(let e=0;e<S;e++){let t=e+u;if(t<0||t>=m)continue;let r=f+t*l[2],i=t*k;a===Math.min(h-1,s?Math.round(i):Math.floor(i))&&(o+=x[r+n])}}g[i+n]=o}}}}return n.makeTensorInfo(a.shape,a.dtype,g)}},lV={kernelName:f.Reverse,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dims:i}=r;(0,ib.H)(a,"reverse");let s=a.shape.length,o=f.util.parseAxisParam(i,a.shape);if(0===s)return(0,iN.y)({inputs:{x:a},backend:n});let l=new f.TensorBuffer(a.shape,a.dtype),u=n.bufferSync(a);for(let e=0;e<l.size;e++){let t=l.indexToLoc(e),n=t.slice();o.forEach(e=>n[e]=a.shape[e]-1-n[e]),l.set(u.get(...n),...t)}return n.makeTensorInfo(l.shape,l.dtype,l.values)}},lG={kernelName:f.RotateWithOffset,backendName:"cpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:a,fillValue:i,center:s}=t,o=f.util.getTypedArrayFromDType(r.dtype,f.util.sizeFromShape(r.shape)),[l,u,c,h]=r.shape,[d,p]=f.backend_util.getImageCenter(s,u,c),m=Math.sin(a),g=Math.cos(a),x=n.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*c*u*h;for(let e=0;e<u;e++){let n=c*h*e;for(let r=0;r<c;r++){let a=r*h;for(let s=0;s<h;s++){let f=[l,e,r,s],b=f[2],y=f[1],v=(b-d)*g-(y-p)*m,k=(b-d)*m+(y-p)*g;v=Math.round(v+d),k=Math.round(k+p);let I=i;"number"!=typeof i&&(I=3===s?255:i[s]),v>=0&&v<c&&k>=0&&k<u&&(I=x[t+c*h*k+v*h+s]),o[t+n+a+s]=I}}}}return{dataId:n.write(o,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},lU=(0,iC.A)(f.Round,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1}),lH={kernelName:f.Round,backendName:"cpu",kernelFunc:lU};var lj=n(23894),lX=n(54589);let lq={kernelName:f.ScatterNd,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{indices:a,updates:i}=t,{shape:s}=r,{sliceRank:o,numUpdates:l,sliceSize:u,strides:c,outputSize:h}=f.backend_util.calculateShapes(i,a,s),d=n.bufferSync(a),p=n.bufferSync(i),m=(0,lX.N)(d,p,s,h,u,l,o,c,0,!0);return n.makeTensorInfo(s,m.dtype,m.values)}},lK={kernelName:f.SearchSorted,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:a,values:i}=t,{side:s}=r,o=function(e,t,n,r,a,i){let s=f.util.getArrayFromDType("int32",n*a);for(let o=0;o<n;++o){let n=e.slice(o*r,(o+1)*r),l=o*a;for(let e=0;e<a;++e)s[l+e]="left"===i?function(e,t){let n=0,r=e.length,a=0;for(;n<r;)e[a=Math.floor((n+r)/2)]<t?n=a+1:r=a;return r}(n,t[e+l]):function(e,t){let n=0,r=e.length,a=0;for(;n<r;)e[a=Math.floor((n+r)/2)]<=t?n=a+1:r=a;return r}(n,t[e+l])}return s}(n.data.get(a.dataId).values,n.data.get(i.dataId).values,a.shape[0],a.shape[1],i.shape[1],s);return n.makeTensorInfo(i.shape,"int32",o)}},lQ={kernelName:f.Select,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{condition:r,t:a,e:i}=t;(0,ib.H)([r,a,i],"select");let s=r.shape.length,o=n.data.get(r.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(i.dataId).values,c=(0,f.upcastType)(a.dtype,i.dtype),h=f.util.makeZerosTypedArray(f.util.sizeFromShape(a.shape),c),d=0,p=0===s||s>1||1===a.shape.length?1:f.util.sizeFromShape(a.shape.slice(1));for(let e=0;e<o.length;e++)for(let t=0;t<p;t++)1===o[e]?h[d++]=l[e]:h[d++]=u[e];return n.makeTensorInfo(a.shape,c,h)}},lY=f.backend_util.SELU_SCALEALPHA,lZ=f.backend_util.SELU_SCALE,lJ=(0,iC.A)(f.Selu,e=>e>=0?lZ*e:lY*(Math.exp(e)-1)),l0={kernelName:f.Selu,backendName:"cpu",kernelFunc:lJ},l1=(0,iC.A)(f.Sign,e=>e<0?-1:e>0?1:0),l2={kernelName:f.Sign,backendName:"cpu",kernelFunc:l1},l3=(0,iC.A)(f.Sin,e=>Math.sin(e)),l4={kernelName:f.Sin,backendName:"cpu",kernelFunc:l3},l6=(0,iC.A)(f.Sinh,e=>Math.sinh(e)),l5={kernelName:f.Sinh,backendName:"cpu",kernelFunc:l6},l9=Math.log(11920928955078125e-23)+2,l8=(0,iC.A)(f.Softplus,e=>{let t=Math.exp(e);return e<l9?t:e>-l9?e:Math.log(1+t)}),l7={kernelName:f.Softplus,backendName:"cpu",kernelFunc:l8},ue={kernelName:f.SpaceToBatchND,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:i,paddings:s}=r;(0,ib.H)([a],"spaceToBatchND");let o=f.util.sizeFromShape(i),l=[[0,0]];l.push(...s);for(let e=1+i.length;e<a.shape.length;++e)l.push([0,0]);let u=lC.kernelFunc({inputs:{x:a},backend:n,attrs:{paddings:l,constantValue:0}}),c=f.backend_util.getReshaped(u.shape,i,o,!1),h=f.backend_util.getPermuted(c.length,i.length,!1),d=f.backend_util.getReshapedPermuted(u.shape,i,o,!1),p=iB({inputs:{x:u},backend:n,attrs:{shape:c}}),m=(0,iY.p)({inputs:{x:p},backend:n,attrs:{perm:h}}),g=iB({inputs:{x:m},backend:n,attrs:{shape:d}});return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),g}};var ut=n(48560);let un={kernelName:f.SparseFillEmptyRows,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:i,defaultValue:s}=t;if(1!==i.shape.length)throw Error(`Dense shape must be a vector, saw:
        ${i.shape}`);if(2!==r.shape.length)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(1!==a.shape.length)throw Error(`Values must be a vector, saw:
        ${a.shape}`);if(0!==s.shape.length)throw Error(`Default value must be a scalar, saw:
        ${s.shape}`);let o=n.data.get(r.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(i.dataId).values,c=n.data.get(s.dataId).values[0],[h,d,p,f,m]=(0,ut.c)(o,r.shape,r.dtype,l,a.dtype,u,c);return[n.makeTensorInfo(d,r.dtype,h),n.makeTensorInfo([d[0]],a.dtype,p),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}};var ur=n(38668);let ua={kernelName:f.SparseReshape,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:i}=t;if(2!==r.shape.length)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(1!==a.shape.length)throw Error(`Input shape should be a vector but received shape
        ${a.shape}`);if(1!==i.shape.length)throw Error(`Target shape should be a vector but received shape ${i.shape}`);let s=Array.from(n.data.get(a.dataId).values),o=n.data.get(r.dataId).values,l=Array.from(n.data.get(i.dataId).values),[u,c,h]=(0,ur.U)(o,r.shape,r.dtype,s,l);return[n.makeTensorInfo(c,r.dtype,u),n.makeTensorInfo([h.length],i.dtype,new Int32Array(h))]}};var ui=n(11017);let us={kernelName:f.SparseSegmentMean,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:i}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
          ${a.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
          ${i.shape}`);if(a.shape[0]!==i.shape[0])throw Error("segmentIds and indices should have same size.");let s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,l=n.data.get(i.dataId).values,[u,c]=(0,ui.V)(s,r.shape,r.dtype,o,l,!0);return n.makeTensorInfo(c,r.dtype,u)}},uo={kernelName:f.SparseSegmentSum,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:i}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
         ${a.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
         ${i.shape}`);if(a.shape[0]!==i.shape[0])throw Error("segmentIds and indices should have same size.");let s=n.data.get(r.dataId).values,o=n.data.get(a.dataId).values,l=n.data.get(i.dataId).values,[u,c]=(0,ui.V)(s,r.shape,r.dtype,o,l);return n.makeTensorInfo(c,r.dtype,u)}},ul={kernelName:f.SparseToDense,backendName:"cpu",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{sparseIndices:i,sparseValues:s,defaultValue:o}=n,{outputShape:l}=a,{sliceRank:u,numUpdates:c,sliceSize:h,strides:d,outputSize:p}=f.backend_util.calculateShapes(s,i,l),m=r.bufferSync(i);switch(s.dtype){case"bool":{let e=r.bufferSync(s),n=!!r.data.get(o.dataId).values[0];t=(0,lX.N)(m,e,l,p,h,c,u,d,n,!1);break}case"float32":{let e=r.bufferSync(s),n=r.data.get(o.dataId).values[0];t=(0,lX.N)(m,e,l,p,h,c,u,d,n,!1);break}case"int32":{let e=r.bufferSync(s),n=r.data.get(o.dataId).values[0];t=(0,lX.N)(m,e,l,p,h,c,u,d,n,!1);break}case"string":{let e=r.bufferSync(s),n=f.util.decodeString(r.data.get(o.dataId).values[0]);t=(0,lX.N)(m,e,l,p,h,c,u,d,n,!1);break}default:throw Error(`Unsupported type ${s.dtype}`)}return r.makeTensorInfo(l,t.dtype,t.values)}},uu={kernelName:f.SplitV,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{numOrSizeSplits:i,axis:s}=r,o=f.util.parseAxisParam(s,a.shape)[0],l=f.backend_util.prepareSplitSize(a,i,o),u=Array(a.shape.length).fill(0),c=a.shape.slice();return l.map(e=>{let t=[...c];t[o]=e;let r=(0,sd.tP)({inputs:{x:a},backend:n,attrs:{begin:u,size:t}});return u[o]+=e,r})}};var uc=n(68747);let uh={kernelName:f.Square,backendName:"cpu",kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e;(0,ib.H)(n,"square");let r=t.data.get(n.dataId).values,a=new Float32Array(r.length);for(let e=0;e<r.length;++e){let t=r[e];a[e]=t*t}return{dataId:t.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};var ud=n(41039),up=n(66830);let uf=(0,iC.A)(f.Step,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha),um={kernelName:f.Step,backendName:"cpu",kernelFunc:uf};var ug=n(67275);let ux={kernelName:f.StridedSlice,backendName:"cpu",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{begin:s,end:o,strides:l,beginMask:u,endMask:c,ellipsisMask:h,newAxisMask:d,shrinkAxisMask:p}=a;(0,ib.H)(i,"stridedSlice");let{finalShapeSparse:m,finalShape:g,isIdentity:x,sliceDim0:b,isSimpleSlice:y,begin:v,end:k,strides:I}=f.slice_util.sliceInfo(i.shape,s,o,l,u,c,h,d,p);if(x)t=iB({inputs:{x:i},backend:r,attrs:{shape:g}});else if(b||y){f.util.assert(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=f.slice_util.computeOutShape(v,k,I),n=(0,sd.tP)({inputs:{x:i},backend:r,attrs:{begin:v,size:e}});t=iB({inputs:{x:n},backend:r,attrs:{shape:g}}),r.disposeIntermediateTensorInfo(n)}else{let e=r.bufferSync(i),n=(0,ug.t)(m,e,I,v);t=r.makeTensorInfo(g,n.dtype,n.values)}return t}};var ub=n(37913);let uy={kernelName:f.StringNGrams,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:i,leftPad:s,rightPad:o,padWidth:l,preserveShortSequences:u}=r,{data:c,dataSplits:h}=t,d=n.data.get(c.dataId).values,p=n.data.get(h.dataId).values,[f,m]=(0,ub.A)(d,p,a,i,s,o,l,u);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(h.shape,"int32",m)]}};var uv=n(64116);let uk={kernelName:f.StringSplit,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:i,delimiter:s}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(1!==i.shape.length)throw Error(`Input must be a vector, got shape: ${i.shape}`);if(0!==s.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${s.shape}`);let o=n.data.get(i.dataId).values,l=n.data.get(s.dataId).values[0],[u,c,h]=(0,uv.Q)(o,l,a),d=c.length;return[n.makeTensorInfo([d,2],"int32",u),n.makeTensorInfo([d],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(h))]}};var uI=n(76989);let uC={kernelName:f.StringToHashBucketFast,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:i}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(a<=0)throw Error("Number of buckets must be at least 1");let s=n.data.get(i.dataId).values,o=(0,uI.h)(s,a);return n.makeTensorInfo(i.shape,"int32",o)}},uw=(0,iC.A)(f.Tan,e=>Math.tan(e)),uS={kernelName:f.Tan,backendName:"cpu",kernelFunc:uw},uN=(0,iC.A)(f.Tanh,e=>Math.tanh(e)),uT={kernelName:f.Tanh,backendName:"cpu",kernelFunc:uN},uA={kernelName:f.TensorScatterUpdate,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n}=e,{tensor:r,indices:a,updates:i}=t,{sliceRank:s,numUpdates:o,sliceSize:l,strides:u,outputSize:c}=f.backend_util.calculateShapes(i,a,r.shape),h=n.bufferSync(a),d=n.bufferSync(i),p=n.bufferSync(r),m=(0,lX.N)(h,d,r.shape,c,l,o,s,u,p,!1);return n.makeTensorInfo(r.shape,m.dtype,m.values)}};var u$=n(20868);let uE={kernelName:f.Tile,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reps:i}=r;(0,ib.H)(a,"tile");let s=(0,u$.R)(n.bufferSync(a),i);return n.makeTensorInfo(s.shape,s.dtype,s.values)}};var uF=n(40005);let uR={kernelName:f.TopK,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{k:i,sorted:s}=r;(0,ib.H)(a,"topk");let o=n.data.get(a.dataId).values,[l,u]=(0,uF.W)(o,a.shape,a.dtype,i,s);return[n.makeTensorInfo(l.shape,l.dtype,l.values),n.makeTensorInfo(u.shape,u.dtype,u.values)]}},uD={kernelName:f.Transform,backendName:"cpu",kernelFunc:function(e){let{inputs:t,attrs:n,backend:r}=e,{image:a,transforms:i}=t,{interpolation:s,fillMode:o,fillValue:l,outputShape:u}=n,[c,h,d,p]=a.shape,[m,g]=null!=u?u:[h,d],x=[c,m,g,p],b=f.util.computeStrides(a.shape),y=b[0],v=b[1],k=b[2],I=f.util.computeStrides(x),C=I[0],w=I[1],S=I[2],N=f.util.getTypedArrayFromDType(a.dtype,f.util.sizeFromShape(x));N.fill(l);let T=r.data.get(a.dataId).values,A=r.data.get(i.dataId).values;for(let e=0;e<c;++e){let t=1===i.shape[0]?A:A.subarray(8*e,8*e+8);for(let n=0;n<m;++n)for(let r=0;r<g;++r)for(let a=0;a<p;++a){let i;let u=t[6]*r+t[7]*n+1;if(0===u)continue;let c=(t[0]*r+t[1]*n+t[2])/u,p=(t[3]*r+t[4]*n+t[5])/u,f=u_(c,d,o),m=u_(p,h,o);switch(s){case"nearest":i=uO(T,h,d,y,v,k,e,Math.round(m),Math.round(f),a,l);break;case"bilinear":i=function(e,t,n,r,a,i,s,o,l,u,c){let h=Math.floor(o),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*uO(e,t,n,r,a,i,s,h,d,u,c)+(l-d)*uO(e,t,n,r,a,i,s,h,f,u,c),g=(f-l)*uO(e,t,n,r,a,i,s,p,d,u,c)+(l-d)*uO(e,t,n,r,a,i,s,p,f,u,c);return(p-o)*m+(o-h)*g}(T,h,d,y,v,k,e,m,f,a,l);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${s}`)}N[e*C+n*w+r*S+a]=i}return r.makeTensorInfo(x,a.dtype,N)}return{dataId:r.write(N,x,a.dtype),shape:a.shape,dtype:a.dtype}}};function u_(e,t,n){switch(n){case"reflect":return function(e,t){let n=e;if(n<0){if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}}else if(n>t-1){if(t<=1)n=0;else{let e=2*t;(n-=e*Math.trunc(n/e))>=t&&(n=e-n-1)}}return f.util.clamp(0,n,t-1)}(e,t);case"wrap":let r;return(r=e)<0?t<=1?r=0:r+=t*(Math.trunc(-r/(t-1))+1):r>t-1&&(t<=1?r=0:r-=t*Math.trunc(r/(t-1))),f.util.clamp(0,r,t-1);case"nearest":return f.util.clamp(0,e,t-1);default:return e}}function uO(e,t,n,r,a,i,s,o,l,u,c){return 0<=o&&o<t&&0<=l&&l<n?e[s*r+o*a+l*i+u]:c}var uM=n(54430);let uz={kernelName:f.Unique,backendName:"cpu",kernelFunc:function(e){let{inputs:t,attrs:n,backend:r}=e,{axis:a}=n,{x:i}=t;(0,ib.H)(i,"unique");let s=r.data.get(i.dataId).values,{outputValues:o,outputShape:l,indices:u}=(0,uM.S)(s,a,i.shape,i.dtype);return[r.makeTensorInfo(l,i.dtype,o),r.makeTensorInfo([u.length],"int32",u)]}},uL={kernelName:f.Unpack,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{value:a}=t,{axis:i}=r;i<0&&(i+=a.shape.length);let s=a.shape.length,o=a.shape[i],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==i&&(l[u++]=a.shape[e]);let c=Array(s).fill(0),h=a.shape.slice();h[i]=1;let d=Array(o);for(let e=0;e<d.length;e++){c[i]=e;let t=(0,sd.tP)({inputs:{x:a},backend:n,attrs:{begin:c,size:h}});d[e]=iB({inputs:{x:t},backend:n,attrs:{shape:l}}),n.disposeIntermediateTensorInfo(t)}return d}},uP={kernelName:f.UnsortedSegmentSum,backendName:"cpu",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,segmentIds:i}=t,{numSegments:s}=r;(0,ib.H)(a,"unsortedSegmentSum");let o=a.shape.length,l=i.shape.length,u=[],c=[],h=o-l,d=i;for(let e=0;e<h;++e){let t=oo({inputs:{input:d},backend:n,attrs:{dim:e+1}});d=t,c.push(t)}for(let e=0;e<s;++e){let t=f.util.createScalarValue(e,"int32"),r=n.makeTensorInfo([],"int32",t),i=(0,s9.Dg)({inputs:{a:r,b:d},backend:n}),s=(0,sb.pj)({inputs:{x:i},backend:n,attrs:{dtype:"float32"}}),o=(0,s1.Jp)({inputs:{a:s,b:a},backend:n}),l=s3({inputs:{x:o},backend:n,attrs:{axis:0,keepDims:!1}});u.push(l),c.push(r),c.push(i),c.push(s),c.push(o),c.push(l)}let p=lk({inputs:u,backend:n,attrs:{axis:0}});return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}};for(let e of[iU,iH.fC,iX,iK,iP.j4,iQ,iZ,iJ,i0,i1,i3,i6,i9,st,sr,so,sl,su,sc,iG,sh,sp,sm,sg.T0,sx,sb.Mq,sy.y2,sk,sI.z,sC,s$,sF,sR,sD,s_,sO,sM,sL,sB,sW,sV,sG,sU,sH,sX,sq,sK,sQ,sY,sZ,sJ,s0,s6,iS,s5,s9.Kx,oi,os.SX,ol,ou.Vu,om,ox,ob,oy.Ao,ov.EE,ok,oI,ow,oN,oT.Ce,oA.V,iN.I,o$,sN,oF,oD,oO,iA,oM.zh,oz.m3,oP,oB.xM,oV,oH,oX,oQ,oY,oZ,o2,o3.eJ,o4,o6,o5,o9,o8,o7,le,lt.u0,ln,li,ll,s1.f$,lu.AF,lh,lp,lm,lg.nP,lx,lv,lI,lC,lN,iR,lT.Iz,l$,lF,lD,lO,sT.O,od,lz,i_,iM,iW,lL,lP,lB,lW,lV,lG,lH,lj.FY,lq,lK,lQ,l0,iz.BP,l2,l4,l5,sd.C6,lo,l7,ue,un,ua,us,uo,ul,uu,uc.cz,uh,ud.MS,up.j,um,ux,uy,uk,uC,op.GR,s4,uS,uT,uA,uE,uR,uD,iY.b,uz,uL,uP,ly])(0,f.registerKernel)(e);var uB=n(64544);let uW="4.22.0";var uV=n(28657),uG=n(3326),uU=n(90756),uH=n(37394);function uj(){(0,f.env)().set("WEBGL_FORCE_F16_TEXTURES",!0)}f.device_util.isBrowser()&&(0,f.registerBackend)("webgl",()=>new uB.QC,2);let uX={forceHalfFloat:uj};var uq=n(70943);let uK=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class uQ{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=f.backend_util.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}var uY=n(30688),uZ=n(89201);let uJ=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class u0{constructor(e,t,n,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=f.backend_util.assertAndGetBroadcastShape(t,n);let a=this.outputShape.length;this.enableShapeUniforms=(0,uq.C9)(a);let i="";if(r){if(0===a||1===f.util.sizeFromShape(this.outputShape))i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else{let e=(0,uZ.kW)(a);if(i=`
          ${e} coords = getOutputCoords();
        `,1===a)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=(0,uY.Ky)("coords",a);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${e[a-2]} + 1) >= outShape[${a} - 2];
            bool nextColOutOfBounds =
              (${e[a-1]} + 1) >= outShape[${a} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${e[a-2]} + 1) >= ${this.outputShape[a-2]};
            bool nextColOutOfBounds =
              (${e[a-1]} + 1) >= ${this.outputShape[a-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}}}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function u1(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}let u2={kernelName:f.Identity,backendName:"webgl",kernelFunc:u1};function u3(e){let{inputs:t,backend:n}=e,{real:r,imag:a}=t,i=n.makeTensorInfo(r.shape,"complex64"),s=n.texData.get(i.dataId),o=u1({inputs:{x:r},backend:n}),l=u1({inputs:{x:a},backend:n});return s.complexTensorInfos={real:o,imag:l},i}let u4={kernelName:f.Complex,backendName:"webgl",kernelFunc:u3},u6="return (a < 0.) ? b * a : a;",u5=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,u9={kernelName:f.LeakyRelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{alpha:i}=r,s=n.makeTensorInfo([],"float32",f.util.createScalarValue(i,"float32")),o=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new u0(u5,a.shape,s.shape):new uQ(u6,a.shape,s.shape),l=n.runWebGLProgram(o,[a,s],"float32");return n.disposeIntermediateTensorInfo(s),l}},u8="return (a < 0.) ? b * a : a;",u7=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,ce={kernelName:f.Prelu,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r,alpha:a}=t,i=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new u0(u7,r.shape,a.shape):new uQ(u8,r.shape,a.shape);return n.runWebGLProgram(i,[r,a],"float32")}};var ct=n(35626),cn=n(85243);let cr="if (isnan(x)) return x;";function ca({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:a,backend:i})=>{let s;let{x:o}=a,l=r||o.dtype;if(i.shouldExecuteOnCPU([o])&&null!=n){let e=n(i.texData.get(o.dataId).values,l);return i.makeTensorInfo(o.shape,l,e)}return s=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=t?new cn.cc(o.shape,t):new ct.l(o.shape,e),i.runWebGLProgram(s,[o],l)}}function ci({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:a,dtype:i}){return({inputs:s,backend:o})=>{let l;let{a:u,b:c}=s;if(r&&"complex64"===u.dtype){let t=o.texData.get(u.dataId),n=o.texData.get(c.dataId),[r,a]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,a={dataId:n.dataId,dtype:n.dtype,shape:u.shape},i={dataId:r.dataId,dtype:r.dtype,shape:c.shape},s=new uQ(e,u.shape,c.shape);return o.runWebGLProgram(s,[a,i],(0,f.upcastType)(n.dtype,r.dtype))}),i=u3({inputs:{real:r,imag:a},backend:o});return o.disposeIntermediateTensorInfo(r),o.disposeIntermediateTensorInfo(a),i}let h=i||(0,f.upcastType)(u.dtype,c.dtype);if(("string"===u.dtype||"string"===c.dtype||o.shouldExecuteOnCPU([u,c]))&&null!=a){let e=o.texData.get(u.dataId).values,t=o.texData.get(c.dataId).values,n="string"===u.dtype?f.backend_util.fromUint8ToStringArray(e):e,r="string"===u.dtype?f.backend_util.fromUint8ToStringArray(t):t,[i,s]=a(u.shape,c.shape,n,r,h),l=o.makeTensorInfo(s,h);return o.texData.get(l.dataId).values=i,l}return l=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=t?new u0(t,u.shape,c.shape,n):new uQ(e,u.shape,c.shape),o.runWebGLProgram(l,[u,c],h)}}function cs(e,t=!1){if("linear"===e)return t?cn.t$:ct.t$;if("relu"===e)return t?cn.RX:ct.RX;if("elu"===e)return t?cn.Cv:ct.Cv;if("relu6"===e)return t?cn.eW:ct.eW;if("prelu"===e)return t?u7:u8;if("leakyrelu"===e)return t?u5:u6;if("sigmoid"===e)return t?cn.Tq:ct.Tq;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}class co{constructor(e,t,n,r=!1,a=!1,i=!1,s=null,o=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let u=Math.ceil((r?e[1]:e[2])/2),c=r?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=a?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";s&&(d=o?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:l?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:`vec4 activation(vec4 x) {
          ${s}
        }`,p="result = activation(result);"),i&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let f="rc.x",m="rc.x";e[0]<t[0]?f=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(m=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${d}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${f};
        int batchB = ${m};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${r?"i * 2, rc.y":"rc.y, i * 2"});
          vec4 b = getMatrixB(batchB, ${a?"rc.z, i * 2":"i * 2, rc.z"});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${c[0]} * ${h[0]});
          result += (${c[1]} * ${h[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${i?"result += getBiasAtOutCoords();":""}

        ${p}

        setOutput(result);
      }
    `}}let cl={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class cu{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=f.backend_util.assertAndGetBroadcastShape(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}var cc=n(26357);let ch="return a * b;";function cd(e){let t;let{inputs:n,backend:r}=e,{a,b:i}=n,s=f.backend_util.upcastType(a.dtype,i.dtype);if("complex64"===a.dtype){let e=r.texData.get(a.dataId),t=r.texData.get(i.dataId),n=new cu(cl.REAL,a.shape,i.shape),s=new cu(cl.IMAG,a.shape,i.shape),o=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:a.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],l=r.runWebGLProgram(n,o,"float32"),u=r.runWebGLProgram(s,o,"float32"),c=u3({inputs:{real:l,imag:u},backend:r});return r.disposeIntermediateTensorInfo(l),r.disposeIntermediateTensorInfo(u),c}if(r.shouldExecuteOnCPU([a,i])){let e=r.texData.get(a.dataId),t=r.texData.get(i.dataId),[n,o]=(0,cc.Th)(a.shape,i.shape,e.values,t.values,s),l=r.makeTensorInfo(o,s);return r.texData.get(l.dataId).values=n,l}return t=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new u0(ch,a.shape,i.shape):new uQ(ch,a.shape,i.shape),r.runWebGLProgram(t,[a,i],s)}let cp={kernelName:f.Multiply,backendName:"webgl",kernelFunc:cd};var cf=n(1811);function cm(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{shape:i}=r,s=f.util.sizeFromShape(a.shape),o=f.util.inferFromImplicitShape(i,s),l=f.util.sizeFromShape(o);f.util.assert(s===l,()=>`The new shape (${o}) has ${l} elements and the old shape (${a.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=n.texData.get(a.dataId);return!u.isPacked||(0,uG.isReshapeFree)(a.shape,o)||null!==u.texture&&(0,uG.isReshapeFree)(u.shape,o)?(n.incRef(a.dataId),{dataId:a.dataId,shape:o,dtype:a.dtype}):function(e,t,n){let r=[(0,uG.getBatchDim)(e.shape),...(0,uG.getRowsCols)(e.shape)],a={dtype:e.dtype,shape:r,dataId:e.dataId},i=[(0,uG.getBatchDim)(t),...(0,uG.getRowsCols)(t)],s=new cf.v(i,r),o=n.runWebGLProgram(s,[a],e.dtype,[r],!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}(a,o,n)}let cg={kernelName:f.Reshape,backendName:"webgl",kernelFunc:cm};class cx{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:r,inSize:a,outSize:i}=e;this.outputShape=[r,i];let s=4*Math.floor(n/4),o=n%4,l="sumValue += dot(values, ones);";if(null!=t){let e=1/t;l=`sumValue += dot(values * ${f.util.isInt(e)?e.toPrecision(2):e}, ones);`}let u="";a%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${1===o}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${2===o}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${3===o}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}class cb{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:r,inSize:a,outSize:i}=e;this.outputShape=[r,i];let s="0.0",o="";"prod"===t?s="1.0":"min"===t?(s="1.0 / 1e-20",o="min"):"max"===t&&(s="-1.0 / 1e-20",o="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===t?l="sumValue":"prod"===t?l="prodValue":"all"===t?l="allValue":"any"===t&&(l="anyValue");let u=4*Math.floor(n/4),c=n%4,h=`
      if (${"sum"===t}) {
        sumValue += dot(values, ones);
      } else if (${"prod"===t}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${o}(values, minMaxValue);
        if (${"min"===t} || ${"max"===t}) {
          minMaxValue = ${o}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,d="vec4";"all"===t?(s="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):"any"===t&&(s="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let p="";a%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${s};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${s});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${1===c}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${2===c}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${3===c}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}function cy(e,t,n,r){let a=function(e){let t=[];for(;0===t.length||1!==t[t.length-1].outSize;){let n=t.length?t[t.length-1].outSize:e[1],r=f.backend_util.computeOptimalWindowSize(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}(e.shape),i=e;for(let s=0;s<a.length;s++){let o,l;let{inSize:u,windowSize:c,outSize:h}=a[s];o="mean"===n?0===s?new cx({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:h},u):new cx({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:h}):new cb({windowSize:c,inSize:u,batchSize:e.shape[0],outSize:h},n),l=i,i=r.runWebGLProgram(o,[i],t),l.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(l)}return i}class cv{constructor(e,t){this.variableNames=["A"];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=(0,uZ.kW)(this.rank),a=function(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${a}));
    }
    `}}class ck{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=(0,uZ.kW)(this.rank),a=(0,uY.k6)("rc",this.rank),i=Array(this.rank);for(let e=0;e<t.length;e++)i[t[e]]=a[e];let s=`vec2(${i.slice(-2).join()})`,o=`++${a[this.rank-1]} < ${n[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${s})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${o}) {
        result[1] = ${l};
      }
      --${a[this.rank-1]};
      if(++${a[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${l};
        if(${o}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}function cI(e,t,n){let r=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ck(e.shape,t):new cv(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}function cC(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,keepDims:s}=r;return function(e,t,n,r){let a=e.shape.length,i=f.util.parseAxisParam(t,e.shape),s=i,o=f.backend_util.getAxesPermutation(s,a),l=null!=o,u=e;l&&(u=cI(e,o,r),s=f.backend_util.getInnerMostAxes(s.length,a)),f.backend_util.assertAxesAreInnerMostDims("sum",s,a);let[c,h]=f.backend_util.computeOutAndReduceShapes(u.shape,s),d=c;n&&(d=f.backend_util.expandShapeToKeepDim(c,i));let p=f.util.sizeFromShape(h),m=cm({inputs:{x:u},attrs:{shape:[f.util.sizeFromShape(e.shape)/p,p]},backend:r}),g=cy(m,(0,f.sumOutType)(e.dtype),"sum",r),x=cm({inputs:{x:g},attrs:{shape:d},backend:r});return r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(g),l&&r.disposeIntermediateTensorInfo(u),x}(a,i,s,n)}let cw={kernelName:f.Sum,backendName:"webgl",kernelFunc:cC};function cS(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{perm:s}=a,o=Array(i.shape.length);for(let e=0;e<o.length;e++)o[e]=i.shape[s[e]];if(r.shouldExecuteOnCPU([i])){let e=r.texData.get(i.dataId).values,n=(0,cc.Fv)(e,i.shape,i.dtype,s,o);t=r.makeTensorInfo(o,i.dtype),r.texData.get(t.dataId).values=n}else t=cI(i,s,r);return t}let cN={kernelName:f.Transpose,backendName:"webgl",kernelFunc:cS};function cT({a:e,b:t,transposeA:n,transposeB:r,backend:a,bias:i=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:l=null}){let u;let c=e.shape.length,h=t.shape.length,d=n?e.shape[c-2]:e.shape[c-1],p=r?t.shape[h-1]:t.shape[h-2],m=n?e.shape[c-1]:e.shape[c-2],g=r?t.shape[h-2]:t.shape[h-1],x=e.shape.slice(0,-2),b=t.shape.slice(0,-2),y=f.util.sizeFromShape(x),v=f.util.sizeFromShape(b),k=f.broadcast_util.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([m,g]);f.util.assert(d===p,()=>`Error in matMul: inner shapes (${d}) and (${p}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let I=n?[y,d,m]:[y,m,d],C=r?[v,g,p]:[v,p,g],w=cm({inputs:{x:e},backend:a,attrs:{shape:I}}),S=cm({inputs:{x:t},backend:a,attrs:{shape:C}}),N=[w,S],T=Math.max(y,v),A=n?w.shape[1]:w.shape[2],$=null!=i,E=null!=s,F="leakyrelu"===l,R=null!=l?cs(l,!0):null,D=$||E||F||null!=R;if((1===m||1===g)&&A>1e3&&!1===D){let e=w,t=S;n&&(e=cS({inputs:{x:w},backend:a,attrs:{perm:[0,2,1]}}),N.push(e)),r&&(t=cS({inputs:{x:S},backend:a,attrs:{perm:[0,2,1]}}),N.push(t));let i=1!==g,s=1===g,o=e;i&&(o=cm({inputs:{x:e},backend:a,attrs:{shape:[T,A,1]}}),N.push(o));let l=t;s&&(l=cm({inputs:{x:t},backend:a,attrs:{shape:[T,1,A]}}),N.push(l));let c=cd({inputs:{a:o,b:l},backend:a});u=cC({inputs:{x:c},backend:a,attrs:{axis:1===g?2:1,keepDims:!0}}),N.push(c)}else{let l=(0,f.upcastType)(e.dtype,t.dtype),c=new co(I,C,[T,m,g],n,r,$,R,E,F),h=[w,S];if(null!=i&&h.push(i),E&&h.push(s),F){let e=a.makeTensorInfo([],"float32",f.util.createScalarValue(o,"float32"));h.push(e),N.push(e)}u=a.runWebGLProgram(c,h,l)}let _=cm({inputs:{x:u},backend:a,attrs:{shape:k}});for(let e of(N.push(u),N))a.disposeIntermediateTensorInfo(e);return _}let cA={kernelName:f._FusedMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{a,b:i,bias:s,preluActivationWeights:o}=t,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:h}=r;return cT({a,b:i,transposeA:l,transposeB:u,backend:n,bias:s,preluActivationWeights:o,leakyreluAlpha:h,activation:c})}},c$="return abs(x);",cE={kernelName:f.Abs,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r}=e,{x:a}=n;if(r.shouldExecuteOnCPU([a])&&"complex64"!==a.dtype){let e=r.texData.get(a.dataId),t=(0,cc.CJ)(e.values);return r.makeTensorInfo(a.shape,a.dtype,t)}return t=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new cn.cc(a.shape,c$):new ct.l(a.shape,c$),r.runWebGLProgram(t,[a],a.dtype)}},cF=ca({opSnippet:ct.D1+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`}),cR={kernelName:f.Acos,backendName:"webgl",kernelFunc:cF},cD=ca({opSnippet:ct.D1+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`}),c_={kernelName:f.Acosh,backendName:"webgl",kernelFunc:cD},cO="return a + b;",cM=ci({opSnippet:cO,packedOpSnippet:cO,supportsComplex:!0,cpuKernelImpl:cc.cK}),cz={kernelName:f.Add,backendName:"webgl",kernelFunc:cM};class cL{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${n.join("\n        ")}

        float result = ${r};
        setOutput(result);
      }
    `}}class cP{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(" + ");this.userCode=`
      void main() {
        ${n.join("\n        ")}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}let cB={kernelName:f.AddN,backendName:"webgl",kernelFunc:function e(t){let{inputs:n,backend:r}=t;if(1===n.length)return u1({inputs:{x:n[0]},backend:r});if(n.length>(0,f.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let t=Math.floor(n.length/2),a=e({inputs:n.slice(0,t),backend:r}),i=e({inputs:n.slice(t),backend:r});return e({inputs:[a,i],backend:r})}let a=n.map(e=>e.dtype).reduce((e,t)=>(0,f.upcastType)(e,t)),i=n.map(e=>e.shape),s=(0,f.env)().getBool("WEBGL_PACK")?new cP(n[0].shape,i):new cL(n[0].shape,i);return r.runWebGLProgram(s,n,a)}},cW={kernelName:f.All,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{axis:s,keepDims:o}=a,l=i.shape.length,u=f.util.parseAxisParam(s,i.shape),c=u,h=f.backend_util.getAxesPermutation(c,l),d=i;null!=h&&(d=cS({inputs:{x:i},backend:r,attrs:{perm:h}}),c=f.backend_util.getInnerMostAxes(c.length,l)),f.backend_util.assertAxesAreInnerMostDims("all",c,l);let[p,m]=f.backend_util.computeOutAndReduceShapes(d.shape,c),g=cm({inputs:{x:d},backend:r,attrs:{shape:[-1,f.util.sizeFromShape(m)]}}),x=cy(g,g.dtype,"all",r);return t=o?cm({inputs:{x:x},backend:r,attrs:{shape:f.backend_util.expandShapeToKeepDim(p,u)}}):cm({inputs:{x:x},backend:r,attrs:{shape:p}}),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(x),null!=h&&r.disposeIntermediateTensorInfo(d),t}},cV={kernelName:f.Any,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{axis:s,keepDims:o}=a,l=i.shape.length,u=f.util.parseAxisParam(s,i.shape),c=u,h=f.backend_util.getAxesPermutation(c,l),d=i;null!=h&&(d=cS({inputs:{x:i},backend:r,attrs:{perm:h}}),c=f.backend_util.getInnerMostAxes(c.length,l)),f.backend_util.assertAxesAreInnerMostDims("any",c,l);let[p,m]=f.backend_util.computeOutAndReduceShapes(d.shape,c),g=cm({inputs:{x:d},backend:r,attrs:{shape:[-1,f.util.sizeFromShape(m)]}}),x=cy(g,g.dtype,"any",r);return t=o?cm({inputs:{x:x},backend:r,attrs:{shape:f.backend_util.expandShapeToKeepDim(p,u)}}):cm({inputs:{x:x},backend:r,attrs:{shape:p}}),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(x),null!=h&&r.disposeIntermediateTensorInfo(d),t}};class cG{constructor(e,t,n){this.variableNames=["A"];let{windowSize:r,batchSize:a,outSize:i}=e;n||this.variableNames.push("bestIndicesA"),this.outputShape=[a,i],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));"};
          float candidate = getA(batch, inIdx);
          if (candidate ${"max"===t?">":"<"} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class cU{constructor(e,t,n,r){let a,i;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,f.util.assert(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let s=Math.ceil(e[e.length-1]/t);this.outputShape=e.slice(0,-1),s>1&&this.outputShape.push(s),r||this.variableNames.push("bestIndicesA");let o=this.outputShape,l=o.length,u=(0,uZ.kW)(l),c=(0,uY.Ky)("coords",l);if(1===s){i=l+1;let e=(0,uZ.kW)(i);a=`
        ${e} sourceLocR = ${e}(${c.join()}, 0);
        ++${c[l-1]};
        ${e} sourceLocG = ${e}(${c.join()}, 0);
        ++${c[l-2]};
        ${e} sourceLocA = ${e}(${c.join()}, 0);
        --${c[l-1]};
        ${e} sourceLocB = ${e}(${c.join()}, 0);
        --${c[l-2]};`}else i=l,a=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;let h=["x","y","z","w","u","v"].slice(0,i),d="."+h[i-1],p=h.map(e=>"int "+e),m=(0,uY.Ky)("sourceLocR",i-1).concat("inIdx.r"),g=(0,uY.Ky)("sourceLocG",i-1).concat("inIdx.g"),x=(0,uY.Ky)("sourceLocB",i-1).concat("inIdx.b"),b=(0,uY.Ky)("sourceLocA",i-1).concat("inIdx.a"),y=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${m.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()})));`,v=`vec4(
            getAChannel(${m.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${x.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${b.join()}) : 0.)`,k=r?"":`
      float getBestIndicesAChannel(${p.join()}) {
        return getChannel(getBestIndicesA(${h.join()}),
                                          vec2(${h.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${p.join()}) {
        return getChannel(getA(${h.join()}),
                               vec2(${h.slice(-2).join()}));
      }
      ${k}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${o[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${o[l-2]-1};
        ${a}
        ivec4 srcIdx = ivec4(sourceLocR${d}, sourceLocG${d},
          sourceLocB${d}, sourceLocA${d}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${v};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${y}
          vec4 candidate = ${v};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${"max"===n?"greaterThan":"lessThan"}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function cH(e,t,n,r){let a=[n];if(f.backend_util.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),a,t.shape.length),!(0,f.env)().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let n=[],i=e.texData.get(t.dataId),s=null!==i&&i.isPacked,o=t;s&&n.push(o=e.unpackTensor(t));let[l,u]=f.backend_util.computeOutAndReduceShapes(o.shape,a),c=cm({inputs:{x:o},backend:e,attrs:{shape:[-1,f.util.sizeFromShape(u)]}});n.push(c);let h=function e(t,n,r,a=null){let i=n.shape[0],s=n.shape[1];null!=a&&(i=a.shape[0],s=a.shape[1]);let o=f.backend_util.computeOptimalWindowSize(s),l=new cG({windowSize:o,inSize:s,batchSize:i,outSize:Math.ceil(s/o)},r,null==a),u=[n];null!=a&&u.push(a);let c=t.runWebGLProgram(l,u,"int32");if(1===c.shape[1])return c;let h=e(t,n,r,c);return t.disposeIntermediateTensorInfo(c),h}(e,c,r);n.push(h);let d=cm({inputs:{x:h},backend:e,attrs:{shape:l}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),d}return function e(t,n,r,a=null){let i=null!=a?a.shape:n.shape,s=i[i.length-1],o=new cU(i,f.backend_util.computeOptimalWindowSize(s),r,null==a),l=t.runWebGLProgram(o,null==a?[n]:[n,a],"int32");if(l.shape.length===n.shape.length){let a=e(t,n,r,l);return t.disposeIntermediateTensorInfo(l),a}return l}(e,t,r)}let cj={kernelName:f.ArgMax,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i}=r,s=f.util.parseAxisParam(i,a.shape),o=f.backend_util.getAxesPermutation(s,a.shape.length),l=a,u=[];null!=o&&(u.push(l=cS({inputs:{x:a},backend:n,attrs:{perm:o}})),s=f.backend_util.getInnerMostAxes(s.length,l.shape.length)),f.backend_util.assertAxesAreInnerMostDims("argMax",[s[0]],l.shape.length);let c=cH(n,l,s[0],"max");return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}},cX={kernelName:f.ArgMin,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i}=r,s=f.util.parseAxisParam(i,a.shape),o=f.backend_util.getAxesPermutation(s,a.shape.length),l=a,u=[];null!=o&&(u.push(l=cS({inputs:{x:a},backend:n,attrs:{perm:o}})),s=f.backend_util.getInnerMostAxes(s.length,l.shape.length)),f.backend_util.assertAxesAreInnerMostDims("argMin",[s[0]],l.shape.length);let c=cH(n,l,s[0],"min");return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}},cq=ca({opSnippet:ct.D1+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`}),cK={kernelName:f.Asin,backendName:"webgl",kernelFunc:cq},cQ=ca({opSnippet:ct.D1+"return log(x + sqrt(x * x + 1.0));"}),cY={kernelName:f.Asinh,backendName:"webgl",kernelFunc:cQ},cZ=ca({opSnippet:ct.D1+`
  return atan(x);
`}),cJ={kernelName:f.Atan,backendName:"webgl",kernelFunc:cZ},c0=ci({opSnippet:uK+`
  return atan(a, b);
`,packedOpSnippet:`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+uJ+`
  return result;
`}),c1={kernelName:f.Atan2,backendName:"webgl",kernelFunc:c0},c2=ca({opSnippet:ct.D1+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`}),c3={kernelName:f.Atanh,backendName:"webgl",kernelFunc:c2};class c4{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw Error("Cannot compute positions for average pool.");let i=e.filterWidth,s=e.strideHeight,o=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterHeight,h=e.effectiveFilterWidth,d=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let f="avg"===t,m=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,x="0.0";if(f||(x="-1.0 / 1e-20"),n){this.userCode=`
        const ivec2 strides = ivec2(${s}, ${o});
        const ivec2 pads = ivec2(${d}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${c};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?a?m:g:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(b="avgValue / max(count, 1.0)");let y=4*Math.floor(i/4),v=i%4,k=`
      if (${f}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${o});
      const ivec2 pads = ivec2(${d}, ${p});
      const float initializationValue = ${x};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${x});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${c};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${k}
          }

          int xC = xCCorner + ${y};
          if (${1===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${k}
          } else if (${2===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${k}
          } else if (${3===v}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${k}
          }
        }
        setOutput(${b});
      }
    `}}class c6{constructor(e,t,n,r=!1,a=!1){if(this.variableNames=["x"],"avg"===t&&n)throw Error("Cannot compute positions for average pool.");let i=e.filterWidth,s=e.strideDepth,o=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,c=e.dilationHeight,h=e.dilationWidth,d=e.effectiveFilterDepth,p=e.effectiveFilterHeight,f=e.effectiveFilterWidth,m=e.padInfo.front,g=e.padInfo.top,x=e.padInfo.left;this.outputShape=e.outShape;let b="avg"===t,y="0.0";if(b||(y="-1.0 / 1e-20"),n){this.userCode=`
        const ivec3 strides =
            ivec3(${s}, ${o}, ${l});
        const ivec3 pads = ivec3(${m}, ${g}, ${x});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${d};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${c}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${f};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?a?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${f} +
                      wR * ${f} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===t&&(v="avgValue / max(count, 1.0)");let k=4*Math.floor(i/4),I=i%4,C=`
      if (${b}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${s}, ${o}, ${l});
      const ivec3 pads = ivec3(${m}, ${g}, ${x});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${k}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${k};
            if (${1===I}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${2===I}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${3===I}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${v});
      }
    `}}let c5={kernelName:f.AvgPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t;(0,uG.assertNotComplex)(a,"avgPool");let{filterSize:i,strides:s,pad:o,dimRoundingMode:l}=r;f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(s,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${s} and dilations '1'`);let u=f.backend_util.computePool2DInfo(a.shape,i,s,1,o,l);if(1===u.filterWidth&&1===u.filterHeight&&f.util.arraysEqual(u.inShape,u.outShape))return u1({inputs:{x:a},backend:n});let c=new c4(u,"avg",!1);return n.runWebGLProgram(c,[a],"float32")}},c9={kernelName:f.AvgPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:i,strides:s,pad:o,dimRoundingMode:l,dataFormat:u}=r,c=new c6(f.backend_util.computePool3DInfo(a.shape,i,s,[1,1,1],o,l,u),"avg",!1);return n.runWebGLProgram(c,[a],"float32")}};class c8{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,i=e.dilationHeight,s=e.dilationWidth,o=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=o-1-e.padInfo.top,c=l-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${u}, ${c});
      const float avgMultiplier = float(${1/(t*n)});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${o};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${s}) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class c7{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,i=e.strideHeight,s=e.strideWidth,o=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterDepth,h=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=c-1-e.padInfo.front,f=h-1-e.padInfo.top,m=d-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${f}, ${m});
      const float avgMultiplier = float(${1/(t*n*r)});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${c};
            wD += ${o}) {
          float dyD = float(dyDCorner + wD) / ${a}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${s}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let he={kernelName:f.AvgPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t,{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=r,c=new c7(f.backend_util.computePool3DInfo(i.shape,s,o,[1,1,1],l,u));return n.runWebGLProgram(c,[a],i.dtype)}},ht={kernelName:f.AvgPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t;(0,uG.assertNotComplex)([a,i],"avgPoolGrad");let{filterSize:s,strides:o,pad:l}=r,u=new c8(f.backend_util.computePool2DInfo(i.shape,s,o,1,l));return n.runWebGLProgram(u,[a],i.dtype)}},hn={kernelName:f.BatchMatMul,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{a,b:i}=t,{transposeA:s,transposeB:o}=r;return cT({a,b:i,transposeA:s,transposeB:o,backend:n})}};class hr{constructor(e,t,n,r,a,i){this.outputShape=[],this.variableNames=["x","mean","variance"],f.backend_util.assertAndGetBroadcastShape(e,t),f.backend_util.assertAndGetBroadcastShape(e,n);let s="0.0";null!=r&&(f.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),s="getOffsetAtOutCoords()");let o="1.0";null!=a&&(f.backend_util.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),o="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${s};
        float scale = ${o};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class ha{constructor(e,t,n,r,a,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],f.backend_util.assertAndGetBroadcastShape(e,t),f.backend_util.assertAndGetBroadcastShape(e,n);let s="vec4(0.0)";null!=r&&(f.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),s="getOffsetAtOutCoords()");let o="vec4(1.0)";null!=a&&(f.backend_util.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale"),o="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${s};
        vec4 scale = ${o};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}let hi={kernelName:f.FusedBatchNorm,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:a,variance:i,offset:s,scale:o}=e;f.util.assert(a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),f.util.assert(null==s||a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),f.util.assert(null==o||a.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=n;null==l&&(l=.001);let u=[r,a,i],c=null;null!=s&&(c=s.shape,u.push(s));let h=null;null!=o&&(h=o.shape,u.push(o));let d=(0,f.env)().getBool("WEBGL_PACK_NORMALIZATION")?new ha(r.shape,a.shape,i.shape,c,h,l):new hr(r.shape,a.shape,i.shape,c,h,l);return t.runWebGLProgram(d,u,u[0].dtype)}};class hs{constructor(e){let t;this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let n=(0,uZ.kW)(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let r=function(e){if(1===e)return"sourceLoc";if(e<=6)return ho.slice(0,e).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank),a=e.map((e,t)=>`sourceLoc.${ho[t]} = start[${t}] + coords.${ho[t]};`);t=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${a.join("\n")}
      `,this.userCode=`
      void main() {
        ${t}
        setOutput(getSource(${r}));
      }
    `}}let ho=["x","y","z","w","u","v"];class hl{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=(0,uZ.kW)(this.rank),n=(0,uY.Ky)("coords",this.rank),r=(0,uY.Ky)("sourceLoc",this.rank),a=1===this.rank?"sourceLoc":`vec2(${r.slice(-2).join()})`,i=`getChannel(getSource(${r.join()}), ${a})`,s=`
      result.x = ${i};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${i};
        --${r[this.rank-1]};
      }
    `,o=1===this.rank?"":`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${i};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join("\n");this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${s}
        ${o}
        setOutput(result);
      }
    `}}function hu(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{begin:i,size:s}=r,[o,l]=f.slice_util.parseSliceParams(a,i,s);if(f.slice_util.assertParamsValid(a,o,l),0===f.util.sizeFromShape(l))return n.makeTensorInfo(l,a.dtype,[]);if(n.shouldExecuteOnCPU([a])||"string"===a.dtype){let e=n.texData.get(a.dataId),t=(0,cc.nT)(e.values,o,l,a.shape,a.dtype);return n.makeTensorInfo(l,a.dtype,t)}let{isPacked:u}=n.texData.get(a.dataId),c=f.slice_util.isSliceContinous(a.shape,o,l);if(u||!c){let e=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hl(l):new hs(l),t=[o];return n.runWebGLProgram(e,[a],a.dtype,t)}return n.uploadToGPU(a.dataId),function(e,t,n,r){let a=r.texData.get(e.dataId),i=r.makeTensorInfo(n,e.dtype),s=r.texData.get(i.dataId);Object.assign(s,a),s.refCount=1,s.shape=n,s.dtype=e.dtype;let o=f.slice_util.computeFlatOffset(t,f.util.computeStrides(e.shape));a.slice&&(o+=a.slice.flatOffset),s.slice={flatOffset:o,origDataId:a.slice&&a.slice.origDataId||e.dataId};let l=r.dataRefCount.get(s.slice.origDataId)||1;return r.dataRefCount.set(s.slice.origDataId,l+1),i}(a,o,l,n)}let hc={kernelName:f.Slice,backendName:"webgl",kernelFunc:hu},hh={kernelName:f.BatchToSpaceND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:i,crops:s}=r;f.util.assert(a.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let o=i.reduce((e,t)=>e*t),l=f.backend_util.getReshaped(a.shape,i,o),u=f.backend_util.getPermuted(l.length,i.length),c=f.backend_util.getReshapedPermuted(a.shape,i,o),h=f.backend_util.getSliceBeginCoords(s,i.length),d=f.backend_util.getSliceSize(c,s,i.length),p=[],m=cm({inputs:{x:a},backend:n,attrs:{shape:l}}),g=cS({inputs:{x:m},backend:n,attrs:{perm:u}}),x=cm({inputs:{x:g},backend:n,attrs:{shape:c}}),b=hu({inputs:{x:x},backend:n,attrs:{begin:h,size:d}});return p.push(m),p.push(g),p.push(x),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),b}},hd={kernelName:f.Bincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:i}=t,{size:s}=r,o=n.readSync(a.dataId),l=n.readSync(i.dataId),u=(0,cc.qO)(o,l,i.dtype,i.shape,s);return n.makeTensorInfo([s],i.dtype,u)}},hp=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,hf=`
  return float(int(a.r) & int(b.r));
`,hm={kernelName:f.BitwiseAnd,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r}=e,{a,b:i}=n,s=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS"),o=(0,f.env)().getNumber("WEBGL_VERSION");if(r.shouldExecuteOnCPU([a,i])||1===o){let e=r.texData.get(a.dataId).values,t=r.texData.get(i.dataId).values,[n,s]=(0,cc.XM)(a.shape,i.shape,e,t,a.dtype),o=r.makeTensorInfo(s,a.dtype);return r.texData.get(o.dataId).values=n,o}return t=s?new u0(hp,a.shape,i.shape,!1):new uQ(hf,a.shape,i.shape),r.runWebGLProgram(t,[a,i],a.dtype)}},hg={kernelName:f.BroadcastArgs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{s0:r,s1:a}=t,i=n.readSync(r.dataId),s=n.readSync(a.dataId),o=f.backend_util.assertAndGetBroadcastShape(Array.from(i),Array.from(s));return n.makeTensorInfo([o.length],"int32",Int32Array.from(o))}},hx=ci({opSnippet:"return float(a != b);",cpuKernelImpl:cc.cZ,dtype:"bool"}),hb={kernelName:f.NotEqual,backendName:"webgl",kernelFunc:hx};function hy(e){let{inputs:t,backend:n}=e,{input:r}=t;return u1({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}let hv={kernelName:f.Real,backendName:"webgl",kernelFunc:hy},hk={kernelName:f.Cast,backendName:"webgl",kernelFunc:function e(t){let{inputs:n,backend:r,attrs:a}=t,{x:i}=n,{dtype:s}=a;if("complex64"===s){if("complex64"===i.dtype)return u1({inputs:{x:i},backend:r});let t=f.zeros(i.shape),n=e({inputs:{x:i},backend:r,attrs:{dtype:"float32"}}),a=u3({inputs:{real:n,imag:t},backend:r});return t.dispose(),r.disposeIntermediateTensorInfo(n),a}if("complex64"===i.dtype){let t=hy({inputs:{input:i},backend:r}),n=e({inputs:{x:t},backend:r,attrs:{dtype:s}});return r.disposeIntermediateTensorInfo(t),n}if(!f.util.hasEncodingLoss(i.dtype,s)){let e=u1({inputs:{x:i},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:s}}if(r.shouldExecuteOnCPU([i])){let e=r.texData.get(i.dataId).values,[t,n,a]=(0,cc.cm)(e,i.shape,i.dtype,s);return r.makeTensorInfo(t,n,a)}if("int32"===s)return function(e,t){let n=new ct.l(e.shape,"return float(int(x));"),r=t.runWebGLProgram(n,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(i,r);if("bool"===s){let e=r.makeTensorInfo([],"bool",f.util.getTypedArrayFromDType("bool",1)),t=hx({inputs:{a:i,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${s}`)}},hI="return ceil(x);",hC=ca({opSnippet:hI,packedOpSnippet:hI,cpuKernelImpl:cc.pk}),hw={kernelName:f.Ceil,backendName:"webgl",kernelFunc:hC};class hS{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class hN{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}let hT={kernelName:f.ClipByValue,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{clipValueMin:s,clipValueMax:o}=a;return t=(0,f.env)().getBool("WEBGL_PACK_CLIP")?new hN(i.shape):new hS(i.shape),r.runWebGLProgram(t,[i],i.dtype,[[s],[o]])}};class hA{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function h$(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let hE={kernelName:f.ComplexAbs,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r}=t,a=n.texData.get(r.dataId),i=new hA(r.shape),s=[h$(r,a.complexTensorInfos.real),h$(r,a.complexTensorInfos.imag)];return n.runWebGLProgram(i,s,s[0].dtype)}};class hF{constructor(e){this.outputShape=[],this.outputShape=f.backend_util.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,a=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${a}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join("\n        ")}
      }
    `}}class hR{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=f.backend_util.computeOutShape(e,t);let n=this.outputShape,r=n.length,a=(0,uZ.kW)(r),i=(0,uY.Ky)("coords",r),s=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let o=Array(e.length-1);o[0]=e[0][t];for(let n=1;n<o.length;n++)o[n]=o[n-1]+e[n][t];let l=s[t],u=s.slice(-2),c=s.join(),h=`if (${l} < ${o[0]}) {
        return getChannel(
            getT0(${c}), vec2(${u.join()}));
        }`;for(let e=1;e<o.length;e++){let t=o[e-1];h+=`
        if (${l} < ${o[e]}  && ${l} >= ${o[e-1]}) {
          return getChannel(
            getT${e}(${hD(s,l,t)}),
            vec2(${hD(u,l,t)}));
        }`}let d=o.length,p=o[o.length-1];h+=`
        return getChannel(
          getT${d}(${hD(s,l,p)}),
          vec2(${hD(u,l,p)}));`,this.userCode=`
      float getValue(${s.map(e=>"int "+e)}) {
        ${h}
      }

      void main() {
        ${a} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[r-1]} = ${i[r-1]} + 1;
        if (${i[r-1]} < ${n[r-1]}) {
          result.g = getValue(${i});
        }

        ${i[r-2]} = ${i[r-2]} + 1;
        if (${i[r-2]} < ${n[r-2]}) {
          result.a = getValue(${i});
        }

        ${i[r-1]} = ${i[r-1]} - 1;
        if (${i[r-2]} < ${n[r-2]} &&
            ${i[r-1]} < ${n[r-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function hD(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}function h_(e){let{inputs:t,backend:n}=e,{input:r}=t;return u1({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}let hO={kernelName:f.Imag,backendName:"webgl",kernelFunc:h_};function hM(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r,i=f.util.parseAxisParam(a,t[0].shape)[0],s=t.map(e=>e.shape);f.backend_util.assertParamsConsistent(s,i);let o=f.backend_util.computeOutShape(t.map(e=>e.shape),i);if(0===f.util.sizeFromShape(o))return n.makeTensorInfo(o,t[0].dtype,[]);let l=t.filter(e=>f.util.sizeFromShape(e.shape)>0);return 1===l.length?u1({inputs:{x:l[0]},backend:n}):function e(t,n,r){let a=t[0].dtype;if("complex64"===a){let a=t.map(e=>hy({inputs:{input:e},backend:r})),i=t.map(e=>h_({inputs:{input:e},backend:r})),s=e(a,n,r),o=e(i,n,r),l=u3({inputs:{real:s,imag:o},backend:r});return a.forEach(e=>r.disposeIntermediateTensorInfo(e)),i.forEach(e=>r.disposeIntermediateTensorInfo(e)),r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),l}let i=r.shouldExecuteOnCPU(t);if("string"===a&&(i=!0),i){let e=t.map(e=>{let t=f.util.sizeFromShape(e.shape.slice(n));return cm({inputs:{x:e},backend:r,attrs:{shape:[-1,t]}})}),i=e.map(e=>({vals:r.readSync(e.dataId),shape:e.shape})),s=f.backend_util.computeOutShape(e.map(e=>e.shape),1),o=1===e[0].shape[0],l=(0,cc.n7)(i,s,a,o),u=f.backend_util.computeOutShape(t.map(e=>e.shape),n),c=r.makeTensorInfo(u,a,l);return e.forEach(e=>r.disposeIntermediateTensorInfo(e)),c}let s=t.filter(e=>f.util.sizeFromShape(e.shape)>0),o=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(1===s.length){let e=o?new ct.l(t[0].shape,ct.bl):new cn.cc(t[0].shape,ct.bl);return r.runWebGLProgram(e,t,a)}let l=(0,f.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>l){let t=[];for(let a=0;a<s.length;a+=l){let i=s.slice(a,a+l);t.push(e(i,n,r))}let a=e(t,n,r);for(let e of t)r.disposeIntermediateTensorInfo(e);return a}if(o){let e=new hR(s.map(e=>e.shape),n);return r.runWebGLProgram(e,s,a)}let{tensors2D:u,outShape:c}=function(e,t,n){let r=f.backend_util.computeOutShape(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>cm({inputs:{x:e},attrs:{shape:[-1,f.util.sizeFromShape(e.shape.slice(t))]},backend:n})),outShape:r}}(s,n,r),h=new hF(u.map(e=>e.shape)),d=r.runWebGLProgram(h,u,a);u.forEach(e=>r.disposeIntermediateTensorInfo(e));let p=cm({inputs:{x:d},attrs:{shape:c},backend:r});return r.disposeIntermediateTensorInfo(d),p}(l,i,n)}let hz={kernelName:f.Concat,backendName:"webgl",kernelFunc:hM};class hL{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let i=e.padInfo.top,s=e.padInfo.left,o=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,c=e.dilationWidth,h=e.filterHeight,d=e.filterWidth,p=4*Math.floor(e.inChannels/4),f=e.inChannels%4,m="channelsLast"===e.dataFormat,g="",x="";n&&(g=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,x="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${g}

      const ivec2 strides = ivec2(${o}, ${l});
      const ivec2 pads = ivec2(${i}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${m?3:1}];

        ivec2 xRCCorner =
            ivec2(coords[${m?1:2}], coords[${m?2:3}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${c};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${m}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${1===f}) {

              if (${m}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${2===f}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${m}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${3===f}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${m}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${x}
        setOutput(result);
      }
    `}}class hP{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,a=e.strideDepth,i=e.strideHeight,s=e.strideWidth,o=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,c=e.filterDepth,h=e.filterHeight,d=e.filterWidth,p=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${a}, ${i}, ${s});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${c}; wF++) {
          int xF = xFCorner + wF * ${o};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${1===f}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${2===f}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${3===f}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class hB{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let i=e.padInfo.left,s=e.strideWidth,o=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,c=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)c+=`
           vec4 xTexelC${2*e};
           int xTexelC${2*e}Ready;
           vec4 xTexelC${2*e+1};
           int xTexelC${2*e+1}Ready;
           vec4 xC${e};`;c+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<u;e++)c+=`
           xTexelC${2*e} = vec4(0.0);
           xTexelC${2*e}Ready = 0;
           xTexelC${2*e+1} = vec4(0.0);
           xTexelC${2*e+1}Ready = 0;
           xC${e} = vec4(0.0);`;c+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=2*t;if(c+=`
           xC = xCCorner + ${n*o};
           `,1===s){if(n<u&&(i%2==1?(c+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,1===o&&n>0?c+=`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:c+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):c+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<u)){let e=i%2==0?f.util.nearestLargerEven(o):o;o%2==0&&i%2==1||o%2!=0&&i%2!=1?(c+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,o>1?c+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:c+=`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):1===e?c+=`
                     xC${n+1} = xTexelC${n};
                     `:c+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<u&&(i%2==1?(c+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<u&&(c+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(c+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<u&&(c+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<u&&(c+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<u&&(c+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}c+=`
     }
   
     }
   
     }
   `;let h="",d="";n&&(h=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:a?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,d="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${h}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${c}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${t?"result += getBiasAtOutCoords();":""}
         ${d}
         setOutput(result);
       }
     `}}var hW=n(73821);class hV{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let{dataFormat:n}=t,r=(0,hW.A)(),a="channelsLast"===n,i=a?1:2,s=a?2:3,o=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,l="";for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)l+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${o}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${s}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${a}) {
                  innerDims = vec2(d1, ch);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${2*e+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${r.output} = result;
      }
    `}}function hG(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&1===n&&e[0]>1?[e[0],1]:null}function hU({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:i=null,leakyreluAlpha:s=0,activation:o=null}){let l;let u=e.shape,c=r.texData.get(e.dataId),h=n.inChannels,d=u[0]*u[1]*u[2],p=n.outChannels,m="channelsLast"===n.dataFormat,g=[];if(null!=i){let e=hG(i.shape,m);null!=e&&(i=cm({inputs:{x:i},backend:r,attrs:{shape:e}}),g.push(i))}if(null!=a){let e=hG(a.shape,m);null!=e&&(a=cm({inputs:{x:a},backend:r,attrs:{shape:e}}),g.push(a))}if(!((1===d||1===p)&&h>1e3)&&c.isPacked&&m&&null!=c.texture&&u[2]%2!=0&&f.util.arraysEqual(c.shape.slice(-3),u.slice(-3))){let h=u[0]*u[1]*(u[2]+1),d={dataId:e.dataId,shape:[1,h,n.inChannels],dtype:e.dtype},p=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,f.util.assert(uG.isReshapeFree(c.shape,d.shape),()=>`packed reshape ${c.shape} to ${d.shape} isn't free`);let m=cm({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});g.push(m);let x=cT({a:d,b:m,backend:r,transposeA:!1,transposeB:!1,bias:a,activation:o,preluActivationWeights:i,leakyreluAlpha:s}),b=r.texData.get(x.dataId);f.util.assert(b.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=p,b.shape=n.outShape,(l=u1({inputs:{x:x},backend:r})).shape=n.outShape,g.push(x)}else{let u=n.outHeight*n.outWidth,c=cm({inputs:{x:e},backend:r,attrs:{shape:m?[n.batchSize,u,n.inChannels]:[n.batchSize,n.inChannels,u]}}),h=cm({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=cT({a:m?c:h,b:m?h:c,transposeA:!m,transposeB:!1,backend:r,bias:a,activation:o,preluActivationWeights:i,leakyreluAlpha:s});l=cm({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),g.push(c),g.push(h),g.push(d)}for(let e of g)r.disposeIntermediateTensorInfo(e);return l}function hH({x:e,filter:t,convInfo:n,backend:r,bias:a=null,preluActivationWeights:i=null,leakyreluAlpha:s=0,activation:o=null}){let{filterWidth:l,filterHeight:u,inChannels:c,outWidth:h,outHeight:d,dataFormat:p}=n,m="channelsLast"===p,g=l*u*c,x=d*h,b=[n.batchSize,g,x],y=[];if(null!=i){let e=hG(i.shape,m);null!=e&&(i=cm({inputs:{x:i},backend:r,attrs:{shape:e}}),y.push(i))}if(null!=a){let e=hG(a.shape,m);null!=e&&(a=cm({inputs:{x:a},backend:r,attrs:{shape:e}}),y.push(a))}let v=cm({inputs:{x:t},backend:r,attrs:{shape:[1,g,f.util.sizeFromShape(t.shape)/g]}});y.push(v);let k=new hV(b,n),I=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],C=r.runWebGLProgram(k,[e],"float32",I),w=cm({inputs:{x:C},backend:r,attrs:{shape:b}});y.push(C),y.push(w);let S=null!=a,N=null!=i,T="leakyrelu"===o,A=o?cs(o,!0):null,$=new co(m?w.shape:v.shape,m?v.shape:w.shape,m?[n.batchSize,x,n.outChannels]:[n.batchSize,n.outChannels,x],!0,!1,S,A,N,T),E=m?[w,v]:[v,w];if(a&&E.push(a),N&&E.push(i),T){let e=r.makeTensorInfo([],"float32",f.util.createScalarValue(s,"float32"));E.push(e),y.push(e)}let F=r.runWebGLProgram($,E,"float32"),R=cm({inputs:{x:F},backend:r,attrs:{shape:n.outShape}});for(let e of(y.push(F),y))r.disposeIntermediateTensorInfo(e);return R}let hj={kernelName:f.Conv2D,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i,filter:s}=n,{strides:o,pad:l,dataFormat:u,dilations:c,dimRoundingMode:h}=a,d=f.backend_util.convertConv2DDataFormat(u),p=f.backend_util.computeConv2DInfo(i.shape,s.shape,o,c,l,h,!1,d);if(1===p.filterHeight&&1===p.filterWidth&&1===p.dilationHeight&&1===p.dilationWidth&&1===p.strideHeight&&1===p.strideWidth&&("SAME"===p.padInfo.type||"VALID"===p.padInfo.type))t=hU({x:i,filter:s,convInfo:p,backend:r});else if(p.strideWidth<=2&&"channelsLast"===d&&(0,f.env)().getBool("WEBGL_EXP_CONV")){let e=new hB(p),n=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];t=r.runWebGLProgram(e,[i,s],"float32",n)}else if((0,f.env)().getBool("WEBGL_CONV_IM2COL"))t=hH({x:i,filter:s,convInfo:p,backend:r});else{let e=new hL(p);t=r.runWebGLProgram(e,[i,s],"float32")}let m=cm({inputs:{x:t},backend:r,attrs:{shape:p.outShape}});return r.disposeIntermediateTensorInfo(t),m}};class hX{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,i="channelsLast"===e.dataFormat;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class hq{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,i="channelsLast"===e.dataFormat,s=t-1-e.padInfo.top,o=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${s}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${i?3:1}];

        ivec2 dyCorner = ivec2(coords[${i?1:2}], coords[${i?2:3}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class hK{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.padInfo.front,i=e.padInfo.top,s=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${a};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${s};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class hQ{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,a=e.strideDepth,i=e.strideHeight,s=e.strideWidth,o=t-1-e.padInfo.front,l=n-1-e.padInfo.top,u=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${o}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${a}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${s}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let hY={kernelName:f.Conv2DBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,pad:o,dataFormat:l,dimRoundingMode:u,filterShape:c}=r,h=f.backend_util.convertConv2DDataFormat(l),d=new hX(f.backend_util.computeConv2DInfo(a.shape,c,s,1,o,u,!1,h));return n.runWebGLProgram(d,[a,i],"float32")}};class hZ{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,a=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}let hJ={kernelName:f.Conv2DBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{inputShape:s,strides:o,pad:l,dataFormat:u,dimRoundingMode:c}=r,h=f.backend_util.convertConv2DDataFormat(u),d=f.backend_util.computeConv2DInfo(s,i.shape,o,1,l,c,!1,h);if((0,f.env)().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&"channelsLast"===h){let e=[[d.strideHeight,d.strideWidth]],t=new hZ(d);return n.runWebGLProgram(t,[a,i],"float32",e)}{let e=new hq(d);return n.runWebGLProgram(e,[a,i],"float32")}}},h0={kernelName:f.Conv3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,filter:i}=t,{strides:s,pad:o,dilations:l}=r,u=new hP(f.backend_util.computeConv3DInfo(a.shape,i.shape,s,l,o));return n.runWebGLProgram(u,[a,i],"float32")}},h1={kernelName:f.Conv3DBackpropFilterV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,pad:o,filterShape:l}=r,u=new hK(f.backend_util.computeConv3DInfo(a.shape,l,s,1,o));return n.runWebGLProgram(u,[a,i],"float32")}},h2={kernelName:f.Conv3DBackpropInputV2,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{pad:s,strides:o,inputShape:l}=r,u=new hQ(f.backend_util.computeConv3DInfo(l,i.shape,o,1,s));return n.runWebGLProgram(u,[a,i],"float32")}},h3=ca({opSnippet:cr+`
  return cos(x);
`,packedOpSnippet:`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${uJ}
  return result;
`}),h4={kernelName:f.Cos,backendName:"webgl",kernelFunc:h3},h6=ca({opSnippet:`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`}),h5={kernelName:f.Cosh,backendName:"webgl",kernelFunc:h6};class h9{constructor(e,t,n,r,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,s,o,l]=e,[u]=t,[c,h]=n;this.outputShape=[u,c,h,l];let[d,p]=[`${s-1}.0`,`${o-1}.0`],[f,m,g]=c>1?[`${(s-1)/(c-1)}`,"(y2-y1) * height_ratio",`y1*${d} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${d}`],[x,b,y]=h>1?[`${(o-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${p} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${p}`];this.userCode=`
      const float height_ratio = float(${f});
      const float width_ratio = float(${x});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${m};
        float width_scale = ${b};

        float in_y = ${g};
        if( in_y < 0.0 || in_y > ${d} ) {
          setOutput(float(${a}));
          return;
        }
        float in_x = ${y};
        if( in_x < 0.0 || in_x > ${p} ) {
          setOutput(float(${a}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${"bilinear"===r?1:0} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}let h8={kernelName:f.CropAndResize,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{image:a,boxes:i,boxInd:s}=t,{cropSize:o,method:l,extrapolationValue:u}=r,c=new h9(a.shape,i.shape,o,l,u);return n.runWebGLProgram(c,[a,i,s],"float32")}};(i=o||(o={})).Prod="*",i.Sum="+";class h7{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let a=this.outputShape.length,i=this.op===o.Prod?"1.0":"0.0",s=n?i:`getX(${de(a,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";n?(u=r?`end != ${l-1}`:"end != 0",c=r?"end + 1":"end - 1"):(u=r?`end + pow2 < ${l}`:"end >= pow2",c=r?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${(0,uZ.kW)(a)} coords = getOutputCoords();
        int end = ${dt(a,"coords",this.op)};
        float val = ${s};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${dt(a,"coords",this.op)} = idx;
          val ${this.op}= getX(${de(a,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function de(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function dt(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function dn(e,t,n,r,a,i){let s=t.shape.length,o=f.backend_util.getAxesPermutation([r],s),l=t;null!=o&&(l=cS({inputs:{x:t},backend:n,attrs:{perm:o}}));let u=f.backend_util.getInnerMostAxes(1,s)[0];if(u!==s-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let c=l.shape[u],h=u1({inputs:{x:l},backend:n});for(let t=0;t<=Math.ceil(Math.log2(c))-1;t++){let r=new h7(e,l.shape,!1,i),a=[[t]],s=h;h=n.runWebGLProgram(r,[h],h.dtype,a),n.disposeIntermediateTensorInfo(s)}if(a){let t=new h7(e,l.shape,a,i),r=h;h=n.runWebGLProgram(t,[h],h.dtype),n.disposeIntermediateTensorInfo(r)}if(null!=o){let e=cS({inputs:{x:h},backend:n,attrs:{perm:f.backend_util.getUndoAxesPermutation(o)}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(l),e}return h}let dr={kernelName:f.Cumprod,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,exclusive:s,reverse:l}=r;return dn(o.Prod,a,n,i,s,l)}},da={kernelName:f.Cumsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{axis:i,exclusive:s,reverse:l}=r;return dn(o.Sum,a,n,i,s,l)}},di={kernelName:f.DenseBincount,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,weights:i}=t,{size:s,binaryOutput:o}=r;if(1===a.shape.length){let e=n.readSync(a.dataId),t=n.readSync(i.dataId),r=(0,cc.qO)(e,t,i.dtype,i.shape,s);return n.makeTensorInfo([s],i.dtype,r)}if(2===a.shape.length){let e=n.bufferSync(a),t=n.bufferSync(i),r=(0,cc.cx)(e,t,s,o);return n.makeTensorInfo(r.shape,i.dtype,r.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${a.shape.length}.`)}};class ds{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}let dl={kernelName:f.DepthToSpace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockSize:i,dataFormat:s}=r,o=a.shape[0],l="NHWC"===s?a.shape[1]:a.shape[2],u="NHWC"===s?a.shape[2]:a.shape[3],c="NHWC"===s?a.shape[3]:a.shape[1],h=l*i,d=u*i,p=c/(i*i),f=new ds("NHWC"===s?[o,h,d,p]:[o,p,h,d],i,s);return n.runWebGLProgram(f,[a],a.dtype)}};class du{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let i=e.filterHeight,s=e.filterWidth,o=e.outChannels/e.inChannels,l="",u="";n&&(l=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,u="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${o};
        int q = d2 - d1 * ${o};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${s}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${t?"result += getBiasAtOutCoords();":""}
        ${u}
        setOutput(result);
      }
    `}}class dc{constructor(e,t=!1,n=null,r=!1,a=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=(0,uq.C9)(this.outputShape.length);let i=e.outChannels/e.inChannels,s=e.padInfo.left,o=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,c=e.filterWidth,h=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<c;e++)h+=`
          vec4 xTexelC${2*e};
          int xTexelC${2*e}Ready;
          vec4 xTexelC${2*e+1};
          int xTexelC${2*e+1}Ready;
          vec4 xC${e};`;h+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let e=0;e<c;e++)h+=`
          xTexelC${2*e} = vec4(0.0);
          xTexelC${2*e}Ready = 0;
          xTexelC${2*e+1} = vec4(0.0);
          xTexelC${2*e+1}Ready = 0;
          xC${e} = vec4(0.0);`;h+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(c+1)/2;e++){let t=2*e;if(h+=`
          xC = xCCorner + ${t*l};
          `,1===o){if(t<c&&(s%2==1?(h+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,1===l&&t>0?h+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:h+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):h+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<c)){let e=s%2==0?f.util.nearestLargerEven(l):l;l%2==0&&s%2==1||l%2!=0&&s%2!=1?(h+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,l>1?h+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:h+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):1===e?h+=`
                    xC${t+1} = xTexelC${t};
                    `:h+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<c&&(s%2==1?(h+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<c&&(h+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(h+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<c&&(h+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<c&&(h+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<c&&(h+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}h+=`
    }
  
      }
    `;let d="",p="";n&&(d=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:a?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,p="result = activation(result);"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),a&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${d}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${h}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${t?"result += getBiasAtOutCoords();":""}
        ${p}
        setOutput(result);
      }
    `}}let dh={kernelName:f.DepthwiseConv2dNative,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i,filter:s}=n,{strides:o,pad:l,dilations:u,dimRoundingMode:c}=a,h=u;null==h&&(h=[1,1]),f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(o,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${h}'`);let d=f.backend_util.computeConv2DInfo(i.shape,s.shape,o,h,l,c,!0);t=(0,f.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels==1?new dc(d):new du(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return r.runWebGLProgram(t,[i,s],"float32",p)}};class dd{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,a=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${a};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class dp{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,a=e.strideWidth,i=t-1-e.padInfo.top,s=n-1-e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${a}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${o}; dm++) {
              int d2 = d1 * ${o} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let df={kernelName:f.DepthwiseConv2dNativeBackpropFilter,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,dy:i}=t,{strides:s,dilations:o,pad:l,dimRoundingMode:u,filterShape:c}=r,h=new dd(f.backend_util.computeConv2DInfo(a.shape,c,s,o,l,u,!0));return n.runWebGLProgram(h,[a,i],"float32")}},dm={kernelName:f.DepthwiseConv2dNativeBackpropInput,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,filter:i}=t,{strides:s,dilations:o,pad:l,dimRoundingMode:u,inputShape:c}=r,h=new dp(f.backend_util.computeConv2DInfo(c,i.shape,s,o,l,u,!0));return n.runWebGLProgram(h,[a,i],"float32")}};class dg{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}let dx={kernelName:f.Diag,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{x:r}=t,a=[...r.shape,...r.shape],i=f.util.sizeFromShape(r.shape),s=cm({inputs:{x:r},backend:n,attrs:{shape:[i]}}),o=new dg(i),l=n.runWebGLProgram(o,[s],s.dtype),u=cm({inputs:{x:l},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),u}};class db{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:a,strideWidth:i,filterHeight:s,filterWidth:o,dilationHeight:l,dilationWidth:u}=e,{top:c,left:h}=r;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${i});
      const ivec2 pads = ivec2(${c}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${s}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${o}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}let dy={kernelName:f.Dilation2D,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i,filter:s}=n,{strides:o,pad:l,dilations:u}=a,c=f.backend_util.computeDilation2DInfo(i.shape,s.shape,o,l,"NHWC",u),h=new db(c),d=cm({inputs:{x:t=r.runWebGLProgram(h,[i,s],"float32")},backend:r,attrs:{shape:c.outShape}});return r.disposeIntermediateTensorInfo(t),d}},dv={kernelName:f.Einsum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{equation:a}=r,{allDims:i,summedDims:s,idDims:o}=f.backend_util.decodeEinsumEquation(a,t.length);f.backend_util.checkEinsumDimSizes(i.length,o,t);let{path:l,steps:u}=f.backend_util.getEinsumComputePath(s,o),c=u.length,h=null,d=i.length,p=[];for(let e=0;e<c;++e){for(let r of u[e]){let e;let{permutationIndices:a,expandDims:i}=f.backend_util.getEinsumPermutation(d,o[r]);f.backend_util.isIdentityPermutation(a)?e=t[r]:(e=cS({inputs:{x:t[r]},backend:n,attrs:{perm:a}}),p.push(e));let s=e.shape.slice();for(let e=0;e<i.length;++e)s.splice(i[e],0,1);f.util.arraysEqual(e.shape,s)||(e=cm({inputs:{x:e},backend:n,attrs:{shape:s}}),p.push(e)),null===h?h=e:(h=cd({inputs:{a:e,b:h},backend:n}),p.push(h))}e<c-1&&(l[e]>=0&&(h=cC({inputs:{x:h},backend:n,attrs:{axis:l[e]-(i.length-d),keepDims:!1}}),p.push(h)),d--)}for(let e of p)e!==h&&n.disposeIntermediateTensorInfo(e);return h}},dk=ca({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),dI={kernelName:f.Elu,backendName:"webgl",kernelFunc:dk},dC=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,dw={kernelName:f.EluGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n}=e,{dy:r,y:a}=t,i=(0,f.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new u0(dC,r.shape,a.shape):new uQ("return (b >= 0.0) ? a : a * (b + 1.0);",r.shape,a.shape);return n.runWebGLProgram(i,[r,a],r.dtype)}},dS=ci({opSnippet:"return float(a == b);",packedOpSnippet:`
  return vec4(equal(a, b));
`,dtype:"bool",cpuKernelImpl:cc.gv}),dN={kernelName:f.Equal,backendName:"webgl",kernelFunc:dS},dT=ca({opSnippet:`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${f.backend_util.ERF_P};
  float a1 = ${f.backend_util.ERF_A1};
  float a2 = ${f.backend_util.ERF_A2};
  float a3 = ${f.backend_util.ERF_A3};
  float a4 = ${f.backend_util.ERF_A4};
  float a5 = ${f.backend_util.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`}),dA={kernelName:f.Erf,backendName:"webgl",kernelFunc:dT},d$=ca({opSnippet:cr+`
  return exp(x);
`,packedOpSnippet:`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:cc.aX,dtype:"float32"}),dE={kernelName:f.Exp,backendName:"webgl",kernelFunc:d$};function dF(e){let{inputs:t,attrs:n,backend:r}=e,{dim:a}=n,{input:i}=t,s=i.shape.length,o=i.shape.slice(),l=a;return a<0&&(f.util.assert(-(s+1)<=a,()=>`Axis must be in the interval [${-(s+1)}, ${s}]`),l=s+a+1),o.splice(l,0,1),cm({inputs:{x:i},backend:r,attrs:{shape:o}})}let dR={kernelName:f.ExpandDims,backendName:"webgl",kernelFunc:dF},dD="return exp(x) - 1.0;",d_=ca({opSnippet:dD,packedOpSnippet:dD,cpuKernelImpl:cc.tx}),dO={kernelName:f.Expm1,backendName:"webgl",kernelFunc:d_};class dM{constructor(e,t,n){let r;this.variableNames=["real","imag"];let a=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,s=n?`${a}.0`:"1.0";if("real"===e)r="return real * expR - imag * expI;";else if("imag"===e)r="return real * expI + imag * expR;";else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${r}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${a});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${a}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${s};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function dz(e,t,n){let r=n.texData.get(e.dataId),a=f.util.sizeFromShape(e.shape),i=e.shape[e.shape.length-1],s=cm({inputs:{x:e},backend:n,attrs:{shape:[a/i,i]}}),o=s.shape,l=new dM("real",o,t),u=new dM("imag",o,t),c=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:o},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:o}],h=n.runWebGLProgram(l,c,"float32"),d=n.runWebGLProgram(u,c,"float32"),p=u3({inputs:{real:h,imag:d},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(d);let m=cm({inputs:{x:p},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(p),m}let dL={kernelName:f.FFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{input:r}=t;return dz(r,!1,n)}};class dP{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function dB(e){let{backend:t,attrs:n}=e,{shape:r,value:a}=n,{dtype:i}=n;if("string"===(i=i||f.util.inferDtype(a))){let e=f.util.getArrayFromDType(i,f.util.sizeFromShape(r));return e.fill(a),t.makeTensorInfo(r,i,e)}{let e=new dP(r,a),n=[[a]];return t.runWebGLProgram(e,[],i,n)}}let dW={kernelName:f.Fill,backendName:"webgl",kernelFunc:dB};class dV{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let dG={kernelName:f.FlipLeftRight,backendName:"webgl",kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=new dV(n.shape);return t.runWebGLProgram(r,[n],n.dtype)}},dU="return floor(x);",dH=ca({opSnippet:dU,packedOpSnippet:dU,cpuKernelImpl:cc.MZ}),dj={kernelName:f.Floor,backendName:"webgl",kernelFunc:dH},dX=ci({opSnippet:`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,packedOpSnippet:`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,dtype:"int32"}),dq={kernelName:f.FloorDiv,backendName:"webgl",kernelFunc:dX};var dK=n(77275);class dQ{constructor(e){this.variableNames=["A"];let t=(0,hW.A)(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class dY{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=(0,hW.A)(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}let dZ={kernelName:f.FromPixels,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:a}=e,{pixels:i}=t,{numChannels:s}=a,o="undefined"!=typeof HTMLVideoElement&&i instanceof HTMLVideoElement,l="undefined"!=typeof HTMLImageElement&&i instanceof HTMLImageElement,[u,c]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],h=[c,u],d=[c,u,s];if(l||o){let e=(0,f.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==r||e!==dJ)&&(dJ=e,r=document.createElement("canvas").getContext("2d",{willReadFrequently:dJ})),r.canvas.width=u,r.canvas.height=c,r.drawImage(i,0,0,u,c),i=r.canvas}let p=n.makeTensorInfo(h,"int32");n.texData.get(p.dataId).usage=dK.v2.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),i);let m=(0,f.env)().getBool("WEBGL_PACK")?new dY(d):new dQ(d),g=n.runWebGLProgram(m,[p],"int32");return n.disposeData(p.dataId),g}},dJ=(0,f.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU"),d0={kernelName:f.FusedConv2D,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i,filter:s,bias:o,preluActivationWeights:l}=n,{strides:u,pad:c,dataFormat:h,dilations:d,dimRoundingMode:p,activation:m,leakyreluAlpha:g}=a,x=f.backend_util.convertConv2DDataFormat(h),b=f.backend_util.computeConv2DInfo(i.shape,s.shape,u,d,c,p,!1,x),y=[],v=null!=o,k=null!=l,I="leakyrelu"===m,C=()=>{let e=[i,s],t=(e,t)=>{if("NCHW"===t&&1===e.shape.length&&1!==e.shape[0]){let t=cm({inputs:{x:e},backend:r,attrs:{shape:[e.shape[0],1,1]}});return y.push(t),t}return e};if(v&&e.push(t(o,h)),k&&e.push(t(l,h)),I){let t=r.makeTensorInfo([],"float32",f.util.createScalarValue(g,"float32"));e.push(t),y.push(t)}return e};if(1===b.filterHeight&&1===b.filterWidth&&1===b.dilationHeight&&1===b.dilationWidth&&1===b.strideHeight&&1===b.strideWidth&&("SAME"===b.padInfo.type||"VALID"===b.padInfo.type))t=hU({x:i,filter:s,convInfo:b,backend:r,bias:o,activation:m,preluActivationWeights:l,leakyreluAlpha:g});else if(b.strideWidth<=2&&"channelsLast"===x&&(0,f.env)().getBool("WEBGL_EXP_CONV")){let e=new hB(b,v,m?cs(m,!0):null,k,I),n=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],a=C();t=r.runWebGLProgram(e,a,"float32",n)}else if((0,f.env)().getBool("WEBGL_CONV_IM2COL"))t=hH({x:i,filter:s,convInfo:b,backend:r,bias:o,activation:m,preluActivationWeights:l,leakyreluAlpha:g});else{let e=new hL(b,v,m?cs(m,!1):null,k,I),n=C();t=r.runWebGLProgram(e,n,"float32")}let w=cm({inputs:{x:t},backend:r,attrs:{shape:b.outShape}});return y.push(t),y.forEach(e=>r.disposeIntermediateTensorInfo(e)),w}},d1={kernelName:f.FusedDepthwiseConv2D,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i,filter:s,bias:o,preluActivationWeights:l}=n,{strides:u,pad:c,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:m}=a,g=[],x=h;null==x&&(x=[1,1]),f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(u,x),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${x}'`);let b=f.backend_util.computeConv2DInfo(i.shape,s.shape,u,x,c,d,!0),y=(0,f.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&b.strideWidth<=2&&b.outChannels/b.inChannels==1,v=p?cs(p,y):null,k=[i,s],I=null!=o,C=null!=l,w="leakyrelu"===p;if(I&&k.push(o),C&&k.push(l),w){let e=r.makeTensorInfo([],"float32",f.util.createScalarValue(m,"float32"));k.push(e),g.push(e)}t=y?new dc(b,I,v,C,w):new du(b,I,v,C,w);let S=[[b.padInfo.top,b.padInfo.left],[b.strideHeight,b.strideWidth],[b.dilationHeight,b.dilationWidth],[b.inHeight,b.inWidth]],N=r.runWebGLProgram(t,k,"float32",S);return g.forEach(e=>r.disposeIntermediateTensorInfo(e)),N}};class d2{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=["x","indices"],this.outputShape=n;let a=(0,uZ.kW)(n.length),i=`
    int index;`;for(let e=0;e<this.sliceDim;e++)i+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${a} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}let d3={kernelName:f.GatherNd,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{params:r,indices:a}=t,i=a.shape,s=i[i.length-1],o=f.util.sizeFromShape(r.shape),[l,u,c,h]=f.backend_util.prepareAndValidate(r,a),d=cm({inputs:{x:a},backend:n,attrs:{shape:[u,s]}}),p=cm({inputs:{x:r},backend:n,attrs:{shape:[f.util.sizeFromShape(r.shape)/c,c]}});if(n.shouldExecuteOnCPU([r,a])||"string"===r.dtype){let e=n.readSync(a.dataId),t=n.bufferSync(r),i=(0,cc.TD)(e,t,r.dtype,u,s,c,h,r.shape,o);return n.makeTensorInfo(l,r.dtype,i.values)}let m=new d2(s,h,[u,c],r.shape),g=n.runWebGLProgram(m,[p,d],p.dtype),x=cm({inputs:{x:g},backend:n,attrs:{shape:l}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(g),x}};class d4{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let n=(0,uZ.kW)(this.rank),r=function(e,t){let n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let t=0;t<e.length;t++)2===t?r.push("index"):r.push(`${n[t]}`);return r.join()}(e,0);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}function d6(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,indices:i}=t,{axis:s,batchDims:o}=r,l=f.util.parseAxisParam(s,a.shape)[0];if((0,f.env)().get("DEBUG")){let e=n.readSync(i.dataId),t=a.shape[l];for(let n=0;n<e.length;++n){let r=e[n];f.util.assert(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let u=f.backend_util.segment_util.collectGatherOpShapeInfo(a,i,l,o),c=f.util.sizeFromShape(i.shape),h=[],d=cm({inputs:{x:a},backend:n,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),p=cm({inputs:{x:i},backend:n,attrs:{shape:[u.batchSize,c/u.batchSize]}});h.push(d),h.push(p);let m=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(n.shouldExecuteOnCPU([a,i])||"string"===a.dtype){let e=n.bufferSync(p),t=n.bufferSync(d),r=(0,cc.m$)(t,e,m);return h.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u.outputShape,r.dtype,r.values)}let g=new d4(d.shape,m),x=n.runWebGLProgram(g,[d,p],d.dtype);h.push(x);let b=cm({inputs:{x:x},backend:n,attrs:{shape:u.outputShape}});return h.forEach(e=>n.disposeIntermediateTensorInfo(e)),b}let d5={kernelName:f.GatherV2,backendName:"webgl",kernelFunc:d6},d9=ci({opSnippet:"return float(a > b);",packedOpSnippet:`
  return vec4(greaterThan(a, b));
`,cpuKernelImpl:cc.B_,dtype:"bool"}),d8={kernelName:f.Greater,backendName:"webgl",kernelFunc:d9},d7=ci({opSnippet:"return float(a >= b);",packedOpSnippet:`
  return vec4(greaterThanEqual(a, b));
`,dtype:"bool",cpuKernelImpl:cc.ji}),pe={kernelName:f.GreaterEqual,backendName:"webgl",kernelFunc:d7},pt={kernelName:f.IFFT,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{input:r}=t;return dz(r,!0,n)}},pn=ca({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),pr={kernelName:f.IsFinite,backendName:"webgl",kernelFunc:pn},pa=ca({opSnippet:"return float(isinf(x));",dtype:"bool"}),pi={kernelName:f.IsInf,backendName:"webgl",kernelFunc:pa},ps=ca({opSnippet:"return float(isnan(x));",dtype:"bool"}),po={kernelName:f.IsNan,backendName:"webgl",kernelFunc:ps},pl=ci({opSnippet:"return float(a < b);",packedOpSnippet:`
  return vec4(lessThan(a, b));
`,cpuKernelImpl:cc.kY,dtype:"bool"}),pu={kernelName:f.Less,backendName:"webgl",kernelFunc:pl},pc=ci({opSnippet:"return float(a <= b);",packedOpSnippet:`
  return vec4(lessThanEqual(a, b));
`,cpuKernelImpl:cc.Rn,dtype:"bool"}),ph={kernelName:f.LessEqual,backendName:"webgl",kernelFunc:pc},pd={kernelName:f.LinSpace,backendName:"webgl",kernelFunc:function(e){let{backend:t,attrs:n}=e,{start:r,stop:a,num:i}=n,s=(0,cc.PQ)(r,a,i);return t.makeTensorInfo([s.length],"float32",s)}},pp=ca({opSnippet:cr+`
  return x < 0.0 ? 0./0. : log(x);
`,packedOpSnippet:`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,cpuKernelImpl:cc.Sd}),pf={kernelName:f.Log,backendName:"webgl",kernelFunc:pp},pm=ca({opSnippet:cr+`
  return log(1.0 + x);
`}),pg={kernelName:f.Log1p,backendName:"webgl",kernelFunc:pm},px=ci({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,dtype:"bool"}),pb={kernelName:f.LogicalAnd,backendName:"webgl",kernelFunc:px},py=ca({opSnippet:"return float(!(x >= 1.0));"}),pv={kernelName:f.LogicalNot,backendName:"webgl",kernelFunc:py},pk=ci({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,dtype:"bool"}),pI={kernelName:f.LogicalOr,backendName:"webgl",kernelFunc:pk};class pC{constructor(e,t,n,r,a){let i;this.variableNames=["x"],this.outputShape=[];let s=e[3]-1;this.outputShape=e;let o=`float(${n}) + float(${r}) * sum`;i=.5===a?`inversesqrt(${o})`:1===a?`1.0/(${o})`:`exp(log(${o}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${t}; j <= ${t}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${s}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${i};
        setOutput(val);
      }
    `}}class pw{constructor(e,t,n,r,a){let i;this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let s=e[3]-1;this.outputShape=e;let o=`float(${n}) + float(${r}) * sum`;i=.5===a?`inversesqrt(${o})`:1===a?`1.0/(${o})`:`exp(log(${o}) * float(-${a}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${t};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${t}; j <= ${t}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${s}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${i};
        setOutput(result);
      }
    `}}let pS={kernelName:f.LRN,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{depthRadius:i,bias:s,alpha:o,beta:l}=r,u=(0,f.env)().getBool("WEBGL_PACK_NORMALIZATION")?new pw(a.shape,i,s,o,l):new pC(a.shape,i,s,o,l);return n.runWebGLProgram(u,[a],a.dtype)}};class pN{constructor(e,t,n,r,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${a})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${a});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}let pT={kernelName:f.LRNGrad,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a,y:i,dy:s}=t,{depthRadius:o,bias:l,alpha:u,beta:c}=r,h=new pN(a.shape,o,l,u,c);return n.runWebGLProgram(h,[a,i,s],a.dtype)}};function pA(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{reductionIndices:s,keepDims:o}=a,l=i.shape.length,u=f.util.parseAxisParam(s,i.shape),c=u,h=f.backend_util.getAxesPermutation(c,l),d=null!=h,p=r.shouldExecuteOnCPU([i]),m=i;if(d){if(p){let e=r.texData.get(m.dataId).values,t=Array(l);for(let e=0;e<t.length;e++)t[e]=i.shape[h[e]];let n=(0,cc.Fv)(e,i.shape,i.dtype,h,t);m=r.makeTensorInfo(t,i.dtype),r.texData.get(m.dataId).values=n}else m=cI(i,h,r);c=f.backend_util.getInnerMostAxes(c.length,l)}f.backend_util.assertAxesAreInnerMostDims("max",c,l);let[g,x]=f.backend_util.computeOutAndReduceShapes(m.shape,c),b=g;if(o&&(b=f.backend_util.expandShapeToKeepDim(g,u)),p){let e=r.texData.get(m.dataId).values,n=(0,cc.$O)(e,f.util.sizeFromShape(x),b,i.dtype);t=r.makeTensorInfo(b,i.dtype),r.texData.get(t.dataId).values=n}else t=function(e,t,n,r){let a=f.util.sizeFromShape(t),i=f.util.sizeFromShape(e.shape),s=cm({inputs:{x:e},attrs:{shape:[i/a,a]},backend:r}),o=cy(s,e.dtype,"max",r),l=cm({inputs:{x:o},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),l}(m,x,b,r);return d&&r.disposeIntermediateTensorInfo(m),t}let p$={kernelName:f.Max,backendName:"webgl",kernelFunc:pA},pE=ci({opSnippet:uK+`
  return max(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+uJ+`
  return result;
`,cpuKernelImpl:cc.nL}),pF={kernelName:f.Maximum,backendName:"webgl",kernelFunc:pE},pR={kernelName:f.MaxPool,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t;(0,uG.assertNotComplex)(a,"maxPool");let{filterSize:i,strides:s,pad:o,dimRoundingMode:l}=r;f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(s,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '1'`);let u=f.backend_util.computePool2DInfo(a.shape,i,s,1,o,l);if(1===u.filterWidth&&1===u.filterHeight&&f.util.arraysEqual(u.inShape,u.outShape))return u1({inputs:{x:a},backend:n});let c=new c4(u,"max",!1);return n.runWebGLProgram(c,[a],a.dtype)}},pD={kernelName:f.MaxPool3D,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{filterSize:i,strides:s,pad:o,dataFormat:l,dimRoundingMode:u}=r,c=new c6(f.backend_util.computePool3DInfo(a.shape,i,s,[1,1,1],o,u,l),"max",!1);return n.runWebGLProgram(c,[a],a.dtype)}};class p_{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,a=e.effectiveFilterHeight,i=e.effectiveFilterWidth,s=a-1-e.padInfo.top,o=i-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${s}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${a};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${a*i-1} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class pO{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,a=e.dilationDepth,i=e.dilationHeight,s=e.dilationWidth,o=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=o-1-e.padInfo.front,h=l-1-e.padInfo.top,d=u-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${h}, ${d});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${o};
           wD += ${a}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${s}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${o*l*u-1} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}let pM={kernelName:f.MaxPool3DGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i}=t,{filterSize:s,strides:o,pad:l,dimRoundingMode:u}=r,c=f.backend_util.computePool3DInfo(i.shape,s,o,[1,1,1],l,u),h=new c6(c,"max",!0),d=n.runWebGLProgram(h,[i],i.dtype),p=new pO(c),m=n.runWebGLProgram(p,[a,d],i.dtype);return n.disposeIntermediateTensorInfo(d),m}},pz={kernelName:f.MaxPoolGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{dy:a,input:i,output:s}=t;(0,uG.assertNotComplex)([i,s],"maxPoolGrad");let{filterSize:o,strides:l,pad:u,dimRoundingMode:c}=r,h=f.backend_util.computePool2DInfo(i.shape,o,l,1,u,c),d=new c4(h,"max",!0),p=n.runWebGLProgram(d,[i],i.dtype),m=new p_(h),g=n.runWebGLProgram(m,[a,p],i.dtype);return n.disposeIntermediateTensorInfo(p),g}},pL={kernelName:f.MaxPoolWithArgmax,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:a,strides:i,pad:s,includeBatchInIndex:o}=t;f.util.assert(4===r.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];f.util.assert(f.backend_util.eitherStridesOrDilationsAreOne(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);let u=f.backend_util.computePool2DInfo(r.shape,a,i,l,s),[c,h]=function(e,t,n,r){let a=new c4(n,"max",!1),i=r.runWebGLProgram(a,[e],"float32");return a=new c4(n,"max",!0,!0,t),[i,r.runWebGLProgram(a,[e],"float32")]}(r,o,u,n);return[c,h]}},pP={kernelName:f.Mean,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:a,axis:i}=t,s=r.shape.length,o=f.util.parseAxisParam(i,r.shape),l=o,u=f.backend_util.getAxesPermutation(l,s),c=null!=u,h=n.shouldExecuteOnCPU([r]),d=[],p=r;if(c){if(h){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let a=(0,cc.Fv)(e,r.shape,r.dtype,u,t);p=n.makeTensorInfo(t,r.dtype),n.texData.get(p.dataId).values=a}else p=cI(r,u,n);d.push(p),l=f.backend_util.getInnerMostAxes(l.length,s)}f.backend_util.assertAxesAreInnerMostDims("sum",l,s);let[m,g]=f.backend_util.computeOutAndReduceShapes(p.shape,l),x=m;a&&(x=f.backend_util.expandShapeToKeepDim(m,o));let b=function(e,t,n,r){let a=f.util.sizeFromShape(t),i=f.util.sizeFromShape(e.shape),s=cm({inputs:{x:e},attrs:{shape:[i/a,a]},backend:r}),o=cy(s,"float32","mean",r),l=cm({inputs:{x:o},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(o),l}(p,g,x,n);for(let e of d)n.disposeIntermediateTensorInfo(e);return b}},pB={kernelName:f.Min,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{axis:s,keepDims:o}=a,l=i.shape.length,u=f.util.parseAxisParam(s,i.shape),c=u,h=f.backend_util.getAxesPermutation(c,l),d=i;null!=h&&(d=cS({inputs:{x:i},backend:r,attrs:{perm:h}}),c=f.backend_util.getInnerMostAxes(c.length,i.shape.length)),f.backend_util.assertAxesAreInnerMostDims("min",c,l);let[p,m]=f.backend_util.computeOutAndReduceShapes(d.shape,c),g=cm({inputs:{x:d},backend:r,attrs:{shape:[-1,f.util.sizeFromShape(m)]}}),x=cy(g,g.dtype,"min",r);return t=o?cm({inputs:{x:x},backend:r,attrs:{shape:f.backend_util.expandShapeToKeepDim(p,u)}}):cm({inputs:{x:x},backend:r,attrs:{shape:p}}),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(x),null!=h&&r.disposeIntermediateTensorInfo(d),t}},pW=ci({opSnippet:uK+`
  return min(a, b);
`,packedOpSnippet:`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+uJ+`
  return result;
`,cpuKernelImpl:cc.r}),pV={kernelName:f.Minimum,backendName:"webgl",kernelFunc:pW};class pG{constructor(e,t,n){this.variableNames=["x"],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,uZ.kW)(r),i=t.map(e=>e[0]).join(","),s=t.map((t,n)=>t[0]+e[n]).join(","),o=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r),l="reflect"===n?0:1;if(1===r){this.userCode=`
        int start = ${i};
        int end = ${s};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${i});
      ${a} end = ${a}(${s});

      void main() {
        ${a} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${a} coords = outC - start;
        setOutput(getX(${o}));
      }
    `}}class pU{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,uZ.kW)(r),i=t.map(e=>e[0]).join(","),s=t.map((t,n)=>t[0]+e[n]).join(","),o=(0,uY.Ky)("rc",r),l=(0,uY.Ky)("source",r),u=`${o[r-1]} < ${this.outputShape[r-1]}`,c=1===r?"source":`vec2(${l.slice(-2).join()})`,h="reflect"===n?0:1,d="";if(1===r){let e=`
        ${a} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;d=`
        ${a} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${c});
        ${o[r-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${c});
        }
      `}else{let e=`
        ${a} source = rc;
        ${a} lt = ${a}(lessThan(source, start));
        ${a} gte = ${a}(greaterThanEqual(source, end));
        ${a} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;d=`
        ${a} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${l.join()}), ${c});
        ${o[r-1]} += 1;
        if(${u}) {
          ${e}
          result[1] = getChannel(getX(${l.join()}), ${c});
        }
        rc = outputLoc;
        ${o[r-2]} += 1;
        if(${o[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${l.join()}), ${c});
          ${o[r-1]} += 1;
          if(${u}) {
            ${e}
            result[3] = getChannel(getX(${l.join()}), ${c});
          }
        }
      `}this.userCode=`
      const ${a} start = ${a}(${i});
      const ${a} end = ${a}(${s});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}}let pH={kernelName:f.MirrorPad,backendName:"webgl",kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:a,mode:i}=n,s=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new pU(r.shape,a,i):new pG(r.shape,a,i);return t.runWebGLProgram(s,[r],r.dtype)}},pj=ci({opSnippet:`if (b == 0.0) return NAN;
  return mod(a, b);`,packedOpSnippet:`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+uJ+`
  return result;
`}),pX={kernelName:f.Mod,backendName:"webgl",kernelFunc:pj};class pq{constructor(e,t,n){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}let pK=ci({opSnippet:`
if (a == b) {
  return 1.0;
};
return a / b;`,packedOpSnippet:`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,checkOutOfBounds:!0}),pQ={kernelName:f.RealDiv,backendName:"webgl",kernelFunc:pK},pY="return a - b;",pZ=ci({opSnippet:pY,packedOpSnippet:pY,supportsComplex:!0,cpuKernelImpl:cc.kI}),pJ={kernelName:f.Sub,backendName:"webgl",kernelFunc:pZ};function p0(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{dim:i}=r,s=f.util.parseAxisParam([i],a.shape),o=pA({inputs:{x:a},backend:n,attrs:{reductionIndices:s,keepDims:!1}}),l=f.backend_util.expandShapeToKeepDim(o.shape,s),u=cm({inputs:{x:o},backend:n,attrs:{shape:l}}),c=pZ({inputs:{a:a,b:u},backend:n}),h=d$({inputs:{x:c},backend:n}),d=cC({inputs:{x:h},backend:n,attrs:{axis:s,keepDims:!1}}),p=cm({inputs:{x:d},backend:n,attrs:{shape:l}}),m=pK({inputs:{a:h,b:p},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(p),m}let p1={kernelName:f.Softmax,backendName:"webgl",kernelFunc:p0},p2={kernelName:f.Multinomial,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{logits:a}=t,{numSamples:i,seed:s,normalized:o}=r,l=o?a:p0({inputs:{logits:a},backend:n,attrs:{dim:a.shape.length-1}}),u=new pq(l.shape[0],l.shape[1],i),c=n.runWebGLProgram(u,[l],"int32",[[s]]);return o||n.disposeIntermediateTensorInfo(l),c}},p3=ct.D1+`
  return -x;
`,p4=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,p6={kernelName:f.Neg,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r}=e,{x:a}=n;if(r.shouldExecuteOnCPU([a])){let e=r.texData.get(a.dataId),[t,n]=(0,cc.Bo)(e.values,a.shape,a.dtype);return r.makeTensorInfo(n,a.dtype,t)}return t=(0,f.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new cn.cc(a.shape,p4):new ct.l(a.shape,p3),r.runWebGLProgram(t,[a],a.dtype)}},p5=f.kernel_impls.nonMaxSuppressionV3Impl,p9={kernelName:f.NonMaxSuppressionV3,backendName:"webgl",kernelFunc:function(e){f.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l}=r,{selectedIndices:u}=p5(n.readSync(a.dataId),n.readSync(i.dataId),s,o,l);return n.makeTensorInfo([u.length],"int32",new Int32Array(u))}},p8=f.kernel_impls.nonMaxSuppressionV4Impl,p7={kernelName:f.NonMaxSuppressionV4,backendName:"webgl",kernelFunc:function(e){f.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l,padToMaxOutputSize:u}=r,{selectedIndices:c,validOutputs:h}=p8(n.readSync(a.dataId),n.readSync(i.dataId),s,o,l,u);return[n.makeTensorInfo([c.length],"int32",new Int32Array(c)),n.makeTensorInfo([],"int32",new Int32Array([h]))]}},fe=f.kernel_impls.nonMaxSuppressionV5Impl,ft={kernelName:f.NonMaxSuppressionV5,backendName:"webgl",kernelFunc:function(e){f.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:n,attrs:r}=e,{boxes:a,scores:i}=t,{maxOutputSize:s,iouThreshold:o,scoreThreshold:l,softNmsSigma:u}=r,{selectedIndices:c,selectedScores:h}=fe(n.readSync(a.dataId),n.readSync(i.dataId),s,o,l,u);return[n.makeTensorInfo([c.length],"int32",new Int32Array(c)),n.makeTensorInfo([h.length],"float32",new Float32Array(h))]}};class fn{constructor(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}}let fr={kernelName:f.OneHot,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:a}=t,{dtype:i,depth:s,onValue:o,offValue:l}=r,u=f.util.sizeFromShape(a.shape),c=new fn(u,s,o,l),h=cm({inputs:{x:a},backend:n,attrs:{shape:[u]}}),d=n.runWebGLProgram(c,[h],i);n.disposeIntermediateTensorInfo(h);let p=cm({inputs:{x:d},backend:n,attrs:{shape:[...a.shape,s]}});return n.disposeIntermediateTensorInfo(d),p}};function fa(e){let{inputs:t,backend:n}=e,{x:r}=t;if("complex64"!==r.dtype)return dB({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:n});{let e=hy({inputs:{input:r},backend:n}),t=fa({inputs:{x:e},backend:n}),a=h_({inputs:{input:r},backend:n}),i=fa({inputs:{x:a},backend:n}),s=u3({inputs:{real:t,imag:i},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(i),s}}let fi={kernelName:f.ZerosLike,backendName:"webgl",kernelFunc:fa},fs={kernelName:f.OnesLike,backendName:"webgl",kernelFunc:function e(t){let{inputs:n,backend:r}=t,{x:a}=n;if("string"===a.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==a.dtype)return dB({attrs:{shape:a.shape,dtype:a.dtype,value:1},backend:r});{let t=hy({inputs:{input:a},backend:r}),n=e({inputs:{x:t},backend:r}),i=h_({inputs:{input:a},backend:r}),s=fa({inputs:{x:i},backend:r}),o=u3({inputs:{real:n,imag:s},backend:r});return r.disposeIntermediateTensorInfo(t),r.disposeIntermediateTensorInfo(n),r.disposeIntermediateTensorInfo(i),r.disposeIntermediateTensorInfo(s),o}}},fo={kernelName:f.Pack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{axis:a}=r;if(1===t.length)return dF({inputs:{input:t[0]},backend:n,attrs:{dim:a}});let i=t[0].shape,s=t[0].dtype;t.forEach(e=>{f.util.assertShapesMatch(i,e.shape,"All tensors passed to stack must have matching shapes"),f.util.assert(s===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let o=[],l=hM({inputs:t.map(e=>{let t=dF({inputs:{input:e},backend:n,attrs:{dim:a}});return o.push(t),t}),backend:n,attrs:{axis:a}});return o.forEach(e=>n.disposeIntermediateTensorInfo(e)),l}};class fl{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,uZ.kW)(r),i=t.map(e=>e[0]).join(","),s=t.map((t,n)=>t[0]+e[n]).join(","),o=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);if(1===r){this.userCode=`
        int start = ${i};
        int end = ${s};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${a} start = ${a}(${i});
      ${a} end = ${a}(${s});

      void main() {
        ${a} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${a} coords = outC - start;
          setOutput(getX(${o}));
        }
      }
    `}}class fu{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,a=(0,uZ.kW)(r),i=t.map(e=>e[0]).join(","),s=t.map((t,n)=>t[0]+e[n]).join(","),o=(0,uY.Ky)("rc",r),l=(0,uY.Ky)("source",r),u=`${o[r-1]} < ${this.outputShape[r-1]}`,c=1===r?"source":`vec2(${l.slice(-2).join()})`,h=[`${a} rc = outputLoc;`,`${o[r-1]} += 1;
       if(${u}) {
      `,1===r?"":`}
       rc = outputLoc;
       ${o[r-2]} += 1;
       if(${o[r-2]} < ${this.outputShape[r-2]}) {`,1===r?"":`  ${o[r-1]} += 1;
         if(${u}) {`],d=1===r?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="";for(let e=0,t=1===r?2:4;e<t;e++)p+=`
        ${h[e]}
        if (${d}) {
          result[${e}] = float(value);
        } else {
          ${a} source = rc - start;
          result[${e}] = getChannel(getX(${l.join()}), ${c});
        }
      `;p+=1===r?"} ":"}}",this.userCode=`
      const ${a} start = ${a}(${i});
      const ${a} end = ${a}(${s});

      void main() {
        ${a} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}let fc=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{paddings:i,constantValue:s}=r;if(0===f.util.sizeFromShape(a.shape))return dB({backend:n,attrs:{shape:i.map((e,t)=>e[0]+a.shape[t]+e[1]),value:s,dtype:a.dtype}});let o=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fu(a.shape,i,s):new fl(a.shape,i,s),l=[[s]];return n.runWebGLProgram(o,[a],a.dtype,l)},fh={kernelName:f.PadV2,backendName:"webgl",kernelFunc:fc},fd=ci({opSnippet:`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,packedOpSnippet:`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+uJ+`
  return result;
`}),fp={kernelName:f.Pow,backendName:"webgl",kernelFunc:fd},ff={kernelName:f.Prod,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{axis:s,keepDims:o}=a,l=i.shape.length,u=[],c=f.util.parseAxisParam(s,i.shape),h=c,d=f.backend_util.getAxesPermutation(h,l),p=i;if(null!=d&&(p=cS({inputs:{x:i},backend:r,attrs:{perm:d}}),h=f.backend_util.getInnerMostAxes(h.length,l),u.push(p)),f.backend_util.assertAxesAreInnerMostDims("prod",h,l),r.shouldExecuteOnCPU([p])){let e=r.texData.get(p.dataId).values,{outVals:n,outShape:a,outDtype:i}=(0,cc.Tg)(p.shape,p.dtype,e,h);t=r.makeTensorInfo(a,i,n)}else{let[e,n]=f.backend_util.computeOutAndReduceShapes(p.shape,h),a=cm({inputs:{x:p},backend:r,attrs:{shape:[-1,f.util.sizeFromShape(n)]}}),s=cy(a,(0,f.sumOutType)(i.dtype),"prod",r);t=cm({inputs:{x:s},backend:r,attrs:{shape:e}}),u.push(a),u.push(s)}if(o){u.push(t);let e=f.backend_util.expandShapeToKeepDim(t.shape,c);t=cm({inputs:{x:t},backend:r,attrs:{shape:e}})}return u.forEach(e=>r.disposeIntermediateTensorInfo(e)),t}},fm={kernelName:f.RaggedGather,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:a,paramsDenseValues:i,indices:s}=t,{outputRaggedRank:o}=r,l=a.map(e=>n.readSync(e.dataId)),u=a.map(e=>e.shape),c=n.readSync(i.dataId),h=n.readSync(s.dataId),[d,p,f]=(0,cc.Qs)(l,u,c,i.shape,i.dtype,h,s.shape,o),m=d.map(e=>n.makeTensorInfo([e.length],"int32",e)),g=n.makeTensorInfo(f,i.dtype,p);return m.concat([g])}},fg={kernelName:f.RaggedRange,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{starts:r,limits:a,deltas:i}=t,s=n.readSync(r.dataId),o=n.readSync(a.dataId),l=n.readSync(i.dataId),[u,c]=(0,cc.M8)(s,r.shape,r.dtype,o,a.shape,l,i.shape);return[n.makeTensorInfo([u.length],"int32",u),n.makeTensorInfo([c.length],r.dtype,c)]}},fx={kernelName:f.RaggedTensorToTensor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{shape:a,values:i,defaultValue:s,rowPartitionTensors:o}=t,{rowPartitionTypes:l}=r,u=n.readSync(a.dataId),c=n.readSync(i.dataId),h=n.readSync(s.dataId),d=o.map(e=>n.readSync(e.dataId)),p=o.map(e=>e.shape),[f,m]=(0,cc.fy)(u,a.shape,c,i.shape,i.dtype,h,s.shape,d,p,l);return n.makeTensorInfo(f,i.dtype,m)}},fb=e=>{let{backend:t,attrs:n}=e,{start:r,stop:a,step:i,dtype:s}=n,o=(0,cc.hO)(r,a,i,s);return t.makeTensorInfo([o.length],s,o)},fy={kernelName:f.Range,backendName:"webgl",kernelFunc:fb},fv=ca({opSnippet:"return 1.0 / x;"}),fk={kernelName:f.Reciprocal,backendName:"webgl",kernelFunc:fv},fI=ca({opSnippet:ct.D1+`
  return (x < 0.0) ? 0.0 : x;
`,packedOpSnippet:`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),fC={kernelName:f.Relu,backendName:"webgl",kernelFunc:fI},fw=ca({opSnippet:ct.D1+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,packedOpSnippet:`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`}),fS={kernelName:f.Relu6,backendName:"webgl",kernelFunc:fw};class fN{constructor(e,t,n,r,a){let i;this.variableNames=["A"],this.outputShape=[];let[s,o,l,u]=e;this.outputShape=[s,t,n,u];let c=[r&&t>1?o-1:o,r&&n>1?l-1:l],h=[r&&t>1?t-1:t,r&&n>1?n-1:n];i=a?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/h[0]},
          ${c[1]/h[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${i};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class fT{constructor(e,t,n,r,a){let i;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[s,o,l,u]=e;this.outputShape=[s,t,n,u];let c=[r&&t>1?o-1:o,r&&n>1?l-1:l],h=[r&&t>1?t-1:t,r&&n>1?n-1:n];i=a?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/h[0]},
          ${c[1]/h[1]},
          ${c[1]/h[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${i};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}let fA={kernelName:f.ResizeBilinear,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:i,halfPixelCenters:s,size:o}=r,[l,u]=o,c=(0,f.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new fT(a.shape,l,u,i,s):new fN(a.shape,l,u,i,s);return n.runWebGLProgram(c,[a],"float32")}};class f${constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,r,a]=t,[,i,s]=e,o=[n&&i>1?r-1:r,n&&s>1?a-1:a],l=[n&&i>1?i-1:i,n&&s>1?s-1:s],u=o[0]/l[0],c=o[1]/l[1],h=1/u,d=1/c;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${c});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${d});

        const int winHeight = int(${2*Math.ceil(h)+2});
        const int winWidth = int(${2*Math.ceil(d)+2});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${s}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${a-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let fE={kernelName:f.ResizeBilinearGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:i}=t,{alignCorners:s}=r,o=new f$(i.shape,a.shape,s);return n.runWebGLProgram(o,[i],i.dtype)}};class fF{constructor(e,t,n,r,a){let i;this.variableNames=["A"],this.outputShape=[];let[s,o,l,u]=e;this.outputShape=[s,t,n,u];let c=[r&&t>1?o-1:o,r&&n>1?l-1:l],h=[r&&t>1?t-1:t,r&&n>1?n-1:n];i=a?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/h[0]},
          ${c[1]/h[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${i};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${r?"0.5":"0.0"})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class fR{constructor(e,t,n,r,a){let i;this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[s,o,l,u]=e;this.outputShape=[s,t,n,u];let c=[r&&t>1?o-1:o,r&&n>1?l-1:l],h=[r&&t>1?t-1:t,r&&n>1?n-1:n];i=a?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/h[0]},
          ${c[1]/h[1]},
          ${c[1]/h[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${i};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${r?"0.5":"0.0"})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}let fD={kernelName:f.ResizeNearestNeighbor,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a}=t,{alignCorners:i,halfPixelCenters:s,size:o}=r,[l,u]=o,c=(0,f.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new fR(a.shape,l,u,i,s):new fF(a.shape,l,u,i,s);return n.runWebGLProgram(c,[a],a.dtype)}};class f_{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,r,a]=t,[,i,s]=e,o=[n&&i>1?r-1:r,n&&s>1?a-1:a],l=[n&&i>1?i-1:i,n&&s>1?s-1:s],u=o[0]/l[0],c=o[1]/l[1],h=1/u,d=1/c;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${c});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${d});

        const int winHeight = int(${2*Math.ceil(h)+2});
        const int winWidth = int(${2*Math.ceil(d)+2});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${s}) {
              continue;
            }

            float sourceFracRow =
              float(${o[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${o[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${a}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}let fO={kernelName:f.ResizeNearestNeighborGrad,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{images:a,dy:i}=t,{alignCorners:s}=r,o=new f_(i.shape,a.shape,s);return n.runWebGLProgram(o,[i],i.dtype)}};class fM{constructor(e,t){this.variableNames=["x"];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,1===n){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>-1!==t.indexOf(n)&&1!==e[n]?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,a=e.map((e,t)=>r(t)).join(","),i=(0,uZ.kW)(n);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}class fz{constructor(e,t){var n,r,a;this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let i=e.length;if(i>4)throw Error(`WebGL backend: Reverse of rank-${i} tensor is not yet supported`);this.outputShape=e;let s=(0,uY.Ky)("rc",i),o=`${s[i-1]} + 1 < ${this.outputShape[i-1]}`,l=`${s[i-2]} + 1 < ${this.outputShape[i-2]}`,u=(0,uZ.kW)(i);function c(n){let r=e.map((r,a)=>-1!==t.indexOf(a)&&1!==e[a]?`${e[a]} - ${n[a]} - 1`:`${n[a]}`),a=r.join(","),i=r.slice(-2).join(",");return`getChannel(getX(${a}), vec2(${i}))`}1===i?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${o}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${u} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${c(s.slice())};
          if(${o}){
            result.g = ${(n=s.slice())[i-1]="("+n[i-1]+" + 1)",c(n)};
          }
          if(${l}) {
            result.b = ${(r=s.slice())[i-2]="("+r[i-2]+" + 1)",c(r)};
            if(${o}) {
              result.a = ${(a=s.slice())[i-1]="("+a[i-1]+" + 1)",a[i-2]="("+a[i-2]+" + 1)",c(a)};
            }
          }
          setOutput(result);
        }
    `}}let fL={kernelName:f.Reverse,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{dims:i}=r,s=a.shape.length,o=f.util.parseAxisParam(i,a.shape);if(0===s)return u1({inputs:{x:a},backend:n});let l=(0,f.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fz(a.shape,o):new fM(a.shape,o);return n.runWebGLProgram(l,[a],a.dtype)}};class fP{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let n=e[1],r=e[2];this.outputShape=e;let a="";a="number"==typeof t?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${a}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}let fB={kernelName:f.RotateWithOffset,backendName:"webgl",kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:a,fillValue:i,center:s}=t,o=new fP(r.shape,i),[l,u]=f.backend_util.getImageCenter(s,r.shape[1],r.shape[2]);return n.runWebGLProgram(o,[r],r.dtype,[[l,u,Math.sin(a),Math.cos(a)]])}},fW=ca({opSnippet:`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`}),fV={kernelName:f.Round,backendName:"webgl",kernelFunc:fW},fG=ca({opSnippet:"return inversesqrt(x);",cpuKernelImpl:cc.St}),fU={kernelName:f.Rsqrt,backendName:"webgl",kernelFunc:fG};class fH{constructor(e,t,n,r,a,i,s=!0,o=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let l=(0,uZ.kW)(a.length),u=(0,uZ.kW)(i.length),c="";1===n?c="i":2===n&&(c="i, j");let h=`getIndices(${c})`,d="";1===r?d="i":2===r&&(d="i, coords[1]");let p=`getUpdates(${d})`,f="";o&&(f="coords[0], coords[1]");let m=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${a});

        void main() {
          ${u} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${h});
              flattenedIndex += index * ${t>1?"strides[j]":"strides"};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${m}, sum, float(found)));
        }
      `}}class fj{constructor(e,t,n,r,a,i,s=!0,o=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let l=(0,uZ.kW)(a.length),u=(0,uZ.kW)(i.length),c="";1===n?c="i":2===n&&(c="i, j");let h=`getIndices(${c})`,d="";1===r?d="i":2===r&&(d="i, coords[1]");let p=`getUpdates(${d})`,f="";o&&(f="coords[0], coords[1]");let m=`getDefaultValue(${f})`;this.userCode=`
        ${l} strides = ${l}(${a});

        void main() {
          ${u} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${h});
              flattenedIndex += index.xz * ${t>1?"strides[j]":"strides"};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${t>1?"strides[j + 1]":"strides"};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${m}, sum, found));
        }
      `}}let fX={kernelName:f.ScatterNd,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{indices:i,updates:s}=n,{shape:o}=a,{sliceRank:l,numUpdates:u,sliceSize:c,strides:h,outputSize:d}=f.backend_util.calculateShapes(s,i,o),p=[d/c,c];if(0===d)return r.makeTensorInfo(o,i.dtype);let m=cm({inputs:{x:i},backend:r,attrs:{shape:[u,l]}}),g=cm({inputs:{x:s},backend:r,attrs:{shape:[u,c]}}),x=r.makeTensorInfo([],"float32",new Float32Array([0]));t=(0,f.env)().getBool("WEBGL_PACK")?new fj(u,l,m.shape.length,g.shape.length,h,p):new fH(u,l,m.shape.length,g.shape.length,h,p);let b=r.runWebGLProgram(t,[g,m,x],g.dtype),y=cm({inputs:{x:b},backend:r,attrs:{shape:o}});return r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(b),r.disposeIntermediateTensorInfo(x),y}};class fq{constructor(e,t,n,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,n];let a=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,i=2===(0,f.env)().getNumber("WEBGL_VERSION")?"while (left < right) {":a;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${i}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${"left"===r?"<":"<="} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}let fK={kernelName:f.SearchSorted,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:a,values:i}=t,{side:s}=r,o=new fq(a.shape[0],a.shape[1],i.shape[1],s),l=[[a.shape[1]]];return n.runWebGLProgram(o,[a,i],"int32",l)}};class fQ{constructor(e,t,n){let r,a;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error(`Where for rank ${n} is not yet supported`);if(1===n)a="resRC",r="resRC";else{let n=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[];for(let r=0;r<t.length;r++)s.push(`${n[r]}`),r<e&&i.push(`${n[r]}`);r=i.join(),a=s.join()}let i=(0,uZ.kW)(n);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${a}));
        } else {
          setOutput(getB(${a}));
        }
      }
    `}}let fY={kernelName:f.Select,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{condition:r,t:a,e:i}=t,s=new fQ(r.shape.length,a.shape,a.shape.length);return n.runWebGLProgram(s,[r,a,i],(0,f.upcastType)(a.dtype,i.dtype))}},fZ=ca({opSnippet:`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${f.backend_util.SELU_SCALEALPHA};
  float scale = ${f.backend_util.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`}),fJ={kernelName:f.Selu,backendName:"webgl",kernelFunc:fZ},f0=ca({opSnippet:cr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,packedOpSnippet:`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cpuKernelImpl:cc.UN}),f1={kernelName:f.Sigmoid,backendName:"webgl",kernelFunc:f0},f2=ca({opSnippet:`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`}),f3={kernelName:f.Sign,backendName:"webgl",kernelFunc:f2},f4=ca({opSnippet:cr+`
  return sin(x);
`,packedOpSnippet:`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${uJ}
  return result;
`}),f6={kernelName:f.Sin,backendName:"webgl",kernelFunc:f4},f5=ca({opSnippet:`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`}),f9={kernelName:f.Sinh,backendName:"webgl",kernelFunc:f5},f8=ca({opSnippet:`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`}),f7={kernelName:f.Softplus,backendName:"webgl",kernelFunc:f8},me={kernelName:f.SpaceToBatchND,backendName:"webgl",kernelFunc:e=>{let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{blockShape:i,paddings:s}=r;f.util.assert(a.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let o=i.reduce((e,t)=>e*t),l=[[0,0]];l.push(...s);for(let e=1+i.length;e<a.shape.length;++e)l.push([0,0]);let u=[],c=fc({inputs:{x:a},backend:n,attrs:{paddings:l,constantValue:0}}),h=f.backend_util.getReshaped(c.shape,i,o,!1),d=f.backend_util.getPermuted(h.length,i.length,!1),p=f.backend_util.getReshapedPermuted(c.shape,i,o,!1),m=cm({inputs:{x:c},backend:n,attrs:{shape:h}}),g=cS({inputs:{x:m},backend:n,attrs:{perm:d}}),x=cm({inputs:{x:g},backend:n,attrs:{shape:p}});return u.push(c),u.push(m),u.push(g),u.forEach(e=>n.disposeIntermediateTensorInfo(e)),x}},mt={kernelName:f.SparseFillEmptyRows,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{indices:r,values:a,denseShape:i,defaultValue:s}=t;if(1!==i.shape.length)throw Error(`Dense shape must be a vector, saw:
         ${i.shape}`);if(2!==r.shape.length)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(1!==a.shape.length)throw Error(`Values must be a vector, saw:
         ${a.shape}`);if(0!==s.shape.length)throw Error(`Default value must be a scalar, saw:
        ${s.shape}`);let o=n.readSync(r.dataId),l=n.readSync(a.dataId),u=n.readSync(i.dataId),c=n.readSync(s.dataId)[0],[h,d,p,f,m]=(0,cc.X8)(o,r.shape,r.dtype,l,a.dtype,u,c);return[n.makeTensorInfo(d,r.dtype,h),n.makeTensorInfo([d[0]],a.dtype,p),n.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(e=>Number(e)))),n.makeTensorInfo([m.length],r.dtype,new Int32Array(m))]}},mn={kernelName:f.SparseReshape,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:a,newShape:i}=t;if(2!==r.shape.length)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(1!==a.shape.length)throw Error(`Input shape should be a vector but received shape ${a.shape}`);if(1!==i.shape.length)throw Error(`Target shape should be a vector but received shape ${i.shape}`);let s=Array.from(n.readSync(a.dataId)),o=n.readSync(r.dataId),l=Array.from(n.readSync(i.dataId)),[u,c,h]=(0,cc.LS)(o,r.shape,r.dtype,s,l);return[n.makeTensorInfo(c,r.dtype,u),n.makeTensorInfo([h.length],i.dtype,new Int32Array(h))]}},mr={kernelName:f.SparseSegmentMean,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:i}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
              ${a.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
              ${i.shape}`);let s=n.readSync(r.dataId),o=n.readSync(a.dataId),l=n.readSync(i.dataId),[u,c]=(0,cc.AR)(s,r.shape,r.dtype,o,l,!0);return n.makeTensorInfo(c,r.dtype,u)}},ma={kernelName:f.SparseSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n}=e,{data:r,indices:a,segmentIds:i}=t;if(r.shape.length<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.shape.length)throw Error(`Indices should be a vector but received shape
             ${a.shape}`);if(1!==i.shape.length)throw Error(`Segment ids should be a vector but received shape
             ${i.shape}`);let s=n.readSync(r.dataId),o=n.readSync(a.dataId),l=n.readSync(i.dataId),[u,c]=(0,cc.AR)(s,r.shape,r.dtype,o,l);return n.makeTensorInfo(c,r.dtype,u)}},mi={kernelName:f.SparseToDense,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:a,sparseValues:i,defaultValue:s}=t,{outputShape:o}=r,{sliceRank:l,numUpdates:u,sliceSize:c,strides:h,outputSize:d}=f.backend_util.calculateShapes(i,a,o);if("string"===i.dtype){let e=n.bufferSync(a),t=n.bufferSync(i),r=f.util.decodeString(n.readSync(s.dataId)[0]),p=(0,cc.Y1)(e,t,o,d,c,u,l,h,r,!1);return n.makeTensorInfo(o,p.dtype,p.values)}let p=new fH(u,l,a.shape.length,i.shape.length,h,[d,1],!1),m=n.runWebGLProgram(p,[i,a,s],i.dtype),g=cm({inputs:{x:m},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(m),g}},ms={kernelName:f.SplitV,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{numOrSizeSplits:i,axis:s}=r,o=f.util.parseAxisParam(s,a.shape)[0],l=f.backend_util.prepareSplitSize(a,i,o),u=Array(a.shape.length).fill(0),c=a.shape.slice();return l.map(e=>{let t=[...c];t[o]=e;let r=hu({inputs:{x:a},backend:n,attrs:{begin:u,size:t}});return u[o]+=e,r})}},mo="return sqrt(x);",ml=ca({opSnippet:mo,packedOpSnippet:mo,cpuKernelImpl:cc.Bk}),mu={kernelName:f.Sqrt,backendName:"webgl",kernelFunc:ml},mc=ca({opSnippet:"return x * x;"}),mh={kernelName:f.Square,backendName:"webgl",kernelFunc:mc},md="return (a - b) * (a - b);",mp=ci({opSnippet:md,packedOpSnippet:md}),mf={kernelName:f.SquaredDifference,backendName:"webgl",kernelFunc:mp},mm={kernelName:f.StaticRegexReplace,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t;if("string"!==a.dtype)throw Error("Input must be of datatype string");let i=n.readSync(a.dataId),s=f.backend_util.fromUint8ToStringArray(i),o=(0,cc.F1)(s,"string",r);return n.makeTensorInfo(a.shape,"string",o)}},mg={kernelName:f.Step,backendName:"webgl",kernelFunc:function({inputs:e,attrs:t,backend:n}){let{x:r}=e,a=ct.D1+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,i=new ct.l(r.shape,a);return n.runWebGLProgram(i,[r],r.dtype)}};class mx{constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;let r=n.length,a=(0,uZ.kW)(n.length),i=(0,uZ.kW)(n.length),s="";if(1===r)s="coords * strides + begin";else{let e=0;s=n.map((t,r)=>(e++,1===n.length?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(",")}this.userCode=`
      ${a} begin = ${a}(${e});
      ${a} strides = ${a}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}}let mb={kernelName:f.StridedSlice,backendName:"webgl",kernelFunc:function(e){let t;let{inputs:n,backend:r,attrs:a}=e,{x:i}=n,{begin:s,end:o,strides:l,beginMask:u,endMask:c,ellipsisMask:h,newAxisMask:d,shrinkAxisMask:p}=a,{finalShapeSparse:m,finalShape:g,isIdentity:x,sliceDim0:b,isSimpleSlice:y,begin:v,end:k,strides:I}=f.slice_util.sliceInfo(i.shape,s,o,l,u,c,h,d,p);if(x)t=cm({inputs:{x:i},backend:r,attrs:{shape:g}});else if(b||y){f.util.assert(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=f.slice_util.computeOutShape(v,k,I),n=hu({inputs:{x:i},backend:r,attrs:{begin:v,size:e}});t=cm({inputs:{x:n},backend:r,attrs:{shape:g}}),r.disposeIntermediateTensorInfo(n)}else if(r.shouldExecuteOnCPU([i])){let e=r.readSync(i.dataId),n=(0,f.buffer)(i.shape,i.dtype,e),a=(0,cc.$u)(m,n,I,v);t=r.makeTensorInfo(g,i.dtype,a.values)}else{let e=new mx(v,I,m);t=r.runWebGLProgram(e,[i],i.dtype)}let C=cm({inputs:{x:t},backend:r,attrs:{shape:g}});return r.disposeIntermediateTensorInfo(t),C}},my={kernelName:f.StringNGrams,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{separator:a,nGramWidths:i,leftPad:s,rightPad:o,padWidth:l,preserveShortSequences:u}=r,{data:c,dataSplits:h}=t,d=n.readSync(c.dataId),p=n.readSync(h.dataId),[f,m]=(0,cc.$j)(d,p,a,i,s,o,l,u);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(h.shape,"int32",m)]}},mv={kernelName:f.StringSplit,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:a}=r,{input:i,delimiter:s}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(1!==i.shape.length)throw Error(`Input must be a vector, got shape: ${i.shape}`);if(0!==s.shape.length)throw Error(`Delimiter must be a scalar, got shape: ${s.shape}`);let o=n.readSync(i.dataId),l=n.readSync(s.dataId)[0],[u,c,h]=(0,cc.A0)(o,l,a),d=c.length;return[n.makeTensorInfo([d,2],"int32",u),n.makeTensorInfo([d],"string",c),n.makeTensorInfo([2],"int32",new Int32Array(h))]}},mk={kernelName:f.StringToHashBucketFast,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:a}=r,{input:i}=t;if("string"!==i.dtype)throw Error("Input must be of datatype string");if(a<=0)throw Error("Number of buckets must be at least 1");let s=n.readSync(i.dataId),o=(0,cc._9)(s,a);return n.makeTensorInfo(i.shape,"int32",o)}},mI=ca({opSnippet:"return tan(x);"}),mC={kernelName:f.Tan,backendName:"webgl",kernelFunc:mI},mw=ca({opSnippet:`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`}),mS={kernelName:f.Tanh,backendName:"webgl",kernelFunc:mw},mN={kernelName:f.TensorScatterUpdate,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:a,indices:i,updates:s}=t,{}=r,{sliceRank:o,numUpdates:l,sliceSize:u,strides:c,outputSize:h}=f.backend_util.calculateShapes(s,i,a.shape),d=[h/u,u];if(0===h)return n.makeTensorInfo(a.shape,i.dtype);let p=cm({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),m=cm({inputs:{x:s},backend:n,attrs:{shape:[l,u]}}),g=cm({inputs:{x:a},backend:n,attrs:{shape:d}}),x=new fH(l,o,p.shape.length,m.shape.length,c,d,!1,!0),b=n.runWebGLProgram(x,[m,p,g],g.dtype),y=cm({inputs:{x:b},backend:n,attrs:{shape:a.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(b),y}};class mT{constructor(e,t){this.variableNames=["A"];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=(0,uZ.kW)(this.rank),a=function(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`imod(resRC, ${e[0]})`;let n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${a}));
      }
    `}}function mA(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{reps:i}=r;if("string"===a.dtype||a.shape.length>5){let e=n.readSync(a.dataId),t="string"===a.dtype?e.map(e=>f.util.decodeString(e)):e,r=(0,f.buffer)(a.shape,a.dtype,t),s=(0,cc.KX)(r,i);return n.makeTensorInfo(s.shape,s.dtype,s.values)}let s=new mT(a.shape,i);return n.runWebGLProgram(s,[a],a.dtype)}let m$={kernelName:f.Tile,backendName:"webgl",kernelFunc:mA};class mE{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class mF{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function mR(e,t){null!==t&&e.disposeIntermediateTensorInfo(t)}function mD(e){let t=1;for(;t<e;)t*=2;return t}let m_={kernelName:f.TopK,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a}=t,{k:i,sorted:s}=r,o=(0,f.env)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,f.env)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=a.shape,c=u[u.length-1];if(n.shouldExecuteOnCPU([a])||c<o||i>l){let e=n.readSync(a.dataId),[t,r]=(0,cc.oC)(e,u,a.dtype,i,s);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(r.shape,r.dtype,r.values)]}if(0===i)return u[u.length-1]=0,[n.makeTensorInfo(u,a.dtype,[]),n.makeTensorInfo(u,"int32",[])];if(1===c)return[a,dB({attrs:{shape:u,dtype:"int32",value:0},backend:n})];let h=n.texData.get(a.dataId),d=null!==h&&h.isPacked,p=d?n.unpackTensor(a):a,m=f.util.sizeFromShape(u)/c,g=cm({inputs:{x:p},attrs:{shape:[m,c]},backend:n});d&&mR(n,p);let x=mD(i),b=mD(c),y=null,v=()=>null===y?[g,g]:[g,y],k=(e,t,r)=>{let a=v(),i=new mE(r),s=[[c],[null===y?1:0],[Number.NEGATIVE_INFINITY],[e],[t]],o=y;y=n.runWebGLProgram(i,a,"int32",s),mR(n,o)};for(let e=1;e<x;e*=2){let t=2*e;for(let n=e;n>=1;n/=2)k(t,n,[m,b])}for(let e=b;e>x;e/=2){let t=v(),r=new mF([m,e/2]),a=[[c],[null===y?1:0],[x]],i=y;y=n.runWebGLProgram(r,t,"int32",a),mR(n,i);let s=x/2,o=2*s;for(let e=s;e>=1;e/=2)k(o,e,y.shape)}let I=y;y=hu({inputs:{x:y},backend:n,attrs:{begin:0,size:[m,i]}}),mR(n,I);let C=d6({inputs:{x:g,indices:y},backend:n,attrs:{axis:1,batchDims:1}});mR(n,g);let w=u.slice(0,-1);w.push(i),I=y,y=cm({inputs:{x:y},attrs:{shape:w},backend:n}),mR(n,I);let S=C;return C=cm({inputs:{x:C},attrs:{shape:w},backend:n}),mR(n,S),[C,y]}};class mO{constructor(e,t,n,r,a,i){let s;switch(this.variableNames=["Image","Transforms"],this.outputShape=i,r){case"constant":default:s=1;break;case"reflect":s=2;break;case"wrap":s=3;break;case"nearest":s=4}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${a});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${a});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${"nearest"===n?1:2} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}let mM={kernelName:f.Transform,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{image:a,transforms:i}=t,{interpolation:s,fillMode:o,fillValue:l,outputShape:u}=r,[c,h,d,p]=a.shape,[f,m]=null!=u?u:[h,d],g=new mO(h,d,s,o,l,[c,f,m,p]);return n.runWebGLProgram(g,[a,i],"float32")}},mz={kernelName:f.Unique,backendName:"webgl",kernelFunc:function(e){let{inputs:t,attrs:n,backend:r}=e,{axis:a}=n,{x:i}=t;(0,uG.assertNotComplex)(i,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let s=r.readSync(i.dataId),{outputValues:o,outputShape:l,indices:u}=(0,cc.CV)(s,a,i.shape,i.dtype);return[r.makeTensorInfo(l,i.dtype,o),r.makeTensorInfo([u.length],"int32",u)]}},mL={kernelName:f.Unpack,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{value:a}=t,{axis:i}=r;i<0&&(i+=a.shape.length);let s=a.shape.length,o=a.shape[i],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==i&&(l[u++]=a.shape[e]);let c=[],h=Array(s).fill(0),d=a.shape.slice();d[i]=1;let p=Array(o);for(let e=0;e<p.length;e++){h[i]=e;let t=hu({inputs:{x:a},backend:n,attrs:{begin:h,size:d}}),r=cm({inputs:{x:t},backend:n,attrs:{shape:l}});p[e]=r,c.push(t)}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}};class mP{constructor(e,t){this.variableNames=["x","segmentIds"];let n=e.windowSize,r=e.batchSize,a=e.inSize,i=e.numSegments;this.outputShape=[r,i*Math.ceil(a/n)];let s=4*Math.floor(n/4),o=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u="";a%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return initializationValue;
        }
      `);let c="";a%n>0&&(c=`
        if (inIdx < 0 || inIdx >= ${a}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${c}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${1===o}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${2===o}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${3===o}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}}for(let e of[cA,cE,cR,c_,cz,cB,cW,cV,cj,cX,cK,cY,cJ,c1,c3,c5,c9,he,ht,hn,hi,hh,hd,hm,hg,hk,hw,hT,u4,hE,hz,hj,hY,hJ,h0,h1,h2,h4,h5,h8,dr,da,di,dl,dh,df,dm,dx,dy,dv,dI,dw,dN,dA,dE,dR,dO,dL,dW,dG,dj,dq,dZ,d0,d1,d3,d5,d8,pe,u2,pt,hO,pr,pi,po,u9,pu,ph,pd,pf,pg,pb,pv,pI,pS,pT,p$,pF,pR,pD,pM,pz,pL,pP,pB,pV,pH,pX,p2,cp,p6,p9,p7,ft,hb,fr,fs,fo,fh,fp,ce,ff,fm,fg,fx,fy,hv,pQ,fk,fC,fS,cg,fA,fE,fD,fO,fL,fB,fV,fU,fX,fK,fY,fJ,f1,f3,f6,f9,hc,p1,f7,me,mt,mn,mr,ma,mi,ms,mu,mh,mf,mm,mg,mb,my,mv,mk,pJ,cw,mC,mS,mN,m$,m_,mM,cN,mz,mL,{kernelName:f.UnsortedSegmentSum,backendName:"webgl",kernelFunc:function(e){let{inputs:t,backend:n,attrs:r}=e,{x:a,segmentIds:i}=t,{numSegments:s}=r,o=a.shape.length,l=[],u=0,c=f.backend_util.getAxesPermutation([u],o),h=a;null!=c&&(h=cS({inputs:{x:a},backend:n,attrs:{perm:c}}),l.push(h),u=f.backend_util.getInnerMostAxes(1,o)[0]);let d=f.backend_util.segment_util.computeOutShape(h.shape,u,s),p=f.util.sizeFromShape([h.shape[u]]),m=cm({inputs:{x:h},backend:n,attrs:{shape:[-1,p]}});l.push(m);let g=(0,f.sumOutType)(a.dtype),x=(e,t,r,a,i)=>{let s=e.shape[0],o=e.shape[1],u=f.backend_util.segment_util.segOpComputeOptimalWindowSize(o,i),c=new mP({windowSize:u,inSize:o,batchSize:s,numSegments:i},t),h=n.compileAndRun(c,[e,r],a);if(l.push(h),h.shape[1]===i)return h;let d=fb({backend:n,attrs:{start:0,stop:i,step:1,dtype:"float32"}}),p=mA({inputs:{x:d},backend:n,attrs:{reps:[o/u]}});return l.push(d),l.push(p),x(h,t,p,a,i)},b=cm({inputs:{x:x(m,"unsortedSegmentSum",i,g,s)},backend:n,attrs:{shape:d}}),y=b;return null!=c&&(l.push(b),y=cS({inputs:{x:y},backend:n,attrs:{perm:f.backend_util.getUndoAxesPermutation(c)}})),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),y}},fi])(0,f.registerKernel)(e);let mB={"tfjs-core":f.version_core,"tfjs-backend-cpu":iI,"tfjs-backend-webgl":uW,"tfjs-data":ix,"tfjs-layers":ay.i,"tfjs-converter":av.version_converter,tfjs:"4.22.0"}}}]);