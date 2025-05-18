import styled from "styled-components";
import { DS_Colors } from "../../colors";

export const ListItemStyle = styled.span<{ $checked: boolean }>`
  color: ${({ $checked }) =>
    $checked ? DS_Colors.content.tertiary : DS_Colors.content.secondary};
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;