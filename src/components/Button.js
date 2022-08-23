import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#f26a2e" : "#077bf1")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 32px" : "10px 22px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  text-align: center;
  min-width: 100px;
  text-decoration: none;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translate(-3px);
  }
`
