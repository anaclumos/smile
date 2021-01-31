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
      `How often do you enjoy your music?`,
    ],
    answers: [
      {
        id: 1,
        content: `Every day, every hour, every minute. Music is my blood 💉`,
        nextQuestion: 2,
        result: null,
      },
      {
        id: 2,
        content: 'Sometimes, like when I am coding 🔥',
        nextQuestion: 6,
        result: null,
      },
      {
        id: 3,
        content: 'Not so much, maybe on YouTube sometimes?',
        nextQuestion: 0,
        result: null,
      },
    ],
  },
  {
    id: 2,
    contents: [
      `Oh yeah? I also enjoy music a lot. I mean, a lot.`,
      `Do you have any specific genres in mind?`,
    ],
    answers: [
      {
        id: 1,
        content: `🎧 Pop songs`,
        nextQuestion: 3,
        result: null,
      },
      {
        id: 2,
        content: '✨ K-Pops',
        nextQuestion: 4,
        result: null,
      },
      {
        id: 3,
        content: '⚡️ Electronic songs',
        nextQuestion: null,
        result: 6,
      },
      {
        id: 4,
        content: '🎹 Classical',
        nextQuestion: null,
        result: 33,
      },
      {
        id: 5,
        content: '❓ Dunno. I listen to a lot of musics...',
        nextQuestion: 5,
        result: null,
      },
    ],
  },
  {
    id: 3,
    contents: [
      `Pop songs are always great! There's no wonder why they are named Popular songs, you know.`,
      `Who is your favorite artist in this list?`,
    ],
    answers: [
      {
        id: 1,
        content: `Havana by Camica Cabello`,
        nextQuestion: null,
        result: 34,
      },
      {
        id: 2,
        content: `bad guy by Billie Eilish`,
        nextQuestion: null,
        result: 5,
      },
      {
        id: 3,
        content: `I Love you 3,000 by Stephanie Poetri`,
        nextQuestion: null,
        result: 35,
      },
    ],
  },
  {
    id: 4,
    contents: [
      `Hey!!!`,
      `I too LOVE K-pop. My Spotify Wrapped was basically K-pop billboard.`,
      `Do you have any preferences?`,
    ],
    answers: [
      {
        id: 1,
        content: `💥 BTS`,
        nextQuestion: null,
        result: 36,
      },
      {
        id: 2,
        content: `💞 IZ*ONE`,
        nextQuestion: null,
        result: 1,
      },
      {
        id: 3,
        content: `🔥 BlackPink`,
        nextQuestion: null,
        result: 2,
      },
      {
        id: 4,
        content: `😎 ITZY`,
        nextQuestion: null,
        result: 18,
      },
    ],
  },
  {
    id: 5,
    contents: [
      `Hmm, it seems like you listen to a lot of music that you cannot decide your mind. Then let me introduce, something that you might not have listened to.`,
      `Anything that hits your mind in general?`,
    ],
    answers: [
      {
        id: 1,
        content: `🖌 Super artistic video with Summer Vibes`,
        nextQuestion: null,
        result: 3,
      },
      {
        id: 2,
        content: `🎨 Super artistic video with Stories`,
        nextQuestion: null,
        result: 4,
      },
      {
        id: 3,
        content: `🔥 Basically a Finger Dance`,
        nextQuestion: null,
        result: 6,
      },
    ],
  },
  {
    id: 6,
    contents: [
      `You're a coder! Fist bump here 🤜🤛 I too like to code a lot (guess you can see that with this site haha) `,
      `What is your favorite language?`,
    ],
    answers: [
      {
        id: 1,
        content: `C++ is the best. Fast, reliable, and omnipotent. Other's are for noobs.`,
        nextQuestion: 7,
        result: null,
      },
      {
        id: 2,
        content: `Java runs on 30 Billion devices!`,
        nextQuestion: 7,
        result: null,
      },
      {
        id: 3,
        content: `Python ranks first on basically every Dev survey.`,
        nextQuestion: 7,
        result: null,
      },
      {
        id: 4,
        content: `Nothing can match JS/TS. Sunghyun, you know that too, right? That's why you made this site in TypeScript.`,
        nextQuestion: 7,
        result: null,
      },
      {
        id: 5,
        content: `Be creative. Use Rust. It's the Future.`,
        nextQuestion: 7,
        result: null,
      },
    ],
  },
  {
    id: 7,
    contents: [
      `Haha I can totally see why you chose that.`,
      `What's your experience like?`,
    ],
    answers: [
      {
        id: 1,
        content: `I have taken some CS courses. Watched some tutorials online.`,
        nextQuestion: null,
        result: 16,
      },
      {
        id: 2,
        content: `I have taught some students. But was I... a good teacher?`,
        nextQuestion: null,
        result: 15,
      },
      {
        id: 3,
        content: `Took some coding tests. Struggled a lot.`,
        nextQuestion: 8,
        result: null,
      },
      {
        id: 4,
        content: `Created fully functional projects. Side projects are always fulfilling.`,
        nextQuestion: 9,
        result: null,
      },
      {
        id: 5,
        content: `Wait. Why are you asking...`,
        nextQuestion: null,
        result: 7,
      },
    ],
  },
  {
    id: 8,
    contents: [`Oh that's great. Have you ever got a job opportunity?`],
    answers: [
      {
        id: 1,
        content: `Yup. Thanks to this club 🔥`,
        nextQuestion: null,
        result: 21,
      },
      {
        id: 2,
        content: `Actually, not yet.`,
        nextQuestion: null,
        result: 17,
      },
    ],
  },
  {
    id: 9,
    contents: [
      `Side projects are lit 🔥 totally agree on that.`,
      `If you have to not use one of the followings during your side project, what would you ditch?`,
    ],
    answers: [
      {
        id: 1,
        content: `Google. I guess I'll just Bing things...`,
        nextQuestion: null,
        result: 19,
      },
      {
        id: 2,
        content: `Stack Overflow. We have Stack Exchange as an alternative.`,
        nextQuestion: null,
        result: 20,
      },
      {
        id: 3,
        content: `My laptop? Guess I could use a desktop.`,
        nextQuestion: null,
        result: 18,
      },
    ],
  },
] // this is all handmade, curated one by one... rlly tough TBH (but i enjoyed)
