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

// type Video
// id: number
// title: string
// uploader: string
// desc: string
// youtubeId: string

export const videoData = [
  {
    id: 1,
    title: '나가지 말라면 나가지 마',
    uploader: '위즈원아님',
    desc:
      'So you like IZ*ONE? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porta justo, non laoreet nibh. Curabitur purus ligula, egestas et ultrices in, laoreet in sapien. ',
    youtubeId: 'RQbNZhDey3c',
  },
  {
    id: 2,
    title: 'How You Like Y.M.C.A.',
    uploader: 'J.E.B',
    desc: 'So you like BlackPink?',
    youtubeId: 'NY3iWMyp8y8',
  },
  {
    id: 3,
    title: 'how we write/review code in big tech companies',
    uploader: 'Joma Tech',
    desc: 'So you like coding?',
    youtubeId: 'rR4n-0KYeKQ',
  },
]
