/*
===========================================
 Konfigurasjonsmal for API-nøkler
-------------------------------------------
 Formål:
  - Viser struktur for API-nøkler brukt i prosjektet.
  - Skal brukes som mal for lokal fil: "config.js".
  - Inneholder IKKE ekte nøkler.
  - "config.js" skal aldri pushes til GitHub.
===========================================
*/

// Konfigurasjonsobjekt som blir tilgjengelig globalt
window.CONFIG = {

  /*
  -------------------------------------------
   OpenWeather API-nøkkel
   Brukes til: Hente værdata for forsiden.
   Fylles inn i "config.js" når nøkkel mottas.
  -------------------------------------------
  */
  OPENWEATHER_API_KEY: "OPENWEATHER_API_KEY_HER",

  /*
  -------------------------------------------
   OpenAI API-nøkkel
   Brukes til: Eventuell chatbot eller AI-funksjon.
   Fylles inn i "config.js" når nøkkel mottas.
  -------------------------------------------
  */
  OPENAI_API_KEY: "OPENAI_API_KEY_HER"
};
