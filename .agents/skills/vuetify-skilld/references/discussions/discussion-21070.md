---
number: 21070
title: How to include vuetify3 inside vue3's component using composition API
category: Q&A
created: 2025-03-05
url: "https://github.com/vuetifyjs/vuetify/discussions/21070"
upvotes: 1
comments: 1
answered: true
---

# How to include vuetify3 inside vue3's component using composition API

I would like to build a web component using Vuetify3 inside of a Vue3's component that is using composition API.

How do I add Vuetify3 to `MyNavbar.ce.vue` component so that it is scoped inside the component's shadow root?

This component will be dynamically loaded into applications/sites built with other frameworks/styles.

I want the component to be able to use Vuetify3 directives such v-app, v-app-bar, v-btn etc. within it.

Thank you, Oleg

I followed many online resources and arrived at the setup below but I can't get vuetify setup inside the component.

**Project created:**
```
npm create vue@latest

> npx
> create-vue

✔ Project name: … my-navbar
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … No
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? › No

Scaffolding project in /path/my-navbar...

Done. Now run:

  cd my-navbar
  npm install
  npm run dev
```...

---

## Accepted Answer

Managed to get this sorted out:

Example
github.com/OnlyLoveOleg/vue3-vuetify-webcomponent

Original question:
stackoverflow.com/questions/79488711