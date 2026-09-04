---
number: 21631
title: How to destroy VDialog when it closed?
category: Q&A
created: 2025-06-25
url: "https://github.com/vuetifyjs/vuetify/discussions/21631"
upvotes: 1
comments: 2
answered: false
---

# How to destroy VDialog when it closed?

I have a form and some custom component in dialog. so i need to reset all contents.

---

## Top Comments

**@KaelWD** [maintainer]:

This should be the default unless you've set `eager`

**@fabianbernhart**:

I hope this helps this will reset the form.

If you want it to reset the form on close, add the reset function to your `v-dialog` on emit `update:modelValue` this will reset your form on close

I also added some helpful links 

<details>

<summary>Hint 1:</summary>

```ts
const form = useTemplateRef<HTMLFormElement>("your-form");
```

</details>

<details>

<summary> Example: </summary>

```vue
<script setup lang="ts">
import { useTemplateRef, ref } from "vue";

const form = useTemplateRef<HTMLFormElement>("my-form");

const field = ref("");

const reset = () => {
  form.value.reset();
};
</script>

<template>
  <v-form ref="my-form">
    <v-text-field label="Alrigt" v-model="field"></v-text-field>
    <v-checkbox label="Check"></v-checkbox>
  </v-form>

  <v-btn @click="reset">Reset</v-btn>
</template>
```...