
if (typeof gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom !== "undefined") {
  gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom = {};
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachIndex2 = 0;

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachObjects2 = [];

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachTemporary2 = null;

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachTotalCount2 = 0;

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects6= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects1= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects5= [];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects6= [];


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxZoom")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LerpSpeed")) || 0 : 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxZoom")) <= 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxZoom").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed")) <= 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed").setNumber(0.1);
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariableNumber(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("CurrentRoomID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getVariables()).get("__RoomBasedCameraMovement").getChild("RoomID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[k] = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomChanged"), false);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariableNumber(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("CurrentRoomID")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getVariables()).get("__RoomBasedCameraMovement").getChild("RoomID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[k] = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].setVariableBoolean(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomChanged"), true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2 */
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2[i].returnVariable(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2[i].getVariables().get("__RoomBasedCameraMovement").getChild("CurrentRoomID")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2[0].getVariables()).get("__RoomBasedCameraMovement").getChild("RoomID"))));
}
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("TriggerObject"), gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2[i].isCollidingWithPoint((( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2[0].getCenterXInScene()), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2[0].getCenterYInScene())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2[k] = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5);

{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraWidth").setNumber((( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5[0].getWidth()) + 2 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraHeight").setNumber((( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5[0].getHeight()) + 2 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZoom").setNumber(Math.min(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraHeight")), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraWidth"))));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZoom").setNumber(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZoom")), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MinZoom")) || 0 : 0), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxZoom"))));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, Math.ceil(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZoom")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed"))) * 1000) / 1000, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraWidth")) <= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4);

{gdjs.evtTools.camera.setCameraX(runtimeScene, Math.ceil(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getCenterXInScene()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed"))) * 100) / 100, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraHeight")) <= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4);

{gdjs.evtTools.camera.setCameraY(runtimeScene, Math.ceil(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getCenterYInScene()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed"))) * 100) / 100, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraWidth")) > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4);

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4);

{gdjs.evtTools.camera.setCameraX(runtimeScene, Math.ceil(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), gdjs.evtTools.common.clamp((( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getCenterXInScene()) - (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getWidth()) / 2 + gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getCenterXInScene()) + (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4[0].getWidth()) / 2 - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed"))) * 100) / 100, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraHeight")) > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3 */
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, Math.ceil(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)), gdjs.evtTools.common.clamp((( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[0].getCenterYInScene()), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getCenterYInScene()) - (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getHeight()) / 2 + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0), (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getCenterYInScene()) + (( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[0].getHeight()) / 2 - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OutsideBuffer")) || 0 : 0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("LerpSpeed"))) * 100) / 100, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].getVariableNumber(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomID")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[k] = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxRoomID").add(1);
}{for(var i = 0, len = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].returnVariable(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomID")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("MaxRoomID")));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2, gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("TriggerObject"), gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].getVariableNumber(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomID")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3[0].getVariables()).get("__RoomBasedCameraMovement").getChild("CurrentRoomID"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[k] = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RoomObject"), gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1);

for (gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachIndex2 = 0;gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachIndex2 < gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1.length;++gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachIndex2) {
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length = 0;


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachTemporary2 = gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1[gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachIndex2];
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.push(gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList6(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList7(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraX")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraY")) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraX").setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraY").setNumber(gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraX")) == gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraY")) == gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraMoving"), false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraX")) != gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PrevCameraY")) != gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraMoving"), true);
}
{ //Subevents
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList11(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PreviousZoom")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PreviousZoom").setNumber(gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PreviousZoom").setNumber(gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0)));
}}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PreviousZoom")) == gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZooming"), false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("PreviousZoom")) != gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__RoomBasedCameraMovement").getChild("CameraZooming"), true);
}
{ //Subevents
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList13(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList15(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList12(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList16(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.func = function(runtimeScene, RoomObject, TriggerObject, Layer, LerpSpeed, MaxZoom, MinZoom, OutsideBuffer, Camera, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"RoomObject": RoomObject
, "TriggerObject": TriggerObject
},
  _objectArraysMap: {
"RoomObject": gdjs.objectsListsToArray(RoomObject)
, "TriggerObject": gdjs.objectsListsToArray(TriggerObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("RoomBasedCameraMovement"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("RoomBasedCameraMovement"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Layer") return Layer;
if (argName === "LerpSpeed") return LerpSpeed;
if (argName === "MaxZoom") return MaxZoom;
if (argName === "MinZoom") return MinZoom;
if (argName === "OutsideBuffer") return OutsideBuffer;
if (argName === "Camera") return Camera;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects6.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects5.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects6.length = 0;

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.eventsList17(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects2.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects3.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects4.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects5.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDRoomObjectObjects6.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects2.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects3.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects4.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects5.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.GDTriggerObjectObjects6.length = 0;


return;
}

gdjs.evtsExt__RoomBasedCameraMovement__MoveCameraToActiveRoom.registeredGdjsCallbacks = [];