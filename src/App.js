
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';





function App() {
   const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("light");
  const showalert = (message,type) => 
  {
     setalert(
     {
        message: message,
        type:type
     })
     setTimeout(() =>{
      setalert(null);
     },1500)
     
   }

 const toggleMode= () => {
     if(mode==='light'){
        setmode("dark");
        document.body.style.backgroundColor="#333333"
        showalert("Dark mode has been enabled","success")
     }
     else {setmode("light");
     document.body.style.backgroundColor="white";
     showalert("Light mode has been enabled","success")}
  }
  return (
  <>
  
     <Navbar titles="TextUtils" about="About" mode= {mode} toggleMode={ toggleMode}/>
     <Alert alert={alert}/>
     
         
          
          <div className="container my-4"> <Textform showalert={showalert} heading="Enter Your Text Below" mode= {mode}/></div>
        
         
</>

  );
}

export default App;
