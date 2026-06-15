const API_KEY = '73bd00b6b4b37b3cadebae4a5dc5e606';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const errorMessage = document.getElementById('errorMessage');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading'); // FIX: now matches the HTML id

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

function hideError() {
  errorMessage.classList.add('hidden');
}

// FIX: Removed stray text "this is my js code" that was causing a syntax error
function showLoading() {
  loading.classList.remove('hidden');
  weatherInfo.classList.add('hidden');
  hideError();
}

function hideLoading() {
  loading.classList.add('hidden');
}

async function fetchWeather(cityName) {
  if (!cityName || cityName.trim() === '') {
    showError('Please enter a city name.');
    return;
  }

  showLoading();

  try {
    const WeatherURL = `${API_ENDPOINT}?q=${cityName.trim()}&appid=${API_KEY}&units=metric`;
    const response = await fetch(WeatherURL);

    if (!response.ok) {
      if (response.status === 401) throw new Error('Invalid API Key');
      else if (response.status === 404) throw new Error('City not found');
      else if (response.status === 429) throw new Error('Too many requests! Please wait and try again.');
      else throw new Error('Unexpected error occurred.');
    }

    const weatherData = await response.json();
    displayWeather(weatherData);
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoading();
  }
}

function displayWeather(data) {
  weatherInfo.classList.remove('hidden');
  document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;

  const temp = Math.round(data.main.temp);
  document.getElementById('temp').textContent = temp;

  const feelsLike = Math.round(data.main.feels_like);
  document.getElementById('feelsLike').textContent = `${feelsLike}°C`;

  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('description').textContent = data.weather[0].description;

  const windKmh = Math.round(data.wind.speed * 3.6);
  document.getElementById('windSpeed').textContent = `${windKmh} km/h`;

  document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
}

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value;
  fetchWeather(cityName);
});

cityInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const cityName = cityInput.value;
    fetchWeather(cityName);
  }
});

cityInput.addEventListener('input', () => {
  if (!errorMessage.classList.contains('hidden')) {
    hideError();
  }
});
