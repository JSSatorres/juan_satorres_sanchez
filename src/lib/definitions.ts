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
  // img: string;
  projects: Project[];
}
export interface YearTimelineProps {
  workExperience: WorkExperience[];
  activeIndex: number;
  handleScrollTo: (index: number) => void;
  getYearFromDate: (date: string) => string;
}
