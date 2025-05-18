import { useState } from "react";
import trashIcon from "../../../assets/trash-icon.svg";
import { DS_Input } from "../Input";
import { Container, Label, RemoveButton } from "./styles";
import { ListItemTypo } from "../../typography/listItem";

type ListItemProps = {
  id: string,
  text: string,
  onRemove: (id: string) => void
}

export function ListItem({ id, text, onRemove }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  function handleRemoveClick() {
    onRemove(id);
  }

  return (
    <Container>
      <DS_Input
        type="checkbox"
        state="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <Label htmlFor={id} $checked={isChecked}>
        <ListItemTypo $checked={isChecked}>{text}</ListItemTypo>
      </Label>

      <RemoveButton type="button" onClick={handleRemoveClick}>
        <img src={trashIcon} alt="Ícone de lixeira para remover item" />
      </RemoveButton>
    </Container>
  );
}
