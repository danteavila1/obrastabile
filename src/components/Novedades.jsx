import React from "react";

const novedades = [
  {
    id: 1,
    categoria: "Club Stábile",
    color: "purple",
    titulo: "NUEVO PISO PARA EL GIMNASIO DEL CLUB",
    descripcion:
      "El piso del gimnasio de aparatos del Club Stábile fue renovado en su totalidad. La empresa Playcourt proveyó 121m2 de piso liso de dos colores, con lo cual jerarquiza un espacio fundamental utilizado por ciertos de socios que diariamente ejercitan musculación, se preparan para la práctica del automovilismo o complementan sus actividades deportivas",
    autor: "Actividad física y deporte",
    fecha: "Sep 20, 2025",
    imagen: "../src/assets/imgNovedades/gimclubstabile.webp",
    destacado: true,
  },
  {
    id: 2,
    categoria: "Jardín de Infantes",
    color: "blue",
    titulo: "Nuevo piso para el patio del Jardín de Infantes",
    autor: "Educación Formal",
    fecha: "Sep 15, 2025",
    imagen: "../src/assets/imgNovedades/patiojardin.webp",
  },
  {
    id: 3,
    categoria: "Instituciones Virgen de Luján",
    color: "green",
    titulo: "Febrero: Mes de capacitaciones en la Institución Virgen de Luján",
    autor: "Educación Formal",
    fecha: "Sep 10, 2025",
    imagen: "../src/assets/imgNovedades/capacitaciones.webp",
  },
];

export default function NovedadesSection() {
  return (
    <section className="relative z-10 mt-30 md:mt-40 rounded-b-[50px]">

      {/* Título fuera del fondo verde */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-8 xl:px-0 text-left ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          <span className="relative">
            NOVEDADES
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
          </span>
        </h2>
      </div>

      {/* Fondo verde a pantalla completa */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 w-screen bg-[#04ab8d] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0">
          {/* Contenedor de tarjetas */}
          <div className="flex flex-wrap gap-8">
            {novedades.map((item) =>
              item.destacado ? (
                // Tarjeta grande
                <div
                  key={item.id}
                  className="w-full flex flex-col lg:flex-row lg:items-center gap-6 bg-black shadow-xl rounded-xl p-3"
                >
                  <div className="lg:w-2/3">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 text-left pb-3">
                    <span
                      className={`inline-flex text-[#fad016] bg-${item.color}-200 font-medium text-sm py-1 rounded-full mb-4`}
                    >
                      {item.categoria}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{item.titulo}</h3>
                    <p className="mb-5 text-white-600">{item.descripcion}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <p>{item.autor}</p>
                      <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                      <p>{item.fecha}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Tarjeta chica
                <div
                  key={item.id}
                  className="lg:w-[calc(50%-1rem)] flex flex-col sm:flex-row sm:items-center gap-6 bg-black shadow-md rounded-xl p-3"
                >
                  <div className="sm:w-2/3">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="sm:w-1/2 text-left">
                    <span
                      className={`inline-flex text-[#fad016] bg-${item.color}-200 font-medium text-sm py-1 rounded-full mb-3`}
                    >
                      {item.categoria}
                    </span>
                    <h4 className="font-semibold text-lg mb-3">{item.titulo}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <p>{item.autor}</p>
                      <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                      <p>{item.fecha}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


