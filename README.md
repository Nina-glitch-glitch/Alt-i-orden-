# Alt-i-orden

En enkel og brukervennlig webapp for å organisere husarbeid i en husholdning.  
Brukeren skal kunne legge til oppgaver, markere dem som fullført, se en historikk,  
og hente inspirasjon via API-er (for eksempel værmelding eller motiverende sitater).

---

## 1. Formål og prosjektbeskrivelse

Prosjektet er en eksamensoppgave i frontend-utvikling med fokus på brukervennlighet, strukturert kode,  
og integrasjon av API-er. Løsningen skal kjøres i nettleseren (client-side) uten backend.

Målet er å lage et helhetlig, responsivt og forståelig grensesnitt som lar brukeren:
- Få oversikt over husarbeid
- Legge til nye oppgaver med frist og tildeling
- Se historikk over fullførte oppgaver
- Motta relevant informasjon fra et vær-API og en AI-chatbot

---

## 2. Fremdriftslogg

### 7. november – Oppstart og planlegging

**Gjort:**
- Gått gjennom eksamenskrav og planlagt leveranse.
- Bestemt at løsningen skal være en intern husholdningsapp (fokus på funksjon fremfor skalering).
- Laget enkle skisser og struktur i Figma.
- Installert Git og satt opp GitHub og Git Bash.
- Klonet repo og åpnet prosjektet i Visual Studio Code.
- Laget prosjektmappe og struktur:
  - index.html  
  - tasks.html  
  - done.html  
  - styles/ (for CSS)  
  - scripts/ (for JavaScript)
- Aktivert Live Server for forhåndsvisning.
- Lært grunnleggende bruk av git add, commit og push.

**Læring og utfordringer:**
- Forstått forskjellen mellom Git (lokalt) og GitHub (sky).
- Måtte finne ut hvordan Live Server og Git fungerer sammen.
- Usikkerhet rundt mappestruktur, men fikk etablert en logisk løsning.

---

### 10. november – Grunnstruktur og visuell oppbygging

**Gjort:**
- Bygget første versjon av forside (`index.html`) og lagt inn navigasjon mellom sidene.
- Opprettet felles stilark (`base.css`) og strukturert kode for gjenbruk.
- Opprettet seksjoner for introduksjon, vær, og snarveier.
- Lagt til hover-effekter, farger og tekstjusteringer.
- Testet “Go Live” for å bekrefte koblinger mellom HTML og CSS.
- Lært å bruke Git effektivt med staging, commits og push til GitHub.

**Hvorfor:**
- Dette gir en ryddig visuell base og en god mal for de andre sidene.
- Klargjør for API-integrasjon (vær og chatbot) senere.

---

### 12. november – Strukturkontroll og konsistens

**Gjort:**
- Gått gjennom alle HTML-filer for å sikre riktig struktur og lik oppbygging.
- Kontrollert at alle sider peker til `styles/base.css`.
- Fjernet unødvendige elementer og ryddet i HTML.
- Lagt til tydelige kommentarer og seksjonsoverskrifter i koden.
- Oppdatert README for å reflektere progresjon og plan videre.

**Hvorfor:**
- Ensartet kodebase gjør det lettere å utvikle videre og teste funksjoner.
- Et felles stilark og ryddig HTML legger grunnlag for responsivitet og JS-funksjoner.


---


### 13. november – Fullført API-integrasjon (OpenWeather + OpenAI)

**Gjort:**
- Lagt inn gyldig OpenWeather API-nøkkel i `config.js`.
- Rettet syntaksfeil i `config.js` (manglende komma → nøkler ble ikke lastet).
- Verifisert at både OpenAI og OpenWeather lastes via `window.CONFIG`.
- Testet og bekreftet at begge API-er fungerer:
  - **OpenAI:** Fikk vellykket respons fra modellen `gpt-4o-mini` (“Bra!”).
  - **OpenWeather:** Fikk korrekt temperatur for Oslo (f.eks. 4.58°C).
- Implementert og aktivert funksjonene `testOpenAI()` og `testWeather()`.
- Sikret at API-kall først kjøres etter `DOMContentLoaded`.
- Bekreftet endelig at `.gitignore` skjuler `config.js` fullstendig fra GitHub.
- Oppdatert `testWeather()` til å vise ekte værdata i UI (`#weather-info`) på forsiden.
- Henter nå temperatur og beskrivelse for Oslo (f.eks. "Oslo: 5°C, overcast clouds").


**Hvorfor:**
- API-integrasjon er en sentral del av eksamenskravet.
- Nå er grunnlaget lagt for både chatbot-funksjonen og dynamisk værvisning på forsiden.
- Trygg håndtering av nøklene gjør prosjektet profesjonelt og sikkerhetsmessig korrekt.

**Lært i dag:**
- Hvordan små syntaksfeil (manglende komma) kan stoppe hele config-oppsettet.
- Hvordan debugge manglende API-nøkler ved hjelp av `console.log` og tidlig init-sjekk.
- Hvordan lage enkle, trygge test-funksjoner for å verifisere API-integrasjon.
- Forskjellen på lokal konfigurasjon (`config.js`) og distribuerbart eksempel (`config.example.js`).
- Hvordan API-kall returnerer JSON, og hvordan man henter ut temperatur og tekstsvar.

### 14. november – Vær-API med dynamisk byvalg

**Gjort:**
- Utvidet værseksjonen på forsiden (`index.html`) med input-felt og knapp for valg av sted.
- Oppdatert `app.js` slik at værkallet ikke lenger er låst til Oslo, men bruker byen brukeren skriver inn.
- Implementert støtte for både klikk på knapp og Enter-tast i input-feltet.
- Testet OpenWeather-respons og bekreftet at temperatur og værbeskrivelse oppdateres direkte i `#weather-info`.

**Hvorfor:**
- Øker nytteverdien ved at appen nå fungerer for flere lokasjoner, ikke bare Oslo.
- Gir brukeren mer kontroll på informasjonen selv — i stedet for GPS, som krever mer avansert kode og personvern-hensyn.

**Lært i dag:**
- Hvordan hente og bruke data dynamisk fra UI-input.
- Hvordan trigge API-kall både via knapp og tastatur (Enter-listener).
- Hvordan gjøre DOM-oppdatering trygg (kun hvis elementet finnes).


## 3. Teknisk oversikt

| Fil / mappe | Beskrivelse |
|--------------|--------------|
| `index.html` | Hovedside med værseksjon og snarveier |
| `tasks.html` | Side for å legge til og vise aktive oppgaver |
| `done.html`  | Viser fullførte oppgaver hentet fra localStorage |
| `styles/base.css` | Felles stilark for alle sider |
| `scripts/` | Samler JavaScript-filer for funksjonalitet og lagring |
| `README.md` | Dokumentasjon av fremdrift, refleksjon og plan |

---

## 4. Referanser og ressurser

- OpenAI API dokumentasjon  
- OpenWeather API dokumentasjon  
- MDN Web Docs (HTML, CSS, JavaScript)  
- GitHub Guides  
- Chrome DevTools / Lighthouse for testing  

---

## 5. To-do-liste (oppdatert 13. november)

| Status | Oppgave |
|:------:|:--------|
| [x] | Opprette GitHub-repo og koble til VS Code |
| [x] | Lage prosjektstruktur (HTML, CSS, JS-mapper) |
| [x] | Lage grunnleggende layout i HTML (header, main, footer) |
| [x] | Opprette felles stilark `base.css` og koble til alle sider |
| [x] | Implementere oppgaveside (`tasks.html`) med skjema for nye oppgaver |
| [x] | Oppdatere `done.html` for å vise historikk over fullførte oppgaver |
| [x] | Lære og utføre Git-kommandoer (add, commit, push) |
| [~] | Forbedre felles CSS og struktur på tvers av sider |
| [~] | Teste og justere responsivitet (mobil, nettbrett, PC) |
| [x] | Dokumentere fremdrift etter hver arbeidsøkt i README |
| [x] | Sette opp `config.js` og `.gitignore` for API-nøkler |
| [x] | Teste OpenAI API og hente første svar |
| [x] | Teste OpenWeather API og hente ekte temperatur |
| [~] | Implementere chatbot (OpenAI API) tilgjengelig på alle sider |
| [x] | Vise ekte værdata dynamisk på forsiden |
| [ ] | Legge til funksjon for å markere oppgaver som fullført |
| [ ] | Lagre oppgaver i localStorage slik at de ikke forsvinner ved oppdatering |
| [ ] | Legge til enkel validering på skjema (tomt felt, frist osv.) |
| [ ] | Legge til forslag basert på vær (eks. “Perfekt dag for å vaske vinduer”) |


---


