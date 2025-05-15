
// Function to get color based on programming language
export const getLanguageColor = (language: string): string => {
  const colors: {[key: string]: string} = {
    "JavaScript": "#f1e05a",
    "TypeScript": "#2b7489",
    "Python": "#3572A5",
    "Java": "#b07531",
    "Go": "#00ADD8",
    "PHP": "#4F5D95",
    "C#": "#178600",
    "Ruby": "#701212",
    "CSS": "#563993",
    "HTML": "#e34c26",
    "Swift": "#ffac45",
    "Kotlin": "#F18250",
  };
  
  return colors[language] || "#e0e0e0";
};
