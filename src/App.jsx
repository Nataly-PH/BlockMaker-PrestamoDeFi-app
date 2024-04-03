/* eslint-disable no-unused-vars */
import React from 'react';
import  { AppLayout } from './components/ui/layauts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InicioYAutenticacion }  from './pages/Pagina_1';
import { GestionDeUsuarios } from './pages/Pagina_2';
import { OperacionesDePrestamos } from './pages/Pagina_3';
import { Home } from './pages/Pagina_1';



function App() {
  return (
    
        <Router>
  
          <AppLayout>
            
            <Routes>
              <Route path="/" element={<InicioYAutenticacion></InicioYAutenticacion>}></Route>
            </Routes>
            <Routes>
              <Route path="/usuarios" element={<GestionDeUsuarios></GestionDeUsuarios>}></Route>
            </Routes>
            <Routes>
              <Route path="/prestamos" element={<OperacionesDePrestamos></OperacionesDePrestamos>}></Route>
            </Routes>

            <Home></Home>


          </AppLayout>

        </Router>
    

    
   
  )
}

export default App;