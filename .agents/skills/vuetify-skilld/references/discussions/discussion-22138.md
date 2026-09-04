---
number: 22138
title: "v-calendar: date header stays selected after clicking on it"
category: Q&A
created: 2025-09-30
url: "https://github.com/vuetifyjs/vuetify/discussions/22138"
upvotes: 2
comments: 1
answered: false
---

# v-calendar: date header stays selected after clicking on it

We've recently migrated our codebase from Vuetify 2.6.4 to 3.10.3. We noticed that, in the daily mode, when we click any date headers in the calendar, they stay selected.

Example: click all the days from Monday through Friday (from the docs).

<img width="969" height="296" alt="image" src="https://github.com/user-attachments/assets/b27ffc9e-98df-4a3c-b666-e2c9f06848aa" />


That's not ideal for use cases like ours, where users click the date headers to view details about their daily schedule. Ideally, after they click the header, the selection would be gone (it used to work like that in v2).

Is there any prop or setting to control that behavior? Or perhaps a way to clear that selection after the user clicks it?

Thank...

---

## Top Comments

**@J-Sek**:

Workaround (until v3.10.8)
```
@update:active:date="() => {}"
```