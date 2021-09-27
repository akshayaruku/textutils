import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type ) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has enabled","success");
      document.title='TextUtils - Dark Mode';
     // toggleStyle('black');
    }
    else{ 
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light mode has enabled","success");
    document.title ='TextUtils - Light Mode';
    }
  }

  

// const toggleStyle = (coo) => {
//   if(coo==='black'){
//       setmyStyle({
//           color: 'black',
//           backgroundColor: 'black',
//           border: '1px solid white'
//       })
     
//   }
//   else{
//       setmyStyle({
//           color: 'black',
//           backgroundColor: 'white'
//       })
      


//   }
// }

  return(
  <>
  <Router>
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<Switch>
          <Route exact path="/about"  >
            <About  />
            
          </Route>
         
          <Route exact path="/">
          <TextForm heading = "Enter the Text to Analyze" showAlert={showAlert} mode={mode}/>
          </Route>
   </Switch>
   </Router>
<div className="my-3"></div>
<div className="container">
  <div className="my-3"></div>


{/* <About/> */}

</div>
  </>
  );
}

export default App;
