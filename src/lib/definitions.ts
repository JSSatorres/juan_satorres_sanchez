export interface Project {
  id?: number;
  projectTitle: string;
  image?: string;
  technologies: string[];
  url?: string;
}

export interface FormInput {
  name: string;
  email: string;
  message: string;
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  jobDescription: string;
  duration: string;
  projects: Project[];
}
export interface YearTimelineProps {
  workExperience: WorkExperience[];
  activeIndex: number;
  handleScrollTo: (index: number) => void;
  getYearFromDate: (date: string) => string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string;
  updated_at: string;
  full_name: string;
  created_at: string;
}
