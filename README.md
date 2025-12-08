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

## 2. Fremdriftslogg

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


## 3. Teknisk oversikt

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

## 4. Referanser og ressurser

- OpenAI API-dokumentasjon  
- OpenWeather API-dokumentasjon  
- MDN Web Docs  
- GitHub Guides  
- Chrome DevTools / Lighthouse  

---

## 5. To-do-liste (oppdatert per 7. desember)

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
| [ ] | Fullføre styling på alle sider |
| [ ] | Skrive refleksjonsjournal |
| [ ] | Gjøre README helt klar for innlevering |

---

## 6. Videre forbedringer (hva jeg ville gjort med mer tid)

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


