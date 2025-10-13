import gimclubstabile from "../assets/imgNovedades/gimclubstabile.webp";
import patiojardin from "../assets/imgNovedades/patiojardin.webp";
import capacitaciones from "../assets/imgNovedades/capacitaciones.webp";

export const novedades = [
  {
    id: 1,
    institucionId: 2,
    categoria: "Club Stábile",
    color: "purple",
    tituloKey: "nuevoPisoGimnasio",
    descripcionKey: "descPisoGimnasio",
    autorKey: "autorDeporte",
    fecha: "Sep 20, 2025",
    imagen: gimclubstabile,
    destacado: true,
  },
  {
    id: 2,
    institucionId: 2,
    categoria: "Jardín de Infantes",
    color: "blue",
    tituloKey: "nuevoPisoPatio",
    descripcionKey: "descPisoPatio",
    autorKey: "autorEducacionFormal",
    fecha: "Sep 15, 2025",
    imagen: patiojardin,
  },
  {
    id: 3,
    institucionId: 2,
    categoria: "Instituciones Virgen de Luján",
    color: "green",
    tituloKey: "mesCapacitaciones",
    descripcionKey: "descMesCapacitaciones",
    autorKey: "autorEducacionFormal",
    fecha: "Sep 10, 2025",
    imagen: capacitaciones,
  },
];

