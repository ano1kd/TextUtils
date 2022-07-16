import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
// import {
//   BrowserRouter as Router,

//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleAction = ()=>{
    if(mode==="light"){
      setMode('dark')
      document.body.style.background = 'grey'
      showAlert("Dark Mode Enabled","success")
    }else{
      setMode('light')
      document.body.style.background = 'white'
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleAction={toggleAction} aboutText="About us"/>
    <Alert alert={alert}/>
    {/* <Routes>
        <Route path="/" element={<TextInput heading="Enter your text"  mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<AboutUs mode={mode}/>} />
    </Routes>
    </Router> */}
    <TextInput heading="Enter your text"  mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
