<h1 align="center">
  <br>
  <a><img src=".github/architecture.png" alt="logo" width="100%"></a>
  <br>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vinniciusgomes/react-architecture">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vinniciusgomes/react-architecture">

  <a href="https://github.com/vinniciusgomes/react-architecture/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vinniciusgomes/react-architecture">
  </a>

  <a href="https://github.com/vinniciusgomes/react-architecture/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vinniciusgomes/react-architecture.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/vinniciusgomes/react-architecture/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/vinniciusgomes/react-architecture?style=social">
  </a>
</p>

# React with Typescript reference architecture

### How to run

`npm install`
`npm start`
<br />
`yarn`
`yarn start`

### How to run Storybook

`npm run storybook`
<br />
`yarn storybook`

### How to build

`npm run build`
<br />
`yarn build`

### How to build Storybook

`npm run build-storybook`
<br />
`yarn build-storybook`

### How to tests

`npm test`
<br />
`yarn test`

### How to create a new page

`npm run new:page`
<br />
`yarn new:page`

### How to create a new component

`npm run new:component`
<br />
`yarn new:component`

# File structure

**This is your source code tree:**

```
src
|-- assets/
|-- components/
|-- config/
|-- contexts/
|-- features/
|-- hooks/
|-- layouts/
|-- lib/
|-- pages/
|-- routes/
|-- services/
|-- styles/
|-- utils/
|-- Bootstrap.tsx
|-- index.tsx
...
```

**This is your component structure:**

```
...
components
|-- YourComponent
   |-- YourComponent.stories.tsx
   |-- YourComponent.spec.tsx
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**This is your page structure:**

```
...
pages
|-- YourPage
   |-- components/
   |-- index.tsx
   |-- YourPage.spec.tsx
   |-- interfaces.ts
   |-- styles.ts
...
```

**These are the folders and their functions:**

`./assets`

Here are all the project assets that will be used by the application, such as images, fonts, mocks, among others.

`./components`

Here will be all the components used globally by the application, components used only by a specific page will be placed elsewhere.

`./configs`

Here will be all the configuration files used globally by the application.

`./contexts`

Here will be all our contexts, responsible for storing and manipulating the application's states.

`./features`

Here is the icing on the cake, but I only use this folder in projects that are really big or when we don't know how far the project can go. The idea of the feature folder is to separate all the code of a specific functionality, for example, a Dashboard feature that contains several components that are only used there, exclusive services, hooks used only by the feature, among others.

`./hooks`

Here I like to leave all the customizable hooks of the application. If you don't know what a hook is, [here's the documentation link](https://react.dev/reference/react).

`./layouts`

Here will be all our layouts that encompass our application, for example, a layout that renders the navbar and the screen content.

`./libs`

Here will be all the integrations with external libraries, for example, the Axios configuration file for HTTP calls.

`./pages`

As the name suggests, here will be all the pages of our application.

`./routes`

Here will be all the files that manage the routes of our application.

`./services`

In this folder, all the files responsible for consuming services such as Analytics will be placed.

`./styles`

In this folder, all the global style files will be placed, such as theme files.

`./utils`

In this folder, all the useful files of our application will be placed, such as a function to format currencies or dates.

### More utils commands

Analyzer your build bundle
`npm run analyze`
`yarn analyze`

Find and fix Javascrit and TypeScript problems according to pre-defined rules
`npm run lint`
`yarn lint`

Find and fix code formatted
`npm run prettier`
`yarn prettier`

# Advantages of using this react project template

The project is already configured with:

- React
- Typescript
- Jest
- React Testing Library
- Eslint
- Prettier
- Styled Components
- Story Book
- Plop
