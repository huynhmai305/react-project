import React, { useEffect, useState } from "react";
import { Categories } from "../../models/quizModel";
import ButtonSelect from "./Button";
import Card from "./Card";
import Score from "./Score";
import { initialQuizGame } from "../../reducers/quizGameReducer";
import { useDispatch } from "react-redux";
import {
  incrementRightAnswers,
  markCategorySelected,
  resetGame,
  setQuizQuestion,
  updateCurrentQuestion,
} from "../../actions/quizAction";
import { getQuiz, getSession } from "../../api/quiz";
import styles from "../styles/Quiz.module.scss";
import Layout from "../layouts/Layout";

const ContainerCard = () => {
  const {
    quizData,
    categorySelected,
    rightAnswers,
    currentQuestion,
  } = initialQuizGame;
  const [session, setSession] = useState<string>("");
  const dispatch = useDispatch();

  const checkAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      dispatch(incrementRightAnswers());
    }
    dispatch(updateCurrentQuestion());
  };

  const populateQuizCard = (record, index) => {
    const { correct_answer, incorrect_answers, difficulty, question } = record;
    return (
      <Card
        key={index}
        checkAnswerFn={checkAnswer}
        question={atob(question)}
        duration={10}
        difficulty={atob(difficulty)}
        correctAnswer={atob(correct_answer)}
        wrongAnswers={incorrect_answers.map((x) => atob(x))}
      />
    );
  };

  const handleSelectedCategory = async (categoryId) => {
    const data = await getQuiz(categoryId, session);
    dispatch(setQuizQuestion({ quizData: data.result }));
    dispatch(markCategorySelected());
  };

  const getSessionToken = async () => {
    const session = await getSession();
    if (session) {
      setSession(session.token);
    }
  };

  useEffect(() => {
    getSessionToken();
  });

  return (
    <>
      <div className={styles.wrapperQuiz}>
        {!categorySelected && <h1 className={styles.h1}>Pick a category</h1>}
        {!categorySelected &&
          Categories.map((item, i) => (
            <ButtonSelect
              onClick={() => handleSelectedCategory(item.id)}
              key={i}
              id={item.id}
            >
              {item.title}
            </ButtonSelect>
          ))}
        {quizData && currentQuestion < 10
          ? populateQuizCard(quizData[currentQuestion], currentQuestion)
          : ""}
        {quizData && currentQuestion === 10 ? (
          <Score score={rightAnswers} refresh={() => dispatch(resetGame)} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ContainerCard;
