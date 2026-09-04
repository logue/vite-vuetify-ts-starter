---
number: 4144
title: "[Feature Request] Pressing the clearable icon on <v-text-field> with clearable prop sets the model to null not to empty string"
type: bug
state: open
created: 2018-05-25
url: "https://github.com/vuetifyjs/vuetify/issues/4144"
reactions: 15
comments: 30
labels: "[T: enhancement, T: regression, C: VTextField, Vuetify 3 - Phase 3]"
---

# [Feature Request] Pressing the clearable icon on <v-text-field> with clearable prop sets the model to null not to empty string

### Versions and Environment
**Vuetify:** 1.0.18
**Vue:** 2.5.16
**Browsers:** Vivaldi 1.96.1147.42
**OS:** Windows 10

### Steps to reproduce
Create a `<v-text-field>` with `clearable` and the model for it. Fill in some text. Press X icon (default) to clear the text, check the model.

### Expected Behavior
Model is an empty string `''`.

### Actual Behavior
Model is `null`.

### Reproduction Link
https://codepen.io/anon/pen/YLoaOo?editors=1111

### Other comments
It gets annoying when you have String functions on that model and they return errors because they can't be applied to `null` if a user in the front-end uses the clearable icon. The bug also applies on the newest alpha.


