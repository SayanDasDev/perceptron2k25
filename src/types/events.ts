export interface EventItem {
  title: string
  description: string
  imageURL: string
  prize: string
  date?: string
  //@ts-ignore
  content: () => JSX.Element
}