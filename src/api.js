import { formatWeatherData } from './utility.js';

export async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=[KEYHERE]&contentType=json`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    const formattedResult = formatWeatherData(result);
    return formattedResult;
  } catch (err) {
    // Do something with the error
    console.log(err);
  }
}
