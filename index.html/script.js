const apiKey = '00bc073b05e84cd18b6142212242610'; 
const cidade = 'Porto Alegre'; 
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na rede');
    }
    return response.json();
  })
  .then(data => {
    document.querySelector('#temperatura').textContent = `${data.current.temp_c}°C`;
    document.querySelector('#clima').textContent = data.current.condition.text;
    document.querySelector('#vento').textContent = `${data.current.wind_kph} km/h`;
    document.querySelector('#precipitacao').textContent = `${data.current.precip_mm} mm`;
  })
  .catch(error => console.error('Erro ao obter dados da API:', error));

