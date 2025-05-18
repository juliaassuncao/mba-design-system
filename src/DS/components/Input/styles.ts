import styled, { css } from "styled-components";
import type { DS_InputProps } from "./types";
import { DS_Colors } from "../../colors";
import { DS_Spacing } from "../../spacing";

export const Container = styled.input<DS_InputProps>`
  height: 44px;
  width: 451px;

  background-color: ${DS_Colors.background.secundary};
  border-radius: ${DS_Spacing.s12};
  border: 2px solid ${DS_Colors.border.primary};
  font-size: 1rem;

  padding-left: ${DS_Spacing.s18};

  ::placeholder {
    color: ${DS_Colors.content.tertiary};
  }

  &:hover {
    border-color: ${DS_Colors.border.hover};
  }

  &:focus {
    outline: none;
    border-color: ${DS_Colors.color.brand};
  }

  &:focus::placeholder {
    color: ${DS_Colors.content.primary};
  }

  ${(props) =>
    props.state === "checkbox" &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    `}
`