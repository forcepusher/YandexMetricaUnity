const library = {
  
  // Class definition.

  $yandexMetrica: {
    yandexMetricaSend: function (eventName, eventData, successCallbackPtr) {
      ym(89587935,'reachGoal',eventName, JSON.parse(eventData));
    },
  },

  // External C# calls.

  YandexMetricaSend: function (eventNamePtr, eventDataPtr, successCallbackPtr) {
    const eventName = UTF8ToString(eventNamePtr);
    const eventData = UTF8ToString(eventDataPtr);
    yandexMetrica.yandexMetricaSend(eventName, eventData, successCallbackPtr);
  },
}

autoAddDeps(library, '$yandexMetrica');
mergeInto(LibraryManager.library, library);
