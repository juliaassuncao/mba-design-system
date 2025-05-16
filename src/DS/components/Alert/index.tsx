import warningIcon from "../../../assets/warning-icon.svg"
import closeIcon from "../../../assets/close-icon.svg"
import { Container } from "./styles"
import type { DS_AlertProps } from "./types"
import { AlertTypo } from "../../typography/alert"

export function DS_Alert({ message, visible, onClose }: DS_AlertProps) {
  
  if (!visible) {
    return null
  }

  return (
    <Container>
      <img src={warningIcon} alt="Ícone de alerta" />
      <AlertTypo>{message}</AlertTypo>
      <img
        src={closeIcon}
        alt="Ícone de fechar"
        onClick={onClose}
      />
    </Container>
  )
}