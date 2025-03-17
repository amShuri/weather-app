import weatherIcons from './weather_icons';

const locationTitle = document.getElementById('location-name');
const cardContainer = document.getElementById('card-container');

export function createWeatherCard(weatherData) {
  /* The 'weatherData' object has a property for the location name (address),
   * and 7 other for each day. That's why we set the textContent for location
   * first, so that we can exit the loop early when iteration through the
   * property 'address'.
   */
  locationTitle.textContent = weatherData.address;
  cardContainer.innerHTML = '';

  Object.entries(weatherData).forEach(([key, data]) => {
    if (key === 'address') return;

    const weatherCondition = data.icon;
    const formattedWeatherCondition = data.icon.replaceAll('-', ' ');
    const temperature = data.temp;
    const day = data.datetime.day;
    const weekday = data.datetime.weekday;
    const month = data.datetime.month;

    cardContainer.insertAdjacentHTML(
      'beforeend',
      `
          <div class="card">
            <h2 class="card-title">${weekday}</h2>

            <img 
              class="card-img"
              src="${weatherIcons[weatherCondition]}"
              width="150"
              height="150"
            >
            <p class="card-condition">${formattedWeatherCondition}</p>


            <div class="separator"></div>

            <div class="card-details">
              <p class="temperature">${temperature}ºC</p>
              <p class="date">${month} ${day}</p>
            </div>

          </div>
        `,
    );
  });
}
