# joblist

## Description
This project addresses the specific needs for a commune, which sought to enhance their platform by incorporating an joblist. The Objective was to develop a highly functional and seamlessly integrated React component that can search through and filter by jobs. 


## Project overview

The primary task involved building a web-accessible React component that would seamlessly integrate within an existing vanilla JavaScript project. This component was specifically developed to address the unique requirements of a commune, which sought to enhance their platform by incorporating an interactive job list component 

The objective was to create a highly functional React component that can be embedded within the larger vanilla JavaScript project, allowing for a seamless integration between the two technologies. The React component serves as a self-contained module responsible for displaying a job list with the ability to filter throug jobs by categories and search though id's and titles. 

To ensure consistency and alignment with the design system of the vanilla JavaScript project, the React component's styles were carefully developed using the css-in-js tool Twind. By referencing shared variable names and omitting the inclusion of a preflight (CSS normalize), the component's styles integrate seamlessly with the existing styles of the vanilla JavaScript project.


## Structure

```bash.
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
│   ├── api
│   ├── app.tsx
│   ├── components
│   ├── global.css
│   ├── hooks
│   ├── main.tsx
│   ├── modules
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

7 directories, 11 files
```

The project follows the above directory structure, which can be explained as follows:

`api`: This directory contains the logic and services responsible for handling API-related operations. It includes modules for fetching categories and jobs from the API.

`components`: The components directory is dedicated to storing reusable UI components. It houses both global components that are used throughout the project, as well as components specifically related to the job list functionality.

`hooks`: The hooks directory houses custom React hooks that manage the state of categories, jobs, and filtering of job listings. These hooks provide reusable logic and enhance code organization.

`modules`: The modules directory serves as a dedicated location for organizing code related to different modules or features within the project. It includes models that describe the structure and attributes of jobs and categories.

`global.css`: The global.css file contains the root variables that define the project's design system. These variables ensure consistency across components and adhere to the styling guidelines of the main project. During the build process, this file is excluded to avoid duplication of variables, as they are expected to be defined in the main project.


## Technologies used

The project utilizes the following technologies:

`Vite`: Vite is a fast and lightweight build tool that optimizes the development experience for modern web applications. It enables quick bundling and reloading of modules, resulting in shorter build times and faster development cycles.

`TypeScript`: TypeScript enhances code maintainability and reliability. 

`Twind`: Twind is employed as the css-in-js solution, allowing for encapsulated styling and avoiding conflicts with existing styles upon integration.

`React Query`: React Query is a powerful data fetching and state management library for React applications. It simplifies the process of fetching, caching, synchronizing, and updating remote data, providing a seamless and efficient data management solution.

