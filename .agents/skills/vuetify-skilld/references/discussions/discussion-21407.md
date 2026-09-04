---
number: 21407
title: How to access File object in v-file-upload-item
category: Q&A
created: 2025-05-12
url: "https://github.com/vuetifyjs/vuetify/discussions/21407"
upvotes: 1
comments: 1
answered: true
---

# How to access File object in v-file-upload-item

I tried it in playground

---

## Accepted Answer

Solution:
`<template v-slot:item="{ props: itemProps, file }">`

playground