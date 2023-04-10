export interface skillsType {
  id: string;
  title: string;
  icon: string;
  percent: number;
  additionalInfo: string;
}

export interface contactType {
  id: string;
  title: string;
  link: string;
  icon: string;
  iconType: "skillIcon" | "public";
  userName: string;
  alt: string;
}

export interface IProject {
  id: string;
  title: string;
  previewImg: string;
  description: string;
  techUsed: string[];
  repoLink: string;
  hostedLink: string;
}

export interface IAbout {
  para: string;
  points: {
    id: number;
    li: string;
  }[];
}
