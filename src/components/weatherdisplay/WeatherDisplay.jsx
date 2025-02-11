
const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>Kraunasi...</p>;
  }

  const temperature = weather.main.temp;
  const description = weather.weather[0].description;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={iconUrl} alt={description} />
      <p>Temperatūra: {temperature}°C</p>
      <p>Aprašymas: {description}</p>
    </div>
  );
};
export default WeatherDisplay;