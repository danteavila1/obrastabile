import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { novedades } from "../data/novedades";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NovedadPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Buscar la novedad por ID
  const novedad = novedades.find((n) => n.id === parseInt(id));

  // Si no existe
  if (!novedad) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">
          {t("novedades.noEncontrada")}
        </h2>
        <Link
          to="/novedades"
          className="text-[#04ab8d] underline hover:text-[#038d74]"
        >
          {t("novedades.volver")}
        </Link>
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? novedad.imagen.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === novedad.imagen.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-5 py-10">
      {/* Botón Volver */}
      <Link
        to="/novedades"
        className="inline-block mb-6 text-[#04ab8d] hover:text-[#038d74] font-medium"
      >
        ← {t("novedades.volver")}
      </Link>

      {/* Carrusel */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg mb-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${novedad.imagen.length * 100}%`,
          }}
        >
          {novedad.imagen.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative"
              style={{ width: "100%" }}
            >
              <img
                src={img}
                alt={`${t(`novedades.titulos.${novedad.tituloKey}`)} ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Chevrones */}
        {novedad.imagen.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicador */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {novedad.imagen.length}
            </div>
          </>
        )}
      </div>

      {/* Contenido de la novedad */}
      <div className="space-y-4">
        <span className="bg-[#04ab8d] text-white text-xs px-3 py-1 rounded-md uppercase tracking-wider">
          {novedad.categoria}
        </span>

        <h1 className="text-4xl font-bold text-gray-100 drop-shadow-md mt-5">
          {t(`novedades.titulos.${novedad.tituloKey}`)}
        </h1>

        <p className="text-sm text-gray-400 italic">
          {novedad.fecha} — {t(`novedades.autores.${novedad.autorKey}`)}
        </p>

        <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line text-left">
          {t(`novedades.descripciones.${novedad.descripcionKey}`)}
        </p>
      </div>
    </div>
  );
}
