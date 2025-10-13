import React from "react";
import { useTranslation } from "react-i18next";
import bacssa from "../assets/imgAuspiciantes/bacssa.webp";
import centenario from "../assets/imgAuspiciantes/centenario.webp";
import mauad from "../assets/imgAuspiciantes/mauad.webp";
import ops from "../assets/imgAuspiciantes/ops.webp";
import uca from "../assets/imgAuspiciantes/uca.webp";

const auspiciantes = [
  { id: 1, logo: bacssa },
  { id: 2, logo: centenario },
  { id: 3, logo: mauad },
  { id: 4, logo: ops },
  { id: 5, logo: uca },
];

export default function Auspiciantes() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 relative text-left">
        <span className="relative inline-block z-10">
            {t("auspiciantes")}
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

