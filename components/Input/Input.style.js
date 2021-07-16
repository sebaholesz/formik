import styled from "styled-components";

export const InputStyled = styled.div`
  margin: 0.7rem 0 0.7rem 0;

  label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 2px solid lightgrey;
    outline: none;

    &:focus-visible {
      border: 2px solid lightblue;
    }

    &.error {
      border: 2px solid red;
    }

    &:disabled {
      background-color: #f2f2f2;
      cursor: not-allowed;
    }
  }

  div.error-box {
    height: 1.2rem;
    padding-top: 0.2rem;

    span.error-message {
      display: block;
      font-size: 0.95rem;
      color: red;
    }
  }
`;
