/* ===========================================
   Oppgaver (tasks.html)
   - Håndterer skjema og liste for faste husarbeidsoppgaver
   - Bruker TaskStorage for lagring i localStorage
=========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------------------
     1. Finn HTML-elementene
  ------------------------------------------- */
  const form = document.getElementById("taskForm");
  const roomSelect = document.getElementById("category");
  const titleInput = document.getElementById("title");
  const errorBox = document.getElementById("formError");

  const taskList = document.getElementById("taskList");
  const emptyState = document.getElementById("emptyState");

  // Hvis noe mangler, avslutt pent (beskytter hvis scriptet lastes feil sted)
  if (!form || !roomSelect || !titleInput || !taskList || !emptyState) {
    console.warn("tasks.js: Fant ikke alle forventede elementer på siden.");
    return;
  }

  /* -------------------------------------------
     2. Last oppgaver fra localStorage
  ------------------------------------------- */
  let tasks = TaskStorage.load(); // fra storage.js

  renderTasks();

  /* -------------------------------------------
     3. Håndter innsending av skjema
  ------------------------------------------- */
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorBox.textContent = "";

    const title = titleInput.value.trim();
    const room = roomSelect.value;

    if (!title) {
      errorBox.textContent = "Skriv inn en oppgave.";
      titleInput.focus();
      return;
    }

    // Ny fast oppgave
    const newTask = {
      id: Date.now(),
      title: title,
      room: room,
      done: false, // markeres som fullført senere
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    TaskStorage.save(tasks);
    renderTasks();

    form.reset();
    roomSelect.value = "";
  });

  /* -------------------------------------------
     4. Tegn opp liste over oppgaver
  ------------------------------------------- */
  function renderTasks() {
    taskList.innerHTML = "";

    if (!tasks.length) {
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.classList.add("task-item");
      if (task.done) {
        li.classList.add("task-done");
      }

      // Tekst: "Kjøkken: Støvsuge"
      const text = document.createElement("span");
      text.classList.add("task-title");
      text.textContent = `${task.room}: ${task.title}`;

      // Knapp for å markere oppgave som fullført
      const taskButton = document.createElement("button");
      taskButton.type = "button";
      taskButton.classList.add("task-toggle");
      taskButton.textContent = task.done ? "Utført" : "Gjør i dag";

      // Hvis oppgaven allerede er fullført, skal knappen ikke gjøre noe
      if (task.done) {
        taskButton.disabled = true;
      }

      // Marker oppgaven som fullført og lagre til localStorage
      taskButton.addEventListener("click", () => {
        if (task.done) return; // ekstra sikring

        task.done = true;
        TaskStorage.save(tasks);
        console.log("Markert som fullført:", task);
        renderTasks();

        // Send brukeren videre til siden for fullførte oppgaver
        window.location.href = "done.html";
      });

      li.appendChild(text);
      li.appendChild(taskButton);
      taskList.appendChild(li);
    });
  }
});
