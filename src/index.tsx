import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Login from './Login';
import Welcome from './Welcome';

//import component
//import Bos from './models/bos';

const approutes = 
<BrowserRouter>
<Routes>
  <Route path='/welcome' element={ <Welcome/> }/> 
  <Route path='/' element={ <Login/> }/> 

</Routes>
</BrowserRouter>




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  approutes
)