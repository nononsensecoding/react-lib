import React from "react";
import Calendar from "./Calendar";

export default {
  title: "Calendar"
};

export const basicUsage = () => <Calendar />;

export const startingJan2019 = () => (
  <Calendar startDate={new Date(2019, 0, 1)} />
);

export const startingDec2019 = () => (
  <Calendar startDate={new Date(2019, 11, 31)} />
);

export const startingMarch2019 = () => (
  <Calendar startDate={new Date(2019, 3, 1)} />
);

export const startingFeb2019 = () => (
  <Calendar startDate={new Date(2019, 1, 1)} />
);

export const customWidth = () => <Calendar width={700} />;
