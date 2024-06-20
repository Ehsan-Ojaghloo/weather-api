import React , {useRef, useState } from 'react'
import './pages/App.scss'
import Navbar from './components/Navbar'

function App() {

const[user , setUser] = useState([]);

const users = useRef()

function handleUser() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(json => setUser(json))
}


  return (
    <div className='app-container'>
      <div className="app-upper-section">
        <Navbar />
        <div className='search-container'>
          <div className="search-inner">
            <input type="search" id='search-bar' placeholder='Enter Your Region' />
            <button onClick={handleUser}> Search </button>
          </div>
        </div>
        {user.map((userInfo)=>(
          <div className="api-info">
            <h1>{userInfo && userInfo.name}</h1>
            <h3><ins>{userInfo && userInfo.username}</ins></h3>
            <h2>{userInfo && userInfo.email}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App