import React from "react";
import Calendar from "./Calendar";

export default {
  title: "Calendar"
};

export const basicUsage = () => <Calendar />;

export const monthWith31Days = () => (
  <Calendar startDate={new Date(2019, 0, 1)} />
);

export const monthWith30Days = () => (
  <Calendar startDate={new Date(2019, 3, 1)} />
);

export const monthWithLessThan30Days = () => (
  <Calendar startDate={new Date(2019, 1, 1)} />
);

export const customWidth = () => <Calendar width={700} />;
