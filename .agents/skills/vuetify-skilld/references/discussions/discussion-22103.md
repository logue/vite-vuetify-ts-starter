---
number: 22103
title: Struggling with remote search + select pattern in combobox
category: Q&A
created: 2025-09-22
url: "https://github.com/vuetifyjs/vuetify/discussions/22103"
upvotes: 1
comments: 1
answered: true
---

# Struggling with remote search + select pattern in combobox

First of all, I am a beginner when it comes to TypeScript, Vue and Vuetify, but I unfortunately I am in a position where I need to debug a somewhat complex web app using vuetify.

The issue that I experience with the application is connected to the implementation of a "remote search + select" pattern. Starting with Vuetify@3.7.12, for some reason the search field is cleared whenever I type something.
I prepared a strongly reduced, reproducible example in this [vplay](https://play.vuetifyjs.com/#eNp1Vd1q2zAUfpUz7caB2KEdYxCSbGNXhQ0GY7uJc6HYciqmSJokJw1J3n1HP3btNqXQyOf7zv/R0fpMrKlmX7UuDi0jc7KwleHagWWu1SCo3C1L4mxJVqUE4HutjIMzGNbAFRqj9lAS1CxJKT2BPQUCl46ZhlYMfqiaCTh7DEDSPfs8B+sMlzsvukatSknrYB+oS6hZwyULiouofgHZCrHKJs9ky8yBmQfH9hZVMJxIXW9W2Xoz4lFTPUZKhlGSASYUrTGQBDZUWIaox6k9yQqaVlaOK+mLEaz/oaJl2...

---

## Accepted Answer

```ts
async function setModelValue(value: Model | string | undefined) {
  if (!value || typeof value === "string") {
      model.value = null
// ...
```

You are interrupting the typing by resetting the field to `null`.
VCombobox is basically a text field with a dropdown for suggestions, `value` in this event handler is expected to be `string` most of the time, so the logic here is just wrong.