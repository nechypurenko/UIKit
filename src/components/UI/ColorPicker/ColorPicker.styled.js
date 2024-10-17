import styled from 'styled-components';

export const ColorPickerWrapper = styled.div`
  display: inline-block;
  padding: 10px;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

export const ColorItem = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SelectedColorOutline = styled.div`
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border: 1px solid #000;
  border-radius: 4px;
  pointer-events: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
