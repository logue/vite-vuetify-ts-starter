---
layout: blog
meta:
  title: September 2025 Update
  description: September marks significant progress as we assemble the building blocks for Vuetify's next phase. From revolutionary design-to-development workflows with our new Figma UI Kit to foundational v0 composables, September has been about connecting the pieces that will define the future of Vue development.
  keywords: Vuetify September 2025, Figma UI Kit, Vuetify0
---



# September 2025 Update

Welcome to our September update! This month marks significant progress as we assemble the building blocks for Vuetify's next phase. From revolutionary design-to-development workflows with our new Figma UI Kit to foundational v0 composables, September has been about connecting the pieces that will define the future of Vue development.

{ height=112 }

 John Leider •  October 12th, 2025

<PromotedEntry />

---

## Assembling the Future

I've been heads-down on Vuetify0 composables this month, and it's starting to click. The Figma UI Kit update is great, the framework improvements are solid, but what keeps me up at night is making sure these v0 composables feel *right*. We're not just building features—we're establishing patterns that thousands of developers will use. Get the abstraction wrong and you've created more problems than you solved. Get it right and complex stuff like permissions and feature flags just works.

Having Jacek take over as Framework Czar has been huge. I can focus on these bigger architectural questions while he keeps the core framework moving forward. The team shipped over 60 bug fixes and features in the month of September, and we're maintaining that pace. Between the Figma Kit, the v0 work, and everything else happening in the ecosystem, things are coming together.

::: success

Cool example of the month: Gradient VProgressLinear by J-Sek

:::

---

## Table of Contents

* [Releases](#releases)
  * [Key Improvements](#key-improvements)
* [Updated Official Figma UI Kit](#updated-official-figma-ui-kit)
  * [What's Included](#whats-included)
  * [Why This Matters](#why-this-matters)
  * [Pro Version Available](#pro-version-available)
* [September Webinar Recap: Performance Crisis](#september-webinar-recap-performance-crisis)
  * [Next Event: v0 Live Coding with John](#next-event-v0-live-coding-with-john)
* [Vuetify0: Composables Taking Shape](#vuetify0-composables-taking-shape)
  * [New Composables This Month](#new-composables-this-month)
* [Framework & Security Updates](#framework-security-updates)
  * [Build System Modernization](#build-system-modernization)
* [Ecosystem Spotlight: Vuetify Link](#ecosystem-spotlight-vuetify-link)
  * [Key Features](#key-features)
* [September 2025 Changelog](#september-2025-changelog)
* [The Pieces Come Together](#the-pieces-come-together)

---

## Releases

September focused on stabilization and quality improvements across the Vuetify 3 series, including iterating to the next minor version with [v3.10.0 (Argo)](/getting-started/release-notes/?version=v3.10.0). We've addressed numerous bugs, enhanced accessibility, and refined component behaviors to ensure a robust experience for developers and users alike.



### Key Improvements

* A direct [VCalendar](/components/calendars) port from Vuetify 2, bringing back familiar calendar functionalities with modern enhancements.
* Added support for `prefers-reduced-motion` to respect user accessibility settings
* Added multiple new slots for [VTreeview](/components/treeview) and [VDataTable](/components/data-tables/introduction/) for greater customization

View the complete list of changes in the [Full Changelog](#september-2025-changelog)

**Details:**

* v3.9.7
* v3.10.0
* v3.10.1
* v3.10.2
* v3.10.3

## Updated Official Figma UI Kit

We're thrilled to announce the release of our **updated Vuetify 3 UI Kit for Figma**! This comprehensive design system brings Vuetify's Material Design implementation directly to your design workflow, completely free.



### What's Included

* **Complete Component Library**: Every Vuetify 3 component meticulously recreated in Figma
* **Material Design 3 Foundation**: Built on the latest Material Design specifications
* **Design Tokens**: Consistent spacing, typography, and color systems
* **Responsive Variants**: Components optimized for all screen sizes
* **Dark Mode Support**: Full theme switching capabilities
* **Auto-Layout**: Modern Figma features for flexible, maintainable designs

### Why This Matters

This free UI kit bridges the gap between design and development, ensuring pixel-perfect implementations and faster handoffs. Designers can now work with the exact same components developers use, eliminating interpretation errors and accelerating the design-to-code process.

### Pro Version Available

Design faster with 1:1 Vuetify components, production-ready variants and style controls (colors, densities, radius and states) that adapt to any brand. Choose the version that best fits your workflow.

#### Why PRO

*  150+ components with 1:1 names and structure with Vuetify
*  All variants (elevated, flat, tonal, outlined, text, plain…) and complete states
*  Advanced foundations: 7 color roles, densities, radius, borders (color/width/opacity)
*  +4 modes by variables to scale brands and themes
*  Updates synchronized with the library and direct support

**Ideal for:**

* Teams & Startups — Faster delivery, total consistency and less rework
* Freelancers — Winning proposals and clean handoff with devs
* Design Systems — Variables, tokens and real theme scalability
* Dev Teams — 1:1 parity with Vuetify components to implement without friction.

#### Comparison Table

| Feature | PRO | FREE |
|---------|-----|------|
| **Foundations** | Includes complete **Material Design Colors** | Does not include MD color palette |
| **Themes** | Light / Dark (+ extra modes by variables) | Light / Dark |
| **Color Roles** | Default, Primary, Secondary, Custom, Error, Warning, Info, Success | Default, Primary, Secondary, Custom, Error, Warning, Info, Success |
| **States** | Enabled, Disabled, Active/Focus, Hover | Enabled, Disabled |
| **Sizes** | Default, Small, X/Small, Large, X/Large | Default, Small, Large |
| **Density** | Default, Comfortable, Compact | Only Default |
| **Border Color** | Current + Primary, Secondary, Error, Warning, Info, Success | Only Current |
| **Border Width** | default, 0, xs (thin), sm, md, lg, xl | default, 0 |
| **Border Opacity** | default, 0, 25, 50, 75, 100 | Not available |
| **Border Radius** | default, square, xs, sm, md, lg, xl, pill, circle | default, square, pill, circle |
| **Error State** | Full support | Basic inputs |
| **Others** | Individual color control in `VField` | No individual control |
| **Components** | All components | Missing components |
| **Variants** | All variants | Only elevated • flat • outlined |
| **Variants in Inputs** | All variants | Only filled • outlined |
| **Updates & Support** | Synchronized with library + support | Not guaranteed • no support |
| **Modes by variables** | 4+ modes | 4 or less |

**Details:**

* Free Figma UI Kit
* Go PRO

## September Webinar Recap: Performance Crisis

Thank you to everyone who joined our September performance optimization webinar. We had an engaging Q&A session with the community discussing bundle size reduction strategies. Some highlights and key takeaways:

* Disable [unused CSS utilities](/features/sass-variables/#disabling-utility-classes) with SASS variables
* Use [vite-plugin-vuetify](/features/treeshaking/) for automatic treeshaking and code splitting
* Reduce page load time with [VLazy](/components/lazy/)
* Use [VVirtualScroll](/components/virtual-scroll/) for expensive lists

Never miss another event by joining our Discord Community and following us on X!.

### Next Event: v0 Live Coding with John

**Wednesday, October 29th**: Join John for an exclusive live coding session where he'll build a complete application using Vuetify0 from scratch!

#### What to Expect

* **Real-time Development**: Watch as John tackles real-world challenges
* **Composables in Action**: See how usePermissions, useFeatures, and other v0 composables work together
* **Architecture Decisions**: Learn the reasoning behind v0's design patterns
* **Live Q&A**: Get your questions answered as we code
* **Early Access Insights**: First detailed look at v0's developer experience

This will be a true live demo, so expect some surprises and spontaneous problem-solving. Whether you're a seasoned Vue developer or just curious about v0, this session will provide valuable insights into building modern applications with v0 composables.

**Details**:

* Date: Wednesday, October 29th
* Start Time: 9:00 AM CST
* See what Vuetify0 is all about

## Vuetify0: Composables Taking Shape

<AppFigure :src="zerologo" alt="Vuetify0 logo" width="200" height="auto" class="mx-auto" title="Vuetify0 Logo" />

September saw intensive development on v0's composable foundation. The team has been deep in the codebase, introducing critical composables and ensuring code quality across the board.

### New Composables This Month

* **usePermissions**: A composable for managing RBAC permissions:

```ts { resource="src/main.ts" }
import { createApp } from 'vue'
import { createPermissionsPlugin } from '@vuetify/0'

const app = createApp()

app.use(
  createPermissionsPlugin({
    permissions: {
      super: [
        ['create', 'Post'],
        ['read', 'Post'],
        ['update', 'Post'],
        ['delete', 'Post'],
        ['use', 'Dev'],
      ],
      editor: [
        ['create', 'Post'],
        ['read', 'Post'],
        ['update', 'Post']
      ],
    },
  })
)

app.mount('#app')
```

```html { resource="src/components/SomeComponent.vue" }
<script lang="ts" setup>
  import { usePermissions } from '@vuetify/0'
  import { useAuth } from 'your-auth-provider'

  const { user } = useAuth()
  const { can } = usePermissions()
</script>

<template>
  <div v-if="can(user.role, 'create', 'Post')">
    <button>Create Post</button>
  </div>

  <div v-if="can(user.role, 'delete', 'Post')">
    <button>Delete Post</button>
  </div>
</template>
```

* **useFeatures**: A composable for managing available features and feature flags w/ variants support.

```ts { resource="src/main.ts" }
import { createApp } from 'vue'
import { createFeaturesPlugin } from '@vuetify/0'

const app = createApp()

app.use(
  createFeaturesPlugin({
    features: {
      comments: true,
      dev: false,
      search: {
        $value: true,
        $variation: 'v2',
        $description: 'The new and improved search experience',
      },
    },
  })
)

app.mount('#app')
```

```html { resource="src/components/SomeComponent.vue" }
<script lang="ts" setup>
  import { useFeatures } from '@vuetify/0'

  const features = useFeatures()
  const dev = features.get('dev')!
  const search = features.get('search')!
</script>

<template>
  <button @click="dev.toggle()">Toggle Dev</button>

  <input
    v-if="dev.value && features.variation('search') === 'v2'"
    placeholder="Search v2"
  />

  <input v-else placeholder="Search v1" />
</template>
```

* **useTimeline**: A composable for sequence management with undo/redo support.

```html { resource="src/components/SomeComponent.vue" }
<script lang="ts" setup>
  import { useTimeline } from '@vuetify/0'

  const timeline = useTimeline({ size: 5 })

  timeline.register({ id: 1, value: 'foo' })
  timeline.register({ id: 2, value: 'bar' })
  timeline.register({ id: 3, value: 'baz' })

  console.log(timeline.size) // 3

  timeline.undo()
  timeline.undo()

  console.log(timeline.values()) // ['foo']

  timeline.redo()

  console.log(timeline.values()) // ['foo', 'bar']
</script>
```

::: info

See all available composables on the Vuetify0 documentation site.

:::

**Details:**

* usePermissions Documentation
* useFeatures Documentation
* useTimeline Documentation

## Framework & Security Updates

With all the buzz around security vulnerabilities in the NPM ecosystem, we've prioritized enhancing our build and publishing processes to ensure the highest level of security for our users.

### Build System Modernization

This month brought significant improvements to our build infrastructure in Vuetify and across the ecosystem. Key updates include:

* **Vite 7 Support**: Full migration completed with improved build performance
* **Vue-TSC 3**: Updated TypeScript tooling for better type checking
* **Trusted Publishing**: Enhanced security for all package releases with the pnpm's **minimumReleaseAge** setting
* **TSGO:** Replaced our TSC usage with TSGO for faster builds and better DX

**Details:**

* Commit: af9a9bf
* Commit: c78f8aa

## Ecosystem Spotlight: Vuetify Link

<AppFigure :src="linklogo" alt="Vuetify Link logo" width="200" height="auto" class="mx-auto" title="Vuetify Link Logo" />

Vuetify Link is a new service that simplifies the process of creating and managing custom short links for your projects. The initial idea came from the need to share Vuetify Bins/Playgrounds/Studios without necessarily wanting to save them to your dashboard. Since these services all compress their data into the URL, it can often times be very long and cumbersome to share. It also enables us to continue to bolster the value proposition for **Vuetify One** subscribers with advanced options while making the core functionality of creating shortlinks free for everyone.

### Key Features

* **Custom Slugs**: Create memorable and branded short links
* **Link Management**: Edit, delete, and track your links from a simple dashboard
* **Analytics**: Monitor link performance with detailed statistics
* **Free & Pro Plans**: Basic link shortening is free, with advanced features available for Vuetify One subscribers



We anticipate launching this new service **this month!** Stay tuned for the official release announcement with all the details.

## September 2025 Changelog

The following section provides an overview of the changes made in September 2025, including new features, bug fixes, and enhancements across the Vuetify framework.

**Key Improvements:**

* Introduced `spaced` prop for VBtn to enhance button spacing options.
* Added `truncate-length` prop to VFileInput for better filename management.
* Implemented `stick-to-target` prop in VOverlay for improved overlay positioning.
* Enhanced accessibility with `aria-controls` and `aria-expanded` in VSelects.
* Re-converted `VCalendar` based off of Vuetify 2 implementation.

**Expand** this section to see the detailed changelog for September 2025:

<details>

### :rocket: Features

* **filter:** keep dividers and subheaders (#21822) (18ac731), closes #7424
* **framework:** respect prefers-reduced-motion (#21530) (01c9e91), closes #19622
* **VBtn:** add `spaced` prop (#21663) (819605c), closes #21652
* **VCard:** allow semantic HTML tags for content parts (#21943) (5f8abb6)
* **VColorPicker:** add `hide-eye-dropper` prop (be452a5), closes #19154 #19150
* **VColorPicker:** customizable eyeDropper icon (#21656) (71377a6), closes #21406
* **VDataIterator:** add filtered items count to slot data (#18641) (7d51302)
* **VDataTable:** customizable expand/collapse icons (#21698) (1636f63)
* **VDataTable:** re-introduce `group-summary` slot (#21802) (a19cd87), closes #21800
* **VDatePicker:** re-introduce `first-day-of-year` prop (#21760) (af74f62), closes #20270
* **VFileInput:** add `truncate-length` prop (#17972) (28ef26c), closes #17635
* **VFileUpload, VFileInput:** add `filter-by-type` prop (#21576) (1b78b06), closes #21150
* **VOverlay:** add `stick-to-target` prop (#21704) (8552779), closes #19856 #19732 #17125
* **VProgressLinear:** ability to separate chunks (#21744) (4c66aa0)
* **VTextField, VTextarea:** add `autocomplete` prop (#21359) (d94c003), closes #21353
* **VTimePicker:** add `period` prop (#21823) (8df7685), closes #15405
* **VTreeview:** add `header` slot (fc86d05)
* **VTreeview:** add `toggle` slot (#21018) (4ec13f2), closes #20307
* **VWindow, VCarousel:** add `crossfade` and `transition-duration` (#21850) (15a5c96)

### :wrench: Bug Fixes

* **framework:** don't use multi-line :not() (a15edec), closes #21995
* **goto:** always check for window.matchMedia support (7d11a39), closes #22059
* **group:** support `null` values (#21743) (facd4af), closes #20550
* **nested:** detect and warn about multiple `null` values (#21940) (0960aa6), closes #21815
* **rounded:** prioritize `tile` prop (like in v2) (6b13382), closes #21844
* **selects:** open menu when items is mutated not just replaced (#22067) (a3f8b17), closes #22066
* **v-touch:** set event handlers on root components (#21997) (1da3451), closes #21768
* **VAlert:** use outline instead of background in forced-colors mode (#21946) (7560323)
* **VAutocomplete:** restore placeholder on blur (#22114) (d0ebeec), closes #21762
* **VBtn, VChip:** correct link active state after navigation cancellation (#21651) (bce7046), closes #21594
* **VBtn:** add aria-disabled and tabindex to disabled links (#22082) (6e92383), closes #22061
* **VBtn:** don't set group state on link click (e292171), closes #21594
* **VBtn:** set group state for non-router links (6bb3fce), closes #22085
* **VCard:** render border in forced-colors mode (#21968) (b30d5c8)
* **VChip:** correct opacity for plain variant (#22005) (48d20f3)
* **VChip:** render border in forced-colors mode (#21970) (59aeadc)
* **VChipGroup:** render selected in forced-colors mode (#21973) (997dd56)
* **VCombobox:** filter matching items when opening first time (#21901) (eeb9d14), closes #21900
* **VCombobox:** unstable menu state while typing (#22045) (3983af9)
* **VDataTable:** allow filters on all columns (#21876) (af20234)
* **VDataTable:** correct alignment of checkboxes (402257d)
* **VDataTable:** expand rows when items are plain array (#22109) (d8b5c4a), closes #22080
* **VDataTable:** more flexible alignment with grouping (#21862) (6d802d3), closes #17863
* **VDataTable:** should allow expanding rows when `return-object` is true (#21128) (a586965), closes #21096
* **VList, VTreeview:** avoid locked active state when navigating (#21725) (bdbe15a)
* **VList:** outline and selection in forced-colors mode (#21958) (a8eac52)
* **VList:** use proper accessibility attributes (#21444) (9b2541e), closes #20978
* **VListGroup:** fit the navigation drawer rail (2ebc7fa), closes #22047
* **VListItem:** fix `rounded` prop (9ec5a0d), closes #22015
* **VMenu, VTooltip:** default to `stick-to-target` false (263ca4b), closes #22055
* **VNumberInput:** accept external changes when focused (#21827) (d0340e7), closes #21735 #21804
* **VNumberInput:** ignore custom `type` (c535f1a), closes #22110
* **VOtpInput:** focus next field when correcting values (#21781) (fc91e6d), closes #21680
* **VProgressLinear:** ensure visibility when using custom colors (#21949) (e3fdb53)
* **VSelects:** add `aria-controls` and `aria-expanded` (#22025) (a5abe89), closes #22017
* **VSelects/VCombobox/VAutocomplete:** use rounding from Sass variable (d3e56de), closes #21956
* **VSkeletonLoader:** no wrapper for content (#21637) (17ae110), closes #21286
* **VSlideGroup:** correct hasNext after resize (#21124) (0633aef), closes #21115
* **VSlider:** respect disabled and readonly from form (0bbf362), closes #22054
* **VSnackbar:** render border in forced-colors mode (#21977) (a2249c2)
* **VTimeline:** render lines in forced-colors mode (#21974) (dc7417c)
* **VTreeview:** indent lines should support RTL (1733666), closes #21952
* **VTreeview:** match type of update:opened with VList (#22092) (8924b4d), closes #22091
* **VTreeview:** support prepend icon and avatar (#21813) (478230a), closes #21812
* **VWindow:** override `transition-duration` to respect user preference (27fe364)

### :test_tube: Labs

* **mask:** create useMask composable (#21736) (a687f7a)
* **VCalendar:** correct effective weekdays determination (#22042) (54e6674)
* **VCalendar:** directly port from v2 (#21910) (2e6f72b), closes #19065 #20098 #20947 #20970 #21379 #21783 #21964 #22016 #22018
* **VCalendar:** fix click:date event error (97d3a3e), closes #22079
* **VCalendar:** prevent month view event duplication (977a7e2), closes #22062
* **VCalendar:** translate eventMoreText (e41e091), closes #22062
* **VCalendar:** use camelCase event names (8b2fae3), closes #22063
* **VDateInput:** pass-through picker slots (#21975) (d91dad0)
* **VMaskInput:** fix caret position while editing (#21925) (27dc68c), closes #21776
* **VPicker:** add `hide-title` prop (#21657) (8d7eac3), closes #21545
* **VVideo:** avoid interaction conflicts with VOverlay (10a1821), closes #21962
* **VVideo:** background variant should fill the container (b766424)

### :arrows_counterclockwise: Reverts

* Revert "fix(VSelect): use selected text instead of value (#21902)" (95dea2c), closes #22006
* Revert "fix(VBtn, VChip): correct link active state after navigation cancellation (#21651)" (ab28070), closes #22072 #22065
* Revert "fix(VCombobox): filter matching items when opening first time" (44002f6), closes #22077

</details>

## The Pieces Come Together{ .mt-4 }

This month has been busy. We shipped a complete Figma UI Kit update, built out critical composables for v0, hardened our build infrastructure, and continued the steady march of bug fixes and improvements across the framework. Each piece matters, but what matters more is how they fit together—designers working from the same components developers implement, composables that solve real auth and feature flag problems, tools that make sharing work easier.

October brings our v0 live coding webinar where I'll build something real and show you what these composables actually look like in practice. We'll keep stabilizing Labs components and working through the community roadmap. As always, thanks for the bug reports, PRs, and Discord help. See you next month.

---

*The Vuetify Team*
