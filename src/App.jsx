import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import InstitucionesGrid from "./components/InstitucionesGrid";
import NovedadesSection from "./components/Novedades";
import SocialBar from "./components/SocialBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Auspiciantes from "./components/Auspiciantes";
import Footer from "./components/Footer";
import InstitucionPage from "./pages/InstitucionPage";
import ContactoPage from "./pages/ContactoPage";
import PaginaEnConstruccion from "./pages/PaginaEnConstruccion";
import NovedadesPage from "./pages/NovedadesPage";
import NovedadPage from "./pages/NovedadPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <InstitucionesGrid />
              <NovedadesSection />
              <Auspiciantes />
            </>
          }
        />

      {/* Página de una institución */}
      <Route path="/institucion/:id" element={<InstitucionPage />} />
      {/* Página de contacto*/}
      <Route path="/contacto" element={<ContactoPage />} />
      {/* Página en construcción*/}
      <Route path="/construccion" element={<PaginaEnConstruccion />} />
      {/* Página en novedades*/}
      <Route path="/novedades" element={<NovedadesPage />} />
      <Route path="/novedades/:id" element={<NovedadPage />} />
      </Routes>
      

      <Footer />
      <SocialBar />
      <WhatsAppButton />
    </>
  );
}

export default App;
