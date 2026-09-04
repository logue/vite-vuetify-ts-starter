---
number: 21396
title: How to get NavigationDrawer behavior from mobile on desktop
category: Q&A
created: 2025-05-09
url: "https://github.com/vuetifyjs/vuetify/discussions/21396"
upvotes: 1
comments: 1
answered: true
---

# How to get NavigationDrawer behavior from mobile on desktop

https://play.vuetifyjs.com/#eNq1VE1v2zAM/SuCzrG1rQsQBFmxXnbbace5KFiLiVXoCxLt1Cj630u7SeMkDdAeepMenx4fJVL/n2ROtbqJsexalEu5InTRAuF15YVYdUUNSY/rcWehDy3t9iPioTMbIBN8oRNsMYmIyYFHTwIfI3hdcKgJHUcSGPt29lXP5IPaBCsM+5jiQsSEEVkNOiBIvyrZEMW8VCpxjuDajKl0qCAaFUMizkVZbYNDrxbz8iFuKnksmNt7MmSRpTJLJLiDxeL3xrHJOrhT9p76b6SKGw0uH3OuV2piflrnDmfoqHhtOqMxjef26xPKcExo9NlQz8nZV4SaKin42j95b6YOniWcNsU6WM51qcK/vfhjLJ5UJ0QHth3irl+fhy8W/0lrUNeh9VS41pKJFi8+QwMJtdgaaoQ7Y+2t5pH1NU4zd+FFdxw7Szyx9V74I+1zAM7GbtI5XAY3sReZ+tFNg2bT0FL8mH+Lj5UcEw2E/VgP+oe5Hra7oV+pyW8gn2fyqpyX36/ksFiUP+VsDTbj7OgLecVuXwAAKEqL

Open the link and enter the mobile mode in your browser.

If you click on an item in the rail, it opens, if you click outside it closes. How can I achive this in desktop mode?


https://vuetifyjs.com/en/components/navig...

---

## Accepted Answer

I have done a self-made solution

basically with

```ts
function handleOutsideClick(e: MouseEvent) {
    const drawerEl = document.querySelector('#sidebar')
    const navList = document.querySelector('#navigation-list') // my nav list
    const navFooter = document.querySelector('#navigation-footer') // my nav footer items

    if (!drawerEl) return

    // navList and navFooter elements are ignored, they are inside DrawerEl, but if they are clicked, some other things should happen
    if ((navList && navList.contains(e.target as Node)) || (navFooter && navFooter.contains(e.target as Node))) return

    updateMiniSidebar(!drawerEl.contains(e.target as Node))
  }
  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick)
  })
```