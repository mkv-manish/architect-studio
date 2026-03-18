export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  location?: string;
  images: string[];
  highlights: string[];
}