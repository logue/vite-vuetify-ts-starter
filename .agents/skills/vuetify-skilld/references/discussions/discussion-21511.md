---
number: 21511
title: How to use sass variable of vuetify/settings, and vuetify at once?
category: Q&A
created: 2025-06-02
url: "https://github.com/vuetifyjs/vuetify/discussions/21511"
upvotes: 1
comments: 1
answered: true
---

# How to use sass variable of vuetify/settings, and vuetify at once?

I can't get using both `@use 'vuetify'` ($layers), and `@use 'vuetify/settings'` ($color-pack) to work correctly.

`@/styles/layers.css`
```css
@layer theme, base, components, vuetify, utilities;
```
`@/plugins/vuetify`
```js
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  theme: { defaultTheme: 'dark' },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
```
`@/styles/vuetify-settings.scss`
```css
@use 'vuetify/settings' with (
  $layers: true
);
```
`@/styles/vuetify-css.scss`
```css
@use 'vuetify' with (
  $color-pack: false
);
```
`@/styles/main.css`
```css
@import 'tailwindcss';
```
`@/main.ts`
```js
import { createApp } from 'vue'

// imports tries below

import App from '@/App.vue'

const app = createApp(App)
app.use(vuetify)

app.mount('#app')

```...

---

## Accepted Answer

**@KaelWD** [maintainer]:

You can put them both in vuetify/settings:

`@/styles/vuetify-settings.scss`
```css
@forward 'vuetify/settings' with (
  $color-pack: false,
  $layers: true
);
```
`@/styles/vuetify-css.scss`
```css
@use './vuetify-settings';
@use 'vuetify';
```
`@/main.ts`
```js
import { createApp } from 'vue'

import '@/styles/layers.css'
import '@/styles/vuetify-css.scss'

import App from '@/App.vue'

const app = createApp(App)
app.use(vuetify)

app.mount('#app')
```

And you don't even need `vuetify-css.scss` if you aren't doing anything else with it, just replace that with `import 'vuetify/styles'`