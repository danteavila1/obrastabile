import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import InstitucionesGrid from './components/InstitucionesGrid';
import NovedadesSection from './components/Novedades';

function App() {
  return (
    <>
      <Header />
      <InstitucionesGrid />
      <NovedadesSection />
    </>
  );
}

export default App;
