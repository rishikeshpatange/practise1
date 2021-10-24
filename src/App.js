import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      setMode('dark');
      document.title = "textUtils-Dark mode"
      // showAlert('dark mode has enabled','success');
    }
    else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode('light');
      document.title = "textUtils-light mode"
      // showAlert('dark mode has disabled','success');

    }
  }
  // alert
  // const [alert, setAlert] = useState(null)

  // const showAlert =(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })

  // }

  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" about="About TextUtils " /> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* <Alert Alert='Rishikesh'/> */}
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/TextForm"> */}
            <TextForm heading="Enter your name" />
          {/* </Route> */}
        {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
