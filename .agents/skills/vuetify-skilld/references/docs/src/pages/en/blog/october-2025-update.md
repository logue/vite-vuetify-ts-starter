---
layout: blog
meta:
  title: October 2025 Update
  description: October focused on refinement, delivering focus trap improvements, component enhancements, and v0 composables progress for v3.11 and v4.0.
  keywords: Vuetify October 2025, v3.11 LTS, Focus trap, Component enhancements, v0 composables, v4.0
---



# October 2025 Update

Welcome to the October 2025 Vuetify update! This month, our team focused on refinement and reliability, delivering significant **focus trap improvements** across multiple components and advancing key features in development.

{ height=112 }

 John Leider •  November 11th, 2025

<PromotedEntry />

---

## Moving along

October's development cycle focused on polish and developer experience. We delivered critical accessibility improvements with enhanced focus trap functionality, optimized VDataTable performance for large datasets, and refined components across the board. The month also saw the launch of **Vuetify Link**, our new URL shortening service, and significant updates to the **Vuetify MCP server** with HTTP transport support, making it easier than ever to integrate Vuetify's documentation and API intelligence into AI-powered development workflows. We also made substantial progress on our **v0 composables**, laying the groundwork for the upcoming Vuetify 4.0 release.

::: success

Cool example of the month: VTreeview footer by J-Sek

:::

---

## Table of Contents

* [Releases](#releases)
  * [Key Improvements](#key-improvements)
* [Ecosystem Spotlight: Vuetify Link](#ecosystem-spotlight-vuetify-link)
* [Framework Updates](#framework-updates)
  * [Focus Trap Enhancements](#focus-trap-enhancements)
  * [Component Refinements](#component-refinements)
  * [In Development](#in-development)
* [Vuetify MCP: HTTP Transport Support](#vuetify-mcp-http-transport-support)
* [Vuetify0: Progress Update](#vuetify0-progress-update)
* [October 2025 Changelog](#october-2025-changelog)
* [What's Next](#whats-next)

---

## Releases

October delivered five releases focused on stability, performance, and accessibility. We merged numerous bug fixes across components, improved focus trap behavior, enhanced form field handling, and optimized performance for large data sets.



### Key Improvements

* Enhanced focus trap functionality across VDialog and VMenu with better invisible/inert element handling
* Performance optimizations for VDataTable with select-all improvements and reduced lag in large datasets
* Multiple VMenu fixes improving keyboard navigation, scroll behavior, and ARIA attributes
* VCombobox and VAutocomplete refinements with consistent transitions and better open/close behavior
* Accessibility improvements with forced-colors mode support for multiple components
* Labs components updates including VCalendar, VDateInput, and VMaskInput enhancements

View the complete list of changes in the [Full Changelog](#october-2025-changelog)

**Details:**

* v3.10.4
* v3.10.5
* v3.10.6
* v3.10.7
* v3.10.8

---

## Ecosystem Spotlight: Vuetify Link

<AppFigure :src="linklogo" alt="Vuetify Link logo" width="200" height="auto" class="mx-auto my-4" title="Vuetify Link Logo" />

Sharing code examples and playground demos is fundamental to how our community learns and collaborates. **Vuetify Link** is now live—a URL shortening service purpose-built for the Vuetify ecosystem. It makes sharing your playgrounds, reporting issues with reproducible examples, and showcasing your latest components effortless.

<video width="100%" height="auto" loop controls class="mb-4">
  <source src="https://cdn.vuetifyjs.com/docs/images/blog/october-2025-update/vuetify-link.mp4" type="video/mp4"></source>
</video>

Creating links is free for everyone. Vuetify One users get additional features such as redirect timer, password protection, and custom slug generation.

**Details:**

* Vuetify Link

---

## Framework Updates

<AppFigure :src="vuetifylogo" alt="Vuetify logo" width="200" height="auto" class="mx-auto my-4" title="Vuetify Logo" />

October was all about refinement and reliability. Our team focused on enhancing existing components with new features and improving the overall developer experience across the framework.

### Focus Trap Enhancements

We've made significant improvements to focus trap functionality across components, ensuring better keyboard navigation and accessibility compliance. These enhancements improve the experience for users relying on keyboard navigation and assistive technologies.

**Details:**

* PR#22105
* PR#22044

### Component Refinements

The team has been working diligently to enhance component reliability and functionality:

**Navigation & Selection**

* **VTreeview & VList**: Improved node selection reliability for more predictable behavior in complex tree structures
* **VBreadcrumbs**: Added `item-props` support to enable text truncation for long breadcrumb items

**Form Components**

* **VAutocomplete & VCombobox**: Refined menu transitions and resolved edge-case issues
* **VMenu**: Various fixes improving stability and user experience

**Data & Display**

* **VTreeview**: New footer slot plus minor bug fixes
* **VDataTable**: Multi-sort enhancements for more powerful data manipulation

**Details:**

* VTreeview PR#22130
* VBreadcrumbs PR#22213
* VAutocomplete/VCombobox PR#22144
* VMenu PR#22242
* VMenu PR#22240
* VDataTable PR#22133

### In Development

We have multiple new features and components in active development that are continuing to make progress:

#### VCommandPalette

**VCommandPalette Development**: Work continues on scoping and developing this highly-requested component. Command-driven interfaces are perfect for power users and keyboard-first workflows, and we're excited to bring this pattern to Vuetify applications.



#### VTabs Enhancements

We're working on a new **inset variant** for `VTabs`. This variant provides a more subtle tab design that works beautifully in dense layouts and secondary navigation contexts.

<video width="100%" height="auto" loop controls class="mb-4">
  <source src="https://cdn.vuetifyjs.com/docs/images/blog/october-2025-update/inset-tabs.mp4" type="video/mp4"></source>
</video>

**Details:**

* VCommandPalette PR#22217
* VList a11y PR#21444
* VTabs inset variant PR#22221

---

## Vuetify MCP: HTTP Transport Support

<AppFigure :src="mcplogo" alt="Vuetify MCP logo" width="200" height="auto" class="mx-auto my-4" title="Vuetify MCP Logo" />

October brought significant updates to the **Vuetify MCP (Model Context Protocol) server**, expanding how developers can integrate Vuetify's comprehensive documentation and API intelligence into AI-powered coding assistants like Claude Code, Cline, and other MCP-compatible tools.

### What's New

**HTTP Transport Support**: The Vuetify MCP server now supports HTTP transport in addition to the standard stdio transport. This makes it easier to deploy and connect to the server across different environments and use cases.

**Official Hosted Server**: We've launched an official hosted MCP server at **https://mcp.vuetifyjs.com**, allowing you to access Vuetify's documentation, component APIs, installation guides, and feature documentation without running a local server.

### Getting Started

To use the hosted MCP server with Claude Desktop or other MCP clients, add the following to your MCP configuration:

```json
{
  "mcpServers": {
    "vuetify": {
      "url": "https://mcp.vuetifyjs.com/mcp"
    }
  }
}
```

The Vuetify MCP server provides AI assistants with direct access to:

* **Component APIs**: Detailed prop, slot, and event documentation for all Vuetify components
* **Directive APIs**: Complete directive documentation including v-ripple, v-scroll, and more
* **Installation Guides**: Platform-specific setup instructions for Vite, Nuxt, Laravel, and others
* **Feature Guides**: In-depth documentation on theming, internationalization, accessibility, and more
* **Release Notes**: Version-specific changelogs and migration information
* **FAQ**: Frequently asked questions and common solutions

This integration enables your AI coding assistant to provide accurate, up-to-date Vuetify guidance directly within your development workflow.

**Details:**

* Vuetify MCP GitHub Repository
* HTTP Transport Commit
* Model Context Protocol Documentation

---

## Vuetify0: Progress Update

<AppFigure :src="zerologo" alt="Vuetify0 logo" width="200" height="auto" class="mx-auto my-4" title="Vuetify0 Logo" />

October was all about testing and iteration and we covered a lot of ground. All composables received a tuning pass to improve type safety and Intellisense support:



All composables now follow consistent naming conventions and patterns and we are now beginning to iterate on the component variations of each composable (where applicable). These components will marry various composables together to provide full-featured UI elements built on the v0 foundation.

We've also started to add interactive examples to the documentation site to showcase usage patterns and best practices. One component that received a lot of work last month was the **ExpansionPanel** which is now available as of the v0.0.10 release.

```html
<script lang="ts" setup>
  import { ExpansionPanel } from '@vuetify/v0'
</script>

<template>
  <ExpansionPanel.Root>
    <ExpansionPanel.Item>
      <ExpansionPanel.Activator>
        Click me
      </ExpansionPanel.Activator>

      <ExpansionPanel.Content>
        Hello from the expansion panel content!
      </ExpansionPanel.Content>
    </ExpansionPanel.Item>
  </ExpansionPanel.Root>
</template>
```

November will focus on continuing to build out components based on the v0 composables, along with additional documentation and examples as we prepare for Vuetify integration.

**Details:**

* Vuetify0 Documentation
* ExpansionPanel

---

## October 2025 Changelog

The following section provides an overview of the changes made in October 2025, including new features, bug fixes, and enhancements across the Vuetify framework.

**Key Improvements:**

* Focus trap enhancements: Better keyboard navigation, invisible/inert element handling, and aria-owns support
* Performance optimizations: Select-all optimization in VDataTable, reduced lag with large datasets
* Form field reliability: Fixed duplicated emits, improved validation rules, better field control refs
* Component polish: VMenu scroll/focus fixes, VCombobox/VAutocomplete transition improvements, VDatePicker range fixes
* Accessibility: Forced-colors mode support for VBadge, VListItem, VSkeletonLoader, and VIconBtn
* Labs updates: VCalendar scrolling fixes, VMaskInput inheritance, VDateInput min/max support

**Expand** this section to see the detailed changelog for October 2025:

<details>

### :rocket: Features

* **locationStrategies:** support CSS zoom (#21878) (32242a3), closes #20719
* **VCombobox:** add `always-filter` prop (#22093) (8853f4d), closes #22060

### :wrench: Bug Fixes

* catch querySelector errors in focusableChildren() (ae2af38), closes #22238
* **group:** avoid errors when comparing recursive items (#22246) (8ac9c67), closes #19322
* **nested:** avoid console warnings when updating items order (#21987) (1dac082), closes #20934
* **nested:** selection should react to items changes (#22236) (6bcdbea), closes #21733
* **validation:** 'number' rule should accept 0 and empty string (#22204) (1b52724), closes #22192
* **validation:** correct translation template arguments (#22146) (a8e17c9)
* **VBadge:** background highlight in forced-colors mode (#22148) (65f6bb7)
* **VBtn:** set group state for non-router links (4eeb514), closes #22085
* **VChipGroup:** disable auto-scroll to the last selected (360203a), closes #22223
* **VChipGroup:** support `center-active` (#22050) (4a95697), closes #22046
* **VCombobox:** open menu when `chips` and typing after clear (d200f22)
* **VCombobox:** show full list on reopen unless `always-filter` is used (83d0073)
* **VCombobox, VAutocomplete:** avoid glitches when opening with click (9a1dd83), closes #22228
* **VAutocomplete/VCombobox:** consistent open/close transition (#22144) (96f6479)
* **VConfirmEdit:** deeply unwrap refs before cloning values (a507171), closes #22232
* **VDataTable:** avoid lag when selecting rows in large tables (#22163) (92f8a3c), closes #21767
* **VDataTable:** optimize select-all performance (#22252) (2ad1a38), closes #19447
* **VDatePicker:** correct range for `allowed-dates` (#22167) (e678f0e), closes #22160
* **VDatePicker:** correct range selection for Luxon adapter (20b2bf4), closes #22262
* **VDatePicker:** return correct range for DST (#22187) (a3ddcf1), closes #22186
* **VDialog:** fix focus trap when tabbing forward (#22101) (50a150b), closes #21945
* **VDialog:** focus trap should ignore invisible and inert elements (#22105) (adf3f91), closes #18400
* **VDivider:** inherit color in colored containers (bb54a7d)
* **VField:** missing `controlRef` assignment (#22171) (b89f568), closes #22034
* **VFileInput, VFileUpload:** avoid invalid `accept` when not defined (e6c39bc), closes #22131
* **VKbd:** use `$body-font-family` as default (3f61102)
* **VListItem:** correct role when item is a link (#22137) (80e154b), closes #22086
* **VListItem:** respect link & canvas colors in forced-colors mode (#22032) (84a7bff)
* **VMenu:** add aria-owns to activator (#22240) (975a18c), closes #22226
* **VMenu:** avoid scrolling to the off-screen menu (#22044) (d1dafff), closes #21775 #20569 #21015 #16819
* **VMenu:** ignore focus on root element (fe1214f), closes #22263
* **VMenu:** keep open with keyboard and open-delay="0" (#22242) (8e810e5), closes #21591
* **VNumberInput:** align stacked controls in underlined variant (#22185) (e10ffea), closes #22184
* **VNumberInput:** allow typing negative decimal values with a comma separator (#22199) (f0fec8f), closes #22183
* **VNumberInput:** emit pasted value without waiting for blur (6034a73), closes #22182
* **VOverlay:** `stick-to-target` content visible until target overflows (#22233) (0e1dff0), closes #22055
* **VProgressCircular:** hide overflow to avoid height changes (#22245) (d5cfb7b), closes #22244
* **VRangeSlider:** inherit readonly/disabled from form (d071e24), closes #22054
* **VSelect:** item checkbox gets out of sync (#22181) (f257802)
* **VSkeletonLoader:** accept scoped styles (#22201) (c20031b), closes #22198
* **VSkeletonLoader:** render background in forced-colors mode (#22216) (26e0b6d)
* **VSlider:** prevent thumb movement when disabled mid-interaction (#22257) (4506459), closes #22248
* **VTabs:** correct link state in Nuxt app (7068ce1), closes #22188
* **VTextarea:** mask should not clip scrollbar (#22001) (e8e7234), closes #21283
* **VTextField:** keep counter in one line (78e053f), closes #19620
* **VTextField, VCombobox:** avoid duplicated emits on clear (#22219) (3e92de3), closes #21417
* **VTreeview:** pass `indent-lines` to `header` slot (8e964c7)
* **VVirtualScroll:** scroll to last element (#22166) (1cc009f), closes #20931
* **VWindow:** fix exception due to missing scrollable parent in unit test (7b122b7)
* **VWindow:** Maintain scroll position on window change (#22191) (fb7d36b)

### :arrows_counterclockwise: Reverts

* Revert "fix(VOverlay): ignore mouseenter events from touch devices" (d448e0e), closes #17640 #22237

### :test_tube: Labs

* **VCalendar:** avoid selecting day button (da4f99a), closes #22141
* **VCalendar:** import directives (1c7896d), closes #22122
* **VCalendar:** use scrollAreaRef from base (#22253) (16dc1d2), closes #22251
* **VColorInput:** avoid VField, VInput props leaking to VPicker (14b74d1)
* **VDateInput:** apply min/max to text input (#22196) (201e6d2), closes #22179
* **VDateInput:** avoid `color` prop leaking to VPicker (6bddea1)
* **VDateInput:** avoid VField, VInput props leaking to VPicker (253e75e)
* **VIconBtn:** render interaction highlights in forced-colors mode (#22211) (37bd57d)
* **VMaskInput:** handle null value when clearing input (#22175) (46e3a84), closes #22174
* **VMaskInput:** inherit class and style (#22247) (01f5e6f)
* **VPie:** consistent avatar size in tooltip (6cefd46)

</details>

## What's Next{ .mt-4 }

November brings us closer to the Vuetify v3.11 release as we continue stabilizing the framework and polishing components. Work continues on v0 composables with expanded documentation and integration testing, while in-development features like VCommandPalette and the VTabs inset variant move toward completion.

The Vuetify MCP server will continue evolving based on community feedback, and we're exploring additional AI-powered developer tools to streamline the Vuetify development experience. As always, your bug reports, feature requests, and community contributions drive our roadmap forward.

Thank you for being part of the Vuetify community. See you in November!

---

*Stay connected with Vuetify updates through our GitHub repository, Discord community, and follow @vuetifyjs for the latest announcements. The best is yet to come!*
