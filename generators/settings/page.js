module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the page?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/page/index.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/page/styles.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
      templateFile: 'templates/page/tests.spec.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/components/.gitkeep',
    },
    {
      path: '../src/pages/index.ts',
      template:
        "export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n",
      type: 'append',
    },
  ],
};
