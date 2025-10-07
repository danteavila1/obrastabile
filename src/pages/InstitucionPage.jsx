import React from "react";
import { useParams } from "react-router-dom";
import { institutions } from "../data/institutions";

export default function InstitucionPage() {
  const { id } = useParams();
  const institucion = institutions.find((inst) => inst.id.toString() === id);

  if (!institucion)
    return <p className="text-white text-center mt-10">Institución no encontrada</p>;

  return (
    <div className="relative">
      {/* 🔹 Banner */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 translate-y-9 w-screen bottom-40 md:bottom-30 h-[310px] md:h-[450px] lg:h-[500px] bg-[#04ab8d]">
        <img
          src={institucion.banner}
          alt={`Banner de ${institucion.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay con color único */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: institucion.color }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full pt-30 md:pt-19">
          <img
          src={institucion.logo}
          alt={institucion.name}
          className="max-h-34 md:max-h-64 object-contain mx-auto drop-shadow-lg"
        //   style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.7))" }}
        />
        </div>
      </div>

      {/* Título fuera del fondo verde */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-8 xl:px-0 text-left ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          <span className="relative">
            INTRODUCCIÓN
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
          </span>
        </h2>
      </div>

      {/* 🔹 Descripción */}
  <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-left">
    {institucion.descripcion}
  </p>

    </div>
  );
}

