/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

export const weather = (() => {
  async function fetchWeatherData(searchTerm) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ebf28ac8a531ad701fc987b986617b49`;
    try {
      const fetchResponse = await fetch(endpoint);
      if (!fetchResponse.ok) {
        throw new Error(`4O4: COULD NOT FIND '${searchTerm}'.`);
      } else {
        const fetchedData = await fetchResponse.json();
        return fetchedData;
      }
    } catch (error) {
      console.error(error);
    }
  }
  return { fetchWeatherData };
})();
