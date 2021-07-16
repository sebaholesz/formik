import styled from "styled-components";

export const CheckboxStyled = styled.div`
  margin: 0.7rem 0 0.7rem 0;

  div.checkbox-wrapper {
    display: flex;
    align-items: center;

    label {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }

    input {
      font-size: 1.5rem;
      padding: 0.5rem;
      border-radius: 8px;
      border: 2px solid lightgrey;
      outline: none;

      &.error {
        border: 2px solid red;
      }

      &:disabled {
        background-color: #f2f2f2;
        cursor: not-allowed;
      }

      &.checkbox {
        -webkit-appearance: none;
        margin: 0;
        background-color: white;
        padding: 9px;
        border-radius: 3px;
        display: inline-block;
        position: relative;

        &:checked {
          background-color: lightblue;
        }
      }
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
