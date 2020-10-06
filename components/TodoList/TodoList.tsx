import React, {useEffect, useState} from "react";
import TodoListItem from "./TodoListItem";
import {Button, ButtonGroup, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers/rootReducer";
import styles from '../styles/TodoList.module.scss'
import * as actions from '../../redux/actions/todoAction'

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList)
  const [list, setList] = useState<any>([])
  const dispatch = useDispatch()

  const getAllList = async () => {
    await dispatch(actions.getAllTodos())
  }
  
  const getActiveList = async () => {
    await dispatch(actions.getActiveList())
  }
  
  const getCompletedList = async () => {
    await dispatch(actions.getCompletedList())
  }

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
            <Button onClick={getAllList}>All</Button>
            <Button onClick={getActiveList}>Active</Button>
            <Button onClick={getCompletedList}>Completed</Button>
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default TodoList
