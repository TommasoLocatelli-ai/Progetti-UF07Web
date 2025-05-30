let minutes = 0; // Minuti trascorsi
let seconds = 0; // Secondi trascorsi
let milliseconds = 0; // Centesimi di secondo trascorsi
let timer; // Variabile del timer
let running = false; // Stato del cronometro (in esecuzione o fermo)

function updateDisplay() {
  // Aggiorna il display con il tempo formattato
  const display = document.getElementById("display");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  const ms = String(milliseconds).padStart(2, "0");
  display.textContent = `${mm}:${ss}:${ms}`;
}

function startTimer() {
  // Avvia il cronometro se non è già in esecuzione
  if (!running) {
    running = true;
    runTimer();
  }
}

function runTimer() {
  // Esegue il conteggio del tempo ricorsivamente
  if (!running) return;

  timer = setTimeout(() => {
    milliseconds++;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
    runTimer();
  }, 10); // Aggiorna ogni 10ms
}


function stopTimer() {
  // Ferma il cronometro
  running = false;
  clearTimeout(timer);
}

function resetTimer() {
  // Ferma e azzera il cronometro
  running = false;
  clearTimeout(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function lapTime() {
  // Salva un tempo parziale (giro) nella lista
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  const ms = String(milliseconds).padStart(2, "0");
  const lap = document.createElement("li");
  lap.innerHTML = `${mm}:${ss}:${ms} <span class="remove-lap" style="color:#f44336;cursor:pointer;margin-left:10px;font-weight:bold;" onclick="this.parentElement.remove()">×</span>`;
  document.getElementById("laps").appendChild(lap);
}