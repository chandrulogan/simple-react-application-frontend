import { useState } from 'react';
import './App.css';
// import Home from './pages/Home';
import Main from './pages/Main';
import SaveAudience from './pages/SaveAudience';

function App() {
  const [isSaveAudience, setisSaveAudience] = useState(false)
  const [isMain, setisMain] = useState(true)

  const handleisSaveAudience = () => {
    setisSaveAudience(!isSaveAudience)
    setisMain(!isMain)

    console.log("is save audience clicked");
  }
  
  return (
    <div className='App_container'>
      {/*<Home/> */}
      {isMain ? <Main handleisSaveAudience={handleisSaveAudience} /> : null}
      {isSaveAudience ? <SaveAudience handleisSaveAudience={handleisSaveAudience} /> : null}
    </div>
  );
}

export default App;
