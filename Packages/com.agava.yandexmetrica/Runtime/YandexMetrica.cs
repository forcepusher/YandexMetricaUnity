using System.Runtime.InteropServices;

namespace Agava.YandexMetrica
{
    public static class YandexMetrica
    {
        public static void Send()
        {
            YandexMetricaSend();
        }

        [DllImport("__Internal")]
        private static extern bool YandexMetricaSend();
    }
}
