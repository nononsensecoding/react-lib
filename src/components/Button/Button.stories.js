import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Button"
};

export const idle = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const emojiChildren = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const disabled = () => <Button disabled>Hello Button</Button>;

export const focused = () => <Button focused>Hello Button</Button>;

export const hover = () => <Button isDefaultHovering>Hello Button</Button>;
