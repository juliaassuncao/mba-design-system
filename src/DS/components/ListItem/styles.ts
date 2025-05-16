import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 3.06rem;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 0 12px;
  margin-bottom: 1.3rem;
  user-select: none;
  position: relative;

}
`
export const RemoveButton = styled.button`
  font-size: 18px;
  margin-left: 12px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ $checked }) => ($checked ? "#b0bec5" : "#374151")};
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
    border: 1px solid ${({ $checked }) => ($checked ? "#ca3884" : "#d1d5db")};
    border-radius: 6px;
    background-color: ${({ $checked }) => ($checked ? "#ca3884" : "#ffffff")};
    background-image: ${({ $checked }) =>
      $checked
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none'%3E%3Cpath d='M5 14L8.5 17.5L19 6.5' stroke='%23ffffff' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
        : "none"};
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover::before {
    border-color: ${({ $checked }) => ($checked ? "#ca3884" : "#6b7280")};
  }
`








