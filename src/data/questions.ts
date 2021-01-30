import { Question } from '../interfaces'

// type Question
// id: number
// content: string
// answers: Answer[]

// type Answer
// id: number
// content: string
// result: number | null
// nextQuestion: number

export const questionData: Question[] = [
  {
    id: 1,
    content:
      '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porta justo, non laoreet nibh. Curabitur purus ligula, egestas et ultrices in, laoreet in sapien. ',
    answers: [
      {
        id: 1,
        content: 'This Answer Goes To Q2',
        nextQuestion: 2,
        result: null,
      },
      {
        id: 2,
        content: 'This Answer Goes To Q3',
        nextQuestion: 3,
        result: null,
      },
    ],
  },
  {
    id: 2,
    content:
      '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porta justo, non laoreet nibh. Curabitur purus ligula, egestas et ultrices in, laoreet in sapien. ',
    answers: [
      {
        id: 1,
        content: 'This Answer Goes To Q1',
        nextQuestion: 1,
        result: null,
      },
      {
        id: 2,
        content: 'This Answer Goes To Q3',
        nextQuestion: 3,
        result: null,
      },
    ],
  },
  {
    id: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porta justo, non laoreet nibh. Curabitur purus ligula, egestas et ultrices in, laoreet in sapien. ',
    answers: [
      {
        id: 1,
        content: 'This Answer Goes To Q1',
        nextQuestion: 1,
        result: null,
      },
      {
        id: 2,
        content: 'Your verdict',
        nextQuestion: null,
        result: 1,
      },
    ],
  },
]
