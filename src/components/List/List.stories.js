import React from "react";
import List from "./List";
import ListItem from "./ListItem";

export default {
  title: "List"
};

export const defaultUsage = () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
);

export const oneItem = () => (
  <List>
    <ListItem>Item 1</ListItem>
  </List>
);

export const manyItems = () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
    <ListItem>Item 4</ListItem>
    <ListItem>Item 5</ListItem>
    <ListItem>Item 6</ListItem>
    <ListItem>Item 7</ListItem>
    <ListItem>Item 8</ListItem>
    <ListItem>Item 9</ListItem>
    <ListItem>Item 10</ListItem>
  </List>
);
