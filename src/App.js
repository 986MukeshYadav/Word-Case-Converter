// import { useState } from 'react';
// import './App.css';
// import TextForm from './component/TextForm';
// import Alert from './component/Alert';
// import About from './component/About';
// import Navbar from './component/Navbar';
// // import TextForm from './component/TextForm';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
// } from "react-router-dom";

// function App() {
//   const [mode, setMode]=useState('light');
//   const [alert, setAlert]=useState('null');

//   const showAlert=(message,type)=>{
//       setAlert({
//         message:message,
//         type:type
//       })
//       setTimeout(()=>{
//         setAlert(null);
//         },1500);
      
//   }
//   const removeBodyClasses=()=>{
   
//     document.body.classList.remove('bg-light');
//     document.body.classList.remove('bg-dark');
//     document.body.classList.remove('bg-warning');
//     document.body.classList.remove('bg-danger');
//     document.body.classList.remove('bg-success');
//   }
  

//   const toggleMode=(cls)=>{
//     removeBodyClasses();
//     document.body.classList.add('bg-'+cls)
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.background='#042743';
//       showAlert("Dark mode has been enabled","success");
//       document.title='TextUtils-Dark Mode';
//       // setInterval(()=>{
//       //   document.title = 'TextUtils is Amazing Mode';
//       // },2000);
//       // setInterval(()=>{
//       //   document.title = 'Install TextUtils Now';
//       // },1500);
//     }
//     else{
//       setMode('light');
//       document.body.style.background='white';
//       showAlert("Light mode has been enabled","success");
//       document.title='TextUtils-Light Mode';
//     }
//   }
//   return (
//    <>
// {/* <Navbar title="Mukesh" about="About us"/> */}
// <Router>
// <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
// <Alert alert={alert}/>
// <div className='container my-3'>
// <Routes>
//           <Route path="/about" 
//            element= {<About />}/>
         
//           <Route path="/"
//          element={ <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>}/>

//         </Routes>
// </div>
// </Router>
//   </>
//   );
// }

import React from 'react'

import './App.css'
import AboutMe from './component/AboutMe';

function App() {
  

  return (
    <>
      <AboutMe/>
    </>
  )
}




export default App;

