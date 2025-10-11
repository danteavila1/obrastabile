import React, { useState } from "react";
import { novedades } from "../data/novedades";

export default function NovedadesCarrusel({ institucionId }) {
  const novedadesInstitucion = novedades.filter(
    (nov) => nov.institucionId === institucionId
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < novedadesInstitucion.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
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
        <div className="relative">
             {/* Fondo verde (decorativo) */}
      <div className="relative left-1/2 transform -translate-x-1/2 w-screen bg-[#04ab8d] py-6 -z-10">
          {/* Carrusel */}
        <div className="overflow-hidden flex justify-center">
            <div
            className="flex transition-transform duration-500 ease-in-out justify-center"
            style={{
                transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
                width: `${(Math.ceil(novedadesInstitucion.length / itemsPerPage)) * 100}%`,
            }}
            >
            {novedadesInstitucion.map((nov, idx) => (
                <div
                key={idx}
                className={`p-4 flex-shrink-0`}
                style={{
                    width: `${100 / itemsPerPage}%`, // ajusta el ancho en función de cuántos ítems querés mostrar por slide
                }}
                >
                <div className="bg-gray-800 rounded-lg shadow-lg h-full overflow-hidden">
                    {nov.imagen && (
                    <img
                        src={nov.imagen}
                        alt={nov.titulo}
                        className="w-full h-40 object-cover"
                    />
                    )}
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                        {nov.titulo}
                    </h3>
                    <p className="text-gray-300 text-sm">{nov.descripcion}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
</div>

          {/* Botones */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-30"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= novedadesInstitucion.length}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 disabled:opacity-30"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}
