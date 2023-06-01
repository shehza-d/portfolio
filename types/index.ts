// https://stackoverflow.com/questions/31876947/confused-about-the-interface-and-class-coding-guidelines-for-typescript
// https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Interfaces.md

export interface ISkills {
  id: string;
  title: string;
  icon: string;
  percent: number;
  additionalInfo: string;
}

export interface IContact {
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
  aayah: {
    arabic: string;
    translation: string;
  };
  poetry: {
    line1: string;
    line2: string;
  };
  points: {
    id: number;
    li: string;
  }[];
}
