const library = {
  
  // Class definition.

  $yandexMetrica: {
    yandexMetricaSend: function (eventName, eventData) {
      const eventDataJson = eventData === '' ? undefined : JSON.parse(eventData);
      ym(window.yandexMetricaCounterId, 'reachGoal', eventName, eventDataJson);
    },

    yandexMetricaGetExperiment: function (flag) {
      console.log(window.yandexExperiments.flags[flag][0]);
      return yandexMetrica.allocateUnmanagedString('test');
    },

    allocateUnmanagedString: function (string) {
      const stringBufferSize = lengthBytesUTF8(string) + 1;
      const stringBufferPtr = _malloc(stringBufferSize);
      stringToUTF8(string, stringBufferPtr, stringBufferSize);
      return stringBufferPtr;
    },
  },

  // External C# calls.

  YandexMetricaSend: function (eventNamePtr, eventDataPtr) {
    const eventName = UTF8ToString(eventNamePtr);
    const eventData = UTF8ToString(eventDataPtr);
    yandexMetrica.yandexMetricaSend(eventName, eventData);
  },

  YandexMetricaGetExperiment: function (flagPtr) {
    const flag = UTF8ToString(flagPtr);
    return yandexMetrica.yandexMetricaGetExperiment(flag);
  },
}

autoAddDeps(library, '$yandexMetrica');
mergeInto(LibraryManager.library, library);
