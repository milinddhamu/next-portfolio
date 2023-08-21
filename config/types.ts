export type BlogPost = {
  title: string;
  link: string;
  author: string;
  published: number;
  category: string[];
  content: string;
  enclosures?:string[]
  content_encoded : string;
  media:Record<string, never>

};

export type MyProps = {
  length:string;
};

export type ProjectsType = {
  title: string;
  des: string;
  github?: string;
  thumbnail: string;
  live?: string;
  tech: string[];
  video?:string;
  slug:string;
  details?:ContentItem[];
};

export type ContentItem = {
  title?: string;
  content: string;
};


export type EducationType = {
  degree: string;
  school: string;
  location: string;
  year: string;
};

export type LinksType = {
  GitHub: string;
  LinkedIn: string;
  Portfolio: string;
};
export type TechstackItem = {
  name: string;
  image: string;
};
export type TechstackCategory = {
  category: string;
  items: TechstackItem[];
};
export type ProfileType = {
  name: string;
  phone: string;
  email: string;
  education: EducationType[];
  links: LinksType;
  description: string;
  techStack: TechstackCategory[];
  skills: string[];
};