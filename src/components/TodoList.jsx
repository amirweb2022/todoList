import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onCompleate, onRemove, onUpdateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleate: false,
  });
  const editTodo = (newValue) => {
    onUpdateTodo(edit.id, newValue);
    setEdit({ id: null, text: "" });
  };
  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleate={() => onCompleate(todo.id)}
          onRemove={() => onRemove(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div>
      {edit.id ? <TodoForm submitTodo={editTodo} edit={edit} /> : renderTodos()}
    </div>
  );
};
export default TodoList;
