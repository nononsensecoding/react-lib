import React from "react";
import initialTranslations from "../../locales/en-CA";

export const translations = initialTranslations;
const TranslationsContext = React.createContext(translations);

export default TranslationsContext;
