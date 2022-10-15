import React, { useState } from 'react'
import TextForm from './components/TextForm'
import Header from './components/Header'
import About from './components/About'
import Alert from './components/Alert'
import ApiComponets from './ApiComponets'
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";
export default function () {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark Mode has been Enabled!", 'success')
    }
    else {
      setMode('light')
      showAlert("Light Mode has been Enabled!", 'success')
    }
  }

  return (
   
      <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
   <Router>
   <Header mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

        <Routes>


          
          <Route exact path="/about" element={<About />} />

          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="My Text" />} />

        </Routes>
        </Router>
        {/* <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          {/* <Routes>

            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="My Text" />} />
            <Route path="/about" element={<About mode={mode}/>} />

          </Routes> */}
          {/* <ApiComponets/>
        </Router> */}
      </div>

  )
}

