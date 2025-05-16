import { useState } from "react"

import trashIcon from "../../../assets/trash-icon.svg"
import { DS_Input } from "../Input"
import { Container, Label, RemoveButton } from "./styles"

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
    <Container>
      {/* INPUT CHECKBOX */}
      <DS_Input
        type="checkbox"
        state="checkbox"
        id={id} 
        checked={isChecked}   
        onChange={handleCheckboxChange}
      />
      
      {/* LABEL */}
      <Label
        htmlFor={id} 
        $checked={isChecked}
      >
        {text}
      </Label>

      {/* BOTÃO REMOVER */}
      <RemoveButton 
        type="button"
        onClick={handleRemoveClick}
      >
        <img src={trashIcon} alt="Ícone de lixeira para remover item" />
      </RemoveButton>

    </Container>
  )
}