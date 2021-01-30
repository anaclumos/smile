export type Question = {
  id: number
  content: string
  answers: Answer[]
}

export type Answer = {
  id: number
  content: string
  result: number | null
  nextQuestion: number | null
}

export type Video = {
  id: number
  title: string
  uploader: string
  desc: string
  youtubeId: string
}
