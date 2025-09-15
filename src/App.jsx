import { useState } from 'react'
import './App.css'
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <h1 className="text-center text-3xl font-bold">Bienvenidos a Fundación Stabile</h1>
      </main>
    </>
  );
}

export default App;
