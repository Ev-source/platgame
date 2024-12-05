gdjs.OptionsCode = {};
gdjs.OptionsCode.localVariables = [];
gdjs.OptionsCode.GDBackgroundParticlesObjects1= [];
gdjs.OptionsCode.GDBackgroundParticlesObjects2= [];
gdjs.OptionsCode.GDBackgroundParticlesObjects3= [];
gdjs.OptionsCode.GDBackgroundParticles2Objects1= [];
gdjs.OptionsCode.GDBackgroundParticles2Objects2= [];
gdjs.OptionsCode.GDBackgroundParticles2Objects3= [];
gdjs.OptionsCode.GDTransitionOObjects1= [];
gdjs.OptionsCode.GDTransitionOObjects2= [];
gdjs.OptionsCode.GDTransitionOObjects3= [];


gdjs.OptionsCode.mapOfGDgdjs_9546OptionsCode_9546GDTransitionOObjects2Objects = Hashtable.newFrom({"TransitionO": gdjs.OptionsCode.GDTransitionOObjects2});
gdjs.OptionsCode.asyncCallback16130788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.OptionsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The Temple", false);
}gdjs.OptionsCode.localVariables.length = 0;
}
gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.OptionsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.OptionsCode.asyncCallback16130788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.OptionsCode.GDTransitionOObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OptionsCode.mapOfGDgdjs_9546OptionsCode_9546GDTransitionOObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.OptionsCode.GDTransitionOObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDTransitionOObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("33;40;81", 1, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "MUSIC and SFX\\Music\\Menu.ogg", 1, true, 100, 1);
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Funny Game");
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransitionO"), gdjs.OptionsCode.GDTransitionOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OptionsCode.GDTransitionOObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDTransitionOObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.OptionsCode.GDTransitionOObjects1[k] = gdjs.OptionsCode.GDTransitionOObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDTransitionOObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16129460);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OptionsCode.GDTransitionOObjects1 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.OptionsCode.GDTransitionOObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDTransitionOObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("33;40;81", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "MUSIC and SFX\\SFX\\Crystal.mp3", false, 100, 1);
}
{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionsCode.eventsList1(runtimeScene);
}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDBackgroundParticlesObjects1.length = 0;
gdjs.OptionsCode.GDBackgroundParticlesObjects2.length = 0;
gdjs.OptionsCode.GDBackgroundParticlesObjects3.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects1.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects2.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects3.length = 0;
gdjs.OptionsCode.GDTransitionOObjects1.length = 0;
gdjs.OptionsCode.GDTransitionOObjects2.length = 0;
gdjs.OptionsCode.GDTransitionOObjects3.length = 0;

gdjs.OptionsCode.eventsList2(runtimeScene);
gdjs.OptionsCode.GDBackgroundParticlesObjects1.length = 0;
gdjs.OptionsCode.GDBackgroundParticlesObjects2.length = 0;
gdjs.OptionsCode.GDBackgroundParticlesObjects3.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects1.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects2.length = 0;
gdjs.OptionsCode.GDBackgroundParticles2Objects3.length = 0;
gdjs.OptionsCode.GDTransitionOObjects1.length = 0;
gdjs.OptionsCode.GDTransitionOObjects2.length = 0;
gdjs.OptionsCode.GDTransitionOObjects3.length = 0;


return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
