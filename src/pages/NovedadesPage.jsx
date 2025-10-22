import React, { useState } from "react";
import bannerContacto from "../assets/banner/prueba.jpeg";
import { novedades } from "../data/novedades";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


export default function NovedadesPage() {
  const { t } = useTranslation();

  const [filtroCategoria, setFiltroCategoria] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [ordenFecha, setOrdenFecha] = useState("recientes"); // 👈 nuevo estado

  // Extraer categorías únicas desde las novedades
  const categorias = [...new Set(novedades.map((nov) => nov.categoria))];

  // Filtrado general
  const novedadesFiltradas = novedades
    .filter((nov) => {
      const coincideCategoria =
        filtroCategoria === "todas" || nov.categoria === filtroCategoria;

      const tituloTraducido = t(`novedades.titulos.${nov.tituloKey}`);
      const descripcionTraducida = t(`novedades.descripciones.${nov.tituloKey}`);

      const coincideBusqueda =
        tituloTraducido.toLowerCase().includes(busqueda.toLowerCase()) ||
        descripcionTraducida.toLowerCase().includes(busqueda.toLowerCase());

      return coincideCategoria && coincideBusqueda;
    })
    // 👇 Ordenar según la fecha
    .sort((a, b) => {
      const fechaA = new Date(a.fecha);
      const fechaB = new Date(b.fecha);
      return ordenFecha === "recientes" ? fechaB - fechaA : fechaA - fechaB;
    });

  return (
    <div className="relative z-10">
      {/* Banner */}
      <div className="relative z-10 left-1/2 -translate-x-1/2 translate-y-9 w-screen bottom-43 md:bottom-38 h-[310px] md:h-[450px] lg:h-[500px] bg-[#04ab8d]">
        <img
          src={bannerContacto}
          alt="Banner Novedades"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#fad016] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
            {t("novedades.titulo")}
          </h1>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-5xl mx-auto px-5 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Filtro por categoría */}
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
          >
            <option value="todas">
              {t("novedades.filtros.todasCategorias")}
            </option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Filtro por fecha */}
          <select
            value={ordenFecha}
            onChange={(e) => setOrdenFecha(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
          >
            <option value="recientes">{t("novedades.filtros.masRecientes")}</option>
            <option value="antiguas">{t("novedades.filtros.masAntiguas")}</option>
          </select>

          {/* Buscador */}
          <input
            type="text"
            placeholder={t("novedades.filtros.buscarPlaceholder")}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
          />
        </div>
      </div>

      {/* Lista de Novedades tipo lista vertical */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-5">
        {novedadesFiltradas.length === 0 ? (
          <p className="text-gray-200 text-center w-full">
            {t("novedades.noHay")}
          </p>
        ) : (
          novedadesFiltradas.map((nov, idx) => (
            <Link key={idx} to={`/novedades/${nov.id}`}>
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg h-64 group">
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
                    {nov.categoria}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 drop-shadow-lg">
                    {t(`novedades.titulos.${nov.tituloKey}`)}
                  </h3>
                  <p className="text-xs mt-1 drop-shadow-lg italic">{nov.fecha}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

    </div>
  );
}
