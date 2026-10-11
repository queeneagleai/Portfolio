export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  githubUrl: string;
  imageUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  emailAddress: string;
  businessType: string;
  whatSlowsYouDown: string;
}

export type SubmitStatus = "idle" | "submitting" | "success" | "error";
