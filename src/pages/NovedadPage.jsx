import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { novedades } from "../data/novedades";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PortalModal from "../components/PortalModal";

export default function NovedadPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const novedad = novedades.find((n) => n.id === parseInt(id));

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

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
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

      {/* Carrusel principal */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg mb-8">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / novedad.imagen.length)}%)`,
            width: `${novedad.imagen.length * 100}%`,
          }}
        >
          {novedad.imagen.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative cursor-pointer"
              style={{ width: `${100 / novedad.imagen.length}%` }}
              onClick={() => handleImageClick(index)}
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

        <h1 className="text-4xl font-bold text-gray-100 drop-shadow-md mt-5 break-words">
          {t(`novedades.titulos.${novedad.tituloKey}`)}
        </h1>

        <p className="hidden text-sm text-gray-400 italic">
          {novedad.fecha} — {t(`novedades.autores.${novedad.autorKey}`)}
        </p>

        <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line text-left mt-10">
          {t(`novedades.descripciones.${novedad.descripcionKey}`)}
        </p>
      </div>

      {/* Modal via Portal */}
      <PortalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Inside modal: large carousel + controls */}
        <div className="relative w-full">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white hover:text-gray-300 z-20"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / novedad.imagen.length)}%)`,
                width: `${novedad.imagen.length * 100}%`,
              }}
            >
              {novedad.imagen.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / novedad.imagen.length}%` }}
                >
                  <img
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Flechas en el modal */}
          {novedad.imagen.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-30"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-30"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Indicador */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-1 rounded-full text-sm z-30">
                {currentIndex + 1} / {novedad.imagen.length}
              </div>
            </>
          )}
        </div>
      </PortalModal>
    </div>
  );
}
