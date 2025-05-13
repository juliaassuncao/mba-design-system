import styles from "./styles.module.css"

export function Form() {
  return(
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Adicione um novo item"
        className={styles.input} 
      />
      <button type="submit" className={styles.button}>
        Adicionar item
      </button>
    </form>
  )
}