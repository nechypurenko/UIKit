import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: #7a3e9d;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #7a3e9d;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  margin-bottom: 8px;
`;

export const StyledTextArea = styled.textarea`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #6b7280;
  resize: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  line-height: 1.5;

  &:focus {
    border-bottom: 2px solid #6c3fcf; /* Purple color for focused border */
  }
`;
