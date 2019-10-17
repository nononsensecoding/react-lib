import React from "react";
import Calendar from "./Calendar";

export default {
  title: "Calendar"
};

export const basicUsage = () => <Calendar />;

export const differentValueForToday = () => (
  <Calendar startDate={new Date(2019, 1, 1)} />
);
