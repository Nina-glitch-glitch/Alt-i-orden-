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
   - Kjører værkall og OpenAI-test når siden lastes
   - Knytter input + knapp til testWeather(city)
=========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("weather-city");
  const cityButton = document.getElementById("weather-button");

  // 1) Første kall: standard-by (Oslo)
  testWeather(); // bruker default "Oslo"

  // 2) Koble knapp til nytt værkall
  if (cityButton && cityInput) {
    cityButton.addEventListener("click", () => {
      const city = cityInput.value.trim();

      if (city) {
        // brukeren har skrevet by
        testWeather(city);
      } else {
        // tomt felt → bruk standard
        testWeather();
      }
    });

    // Bonus: Enter i input-feltet fungerer som å trykke på knappen
    cityInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        cityButton.click();
      }
    });
  }

  // 3) Kjør OpenAI-test som før
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

/* ===========================================
   Test OpenWeather-kall
   - Bruker nøkkelen fra window.CONFIG.OPENWEATHER_API_KEY
   - Oppdaterer #weather-info på siden
=========================================== */
async function testWeather(city = "Oslo") {
  const key = window.CONFIG && window.CONFIG.OPENWEATHER_API_KEY;
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
    weatherBox.textContent = `Henter værdata for ${city}...`;
  }

  console.log(`Sender værkall til OpenWeather for ${city}...`);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=metric&appid=${key}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Svar fra OpenWeather (rådata):", data);

    if (!response.ok) {
      console.error("Feil fra OpenWeather:", data);
      if (weatherBox) {
        weatherBox.textContent =
          "Kunne ikke hente værdata akkurat nå.";
      }
      return;
    }

    if (
      weatherBox &&
      data.main &&
      typeof data.main.temp !== "undefined" &&
      data.weather &&
      data.weather[0]
    ) {
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const cityName = data.name || city;

      weatherBox.textContent = `${cityName}: ${temp}°C, ${desc}`;
    } else if (weatherBox) {
      weatherBox.textContent =
        "Kunne ikke lese værdata akkurat nå.";
    }
  } catch (err) {
    console.error("Feil ved henting fra OpenWeather:", err);
    if (weatherBox) {
      weatherBox.textContent =
        "Klarte ikke å hente vær akkurat nå.";
    }
  }
}
