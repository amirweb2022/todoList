import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterdTodos, setFilterdTodos] = useState([]);
  const [selectedOption, setselectedOption] = useState("All");
  useEffect(() => {
    filterHandler(selectedOption);
  }, [todos, selectedOption]);
  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplated: false,
    };
    setTodos([...todos, newTodo]);
  };
  const onCompleate = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplated = !selectedTodo.isComplated;
    const updateTodo = [...todos];
    updateTodo[index] = selectedTodo;
    setTodos(updateTodo);
  };
  const removeHandler = (id) => {
    const filterdTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterdTodos);
  };
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updateTodo = [...todos];
    updateTodo[index] = selectedTodo;
    setTodos(updateTodo);
  };
  const filterHandler = (status) => {
    if (status === "All") {
      return setFilterdTodos(todos);
    } else if (status === "Completed") {
      const updateTodo = todos.filter((t) => t.isComplated);
      return setFilterdTodos(updateTodo);
    } else if (status === "unCompleted") {
      const updateTodo = todos.filter((t) => !t.isComplated);
      return setFilterdTodos(updateTodo);
    }
  };
  const selectHandler = (e) => {
    filterHandler(e);
    setselectedOption(e.value);
  };
  return (
    <div className="container">
      <Navbar
        unCopleted={todos.filter((item) => !item.isComplated).length}
        onChange={selectHandler}
        selectedOption={selectedOption}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filterdTodos}
        onCompleate={onCompleate}
        onRemove={removeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;