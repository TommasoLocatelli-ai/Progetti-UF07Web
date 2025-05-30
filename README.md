# UF07Web-n1

# Gestione Attività (Task-Management)

Questa applicazione web permette di gestire una lista di attività (to-do list). È pensata per essere semplice e intuitiva.

---

## Funzionalità

- **Aggiunta attività:** Inserisci il nome e seleziona lo stato ("Da fare", "In corso", "Completato"), poi clicca su "Aggiungi Attività".
- **Visualizzazione dinamica:** Le attività vengono mostrate in una lista aggiornata in tempo reale.
- **Modifica attività:** Puoi modificare il nome di ogni attività tramite il pulsante "Modifica".
- **Cambio stato:** Puoi cambiare lo stato di ogni attività tramite il pulsante "Cambia Stato".
- **Rimozione attività:** Puoi eliminare qualsiasi attività dalla lista tramite il pulsante "Rimuovi".
- **Ricerca e filtro:** Puoi cercare le attività per nome e filtrare la lista in base allo stato selezionato.
- **Interfaccia responsive:** La lista delle attività è scrollabile se diventa troppo lunga e l’interfaccia è centrata e gradevole.

---

## Struttura dei file

### index.html

Definisce la struttura della pagina e include:
- Un campo di input per il nome dell’attività.
- Un selettore per lo stato dell’attività.
- Un pulsante per aggiungere l’attività.
- Un campo di ricerca per filtrare le attività per nome.
- Un selettore per filtrare le attività in base allo stato.
- Un contenitore dinamico per la lista delle attività.
- Il collegamento ai file CSS e JavaScript.

### style.css

Gestisce l’aspetto grafico dell’applicazione:
- Centra il contenuto della pagina.
- Applica colori di sfondo diversi alle attività in base allo stato.
- Rende la lista delle attività scrollabile se troppo lunga.
- Migliora la leggibilità e l’usabilità con padding, bordi arrotondati e ombre leggere.

### script.js

Contiene tutta la logica dell’applicazione:
- Gestisce l’array delle attività (`tasks`), ognuna con un id, un nome e uno stato.
- Funzioni per aggiungere, modificare, cambiare stato, rimuovere e visualizzare le attività.
- Funzioni per la ricerca e il filtro in tempo reale.
- Aggiorna dinamicamente la lista delle attività nella pagina.

---

## Come usare

1. Apri `index.html` in un browser moderno.
2. Inserisci il nome di una nuova attività, scegli lo stato e clicca su "Aggiungi Attività".
3. Usa i campi di ricerca e filtro per trovare rapidamente le attività desiderate.
4. Modifica, cambia stato o rimuovi le attività tramite i pulsanti dedicati accanto a ciascuna voce.

---

## Specifiche tecniche

- **Tecnologie usate:**  
  - HTML5 per la struttura della pagina  
  - CSS3 per la presentazione e la responsività  
  - JavaScript vanilla per la logica e l’interattività

- **Compatibilità:**  
  - Funziona su tutti i browser moderni  
  - Non richiede installazione né dipendenze esterne

---

## Logica e implementazione

### Struttura HTML (`index.html`)

- Contiene un form per l’inserimento del nome e dello stato dell’attività.
- Presenta selettori per la ricerca e il filtro delle attività.
- Visualizza dinamicamente la lista delle attività tramite un contenitore dedicato.
- Collega i file CSS e JavaScript.

### Stili CSS (`style.css`)

- Utilizza Flexbox per centrare il contenuto della pagina sia verticalmente che orizzontalmente.
- Applica colori di sfondo diversi alle attività in base allo stato (`da-fare`, `in-corso`, `completato`).
- Rende la lista delle attività scrollabile se supera una certa altezza.
- Migliora la leggibilità con padding, bordi arrotondati e ombre leggere.

### Logica JavaScript (`script.js`)

- **Struttura dati:**  
  - Le attività sono memorizzate in un array di oggetti, ciascuno con `id`, `name` e `status`.
  - Ogni attività ha un identificatore univoco incrementale.

- **Funzioni principali:**
  - `addTask()`: aggiunge una nuova attività se il nome non è vuoto.
  - `deleteTask(id)`: rimuove un’attività tramite il suo ID.
  - `editTask(id)`: permette di modificare il nome di un’attività tramite un prompt.
  - `changeStatus(id)`: consente di cambiare lo stato di un’attività tramite un prompt, accettando solo valori validi.
  - `renderTasks()`: aggiorna dinamicamente la visualizzazione della lista, applicando filtri di testo e di stato. Ogni attività viene rappresentata con i pulsanti per modificarla, cambiarne lo stato o rimuoverla.

- **Ricerca e filtro:**  
  - La ricerca avviene in tempo reale tramite l’input di testo.
  - Il filtro per stato permette di mostrare solo le attività di un certo tipo o tutte.

- **Aggiornamento dinamico:**  
  - Ogni modifica (aggiunta, rimozione, modifica, cambio stato, filtro) aggiorna immediatamente la lista visualizzata senza ricaricare la pagina.

---

## Note di implementazione

- Tutta la logica è lato client: i dati non vengono salvati su server o in locale (nessun uso di localStorage).
- L’interfaccia è pensata per essere semplice, accessibile e facilmente estendibile.

---

## Esempio di utilizzo

- **Aggiungi attività:**  
  Scrivi "Comprare il pane", seleziona "Da fare" e clicca su "Aggiungi Attività".
- **Filtra attività:**  
  Seleziona "Completato" dal filtro per vedere solo le attività completate.
- **Modifica attività:**  
  Clicca su "Modifica" accanto a un’attività per cambiarne il nome.
- **Cambia stato:**  
  Clicca su "Cambia Stato" e inserisci uno stato valido ("da-fare", "in-corso", "completato").

---



# UF07Web-n2

# Cronometro Digitale

Questa applicazione web è un cronometro digitale realizzato in HTML, CSS e JavaScript puro. Permette di avviare, fermare, resettare il tempo e salvare tempi parziali (giri), con una grafica semplice e moderna. Tutto funziona lato client, senza necessità di backend o database.

---

## Descrizione funzionale

- **Visualizzazione tempo:** Il tempo viene mostrato in formato mm:ss:cc (minuti, secondi, centesimi).
- **Controlli principali:**  
  - **Start:** Avvia il conteggio del tempo.
  - **Stop:** Ferma il conteggio senza azzerare il tempo.
  - **Reset:** Riporta il cronometro a 00:00:00 senza cancellare i giri salvati.
  - **Giro:** Salva il tempo attuale come tempo parziale (giro), che viene mostrato in una lista sotto il cronometro.
- **Gestione giri:** Ogni giro può essere eliminato singolarmente cliccando sulla "×" accanto al tempo.
- **Interfaccia responsive:** Il cronometro è centrato nella pagina e la lista dei giri è scrollabile se troppo lunga.

---

## Esempio di utilizzo

- Premi **Start** per avviare il cronometro.
- Premi **Giro** per salvare un tempo parziale.
- Premi **Stop** per fermare il cronometro.
- Premi **Reset** per azzerare il tempo (i giri restano visibili).
- Clicca sulla "×" accanto a un giro per eliminarlo dalla lista.

---

## Specifiche tecniche

- **Tecnologie usate:**
  - HTML5 per la struttura della pagina.
  - CSS3 per la presentazione e la responsività.
  - JavaScript vanilla per la logica e l’interattività.
- **Compatibilità:**  
  - Funziona su tutti i browser moderni.
  - Non richiede installazione né dipendenze esterne.
- **Salvataggio dati:**  
  - Tutto avviene in memoria: i dati non vengono salvati su server o in locale.

---

## Logica e implementazione

### Struttura HTML (`index.html`)

- Un contenitore centrale con titolo, display del tempo, pulsanti di controllo e lista dei giri.
- Pulsanti con eventi associati alle funzioni JavaScript (`startTimer`, `stopTimer`, `resetTimer`, `lapTime`).
- Lista `<ul id="laps"></ul>` per i tempi parziali.

### Stili CSS (`style.css`)

- Usa Flexbox per centrare il contenuto sia verticalmente che orizzontalmente.
- Il display del tempo è grande e ben visibile.
- I pulsanti sono colorati e facilmente distinguibili.
- La lista dei giri è scrollabile se supera una certa altezza.
- Ogni giro ha una "×" per la rimozione rapida.

### Logica JavaScript (`script.js`)

- **Variabili principali:**
  - `minutes`, `seconds`, `milliseconds`: tengono traccia del tempo trascorso.
  - `timer`: identificatore del timer per il setTimeout.
  - `running`: stato del cronometro (in esecuzione o fermo).
- **Funzioni:**
  - `updateDisplay()`: aggiorna il display del tempo.
  - `startTimer()`: avvia il cronometro se non già in esecuzione.
  - `runTimer()`: aggiorna il tempo ogni 10ms, gestendo il passaggio di centesimi, secondi e minuti.
  - `stopTimer()`: ferma il cronometro.
  - `resetTimer()`: azzera il tempo senza cancellare i giri.
  - `lapTime()`: salva il tempo attuale come giro e lo aggiunge alla lista, con una "×" per la rimozione.
- **Gestione giri:**  
  - Ogni giro è un `<li>` con il tempo e una "×" che, se cliccata, elimina solo quel giro.

---

## Avvio rapido

1. Scarica o clona il progetto.
2. Apri `index.html` con un browser moderno.
3. Usa il cronometro direttamente dalla pagina.

---



# UF07Web-n3

# Meteo Locale

Questa applicazione web consente di visualizzare le condizioni meteo attuali di una località, scegliendo tra la posizione attuale del dispositivo o l’inserimento manuale di latitudine e longitudine. L’interfaccia è semplice, moderna e completamente in italiano.

---

## Descrizione funzionale

- **Scelta modalità:** L’utente può scegliere se usare la posizione attuale (tramite geolocalizzazione del browser) o inserire manualmente le coordinate.
- **Visualizzazione meteo:** I dati meteo vengono mostrati in una card, con informazioni su latitudine, longitudine, temperatura, umidità, vento, copertura nuvolosa, precipitazioni e codice meteo.
- **Più ricerche:** Ogni ricerca aggiunge una nuova card meteo, senza sovrascrivere le precedenti.
- **Icone meteo:** Ogni card mostra un’icona rappresentativa delle condizioni meteo correnti.
- **Interfaccia responsive:** Le card sono disposte in orizzontale e vanno a capo se lo spazio non basta.

---

## Esempio di utilizzo

- Seleziona "Usa posizione attuale" e clicca su "Ottieni meteo attuale" per vedere il meteo della tua posizione.
- Seleziona "Inserisci coordinate", inserisci latitudine e longitudine, poi clicca su "Ottieni meteo attuale" per vedere il meteo di una località specifica.
- Ogni ricerca aggiunge una nuova card con i dati meteo richiesti.

---

## Specifiche tecniche

- **Tecnologie usate:**
  - HTML5 per la struttura della pagina.
  - CSS3 per la presentazione e la responsività.
  - JavaScript vanilla per la logica e l’interattività.
- **Compatibilità:**
  - Funziona su tutti i browser moderni.
  - Non richiede installazione né dipendenze esterne.
- **Salvataggio dati:**
  - Tutto avviene in memoria: i dati non vengono salvati su server o in locale.

---

## Logica e implementazione

### Struttura HTML (`index.html`)

- Un contenitore centrale con titolo, radio button per la scelta della modalità, input per le coordinate (mostrati solo se necessario), pulsante per la richiesta dei dati e area per i messaggi.
- Un contenitore separato (`#cards`) dove vengono aggiunte dinamicamente le card dei risultati meteo.
- Collegamento ai file CSS e JavaScript.

### Stili CSS (`style.css`)

- Usa Flexbox per centrare il contenuto e disporre le card in orizzontale con wrapping automatico.
- Le card hanno sfondo chiaro, ombra, bordi arrotondati e sono ben distanziate.
- L’interfaccia è moderna, leggibile e responsive.

### Logica JavaScript (`script.js`)

- **Gestione modalità:**  
  - La funzione `toggleInputs()` mostra o nasconde gli input manuali in base alla modalità selezionata.
- **Richiesta dati meteo:**  
  - La funzione `getWeather()` determina la modalità e recupera le coordinate (da geolocalizzazione o input manuale).
  - Se la geolocalizzazione fallisce, viene mostrato un messaggio di errore.
  - I dati vengono richiesti tramite fetch all’API Open-Meteo.
- **Visualizzazione risultati:**  
  - Ogni risposta genera una nuova card con i dati meteo, aggiunta al contenitore `#cards`.
  - Le icone meteo sono generate dinamicamente tramite emoji disegnate su canvas.
- **Gestione errori:**  
  - Messaggi chiari vengono mostrati in caso di errori di input o di rete.

---

## Avvio rapido

1. Scarica o clona il progetto.
2. Apri `index.html` con un browser moderno.
3. Scegli la modalità desiderata e visualizza i dati meteo.

