import styles from "./App.module.css";
import Form from "../components/form/Form";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(0);

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, { id: Date.now(), title: value, done: false }]);
      setAllTodos(allTodos + 1);
    } else {
      alert("Введите текст");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return { ...todo, done: !todo.done };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setAllTodos(allTodos - 1);
  };

  const removeAllTodos = () => {
    setTodos([]);
    setAllTodos(0);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Список дел</h1>
      <Form putTodo={putTodo} />
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li
              className={
                todo.done ? `${styles.item} ${styles.done}` : styles.item
              }
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
              <FaRegTrashAlt
                className={styles.icon}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTodo(todo.id);
                }}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.completed}>
        <span>Все дела: {allTodos}</span>
      </div>
      <button className={styles.btn} onClick={removeAllTodos}>
        Удалить все дела
      </button>
    </div>
  );
}

export default App;
