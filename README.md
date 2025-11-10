# Alt-i-orden-
En webapp for å organisere husarbeid og oppgaver i hjemmet, samt fordeling av oppgaver på medlemmer i husstanden.
# Alt i orden 🏡

###  Dag 1 – Oppstart og planlegging

**Formål med prosjektet:**  
En enkel og brukervennlig webapp for å organisere husarbeid i en husholdning.  
Brukeren skal kunne legge til oppgaver, markere dem som fullført, se en historikk og eventuelt hente inspirasjon eller motivasjon via en API (for eksempel værmelding eller sitater).

---

###  Hva jeg har gjort i dag:
- Laget enkle skisser og struktur for appen.
-Gått gjennom eksamenskrav og vurdert hva som må prioriteres.
-Bestemt at løsningen skal være en intern app for egen husholdning,dette gjør det mulig å fokusere på funksjon og brukeropplevelse framfor backend og skalering.
-Definert sider, innhold og funksjonelt scope for å sikre at alt kan leveres innenfor kravene og tiden (Utvide/forbedre hvis tid)
- Installert **Git** og satt opp **Git Bash**.
- Opprettet **GitHub-repo** kalt `Alt-i-orden`.
- Lært å klone repoet lokalt og åpnet prosjektet i **VS Code**.
- Laget hovedmappen `Eksamen Frontend Essentials` for prosjektet.
- Forstått hvordan Live Server fungerer for å se nettsiden visuelt.
- Begynt å planlegge struktur og sider:
  - `index.html` – landingsside (vær + oversikt)
  - `tasks.html` – oppgaver / to-do-funksjon
  - `done.html` – fullførte oppgaver (historikk)
- Avklart at all funksjonalitet skal kjøres **i nettleseren (client-side)**, uten backend.

---

###  Pain points / læring i dag:
- Måtte finne ut hvordan Git Bash fungerer i samarbeid med VScode og Git.
- Oppdaget at VS Code ikke viser nettsiden automatisk, men må bruke **Live Server**.
- Litt usikker på mappestruktur i starten, men fikk satt opp en forløpig plan.
- Lært forskjellen mellom *Git* (lokalt) og *GitHub* (sky).

---

###  Plan for neste økt:
Planlegge oppsett for 3 sider:

-Hjem – oversikt + vær-API
-Oppgaver – skjema + to-do-liste + filter
-Fullførte – historikk over ferdige oppgaver

mulig-> Medlemmer som modal: legge til navn via skjema (lagres i localStorage).

-Oppgave-skjema: legge til oppgave med validering (tittel, kategori, ansvarlig, frist).

-Filter per rom: (Bad, Kjøkken, Stue osv.) uten egne sider.
-Integrere vær-API (OpenWeather) på Hjem-siden.
-Legge inn chatbot-panel (OpenAI) tilgjengelig på alle sider for hjelp og motivasjon.

- Opprette grunnfilene (`index.html`, `tasks.html`, `done.html`, `styles`, `scripts`).
- Lage første HTML-mal og teste visning med Live Server.
- Legge inn navigasjon mellom sidene.
- Begynne å teste enkel **to-do-funksjon** (legge til og fullføre oppgaver i localStorage).

---
##  Oppdatering – 10. november

I dag jobbet jeg videre med **forsiden (index.html)** og **grunnstilen (base.css)**.

### Endringer gjort:
- La til ekstra styling for startsiden:
  - Seksjon for værinformasjon
  - Snarveier med knapper og hover-effekt
  - Oppdatert farger, padding og layout
- Testet “Go Live” for å se siden i nettleser
- Lærte hvordan man bruker `git add`, `commit` og `push` for å oppdatere GitHub

### Hvorfor:
Disse oppdateringene gir startsiden et ryddig og oversiktlig uttrykk, og gjør det lettere å bygge videre på API-integrasjonen for vær og chatbot senere.

### Neste steg:
- Legge inn JavaScript for å hente faktisk værdata fra et API
- Starte på oppgavesiden (tasks.html)





###  To-do (teknisk)

- [ ] Legge inn vær-API (OpenWeather) på Hjem-siden  
- [ ] Lage oppgaveside (tasks.html) med skjema for nye oppgaver  
- [ ] Legge til funksjon for å markere oppgaver som fullført  
- [ ] Lagre oppgaver i localStorage slik at de ikke forsvinner ved oppdatering  
- [ ] Oppdatere done.html med historikk over fullførte oppgaver  
- [ ] Implementere chatbot (OpenAI API) tilgjengelig på alle sider  
- [ ] Teste og justere responsivitet (mobil, nettbrett, PC)  
- [ ] Legge til enkel validering på skjema (tomt felt, frist osv.)  
- [ ] Oppdatere README.md med fremdrift etter hver arbeidsøkt  

