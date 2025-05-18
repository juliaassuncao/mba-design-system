import styled from "styled-components"
import { DS_Colors } from "../../colors"
import { DS_Spacing } from "../../spacing"

export const Container = styled.div`
  background-color: ${DS_Colors.color.alert};
  color: ${DS_Colors.content.always_white};
  border-radius: 0.75rem;
  padding: ${DS_Spacing.s12};
  margin-top: ${DS_Spacing.s48};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${DS_Spacing.s08};

  span {
    flex: 1;
  }

  img:last-child {
    cursor: pointer;
  }
`