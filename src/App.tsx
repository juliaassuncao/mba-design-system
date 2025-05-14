import { useState } from "react"
import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { ListItem } from "./components/ListItem"
import { Alert } from "./components/Alert"

type Item = {
  id: string,
  text: string
}

function App() {
  
  const initialItems: Item[] = [
    { id: crypto.randomUUID(), text: "Pão de forma" },
    { id: crypto.randomUUID(), text: "Leite" },
    { id: crypto.randomUUID(), text: "Queijo" }
  ]

  const [items, setItems] = useState<Item[]>(initialItems)

  const [alertVisible, setAlertVisible] = useState(false)

  // Adiciona novo item
  function addItem(text: string) {
    const newItem = {
      id: crypto.randomUUID(),
      text: text
    }

    setItems((prevItems) => [...prevItems, newItem])
  }

  // Remove item da lista e mostra alerta
  function removeItem(id: string) {
    setItems((prevItems) => {
      return prevItems.filter(item => item.id !== id)
    })

    setAlertVisible(true)

    setTimeout(() => {
      setAlertVisible(false)
    }, 3000)
  }


  return (
    <div className={styles.container}>
      <Header />
      <Form onAddItem={addItem} />
      
      <div className={styles.itemsContainer}>
        {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemove={removeItem}
        />
      ))}
      </div>

      <Alert
        message="O item foi removido da lista"
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </div>
  )
}

export default App
