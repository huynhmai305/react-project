import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import styles from "../styles/TodoList.module.scss";
import * as actions from "../../actions/todoAction";
import TodoList from "./TodoList";

const VisibleTodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  const getVisibleTodos = async (todos, filter) => {
    switch (filter) {
      case actions.visibilityFilters.SHOW_ALL:
        return todos;
      case actions.visibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      case actions.visibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
    }
  };

  const handleFilter = async (filter) => {
    dispatch(actions.setVisibilityFilter(filter));
    setTodos(await getVisibleTodos(todoList, filter));
  };

  useEffect(() => {
    setTodos(todoList);
  }, [todoList]);

  return (
    <div className={styles.containerListTodo}>
      <ListGroup as="ul">
        <TodoList todoList={todos} />
        <ListGroup.Item as="li" className="text-center">
          <ButtonGroup>
            <Button
              onClick={() => handleFilter(actions.visibilityFilters.SHOW_ALL)}
            >
              All
            </Button>
            <Button
              onClick={() =>
                handleFilter(actions.visibilityFilters.SHOW_ACTIVE)
              }
            >
              Active
            </Button>
            <Button
              onClick={() =>
                handleFilter(actions.visibilityFilters.SHOW_COMPLETED)
              }
            >
              Completed
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default VisibleTodoList;
