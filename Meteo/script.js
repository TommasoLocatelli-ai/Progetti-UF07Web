const weatherEl = document.getElementById("weather"); // Elemento dove mostrare messaggi o errori

function toggleInputs() {
  // Mostra o nasconde gli input manuali in base alla modalità selezionata
  const manual = document.querySelector('input[name="mode"]:checked').value === "manual";
  document.getElementById("manualInputs").style.display = manual ? "block" : "none";
}

function getWeather() {
  // Ottiene la modalità selezionata (locale o manuale)
  const mode = document.querySelector('input[name="mode"]:checked').value;
  if (mode === "local") {
    // Usa la geolocalizzazione del browser
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      weatherEl.innerHTML = "Geolocalizzazione non supportata dal browser.";
    }
  } else {
    // Prende latitudine e longitudine dagli input manuali
    const lat = parseFloat(document.getElementById("latInput").value);
    const lon = parseFloat(document.getElementById("lonInput").value);
    if (isNaN(lat) || isNaN(lon)) {
      weatherEl.innerHTML = "Inserisci latitudine e longitudine valide.";
      return;
    }
    fetchWeather(lat, lon);
  }
}

function success(position) {
  // Callback per la geolocalizzazione: ottiene latitudine e longitudine e chiama fetchWeather
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetchWeather(lat, lon);
}

function fetchWeather(lat, lon) {
  // Costruisce la URL per l'API Open-Meteo e recupera i dati meteo
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,cloud_cover,wind_speed_10m,weather_code`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // Mostra i dati meteo in una card
      displayWeather(data);
    })
    .catch(() => {
      weatherEl.innerHTML = "Errore nel recupero dati meteo.";
    });
}

function error() {
  // Callback in caso di errore nella geolocalizzazione
  weatherEl.innerHTML = "Impossibile ottenere la posizione.";
}

function displayWeather(data) {
  // Mostra una card con i dati meteo ricevuti
  const w = data.current;
  const icon = getWeatherIcon(w.weather_code);

  const lat = data.latitude;
  const lon = data.longitude;

  const card = document.createElement("div");
  card.className = "weather-card";
  card.innerHTML = `
    <img src="${icon}" class="weather-icon" alt="meteo" />
    <p><strong>Latitudine:</strong> ${lat}</p>
    <p><strong>Longitudine:</strong> ${lon}</p>
    <p><strong>Temperatura:</strong> ${w.temperature_2m} °C</p>
    <p><strong>Umidità:</strong> ${w.relative_humidity_2m} %</p>
    <p><strong>Vento:</strong> ${w.wind_speed_10m} km/h</p>
    <p><strong>Copertura nuvolosa:</strong> ${w.cloud_cover} %</p>
    <p><strong>Precipitazioni:</strong> ${w.precipitation} mm</p>
    <p><strong>Codice meteo:</strong> ${w.weather_code}</p>
  `;

  document.getElementById("cards").appendChild(card);

  weatherEl.innerHTML = ""; // Pulisce eventuali messaggi precedenti
}

function getWeatherIcon(code) {
  // Mappa i codici meteo a emoji rappresentative
  const icons = {
    0: "☀️",     // Sole
    1: "🌤️",     // Sole con qualche nuvola
    2: "⛅",      // Nuvoloso
    3: "☁️",     // Coperto
    45: "🌫️",    // Nebbia
    48: "🌫️",    // Nebbia densa
    51: "🌦️",    // Pioviggine leggera
    61: "🌧️",    // Pioggia leggera
    71: "❄️",     // Neve leggera
    95: "🌩️",    // Temporali
  };

  const emoji = icons[code] || "❓"; // Usa l'emoji corrispondente o un punto interrogativo se il codice non è mappato

  // Crea un canvas per disegnare l'emoji come immagine
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 64;
  canvas.height = 64;
  ctx.font = "48px serif";
  ctx.fillText(emoji, 10, 50); // Disegna l'emoji sul canvas

  return canvas.toDataURL(); // Restituisce l'immagine come data URL
}