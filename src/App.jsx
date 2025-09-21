import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import InstitucionesGrid from './components/InstitucionesGrid';

function App() {
  return (
    <>
      <Header />
      <InstitucionesGrid />
    </>
  );
}

export default App;
