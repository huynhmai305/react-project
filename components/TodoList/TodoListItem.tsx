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
      await dispatch(actionTodo.deleteTodo({id: todo.id}))
    })
  }
  
  const handleChecked = (todo) => {
    dispatch(actionTodo.toggleTodo({id: todo.id}))
  }
  
  const handleEditTodo = (e, children) => {
    if (e.key === 'Enter') {
      dispatch(actionTodo.updateTodo({id: children.id, newTitle: e.target.value.trim()}))
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
              id={children?.id}
              onChange={() => handleChecked(children)}
            />
            <Form.Check.Label onDoubleClick={handleDoubleClick} defaultValue={children?.completed}>{children?.title}</Form.Check.Label>
          </Form.Check>
        </Col>
        <Button className="btn-danger float-right" onClick={() => handleRemoveTodo(children)} as={Col} md={1}>
          <i className="fas fa-trash-alt" />
        </Button>
      </Row>
      <Form.Control
        defaultValue={children?.title}
        onKeyPress={(e) => handleEditTodo(e, children)}
        className={`${showEdit ? '' : 'd-none'} ${styles.inputEdit}`}
      />
    </ListGroup.Item>
  )
}

TodoListItem.propTypes = {
  children: PropTypes.element
}

export default TodoListItem
