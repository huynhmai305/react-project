import React, {useEffect, useState} from "react";
import TodoListItem from "./TodoListItem";
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducer";
import styles from '../styles/TodoList.module.scss'

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList)
  const [list, setList] = useState<any>([])

  useEffect(() => {
    if (!todoList) return;
    setList(todoList);
  })

  return (
    <div className={styles.containerListTodo}>
      <ListGroup as="ul">
        {list.map((todo, index) => (
          <TodoListItem key={index}>
            {todo}
          </TodoListItem>
        ))}
        <ListGroup.Item as="li" className="text-center">
          <ButtonGroup>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default TodoList
