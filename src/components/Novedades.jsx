import React from "react";
import { Link } from "react-router-dom";
import { novedades } from "../data/novedades";
import { useTranslation } from "react-i18next";


export default function NovedadesSection({ institucionId }) {
  const { t } = useTranslation();
  const maxLength = 300; // cantidad de caracteres antes de truncar

  // Filtrar por institucionId si viene, si no mostrar últimas 3 novedades
  let novedadesFiltradas = institucionId
    ? novedades.filter((n) => n.institucionId === institucionId)
    : [...novedades].sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 3);

  // Hacer que SOLO la primera (más reciente) sea destacada
  novedadesFiltradas = novedadesFiltradas.map((n, i) => ({
    ...n,
    destacado: i === 0, // La primera es grande, el resto chicas
  }));



  if (!novedadesFiltradas.length) {
    return (
      <p className="text-center text-gray-300 mt-10">{t("novedades.noHay")}</p>
    );
  }

  return (
    <section className="relative z-10 mt-30 md:mt-40 rounded-b-[50px]">
      {/* Título */}
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
        <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0 flex flex-wrap gap-8">
          {novedadesFiltradas.map((item) => {
            const descripcionTruncada =
              t(`novedades.descripciones.${item.descripcionKey}`).length > maxLength
                ? t(`novedades.descripciones.${item.descripcionKey}`).slice(
                    0,
                    maxLength
                  ) + "..."
                : t(`novedades.descripciones.${item.descripcionKey}`);

            // Tarjeta grande
            if (item.destacado) {
              return (
                <Link
                  key={item.id}
                  to={`/novedades/${item.id}`}
                  className="block w-full"
                >
                  <div className="w-full flex flex-col lg:flex-row lg:items-center gap-6 bg-black shadow-xl rounded-xl p-3 border border-transparent transition-all duration-300 hover:border-[#fad016] hover:shadow-[0_0_15px_#fad016]">
                    <div className="lg:w-2/3">
                      <img
                        src={Array.isArray(item.imagen) ? item.imagen[0] : item.imagen}
                        alt={t(`novedades.titulos.${item.tituloKey}`)}
                        className="w-full h-64 lg:h-80 rounded-lg object-cover"
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
                        {descripcionTruncada}{" "}
                        {t(`novedades.descripciones.${item.descripcionKey}`).length >
                          maxLength && (
                          <span className="text-[#04ab8d] underline ml-1">
                            {t("novedades.verMas")}
                          </span>
                        )}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-300">
                        <p>{t(`novedades.autores.${item.autorKey}`)}</p>
                        <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                        <p>{item.fecha}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }

            // Tarjeta chica
            return (
              <Link
                key={item.id}
                to={`/novedades/${item.id}`}
                className="block w-full lg:w-[calc(50%-1rem)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 bg-black shadow-md rounded-xl p-3 border border-transparent transition-all duration-300 hover:border-[#fad016] hover:shadow-[0_0_15px_#fad016]">
                  <div className="sm:w-2/3">
                    <img
                      src={Array.isArray(item.imagen) ? item.imagen[0] : item.imagen}
                      alt={t(`novedades.titulos.${item.tituloKey}`)}
                      className="w-full h-40 sm:h-48 lg:h-56 rounded-lg object-cover"
                    />
                  </div>
                  <div className="sm:w-1/2 text-left">
                    <span className="inline-flex text-[#fad016] font-medium text-sm py-1 rounded-full mb-3">
                      {item.categoria}
                    </span>
                    <h3 className="font-semibold text-lg mb-3">
                      {t(`novedades.titulos.${item.tituloKey}`)}
                    </h3>
                    <div className="flex items-center text-sm text-gray-300 gap-1">
                      <p className="">{t(`novedades.autores.${item.autorKey}`)}</p>
                      <span className="w-[3px] h-[3px] bg-gray-300 rounded-full"></span>
                      <p className="">{item.fecha}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Botón Ver más */}
        <div className="text-center mt-10">
          <Link
            to="/novedades"
            className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
          >
            {t("novedades.verMas")}
          </Link>
        </div>
      </div>
    </section>
  );
}
