import { icons } from "lucide-react"

export interface NavItem {
  title: string
  description?: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
