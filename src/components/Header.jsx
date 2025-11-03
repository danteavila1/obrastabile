import { useState } from "react";
import { getMenuItems } from "../controllers/menuController";
import logo from "../assets/fundacionstabilelogo.webp";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // ✅ iconos para abrir/cerrar menú

// Importa las banderas
import flagAr from "../assets/flags/argentina.webp";
import flagIt from "../assets/flags/italia.webp";
import flagUs from "../assets/flags/ing.webp";

function cambiarIdioma(lng) {
  i18n.changeLanguage(lng);
}

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("es");

  const menu = getMenuItems();

  const flags = {
    es: { img: flagAr, alt: "Español" },
    it: { img: flagIt, alt: "Italiano" },
    en: { img: flagUs, alt: "Inglés" },
  };

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
    setLangOpen(false);
    cambiarIdioma(lang);
  };

  return (
    <header className="bg-[#04ab8d] shadow-md shadow-black/20 relative bottom-8 left-1/2 transform -translate-x-1/2 w-screen md:w-full z-50 md:rounded-xl max-w-3xl lg:max-w-4xl">
      <div className="flex justify-between items-center px-7 py-3 relative">
        {/* Logo */}
        <div className="flex-1 flex justify-start relative">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo Fundación Stabile"
              className="h-20 md:h-20 w-auto drop-shadow-lg 
                        absolute md:right-40 lg:right-55 
                        transition-transform duration-300 hover:scale-93"
            />
          </a>
        </div>

        {/* Menú Desktop */}
        <nav className="hidden md:flex flex-1 justify-center min-w-[310px] gap-6">
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="quattrocento-bold text-white hover:text-gray-200 transition whitespace-nowrap"
            >
              {t(`menu.${item.key}`)}
            </a>
          ))}
        </nav>

        {/* Dropdown de Idiomas */}
        <div className="relative flex-1 flex justify-end items-center">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setLangOpen(!langOpen)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLangOpen(!langOpen);
              }
            }}
            aria-haspopup="menu"
            aria-expanded={langOpen}
            className="hidden md:flex items-center gap-2 text-white cursor-pointer focus:outline-none group"
          >
            <img
              src={flags[currentLang].img}
              alt={flags[currentLang].alt}
              className="h-6 w-auto group-hover:brightness-110"
            />
            <span className="text-sm transition-colors group-hover:text-[#fad016]">▼</span>
          </div>

          <div
            className={`absolute top-full mt-2 right-0 rounded shadow-lg p-2 flex flex-col gap-2 md:bg-[#04ab8d]
            transform transition-all duration-300 origin-top-right
            ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            {Object.entries(flags)
              .filter(([key]) => key !== currentLang)
              .map(([key, { img, alt }]) => (
                <button
                  key={key}
                  onClick={() => handleLangChange(key)}
                  className="hidden md:flex items-center gap-2 hover:bg-gray-100 p-1 rounded"
                >
                  <img src={img} alt={alt} className="h-5 w-auto" />
                  <span className="text-sm text-gray-700">{alt}</span>
                </button>
              ))}
          </div>
        </div>

        {/* Botón Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl ml-4 rounded-lg p-2 transition-all duration-200 focus:outline-none
            ${
              isOpen
                ? "text-[#fad016] border-2 border-[#fad016]"
                : "text-white border-2 border-transparent hover:text-[#fad016] hover:border-[#fad016]"
            }`}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              {t(`menu.${item.key}`)}
            </a>
          ))}

          {/* Idiomas en Mobile */}
          <div className="border-t border-[#039e82] py-3">
            <div className="flex justify-center">
              <div
                role="button"
                tabIndex={0}
                onClick={() => setLangOpen(!langOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLangOpen(!langOpen);
                  }
                }}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                className="flex items-center gap-2 text-white cursor-pointer focus:outline-none group"
              >
                <img
                  src={flags[currentLang].img}
                  alt={flags[currentLang].alt}
                  className="h-6 w-auto group-hover:brightness-110"
                />
                <span className="text-sm transition-colors group-hover:text-[#fad016]">▼</span>
              </div>
            </div>

            <div
              className={`mt-2 flex justify-center gap-3 transition-all duration-200 transform origin-top
                ${langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              {Object.entries(flags)
                .filter(([key]) => key !== currentLang)
                .map(([key, { img, alt }]) => (
                  <button key={key} onClick={() => handleLangChange(key)}>
                    <img src={img} alt={alt} className="h-6 w-auto" />
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
