import React from 'react';
import * as styled from './Toast.styled';
import { Icon } from '../../UI/Icons/Icon'

export const Toast = ({ message, onClose }) => {
  return (
    <styled.ToastContainer>
        <styled.ToastContent>
            <styled.ToastMessage>{message}</styled.ToastMessage>
            <styled.CloseButton onClick={onClose} aria-label="close">
              <Icon name="close"/>
            </styled.CloseButton>ß
        </styled.ToastContent>
    </styled.ToastContainer>
  );
};