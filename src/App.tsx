import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Form } from "./components/Form"

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <Form />
    </div>
  )
}

export default App
