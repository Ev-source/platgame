var gdjs;(function(i){i.PixiFiltersTools.registerFilterCreator("AdvancedBloom",new class extends i.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(t,e){return new PIXI.filters.AdvancedBloomFilter}updatePreRender(t,e){}updateDoubleParameter(t,e,r){const l=t;e==="threshold"?l.threshold=r:e==="bloomScale"?l.bloomScale=r:e==="brightness"?l.brightness=r:e==="blur"?l.blur=r:e==="quality"?l.quality=r:e==="padding"&&(l.padding=r)}getDoubleParameter(t,e){const r=t;return e==="threshold"?r.threshold:e==="bloomScale"?r.bloomScale:e==="brightness"?r.brightness:e==="blur"?r.blur:e==="quality"?r.quality:e==="padding"?r.padding:0}updateStringParameter(t,e,r){}updateColorParameter(t,e,r){}getColorParameter(t,e){return 0}updateBooleanParameter(t,e,r){}getNetworkSyncData(t){const e=t;return{th:e.threshold,bs:e.bloomScale,bn:e.brightness,b:e.blur,q:e.quality,p:e.padding}}updateFromNetworkSyncData(t,e){const r=t;r.threshold=e.th,r.bloomScale=e.bs,r.brightness=e.bn,r.blur=e.b,r.quality=e.q,r.padding=e.p}})})(gdjs||(gdjs={}));
//# sourceMappingURL=advanced-bloom-pixi-filter.js.map
