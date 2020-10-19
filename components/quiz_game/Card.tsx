import React from "react";
import PropTypes from "prop-types";
import { CardQuizProps } from "../../models/quizModel";
import styles from "../styles/Quiz.module.scss";
import Timer from "./Timer";
import ButtonSelect from "./Button";

const Card = (props: CardQuizProps) => {
  const answers = [props.correctAnswer].concat(props.wrongAnswers).sort();

  return (
    <article className={styles.cardQuiz}>
      <header>
        <span>{props.difficulty} | </span>
        <Timer
          duration={props.duration}
          timeoutFn={() => props.checkAnswerFn(true, false)}
        />
      </header>
      <div>
        <p>{props.question}</p>
      </div>
      <footer>
        {answers.map((answer, i) => (
          <ButtonSelect
            onClick={() => props.checkAnswerFn(answer, props.correctAnswer)}
            key={i}
            id={i}
          >
            {answer}
          </ButtonSelect>
        ))}
      </footer>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Card;
