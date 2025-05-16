import styled, { css } from "styled-components";
import type { DS_InputProps } from "./types";
import { DS_Colors } from "../../colors";

export const Container = styled.input<DS_InputProps>`
  height: 44px;
  width: 100%;

  background-color: ${DS_Colors.white};
  border-radius: 0.75rem;
  border: 2px solid ${DS_Colors.border.primary};
  font-size: 1rem;

  padding-left: 18px;

  ::placeholder {
    color: ${DS_Colors.black};
  }

  &:hover {
    border-color: ${DS_Colors.border.hover};
  }

  &:focus {
    outline: none;
    border-color: ${DS_Colors.color.button};
  }

  &:focus::placeholder {
    color: ${DS_Colors.black};
  }

  ${(props) =>
    props.state === "checkbox" &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    `}
`;
