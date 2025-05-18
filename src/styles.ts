import styled from "styled-components";
import { DS_Colors } from "./DS/colors";

export const Container = styled.div`
  max-width: 627px;
  margin: 0 auto;
  padding: 36px;
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
    width: 2rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    color: ${DS_Colors.content.secondary};
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 32px;
  color: ${DS_Colors.content.primary};
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  margin: 42px 0;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    width: 8px;
    height: 100%;
    background: ${DS_Colors.background.secundary};
    pointer-events: none;
    visibility: hidden;
  }

  &:has(div:nth-child(n + 5))::after {
    visibility: visible;
  }
`;
