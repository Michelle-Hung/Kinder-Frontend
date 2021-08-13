# kinder-frontend
A practiced frontend project with vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
Reference [Configuration Reference](https://cli.vuejs.org/config/).


## How to create a vue3 project
Step1. install yarn or npm 

Step2. create a repo on github and clone

Step3. install vue cli
```
yarn global add @vue/cli
OR
npm install -g @vue/cli
```
Step4. create vue project
```
vue create {prject name}
```
Chose what kind of project you want to create
```
Vue CLI v4.5.10
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 2] babel, eslint)
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)
  Manually select features
```

Now can run your vue project
```
yarn run serve
```
or
```
npm run serve
```

## How to install cypress in vue3 project
Reference [Cypress document](https://www.cypress.io/blog/2021/04/06/getting-start-with-cypress-component-testing-vue-2-3/).

Step1. install cypress with yarn or npm
```
# Vue 2
yarn add cypress @cypress/vue @cypress/webpack-dev-server --dev

# Vue 3
npm install cypress @cypress/vue@next @cypress/webpack-dev-server --dev
yarn add cypress @cypress/vue@next @cypress/webpack-dev-server --dev
```

Step2. Create a plugins file. By default this goes in ```cypress/plugins/index.js```

![cypress plugin configuration](https://user-images.githubusercontent.com/48158642/128603338-71ede02f-f318-4aa9-b29e-4ddc236d30f6.png)


Step3. Create a json file to tell Cypress where and how to find tests

Reference [Cypress configuration document](https://docs.cypress.io/guides/references/configuration#cypress-json).

Default ```testFiles``` configuration: ```**/*.*```

![Cypress.json](https://user-images.githubusercontent.com/48158642/128603750-d92733e7-dddc-4204-9ae3-75fd3faa9195.png)


Step4. Opening Cypress

The long way with the full path
```./node_modules/.bin/cypress open```

The shortcut using npm bin
```$(npm bin)/cypress open```

Using npx
```
# npx is included with npm > v5.2 or can be installed separately
npx cypress open
# or
npx cypress open-ct
```

Using yarn
```
yarn run cypress open
# or
yarn cypress open-ct
```

The Cypress Test Runner
![cypress test runner dashboard](https://user-images.githubusercontent.com/48158642/128603899-63f65ca2-6d0c-457c-a1ed-0b991d0f2f6d.png)

Open the component test runner

![image](https://user-images.githubusercontent.com/48158642/128604037-30383aa8-b6eb-4c1c-a380-40428028ba91.png)
