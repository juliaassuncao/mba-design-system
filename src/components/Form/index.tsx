import { useState, type FormEvent } from "react"
import styles from "./styles.module.css"

type FormProps = {
  onAddItem: (text: string) => void
}

export function Form({ onAddItem }: FormProps) {
  const [inputValue, setInputValue] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    onAddItem(trimmedValue)
    setInputValue("")
  }

  return(
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione um novo item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input} 
      />
      <button type="submit" className={styles.button}>
        Adicionar item
      </button>
    </form>
  )
}