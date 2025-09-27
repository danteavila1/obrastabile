import React from "react";
import bigLogo from "../assets/logos/obrastabilelogo.webp"; // Logo grande
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

// Array con logo y nombre
const institutions = [
  { name: "Institución 1", logo: logo1 },
  { name: "Institución 2", logo: logo2 },
  { name: "Institución 3", logo: logo3 },
  { name: "Institución 4", logo: logo4 },
  { name: "Institución 5", logo: logo5 },
  { name: "Institución 6", logo: logo6 },
  { name: "Institución 7", logo: logo7 },
  { name: "Institución 8", logo: logo8 },
  { name: "Institución 9", logo: logo9 },
  { name: "Institución 10", logo: logo10 },
  { name: "Institución 11", logo: logo11 },
  { name: "Institución 12", logo: logo12 },
];

export default function InstitucionesGrid() {
  return (
    <section className="relative mt-32 md:mt-0 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 leading-snug tracking-wide">
        EDUCACIÓN FORMAL – EDUCACIÓN INCLUSIVA – EDUCACIÓN ACTIVIDAD FÍSICA Y DEPORTES – EDUCACIÓN Y TRABAJO
      </h2>

      {/* Contenedor principal en dos columnas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 items-stretch">
      {/* Logo grande */}
        <div className="flex justify-center items-center pb-10 md:pb-0 md:px-5 md:col-span-2">
          <img
            src={bigLogo}
            alt="Logo Fundación"
            className="max-h-72 md:max-h-80 md:max-h-96 object-contain"
          />
        </div>

        {/* Grilla instituciones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 md:col-span-3 md:px-5">
          {institutions.map((inst, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center h-28 shadow-md
                        bg-gradient-to-r from-[#000000] to-[#404040] 
                        p-4 border border-white"
            >
              <img
                src={inst.logo}
                alt={inst.name}
                className="max-h-20 object-contain mb-2 hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

