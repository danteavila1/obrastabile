import React, { useState } from "react";
import bigLogo from "../assets/logos/obrastabilelogo.webp"; 
import logo1 from "../assets/logos/observatorio.webp";
import logo2 from "../assets/logos/clubstabile.webp";
import logo3 from "../assets/logos/congreso.webp";
import logo4 from "../assets/logos/buenaspracticas.webp";
import logo5 from "../assets/logos/miguelcamino.webp";
import logo6 from "../assets/logos/porvenir.webp";
import logo7 from "../assets/logos/centropedagogico.webp";
import logo8 from "../assets/logos/italiaenlapatagonia.webp";
import logo9 from "../assets/logos/primaria.webp";
import logo10 from "../assets/logos/secundario.webp";
import logo11 from "../assets/logos/iurp.webp";
import logo12 from "../assets/logos/centrorecreativo.webp";
import { institutions } from "../data/institutions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// Los ejes
const ejes = [
  { key: "formal"},
  { key: "inclusiva"},
  { key: "deportes"},
  { key: "trabajo"},
];

export default function InstitucionesGrid() {
  const { t } = useTranslation();
  const [hoverEje, setHoverEje] = useState(null);

  return (
    <section className="relative mt-5 md:mt-10 w-full">
      {/* Texto de ejes */}
      <h2 className="text-2xl md:text-3xl text-white text-center mb-15 leading-snug tracking-wide flex flex-col md:flex-row md:justify-center md:gap-7 flex-wrap">
        {ejes.map((eje) => (
          <span
            key={eje.key}
            onMouseEnter={() => setHoverEje(eje.key)}
            onMouseLeave={() => setHoverEje(null)}
            className={`cursor-pointer transition-colors duration-300 ${
              hoverEje === eje.key ? "text-[#fad016]" : "text-white"
            }`}
          >
            {t(`ejes.${eje.key}`)}
          </span>
        ))}
      </h2>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 items-stretch">
        {/* Logo grande */}
        <div className="flex justify-center items-center pb-10 md:pb-0 md:px-5 md:col-span-2">
          <img
            src={bigLogo}
            alt="Logo Fundación"
            className="max-h-72 md:max-h-80 object-contain"
          />
        </div>

        {/* Grilla instituciones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 md:col-span-3 md:px-5">
          {institutions.map((inst, i) => (

         <Link key={inst.id} to={`/institucion/${inst.id}`}>

            <div
              key={i}
              className={`relative flex flex-col items-center justify-center h-28 shadow-md
                          bg-gradient-to-r from-[#000000] to-[#404040] 
                          p-4 border transition-all duration-300
                          ${
                            hoverEje === inst.eje
                              ? "border-[#fad016]"
                              : "border-white opacity-80"
                          }
                          group hover:border-[#fad016]`}
            >
              {/* Glow detrás del logo */}
              {hoverEje === inst.eje && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#fad016] opacity-40 blur-xl"></div>
                </div>
              )}

              {/* Glow detrás del logo cuando paso sobre este logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-24 h-24 rounded-full bg-[#fad016] opacity-40 blur-xl"></div>
              </div>

            {/* Tooltip flotante */}
            <div className="absolute top-0 -translate-y-6 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
              {inst.tooltip}
            </div>

              {/* Logo */}
              <img
                src={inst.logo}
                alt={inst.name}
                className="relative z-10 max-h-20 object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
