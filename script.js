const searchCity = document.querySelector('#searchCity');
const searchButton = document.querySelector('#searchButton');
const weatherInfo = document.querySelector('#weatherInfo');

searchButton.addEventListener('click', () => {
  // Get the city entered by the user
  const city = searchCity.value;

  // Clear the weather info area
  weatherInfo.innerHTML = '';

  // Fetch the weather data from the API
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(data => {
      // Display the weather info
      if (data.temperature && data.description) {
        const temperature = data.temperature;
        const description = data.description;

        const weatherHTML = `
          <p>Temperature: ${temperature}</p>
          <p>Description: ${description}</p>
        `;

        weatherInfo.innerHTML = weatherHTML;
      } else {
        weatherInfo.innerHTML = 'No weather data found';
      }
    })
    .catch(error => {
      console.error(error);
      weatherInfo.innerHTML = 'Error fetching weather data';
    });
});
