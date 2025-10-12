import gimclubstabile from "../assets/imgNovedades/gimclubstabile.webp";
import patiojardin from "../assets/imgNovedades/patiojardin.webp";
import capacitaciones from "../assets/imgNovedades/capacitaciones.webp";

export const novedades = [
  {
    id: 1,
    institucionId: 3,
    categoria: "Club Stábile",
    color: "purple",
    titulo: "NUEVO PISO PARA EL GIMNASIO DEL CLUB",
    descripcion:
      "El piso del gimnasio de aparatos del Club Stábile fue renovado en su totalidad. La empresa Playcourt proveyó 121m2 de piso liso de dos colores...",
    autor: "Actividad física y deporte",
    fecha: "Sep 20, 2025",
    imagen: gimclubstabile,
    destacado: true,
  },
  {
    id: 2,
    institucionId: 3,
    categoria: "Jardín de Infantes",
    color: "blue",
    titulo: "Nuevo piso para el patio del Jardín de Infantes",
    autor: "Educación Formal",
    fecha: "Sep 15, 2025",
    imagen: patiojardin,
  },
  {
    id: 3,
    institucionId: 3,
    categoria: "Instituciones Virgen de Luján",
    color: "green",
    titulo: "Febrero: Mes de capacitaciones en la Institución Virgen de Luján",
    autor: "Educación Formal",
    fecha: "Sep 10, 2025",
    imagen: capacitaciones,
  },
];
