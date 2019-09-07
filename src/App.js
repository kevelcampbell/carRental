import React from 'react';
import './Assets/CSS/Main/main.css'
import Topbar from './Components/Topbar/topbar'
import Homepage from './Components/Pages/homePage'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Homepage/>
    </div>
  );
}

export default App;
