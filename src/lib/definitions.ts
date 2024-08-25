interface Project {
  projectTitle: string;
  technologies: string;
}

export interface WorkExperience {
  company: string;
  jobTitle: string;
  jobDescription: string;
  duration: string;
  // img: string;
  projects: Project[];
}
