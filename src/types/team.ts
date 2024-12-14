export interface TeamItem {
  name: string;
  role: string;
  avatar: string;
  links?: {
    github?: string;
    linkedIn?: string;
    website?: string;
  }
}