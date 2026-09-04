---
number: 22178
title: Why does a navigation drawer never set model-value to true?
category: Q&A
created: 2025-10-09
url: "https://github.com/vuetifyjs/vuetify/discussions/22178"
upvotes: 1
comments: 1
answered: true
---

# Why does a navigation drawer never set model-value to true?

Hi,

I was wondering why does the naviagationDrawer never emit true for the update:model-value ?

See:
https://play.vuetifyjs.com/#eNptUctOwzAQ/JXFl7ZSHlDUS0kRcOKO4EI4WMmmWDi25UeKFOXf8aNpKeK2O7OenVm/j8TopnxUqhgcki2pLPaKU4v3tQCohpwqFcvYNFJYygTqIxRBQQe2p5ZJkbeaHlDDtpct8nyg3OGuJsZ6vZrAg1Otr/6wUrxGuCYnUYBn5FxenZaU/2w5W3h7sgIsfluv1nDWfMEn6rgwdrMD2IHVLuDlnMjrXkYKSEpclb8u4VvTaKYsGLQuHYT1SmoLI2jsYIJOyx4W/oiLMA7gdY0fPy72M8uOcoOru0R3TjQhDMzxlwIPL2F6BWNyFxQkx4LL/Zn0zwMXdYt4Qq8+s4GbgvVk1tskU0Zui02xXpNQ3FwXG5JFI9nFxyfs4wfeQq4c

Click on the button and see that there are console logs for false, but never for true

<img width="2548" height="1201" alt="image" src="https://github.com/user-attachments/assets/f5491d0f-dbf7-4e5b-9863-14e19733721e" />


---

## Accepted Answer

**@KaelWD** [maintainer]:

Because the drawer isn't updating the value, App.vue is. It *does* emit true on touch swipe and screen resize. If you just want to watch state use `watch(state, onUpdate)`