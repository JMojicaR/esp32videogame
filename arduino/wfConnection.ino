#include <WiFi.h>

WiFiServer server(2020);
const byte led_pin = 14;
const char* ssid = "your-ssid";
const char* password = "your-password";

void setup()
{
    pinMode(led_pin, OUTPUT);
    Serial.begin(115200);
    WiFi.mode(WIFI_STA);
    delay(300);
    Serial.println("Conectando a red wifi...");
    WiFi.begin(ssid, password);
    while(WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(300);
    }
    Serial.print("IP asigned: ");
    Serial.print(WiFi.localIP());
    server.begin();
}

void loop()
{
    WiFiClient client = server.available();
    while(client.connected())
    {
        if(client.available() > 0)
        {
            char command = client.read();
            if(command == 'A')
            {
                digitalWrite(led_pin, HIGH);
            }
            else
            {
                digitalWrite(led_pin, LOW);
            }
        }
    }
}