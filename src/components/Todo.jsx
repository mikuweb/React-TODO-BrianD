import { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  return TodoList.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    ></div>
  ));
};

// ----- Question -----
// todo.isComplete　←どこで定義してる？
// それとももともと備わってる機能？
