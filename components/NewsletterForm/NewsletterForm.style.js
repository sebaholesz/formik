import styled from "styled-components";

export const NewsletterFormStyled = styled.div``;

export const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 6px 20px;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: all 200ms;
  background-color: pink;

  &:hover {
    background-color: lightpink;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #f291c3;
  }
`;
