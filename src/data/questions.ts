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
      `Alrighty. Let's get started. The entire purpose of this project is to find the best meme match for you that will make you smile. I cannot see who chose what response, so no worries on that.`,
      `Ok. The first question. How often do you enjoy your music?`,
    ],
    answers: [
      {
        id: 1,
        content: 'Not so much, maybe on YouTube sometimes?',
        nextQuestion: 10,
        result: null,
      },
      {
        id: 2,
        content: 'Quite a lot, for example when I am coding 🔥',
        nextQuestion: 6,
        result: null,
      },
      {
        id: 3,
        content: `Always. Music is my blood 💉`,
        nextQuestion: 2,
        result: null,
      },
    ],
  },
  {
    id: 2,
    contents: [
      `Oh yeah? I also enjoy music a lot. I mean, a lot. Do you have any specific genres in mind?`,
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
  {
    id: 10,
    contents: [
      `Hmm, that's interesting to listen. FYI, I'll suffocate if there's no music around.`,
      `Then, are you familiar with games? Do you game a lot?`,
    ],
    answers: [
      {
        id: 1,
        content: `No... not any more.`,
        nextQuestion: 13,
        result: null,
      },
      {
        id: 2,
        content: `I am proud to say that I am a gamer.`,
        nextQuestion: 11,
        result: null,
      },
    ],
  },
  {
    id: 11,
    contents: [
      `Now we're talking 😎 Gamer here too.`,
      `Suppose that you can only play only one genre for the rest of your life, what would it be?`,
    ],
    answers: [
      {
        id: 1,
        content: `Console Games. Exclusive games are dope.`,
        nextQuestion: 12,
        result: null,
      },
      {
        id: 2,
        content: `FPS, no hesitation! Fortnite, Apex, PUBG...`,
        nextQuestion: null,
        result: 10,
      },
      {
        id: 3,
        content: `Smart people play RTS. Others are for children.`,
        nextQuestion: null,
        result: 11,
      },
      {
        id: 4,
        content: `Not on this list. Come on Sunghyun.`,
        nextQuestion: null,
        result: 13,
      },
    ],
  },
  {
    id: 12,
    contents: [
      `LOL I never owned a console after Wii 😂 I envy you. What platform is your favorite?`,
    ],
    answers: [
      {
        id: 1,
        content: `Nintendo. Mario 🍄 and Zelda ⚔️`,
        nextQuestion: null,
        result: 37,
      },
      {
        id: 2,
        content: `Xbox & PlayStation`,
        nextQuestion: null,
        result: 12,
      },
    ],
  },
  {
    id: 13,
    contents: [
      `Ok - It's getting into a rabbit hole. Then, you surely binge on Netflix and Movies, right?`,
    ],
    answers: [
      {
        id: 1,
        content: `Not really. I am too busy attending our Zoom Univ these days.`,
        nextQuestion: 17,
        result: null,
      },
      {
        id: 2,
        content: `Sure! New movies and videos are always refreshing.`,
        nextQuestion: 14,
        result: null,
      },
    ],
  },
  {
    id: 14,
    contents: [`Great!! Pick your favorite franchise. Decide quickly.`],
    answers: [
      {
        id: 1,
        content: `Starwars Saga. Never gets old.`,
        nextQuestion: 15,
        result: null,
      },
      {
        id: 2,
        content: `Marvel Cinematic Universe. Miss those days in theater.`,
        nextQuestion: 16,
        result: null,
      },
      {
        id: 3,
        content: `Harry Potter series. Hermione was my first love.`,
        nextQuestion: null,
        result: 26,
      },
      {
        id: 4,
        content: `Interstellar, or any Nolan movies.`,
        nextQuestion: null,
        result: 27,
      },
    ],
  },
  {
    id: 15,
    contents: [
      `If you could be a Jedi or a Sith... Who would you choose to be?`,
    ],
    answers: [
      {
        id: 1,
        content: `Anakin Skywalker. The Protagonist.`,
        nextQuestion: null,
        result: 30,
      },
      {
        id: 2,
        content: `Rey. The last Jedi.`,
        nextQuestion: null,
        result: 32,
      },
      {
        id: 3,
        content: `Kylo Ren. That sick cross lightsaber.`,
        nextQuestion: null,
        result: 38,
      },
      {
        id: 4,
        content: `General Grievous is seriously underrated.`,
        nextQuestion: null,
        result: 31,
      },
    ],
  },
  {
    id: 16,
    contents: [`Pick your favorite. Think fast.`],
    answers: [
      {
        id: 1,
        content: `The Triumvirate. Iron Man, Captain America, and Thor.`,
        nextQuestion: null,
        result: 28,
      },
      {
        id: 2,
        content: `Doctor Strange.`,
        nextQuestion: null,
        result: 39,
      },
      {
        id: 3,
        content: `Spiderman, but I think Tobey was better...`,
        nextQuestion: null,
        result: 29,
      },
    ],
  },
  {
    id: 17,
    contents: [
      `Oh Ok. I totally get that. What's the most difficult thing for you attending Zoom Classes?`,
    ],
    answers: [
      {
        id: 1,
        content: `I don't know, I just don't know...`,
        nextQuestion: null,
        result: 999,
      },
      {
        id: 2,
        content: `I got technical problems.`,
        nextQuestion: 18,
        result: null,
      },
      {
        id: 3,
        content: `My families keep enter my room.`,
        nextQuestion: null,
        result: 25,
      },
      {
        id: 4,
        content: `I am time zone impacted.`,
        nextQuestion: null,
        result: 22,
      },
      {
        id: 5,
        content: `Classes are boring. Really.`,
        nextQuestion: null,
        result: 8,
      },
    ],
  },
  {
    id: 18,
    contents: [
      `Yikes. Technical Problems can be really hard. What's your technical problem? Maybe I can help.`,
    ],
    answers: [
      {
        id: 1,
        content: `Software Problems.`,
        nextQuestion: null,
        result: 24,
      },
      {
        id: 2,
        content: `Hardware Problems.`,
        nextQuestion: null,
        result: 23,
      },
    ],
  },
] // this storyline is all handmade, curated one by one... rlly tough TBH (but i enjoyed)
