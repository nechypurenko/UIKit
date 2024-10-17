import React from 'react';
import * as styled from './Modal.styled';
import { Icon } from '../Icons/Icon'

export const Modal = ({ title, children, onClose, isOpen }) => {
  if (!isOpen) return null;
  return (
    <styled.Overlay>
      <styled.ModalContainer>
        <styled.ModalHeader>
          <styled.ModalTitle>{title}</styled.ModalTitle>
          <styled.CloseButton onClick={onClose}>
              <Icon name="close"/>
          </styled.CloseButton>
        </styled.ModalHeader>
        <styled.ModalContent>{children}</styled.ModalContent>
      </styled.ModalContainer>
    </styled.Overlay>
  );
};