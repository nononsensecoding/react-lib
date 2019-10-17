import React, { useState } from "react";
import styled from "styled-components";
import {
  getDaysInMonthArray,
  incrementMonth,
  decrementMonth
} from "../../utils/date";
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
  padding: 4px 0;
`;

const MonthSelectorMonth = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex: 1;
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
  border-left-width: ${({ isFirstDayInWeek }) =>
    isFirstDayInWeek ? "1px" : 0};
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

const DayNumber = styled.div`
  padding: 4px 0 0 4px;
`;

const Calendar = ({ startDate = new Date(), width = 350, theme }) => {
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

  return (
    <Container theme={theme} width={width}>
      <MonthSelector>
        <MonthSelectorButton
          onClick={() => setViewingDate(decrementMonth(viewingDate))}
        >
          &lt;
        </MonthSelectorButton>
        <MonthSelectorMonth>{`${monthNames[viewingMonth]} ${viewingYear}`}</MonthSelectorMonth>
        <MonthSelectorButton
          onClick={() => setViewingDate(incrementMonth(viewingDate))}
        >
          &gt;
        </MonthSelectorButton>
      </MonthSelector>
      <CurrentMonth>
        {daysInViewingMonth.map(day => (
          <Day
            key={day}
            isSelectedDay={isDaySelected(day)}
            isFirstDayInWeek={day === 1 || (day - 1) % 7 === 0}
            isInFirstRow={day <= 7}
            width={dayWidth}
            onClick={() =>
              setSelectedDate(new Date(viewingYear, viewingMonth, day))
            }
          >
            <DayNumber>{day}</DayNumber>
          </Day>
        ))}
      </CurrentMonth>
    </Container>
  );
};

export default Calendar;
