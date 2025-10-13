import React from "react";
import { Link } from "react-router-dom";
import { novedades } from "../data/novedades";
import { useTranslation } from "react-i18next";

// Importar imágenes
import gimclubstabile from "../assets/imgNovedades/gimclubstabile.webp";
import patiojardin from "../assets/imgNovedades/patiojardin.webp";
import capacitaciones from "../assets/imgNovedades/capacitaciones.webp";

export default function NovedadesSection({ institucionId }) {
  const { t } = useTranslation();

  // Mapear imágenes
  const novedadesConImagenes = novedades.map((item) => {
    let imagenImport;
    switch (item.id) {
      case 1:
        imagenImport = gimclubstabile;
        break;
      case 2:
        imagenImport = patiojardin;
        break;
      case 3:
        imagenImport = capacitaciones;
        break;
      default:
        imagenImport = item.imagen;
    }
    return { ...item, imagen: imagenImport };
  });

  // Filtrar por institucionId si viene
  const novedadesFiltradas = institucionId
    ? novedadesConImagenes.filter((n) => n.institucionId === institucionId)
    : [...novedadesConImagenes]
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        .slice(0, 3);

  if (!novedadesFiltradas.length) {
    return (
      <p className="text-center text-gray-300 mt-10">
        {t("novedades.noHay")}
      </p>
    );
  }

  return (
    <section className="relative z-10 mt-30 md:mt-40 rounded-b-[50px]">
      {/* Título fuera del fondo verde */}
      <div className="relative z-10 max-w-6xl px-4 sm:px-8 xl:px-0 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          <span className="relative">
            {t("novedades.titulo")}
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
          </span>
        </h2>
      </div>

      {/* Fondo verde */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 w-screen bg-[#04ab8d] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap gap-8">
            {novedadesFiltradas.map((item) =>
              item.destacado ? (
                // Tarjeta grande
                <div
                  key={item.id}
                  className="w-full flex flex-col lg:flex-row lg:items-center gap-6 bg-black shadow-xl rounded-xl p-3 border border-transparent transition-all duration-300 hover:border-[#fad016] hover:shadow-[0_0_15px_#fad016]"
                >
                  <div className="lg:w-2/3">
                    <img
                      src={item.imagen}
                      alt={t(`novedades.titulos.${item.tituloKey}`)}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 text-left pb-3">
                    <span className="inline-flex text-[#fad016] font-medium text-sm py-1 rounded-full mb-4">
                      {item.categoria}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">
                      {t(`novedades.titulos.${item.tituloKey}`)}
                    </h3>
                    <p className="mb-5 text-white-600">
                      {t(`novedades.descripciones.${item.descripcionKey}`)}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <p>{t(`novedades.autores.${item.autorKey}`)}</p>
                      <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                      <p>{item.fecha}</p>
                    </div>
                  </div>
                </div>
              ) : (
                // Tarjeta chica
                <div
                  key={item.id}
                  className="lg:w-[calc(50%-1rem)] flex flex-col sm:flex-row sm:items-center gap-6 bg-black shadow-md rounded-xl p-3 border border-transparent transition-all duration-300 hover:border-[#fad016] hover:shadow-[0_0_15px_#fad016]"
                >
                  <div className="sm:w-2/3">
                    <img
                      src={item.imagen}
                      alt={t(`novedades.titulos.${item.tituloKey}`)}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="sm:w-1/2 text-left">
                    <span className="inline-flex text-[#fad016] font-medium text-sm py-1 rounded-full mb-3">
                      {item.categoria}
                    </span>
                    <h4 className="font-semibold text-lg mb-3">
                      {t(`novedades.titulos.${item.tituloKey}`)}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <p>{t(`novedades.autores.${item.autorKey}`)}</p>
                      <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                      <p>{item.fecha}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Botón Ver más */}
          <div className="text-center mt-10">
            <Link
              to="/construccion"
              className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            >
              {t("novedades.verMas")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
