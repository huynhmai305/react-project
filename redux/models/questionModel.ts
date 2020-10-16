export interface Question {
  questionId: string;
  question: string;
  answers: string[];
  correct: string;
}

export interface Quiz {
  questionBank: Question[];
  score: number;
  responses: number;
}

export const QuestionBank: Question[] = [
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "093909",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "009039",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "093909",
  },
  {
    question: "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "009039",
  },
]
  .sort(() => 0.5 - Math.random()) // return [-0.5,0.5] (Math.random() return [0,1]) => thu tu sap xep ngau nhien theo increase hoac decrease
  .slice(0, 4);

export const initQuiz = {
  questionBank: QuestionBank,
  score: 0,
  responses: 0,
};

export interface QuestionBoxProps {
  question: string;
  selected: (s: string) => void;
  options: string[];
}

export interface ResultProps {
  score: number;
  playAgain: () => void;
}
