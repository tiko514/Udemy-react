import { useState } from 'react';
import styled from 'styled-components';
import Button from './StyledButton.jsx';
import Input from './StyledInput.jsx';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <StyledDiv>
        <Input
          type="email"
          label="Email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          type="password"
          label="Password"
          $invalid={passwordNotValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </StyledDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
