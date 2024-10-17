import React from 'react';
import * as styled from './Textarea.styled.js'

export const TextArea = ({ title, description }) => {
    return (
      <styled.TextAreaContainer>
        <styled.Description>{description}</styled.Description>
        <styled.StyledTextArea rows="4" placeholder="Enter text here..." />
      </styled.TextAreaContainer>
    );
  };