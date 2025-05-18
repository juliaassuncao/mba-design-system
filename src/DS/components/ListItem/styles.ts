import styled from "styled-components";
import { DS_Colors } from "../../colors";
import { DS_Spacing } from "../../spacing";

type LabelProps = {
  $checked: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 49px;
  background-color: ${DS_Colors.background.secundary};
  border-radius: ${DS_Spacing.s12};
  padding: 0 ${DS_Spacing.s12};
  user-select: none;
  position: relative;
`;

export const RemoveButton = styled.button`
  font-size: 18px;
  margin-left: ${DS_Spacing.s12};
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  line-height: 1.25rem;
  color: ${({ $checked }) =>
    $checked ? DS_Colors.content.tertiary : DS_Colors.content.secondary};
  cursor: pointer;
  position: relative;
  padding-left: 30px;
  text-decoration: ${({ $checked }) => ($checked ? "line-through" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: 1px solid
      ${({ $checked }) =>
        $checked ? DS_Colors.color.brand : DS_Colors.border.primary};
    border-radius: 6px;
    background-color: ${({ $checked }) =>
      $checked ? DS_Colors.color.brand : DS_Colors.background.secundary};
    background-image: ${({ $checked }) =>
      $checked
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none'%3E%3Cpath d='M5 14L8.5 17.5L19 6.5' stroke='%23ffffff' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
        : "none"};
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover::before {
    border-color: ${({ $checked }) =>
      $checked ? DS_Colors.color.brand : DS_Colors.border.hover};
  }
`