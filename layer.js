var gdjs;(function(m){class c extends m.RuntimeLayer{constructor(t,e){super(t,e);this._cameraRotation=0;this._zoomFactor=1;this._cameraZ=0;this._isCameraZDirty=!0;this._cameraX=this.getWidth()/2,this._cameraY=this.getHeight()/2,this.getCameraType()===m.RuntimeLayerCameraType.ORTHOGRAPHIC&&(this._cameraZ=(this._initialCamera3DFarPlaneDistance+this._initialCamera3DNearPlaneDistance)/2),this._renderer.onCreated()}onGameResolutionResized(t,e){this._cameraX===t&&this._cameraY===e&&this._zoomFactor===1&&(this._cameraX+=this._runtimeScene.getViewportOriginX()-t,this._cameraY+=this._runtimeScene.getViewportOriginY()-e),this._renderer.updatePosition(),this._renderer.updateResolution()}getCameraX(t){return this._forceDimensionUpdate(),this._cameraX}getCameraY(t){return this._forceDimensionUpdate(),this._cameraY}setCameraX(t,e){this._forceDimensionUpdate(),this._cameraX=t,this._renderer.updatePosition()}setCameraY(t,e){this._forceDimensionUpdate(),this._cameraY=t,this._renderer.updatePosition()}getCameraWidth(t){return this.getWidth()/this._zoomFactor}getCameraHeight(t){return this.getHeight()/this._zoomFactor}setCameraZoom(t,e){this._zoomFactor=t,this._isCameraZDirty=!0,this._renderer.updatePosition()}getCameraZoom(t){return this._zoomFactor}setCameraZ(t,e,i){if(e){const o=m.toRad(e),a=Math.min(Number.MAX_SAFE_INTEGER,.5*this.getHeight()/(t*Math.tan(.5*o)));a>0&&(this._zoomFactor=a)}this._cameraZ=t,this._isCameraZDirty=!1,this._renderer.updatePosition()}getCameraZ(t,e){return!this._isCameraZDirty||!t?this._cameraZ:.5*this.getHeight()/this.getCameraZoom()/Math.tan(.5*m.toRad(t))}getCameraRotation(t){return this._cameraRotation}setCameraRotation(t,e){this._cameraRotation=t,this._renderer.updatePosition()}convertCoords(t,e,i=0,o){let a=o||[0,0];if(this._renderer.isCameraRotatedIn3D())return this._renderer.transformTo3DWorld(t,e,0,i,o);t-=this.getRuntimeScene()._cachedGameResolutionWidth/2,e-=this.getRuntimeScene()._cachedGameResolutionHeight/2,t/=Math.abs(this._zoomFactor),e/=Math.abs(this._zoomFactor);const n=this._cameraRotation/180*Math.PI,s=t,r=Math.cos(n),h=Math.sin(n);return t=r*t-h*e,e=h*s+r*e,a[0]=t+this.getCameraX(i),a[1]=e+this.getCameraY(i),a}applyLayerInverseTransformation(t,e,i,o){t-=this._runtimeScene.getViewportOriginX(),e-=this._runtimeScene.getViewportOriginY(),t/=Math.abs(this._zoomFactor),e/=Math.abs(this._zoomFactor);const a=this._cameraRotation/180*Math.PI,n=t,s=Math.cos(a),r=Math.sin(a);return t=s*t-r*e,e=r*n+s*e,o[0]=t+this.getCameraX(i),o[1]=e+this.getCameraY(i),o}convertInverseCoords(t,e,i=0,o){let a=o||[0,0];t-=this.getCameraX(i),e-=this.getCameraY(i);const n=this._cameraRotation/180*Math.PI,s=t,r=Math.cos(-n),h=Math.sin(-n);return t=r*t-h*e,e=h*s+r*e,t*=Math.abs(this._zoomFactor),e*=Math.abs(this._zoomFactor),a[0]=t+this.getRuntimeScene()._cachedGameResolutionWidth/2,a[1]=e+this.getRuntimeScene()._cachedGameResolutionHeight/2,a}applyLayerTransformation(t,e,i,o){t-=this.getCameraX(i),e-=this.getCameraY(i);const a=this._cameraRotation/180*Math.PI,n=t,s=Math.cos(-a),r=Math.sin(-a);return t=s*t-r*e,e=r*n+s*e,t*=Math.abs(this._zoomFactor),e*=Math.abs(this._zoomFactor),t+=this._runtimeScene.getViewportOriginX(),e+=this._runtimeScene.getViewportOriginY(),o[0]=t,o[1]=e,o}_forceDimensionUpdate(){this._runtimeScene.getViewportWidth()}}m.Layer=c})(gdjs||(gdjs={}));
//# sourceMappingURL=layer.js.map