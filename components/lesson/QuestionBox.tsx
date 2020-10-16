import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionBoxProps } from "../../redux/models/questionModel";
import styles from "../styles/Quiz.module.scss";

const QuestionBox = (props: QuestionBoxProps) => {
  const [option] = useState<any>(props.options);
  const [selected, setSelected] = useState();

  const handleOption = (text, index) => {
    setSelected(index);
    props.selected(text);
  };

  return (
    <div className={styles.questionBox}>
      <div className={styles.question}>{props.question}</div>
      {option.map((text, index) => (
        <Button
          key={index}
          onClick={() => handleOption(text, index)}
          variant={index === selected ? "success" : "danger"}
          className="mr-3"
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default QuestionBox;
