export interface TimerProps {
  duration: number;
  timeoutFn: () => void;
}

export interface ScoreProps {
  score: number;
  refresh: () => void;
}

export interface ButtonSelectProps {
  onClick: () => void;
  children: string;
  id: number;
}

export interface CardQuizProps {
  difficulty: string;
  question: string;
  duration: number;
  wrongAnswers: string[];
  correctAnswer: string;
  checkAnswerFn: (
    answer: string | boolean,
    correctAnswer: string | boolean
  ) => void;
}

export const Categories = [
  { id: 17, title: "Science and Nature" },
  { id: 26, title: "Celebrities" },
  { id: 21, title: "Sports" },
  { id: 27, title: "Animals" },
  { id: 20, title: "Mythology" },
  { id: 9, title: "General Knowledge" },
];
