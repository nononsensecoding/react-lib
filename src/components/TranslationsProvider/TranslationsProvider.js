import React from "react";
import TranslationsContext, {
  translations as initialTranslations
} from "./TranslationsContext";

const TranslationsProvider = ({
  children,
  translations = initialTranslations
}) => {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
