export const scrollSuave = (id: string) => {
  const sectionChoice = document.getElementById(id);
  if (sectionChoice) {
    sectionChoice.scrollIntoView({ behavior: 'smooth' });
  }
};
