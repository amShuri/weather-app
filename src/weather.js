import { getWeatherData } from './api.js';
import { createWeatherCard } from './ui.js';

async function handleFormSubmit(e) {
  e.preventDefault();
  const search = document.querySelector('form > input');

  if (search.validity.valueMissing) {
    search.setCustomValidity('You must provide a location');
    search.reportValidity();
    search.focus();
    return;
  }

  createWeatherCard(await getWeatherData(search.value));
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);
