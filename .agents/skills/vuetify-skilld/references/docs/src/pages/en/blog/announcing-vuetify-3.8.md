---
layout: blog
meta:
  title: Announcing Vuetify v3.8
  description: Vuetify v3.8 is here! Discover the latest features, improvements, and bug fixes in this minor release, including new components and form input enhancements.
  keywords: Vuetify v3.8, VNumberInput, VSnackbarQueue, VDataTable, VTooltip, VDateInput, useRules, VIconBtn
---

# Announcing Vuetify v3.8

---

 John Leider •  April 8th, 2025

<PromotedEntry />

---

## Introduction

Today we are excited to announce the release of Vuetify v3.8 "Andromeda"!

This minor release contains no breaking changes and is packed with new features, improvements, and bug fixes. This blog post will highlight some of the most notable changes—for a full list of changes and new features, please see the full changelog.

---

- [Form input improvements](#form-input-improvements)
  - [Multi-word search highlight](#multi-word-search-highlight)
  - [Input icon states](#input-icon-states)
- [New components](#new-components)
  - [VNumberInput](#vnumberinput)
  - [VSnackbarQueue](#vsnackbarqueue)
- [Other updates](#other-updates)
  - [VDataTable selection](#vdatatable-selection)
  - [VTooltip interactive](#vtooltip-interactive)
- [Labs](#labs)
  - [VDateInput](#vdateinput)
  - [useRules composable](#userules-composable)
  - [VIconBtn](#viconbtn)

## Form input improvements

In v3.8, we have made several improvements to form controls, including new styling options and additional components. These changes are designed to give you more control over the look and feel of inputs.

### Multi-word search highlight

Search terms that match multiple words in the item text will now be highlighted in VAutocomplete and VCombobox. This enhancement makes it easier for users to see how their search terms match available options, improving the overall search experience.

**Before:**
{ height=300 }

**After:**
{ height=300 }

**Details:** PR#16462

### Input icon states

In earlier versions of Vuetify, focused inputs would add color to their icons. This is now possible using the new **icon-color** and **glow** props. The former allows you to set the default color of the icon, when combined with the latter, the icon will change color when the input is focused.

{ height=300 }

This is perfect for drawing attention to active inputs or creating dynamic, responsive forms.

**Details:** PR#21076

## New components

Both VNumberInput and VSnackbarQueue have been promoted from labs to the core framework. They offer a clean experience and are easy to use.

### VNumberInput

The v-number-input component has moved from Labs to the Core framework in v3.8. It's intended to be a replacement for the standard `<input type="number">` and supports all of the standard Vuetify input variant props.

{ height=300 }

**Details:**

- Documentation
- PR#18162

### VSnackbarQueue

The v-snackbar-queue component has moved from Labs to the Core framework in v3.8. This component makes it easy to create a queue of snackbars that can be displayed one after the other.

Setting up a queue of snackbars is as simple as creating a store that holds the queue and passing it to the VSnackbarQueue component.

```ts { resource="src/stores/queue.ts" }
import { defineStore } from 'pinia'
import { Ref } from 'vue'

export type Snackbar = Record<string, any>

export interface SnackbarQueueState {
  queue: Ref<Snackbar[]>
  show: (text: Snackbar | string) => void
}

export const useQueueStore = defineStore('Queue', () => {
  const queue = ref<Snackbar[]>([])

  function show (text: Snackbar) {
    const record = typeof text === 'string' ? { text } : text

    queue.value.push(record)
  }

  return {
    queue,
    show,
  } as SnackbarQueueState
})
```

```html { resource="src/App/AppSnackbarQueue.vue"}
<template>
  <v-snackbar-queue v-model="queue.queue" />
</template>

<script setup>
  import { useQueueStore } from '@/stores/queue'

  const queue = useQueueStore()

  queue.show('Hello world!')
</script>
```

Queue items support all v-snackbar props, including **timeout** and **color**.

**Details:**

- Documentation
- PR#19629

## Other updates

Some other small updates in v3.8 involve quality of life improvements to existing components such as VDataTable and VTooltip.

### VDataTable selection

In v3.8, when using the **show-select** property and VDataTable, you can hold the <v-kbd>shift</v-kbd> key when making a selection to select a range of items.

{ height=500 }

**Details:** Commit c9a2a22

### VTooltip interactive

v3.8 introduces the **interactive** property to the v-tooltip component. When enabled, this allows users to interact with and select text within the tooltip.

{ height=300 }

**Details:** Commit 1599512

## Labs

The latest version of Vuetify also includes a number of updates to existing Labs components, including the new VIconBtn. In addition, we're also bringing a new composable for testing named **useRules**.

### VDateInput

The v-date-input component received multiple quality of life improvements, including:

- Now has actions hidden by default, reducing screen clutter
- Improved inputmode usage on mobile
- Normalized control button sizes giving the component a more consistent look

{ height=300 }

This component is getting close to being ready for production, keep an eye out for it in the next release!

### useRules composable

The useRules composable is a new way to propagate shared rules through your application with full localization support. After following the Installation Guide, you can use the composable in your components.

```html
<template>
  <v-app>
    <v-container>
      <v-form validate-on="submit" @submit.prevent="submit">
        <v-text-field :rules="[rules.required(), rules.email()]" label="Email" />

        <v-btn text="Submit" type="submit"/>
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
  import { useRules } from 'vuetify/labs/rules'

  const rules = useRules()

  async function submit (event) {
    await event
  }
</script>
```

Rules also support localization, allowing text strings to change based upon the injected locale. This applies globally, as well as inline:

```html
<template>
  <v-form validate-on="submit" @submit.prevent="submit">
    // This field is required
    <v-text-field :rules="[rules.required()]" />

    <v-locale-provider locale="es">
      // Este campo es obligatorio
      <v-text-field :rules="[rules.required()]" />
    </v-locale-provider>
  </v-form>
</template>
```

This simplifies managing validation rules across your app, ensuring consistency and easing localization.

### VIconBtn

v-icon-btn is a new component in testing that's intended to bridge the gap between VBtn and VIcon. Its size is meant to be more intentional and is ideal for compact UI patterns like toolbars, icon-only lists, or action grids.

{ height=300 }

We're also experimenting with a new way of mapping sizes, moving the configuration from SCSS to props.

```ts { resource="src/plugins/vuetify.ts" }
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    VIconBtn: {
      sizes: [
        ['x-small', 16],
        ['small', 20],
        ['medium', 24],
        ['large', 28],
        ['x-large', 32],
      ],
      iconSizes: [
        ['x-small', 10],
        ['small', 12],
        ['medium', 14],
        ['large', 16],
        ['x-large', 18],
      ],
      size: 'small',
    }
  }
})
```

Moving to a system like this also opens up the ability to configure your own sizing names:

```ts { resource="src/plugins/vuetify.ts" }
{
  VIconBtn: {
    sizes: [
      ['xs', 16],
      ['sm', 20],
      ['md', 24],
      ['lg', 28],
      ['xl', 32],
      ['2xl', 36],
    ],
    iconSizes: [
      ['xs', 10],
      ['sm', 12],
      ['md', 14],
      ['lg', 16],
      ['xl', 18],
      ['2xl', 20],
    ],
    size: 'xl',
  }
}
```

This is still in testing so please give us your feedback by dropping a line on our Discord

**Details:** PR#21114

---

For a complete list of all the changes and features in v3.8, please see the full changelog.
