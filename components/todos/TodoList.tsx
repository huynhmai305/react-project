import React from "react";
import TodoListItem from "./TodoListItem";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import styles from "../styles/TodoList.module.scss";
import * as actions from "../../redux/actions/todoAction";
// import { isEmpty } from "lodash";

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  // const visibleFilterList = useSelector(
  //   (state: RootState) => state?.visibilityFilter
  // );
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

  const setVisible = async (filter) => {
    dispatch(
      actions.setVisibilityFilter(await getVisibleTodos(todoList, filter))
    );
  };

  return (
    <div className={styles.containerListTodo}>
      <ListGroup as="ul">
        {todoList.map((todo, index) => (
          <TodoListItem key={index}>{todo}</TodoListItem>
        ))}
        <ListGroup.Item as="li" className="text-center">
          <ButtonGroup>
            <Button
              onClick={() => setVisible(actions.visibilityFilters.SHOW_ALL)}
            >
              All
            </Button>
            <Button
              onClick={() => setVisible(actions.visibilityFilters.SHOW_ACTIVE)}
            >
              Active
            </Button>
            <Button
              onClick={() =>
                setVisible(actions.visibilityFilters.SHOW_COMPLETED)
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

export default TodoList;
