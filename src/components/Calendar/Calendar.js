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
  width: 210px;
`;

const MonthSelector = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 6px;
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
  justify-content: center;
  align-items: center;
  border-top: 1px solid #333;
  border-bottom: ${({ isBottomRow }) =>
    isBottomRow ? "1px solid #333" : "none"};
  border-left: 1px solid #333;
  border-right: ${({ isLastDayInRow }) =>
    isLastDayInRow ? "1px solid #333" : "none"};
  width: 30px;
  height: 30px;
  box-sizing: border-box;
`;

const Calendar = ({ startDate = new Date(), theme }) => {
  const [selectedDate, setSelectedDate] = useState(startDate);
  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth();

  const daysInMonth = getDaysInMonthArray(selectedYear, selectedMonth);
  const dateString = `${monthNames[selectedMonth]} ${selectedYear}`;

  return (
    <Container theme={theme}>
      <MonthSelector>
        <MonthSelectorButton
          onClick={() => setSelectedDate(decrementMonth(selectedDate))}
        >
          &lt;
        </MonthSelectorButton>
        <MonthSelectorMonth>{dateString}</MonthSelectorMonth>
        <MonthSelectorButton
          onClick={() => setSelectedDate(incrementMonth(selectedDate))}
        >
          &gt;
        </MonthSelectorButton>
      </MonthSelector>
      <CurrentMonth>
        {daysInMonth.map(day => (
          <Day key={day}>{day}</Day>
        ))}
      </CurrentMonth>
    </Container>
  );
};

export default Calendar;
