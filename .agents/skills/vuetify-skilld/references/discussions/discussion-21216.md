---
number: 21216
title: "How is `<v-text-field type=\"number\" />` supposed to work?"
category: Q&A
created: 2025-04-04
url: "https://github.com/vuetifyjs/vuetify/discussions/21216"
upvotes: 1
comments: 1
answered: true
---

# How is `<v-text-field type="number" />` supposed to work?

I'm trying to use `v-text-field` with `type="number"` in order to get a proper number keyboard on mobile devices.

However, it seems to be impossible to work with this configuration.

If I type in numbers only, everything is fine, the v-model gets updated to the same value the input shows.

But if I type in non-number characters, the v-model becomes "<empty string>" but the input shows whatever was typed in (including the non-number characters). So there seems to be some validation but it is not reflected in the rendering.

How can I fix this?

My preferred solution would be that the number input just does not accept any other character than `[0-9]`.

I tried all kinds of tricks with `@update:model-value` but nothing really works. It would work with a default input, but then I ...

---

## Accepted Answer

You could try the VNumberInput, which is intended to be a replacement for the standard `<input type="number">` and supports all of the standard Vuetify input variant props.