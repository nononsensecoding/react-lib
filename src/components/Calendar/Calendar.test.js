import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calendar from "./Calendar";

describe("onDateSelect", () => {
  it("fires the onDateSelected prop function once when a date is clicked", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.click(getByText(/10/));

    expect(onDateSelectSpy.mock.calls.length).toEqual(1);
  });

  it("passes the selected date", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.click(getByText(/10/));

    expect(onDateSelectSpy.mock.calls[0][0]).toEqual(new Date(2019, 9, 10));
  });
});

describe("next month button", () => {
  it("rotates calendar to the next month", () => {
    const { getByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentMonth = getByText(/October 2019/);
    fireEvent.click(getByText(/>/));

    expect(currentMonth).toHaveTextContent("November 2019");
  });
});

describe("previous month button", () => {
  it("rotates calendar to the previous month", () => {
    const { getByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentMonth = getByText(/October 2019/);
    fireEvent.click(getByText(/</));

    expect(currentMonth).toHaveTextContent("September 2019");
  });
});
