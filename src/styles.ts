import styled from "styled-components";
import { DS_Colors } from "./DS/colors";
import { DS_Spacing } from "./DS/spacing";

export const Container = styled.div`
  max-width: 627px;
  margin: 0 auto;
  padding: ${DS_Spacing.s36};
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-bottom: 3.68rem;

  img {
    width: 32px;
  }

  span {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: ${DS_Colors.content.secondary};
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  color: ${DS_Colors.content.primary};
`;

export const Form = styled.form`
  display: flex;
  gap: ${DS_Spacing.s16};
  margin: ${DS_Spacing.s42} 0;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${DS_Spacing.s12};
  max-height: 232px;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: ${DS_Colors.background.secundary};
    pointer-events: none;
    visibility: hidden;
  }

  &:has(div:nth-child(n + 5))::after {
    visibility: visible;
  }
`;
