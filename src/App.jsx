// import React from 'react'
// //coordinates (latitudes, longitude, temp, pressure, sunset and sunrise, humidity wind speed)
// const App = () => {

//   const API_KEY='f37ca1b0673b7b61c94b8749bd865627'
//   const BASE_URL='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
//   return (
    
//     <div className='flex justify-center items-center'>
      
//       <input 
//       type='text'
//       className= 'w-48 border
//       border-slate-500 flex justify-center
//       items-center mt-10 rounded-md h-[32px]'
//       placeholder='Enter City Name'
//       /> 
      
//       <button className='text-white p-1 mt-10 bg-blue-600 rounded-lg ml-3 w-20 h-full'>Submit</button>
//       <p>

//       </p>
//     </div>
    
    

//   )
// }
// export default App

// import React, { useState } from 'react';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'f37ca1b0673b7b61c94b8749bd865627';

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeatherData(data);
//       } else {
//         alert('City not found');
//       }
//     } catch (error) {
//       alert('Error fetching weather data');
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className='flex flex-col justify-center items-center h-screen'>
//       <form onSubmit={handleFormSubmit} className='flex items-center'>
//         <input
//           type='text'
//           value={city}
//           onChange={handleInputChange}
//           className='w-48 border border-slate-500 flex justify-center items-center rounded-md h-[32px]'
//           placeholder='Enter City Name'
//         />
//         <button type='submit' className='text-white p-1 bg-blue-600 rounded-lg ml-3 w-20 h-full'>Submit</button>
//       </form>
//       {weatherData && (
//         <div className='mt-5 p-4 border border-gray-300 rounded-md'>
//           <h2 className='text-lg font-bold mb-2'>{weatherData.name} Weather</h2>
//           <p>Latitude: {weatherData.coord.lat}</p>
//           <p>Longitude: {weatherData.coord.lon}</p>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Pressure: {weatherData.main.pressure} hPa</p>
//           <p>Humidity: {weatherData.main.humidity} %</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//           <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App

// import React, { useState } from 'react';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'f37ca1b0673b7b61c94b8749bd865627';

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeatherData(data);
//       } else {
//         alert('City not found');
//       }
//     } catch (error) {
//       alert('Error fetching weather data');
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600'>
//       <h1 className='text-3xl font-bold text-white mb-6'>Weather App</h1>
//       <form onSubmit={handleFormSubmit} className='flex items-center mb-8'>
//         <input
//           type='text'
//           value={city}
//           onChange={handleInputChange}
//           className='w-64 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300'
//           placeholder='Enter City Name'
//         />
//         <button type='submit' className='text-white p-2 bg-blue-700 hover:bg-blue-800 rounded-md ml-3 shadow-md transition duration-300'>
//           Submit
//         </button>
//       </form>
//       {weatherData && (
//         <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
//           <h2 className='text-2xl font-bold text-gray-800 mb-4'>{weatherData.name} Weather</h2>
//           <p className='text-gray-700'><strong>Latitude:</strong> {weatherData.coord.lat}</p>
//           <p className='text-gray-700'><strong>Longitude:</strong> {weatherData.coord.lon}</p>
//           <p className='text-gray-700'><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
//           <p className='text-gray-700'><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
//           <p className='text-gray-700'><strong>Humidity:</strong> {weatherData.main.humidity} %</p>
//           <p className='text-gray-700'><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
//           <p className='text-gray-700'><strong>Sunrise:</strong> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p className='text-gray-700'><strong>Sunset:</strong> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = 'f37ca1b0673b7b61c94b8749bd865627';

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeatherData(data);
//       } else {
//         alert('City not found');
//       }
//     } catch (error) {
//       alert('Error fetching weather data');
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400'>
//       <h1 className='text-3xl font-bold text-white mb-6'>Weather App</h1>
//       <form onSubmit={handleFormSubmit} className='flex items-center mb-8'>
//         <input
//           type='text'
//           value={city}
//           onChange={handleInputChange}
//           className='w-64 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300'
//           placeholder='Enter City Name'
//         />
//         <button type='submit' className='text-white p-2 bg-blue-700 hover:bg-blue-800 rounded-md ml-3 shadow-md transition duration-300'>
//           Submit
//         </button>
//       </form>
//       {weatherData && (
//         <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
//           <h2 className='text-2xl font-bold text-gray-800 mb-4'>{weatherData.name} Weather</h2>
//           <p className='text-gray-700'><strong>Latitude:</strong> {weatherData.coord.lat}</p>
//           <p className='text-gray-700'><strong>Longitude:</strong> {weatherData.coord.lon}</p>
//           <p className='text-gray-700'><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
//           <p className='text-gray-700'><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
//           <p className='text-gray-700'><strong>Humidity:</strong> {weatherData.main.humidity} %</p>
//           <p className='text-gray-700'><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
//           <p className='text-gray-700'><strong>Sunrise:</strong> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p className='text-gray-700'><strong>Sunset:</strong> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'f37ca1b0673b7b61c94b8749bd865627';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert('City not found');
      }
    } catch (error) {
      alert('Error fetching weather data');
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('/image.png')" }}>
      <h1 className='text-3xl font-bold text-black-600 mb-6'>Weather App</h1>
      <form onSubmit={handleFormSubmit} className='flex items-center mb-8'>
        <input
          type='text'
          value={city}
          onChange={handleInputChange}
          className='w-64 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300'
          placeholder='Enter City Name'
        />
        <button type='submit' className='text-white p-2 bg-blue-700 hover:bg-blue-800 rounded-md ml-3 shadow-md transition duration-300'>
          Submit
        </button>
      </form>
      {weatherData && (
        <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>{weatherData.name} Weather</h2>
          <p className='text-gray-700'><strong>Latitude:</strong> {weatherData.coord.lat}</p>
          <p className='text-gray-700'><strong>Longitude:</strong> {weatherData.coord.lon}</p>
          <p className='text-gray-700'><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
          <p className='text-gray-700'><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
          <p className='text-gray-700'><strong>Humidity:</strong> {weatherData.main.humidity} %</p>
          <p className='text-gray-700'><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
          <p className='text-gray-700'><strong>Sunrise:</strong> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p className='text-gray-700'><strong>Sunset:</strong> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import axios from 'axios'

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [submitted , setSubmitted]=useState()
//   const API_KEY = 'f37ca1b0673b7b61c94b8749bd865627';
//   const BASE_URL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//   useEffect(()=>{
//     fetchWeatherData()
//   })

//   const fetchWeatherData = async () => {
//     try {
//       const fetch = await axios.get(BASE_URL)
//       console.log(fetch.data)
//       setWeatherData(fetch.data)
//     } catch (error) {
//       alert('Error fetching weather data');
//     }
//   };
//   const formateTime = (Time)=>{
//     const Date = new Date(time*1000)
//     const options={
//       hour:'numeric',
//       minute:'numeric'
//     }
//     return date/toLocaleTimeString([],options)
//   }

//   return(
//     <div className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center' style={{ backgroundImage: "url('/image.png')" }}>
//       <h1 className='text-3xl font-bold text-black-600 mb-6'>Weather App</h1>
//       <form onSubmit={handleFormSubmit} className='flex items-center mb-8'>
//         <input
//           type='text'
//           value={city}
//           onChange={handleInputChange}
//           className='w-64 p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300'
//           placeholder='Enter City Name'
//         />
//         <button type='submit' className='text-white p-2 bg-blue-700 hover:bg-blue-800 rounded-md ml-3 shadow-md transition duration-300'
//         onClick={()=> fetchWeatherData()}>
//           Submit
//         </button>
//       </form>
//     {
//       submitted ?(
    
//     {weatherData && (
//       <div className='p-4'>
//       <div className='text-gray-800 font-bold text-x1 mb-2'>Weather Details</div>
//       <div className='border border-gray-300 p-4 rounded-lg bg-white'>
//       <p className='mb-4'><span className='font-bont'>Coordinates:</span>
//       Latitude={weatherData?.coord?.lat},longitude={weatherData?.coord?.lon}</p>
//       <p className='mb-2'><span className='font-bont'>Temprature:</span>{Math.rounded}
//       Latitude={weatherData?.coord?.lat},longitude={weatherData?.coord?.lon}</p>
//       <p className='mb-2'><span className='font-bont'>:</span>
//       Latitude={weatherData?.coord?.lat},longitude={weatherData?.coord?.lon}</p>
//       <p className='mb-2'><span className='font-bont'>Coordinates:</span>
//       Latitude={weatherData?.coord?.lat},longitude={weatherData?.coord?.lon}</p>
//       </div>
//       </div>
//     )}):null}
  
// }
// export default App;
