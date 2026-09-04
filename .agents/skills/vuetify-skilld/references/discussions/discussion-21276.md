---
number: 21276
title: Is it possible to add two properties in the next version
category: Q&A
created: 2025-04-16
url: "https://github.com/vuetifyjs/vuetify/discussions/21276"
upvotes: 1
comments: 1
answered: true
---

# Is it possible to add two properties in the next version

1、add `onClick` as a base prop for every component.
2、add a prop for `v-data-table-server` to handle every cells value,if it`s null or undefined, i can use a custom value to replace this value.

---

## Accepted Answer

> i use jsx template to code ! so ,i need onClick prop.

It might be a limitation of your IDE, extensions, tooling for Vue+JSX or a bad project setup. Please do not expect the framework-wide artificial props to make TS errors go away when using uncommon coding style.