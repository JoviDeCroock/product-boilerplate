import { h } from 'preact';
import styled from 'goober';

const StyledButton = styled('button')``;

const Button = ({ className, onClick, label, type }) => {
  return (
    <StyledButton
      aria-label={label}
      class={className}
      type={type}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
