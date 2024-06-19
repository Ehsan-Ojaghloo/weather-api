import React , {useRef, useState } from 'react'
import './pages/App.scss'
import Navbar from './components/Navbar'

function App() {

  const [weather, setWeather] = useState();

  const inputTag = useRef();
  
  function whatIsWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=582560638c1b004bd0c8a5cd5e2f7efa&q=${inputTag.current.value}`)
      .then(res => res.json())
      .then(json=>setWeather(json))
  }


  return (
    <div className='app-container'>
      <div className="app-upper-section">
        <Navbar />
        <div className='search-container'>
          <div className="search-inner">
            <input type="search" ref={inputTag}  id='search-bar' placeholder='Enter Your Region' />
            <button onClick={whatIsWeather}> Search </button>
          </div>
        </div>
        <div className="api-info">
          <h1>{weather && weather.name}</h1>
          <h3>{weather && weather.sys.country}</h3>
          <h2>{weather && weather.main.temp}</h2>
          
        </div>
      </div>
    </div>
  )
}

export default App