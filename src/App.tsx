import { useState } from "react"
import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { ListItem } from "./components/ListItem"

type Item = {
  id: string,
  text: string
}

function App() {
  const [items, setItems] = useState<Item[]>([])

  function addItem(text: string) {
    const newItem = {
      id: crypto.randomUUID(),
      text: text
    }

    setItems((prevItems) => [...prevItems, newItem])
  }

  function removeItem(id: string) {
    setItems((prevItems) => prevItems.filter(item => item.id !== id))
  }

  return (
    <div className={styles.container}>
      <Header />
      <Form onAddItem={addItem} />
      
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={removeItem}
        />
      ))}
    </div>
  )
}

export default App
