---
number: 21188
title: "[Bug?] VWindowItem is permanently disabled"
category: Q&A
created: 2025-03-31
url: "https://github.com/vuetifyjs/vuetify/discussions/21188"
upvotes: 1
comments: 1
answered: true
---

# [Bug?] VWindowItem is permanently disabled

I have VWindowItem components used in multiple places and everywhere the components have property `disabled="false"`. Web browser interprets it as true even if it's value is `false`.

I didn't set it explicitly and I can't find any place where it is set so I make an assumption that it is default behaviour for the component which is totally incorrect and looks like a bug.

Did anyone face the same issue or maybe knows the solution?

```html
<VRow>
  <VCol>
    <VTabs v-model="activeTab" dark next-icon="fas fa-angle-right" prev-icon="fas fa-angle-left" density="default" fixed-tabs>
      <VTab v-for="(tab, key) in tabs" :key="key" :value="key">
        {{ tab.title }}
      </VTab>
    </VTabs>
  </VCol>
 </VRow>

<VRow>
  <VCol cols="12" class="table-tab">
    <VWindow v-model="activeTab" style="width: 100%">
      <VWindowItem v-for="(tab, key) in tabs" :key="key" :value="key"> 
        
      </VWindowItem>
    </VWindow>
  </VCol>
</VRow>
```...

---

## Accepted Answer

Fixed by #21138