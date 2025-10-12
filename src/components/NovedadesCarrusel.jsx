import React, { useState, useEffect } from "react";
import { novedades } from "../data/novedades";
import { Link } from "react-router-dom";

export default function NovedadesCarrusel({ institucionId }) {
  const novedadesInstitucion = novedades.filter(
    (nov) => nov.institucionId === institucionId
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Ajustar cantidad de tarjetas según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Celulares → 1 tarjeta
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablets → 2 tarjetas
      } else {
        setItemsPerPage(3); // Desktop → 3 tarjetas
      }
      setCurrentIndex(0); // Reiniciar posición al cambiar tamaño
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < novedadesInstitucion.length) {
      setCurrentIndex(currentIndex + 1); // avanzar de a 1 tarjeta
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // retroceder de a 1 tarjeta
    }
  };

  return (
    <div className="mt-10 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
        <span className="relative">
          NOVEDADES
          <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
        </span>
      </h2>

      {novedadesInstitucion.length === 0 ? (
        <p className="text-gray-400">No hay novedades aún.</p>
      ) : (
        <div className="relative overflow-hidden left-1/2 transform -translate-x-1/2 w-screen bg-[#04ab8d] py-6 z-10 ">
          {/* Fondo verde decorativo */}
          <div className="relative ">
            {/* Carrusel */}
            <div className="flex justify-center max-w-2xl lg:max-w-5xl mx-auto px-5">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
                  width: `${
                    (novedadesInstitucion.length * 100) / itemsPerPage
                  }%`,
                }}
              >
                {novedadesInstitucion.map((nov, idx) => (
                  <div
                    key={idx}
                    className="p-2 flex-shrink-0"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-64 group">
                      {/* Imagen */}
                      {nov.imagen && (
                        <img
                          src={nov.imagen}
                          alt={nov.titulo}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                      {/* Contenido */}
                      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                        <span className="bg-[#04ab8d] text-xs px-2 py-1 rounded-md uppercase tracking-wider">
                          {nov.categoria || "General"}
                        </span>
                        <h3 className="text-xl font-semibold mt-2 drop-shadow-lg">
                          {nov.titulo}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Botón Ver más */}
          <div className="text-center mt-10">
            <Link
              to="/construccion"
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
              Ver más
            </Link>
          </div>
          
          {/* Botones */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-30"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= novedadesInstitucion.length - itemsPerPage}
            className="absolute right-10 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-30"
          >
            ▶
          </button>
        </div>
      )}
      
    </div>
  );
}
