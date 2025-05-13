import styles from "./styles.module.css"

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Ícone de uma to-do list com dois itens em gradiente magenta e roxo" />
        <span className="logo-text">myTodo</span>
      </div>
      <h1>Compras da semana</h1>
    </header>
  )
}