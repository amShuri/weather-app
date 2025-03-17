import { getWeatherData } from './api.js';
import { createWeatherCard } from './ui.js';

async function handleFormSubmit(e) {
  e.preventDefault();
  const search = document.querySelector('form > input');

  if (search.validity.valueMissing) {
    search.setCustomValidity('You must enter a location.');
    search.reportValidity();
    return;
  }

  const weatherData = await getWeatherData(search.value);

  if (!weatherData) {
    search.setCustomValidity(`'${search.value}' is not a valid location.`);
    search.reportValidity();
    return;
  }

  createWeatherCard(weatherData);
  search.value = '';
  search.focus();
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);
