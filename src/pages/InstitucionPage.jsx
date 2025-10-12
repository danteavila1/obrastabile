import React from "react";
import { useParams } from "react-router-dom";
import { institutions } from "../data/institutions";
// import NovedadesSection from "../components/Novedades";
import NovedadesCarrusel from "../components/NovedadesCarrusel";
import Basesycondiciones from "../components/Basesycondiciones";
import basespdf from "../assets/docs/basesycondiciones.pdf"


export default function InstitucionPage() {
  const { id } = useParams();
  const institucion = institutions.find((inst) => inst.id.toString() === id);

  if (!institucion)
    return <p className="text-white text-center mt-10">Institución no encontrada</p>;

  // 🔹 Solo la institución "Concurso" (id 3) tendrá página lista
  const isConcurso = institucion.id === 3;

  if (!isConcurso) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <p className="text-gray-300 text-lg">Página en construcción 🚧</p>
      </div>
    );
  }

  // 🔹 Página del Concurso (terminada)
  return (
    <div className="relative">
      {/* Banner */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 translate-y-9 w-screen bottom-43 md:bottom-38 h-[310px] md:h-[450px] lg:h-[500px]">
        <img
          src={institucion.banner}
          alt={`Banner de ${institucion.name}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay con color */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: institucion.color }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full pt-25 md:pt-17">
          <img
            src={institucion.logo}
            alt={institucion.name}  
            className="max-h-54 md:max-h-64 object-contain mx-auto drop-shadow-lg"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl text-left bottom-20">

        {/* Introducción */}
        <div className="mt-10 pb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="relative">
              INTRODUCCIÓN
              <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-200 leading-relaxed pl-4 border-l-4"
            style={{ borderColor: institucion.color }}
          >
            {institucion.descripcion}
          </p>
        </div>

        {/* Bases y Condiciones */}
        <Basesycondiciones
          color={institucion.color}
          pdfUrl={basespdf} // ruta a tu PDF
        />
        {/* Novedades */}
        <NovedadesCarrusel institucionId={institucion.id} />

        {/* Contacto */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            <span className="relative">
              CONTACTO
              <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
            </span>
          </h2>

          <div
            className="space-y-3 text-lg text-gray-200 pl-4 border-l-4"
            style={{ borderColor: institucion.color }}
          >
            {institucion.contacto?.celular && (
              <p><strong>Celular:</strong> {institucion.contacto.celular}</p>
            )}
            {institucion.contacto?.mail && (
              <p><strong>Email:</strong> {institucion.contacto.mail}</p>
            )}
            {institucion.contacto?.direccion && (
              <p><strong>Dirección:</strong> {institucion.contacto.direccion}</p>
            )}
            {institucion.contacto?.redes && (
              <div>
                <strong>Redes:</strong>
                <div className="flex gap-4 mt-2">
                  {institucion.contacto.redes.facebook && (
                    <a
                      href={institucion.contacto.redes.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Facebook
                    </a>
                  )}
                  {institucion.contacto.redes.instagram && (
                    <a
                      href={institucion.contacto.redes.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      Instagram
                    </a>
                  )}
                  {institucion.contacto.redes.linkedIn && (
                    <a
                      href={institucion.contacto.redes.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

