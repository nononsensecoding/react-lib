import React from "react";
import Select from "./Select";
import SelectOption from "./SelectOption";

export default {
  title: "Select"
};

export const defaultUsage = () => (
  <Select>
    <SelectOption>Option 1</SelectOption>
    <SelectOption>Option 2</SelectOption>
    <SelectOption>Option 3</SelectOption>
  </Select>
);

export const noOptions = () => <Select></Select>;

export const oneOption = () => (
  <Select>
    <SelectOption>Option 1</SelectOption>
  </Select>
);

export const manyOptions = () => (
  <Select>
    <SelectOption>Option 1</SelectOption>
    <SelectOption>Option 2</SelectOption>
    <SelectOption>Option 3</SelectOption>
    <SelectOption>Option 4</SelectOption>
    <SelectOption>Option 5</SelectOption>
    <SelectOption>Option 6</SelectOption>
    <SelectOption>Option 7</SelectOption>
    <SelectOption>Option 8</SelectOption>
    <SelectOption>Option 9</SelectOption>
    <SelectOption>Option 10</SelectOption>
    <SelectOption>Option 11</SelectOption>
    <SelectOption>Option 12</SelectOption>
    <SelectOption>Option 13</SelectOption>
    <SelectOption>Option 14</SelectOption>
    <SelectOption>Option 15</SelectOption>
  </Select>
);
