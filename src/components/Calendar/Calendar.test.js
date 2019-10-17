import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calendar from "./Calendar";

describe("onDateSelect", () => {
  it("fires when a day is clicked", () => {
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

  it("passes the selected date when a day is clicked", () => {
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

  it("fires when the enter key is pressed on a day", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.keyPress(getByText(/10/), { charCode: 13 });

    expect(onDateSelectSpy.mock.calls.length).toEqual(1);
  });

  it("passes the selected date when the enter key is pressed on a day", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.keyPress(getByText(/10/), { charCode: 13 });

    expect(onDateSelectSpy.mock.calls[0][0]).toEqual(new Date(2019, 9, 10));
  });

  it("fires when the space bar key is pressed on a day", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.keyPress(getByText(/10/), { charCode: 32 });

    expect(onDateSelectSpy.mock.calls.length).toEqual(1);
  });

  it("passes the selected date when the space bar key is pressed on a day", () => {
    const onDateSelectSpy = jest.fn();

    const { getByText } = render(
      <Calendar
        startDate={new Date(2019, 9, 17)}
        onDateSelect={onDateSelectSpy}
      />
    );

    fireEvent.keyPress(getByText(/10/), { charCode: 32 });

    expect(onDateSelectSpy.mock.calls[0][0]).toEqual(new Date(2019, 9, 10));
  });
});

describe("next month button", () => {
  it("rotates calendar to the next month", () => {
    const { getByText, getAllByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentMonth = getByText(/October/);
    fireEvent.click(getAllByText(/>/)[0]);

    expect(currentMonth).toHaveTextContent("November");
  });
});

describe("previous month button", () => {
  it("rotates calendar to the previous month", () => {
    const { getByText, getAllByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentMonth = getByText(/October/);
    fireEvent.click(getAllByText(/</)[0]);

    expect(currentMonth).toHaveTextContent("September");
  });
});

describe("next year button", () => {
  it("rotates calendar to the next year", () => {
    const { getByText, getAllByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentYear = getByText(/2019/);
    fireEvent.click(getAllByText(/>/)[1]);

    expect(currentYear).toHaveTextContent("2020");
  });
});

describe("previous year button", () => {
  it("rotates calendar to the previous year", () => {
    const { getByText, getAllByText } = render(
      <Calendar startDate={new Date(2019, 9, 17)} />
    );

    const currentYear = getByText(/2019/);
    fireEvent.click(getAllByText(/</)[1]);

    expect(currentYear).toHaveTextContent("2018");
  });
});
