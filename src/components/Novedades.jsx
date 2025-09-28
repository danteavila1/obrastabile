import React from "react";

const novedades = [
  {
    id: 1,
    categoria: "Novedades",
    color: "purple",
    titulo: "NUEVO PISO PARA EL GIMNASIO DEL CLUB",
    descripcion:
      "El piso del gimnasio de aparatos del Club Stábile fue renovado en su totalidad. La empresa Playcourt proveyó 121m2 de piso liso de dos colores, con lo cual jerarquiza un espacio fundamental utilizado por ciertos de socios que diariamente ejercitan musculación, se preparan para la práctica del automovilismo o complementan sus actividades deportivas",
    autor: "Club Stábile",
    fecha: "Sep 20, 2025",
    imagen: "../src/assets/imgNovedades/gimclubstabile.webp",
    destacado: true,
  },
  {
    id: 2,
    categoria: "Educación",
    color: "blue",
    titulo: "Nuevo piso para el patio del Jardín de Infantes",
    autor: "Equipo de Comunicación",
    fecha: "Sep 15, 2025",
    imagen: "../src/assets/imgNovedades/patiojardin.webp",
  },
  {
    id: 3,
    categoria: "Comunidad",
    color: "green",
    titulo: "Febrero: Mes de capacitaciones en la Institución Virgen de Luján",
    autor: "Coordinación General",
    fecha: "Sep 10, 2025",
    imagen: "../src/assets/imgNovedades/capacitaciones.webp",
  },
];

export default function NovedadesSection() {
  return (
    <section className="relative overflow-hidden z-10 pb-20 pt-20 rounded-b-[50px]">

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 xl:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Novedades
        </h2>

        <div className="flex flex-wrap gap-8">
            {novedades.map((item) =>
            item.destacado ? (
                // Tarjeta grande
                <div
                key={item.id}
                className="w-full flex flex-col lg:flex-row lg:items-center gap-6 bg-[#04ab8d] shadow-xl rounded-xl p-6"
                >
                <div className="lg:w-1/2">
                    <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full rounded-lg"
                    />
                </div>
                {/* 👇 le agregamos text-left aquí */}
                <div className="lg:w-1/2 text-left">
                    <span
                    className={`inline-flex text-${item.color}-700 bg-${item.color}-200 font-medium text-sm py-1 px-3 rounded-full mb-4`}
                    >
                    {item.categoria}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{item.titulo}</h3>
                    <p className="mb-4 text-white-600">{item.descripcion}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-800">
                    <p>{item.autor}</p>
                    <span className="w-[3px] h-[3px] bg-gray-800 rounded-full"></span>
                    <p>{item.fecha}</p>
                    </div>
                </div>
                </div>
            ) : (
                // Tarjeta chica
                <div
                key={item.id}
                className="lg:w-[calc(50%-1rem)] flex flex-col sm:flex-row sm:items-center gap-6 bg-[#04ab8d] shadow-md rounded-xl p-4"
                >
                <div className="sm:w-1/2">
                    <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full rounded-lg"
                    />
                </div>
                {/* 👇 lo mismo acá */}
                <div className="sm:w-1/2 text-left">
                    <span
                    className={`inline-flex text-${item.color}-700 bg-${item.color}-200 font-medium text-sm py-1 px-3 rounded-full mb-3`}
                    >
                    {item.categoria}
                    </span>
                    <h4 className="font-semibold text-lg mb-2">{item.titulo}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-800">
                    <p>{item.autor}</p>
                    <span className="w-[3px] h-[3px] bg-gray-800 rounded-full"></span>
                    <p>{item.fecha}</p>
                    </div>
                </div>
                </div>
            )
            )}
        </div>
        </div>

    </section>
  );
}
