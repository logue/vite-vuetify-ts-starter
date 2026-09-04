---
number: 22113
title: Is the calendar's `updateTimes` method available in Vuetify 3?
category: Q&A
created: 2025-09-23
url: "https://github.com/vuetifyjs/vuetify/discussions/22113"
upvotes: 3
comments: 0
answered: false
---

# Is the calendar's `updateTimes` method available in Vuetify 3?

I used to use v-calendar with Vuetify 2 and I'm now migrating the project to Vuetify 3.

The codebase calls `$refs.calendar.updateTimes()`, but I can't find that method in the API docs for v3: https://vuetifyjs.com/en/api/VCalendar/

The example here still uses `updateTimes`, but it's now called via `calendar.value.updateTimes()`. That does not seem to work for me, since value is not defined in the calendar instance. Perhaps I am missing something.

I am using Vuetify 3.10.2, and this is how the original Vuetify 2 code used to look like:

```js
  mounted() {
    ...
    this.updateTime = setInterval(() => {
      if (this.$refs.calendar) {
        this.$refs.calendar.updateTimes()
      }
    }, 60 * 1000)
    ...
  }
```...