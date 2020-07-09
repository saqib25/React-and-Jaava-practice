import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Infopanel from './Components/Infopanel'
import FootNav from './Components/FootNav'

function App() {
  const screenConfig = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Infopanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
