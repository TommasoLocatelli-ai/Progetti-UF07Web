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
