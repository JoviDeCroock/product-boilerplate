import { h, Fragment } from 'preact';
import { useField } from 'hooked-form/preact';
import styled from 'goober';

const StyledError = styled('p')``;
const StyledLabel = styled('label')``;
const StyledInput = styled('input')``;

const Input = ({ disabled, label, required, placeholder, fieldId }) => {
  const [{ value, error, touched }, actions] = useField(fieldId);
  return (
    <Fragment>
      <StyledLabel htmlFor={fieldId}>
        {label}
      </StyledLabel>
      <StyledInput
        aria-label={label}
        aria-required={required}
        aria-invalid={error}
        disabled={disabled}
        id={fieldId}
        placeholder={placeholder}
        value={value}
        {...actions}
      />
      {touched && error ? <StyledError>{error}</StyledError> : null}
    </Fragment>
  )
}

export default Input;
