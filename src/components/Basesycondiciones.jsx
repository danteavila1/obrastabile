import React from "react";
import { useTranslation } from "react-i18next";

export default function Basesycondiciones({ color, pdfUrl }) {
  const { t } = useTranslation();

  return (
    <div className="text-left">
      {/* BASES Y CONDICIONES */}
      <div className="mt-10 pb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          <span className="relative">
            {t("bases.title")}
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
          </span>
        </h2>

        <div
          className="text-lg md:text-xl text-gray-200 leading-relaxed pl-4 border-l-4"
          style={{ borderColor: color }}
        >
          <p className="mb-4">{t("bases.description")}</p>

          <a
            href={pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#04ab8d] text-white font-semibold rounded-xl shadow hover:bg-[#039b80] transition-colors duration-300"
          >
            {t("bases.button")}
          </a>
        </div>
      </div>
    </div>
  );
}
