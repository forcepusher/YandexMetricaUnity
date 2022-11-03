const library = {
  
  // Class definition.

  $yandexMetrica: {
    yandexMetricaSend: function (eventName, eventData) {
      const stringBufferSize = lengthBytesUTF8(string) + 1;
      const stringBufferPtr = _malloc(stringBufferSize);
      stringToUTF8(string, stringBufferPtr, stringBufferSize);
      return stringBufferPtr;
    },
  },

  // External C# calls.

  YandexMetricaSend: function (successCallbackPtr) {
    yandexMetrica.yandexMetricaSend(successCallbackPtr);
  },
}

autoAddDeps(library, '$yandexMetrica');
mergeInto(LibraryManager.library, library);
