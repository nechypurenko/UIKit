import styled from 'styled-components';

export const StyledLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  cursor: ${({ state }) => (state === 'disabled' ? 'not-allowed' : 'pointer')};
  color: ${({ state }) =>
    state === 'disabled' ? '#575D58' : '#00AE1C'};

  &:hover {
    color: ${({ state }) => state !== 'disabled' && '#00AE1C'};
    text-decoration: ${({ state }) => (state !== 'disabled' ? 'underline' : 'none')};
  }

  &:active {
    color: ${({ state }) => state !== 'disabled' && '#0CD52B'}; 
  }
`;