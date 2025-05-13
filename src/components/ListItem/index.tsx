import { useState } from "react"
import styles from "./styles.module.css"

import trashIcon from "../../assets/trash-icon.svg"

type ListItemProps = {
  id: string,
  text: string,
  onRemove: (id: string) => void
}

export function ListItem({ id, text, onRemove }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)
  }

  function handleRemoveClick() {
    onRemove(id)
  }

  return (
    <div className={styles.container}>
      {/* INPUT CHECKBOX */}
      <input
        type="checkbox"
        id={id} 
        className={styles.checkbox}
        checked={isChecked}   
        onChange={handleCheckboxChange}
      />
      
      {/* LABEL */}
      <label
        htmlFor={id}
        className={`${styles.label} ${isChecked ? styles.checked : ''}`}  
      >
        {text}
      </label>

      {/* BOTÃO REMOVER */}
      <button 
        type="button"
        className={styles.removeButton}
        onClick={handleRemoveClick}
      >
        <img src={trashIcon} alt="Ícone de lixeira para remover item" />
      </button>

    </div>
  )
}