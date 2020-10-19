import React from "react";
import { ButtonSelectProps } from "../../models/quizModel";
import { Button } from "react-bootstrap";
import styles from "../styles/Quiz.module.scss";

const ButtonSelect = (props: ButtonSelectProps) => {
  return (
    <Button
      className={styles.buttonSelect}
      onClick={props.onClick}
      id={`${props.id}`}
    >
      {props.children}
    </Button>
  );
};

export default ButtonSelect;
