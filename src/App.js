import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "./firebase";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      // console.log(snapshot.docs[0].data());
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);
  // console.log(todos);
  const addTodo = (event) => {
    event.preventDefault();
    // setTodos([...todos, input]);
    db.collection("todos").add({
      todo: input,
    });
    setInput("");
  };
  return (
    <div className="App">
      <h2>Helllo</h2>
      <FormControl>
        <InputLabel htmlFor="my-input">Add New toDo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          add
        </Button>
      </FormControl>

      <List>
        <Todo data={todos} />
      </List>
    </div>
  );
}

export default App;
