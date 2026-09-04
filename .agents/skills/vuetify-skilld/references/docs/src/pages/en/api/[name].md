---
layout: blank
meta:
  title: API
  description: API documentation
  keywords: api, vuetify
---



<ApiView v-on:update:name="name = $event">

# {{ name }} API

<PageFeatures />

<ApiBacklinks :name="name" />

<PromotedEntry />

<ApiSearch />

</ApiView>
