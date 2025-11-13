/* ===========================================
   Init / sanity-sjekk av konfigurasjon
   - Bekrefter at window.CONFIG finnes
   - Logger hvilke nøkler som (tilsynelatende) er satt
=========================================== */
(function initConfigCheck() {
  if (!window.CONFIG) {
    console.error("CONFIG mangler: scripts/config.js er ikke lastet inn.");
    return;
  }

  console.log("CONFIG lastet:", {
    hasOpenWeather: Boolean(window.CONFIG.OPENWEATHER_API_KEY),
    hasOpenAI: Boolean(window.CONFIG.OPENAI_API_KEY)
  });

  // Ekstra sjekk: viser spesifikt om OpenAI-nøkkelen finnes
  console.log("Har vi OpenAI-nøkkel?", Boolean(window.CONFIG.OPENAI_API_KEY));
})();

/* ===========================================
   Demo: vis status i #weather-info uten ekte API
   - Viser “demo-data” hvis nøkkel mangler
   - Ellers sier den at alt er klart for ekte kall
=========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const weatherBox = document.getElementById("weather-info");
  if (!weatherBox) return; // siden kan mangle seksjonen på andre sider

  weatherBox.textContent = "Tester kobling...";

  // Simuler en liten forsinkelse (som et ordentlig nettverkskall)
  new Promise((resolve) => setTimeout(resolve, 600))
    .then(() => {
      const key = window.CONFIG && window.CONFIG.OPENWEATHER_API_KEY;
      const keyLooksUnset =
        !key || String(key).includes("DIN_OPENWEATHER_API_KEY_HER");

      if (keyLooksUnset) {
        weatherBox.textContent =
          "API-nøkkel ikke satt ennå. Viser demo: 12°C, lett skyet.";
      } else {
        weatherBox.textContent = "Klar for ekte værkall – nøkkel funnet.";
      }
    })
    .catch((err) => {
      weatherBox.textContent = "Noe gikk galt i testen.";
      console.error(err);
    });

  // 👉 NY LINJE: kjør OpenAI-test når siden er lastet
  testOpenAI();
});

/* ===========================================
   Test OpenAI-kall
   - Bruker nøkkelen fra window.CONFIG.OPENAI_API_KEY
   - Logger svaret i Console
=========================================== */
async function testOpenAI() {
  const apiKey = window.CONFIG && window.CONFIG.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Ingen OpenAI-nøkkel funnet.");
    return;
  }

  console.log("Sender testkall til OpenAI...");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: "Hei! Svar med ett ord: fungerer." }
        ]
      })
    });

    const data = await response.json();
    console.log("Svar fra OpenAI (rådata):", data);

    // Plukk ut tekst-svaret på en enkel måte
    let reply = "(fant ikke noe tekstsvar)";
    if (
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
    ) {
      reply = data.choices[0].message.content;
    }

    console.log("Tekstsvar fra OpenAI:", reply);
  } catch (err) {
    console.error("Feil i OpenAI-test:", err);
  }
}
