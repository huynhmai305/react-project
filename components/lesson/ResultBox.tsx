import React from "react";
import { ResultProps } from "../../redux/models/questionModel";
import styles from "../styles/Quiz.module.scss";
import { Button } from "react-bootstrap";

const ResultBox = (props: ResultProps) => {
  return (
    <div className={styles.score_board}>
      <div className={styles.score}>
        Your score is {props.score} / 5 correct answer ! ! !
      </div>
      <Button variant="warning" onClick={props.playAgain} >
        Play again
      </Button>
    </div>
  );
};

export default ResultBox;
