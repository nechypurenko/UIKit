import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 150px;
  cursor: pointer;
`;

export const SelectDisplay = styled.div`
  padding: 10px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 16px;
  }
`;

export const SelectDropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s ease;
  z-index: 1;
  max-height: 200px;
`;

export const OptionItem = styled.li`
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? '#E3E3E3' : '#fff')};
  color: ${(props) => (props.isSelected ? '#000' : '#333')};
  font-weight: 'normal';
  cursor: pointer;

  &:hover {
    background-color: #F6F6F6;
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
