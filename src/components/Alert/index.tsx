import styles from "./styles.module.css"

import warningIcon from "../../assets/warning-icon.svg"
import closeIcon from "../../assets/close-icon.svg"

type AlertProps = {
  message: string
  visible: boolean
  onClose: () => void
}

export function Alert({ message, visible, onClose }: AlertProps) {
  
  if (!visible) {
    return null
  }

  return (
    <div className={styles.alert}>
      <img src={warningIcon} alt="Ícone de alerta" />
      <span>{message}</span>
      <img
        src={closeIcon}
        alt="Ícone de fechar"
        onClick={onClose}
      />
    </div>
  )
}