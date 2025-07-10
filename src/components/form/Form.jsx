import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [value, setValue] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.putTodo(value);
        setValue("");
      }}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Введите дело"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className={styles.btn}>Добавить дело</button>
    </form>
  );
};

export default Form;
