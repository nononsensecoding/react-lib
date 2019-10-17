import React, { useState } from "react";
import styled from "styled-components";
import {
  getDaysInMonthArray,
  addMonths,
  getFirstDayOfMonth,
  getDayOfWeekName
} from "../../utils/date";
import { fillIntegerArray } from "../../utils/array";
import { monthNames } from "../../data/strings.en-CA";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 210px;
  width: ${({ width }) => `${width}px` || "210px"};
  font-family: ${({ theme }) => theme.fontFamily};
`;

const MonthSelector = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 0;
`;

const MonthSelectorMonth = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
`;

const MonthSelectorButton = styled.button`
  display: flex;
  box-sizing: border-box;
`;

const CurrentMonth = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Day = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: #333;
  border-top-width: ${({ isInFirstRow }) => (isInFirstRow ? "1px" : 0)};
  border-bottom-width: 1px;
  border-left-width: ${({ isFirstDayInRow }) => (isFirstDayInRow ? "1px" : 0)};
  border-right-width: 1px;
  min-width: 30px;
  min-height: 30px;
  width: ${({ width }) => `${width}px` || "30px"};
  height: ${({ width }) => `${width}px` || "30px"};
  box-sizing: border-box;
  background-color: ${({ isSelectedDay }) => (isSelectedDay ? "#333" : "#fff")};
  color: ${({ isSelectedDay }) => (isSelectedDay ? "#fff" : "#333")};
  cursor: pointer;
  font-size: 14px;
`;

const EmptyDay = styled(Day)`
  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: ${({ isLastEmptyDay }) =>
    isLastEmptyDay ? "#333" : "#fff"};
  border-left-width: ${({ isFirstDayInRow }) => (isFirstDayInRow ? "1px" : 0)};
`;

const DayNumber = styled.div`
  padding: 4px 0 0 4px;
`;

const DaysOfWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const DaysOfWeekDay = styled.div`
  display: flex;
  min-width: 30px;
  width: ${({ width }) => `${width}px` || "30px"};
  box-sizing: border-box;
  justify-content: center;
  padding: 10px 0;
  font-size: 14px;
`;

const Calendar = ({
  startDate = new Date(),
  width = 350,
  onDateSelect,
  theme
}) => {
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [viewingDate, setViewingDate] = useState(startDate);

  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();
  const selectedDay = selectedDate.getDate();

  const viewingYear = viewingDate.getFullYear();
  const viewingMonth = viewingDate.getMonth();

  const daysInViewingMonth = getDaysInMonthArray(viewingYear, viewingMonth);

  const isDaySelected = day =>
    selectedDay === day &&
    viewingYear === selectedYear &&
    viewingMonth === selectedMonth;

  const dayWidth = width / 7;

  const firstDayOfViewingMonth = getFirstDayOfMonth(viewingYear, viewingMonth);

  const emptyStartDays = fillIntegerArray(firstDayOfViewingMonth);
  const daysOfWeek = fillIntegerArray(7);

  const handleDateSelect = date => {
    setSelectedDate(date);

    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const handleKeyPress = (charCode, date) => {
    if (charCode === 13 || charCode === 32) {
      handleDateSelect(date);
    }
  };

  return (
    <Container theme={theme} width={width}>
      <MonthSelector>
        <MonthSelectorButton
          onClick={() => setViewingDate(addMonths(viewingDate, -1))}
        >
          &lt;
        </MonthSelectorButton>
        <MonthSelectorMonth>{`${monthNames[viewingMonth]} ${viewingYear}`}</MonthSelectorMonth>
        <MonthSelectorButton
          onClick={() => setViewingDate(addMonths(viewingDate, 1))}
        >
          &gt;
        </MonthSelectorButton>
      </MonthSelector>
      <CurrentMonth>
        <DaysOfWeek>
          {daysOfWeek.map(day => (
            <DaysOfWeekDay key={day} width={dayWidth}>
              {getDayOfWeekName(new Date(viewingYear, viewingMonth, day - 1))}
            </DaysOfWeekDay>
          ))}
        </DaysOfWeek>
        {emptyStartDays.map((day, i) => (
          <EmptyDay
            key={i}
            isFirstDayInRow={i === 0}
            isLastEmptyDay={i === emptyStartDays.length - 1}
            width={dayWidth}
          />
        ))}
        {daysInViewingMonth.map(day => {
          const date = new Date(viewingYear, viewingMonth, day);
          return (
            <Day
              key={day}
              tabIndex={0}
              isSelectedDay={isDaySelected(day)}
              isFirstDayInRow={date.getDay() === 0}
              isInFirstRow={day <= 7 - firstDayOfViewingMonth}
              width={dayWidth}
              onClick={() => handleDateSelect(date)}
              onKeyPress={event => handleKeyPress(event.charCode, date)}
            >
              <DayNumber>{day}</DayNumber>
            </Day>
          );
        })}
      </CurrentMonth>
    </Container>
  );
};

export default Calendar;
