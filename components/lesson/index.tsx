import React from "react";
import Layout from "../layouts/Layout";
import { Container } from "react-bootstrap";
import styles from "../styles/Quiz.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import QuestionBox from "./QuestionBox";
import { computeScore, playAgain } from "../../actions/quizAction";
import ResultBox from "./ResultBox";

const Index = () => {
  const questionList = useSelector(
    (state: RootState) => state.quiz.questionBank
  );
  const responses = useSelector((state: RootState) => state.quiz.responses);
  const score = useSelector((state: RootState) => state.quiz.score);
  const dispatch = useDispatch();

  const handleAnswer = async (answer, correctAnswer) => {
    dispatch(computeScore({ answer, correctAnswer }));
  };

  const handlePlayAgain = async () => {
    dispatch(playAgain());
  };

  return (
    <Layout>
      <Container>
        <div className={styles.header_quiz}>
          <h3 className="text-center">Quiz</h3>
        </div>
        {questionList.length > 0 &&
          responses < 4 &&
          questionList.map((q) => (
            <QuestionBox
              question={q.question}
              selected={(answer) => handleAnswer(answer, q.correct)}
              options={q.answers}
              key={q.questionId}
            />
          ))}
        {responses === 4 ? (
          <ResultBox playAgain={handlePlayAgain} score={score} />
        ) : null}
      </Container>
    </Layout>
  );
};

export default Index;
