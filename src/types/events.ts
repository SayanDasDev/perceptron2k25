export interface EventItem {
  title: string
  description: string
  href: string
  imageURL: string
  rules: string[]
  prize: string
  formURL: string
}

export type EventCardItem = Pick<EventItem, 'title' | 'href' | 'imageURL'>