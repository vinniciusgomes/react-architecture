module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the hook?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/hooks/{{pascalCase name}}/index.ts',
      templateFile: 'templates/hooks/index.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/hooks/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile: 'templates/hooks/hook.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/models/{{pascalCase name}}.ts',
      templateFile: 'templates/hooks/model.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/hooks/{{pascalCase name}}/interface.ts',
      templateFile: 'templates/hooks/interface.ts.hbs',
    },
    {
      path: '../src/hooks/index.tsx',
      template: "export { {{pascalCase name}} } from './{{pascalCase name}}';\n",
      type: 'append',
    },
    {
      path: '../src/models/index.ts',
      template: "export type { {{pascalCase name}}Model } from './{{pascalCase name}}';\n",
      type: 'append',
    },
  ],
}
