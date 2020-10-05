import {Button, ListGroup, Form, Row, Col} from "react-bootstrap"
import PropTypes from 'prop-types'
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as actionTodo from '../../redux/actions/todoAction'
import Swal from 'sweetalert2'
import styles from '../styles/TodoList.module.scss'

const TodoListItem = ({ children }) => {
  const dispatch = useDispatch()
  const [showEdit, setShowEdit] = useState(false)

  const handleRemoveTodo = async (todo) => {
    await Swal.fire({
      text: 'Are you sure want to delete this todo?',
      icon: "warning",
    }).then(async result => {
      if (!result.value) return;
      await dispatch(actionTodo.deleteTodo(todo))
      await Swal.fire({
        text: 'Deleted this todo successfully',
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  
  const handleChecked = (todo) => {
    dispatch(actionTodo.toggleTodo(todo))
  }
  
  const handleEditTodo = (e) => {
    if (e.key === 'Enter') {
      dispatch(actionTodo.updateTodo(children, e.target.value.trim()))
      setShowEdit(false)
    }
  }
  
  const handleDoubleClick = () => {
    setShowEdit(true)
  }

  return (
    <ListGroup.Item as="li">
      <Row>
        <Col md={10} className={styles.containerEditInput}>
          <Form.Check type="checkbox" as={Col} md={10}>
            <Form.Check.Input
              type="checkbox"
              id={children.id}
              onChange={() => handleChecked(children)}
            />
            <Form.Check.Label onDoubleClick={handleDoubleClick}>{children.title}</Form.Check.Label>
          </Form.Check>
        </Col>
        <Button className="btn-danger float-right" onClick={() => handleRemoveTodo(children)} as={Col} md={1}>
          <i className="fas fa-trash-alt" />
        </Button>
      </Row>
      <Form.Control
        defaultValue={children.title}
        onKeyPress={handleEditTodo}
        className={`${showEdit ? '' : 'd-none'} ${styles.inputEdit}`}
      />
    </ListGroup.Item>
  )
}

TodoListItem.propTypes = {
  children: PropTypes.element
}

export default TodoListItem
