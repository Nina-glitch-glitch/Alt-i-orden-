/* ===========================================
   Vaskebot / Chatbot for husarbeidstips
   - Bruker OpenAI via window.CONFIG.OPENAI_API_KEY
   - Viser korte, konkrete tips på norsk
=========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const suggestBathButton = document.getElementById("chatbot-suggest-bath");
  const chatbotForm = document.getElementById("chatbot-form");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotAnswer = document.getElementById("chatbot-answer");

  if (!suggestBathButton || !chatbotForm || !chatbotInput || !chatbotAnswer) {
    console.warn("Chatbot-elementer ble ikke funnet på siden.");
    return;
  }

  // Fast spørsmål: tips til vasking av bad
  suggestBathButton.addEventListener("click", () => {
    const question =
      "Gi meg et kort, konkret tips til hvordan jeg kan vaske badet i dag.";
    askCleaningBot(question, chatbotAnswer);
  });

  // Eget spørsmål fra brukeren
  chatbotForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const question = chatbotInput.value.trim();
    if (!question) return;

    askCleaningBot(question, chatbotAnswer);
    chatbotInput.value = "";
  });
});

/**
 * Kaller OpenAI og viser svar til brukeren
 */
async function askCleaningBot(question, answerElement) {
  const apiKey = window.CONFIG && window.CONFIG.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Ingen OpenAI-nøkkel funnet (sjekk CONFIG).");
    answerElement.textContent =
      "Jeg finner ikke API-nøkkelen akkurat nå. Sjekk config.js.";
    return;
  }

  answerElement.textContent = "Tenker ut et tips til deg…";

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
          {
            role: "system",
            content:
              "Du er en vennlig, kortfattet husarbeidsassistent. Svar alltid på norsk med 2–4 setninger og konkrete råd."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();
    console.log("Svar fra Vaskebot (rådata):", data);

    let reply = "Jeg klarte ikke å finne et godt svar akkurat nå.";

    if (
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
    ) {
      reply = data.choices[0].message.content;
    }

    answerElement.textContent = reply;
  } catch (err) {
    console.error("Feil i Vaskebot-kall:", err);
    answerElement.textContent =
      "Noe gikk galt med forespørselen. Prøv igjen senere.";
  }
}
