gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBackgroundParticlesObjects1= [];
gdjs.MenuCode.GDBackgroundParticlesObjects2= [];
gdjs.MenuCode.GDBackgroundParticlesObjects3= [];
gdjs.MenuCode.GDBackgroundParticles2Objects1= [];
gdjs.MenuCode.GDBackgroundParticles2Objects2= [];
gdjs.MenuCode.GDBackgroundParticles2Objects3= [];
gdjs.MenuCode.GDTransitionOObjects1= [];
gdjs.MenuCode.GDTransitionOObjects2= [];
gdjs.MenuCode.GDTransitionOObjects3= [];
gdjs.MenuCode.GDMenuNameObjects1= [];
gdjs.MenuCode.GDMenuNameObjects2= [];
gdjs.MenuCode.GDMenuNameObjects3= [];
gdjs.MenuCode.GDPressKeyObjects1= [];
gdjs.MenuCode.GDPressKeyObjects2= [];
gdjs.MenuCode.GDPressKeyObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionOObjects2Objects = Hashtable.newFrom({"TransitionO": gdjs.MenuCode.GDTransitionOObjects2});
gdjs.MenuCode.asyncCallback16106300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Temple", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback16106300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MenuName"), gdjs.MenuCode.GDMenuNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("PressKey"), gdjs.MenuCode.GDPressKeyObjects2);
{}{for(var i = 0, len = gdjs.MenuCode.GDMenuNameObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMenuNameObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MenuCode.GDMenuNameObjects2[i].getWidth()) / 2,32);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPressKeyObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDPressKeyObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.MenuCode.GDPressKeyObjects2[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.MenuCode.GDPressKeyObjects2[i].getHeight()) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.MenuCode.GDTransitionOObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDTransitionOObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDTransitionOObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionOObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("33;40;81", 1, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Funny Game");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionO"), gdjs.MenuCode.GDTransitionOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTransitionOObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTransitionOObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTransitionOObjects1[k] = gdjs.MenuCode.GDTransitionOObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTransitionOObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16104972);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDTransitionOObjects1 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDTransitionOObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTransitionOObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("33;40;81", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MUSIC and SFX\\SFX\\Crystal.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MUSIC and SFX\\Music\\Menu Screen intro.ogg", 1, false, 100, 1);
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "MUSIC and SFX\\Music\\Menu Screen.ogg");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MUSIC and SFX\\Music\\Menu Screen.ogg", 1, false, 100, 1);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundParticlesObjects1.length = 0;
gdjs.MenuCode.GDBackgroundParticlesObjects2.length = 0;
gdjs.MenuCode.GDBackgroundParticlesObjects3.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects1.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects2.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects3.length = 0;
gdjs.MenuCode.GDTransitionOObjects1.length = 0;
gdjs.MenuCode.GDTransitionOObjects2.length = 0;
gdjs.MenuCode.GDTransitionOObjects3.length = 0;
gdjs.MenuCode.GDMenuNameObjects1.length = 0;
gdjs.MenuCode.GDMenuNameObjects2.length = 0;
gdjs.MenuCode.GDMenuNameObjects3.length = 0;
gdjs.MenuCode.GDPressKeyObjects1.length = 0;
gdjs.MenuCode.GDPressKeyObjects2.length = 0;
gdjs.MenuCode.GDPressKeyObjects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
gdjs.MenuCode.GDBackgroundParticlesObjects1.length = 0;
gdjs.MenuCode.GDBackgroundParticlesObjects2.length = 0;
gdjs.MenuCode.GDBackgroundParticlesObjects3.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects1.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects2.length = 0;
gdjs.MenuCode.GDBackgroundParticles2Objects3.length = 0;
gdjs.MenuCode.GDTransitionOObjects1.length = 0;
gdjs.MenuCode.GDTransitionOObjects2.length = 0;
gdjs.MenuCode.GDTransitionOObjects3.length = 0;
gdjs.MenuCode.GDMenuNameObjects1.length = 0;
gdjs.MenuCode.GDMenuNameObjects2.length = 0;
gdjs.MenuCode.GDMenuNameObjects3.length = 0;
gdjs.MenuCode.GDPressKeyObjects1.length = 0;
gdjs.MenuCode.GDPressKeyObjects2.length = 0;
gdjs.MenuCode.GDPressKeyObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
