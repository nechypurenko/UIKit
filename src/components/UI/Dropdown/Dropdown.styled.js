import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.isOpen ? '#f0f0f0' : 'white')};
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  background-color: ${(props) =>
    props.isHovered ? '#f0f0f0' : props.isSelected ? '#e8e8e8' : 'white'};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ArrowIcon = styled.div`
  width: 10px;
  height: 10px;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  transform: rotate(${(props) => (props.isOpen ? '45deg' : '-135deg')});
  transition: transform 0.3s ease;
`;
