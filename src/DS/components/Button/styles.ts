import styled from "styled-components";
import type { DS_ButtonProps } from "./types";
import { DS_Colors } from "../../colors";

export const Container = styled.button<DS_ButtonProps>`
  width: 160px;
  border-radius: 12px;
  background-color: ${DS_Colors.color.button};
  color: ${DS_Colors.white};
  border: none;

&:hover {
  background-color: #A52C6B;
  cursor: pointer;
}
`