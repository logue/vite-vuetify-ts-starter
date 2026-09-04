---
layout: blog
meta:
  title: August 2025 Update
  description: August marks a pivotal moment in Vuetify's evolution as we prepare to release the pre-alpha of Vuetify0 (v0), launch our redesigned issues page, and continue delivering powerful components and improvements.
  keywords: Vuetify August 2025, Vuetify0, v0 pre-alpha, VEditor, issues page redesign, theming webinar, performance optimization
---

# August 2025 Update

Welcome to our August update! This month marks a pivotal moment in Vuetify's evolution as we prepare to release the pre-alpha of Vuetify0, launch our redesigned issues page, and continue delivering powerful components and improvements.

{ height=112 }

 John Leider •  September 9th, 2025

<PromotedEntry />

---

## From Zero

Vuetify0 reached pre-alpha status this month, delivering the first public release of our meta-framework for UI library development. The release includes foundational composables for registration and selection, plus core plugins for breakpoints, hydration, locale management, storage, and theming. These framework-agnostic tools represent the extracted intelligence that powers Vuetify, now available as standalone packages for any development environment.

Ecosystem improvements continued throughout August with significant team-community collaboration driving advances in foundational architecture, component refinements, and developer experience enhancements. The 87 pull requests merged this month reflect ongoing contributions that strengthen not just Vuetify0, but the entire ecosystem. This pre-alpha milestone sets the foundation for broader adoption while maintaining our commitment to developer productivity and framework flexibility.

::: success

Cool example of the month: VVideo Card by Vuetify

:::

---

## Table of Contents

* [Releases](#releases)
* ["Mastering Vuetify Theming" Webinar Recap](#mastering-vuetify-theming-webinar-recap)
* [Vuetify0 in Pre-Alpha](#vuetify0-in-pre-alpha)
* [Framework Updates](#framework-updates)
* [Ecosystem Spotlight: Vuetify Issues](#ecosystem-spotlight-vuetify-issues)
* [Free Premium Themes](#free-premium-themes)
* [Building the Future](#building-the-future)

---

## Releases

August focused on general component stability and bug fixes. View the complete list of changes in the [Full Changelog](#august-2025-changelog).

**Details:**

* v3.9.4
* v3.9.5
* v3.9.6

## "Mastering Vuetify Theming" Webinar Recap

On August 27th, we hosted our second community webinar: **"Mastering Vuetify's Theming Engine"**. Following the success of July's migration webinar, this session dove deep into one of Vuetify's most powerful features.

### What We Covered

* **Theme Architecture**: Understanding how Vuetify's theming system works under the hood
* **Custom Theme Creation**: Step-by-step guide to building professional themes
* **Dynamic Theming**: Implementing runtime theme switching and user preferences
* **Performance Optimization**: Best practices for theme efficiency
* **Advanced Techniques**: CSS variables, theme inheritance, and component-specific theming

### Community Response

The turnout exceeded our expectations, with developers from around the world joining to level up their theming skills. The Q&A session revealed common challenges that we're already addressing in our documentation and tooling improvements.

### Recording

We have the event recorded and are working on what the process looks like to bring it to you. More than likely will end up on our YouTube Channel, make sure to subscribe if you haven't already.

### Upcoming Webinar: "Performance Crisis"

Based on your feedback, our September webinar will tackle one of the most requested topics: **"Performance Crisis: Slash Your Bundle Size"**. This session will show you how to dramatically reduce your Vuetify application's footprint through:

* Advanced tree-shaking techniques
* Component lazy loading strategies
* Build optimization configurations
* Real-world case studies with measurable results

{ height=135 }

**Details:**

* Tuesday, September 30th at 9:00 AM CST
* Performance Crisis Sign-up

## Vuetify0 in Pre-Alpha

If you missed my initial mentions of it, Vuetify0 is a **meta framework** for building UI libraries. We've distilled the core of Vuetify into a collection of highly optimized, framework-agnostic composables. This means the power that drives Vuetify—its layout system, theming engine, localization setup, and component logic—will be available as a standalone package.

**Modern Development Experience**: Built from the ground up for Vue 3, TypeScript, and modern build tools, v0 embraces the latest web platform features while maintaining broad compatibility.

### What to Expect in the Pre-Alpha

The initial Vuetify0 release will focus on the foundational pillars of the framework. Some pages are still receiving their initial content so please pardon our dust. Here's what you'll be able to explore:

**Composables:**

* **Foundational** composables are the backbone of Vuetify0 and are the basic building blocks for creating a UI library.
* **Registration** composables are the foundational pieces for selection and tokenization.
* **Selection** composables serve as the core logic for managing selectable items, including single and multiple selection modes.
* **Plugins**: Breakpoints, Hydration, Locale, Storage, and Theme plugins to manage global application state.

::: info

If you're wondering how Vuetify0 will affect you as a Vuetify user, the short answer is: it won't—at least not immediately.

:::

The long-term plan is to incrementally integrate Vuetify0 composables into Vuetify over time, starting with new components and gradually refactoring existing ones. This approach allows us to enhance the framework's architecture without disrupting your current projects. If you're wondering how Vuetify0 will affect you as a Vuetify user, the short answer is: it won't—at least not immediately. What it *will* do is open the door for new libraries and tools to be built on the same fundamentals that drive Vuetify. Allowing developers to opt into the Vuetify ecosystem without having to commit to "Big Vuetify" as we've started calling it internally.

**Details:**

* Vuetify0 Composables
* v0.0.2 Release Notes
* Discussion on Discord

## Framework Updates

We've made significant progress on several key components and features this month. The team merged **87 pull requests** in August alone, primarily focusing on component enhancements, bug fixes, and developer experience improvements.

### VEditor: Final Testing, Coming Soon

VEditor is in the final stages of testing and will be available soon. This rich text editor brings professional content editing capabilities to Vuetify applications, including:

{ height=135 }

* **Rich Text Formatting:** Comprehensive formatting options like bold, italic, underline, strikethrough, code blocks, heading levels (H1-H6), subscript, superscript, and blockquotes
* **Customizable Toolbar:** Choose which formatting options to display, hide the toolbar completely, or configure it dynamically at runtime with Material Design Icons
* **Form Integration:** Full v-model support with Vuetify's validation system, including rules for required content, character limits, and seamless v-form compatibility
* **Flexible Styling:** Configurable height, multiple variants (outlined, solo, underlined), responsive design, and full Vuetify theme integration
* **Advanced Features:** Clearable content functionality, proper focus management, accessibility support with ARIA labels, and cross-browser contentEditable implementation

**Details:**

* VEditor PR#21653

## Ecosystem Spotlight: Vuetify Issues

The redesigned issues experience is now live at issues.vuetifyjs.com. This release focused on migrating the app from Vuetify v1.5 to v3 for a modern, consistent UI and better developer ergonomics. We also integrated Vuetify One to enable future enhancements—like special labels for subscribers—to streamline triage and improve visibility.

<video width="100%" height="auto" loop controls class="mb-4">
  <source src="https://cdn.vuetifyjs.com/docs/images/blog/august-2025-update/issues.mp4" type="video/mp4"></source>
</video>

::: info

The previous issues page was originally built with Vuetify v1.5 in 2018

:::

**Details:**

* New Issues Page
* Contributing Guide
* Community Discord

## Free Premium Themes

All Vuetify‑made themes—designed, built, and maintained by the Vuetify team—are now free for **personal** use. Enjoy polished, production‑ready starting points to learn best practices, explore ideas, and accelerate side projects without licensing friction.

### Now Available for Free

This move reflects our commitment to lowering barriers to entry and helping developers create beautiful applications faster. Visit the Vuetify Store to explore the expanded free collection.

{ height=600 }

**Details:**

* Crypto Coin Theme
* Flairo Theme Pro
* Vuetify 3 Nebula UI Kit
* Zero Theme Pro
* Made by Vuetify Bundle

## August 2025 Changelog

The following section provides an overview of the changes made in August 2025, including new features, bug fixes, and enhancements across the Vuetify framework.

**Key Improvements:**

* Accessibility and high-contrast: forced-colors fixes in VBtn/VCard, ARIA labels in VColorPicker, role added to VTextField input
* Smarter selection UX: VSelect fixes placeholder overlap and shows selected text
* More reliable date picking: VDatePicker prioritizes allowed months/years and fixes year scroll/focus
* Tables/inputs polish: VDataTable row/stripe fixes, VNumberInput focus/icons, VField clear, menu/tooltip reposition
* Labs upgrades: VVideo aspect-ratio and visuals, VPie touch segments, VColorInput pip/focus, VIconBtn icon-color

**Expand** this section to see the detailed changelog for August 2025:

<details >

### :wrench: Bug Fixes

* **validation:** return aliases when called without arguments (#21868) (64a82d4), closes #21477
* **VAlert:** restore unit-less support in Sass variable for title line-height (#21843) (8c1778a), closes #21841
* **VBtn:** render border in forced-colors mode (#21848) (25af169)
* **VCard:** hide progress border in forced-colors mode (#21836) (4335576), closes #21835
* **VColorPicker:** aria labels for main controls (#21839) (e2ab73a), closes #21834
* **VColorPicker:** keep canvas visible when width is not px (22b828f)
* **VColorPicker:** prevent sass nested deprecation warning (8083db9), closes #21909
* **VDataTable:** correct row height when with show-select and compact (#21829) (29b3bb0), closes #21767
* **VDataTable:** missing stripes on fixed columns (#21715) (739a6c9)
* **VDatePicker:** prioritize allowed-months and allowed-years (#21916) (810645c), closes #21911
* **VDatePickerYears:** fix scroll/focus of selected year (#21951) (b531dbf), closes #21950
* **VField:** avoid duplicated emits on clear (#21865) (a97f103), closes #21417
* **VMenu, VTooltip:** apply scroll-strategy reposition for horizontal overflow (#21309) (bd48658), closes #20625
* **VNumberInput:** consistent color of control icons (#21936) (6a50b44), closes #21931
* **VNumberInput:** keep focus when incrementing in the list (#21824) (d6b3384), closes #17083
* **VOtpInput:** support composing character with IME (42e15a3), closes #21918
* **VOverlay:** don't use content element as scroll parent (06c4c91)
* **VSelect:** select placeholder overlap (#21923) (5c06ba7), closes #21922
* **VSelect:** use selected text instead of value (#21902) (d0ef001), closes #21097
* **VSlider:** avoid thumb label wedge gap (#21847) (059e578)
* **VSparkline:** accept a single number (#21944) (d7b0e34), closes #19697
* **VStepper:** align title and subtitle to the avatar (12735e6), closes #21884
* **VStepper:** correct cursor for readonly item (aeb6f4d), closes #21867
* **VStepper:** keep correct alignment with alt-labels (1a0a9e6)
* **VTextField:** assign role to input element (#21903) (d77285f), closes #18125
* **VTreeview:** allow expanding disabled nodes (ed4d8cf), closes #21075 #21116
* **VWindow:** correctly reveal vertical arrows on hover (521ba7b)

### :microscope: Code Refactoring

* **VDataTable:** avoid Array.toReversed() (3894f98)

### :test_tube: Labs

* **VColorInput:** pip customization (#21820) (db389d5)
* **VColorInput:** allow inner fields focus using mouse (7657d52), closes #21897
* **VIconBtn:** correctly apply `icon-color` (b2ece2c), closes #21930
* **VPie:** support touch for segment interaction (#21871) (93f4218)
* **VVideo:** prefer `max-width`, default to 100% (22d5dd5)
* **VVideo:** add `aspect-ratio` prop (83e67d1)
* **VVideo:** correct default track color with pills (e98919d)
* **VVideo:** correct color customization (13da3e1)
* **VVideo:** correctly move elevation to pills (3df9494)
* **VVideo:** hide overlays for background variant (466dc6f)

</details>

## Building the Future{ .mt-4 }

August is about laying the foundation to begin integrating Vuetify0 into Vuetify. The pre‑alpha work is shaping the path for incremental adoption of Zero‑powered primitives across the framework.

In parallel, the ecosystem continues to be polished and expanded:

* VEditor is nearing release with robust formatting and form integration.
* VVideo and related media features are progressing.
* Improvements to performance, theming, docs, and the redesigned issues experience are landing steadily.

Thanks for the feedback and contributions—these foundations will turn into practical wins shipping over the next few releases.

---

*Stay connected with Vuetify updates through our GitHub repository, Discord community, and upcoming webinar series announcements.*
