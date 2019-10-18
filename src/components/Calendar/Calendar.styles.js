import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 210px;
  width: ${({ width }) => `${width}px` || "210px"};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const Navigation = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 0 10px 0;
`;

export const NavigationLabel = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: bold;
`;

export const NavigationButton = styled.button`
  display: flex;
  box-sizing: border-box;
`;

export const CurrentMonth = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Day = styled.div`
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

export const EmptyDay = styled(Day)`
  border-top-color: #fff;
  border-left-color: #fff;
  border-right-color: ${({ isLastEmptyDay }) =>
    isLastEmptyDay ? "#333" : "#fff"};
  border-left-width: ${({ isFirstDayInRow }) => (isFirstDayInRow ? "1px" : 0)};
  cursor: auto;
`;

export const DayNumber = styled.div`
  padding: 4px 0 0 4px;
`;

export const DaysOfWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const DaysOfWeekDay = styled.div`
  display: flex;
  min-width: 30px;
  width: ${({ width }) => `${width}px` || "30px"};
  box-sizing: border-box;
  justify-content: center;
  padding: 10px 0;
  font-size: 14px;
`;
