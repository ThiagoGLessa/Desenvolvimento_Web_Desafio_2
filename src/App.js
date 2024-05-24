import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Cadastros from './pages/Cadastros';
import Reservas from './pages/Reservas';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route exact path="*" element={<Cadastros/>}/>
        <Route exact path="/reservas" element={<Reservas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
