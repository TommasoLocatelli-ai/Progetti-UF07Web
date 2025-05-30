let minutes = 0; // Minuti trascorsi
let seconds = 0; // Secondi trascorsi
let milliseconds = 0; // Centesimi di secondo trascorsi
let timer; // Variabile del timer
let running = false; // Stato del cronometro (in esecuzione o fermo)


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