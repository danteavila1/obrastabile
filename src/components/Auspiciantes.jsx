import React from "react";
import { useTranslation } from "react-i18next";
import bacssa from "../assets/imgAuspiciantes/bacssa.webp";
import centenario from "../assets/imgAuspiciantes/centenario.webp";
import mauad from "../assets/imgAuspiciantes/mauad.webp";
import ops from "../assets/imgAuspiciantes/ops.webp";
import uca from "../assets/imgAuspiciantes/uca.webp";
import mc from "../assets/imgAuspiciantes/mc.webp";
import paradeportes from "../assets/imgAuspiciantes/paradeportes.webp";
import sima from "../assets/imgAuspiciantes/sima.webp";
import cdpn from "../assets/imgAuspiciantes/cdpn.webp";
import logos from "../assets/imgAuspiciantes/logos.webp";
import deposito from "../assets/imgAuspiciantes/deposito.webp";
import bm from "../assets/imgAuspiciantes/bm.webp";
import dante from "../assets/imgAuspiciantes/dante.webp";
import concretar from "../assets/imgAuspiciantes/concretar.webp";
import jerome from "../assets/imgAuspiciantes/jerome.webp";
import laureus from "../assets/imgAuspiciantes/laureus.webp";
import provincia from "../assets/imgAuspiciantes/provincia.webp";
import añelo from "../assets/imgAuspiciantes/añelo.webp";
import farmaciaglobal from "../assets/imgAuspiciantes/farmaciaglobal.webp";
import globaloil from "../assets/imgAuspiciantes/globaloil.webp";
import neuco from "../assets/imgAuspiciantes/neuco.webp";
import carahue from "../assets/imgAuspiciantes/carahue.webp";
import maiolo from "../assets/imgAuspiciantes/maiolo.webp";
import praderas from "../assets/imgAuspiciantes/praderas.webp";
import clarity from "../assets/imgAuspiciantes/clarity.webp";
import confluencia from "../assets/imgAuspiciantes/confluencia.webp";
import puentesdeluz from "../assets/imgAuspiciantes/puentesdeluz.webp";
import beta from "../assets/imgAuspiciantes/beta.webp";
import hothed from "../assets/imgAuspiciantes/hothed.webp";

const auspiciantes = [
  { id: 1, logo: bacssa },
  { id: 2, logo: centenario },
  { id: 3, logo: mauad },
  { id: 4, logo: ops },
  { id: 5, logo: uca },
  { id: 6, logo: mc },
  { id: 7, logo: paradeportes },
  { id: 8, logo: sima },
  { id: 9, logo: cdpn },
  { id: 10, logo: logos },
  { id: 11, logo: deposito },
  { id: 12, logo: bm },
  { id: 13, logo: dante },
  { id: 14, logo: concretar },
  { id: 15, logo: jerome },
  { id: 16, logo: laureus },
  { id: 17, logo: provincia },
  { id: 18, logo: añelo },
  { id: 19, logo: farmaciaglobal },
  { id: 20, logo: globaloil },
  { id: 21, logo: neuco },
  { id: 22, logo: carahue },
  { id: 23, logo: maiolo },
  { id: 24, logo: praderas },
  { id: 25, logo: clarity },
  { id: 26, logo: confluencia },
  { id: 27, logo: puentesdeluz },
  { id: 28, logo: beta },
  { id: 29, logo: hothed },
];

export default function Auspiciantes() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 mb-15">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 relative text-left">
        <span className="relative inline-block z-10">
            {t("auspiciantes")}
            <span className="absolute left-0 top-7 -translate-y-1/2 w-full h-5 bg-[#04ab8d] -z-10"></span>
        </span>
      </h2>

      {/* Carrusel infinito */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...auspiciantes, ...auspiciantes].map((aus, i) => (
            <div
              key={i}
              className="inline-flex justify-center items-center w-50 h-26 p-2"
            >
              <img
                src={aus.logo}
                alt={`Auspiciantes ${aus.id}`}
                className="max-h-26 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

