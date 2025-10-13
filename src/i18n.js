import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

// Los recursos de traducción
const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
  it: { translation: translationIT },
};

// Inicializar
i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
