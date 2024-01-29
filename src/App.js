import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';



function App() {
  const [mode,setmode] =useState('light')
  const [alert,setalert] = useState(null)
  const showAlert = (message,type)=>{
    setalert({
      message:message,
      type:type
          })
          setTimeout( () => {
            setalert(null)
          } , 1000 )
  }
function toggleMode(){
  if(mode==='light'){
  setmode('dark')
  document.body.style.backgroundColor='#144285'
  showAlert("  you are in dark mode","success")
}
  else{
    setmode('light')
    document.body.style.backgroundColor='white'
    showAlert("  you are in light mode","success")
  }

}

  return (
   <>
   
   
   
    <BrowserRouter>
    <NavBar title={'textUtility'} about={'about'} home={'Home'} mode={mode} toggleMode={toggleMode}  />
   <Alert alert={alert}/>
    <Routes>
      
      <Route exact path='/about' element={<About mode={mode} />}/>
    </Routes>
    <Routes>
      <Route exact path='/' element={<Form mode={mode} showAlert={showAlert} />}/>
    </Routes>
    </BrowserRouter>
   
   
         
          
   </>
  );
}

export default App;
