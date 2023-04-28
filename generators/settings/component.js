module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/components/index.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/components/style.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
      templateFile: 'templates/components/test.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
      templateFile: 'templates/components/stories.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/interfaces.ts',
      templateFile: 'templates/components/interfaces.ts.hbs',
    },
    {
      path: '../src/components/index.ts',
      template:
        "export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n",
      type: 'append',
    },
  ],
};
