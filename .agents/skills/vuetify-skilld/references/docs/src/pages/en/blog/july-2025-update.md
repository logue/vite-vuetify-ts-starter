---
layout: blog
meta:
  title: July 2025 Update
  description: July delivered substantial progress on collaborative development, component enhancements, developer experience improvements, and ecosystem tools across the Vuetify ecosystem.
  keywords: Vuetify July 2025, Vuetify Migrations Webinar, Vuetify0, VCommandPalette, VEditor, Framework Czar, Vuetify Bin
---



# July 2025 Update

This month showcases the power of collaborative development as our team and community work together to enhance Vuetify's ecosystem.

{ height=112 }

---

 John Leider •  August 6th, 2025

<PromotedEntry />

---

## New Beginnings

July exemplified what makes Vuetify special: a dedicated team working alongside an engaged community to build something greater than the sum of its parts. From bug fixes to revolutionary new components, from documentation improvements to ecosystem tools—every contribution matters. This month brings exciting advancements across the Vuetify ecosystem, with major strides in collaborative features, component refinements, and enhanced developer experience.

::: success

Cool example of the month: VChatList by Ishan

:::

---

## Table of Contents

* [Releases](#releases)
* [The future of Vuetify](#the-future-of-vuetify)
* ["Decoding Vuetify Migrations" Webinar Recap](#webinar-recap)
* [Ecosystem Spotlight: Vuetify Bin](#ecosystem-spotlight-vuetify-bin)
* [Framework Updates](#framework-updates)
* [July 2025 Changelog](#july-2025-changelog)
* [What's Next](#whats-next)

---

## Releases

July featured the release of [v3.9.0 (Zealot)](/getting-started/release-notes/?version=v3.9.0) on July 8th, promoting [VTreeview](/components/treeview/) and [VTimePicker](/components/time-pickers/) from labs to the core framework; along with subsequent patches up to v3.9.3 on July 29th, focusing on component stability, bug fixes, and developer experience improvements. View the complete list of changes in the [Full Changelog](#july-2025-changelog).

**Details:**

* v3.9.0
* v3.9.1
* v3.9.2
* v3.9.3

## The future of Vuetify

Over the past decade, I've had the unique opportunity to work closely with hundreds of developers and meet thousands more on a project that I love. Through community support and consistent dedication, that opportunity has continued to thrive and support our efforts—I cannot thank everyone enough for your trust over the years. The last time I wrote about the future of Vuetify was back in 2017, when this whole thing was just getting started. We're **8 years**, **15 thousand commits**, and **45 million downloads** later, and I can confidently say that Vuetify has become a staple in the Vue ecosystem; that's pretty cool!

We went through some organizational changes earlier this year after facing funding challenges in 2024. We're now in August, and I personally consider the effort an ongoing success. The new members assimilated quickly and immediately started making strides across all parts of the ecosystem. This new structure has been a *game changer*, and has finally allowed me to contemplate the future of Vuetify in a way that I haven't been able to in a very long time.

Last month, I revealed some information regarding a new project I've been working on called Vuetify0. It is a **meta framework** for building Vue UI libraries with the express goal of abstracting the Vuetify core into a set of publicly available composables.

{ height=588 }

* **Vuetify0**: Meta framework for building framework agnostic UI libraries
* **Vuetify Paper**: Styleless components that are prop configured—no CSS required
* **Vuetify**: Marries Vuetify0, Vuetify Paper, and Vuetify's defaults system

I plan to give my first public talk about it at **VueConf Toronto** later this year, and I'm excited to see what everyone thinks.

In order to have the focus necessary to execute on the above propositions *and* continue to push Vuetify forward, I'm introducing a new position to the organization: the **Framework Czar**. Think of it as the *Lead Maintainer* of the core framework. I will still be involved in the day-to-day operations, but will be less focused on tasks involving the actual management of the vuetifyjs/vuetify repository and more focused on the future of Vuetify as a whole. This includes the Vuetify0 project, Vuetify Paper, and the broader Vuetify ecosystem.

Today I'm excited to announce that **Jacek Czarniecki** will be taking the torch as the first Framework Czar of Vuetify. He is a long-time member of the Vuetify community, contributing to the framework and helping others with their projects. He officially joined the team last November and has since demonstrated a keen sense of detail and a deep understanding of how to build beautiful UI.

<br>

<AboutTeamMember v-if="jacek" v-bind="{ member: jacek }" />

<br>

Jacek is a seasoned developer with experience honed in corporate environments and battle-tested through independent projects. He stands out as a true "maker," delivering tangible results while others get bogged down in scheduling meetings about future meetings. We're all very excited to have him in this role, and I look forward to seeing how he shapes the next chapter of the framework.

Thank you once again to everyone who has supported Vuetify over the years. I hope you are as excited as I am about the future of this project and the direction we are heading in. Let us know what you think about the changes in the comments below, or on our Discord.

---

## "Decoding Vuetify Migrations" Webinar Recap{ #webinar-recap}

Last week we hosted our monthly webinar, this time focusing on **Vuetify 2 to 3 migrations**. We had a fantastic turnout and talked with the community about the most common migration issues, how to approach them, and the tools available to help. We answered questions about the migration process, shared tips and tricks, and provided insights into the most common pitfalls developers face when upgrading their projects.

Below are a few key points we noticed most users struggled with during the migration process:

### ESLint Plugin

The Vuetify ESLint plugin is a powerful tool that helps developers identify and fix Vuetify-specific issues in their code. It provides rules for common migration issues, such as deprecated components, incorrect prop usage, and more. The plugin is designed to be used during your upgrade process and will *drastically* reduce the time it takes to migrate your project.

```bash
pnpm install eslint-plugin-vuetify --save-dev
```

```js
// eslint.config.js
import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'

export default [
  ...vue.configs['flat/base'],
  ...vuetify.configs['flat/base'],
]
```

For more information on how to set up and use this plugin, check out the vuetifyjs/eslint-plugin-vuetify repository.

### Theme Changes

The most common migration issue we see? **Theme configuration**. V3's theme system is more powerful but requires a different approach:

```js
// V2 Approach (Won't work in V3)
theme: {
  themes: {
    light: {
      primary: '#1976D2',
    },
  },
}

// V3 Approach (Correct)
theme: {
  themes: {
    light: {
      colors: {  // Note the 'colors' wrapper!
        primary: '#1976D2',
      },
    },
  },
}
```

---

We are looking forward to our next webinar this month. Make sure to sign up, and if you have suggestions for topics, let us know in the comments or on our Discord.

## Ecosystem Spotlight: Vuetify Bin

Every month, we highlight one tool from the Vuetify ecosystem. This month, we're featuring **Vuetify Bin**—our answer to sharing and debugging Vuetify code snippets.

### What is Vuetify Bin?

Vuetify Bin is our official pastebin/gist alternative for saving and managing snippets of code. Since code is compressed into the URL, you can easily bookmark and share your snippets with others—*free forever*.

{ height=300 }

::: info
If you're part of the **Vuetify One** subscription, you can save your snippets with a unique URL. More Info
:::

## Framework Updates

We've made significant progress on several key components and features this month. The team merged **95 pull requests** in July alone, primarily focusing on component enhancements, bug fixes, and developer experience improvements. Key highlights include:

**VCommandPalette** has moved from concept to reality. This keyboard-first navigation component brings the power of command palettes (think **VS Code** or **Raycast**) to web applications. Early prototypes show seamless integration with Vuetify's existing keyboard navigation, making power-user features accessible to all developers.

<video width="100%" height="auto" loop controls>
  <source src="https://cdn.vuetifyjs.com/docs/images/blog/july-2025-update/vcommand-palette.mp4" type="video/mp4"></source>
</video>

**VEditor** reached a significant milestone with the completion of heading formatting (h1-h6) and substantial progress on alignment controls. This rich text editor is becoming the *go-to solution* for content management within Vuetify applications.

<video width="100%" height="auto" loop controls>
  <source src="https://cdn.vuetifyjs.com/docs/images/blog/july-2025-update/veditor.m4v" type="video/mp4"></source>
</video>

**VVideo** officially entered Labs with the release of v3.9.3. This component provides a flexible and powerful way to embed videos in Vuetify applications, supporting various formats and configurations.

<video width="100%" height="auto" loop controls>
  <source src="https://vuetifyjs.b-cdn.net/docs/images/blog/june-2025-update/vvideo.mp4" type="video/mp4"></source>
</video>

**Details:**

* VCommandPalette PR#21534
* VEditor PR#21653
* VVideo PR#21460

## July 2025 Changelog

The following section provides an overview of the changes made in July 2025, including new features, bug fixes, and enhancements across the Vuetify framework.

**Key Improvements:**

* **VProgressLinear** #21744: Added chunk separation capability for creating segmented progress indicators—perfect for multi-step forms and wizards *(Merged July 15)*
* **VDatePicker** #21760: Restored the accidentally removed `first-day-of-year` prop after community feedback *(Draft as of July 24)*
* **VMaskInput** #21719: Fixed validation value handling, ensuring masks work correctly with form validation
* **VField** #21706: Enhanced label accessibility for improved screen reader support
* **VDateInput** #21684: Added proper TypeScript definitions to the `displayFormat` function
* **Input components** #21703: Fixed `aria-describedby` attributes when using `hide-details`

Expand this section to see the detailed changelog for July 2025.

<details >

###  Component promotions

The following components have been promoted to the core framework from labs:

* VTreeview
* VTimePicker

### :rocket: Features

* **date:** add StringDateAdapter (#21174) (7fe9152), closes #20967
* **date:** export VuetifyDateAdapter (#21252) (1a98d03), closes #19904
* **ripple:** use key names instead of codes (7ecec03)
* **theme:** add change, toggle, and cycle functions (#21224) (3570254)
* **theme:** add new option 'unimportant' to generate classes without `!important` (3190331)
* **theme:** add new theme 'system' (#21244) (8393a41)
* **transition:** expose create transition functions (#21352) (79f36aa), closes #16050
* **types:** emit GlobalDirectives (136dfdf), closes #21475
* **useHotkey:** add new composable for making hotkey bindings (#21598) (99c721c)
* **VAlert:** better aligment with prepend icon (#20700) (5231b95), closes #20636
* **VBadge:** add width and height props (#21509) (b87f179), closes #20837
* **VBtnGroup:** add `direction="vertical"` (#17878) (5f39b85), closes #17492
* **VCombobox:** scroll to first item on search result (#21255) (57bb5ad), closes #20572
* **VDataTable:** support `fixed: 'end'` in headers (#21665) (415c267), closes #20020 #21153
* **VDatePicker:** add `weekday-format` prop (#21290) (b13b15c)
* **VDatePicker:** expose slots from underlying components (#21532) (1e351a2), closes #20236
* **VInfiniteScroll:** add reset method (#20637) (2e5bc43), closes #20308 #19935
* **VKbd:** update default styling, add configurable options (8ea20d9)
* **VNumberInput:** custom decimal separator (#21489) (534c1e7), closes #20254
* **VNumberInput:** more flexible precision display (#21315) (d5779cd), closes #21306
* **VOtpInput:** allow to keep focus on paste (#21356) (cb8015d), closes #21275
* **VOverlay:** align scrim color with MD3 (#21219) (29d22a6), closes #20244
* **VSelect/VAutoComplete/VCombobox:** add `item-type` prop (eaa4d15), closes #21666
* **VSelect:** add `no-auto-scroll` prop (#21254) (1e0f1c1), closes #20237
* **VSelect:** support divider and subheader in items (#21348) (0953ed2), closes #5014 #15721
* **VSlideGroup:** add content class to VSlideGroup props (#21431) (935351c), , closes #20853
* **VSlider:** expose focus method (#21575) (6790e1e), closes #17602
* **VTable:** add striped prop (#19735) (35b3304), closes #17505
* **VTextarea:** add update:rows event (#21226) (e72d4d3), closes #21133
* **VTimePicker:** promote from labs (7ce2cd6)
* **VTimePicker:** remove ampmInTitle prop (#21595) (e32796a), closes #19637 #19957
* **VToolbar:** allow for explicit `:extension="false"` (#21264) (092e64a), closes #7317
* **VTreeview:** add `indent-lines` prop (#21675) (501e016), closes #11506
* **VTreeview:** expose depth, path, index in slots (#19833) (bd908af), closes #13863
* **VTreeview:** promote from labs (b610813)
* **VTreeview:** support `item-type` (#21709) (877f323)
* **VVirtualScroll:** support fractional scroll index (#20407) (adad9e2)
* **VWindow:** add `vertical-arrows` prop (#21587) (663b9a8)

### :wrench: Bug Fixes

* **date:** align `fullDate` format with documentation and other adapters (#21668) (c856da3), closes #21667
* **input:** handle aria-describedby with hide-details (#21703) (543f932), closes #17012 #19794
* **inputs:** expose missing validation methods (be64296), closes #19934
* **theme:** ability to restore "system" (#21821) (45077be), closes #21819
* **types:** don't use primitive object wrappers (32007ed)
* **virtual:** skip items update if height has not been checked (#21442) (2e55ed3), closes #18806
* **VAutocomplete, VCombobox:** space key should not select (#21311) (f9288ad), closes #20728
* **VChipGroup:** don't select items with a value by index (#21742) (72cd412), closes #20129
* **VColorPicker:** keep sliders visible when inputs are hidden (#21803) (215bfd8), closes #21801
* **VCombobox:** select all values from pasted text (#21840) (408a95d), closes #21838
* **VDataTable:** continue sorting if dates are identical (a9d0c56), closes #21650
* **VDataTable:** don't pass slots to VSelect in mobile view (#21572) (6e61468), closes #19873
* **VDataTable:** only tab focus sortable columns (27aaaf4), closes #20899
* **VDatePicker:** add aria-labels for improved accessibility (#21635) (5e3fc2b), closes #20696
* **VDatePicker:** avoid infinite loop when first day is out of range (#21649) (a330d75)
* **VDatePicker:** correct week labels (#21648) (b46e60c), closes #21645 #21332
* **VDatePicker:** format month to always have 2 digits (#21686) (f529212), closes #21681
* **VDatePicker:** improved date comparison with `min` constraint (#21398) (421a6f6), closes #21380
* **VDatePicker:** round font-size from 13.6 to 14px (#21590) (d81a4a0)
* **VField:** fix label accessibility (#21706) (85abd80)
* **VFileInput:** avoid text overflow with long file names (#21748) (389a260), closes #21707
* **VFileUploadItem:** accept `title` slot (#21769) (fe85aa0)
* **VFileUploadItem:** apply classes, styles as props (#21752) (d6050f0), closes #21740
* **VList:** ignore invalid itemType values (4bae0bc), closes #21728
* **VList:** merge classes from itemProps (5423fbf)
* **VListItem:** keyboard navigation when list contains checkboxes (#21701) (f500c5b), closes #21516
* **VMenu:** let persistent menus coexist with regular ones (#21449) (30ac0fc), closes #20976
* **VNumberInput:** keep cursor position when typing decimal values (acc30fb)
* **VNumberInput:** only trim zeros from the end (ab2d941), closes #21828
* **VOtpInput:** only autofocus if autofocus prop is set (79bcb27)
* **VOverlay:** properly detect location flipping loop (07db6b2), closes #21564 #21551
* **VOverlay:** trigger scrollStrategy when target is a point (1146171)
* **VProgressLinear:** accept pointer events unless `clickable` is used (#21691) (a6b1136), closes #21690
* **VRipple:** support touch simulators (#20776) (9fa2870)
* **VSelect:** don't open menu on its own when items change (#21247) (339bd45), closes #21205
* **VSelectionControl:** correctly pass ripple options to directive (#21713) (87a8a3e), closes #21208
* **VSelects:** avoid error with `null` items (#21660) (dd98067)
* **VSlider:** correctly apply `thumb-color` (#21833) (b207522), closes #21832
* **VTextField:** avoid infinite focus loop (#21628) (efaaa5d), closes #21626
* **VTextField:** don't try to re-focus input on focus (#21722) (14c88df), closes #21716 #21626 #21717
* **VTimePicker:** auto width (#21613) (5d1ceab)
* **VTreeview:** activatable implies openOnClick=false (c0b7d7b)
* **VTreeview:** don't display expanded items as activated (683dc86), closes #21721 #21724
* **VTreeview:** don't select disabled children with parent (#20962) (0772bc1), closes #20386
* **VTreeview:** hide extended lines when fluid (#21798) (5728b2b), closes #21794
* **VTreeview:** modelValue reactivity (6daf53d)
* **VTreeview:** prevent checkbox deselection when mandatory (431af5f), closes #21614
* **VTreeview:** restore reactivity with computed items (107dd0c), closes #20900
* **VTreeview:** select trunk nodes on click when openOnClick=false (e6a1710), closes #21599
* **VTreeview:** set active state from router (#21644) (01c7a4f)

### :microscope: Code Refactoring

* **layout:** consoleWarn instead of error for missing layout items (34b53f1)
* **theme:** add internal methods for testing tailwind integration (abfdb77)

### :test_tube: Labs

* **VCalendar:** slot day-event not available (#21558) (d743051), closes #21341
* **VCalendar:** use adapter for day element key (#21689) (428f460), closes #21688
* **VColorInput:** ensure cancel action closes menu (#21664) (7822179), closes #21655
* **VDateInput:** align generic model type with VDatePicker (#21764) (0cfca46), closes #21751 #21753
* **VDateInput:** assign type to displayFormat function (#21684) (4446ebf), closes #21683
* **VDateInput:** avoid time values in the field (#21694) (d4efd48)
* **VHotkey:** add new component (#21598) (99c721c)
* **VIconBtn:** add button type (#21638) (dd1db74), closes #21634
* **VMaskInput:** create new component (#21519) (117443a)
* **VMaskInput:** send unmasked value to rules (#21719) (64943b3)
* **VPie:** create new component (#21176) (5f0ebca)
* **VStepperVertical:** correct avatar alignment (#21797) (6292149), closes #21792
* **VStepperVertical:** fix next/prev-text props (#21360) (11986c6), closes #21358
* **VVideo:** create new component (#21460) (936eba2), closes #5592

</details>

---

## What's Next

Next month promises to be an exciting one as we continue building momentum from July's achievements. Here's what's on the horizon:

### Community Roadmap Voting

Over the next few weeks, we'll be launching our community voting system where you can directly influence Vuetify's development priorities. This democratic approach ensures that the features you need most get the attention they deserve.

### Vuetify0 Alpha Release

We're targeting **late August** for the first alpha release of Vuetify0. This milestone will include:

* Core composable abstractions
* Initial documentation and examples

### Labs Component Stabilization

August is dedicated to refining our Labs components based on community feedback:

* **VCommandPalette**: Finalizing keyboard navigation patterns
* **VEditor**: Completing table and list formatting features
* **VCalendar**: Addressing performance optimizations and accessibility improvements
* **VMaskInput**: Expanding validation integration

Thank you for your continued support, feedback, and contributions that make all of this possible! See you next month.

---

*Stay connected with Vuetify updates through our GitHub repository, Discord community, and upcoming webinar series announcements.*
