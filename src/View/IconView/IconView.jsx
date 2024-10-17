import React from 'react';
import {Icon} from '../../components/UI/Icons/Icon';

export const IconView = () => {
  return (
    <div>
      <h3>Icons</h3>
      <div style={{ display: 'flex', gap: '10px', padding: '20px', backgroundColor: '#ccc' }}>
        <Icon name="eye" color="blue" />
        <Icon name="eyeClose" color="red" />
        <Icon name="close" color="green" />
        <Icon name="play" color="black" />
      </div>
    </div>
  );
};