import React, { useState, useContext } from "react";
import {
  addMonths,
  getDaysInMonthArray,
  getFirstDayOfMonth
} from "../../utils/date";
import { fillIntegerArray } from "../../utils/array";
import {
  Container,
  Navigation,
  NavigationLabel,
  NavigationButton,
  CurrentMonth,
  Day,
  EmptyDay,
  DayNumber,
  DaysOfWeek,
  DaysOfWeekDay
} from "./Calendar.styles";
import TranslationsProviderContext from "../TranslationsProvider/TranslationsContext";

const Calendar = ({ onDateSelect, startDate = new Date(), width = 350 }) => {
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [viewingDate, setViewingDate] = useState(startDate);
  const translations = useContext(TranslationsProviderContext);
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
  const getShortDayName = dayIndex =>
    translations.days[dayIndex - 1] &&
    translations.days[dayIndex - 1].substring(0, 3);

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
    <Container width={width}>
      <Navigation>
        <NavigationButton
          onClick={() => setViewingDate(addMonths(viewingDate, -1))}
        >
          &lt;
        </NavigationButton>
        <NavigationLabel>{translations.months[viewingMonth]}</NavigationLabel>
        <NavigationButton
          onClick={() => setViewingDate(addMonths(viewingDate, 1))}
        >
          &gt;
        </NavigationButton>
      </Navigation>
      <Navigation>
        <NavigationButton
          onClick={() => setViewingDate(addMonths(viewingDate, -12))}
        >
          &lt;
        </NavigationButton>
        <NavigationLabel>{viewingYear}</NavigationLabel>
        <NavigationButton
          onClick={() => setViewingDate(addMonths(viewingDate, 12))}
        >
          &gt;
        </NavigationButton>
      </Navigation>
      <CurrentMonth>
        <DaysOfWeek>
          {daysOfWeek.map(day => (
            <DaysOfWeekDay key={day} width={dayWidth}>
              {getShortDayName(day - 1)}
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
