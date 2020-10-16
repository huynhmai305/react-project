import React from "react";
import { ResultProps } from "../../redux/models/questionModel";
import styles from "../styles/Quiz.module.scss";
import { Button } from "react-bootstrap";
// import Effect from "./Effect";

const ResultBox = (props: ResultProps) => {
  return (
    <div className={styles.score_board}>
      {/*<Effect />*/}
      <div className={styles.score}>
        Your score is {props.score} / 4 correct answer ! ! !
      </div>
      <Button variant="primary" onClick={props.playAgain}>
        Play again
      </Button>
    </div>
  );
};

export default ResultBox;
