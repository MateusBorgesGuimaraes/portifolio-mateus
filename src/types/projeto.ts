export type Projeto = {
  name: string;
  cleanName: string;
  image: string;
  embed: string;
  urlGithub: string;
  urlYoutube: string;
  description: string;
  technologies: string[];
  objetivos: {
    principais: string[];
    secundarios: string[];
  };
  desing: { image: string; title: string }[];
};

export type ProjetoInfos = {
  projeto: {
    name: string;
    cleanName: string;
    image: string;
    embed: string;
    urlGithub: string;
    urlYoutube: string;
    description: string;
    technologies: string[];
    objetivos: {
      principais: string[];
      secundarios: string[];
    };
  };
};

export type ProjetoDesing = {
  image: string;
  title: string;
};
