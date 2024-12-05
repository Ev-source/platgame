
if (typeof gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged !== "undefined") {
  gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged = {};
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1= [];
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects2= [];


gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("TriggerObject"), gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1[i].getVariables().get("__RoomBasedCameraMovement").getChild("RoomChanged"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1[k] = gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.func = function(runtimeScene, TriggerObject, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"TriggerObject": TriggerObject
},
  _objectArraysMap: {
"TriggerObject": gdjs.objectsListsToArray(TriggerObject)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects2.length = 0;

gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects1.length = 0;
gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.GDTriggerObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__RoomBasedCameraMovement__ActiveRoomChanged.registeredGdjsCallbacks = [];