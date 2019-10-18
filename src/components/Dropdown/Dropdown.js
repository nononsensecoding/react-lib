import React, { useState } from "react";
import Select from "../Select";
import SelectOption from "../Select/SelectOption";

const Dropdown = ({ defaultValue, options, onChange, ...others }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <Select
      {...others}
      value={value}
      onChange={event => {
        setValue(event.target.value);
        if (onChange) {
          onChange(event.target.value);
        }
      }}
    >
      {options.map(option => (
        <SelectOption key={option.value} value={option.value}>
          {option.label}
        </SelectOption>
      ))}
    </Select>
  );
};

export default Dropdown;
