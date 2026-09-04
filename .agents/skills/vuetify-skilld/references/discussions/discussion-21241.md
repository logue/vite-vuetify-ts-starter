---
number: 21241
title: How to solve style conflicts between Vuetify and TailwindCSS?
category: Q&A
created: 2025-04-10
url: "https://github.com/vuetifyjs/vuetify/discussions/21241"
upvotes: 4
comments: 1
answered: false
---

# How to solve style conflicts between Vuetify and TailwindCSS?

Hello, I'm using Nuxt3 with Vuetify, storefrontui and tailwind. StorefrontUI and tailwind work together to provide components that are suitable for ecommerce sites. I want to also use Vuetify to use some of its components in certain parts of the application.

Currently I'm having style conflicts between Vuetify (reset, utilities and default are the most problematic) and tailwind.

At the moment I'm configuring Vuetify with Nuxt following the manual installation: https://vuetifyjs.com/en/getting-started/installation/#manual-setup

How could I solve the style conflic issue? Currently it gives to me weird visualitation because of this
**A good solution will be to prefix vuetify's utility classes. How to achieve this?** 

---

## Top Comments

**@bhbghghbgb** (+2):

I solved at least the Vuetify's CSS reset overriding Tailwind's utility classes by redefining the CSS layer order, you can define a `vuetify` layer with lower precedence. See CSS Layers. If you find Vuetify's reset clash with Tailwind's, you can try making Vuetify's lower than the `base` layer. Of course this would mean Tailwind utility classes are going to override Vuetify's if their names clash, but I haven't notice any problem in Vuetify's styles yet.

```
/* main.css */

@layer theme, base, vuetify, components, utilities;
@import 'vuetify/styles' layer(vuetify);
@import 'tailwindcss';
@import './base.css' layer(base);

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

/* ... */
```...