import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (!todoList) return;
    setTodos(todoList);
  }, [todoList]);

  return (
    <>
      {todos.map((todo, index) => (
        <TodoListItem key={index}>{todo}</TodoListItem>
      ))}
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;
