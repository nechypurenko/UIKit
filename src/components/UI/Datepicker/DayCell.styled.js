import styled from 'styled-components';

export const DayCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1; 
  margin: 2px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ isSelected }) => (isSelected ? '#00AE1C' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#333')};
  width: 100%; /* Ensure the cell takes full available width */

  &:hover {
    background: ${({ isSelected }) => (isSelected ? '#00AE1C' : '#f0f0f0')};
  }
`;

export const WeekRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;