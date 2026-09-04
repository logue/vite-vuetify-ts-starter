---
number: 22561
title: "VTreeview: select non-leaf nodes"
category: Q&A
created: 2026-01-28
url: "https://github.com/vuetifyjs/vuetify/discussions/22561"
upvotes: 1
comments: 2
answered: false
---

# VTreeview: select non-leaf nodes

I'm trying to create a treeview, which loads its nodes asynchronously and can select a single folder node.
Looking at the docs, using `select-strategy` `single-independent` should get me half-way there.

Since I only want to select a single node, I wanted a view without checkboxes beside every single item.
Unfortunately, selecting any folder-node does not work, since the `click` handler in `VListItem.tsx` stops with
```ts
if (isGroupActivator) return
```

Is there any way to activate/select non-leaf nodes without the checkboxes?

Disallowing leaf-nodes would probably require a new select-strategy or some extra work in my component, right?


---

## Top Comments

**@ray007** (+1):

@J-Sek yes, the mentioned issue is closely related to my problem.

But I would even argue, that with `open-on-click` set to false, `isGroupActivator` should not be set to true as mentioned above.
Feels like a bug...

**@J-Sek**:

With a bit of CSS, yes.
But you probably need #11813 if the goal is to only allow selecting folders (nodes)