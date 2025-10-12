import React from "react";

const auspiciantes = [
  { id: 1, logo: "/src/assets/imgAuspiciantes/bacssa.webp" },
  { id: 2, logo: "/src/assets/imgAuspiciantes/centenario.webp" },
  { id: 3, logo: "/src/assets/imgAuspiciantes/mauad.webp" },
  { id: 4, logo: "/src/assets/imgAuspiciantes/ops.webp" },
  { id: 5, logo: "/src/assets/imgAuspiciantes/uca.webp" },
];

export default function Auspiciantes() {
  return (
    <div className="mt-20 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 relative text-left">
        <span className="relative inline-block z-10">
            AUSPICIANTES
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
        </span>
       </h2>


      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
            {[...auspiciantes, ...auspiciantes].map((aus, i) => (
            <div
                key={i}
                className="inline-flex justify-center items-center w-40 h-20 p-2"
            >
                <img
                src={aus.logo}
                alt={`Auspiciantes ${aus.id}`}
                className="max-h-16 object-contain"
                />
            </div>
            ))}
        </div>
    </div>

    </div>
  );
}


