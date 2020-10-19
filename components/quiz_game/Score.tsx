import React from "react";
import { ScoreProps } from "../../models/quizModel";
import styles from "../styles/Quiz.module.scss";
import { Button } from "react-bootstrap";

const Score = (props: ScoreProps) => {
  return (
    <article className={styles.scoreCard}>
      <h1 className={styles.h1}>Your score</h1>
      <p>{props.score}</p>
      <Button onClick={props.refresh}>Play again</Button>
    </article>
  );
};

export default Score;

