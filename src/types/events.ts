export interface EventItem {
  title: string
  description: string
  imageURL: string
  prize: string
  date?: string
  // isOver?: boolean
  overMessage?: {
    title: string,
    desc: string,
  }
  //@ts-ignore
  content: () => JSX.Element
}