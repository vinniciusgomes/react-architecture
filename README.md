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


### How to lint

`npm run lint`
<br />
`yarn lint`

### How to analyze

`npm run analyze`
<br />
`yarn analyze`

### How to run prettier

`npm run prettier`
<br />
`yarn prettier`

### How to prepare

`npm run prepare`
<br />
`yarn prepare`

# File structure

**This is your source code tree:**

```
src
|-- common
   |-- assets
   |-- mocks
   |-- stories
   |-- styles
   |-- utils
|-- components
|-- config
|-- container
|-- hooks
|-- pages
|-- routes
|-- services
|-- Bootstrap.tsx
|-- index.tsx
...
```

**This is your component structure:**

```
...
components
|-- YourComponent
   |-- YourComponent.tsx
   |-- YourComponent.stories.tsx
   |-- YourComponent.spec.ts
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
   |-- YourPage.tsx
   |-- YourPage.stories.tsx
   |-- YourPage.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**These are the folders and their functions:**

`./common`

Here are all the project assets that will be used by the application such as global styles, images, fonts, mocks, stories, reusable functions, among others

`./components`

Components are presentational only elements, grouping UI items

`./configs`

Configs are our application's global settings files

`./containers`

Containers are responsible for handling dependency injection, decoupling the application from the library

`./hooks`

Hooks are functions that allow you to “plug in” to React's state and lifecycle features from functional components

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

`./services`

Contains all the files responsible for consuming external services, such as the axios configuration file for consuming RestFul APIs.

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
- Unit testing example
- Eslint
- Prettier
- Styled
- Story Book
- Husky

### Main dependecies

- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://date-fns.org/)
- [react](https://reactjs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/)

### Main dev dependecies

- [testing-library](https://testing-library.com/)
- [eslint](https://eslint.org/)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [prettier](https://prettier.io/)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://web.dev/vitals/)
