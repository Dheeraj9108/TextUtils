// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode ,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }


  const toogleeMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert(' : Dark Mode Enabled','success');
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(' : Light Mode Enabled','success');
    }
  }
  return (
    <> 
     <Navbar title = "Textutils" aboutText = "About Us" mode={mode} toogleeMode={toogleeMode}/>
     <Alert alert={alert}/>
     {/* <Navbar/> */}
     <div className="container">
        <TextForm showAlert={showAlert} heading = "Enter the text to Analyze" mode = {mode}/>
     </div>
    <About/>
    </>
  );
}

export default App;
