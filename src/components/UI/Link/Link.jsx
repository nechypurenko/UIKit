import React from 'react';
import * as styled from './Link.styled'

export const Link = ({ href, state = 'default', children }) => {
    return (
      <styled.StyledLink href={state === 'disabled' ? undefined : href} state={state}>
        {children}
      </styled.StyledLink>
    );
  };