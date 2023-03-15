export type skillsType = {
  id: string;
  title: string;
  icon: string;
  percent: number;
  additionalInfo: string;
};

export type contactType = {
  id: string;
  title: string;
  link: string;
  icon: string;
  iconType: "skillIcon" | "public";
  userName: string;
  alt: string;
};
