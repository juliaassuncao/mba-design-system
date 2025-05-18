import { useState, type FormEvent } from "react";
import { Container, Logo, Title, Form, ItemsContainer } from "./styles";

import { GlobalStyles } from "./styles/globalStyles";
import { ListItem } from "./DS/components/ListItem";
import { DS_Alert } from "./DS/components/Alert";
import { DS_Input } from "./DS/components/Input";
import { DS_Button } from "./DS/components/Button";

type Item = {
  id: string;
  text: string;
};

function App() {
  const initialItems: Item[] = [
    { id: crypto.randomUUID(), text: "Pão de forma" },
    { id: crypto.randomUUID(), text: "Queijo" },
    { id: crypto.randomUUID(), text: "Suco de laranja" },
    { id: crypto.randomUUID(), text: "Leite" },
  ];

  const [inputValue, setInputValue] = useState("");

  const [items, setItems] = useState<Item[]>(initialItems);

  const [alertVisible, setAlertVisible] = useState(false);

  // Adiciona novo item
  function addItem(text: string) {
    const newItem = {
      id: crypto.randomUUID(),
      text: text,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Remove item da lista e mostra alerta
  function removeItem(id: string) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });

    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;

    addItem(trimmedValue);
    setInputValue("");
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <header>
          <Logo>
            <img src="/logo.svg" alt="Ícone de uma to-do list" />
            <span>myTodo</span>
          </Logo>
          <Title>Compras da semana</Title>
        </header>

        <Form onSubmit={handleSubmit}>
          <DS_Input
            type="text"
            state="default"
            placeholder="Adicione um novo item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <DS_Button>Adicionar item</DS_Button>
        </Form>

        <ItemsContainer>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              text={item.text}
              onRemove={removeItem}
            />
          ))}
        </ItemsContainer>

        <DS_Alert
          message="O item foi removido da lista"
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
      </Container>
    </>
  );
}

export default App;
