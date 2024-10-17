import PropTypes from 'prop-types';
import * as styled from './Input.styled';

export const InputField = ({
  label,
  value,
  placeholder,
  onChange,
  disabled,
  error,
  type = 'text',
}) => {
  return (
    <styled.InputContainer>
      {label && <styled.Label>{label}</styled.Label>}
      <styled.Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        hasError={!!error}
      />
      {error && <styled.ErrorMessage>{error}</styled.ErrorMessage>}
    </styled.InputContainer>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.string,
};
