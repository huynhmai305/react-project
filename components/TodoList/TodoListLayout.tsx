import Layout from "../layouts/Layout";
import React from "react";
import styles from '../styles/TodoList.module.scss'
import {Form} from "react-bootstrap";
import TodoList from "./TodoList";
import {useDispatch} from "react-redux";
import * as todoAction from '../../redux/actions/todoAction'

const TodoListLayout = () => {
  const dispatch = useDispatch();
  const handleNewTodo = async (e) => {
    if (e.key === 'Enter') {
      await addNewTodo(e.target.value.trim())
    }
  }
  
  const addNewTodo = async (title) => {
    await dispatch(todoAction.addTodo(title))
  }

  return (
    <Layout>
      <div>
        <div className={styles.wrapperTodos}>
          <h1 className="text-uppercase">to do list</h1>
          <div className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="New Todo"
              className="w-50"
              onKeyPress={handleNewTodo}
              autoFocus
            />
          </div>
        </div>
        <TodoList />
      </div>
    </Layout>
  )
}

export default TodoListLayout
