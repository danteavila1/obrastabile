import React, { useState, useEffect } from "react";
import { novedades } from "../data/novedades";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NovedadesCarrusel({ institucionId }) {
  const { t } = useTranslation();
  const novedadesInstitucion = novedades.filter(
    (nov) => nov.institucionId === institucionId
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < novedadesInstitucion.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const visibleItems = Math.min(itemsPerPage, novedadesInstitucion.length);


  return (
    <div className="mt-10 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
        <span className="relative">
          {t("novedades.titulo")}
          <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
        </span>
      </h2>

      {novedadesInstitucion.length === 0 ? (
        <p className="text-gray-400">{t("novedades.noHay")}</p>
      ) : (
        <div className="relative overflow-hidden left-1/2 transform -translate-x-1/2 w-screen bg-[#04ab8d] py-6 z-10">
          <div className="relative">
            <div className="flex justify-center max-w-2xl lg:max-w-5xl mx-auto px-5">
              <div
                className={`flex transition-transform duration-500 ease-in-out ${
                  novedadesInstitucion.length < itemsPerPage ? "justify-center" : ""
                }`}
                style={{
                  transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
                  width: `${(novedadesInstitucion.length * 100) / visibleItems}%`,
                }}
              >

                {novedadesInstitucion.map((nov, idx) => (
                  <Link
                    to={`/novedades/${nov.id}`}
                    key={idx}
                    className="p-2 flex-shrink-0"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-64 group">
                      {nov.imagen && (
                        <img
                          src={nov.imagen[0]}
                          alt={t(`novedades.titulos.${nov.tituloKey}`)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                        <span className="bg-[#04ab8d] text-xs px-2 py-1 rounded-md uppercase tracking-wider">
                          {nov.categoria || t("novedades.titulos.general")}
                        </span>
                        <h3 className="text-xl font-semibold mt-2 drop-shadow-lg">
                          {t(`novedades.titulos.${nov.tituloKey}`)}
                        </h3>
                        <p className="text-xs mt-1 drop-shadow-lg italic">
                          {nov.fecha}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Botones de navegación con Lucide */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= novedadesInstitucion.length - itemsPerPage}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="text-center mt-10">
            <Link
              to="/novedades"
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
              {t("novedades.verMas")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
