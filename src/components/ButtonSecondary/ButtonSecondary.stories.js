import React from "react";
import ButtonSecondary from "./ButtonSecondary";

export default {
  title: "ButtonSecondary"
};

export const idle = () => <ButtonSecondary>Secondary Button</ButtonSecondary>;

export const emojiChildren = () => (
  <ButtonSecondary>
    <span role="img" aria-label="so cool">
      😀 😎 with text
    </span>
  </ButtonSecondary>
);

export const disabled = () => (
  <ButtonSecondary disabled>Secondary Button</ButtonSecondary>
);
