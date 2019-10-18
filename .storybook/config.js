import React, { useState } from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes";
import locales from "../src/locales/";
import TranslationsProvider from "../src/components/TranslationsProvider";
import Dropdown from "../src/components/Dropdown";
import styled from "styled-components";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);

const LocaleSelectorContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #ddd;
  margin: 0 0 10px 0;
  align-items: center;
  font-size: 14px;

  > label {
    margin-right: 6px;
  }
`;

const LocaleSelector = ({ defaultLocale = "en-CA", ...others }) => (
  <LocaleSelectorContainer>
    <label>Locale: </label>
    <Dropdown
      defaultValue={defaultLocale}
      options={Object.keys(locales).map(locale => ({
        label: locale,
        value: locale
      }))}
      {...others}
    />
  </LocaleSelectorContainer>
);

addDecorator(story => {
  const [translations, setTranslations] = useState(locales["en-CA"]);
  return (
    <TranslationsProvider translations={translations}>
      <LocaleSelector onChange={locale => setTranslations(locales[locale])} />
      <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
    </TranslationsProvider>
  );
});
