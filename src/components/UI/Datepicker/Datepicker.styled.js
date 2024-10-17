import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; 
  box-sizing: border-box; 
`;

export const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-shrink: 0; 
`;

export const MonthYear = styled.div`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  flex-shrink: 0; 
`;

export const DaysOfWeekContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
`;

export const DaysOfWeek = styled.div`
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    width: 36px;
    height: 40px;
    margin: 0px 2px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DatesGrid = styled.div`
  display: flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
align-items: center;
`;
