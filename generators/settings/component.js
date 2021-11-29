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
      path: '../src/components/{{pascalCase name}}/index.ts',
      templateFile: 'templates/components/index.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'templates/components/component.tsx.hbs',
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
      path: '../src/components/index.ts',
      template: "export { {{pascalCase name}} } from './{{pascalCase name}}';",
      type: 'append',
    },
  ],
}
