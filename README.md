# Alt-i-orden

En enkel og brukervennlig webapp for å organisere husarbeid i en husholdning.  
Brukeren kan legge til oppgaver, markere dem som fullført, se en historikk,  
og få hjelp via både værdata og en AI-basert chatbot.

Løsningen er en ren frontend-applikasjon (HTML, CSS, JavaScript) uten backend.

---

## 1. Formål og prosjektbeskrivelse

Dette prosjektet er utviklet som en eksamensoppgave i *Frontend Essentials* ved Oslo Nye Høyskole.  
Kravene for prosjektet inkluderer:

- Minst tre HTML-sider  
- Integrasjon av et tredjeparts-API  
- Integrasjon av OpenAI API  
- Semantisk, responsiv og brukervennlig frontend  
- Korrekt bruk av Git og GitHub  
- Dokumentasjon av utviklingsprosessen  

**Alt i orden** er en husholdningsapp som gir brukeren:

- Oversikt over husarbeid  
- Mulighet til å registrere nye oppgaver  
- Innblikk i fullførte oppgaver  
- Vær-basert husarbeidstips via OpenAI  
- En egen AI-chatbot (“Vaskebot”) for spørsmål og råd  

---

## 2. Hvordan kjøre prosjektet lokalt

Slik kan du kjøre appen på egen maskin:

1. **Last ned prosjektet**
   - Gå til repoet: `https://github.com/Nina-glitch-glitch/Alt-i-orden-`
   - Klikk på **Code → Download ZIP**, og pakk ut  
     _eller_ klon repoet:
     ```bash
     git clone https://github.com/Nina-glitch-glitch/Alt-i-orden-.git
     ```

2. **Åpne prosjektmappen**
   - Pakk ut ZIP-filen
   - Naviger inn i mappen `Alt-i-orden-`
   - Finn filen **index.html**

3. **Sett opp API-nøkler**
   - Lag filen `scripts/config.js`
   - Kopier innholdet fra `scripts/config.js.example`
   - Fyll inn dine egne nøkler:
     ```js
     window.CONFIG = {
       OPENWEATHER_API_KEY: "DIN_NØKKEL",
       OPENAI_API_KEY: "DIN_NØKKEL"
     };
     ```

   **Hvis du hopper over dette:**
   - Vær-widgeten viser feilmelding
   - AI-funksjonene (Vaskebot + værbasert tips) skrus av

4. **Start appen**
   - Dobbeltklikk på `index.html` for å åpne appen i nettleseren.
   - Ingen server eller installasjon er nødvendig.

5. **Navigasjon**
   - `index.html` – forside med vær + dagens tips  
   - `tasks.html` – legg til og gjør oppgaver  
   - `done.html` – fullførte oppgaver lagret i localStorage


## 3. Fremdriftslogg

**Hvorfor:**
For å sikre en profesjonell, robust og brukervennlig løsning som møter alle krav i eksamensoppgaven.


### 7. november – Oppstart og planlegging
**Gjort:**
- Gått gjennom eksamenskrav og laget plan.
- Designet enkel struktur i Figma.
- Satt opp prosjektmappe, GitHub-repo og Live Server.
- Opprettet filer: `index.html`, `tasks.html`, `done.html`, `styles/`, `scripts/`.
- Lært Git-workflow (add, commit, push).

**Lært:**
- Forskjellen på Git (lokalt) vs GitHub (sky).
- Grunnstruktur for frontend-prosjekter.

---

### 10. november – Grunnstruktur og visuell oppbygging
**Gjort:**
- Laget første versjon av forsiden med navigasjon.
- Opprettet `base.css` og strukturert felles styling.
- Implementert seksjoner for intro, vær og snarveier.
- Testet kobling mellom HTML og CSS.

**Hvorfor:**
- For å sikre en konsistent og responsiv layout.

---

### 12. november – Strukturkontroll og konsistens
**Gjort:**
- Ryddet HTML og fjernet duplikater.
- Sikret semantikk (h1–h3).
- La til seksjonskommentarer.
- Oppdatert README.

**Hvorfor:**
- God struktur gir enklere videreutvikling.

---

### 13. november – API-integrasjon (OpenWeather + OpenAI)
**Gjort:**
- Opprettet `config.js` og `.gitignore`.
- Integrert OpenWeather API (først statisk, senere dynamisk).
- Integrert OpenAI API og testet GPT-4o-mini.
- Implementert `testWeather()` og `testOpenAI()`.
- La inn feilhåndtering og logging.
- Viste ekte værdata i UI.

**Lært:**
- Hvordan API-kall fungerer.
- Hvordan JSON-data håndteres.

---

### 14. november – Dynamisk byvalg for vær
**Gjort:**
- La til input-felt for fritt valg av sted.
- Oppdatert værfunksjon for dynamiske kall.
- La til Enter-event og inputvalidering.

**Hvorfor:**
- Gjør værseksjonen mer nyttig og fleksibel.

---

### 20. november – Forbedret oppgaveflyt
**Gjort:**
- Endret oppgavefunksjonalitet slik at oppgaver legges inn én gang og blir stående.
- Forenklet skjema for mindre friksjon.
- Tilpasset visning og lagring i localStorage.

**Hvorfor:**
- Mer realistisk og brukervennlig flyt.

---

### 7. desember – Stor milepæl: AI-integrasjon og automatiske husarbeidstips

**Gjort:**
- Fullstendig omskrevet `app.js` for bedre struktur og tydeligere logikk.
- Implementert automatisk AI-generering av husarbeidstips basert på:
  - temperatur  
  - værbeskrivelse  
  - valgt sted  
- Laget dedikert funksjon: `generateWeatherTip()` for å håndtere AI-forslag.
- Lagt inn loading-tekst, feilhåndtering og fallback-svar ved API-problemer.
- Opprettet `chatbot.js` og integrert **Vaskebot** på `tasks.html`.
- Vaskebot støtter både faste forslag (knapp) og fritekst-spørsmål fra brukeren.
- Testet hele flyten i UI og bekreftet at både vær og AI-tips fungerer som forventet.

**Eksempel på AI-forslag:**
> “Siden det er overskyet og kjølig ute, kan det være en perfekt anledning til å rydde i boden eller garasjen.”


### 8. desember - fullføringsflyt og gjennomgang med Reza(lærer)

**Gjort**

- Ryddet og forbedret strukturen i tasks.js
- Implementert funksjon slik at oppgaver som markeres som fullført automatisk flyttes til done.html
- Lagt til at brukeren videresendes til fullførte siden (done.html) når en oppgave fullføres
- Rettet feil med dupliserte seksjoner i tasks.html etter kopiering av HTML
- Flyttet Vaskebot-seksjonen slik at den ligger øverst i oppgave-siden
- Testet fullføringsflyten fra Aktive oppgaver → Fullførte – logikken fungerer nå
- Ryddet localStorage for å teste
- Bekreftet med DevTools Console at oppgaver lagres og oppdateres riktig


### 9. desember - Read me forbedringer etter tilbakemelding

**Gjort**

- Oppdatert og presisert instruksjonene om config.js og config.example.js
- Gjenopprettet config.example.js 
- Forbedringer av forsiden (idé om illustrasjon, bedre førsteinntrykk)
- Ryddet og optimalisert all HTML/CSS (semantikk, struktur, W3C-validering – 0 feil).
- Oppdatert navigasjon med ikoner og tydelig aktiv-side-markering.
- Lagt inn enhetlig side-tittel (.page-title) på alle sider.
- Gjort hele layouten responsiv ned til 375px.
- Gjort siste UI-forbedringer (gradient header, kortdesign, tydeligere knapper).
- Kontrollert hele JavaScript-strukturen (ryddig, konsistent og modulær).
- Bekreftet at vær-API og AI-tips fungerer stabilt.
- Testet alle funksjoner: legg til oppgave → lagring → fullfør → vis i done.html.

Hvorfor:
For å sikre en profesjonell, robust og brukervennlig løsning som møter alle krav i eksamensoppgaven.



## 4. Teknisk oversikt

| Fil / mappe | Beskrivelse |
|------------|-------------|
| `index.html` | Hovedside med værdata og automatiske AI-tips |
| `tasks.html` | Side for å legge til og vise aktive oppgaver, inkludert chatbot |
| `done.html`  | Viser fullførte oppgaver hentet fra localStorage |
| `styles/base.css` | Felles stilark |
| `scripts/app.js` | Værfunksjon + AI-husarbeidstips |
| `scripts/chatbot.js` | AI-chatbot for oppgaver |
| `scripts/tasks.js` | Logikk for oppgaver |
| `scripts/storage.js` | Håndtering av localStorage |
| `scripts/config.js` | API-nøkler (ignorert i GitHub) |

---

## 5. Referanser og ressurser

- OpenAI API-dokumentasjon – brukt for å generere både værbaserte husarbeidstips og svar i Vaskebot (chatbot). Dokumentasjonen ble brukt til å forstå struktur for API-kall, modellvalg, feilhåndtering og meldingstyper (system/user).
- OpenWeather API-dokumentasjon – brukt for å hente sanntidsvær med temperatur og beskrivelse. Dokumentasjonen ble benyttet for å sette opp korrekte URL-parametere, city-query, units, og struktur på JSON-responsen.
- MDN Web Docs – primærkilde for HTML-, CSS- og JavaScript-syntaks, semantikk, accessibility, input-håndtering, og DOMContentLoaded. Brukt kontinuerlig under utvikling.
- GitHub Guides – brukt for å lære commit/push, branching, .gitignore, repository-struktur og generell Git-arbeidsflyt.
- Chrome DevTools / Lighthouse – brukt til testing, debugging, konsoll-feilhåndtering, performance-sjekker, responsivitet, og kontroll av localStorage.
- Qybele og mentor Reza – viktige ressurser gjennom prosjektet (webinarer, gjennomgang av krav, tilbakemeldinger, debugging-hjelp og veiledning i struktur, API-bruk og prosjektforbedringer).
- ChatGPT (OpenAI) - Brukt som støtteverktøy gjennom utviklingsprosessen til å forklare kode, foreslå løsninger ved feil, optimalisere struktur, kvalitetssikre semantikk, validere HTML/CSS/JS, og hjelpe med dokumentasjon (README-tekst, beskrivelser og formatering). All ferdig kode er gjennomgått, forstått og implementert av meg.
---

## 6. To-do-liste (oppdatert per 7. desember)

| Status | Oppgave |
|--------|---------|
| [x] | Opprette GitHub-repo og koble til VS Code |
| [x] | Lage prosjektstruktur (HTML, CSS, JS-mapper) |
| [x] | Lage grunnleggende layout i HTML |
| [x] | Opprette felles stilark (`base.css`) |
| [x] | Implementere oppgaveside med skjema |
| [x] | Oppdatere `done.html` for fullførte oppgaver |
| [x] | Utføre Git-arbeid (add, commit, push) |
| [~] | Forbedre CSS og visuell konsistens |
| [~] | Teste og forbedre responsivitet |
| [x] | Dokumentere fremdrift i README |
| [x] | Sette opp `config.js` og `.gitignore` |
| [x] | Teste OpenAI API |
| [x] | Teste OpenWeather API |
| [x] | Implementere AI-chatbot på oppgavesiden |
| [x] | Vise dynamiske værdata på forsiden |
| [x] | Lage automatisk AI-tips basert på vær |
| [x] | Lagre oppgaver i localStorage |
| [x] | Markere oppgaver som fullført og flytte dem |
| [x] | Fullføre styling på alle sider |
| [x] | Skrive refleksjonsjournal |
| [x] | Gjøre README helt klar for innlevering |

---

## 7. Videre forbedringer (hva jeg ville gjort med mer tid)

Hvis jeg skulle videreutvikle appen, ville jeg prioritert:

- Gjøre appen nedlastbar som PWA (Progressive Web App)
- Støtte for flere brukere i samme husholdning
- Automatisk tidsrullering av oppgaver:
  - daglig / ukentlig / månedlig
- Mulighet for tildeling av oppgaver til familiemedlemmer
- Filtrering og sortering av oppgaver
- Sesongbaserte og tidspunktsbaserte AI-forslag
- Mer visuell polish (animasjoner, ikoner, mikrointeraksjoner)

---


