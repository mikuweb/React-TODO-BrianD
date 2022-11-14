import { useState } from "react";
import { TodoList } from "./TodoList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoForm } from "./TodoForm";

export const Todo = ({ todos, completeTodo, removeTodo, upDateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    upDateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </div>
    </div>
  ));
};

// ----- Question -----
// todo.isComplete　←どこで定義してる？
// それとももともと備わってる機能？

//todo.text←どこからきた？

//edit={edit} ←どこからきた？

//className={todo.isComplete ? "todo-row complete" : "todo-row"}
//↑Todoクリックしたら”todo-row complete”でopacity 0.4にはどこに書いてある？
