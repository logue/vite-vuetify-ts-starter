---
number: 21913
title: How to show tooltip on disabled `v-tab`?
category: Q&A
created: 2025-08-12
url: "https://github.com/vuetifyjs/vuetify/discussions/21913"
upvotes: 1
comments: 1
answered: true
---

# How to show tooltip on disabled `v-tab`?

Hi everyone,

I have a tab bar where the last tab is disabled and I wanted to add a tooltip to explain why to the user. I have tried wrapping the tab inside a `<span></span>` or a `<div></div>`, as explained in the relevant issue, but that workaround only seems to work for `v-btn`, not `v-tab`. The tooltip is correctly rendered on hover, but the tab does not grow like the other ones (I'm using `<v-tabs grow>...</v-tabs>`. Is there another workaround to achieve what I'm trying to do, or is it simply not possible?

Playground

```html
<v-tab
  value="three"
  disabled
  class="pointer-events-auto"
  v-tooltip:bottom="'Out of order'"
  text="Item Three"
/>
```

The trick is just a class to restore `pointer-events`.
Works with `<v-tooltip>...</v-tooltip>`, assuming you bind events correctly `v-bind="props"` not `v-bind="{props}"`.