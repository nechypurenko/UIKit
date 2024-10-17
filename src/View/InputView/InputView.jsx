import React, { useState } from 'react';
import { InputField } from '../../components/UI/Input';
import { ColumnContainer } from '../ColumnContainer';
import { RowContainer } from '../RowContainer';

export const InputView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    if (!value) {
      errorMessage = `${fieldName} is required`;
    }
    return errorMessage;
  };

  const handleFieldChange = (fieldName, value) => {
    if (fieldName === 'username') {
      setUsername(value);
      setErrors({ ...errors, username: validateField('Username', value) });
    } else if (fieldName === 'password') {
      setPassword(value);
      setErrors({ ...errors, password: validateField('Password', value) });
    }
  };

  return (
    <>
      <h3>Input Fields</h3>
      <RowContainer>
        <ColumnContainer>
          <InputField
            label="Username*"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleFieldChange('username', e.target.value)}
            placeholder="Enter your username"
            error={errors.username}
          />
          <InputField
            label="Username (disabled)*"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleFieldChange('username', e.target.value)}
            placeholder="Enter your username"
            error={errors.username}
            disabled
          />
        </ColumnContainer>

        <ColumnContainer>
          <InputField
            label="Password*"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleFieldChange('password', e.target.value)}
            placeholder="Enter your password"
            error={errors.password}
          />
          <InputField
            label="Password (disabled)*"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleFieldChange('password', e.target.value)}
            placeholder="Enter your password"
            error={errors.password}
            disabled
          />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};
