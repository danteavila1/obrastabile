import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InstitucionesGrid from "./components/InstitucionesGrid";
import NovedadesSection from "./components/Novedades";
import SocialBar from "./components/SocialBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Auspiciantes from "./components/Auspiciantes"; 

function App() {
  return (
    <>
      <Header />
      <InstitucionesGrid />
      <NovedadesSection />
      <Auspiciantes /> 
      <SocialBar />
      <WhatsAppButton />
    </>
  );
}

export default App;
