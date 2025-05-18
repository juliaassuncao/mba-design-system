import styled from "styled-components"
import type { DS_ButtonProps } from "./types"
import { DS_Colors } from "../../colors"
import { DS_Spacing } from "../../spacing"

export const Container = styled.button<DS_ButtonProps>`
  width: 160px;
  border-radius: ${DS_Spacing.s12};
  background-color: ${DS_Colors.color.brand};
  color: ${DS_Colors.content.always_white};
  border: none;

  &:hover {
    background-color: ${DS_Colors.color.brand_hover};
    cursor: pointer;
  }
`