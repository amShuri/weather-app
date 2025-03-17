function formatDate(datetime) {
  const date = new Date(datetime);
  const day = date.toLocaleDateString(undefined, {
    day: 'numeric',
  });
  const weekday = date.toLocaleDateString(undefined, { weekday: 'long' });
  const month = date.toLocaleDateString(undefined, {
    month: 'long',
  });

  return {
    day,
    weekday,
    month,
  };
}

export function formatWeatherData(weatherObj) {
  const currentConditions = weatherObj.days.slice(1, 8).map((day) => {
    return {
      temp: day.temp,
      icon: day.icon,
      datetime: formatDate(day.datetime),
    };
  });
  const [dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven] =
    currentConditions;
  const address = weatherObj.resolvedAddress.split(',')[0];
  return {
    address,
    dayOne,
    dayTwo,
    dayThree,
    dayFour,
    dayFive,
    daySix,
    daySeven,
  };
}
