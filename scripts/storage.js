/* ===========================================
   TaskStorage
   - Ansvar: hente og lagre oppgaver i localStorage
   - Alt lagres under nøkkelen "tasks"
=========================================== */

const TaskStorage = {
  /* -------------------------------------------
     Hent lagrede oppgaver
  ------------------------------------------- */
  load() {
    try {
      const json = localStorage.getItem("tasks");
      const tasks = json ? JSON.parse(json) : [];

      // Sikrer at vi aldri returnerer noe annet enn et array
      return Array.isArray(tasks) ? tasks : [];
    } catch (err) {
      console.error("Klarte ikke å lese tasks fra localStorage:", err);
      return [];
    }
  },

  /* -------------------------------------------
     Lagre oppgaver
  ------------------------------------------- */
  save(tasks) {
    try {
      // Sikrer at kun arrays lagres
      if (!Array.isArray(tasks)) {
        console.warn("Forsøkte å lagre ugyldig tasks-format:", tasks);
        return;
      }

      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Klarte ikke å lagre tasks til localStorage:", err);
    }
  },
};
