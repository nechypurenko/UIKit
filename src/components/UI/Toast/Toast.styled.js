import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%; 
  transform: translateX(-50%);
  z-index: 1400; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ToastContent = styled.div`
color: rgba(0, 0, 0, 0.87);
display: flex;
padding: 16px 24px;
flex-grow: 1;
flex-wrap: wrap;
align-items: center;
letter-spacing: 0.01071em;
background-color: white;
border-radius: 8px 8px 0 0;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
gap:3em;
`;

export const ToastMessage = styled.div`
  font-size: 16px;
  color: #333;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  padding: 0;
`;
