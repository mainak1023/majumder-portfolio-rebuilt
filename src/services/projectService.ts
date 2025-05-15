
import { Project } from '@/types/project';

// This is a mock function to simulate fetching projects from GitHub API
export const fetchProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockProjects: Project[] = [
        {
          name: "gitprofile",
          description: "Create and publish a dynamic portfolio by just providing your GitHub username.",
          stars: 1010,
          forks: 141,
          language: "TypeScript",
          url: "https://github.com/mainakmajumder/gitprofile"
        },
        {
          name: "ezfolio",
          description: "Open Source Portfolio/Resume CMS built using Laravel, React and Ant Design.",
          stars: 270,
          forks: 84,
          language: "PHP",
          url: "https://github.com/mainakmajumder/ezfolio"
        },
        {
          name: "reactive-button",
          description: "3D animated react button component with progress bar.",
          stars: 136,
          forks: 21,
          language: "JavaScript",
          url: "https://github.com/mainakmajumder/reactive-button"
        },
        {
          name: "OneClick",
          description: "Navigate to your favorite actions on the websites you love with just one click.",
          stars: 80,
          forks: 19,
          language: "JavaScript",
          url: "https://github.com/mainakmajumder/OneClick"
        },
        {
          name: "reforge",
          description: "An out-of-box UI solution for enterprise applications as a React boilerplate.",
          stars: 64,
          forks: 18,
          language: "TypeScript",
          url: "https://github.com/mainakmajumder/reforge"
        },
        {
          name: "react-laravel",
          description: "A simple crud based laravel app to learn how to use react with laravel.",
          stars: 61,
          forks: 28,
          language: "PHP",
          url: "https://github.com/mainakmajumder/react-laravel"
        },
        {
          name: "reddit-image-fetcher",
          description: "A JavaScript package for fetching reddit images, memes, wallpapers and more.",
          stars: 48,
          forks: 9,
          language: "JavaScript",
          url: "https://github.com/mainakmajumder/reddit-image-fetcher"
        },
        {
          name: "blogys",
          description: "JavaScript client to get recent blog posts from your blogging platforms.",
          stars: 42,
          forks: 9,
          language: "JavaScript",
          url: "https://github.com/mainakmajumder/blogys"
        }
      ];
      
      resolve(mockProjects);
    }, 1000);
  });
};
