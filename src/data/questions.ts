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
    id: 0,
    contents: [`Error, no next question specified`],
    answers: [],
  },
  {
    id: 1,
    contents: [
      `Alrighty. Let's get started. The entire purpose of this project is to find the best meme match for you that will make you smile. No info is stored or sent, so no worries. Ok. So for the first question. `,
      `What would you do if you suddenly have a free hour?`,
    ],
    answers: [
      {
        id: 1,
        content: `I'll listen to my favorite songs`,
        nextQuestion: 2,
        result: null,
      },
      {
        id: 2,
        content: 'I will play some good games.',
        nextQuestion: 0,
        result: null,
      },
      {
        id: 3,
        content: 'Call my best friend to hang out!',
        nextQuestion: 0,
        result: null,
      },
      {
        id: 4,
        content: 'Movie? YouTube? Something among those?',
        nextQuestion: 0,
        result: null,
      },
      {
        id: 5,
        content: `Ah, I'm too cool that I code during my free time.`,
        nextQuestion: 0,
        result: null,
      },
      {
        id: 6,
        content: `I don't know.`,
        nextQuestion: 0,
        result: null,
      },
    ],
  },

  {
    id: 2,
    contents: [
      `Ah, music, it is! Listening to good ol' music never gets old...`,
      `But then I wonder, what's that genre of music you will happily spend your precious free hour?`,
    ],
    answers: [
      {
        id: 0,
        content: `Bypass: Simulate Result`,
        nextQuestion: null,
        result: 1,
      },
      {
        id: 1,
        content: `Pop musics have a reason why they are named popular musics.`,
        nextQuestion: 0,
        result: null,
      },
      {
        id: 2,
        content: 'Anything Art-sy, I listen to a *lot* of songs.',
        nextQuestion: 0,
        result: null,
      },
      {
        id: 3,
        content: 'K-pop songs are the best! 팡팡 파라파라 팡팡팡 💥',
        nextQuestion: 0,
        result: null,
      },
      {
        id: 4,
        content: `I don't know.`,
        nextQuestion: 0,
        result: null,
      },
    ],
  },
]
