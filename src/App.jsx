import React , {useRef, useState , useEffect} from 'react'
import './pages/App.scss'
import Navbar from './components/Navbar'

function App() {

  const [user , setUser] = useState([]);
  const [filter , setFilter] = useState([]);
  const [searched , setSearched] = useState(false)

  const input = useRef();
  const dropdown = useRef();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((json) => setUser(json))
  }, []);

  const searchInfo = ()=> {
    setSearched(true)

    const searchGroup = input.current.value.toLowerCase();
    const searchFilter = dropdown.current.value;

    if(searchGroup === "") {
      setSearched(false);
      setFilter([]);
      return;
    }

    let filterSwitcher;

    switch(searchFilter) {
      case "name":
        filterSwitcher = user.filter((userData) =>
          userData.name.toLowerCase().includes(searchGroup)
        );
        break;
      case "email":
        filterSwitcher = user.filter((userData) =>
          userData.email.toLowerCase().includes(searchGroup)
        );
        break;
      case "website":
        filterSwitcher = user.filter((userData) =>
          userData.website.toLowerCase().includes(searchGroup)
        );
        break;
    }

    setFilter(filterSwitcher);

  }

 



  return (
    <div className='app-container'>
        <Navbar />
        <div className="app-upper-section">
        <div className='search-container'>
          <div className="search-inner">
            <input onInput={searchInfo} type="search" ref={input} id='search-bar' placeholder='Enter Your Region' />
            <button> Search </button>
          </div>
        </div>
        <select id="userNames" ref={dropdown}>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="website">website</option>
        </select>
        {searched ? filter.map((userInfo)=>(
          <div className="api-info">
            <h1>{userInfo.name}</h1>
            <h3><ins>{userInfo.email}</ins></h3>
            <h2>{userInfo.website}</h2>
          </div>
        ))
        :user.map((userInfo)=>(
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