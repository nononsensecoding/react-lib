import React from "react";
import Button from "./Button";

export default {
  title: "Button"
};

export const idle = () => <Button>Hello Button</Button>;

export const emojiChildren = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 with text
    </span>
  </Button>
);

export const disabled = () => <Button disabled>Hello Button</Button>;

export const hover = () => <Button isDefaultHovering>Hello Button</Button>;

export const focused = () => <Button focused>Implement this</Button>;
