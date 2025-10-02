import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import InstitucionesGrid from './components/InstitucionesGrid';
import NovedadesSection from './components/Novedades';
import SocialBar from './components/SocialBar';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <InstitucionesGrid />
      <NovedadesSection />
      <SocialBar />
      <WhatsAppButton />
    </>
  );
}

export default App;
