
import './App.css';
import About from './Componenets/About';
import Navbar from './Componenets/Navbar';
import { useState } from 'react';
import TextUtilsForm from './Componenets/TextUtilsForm';
import Alert from './Componenets/Alert';
import {
BrowserRouter as Router,
Routes,
Route,

} from "react-router-dom";

function App() {

const [mode, setMode]= useState("light")
const [alert, setAlert]= useState(null)

let showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type: type
  })
}
setTimeout(() => {
  setAlert()
}, 1000);

let toggleClick=()=>{
if(mode==="light"){
  setMode("dark")
  document.body.style.backgroundColor="black"
  showAlert("Enable Dark Mode", "sucess")
  
}
else{
  setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Enable light Mode", "sucess")
}
}

return (

  <>
  <Router>
  <div>
  <Navbar title="Textutils" mode={mode} toggleClick={toggleClick}/>

  <Alert  alert={alert}/>
  
  <div className="container my-3">
   <Routes>
   
    <Route  path="/" element={<TextUtilsForm mode={mode} showAlert={showAlert}/>}></Route>
    
    <Route exact path="/about" element={<About mode={mode}/>}></Route>
  </Routes> 
  </div>
  
  </div>
  </Router>
  </>
);
}

export default App;
