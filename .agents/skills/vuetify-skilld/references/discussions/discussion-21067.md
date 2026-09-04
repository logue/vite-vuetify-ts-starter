---
number: 21067
title: Can someone explain me why second dialog closes first?
category: Q&A
created: 2025-03-05
url: "https://github.com/vuetifyjs/vuetify/discussions/21067"
upvotes: 1
comments: 1
answered: true
---

# Can someone explain me why second dialog closes first?

In the attached project I have two dialogs which are showed on the other. Now if the second one closes why the first one too?

---

## Accepted Answer

This is because you are using clickOutside. Try specifying the following in v-dialog without using clickOuside:
`@click:outside="onClickCancel"`