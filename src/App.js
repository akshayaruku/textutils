import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    }
  }

  return(
  <>
  
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="my-3"></div>
<div className="container">
  <div className="my-3"></div>

<TextForm heading = "Enter the Text to Analyze" mode={mode}/>
{/* <About/> */}

</div>
  </>
  );
}

export default App;
