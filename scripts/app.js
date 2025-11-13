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
   Demo + init på siden
   - Oppdaterer vær-boksen
   - Kjører test mot OpenAI og OpenWeather
=========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const weatherBox = document.getElementById("weather-info");

  if (weatherBox) {
    weatherBox.textContent = "Henter værdata for Oslo...";
  }

  testOpenAI();
  testWeather();
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

/* ===========================================
   Test OpenWeather-kall
   - Bruker nøkkelen fra window.CONFIG.OPENWEATHER_API_KEY
   - Logger svaret i Console
=========================================== */
async function testWeather() {
  const key = window.CONFIG && window.CONFIG.OPENWEATHER_API_KEY;
  const city = "Oslo";
  const weatherBox = document.getElementById("weather-info");

  if (!key) {
    console.error("Ingen OpenWeather-nøkkel funnet.");
    if (weatherBox) {
      weatherBox.textContent =
        "Ingen værnøkkel satt opp ennå. Viser ikke ekte vær.";
    }
    return;
  }

  if (weatherBox) {
    weatherBox.textContent = "Henter værdata...";
  }

  console.log("Sender testkall til OpenWeather...");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Svar fra OpenWeather (rådata):", data);

    if (weatherBox) {
      if (response.ok && data.main && data.weather && data.weather[0]) {
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description; // f.eks. "light rain"
        weatherBox.textContent = `${city}: ${temp}°C, ${desc}`;
      } else {
        weatherBox.textContent =
          "Kunne ikke lese værdata akkurat nå.";
      }
    }
  } catch (err) {
    console.error("Feil ved henting fra OpenWeather:", err);
    if (weatherBox) {
      weatherBox.textContent =
        "Klarte ikke å hente vær akkurat nå.";
    }
  }
}
