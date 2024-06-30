import React , {useRef, useState , useEffect} from 'react'
import './pages/App.scss'
import Navbar from './components/Navbar'

function App() {

  const [user , setUser] = useState([]);
  const [filter , seFilter] = useState([]);
  const [serached , setSearched] = useState(false)

  const input = useRef();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users?`)
      .then((res) => res.json())
      
  })



  return (
    <div className='app-container'>
      <div className="app-upper-section">
        <Navbar />
        <div className='search-container'>
          <div className="search-inner">
            <input type="search" ref={query} id='search-bar' placeholder='Enter Your Region' />
            <button onClick={search}> Search </button>
          </div>
        </div>
        {itemList.map((userInfo)=>(
          <div className="api-info">
            <h1>{userInfo.name}</h1>
            <h3><ins>{userInfo.email}</ins></h3>
            <h2>{userInfo.website}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App