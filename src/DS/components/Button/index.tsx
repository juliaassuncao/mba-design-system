import { ButtonTypo } from "../../typography/button"
import { Container } from "./styles"
import type { DS_ButtonProps } from "./types"

export function DS_Button({ children, ...props }: DS_ButtonProps) {
  return(
    <Container {...props}>
      <ButtonTypo>{children}</ButtonTypo>
    </Container>
  )
}