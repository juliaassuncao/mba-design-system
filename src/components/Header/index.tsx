import styles from "./styles.module.css"

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Ícone de uma to-do list com dois itens em gradiente magenta e roxo" />
        <span>myTodo</span>
      </div>
      <h1 className={styles.title}>Compras da semana</h1>
    </header>
  )
}