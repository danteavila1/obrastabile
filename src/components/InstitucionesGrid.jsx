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

// Array con logo, nombre y eje al que pertenecen
const institutions = [
  { name: "Institución 1", logo: logo1, eje: "formal" },
  { name: "Institución 2", logo: logo2, eje: "inclusiva" },
  { name: "Institución 3", logo: logo3, eje: "deportes" },
  { name: "Institución 4", logo: logo4, eje: "trabajo" },
  { name: "Institución 5", logo: logo5, eje: "formal" },
  { name: "Institución 6", logo: logo6, eje: "inclusiva" },
  { name: "Institución 7", logo: logo7, eje: "deportes" },
  { name: "Institución 8", logo: logo8, eje: "trabajo" },
  { name: "Institución 9", logo: logo9, eje: "formal" },
  { name: "Institución 10", logo: logo10, eje: "inclusiva" },
  { name: "Institución 11", logo: logo11, eje: "deportes" },
  { name: "Institución 12", logo: logo12, eje: "trabajo" },
];

// Los ejes
const ejes = [
  { key: "formal", label: "EDUCACIÓN FORMAL," },
  { key: "inclusiva", label: "EDUCACIÓN INCLUSIVA," },
  { key: "deportes", label: "EDUCACIÓN ACTIVIDAD FÍSICA Y DEPORTES," },
  { key: "trabajo", label: "EDUCACIÓN Y TRABAJO." },
];

export default function InstitucionesGrid() {
  const [hoverEje, setHoverEje] = useState(null);

  return (
    <section className="relative mt-32 w-full">
      {/* Texto de ejes */}
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 leading-snug tracking-wide flex flex-col md:flex-row md:justify-center md:gap-6 flex-wrap">
        {ejes.map((eje) => (
          <span
            key={eje.key}
            onMouseEnter={() => setHoverEje(eje.key)}
            onMouseLeave={() => setHoverEje(null)}
            className={`cursor-pointer transition-colors duration-300 ${
              hoverEje === eje.key ? "text-[#fad016]" : "text-white"
            }`}
          >
            {eje.label}
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
            className="max-h-72 md:max-h-80 lg:max-h-96 object-contain"
          />
        </div>

        {/* Grilla instituciones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 md:col-span-3 md:px-5">
          {institutions.map((inst, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center justify-center h-28 shadow-md
                          bg-gradient-to-r from-[#000000] to-[#404040] 
                          p-4 border transition-all duration-300
                          ${
                            hoverEje === inst.eje
                              ? "border-[#fad016]"
                              : "border-white opacity-80"
                          }`}
            >
              {/* Glow detrás del logo */}
              {hoverEje === inst.eje && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#fad016] opacity-40 blur-xl"></div>
                </div>
              )}

              {/* Logo */}
              <img
                src={inst.logo}
                alt={inst.name}
                className="relative z-10 max-h-20 object-contain mb-2"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
