---
number: 21710
title: Using en-au locale for dates breaks messages
category: Q&A
created: 2025-07-08
url: "https://github.com/vuetifyjs/vuetify/discussions/21710"
upvotes: 1
comments: 1
answered: true
---

# Using en-au locale for dates breaks messages

If I set my locale to en-au, the dates format and display properly, but the js console is filled with messages: [Vue warn]: Vuetify: Translation key "$vuetify.open" not found in "en-Au", trying fallback locale. The fallback (en) works OK, but how do you stop the hundreds of warning messages? There is no en-au for messages.

---

## Accepted Answer

Discovered this:
```
export default createVuetify({
  locale: {
    locale: 'en',
  },
  date: {
    locale: {
      en: 'en-AU',
    },
  },
})
```
that is, you can set a locale for date only , and leave messages on 'en'