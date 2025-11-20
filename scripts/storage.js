/* ===========================================
   TaskStorage – lagrer og henter oppgaver
   Lagres i localStorage som "tasks"
=========================================== */

const TaskStorage = {
  load() {
    try {
      const json = localStorage.getItem("tasks");
      return json ? JSON.parse(json) : [];
    } catch (err) {
      console.error("Klarte ikke å lese tasks fra localStorage:", err);
      return [];
    }
  },

  save(tasks) {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (err) {
      console.error("Klarte ikke å lagre tasks til localStorage:", err);
    }
  },
};
