import React from "react";
import logo1 from "../assets/logos/observatorio.webp"; // <-- import

// Array con logo y nombre
const institutions = [
  { name: "Institución 1", logo: logo1 },
  { name: "Institución 2", logo: logo1 },
  { name: "Institución 3", logo: logo1 },
  { name: "Institución 4", logo: logo1 },
  { name: "Institución 5", logo: logo1 },
  { name: "Institución 6", logo: logo1 },
  { name: "Institución 7", logo: logo1 },
  { name: "Institución 8", logo: logo1 },
  { name: "Institución 9", logo: logo1 },
  { name: "Institución 10", logo: logo1 },
  { name: "Institución 11", logo: logo1 },
  { name: "Institución 12", logo: logo1 },
];

export default function InstitucionesGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {institutions.map((inst, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center h-30 w-45 shadow-md
                       bg-gradient-to-r from-[#000000] to-[#404040] 
                        p-4 border border-white"
          >
            <img src={inst.logo} alt={inst.name} className="max-h-20 object-contain mb-2 hover:scale-115 transition-transform duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

