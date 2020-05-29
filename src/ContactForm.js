import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  max-width: 500px;
  margin: auto;
`;

const StyledLabel = styled.label`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  width: 25%;
`;

const StyledInputWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  width: 75%;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledErrorMessage = styled.span``;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleNameInputChange = event => {
    setName(event.target.value);
  };

  const handleMessageInputChange = event => {
    setMessage(event.target.value);
  };

  const handleEmailInputChange = event => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    if (email.indexOf("@" && ".") === -1) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = event => {
    if (validateEmail()) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel>
        <StyledSpan>Name:</StyledSpan>
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleNameInputChange}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledSpan>Your message:</StyledSpan>
        <StyledTextarea value={message} onChange={handleMessageInputChange} />
      </StyledLabel>
      <StyledLabel>
        <StyledSpan>Email Address:</StyledSpan>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={handleEmailInputChange}
          />
          {emailError ? (
            <StyledErrorMessage>You have an error</StyledErrorMessage>
          ) : null}
        </StyledInputWrapper>
      </StyledLabel>
      <input type="submit" value="Send" />
    </StyledForm>
  );
};

export default ContactForm;
