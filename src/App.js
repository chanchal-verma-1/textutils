import React,{ useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
   const [mode, setMode] =useState('light');
   const[alert,setAlert] =useState(null);

   const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type: type
     })

     setTimeout(()=>{
       setAlert(null)
     },3000);
   }

   const toggleMode=()=>{
     if(mode === 'light')
      {
       setMode('dark');
       document.body.style.backgroundColor ='#164B60';
       showAlert("Darkmode has been enabled","success");
       document.title = 'Textutils-Darkmode';
       }
      else 
      {
       setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("Lightmode has been enabled","success");
       document.title = 'Textutils-Lightmode';
        }
      }

  return (
      <React.Fragment>
      
        <Navbar title="textutil" about="about" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
       
          <div className="container my-3">
          <Textform heading = "Enter your text to analyse below" mode ={mode} showAlert = {showAlert}/>   
          </div>
         
    </React.Fragment>
  );
}

export default App;
