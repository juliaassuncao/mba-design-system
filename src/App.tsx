import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { ListItem } from "./components/ListItem"

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <Form />
      <ListItem />
    </div>
  )
}

export default App
