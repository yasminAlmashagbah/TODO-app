import React, { useState } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import db from "./firebase";
const Todo = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const [input, setInput] = useState("");
  const editTodo = () => {
    setOpenForm(true);
  };

  const mapTodo = (todos) => {
    return todos.map((todo) => {
      const saveEdit = () => {
        setOpenForm(false);
        db.collection("todos")
          .doc(todo.id)
          .set({ todo: input }, { merge: true });
      };
      return (
        <ListItem>
          <ListItemText key={todo.id}>{todo.todo}</ListItemText>
          {openForm && (
            <div>
              {" "}
              <input onChange={(event) => setInput(event.target.value)} />
              <Button onClick={saveEdit}>save</Button>
            </div>
          )}
          <Button onClick={editTodo}>edit</Button>
          <Button
            onClick={() => {
              db.collection("todos").doc(todo.id).delete();
            }}
          >
            Delete
          </Button>
        </ListItem>
      );
    });
  };

  return <div>{mapTodo(props.data)}</div>;
};

export default Todo;
