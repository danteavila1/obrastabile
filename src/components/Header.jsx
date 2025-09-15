import { useState } from "react";
import { getMenuItems } from "../controllers/menuController";
import logo from "../assets/fundacionstabilelogo.webp";

// Importa las banderas
import flagAr from "../assets/flags/argentina.webp";
import flagIt from "../assets/flags/italia.webp";
import flagUs from "../assets/flags/ing.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // menú mobile
  const [langOpen, setLangOpen] = useState(false); // dropdown idiomas
  const [currentLang, setCurrentLang] = useState("es"); // idioma actual

  const menu = getMenuItems();

  // Diccionario de idiomas
  const flags = {
    es: { img: flagAr, alt: "Español" },
    it: { img: flagIt, alt: "Italiano" },
    en: { img: flagUs, alt: "English" },
  };

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    setLangOpen(false);
    // acá después podés integrar con i18next o tu lógica de traducción
  };

  return (
    <header className="bg-[#04ab8d] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo Fundación Stabile" className="h-14 w-auto" />
          </a>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="text-white hover:text-gray-200 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Dropdown de Idiomas */}
        <div className="relative flex-1 flex justify-end items-center">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2"
          >
            <img
              src={flags[currentLang].img}
              alt={flags[currentLang].alt}
              className="h-6 w-auto"
            />
            <span className="text-white text-sm">▼</span>
          </button>

          {langOpen && (
            <div className="absolute top-full mt-2 right-0 bg-white rounded shadow-lg p-2 flex flex-col gap-2">
              {Object.entries(flags)
                .filter(([key]) => key !== currentLang)
                .map(([key, { img, alt }]) => (
                  <button
                    key={key}
                    onClick={() => handleLangChange(key)}
                    className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded"
                  >
                    <img src={img} alt={alt} className="h-5 w-auto" />
                    <span className="text-sm text-gray-700">{alt}</span>
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Botón Mobile */}
        <button
          className="md:hidden text-white text-2xl ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#04ab8d] shadow-lg">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="block px-6 py-2 text-white hover:bg-[#039e82]"
            >
              {item.name}
            </a>
          ))}

          {/* Idiomas en Mobile */}
          <div className="border-t border-[#039e82] py-3">
            <div className="flex justify-center">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2"
              >
                <img
                  src={flags[currentLang].img}
                  alt={flags[currentLang].alt}
                  className="h-6 w-auto"
                />
                <span className="text-white text-sm">▼</span>
              </button>
            </div>

            {langOpen && (
              <div className="mt-2 flex justify-center gap-3">
                {Object.entries(flags)
                  .filter(([key]) => key !== currentLang)
                  .map(([key, { img, alt }]) => (
                    <button
                      key={key}
                      onClick={() => handleLangChange(key)}
                    >
                      <img src={img} alt={alt} className="h-6 w-auto" />
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
