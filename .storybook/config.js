import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/themes/default";

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
));
