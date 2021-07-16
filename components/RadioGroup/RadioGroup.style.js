import styled from "styled-components";

export const RadioGroupStyled = styled.div`
  margin: 0.7rem 0 0.7rem 0;

  label {
    font-size: 1.2rem;
  }

  div.radio-options {
    margin-top: 0.3rem;

    input {
      margin: 0;
      margin-right: 0.5rem;
      font-size: 1.5rem;
      border: 2px solid lightgrey;
      outline: none;

      &.error {
        border: 2px solid red;
      }

      &:disabled {
        background-color: #f2f2f2;
        cursor: not-allowed;
      }
    }
    
    &.option {
      display: block;
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
