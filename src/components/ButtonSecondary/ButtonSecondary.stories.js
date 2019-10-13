import React from "react";
import ButtonSecondary from "./ButtonSecondary";

export default {
  title: "ButtonSecondary"
};

export const idle = () => (
  <ButtonSecondary>Hello Secondary Button</ButtonSecondary>
);

export const emojiChildren = () => (
  <ButtonSecondary>
    <span role="img" aria-label="so cool">
      😀 😎 with text
    </span>
  </ButtonSecondary>
);

export const disabled = () => (
  <ButtonSecondary disabled>Hello Secondary Button</ButtonSecondary>
);

export const hover = () => (
  <ButtonSecondary isDefaultHovering>Hello Secondary Button</ButtonSecondary>
);

export const focused = () => (
  <ButtonSecondary focused>Implement this</ButtonSecondary>
);
