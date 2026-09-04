---
layout: blog
meta:
  title: December 2025 Update
  description: December delivered Vuetify 4.0.0-alpha.0 with CSS layers and theme improvements, five v3.11.x patch releases, the Vuetify CLI public release, PWA rollout across all ecosystem products, and significant Vuetify0 progress.
  keywords: Vuetify December 2025, v4.0.0-alpha.0, Vuetify CLI, PWA, CSS layers, Vuetify0, MCP
---



# December 2025 Update

Welcome to the December 2025 Vuetify update! The year closes with a bang—**v4.0.0-alpha.0** marks the beginning of Vuetify 4's public development, while five v3.11.x patch releases keep the stable branch polished. The **Vuetify CLI** shipped its first public release, PWA support rolled out across all ecosystem products, and Vuetify0 continued its rapid evolution with 6 releases.

{ height=112 }

 John Leider •  January 12th, 2026

<PromotedEntry />

---

## Closing the Year Strong

December was our most productive month of 2025. With **522 commits** across 16 active repositories and **82 merged PRs**, the team shipped at an incredible pace. The release of v4.0.0-alpha.0 represents months of architectural planning finally landing for public testing—CSS layers, reduced breakpoints, and theme system improvements that set the stage for Vuetify 4.0 stable. Meanwhile, J-Sek continued his remarkable contribution streak with 16 PRs to the main framework, and ikushum delivered 9 PRs across components. The CLI reached public release status just in time for the new year, and every ecosystem product now supports PWA installation.

---

## Table of Contents

* [Releases](#releases)
  * [Key Improvements](#key-improvements)
* [Vuetify 4 Alpha](#vuetify-4-alpha)
* [Ecosystem Spotlight: Vuetify CLI](#ecosystem-spotlight-vuetify-cli)
  * [create-vuetify Updates](#create-vuetify-updates)
* [Framework Updates](#framework-updates)
  * [New Features](#new-features)
  * [Accessibility & Compatibility](#accessibility-compatibility)
* [Product Updates](#product-updates)
  * [Vuetify Bin](#vuetify-bin)
  * [Vuetify Play](#vuetify-play)
  * [Vuetify Issues Reporter](#vuetify-issues-reporter)
  * [Other Products](#other-products)
* [Vuetify MCP: Rate Limiting & CLI Support](#vuetify-mcp-rate-limiting-cli-support)
* [Vuetify0: Progress Update](#vuetify0-progress-update)
* [December 2025 Changelog](#december-2025-changelog)
* [What's Next](#whats-next)

---

## Releases

December delivered six Vuetify releases—five v3.11.x patches maintaining stability and the landmark **v4.0.0-alpha.0** kicking off the next major version. The v3.x branch continues receiving attention with accessibility improvements, bug fixes, and new props across multiple components.



### Key Improvements

* **[VWindow](/components/windows/)** keyboard controls for accessible navigation
* **[VList](/components/lists/)** `navigation-strategy` prop to control focused item behavior
* **[VImg](/components/images/)** attribute passthrough to underlying `<img>` element
* **[VOtpInput](/components/otp-input/)** `density` prop for compact layouts
* **[VColorInput](/components/color-input/)/[VDateInput](/components/date-input/)** `picker-props` for customizing picker appearance
* **[VDataIterator](/components/data-iterators/)** `items-length` prop for virtual scrolling support
* **[VDatePicker](/components/date-pickers/)** custom `control-height` support
* **[nested](/components/treeview/)** `branch` select strategy for hierarchical selection

View the complete list of changes in the [Full Changelog](#december-2025-changelog)

**Details:**

* v3.11.2
* v3.11.3
* v3.11.4
* v3.11.5
* v3.11.6
* v4.0.0-alpha.0

---

## Vuetify 4 Alpha

The first alpha of **Vuetify 4.0** landed on December 30th, marking the start of public development for our next major version. This release contains significant architectural changes that improve performance, reduce bundle size, and modernize the CSS architecture.



### What's New in v4.0.0-alpha.0

**CSS Layers**: Vuetify 4 uses CSS layers throughout, flattening layer names and replacing `!important` declarations with proper cascade management. This makes customization cleaner and reduces specificity conflicts.

**Theme System**: The default theme changes from `light` to `system`, respecting user preferences. Transparent color support enables more sophisticated design patterns. The `unimportant` option has been removed in favor of layers.

**Reduced Breakpoints**: Default breakpoint sizes have been adjusted for modern viewport distributions.

**Style Architecture**:

* Separate entry points allow opting out of misc styles
* CSS reset has been streamlined (removed overflow-y)
* [VRow](/api/v-row/)/[VCol](/api/v-col/) styles can be skipped when only using [VContainer](/api/v-container/) or [VSpacer](/api/v-spacer/)

**Component Updates**:

* **[VBtn](/components/buttons/)**: Default text transform removed, display converted from grid to flex
* **[VField](/api/v-field/)**: Display converted from grid to flex, append/prepend fills height
* **[VSnackbar](/components/snackbars/)**: `multi-line` prop removed in favor of CSS
* **[VSelect](/components/selects/)/[VAutocomplete](/components/autocompletes/)/[VCombobox](/components/combobox/)**: `item` renamed to `internalItem` for clarity
* **[VNumberInput](/components/number-inputs/)**: No longer clamps value on mount
* **[VDatePicker](/components/date-pickers/)**: Only emits start and end range values
* **[VForm](/components/forms/)**: Unref values in slot props
* **[VInput](/api/v-input/)**: New `indent-details` prop
* **[VListItem](/api/v-list-item/)**: Exposes `isDisabled` in slot props
* **[VCounter](/api/v-counter/)**: Inherits color (aligns with [VMessages](/api/v-messages/))

::: info

v4.0.0-alpha.0 is for testing and feedback only. Production applications should continue using v3.11.x until v4 reaches stable release.

:::

**Details:**

* v4.0.0-alpha.0 Release Notes
* Migration Guide
* Remaining Issues

---

## Ecosystem Spotlight: Vuetify CLI

<AppFigure :src="clilogo" alt="Vuetify CLI Logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify CLI Logo" />

<br>

The **Vuetify CLI** reached its first public release in December with **25 commits** across versions v0.0.5 through v0.0.7. This new tooling ecosystem streamlines project scaffolding and integrates with the broader Vuetify ecosystem.



### CLI Ecosystem Overview

The Vuetify CLI ecosystem consists of three packages that share logic via `@vuetify/cli-shared`:

**create-vuetify0** (`npm create vuetify0`) — Scaffolds new Vuetify0 projects with support for Vue or Nuxt platforms. Includes feature selection for router, pinia, and eslint. TypeScript by default.

**@vuetify/cli** (`vuetify` command) — The main CLI with multiple commands:

* `vuetify init` — Same as create-vuetify, scaffolds new projects (supports `--type vuetify0`)
* `vuetify add eslint` — Adds ESLint + eslint-config-vuetify to existing projects
* `vuetify add mcp` — Adds Vuetify MCP server config for Cursor/VS Code
* `vuetify update` — Smart updates Vuetify + related packages
* `vuetify docs` — Opens vuetifyjs.com (version-aware)
* `vuetify upgrade` — Self-upgrades the CLI

::: tabs

```bash [pnpm]
# Install the CLI globally
pnpm add -g @vuetify/cli

# Initialize a new project
vuetify init my-app

# Or create a v0 project directly
pnpm create vuetify0@latest

# Add ESLint to an existing project
vuetify add eslint

# Add MCP server configuration
vuetify add mcp

# Update Vuetify packages
vuetify update
```

```bash [yarn]
# Install the CLI globally
yarn global add @vuetify/cli

# Initialize a new project
vuetify init my-app

# Or create a v0 project directly
yarn create vuetify0

# Add ESLint to an existing project
vuetify add eslint

# Add MCP server configuration
vuetify add mcp

# Update Vuetify packages
vuetify update
```

```bash [npm]
# Install the CLI globally
npm install -g @vuetify/cli

# Initialize a new project
vuetify init my-app

# Or create a v0 project directly
npm create vuetify0@latest

# Add ESLint to an existing project
vuetify add eslint

# Add MCP server configuration
vuetify add mcp

# Update Vuetify packages
vuetify update
```

```bash [bun]
# Install the CLI globally
bun add -g @vuetify/cli

# Initialize a new project
vuetify init my-app

# Or create a v0 project directly
bun create vuetify0

# Add ESLint to an existing project
vuetify add eslint

# Add MCP server configuration
vuetify add mcp

# Update Vuetify packages
vuetify update
```

:::

### create-vuetify Updates

The **create-vuetify** scaffolding tool received **12 commits** and 4 releases in December:

**v2.8.0-beta.1** (December 30th):

* **Vuetify 4 Alpha Support**: Templates now support bootstrapping projects with Vuetify 4.0.0-alpha.0
* **Dynamic Version Replacement**: Vuetify version is now dynamically replaced in templates, making it easier to stay current

**v2.7.3** (December 20th):

* **Volar Rich Hover Hints**: Enabled by default for better IDE experience with component prop documentation

**v2.7.1-v2.7.2** (December 16th):

* **Nuxt Styles Fix**: Corrected styles loading when not using the Nuxt module
* Various maintenance updates

**Details:**

* Vuetify CLI GitHub Repository
* create-vuetify Releases
* v2.8.0-beta.1 Release Notes

---

## Framework Updates

<AppFigure :src="vuetifylogo" alt="Vuetify logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify Logo" />

<br>

December's framework work balanced new features with stability improvements. The team merged 49 PRs addressing everything from keyboard accessibility to field validation.

### New Features

**[VWindow](/components/windows/) Keyboard Controls**

The [VWindow](/components/windows/) component now supports keyboard navigation, enabling users to move between slides with arrow keys—essential for accessibility and power users.

**[VList](/components/lists/) Navigation Strategy**

A new `navigation-strategy` prop gives fine-grained control over which items receive focus during keyboard navigation. This is particularly useful for complex lists with nested content.

**[VImg](/components/images/) Attribute Passthrough**

Attributes passed to [VImg](/components/images/) now flow through to the underlying `<img>` element, enabling native image attributes like `loading="lazy"` and custom data attributes.

**[VOtpInput](/components/otp-input/) Density**

The [OTP input](/components/otp-input/) component now supports the `density` prop for compact layouts, and the `rounded` prop is properly applied to inner fields.

**Details:**

* VWindow keyboard controls PR#22430
* VList navigation-strategy PR#22328
* VImg attribute passthrough PR#22439
* VOtpInput density PR#22401

### Accessibility & Compatibility

**Forced Colors Mode**

[VColorPicker](/components/color-pickers/) now renders inner outlines correctly in Windows High Contrast Mode and other forced-colors environments, ensuring usability for users with visual impairments.

**Screen Reader Improvements**

[VTextArea](/components/textareas/) and [VSelect](/components/selects/) received accessibility improvements for better screen reader announcements, including proper ARIA attributes and field label reading.

**[VSlider](/components/sliders/) ARIA Attributes**

Slider components now correctly pass `aria-` attributes to the thumb element for assistive technology support.

**[VTooltip](/components/tooltips/) Dismissable by Default**

Tooltips are now dismissable by default, improving keyboard accessibility and touch device support.

**Fields ARIA Cleanup**

All field components received ARIA attribute cleanup for better screen reader compatibility.

**Details:**

* VColorPicker forced-colors PR#22317
* VTextArea/VSelect screen reader PR#20339
* VSlider ARIA PR#22444
* VTooltip dismissable PR#22419
* Fields ARIA cleanup PR#22418

---

## Product Updates

December saw significant updates across all Vuetify ecosystem products, with **PWA support** rolling out universally and major feature additions to Bin and Play.

### Vuetify Bin

<AppFigure :src="binlogo" alt="Vuetify Bin logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify Bin Logo" />

<br>

**41 commits** made December Bin's most active month:

* **Embeddable Bins**: New feature in testing for embedding bins in external documentation and blogs using Shiki for lighter bundles. Available to Vuetify One subscribers.



* **18 Language Support**: Expanded language support with auto-detection for pasted code
* **Public/Private Visibility**: Users can now control bin visibility with proper 403 error pages for private bins
* **Live Share Restrictions**: Limited to public bins with dashboard action
* **Accessibility Audit**: Comprehensive a11y review completed
* **PWA Support**: Install Bin as a standalone app
* **Editor Improvements**: Line wrapping enabled by default, grouped secondary AppBar actions

### Vuetify Play

<AppFigure :src="playlogo" alt="Vuetify Play logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify Play Logo" />

<br>

**23 commits** delivered key improvements to Play:

* **Multiple Templates**: Switch between project templates without losing work, with proper preservation of changes to system files



* **Editor Settings**: Customizable editor preferences
* **Visibility Toggle**: Public/private playground support
* **Version Selector**: Now includes prerelease versions for Vue and Vuetify
* **v0 Template**: Updated to presetWind4
* **PWA Support**: Install Play as a standalone app

### Vuetify Issues

<AppFigure :src="issueslogo" alt="Vuetify Issues logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify Issues Logo" />

<br>

The **Vuetify Issues** reporter received **31 commits** with significant improvements to the issue creation workflow:



**Ecosystem Projects Support**:

* Now supports non-library repositories (create-vuetify, admin, etc.)
* Repo and type query parameters for direct linking
* Project name displayed in title for ecosystem issues
* Reproduction step hidden for ecosystem projects (not applicable)
* Shows repo name instead of versions for ecosystem review

**Form Validation Improvements**:

* Required expected/actual behavior fields before save
* Steps require content before adding new ones
* New step auto-focus for better UX

**Other Updates**:

* **PWA Support**: Install as standalone app
* **"Used to work" Switch**: Available for all repos, not just Vuetify
* **New Favicon**: Fresh vissues branding
* **UI Polish**: Fixed button spacing and v-confirm-edit actions

**Details:**

* Vuetify Issues

### Other Products

* **Vuetify Snips**: New button and pagination snippets in review, improved a11y for radio groups, PWA support added
* **Vuetify Studio**: PWA support added, playground link generation updated
* **Vuetify Link**: Route handling refactored to use definePage, PWA support added

**Details:**

* Vuetify Bin
* Vuetify Play
* Vuetify Snips
* Vuetify Issues

---

## Vuetify MCP: Rate Limiting & CLI Support

<AppFigure :src="mcplogo" alt="Vuetify MCP logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify MCP Logo" />

<br>

December brought four releases to the Vuetify MCP server (v0.2.4 through v0.4.1), adding important infrastructure improvements and new capabilities.

### What's New

**Rate Limiter**: The MCP server now includes rate limiting to ensure fair usage and stability across all consumers.

**Claude Code CLI Support**: Native integration with Claude Code for seamless AI-assisted development workflows.

**update_vuetify_bin Tool**: A new tool for updating existing Vuetify bins programmatically.

**HTTP Transport Improvements**: Stateless mode improvements and auth propagation fixes.

### Getting Started

```json
{
  "mcpServers": {
    "vuetify": {
      "url": "https://mcp.vuetifyjs.com/mcp"
    }
  }
}
```

Or run locally:

```json
{
  "mcpServers": {
    "vuetify": {
      "command": "npx",
      "args": ["-y", "@vuetify/mcp"]
    }
  }
}
```

**Details:**

* Vuetify MCP GitHub Repository
* Model Context Protocol Documentation

---

## Vuetify0: Progress Update

<AppFigure :src="zerologo" alt="Vuetify0 logo" width="200" height="auto" class="mx-auto mt-4" title="Vuetify0 Logo" />

<br>

December was another strong month for Vuetify0, with **322 commits** and 6 releases (v0.0.15–v0.0.18, v0.0.20–v0.0.21). The headless meta-framework gained five new composables—including virtual scrolling and pagination primitives—along with accessibility improvements, observer enhancements, and significant documentation updates.



With these additions, v0 now provides production-ready primitives for building accessible, high-performance UI components without the styling opinions of a traditional component library.

### New Composables

December added five composables covering pagination, virtualization, and UI utilities:

**usePagination** — Full-featured pagination logic with first/prev/next/last navigation, ellipsis support for large page ranges, and computed `pageStart`/`pageStop` for efficient data slicing. Supports locale-aware formatting and customizable page sizes.

**useVirtual** — High-performance virtual scrolling that renders only visible items plus an overscan buffer. Supports dynamic or fixed item heights, bidirectional scrolling (useful for chat interfaces), scroll anchoring to maintain position across data changes, and iOS momentum scrolling. Handles 100k+ items efficiently.

**useOverflow** — Computes how many items fit in a container based on available width. Two modes: variable-width (measures each item individually, ideal for breadcrumbs) and uniform-width (samples one item, ideal for pagination buttons). Tracks container width via ResizeObserver and supports reserved space for navigation controls.

**useClickOutside** — Click outside detection for closing menus, dialogs, and popovers. Handles edge cases like portaled content and nested overlays.

**useToggleScope** — Manages Vue effect scopes based on a reactive boolean. Automatically cleans up effects when the condition becomes false—useful for conditional side effects and feature flags.

### New Components

**PaginationStatus** — An accessibility-focused component that provides `aria-live` announcements when pagination state changes. Screen readers automatically announce the current page, helping users who rely on assistive technology stay oriented. Style it with `sr-only` CSS to keep it visually hidden while remaining accessible.

### Observer Improvements

All three observer composables—useResizeObserver, useMutationObserver, and useIntersectionObserver—received enhancements:

| Feature | Description |
|---------|-------------|
| `once` option | Automatically stops observing after first callback execution |
| `isActive` return | Exposes whether the observer is currently monitoring |
| Broader targets | useIntersectionObserver accepts additional target types |

The `once` option is particularly useful for lazy-loading images or triggering one-time animations when elements enter the viewport.

### Registry Enhancements

createRegistry powers component coordination patterns like tabs, accordions, and steppers. December brought performance improvements for complex component trees:

| Feature | Description |
|---------|-------------|
| `batch()` method | Bulk register/unregister operations in a single call, reducing reindexing overhead |
| `ReadonlyMap` collection | Type changed from `Map` to `ReadonlyMap` to prevent accidental mutations |
| Deferred reindexing | Unregister operations now batch index recalculations for better performance |

These changes particularly benefit applications with deeply nested or dynamically generated component hierarchies.

### Documentation Updates

The 0.vuetifyjs.com documentation site received substantial improvements:

**AI Q&A** — An intelligent search feature that answers questions about v0 composables, patterns, and usage. Ask natural language questions like "How do I implement infinite scroll?" and get contextual answers with code examples.



* **PWA support** — Install the documentation as a standalone app for offline access. Useful when working in environments with limited connectivity.
* **Mobile improvements** — Redesigned navigation for smaller screens with proper iOS safe area support, making it easier to browse documentation on mobile devices.
* **Code blocks** — Fence titles now display file paths above code examples, and syntax highlighting was improved across all supported languages.

::: info

The v0 documentation at 0.vuetifyjs.com now includes AI-powered Q&A for finding information quickly.

:::

**Details:**

* Vuetify0 Documentation
* useVirtual
* usePagination
* useOverflow
* useClickOutside
* v0.0.15–v0.0.18, v0.0.20–v0.0.21

---

## December 2025 Changelog

The following section provides an overview of the changes made in December 2025, including new features, bug fixes, and enhancements across the Vuetify framework.

**Key Improvements:**

* CSS layers architecture in v4 for cleaner customization
* [VWindow](/components/windows/) keyboard controls for accessible slide navigation
* [VList](/components/lists/) navigation-strategy prop for focus management
* [VColorPicker](/components/color-pickers/) forced-colors mode compatibility
* [VTreeview](/components/treeview/) selection state fixes with disabled items
* [VSlider](/components/sliders/) ARIA attribute corrections
* Strict TypeScript template support

**Expand** this section to see the detailed changelog for December 2025:

<details>

### v3.11.2

**:wrench: Bug Fixes**

* **VDataTable:** hide checkbox for `mobile` without `show-select` (d297f3f), closes #22375
* **VDataTable:** hover icon should match `initial-sort-order` (7a1ae83)
* **VDatePicker:** correctly render month when using Luxon adapter (f98d9db), closes #22388
* **VHotkey:** correct sass variables import order (216b872), closes #22372
* **VNumberInput:** avoid error state when using comma separator (513e153), closes #22371
* **VSlideGroup:** provide a way to never show arrows (b76ffd5)
* **VTabs:** consistent padding for `inset` (893eb71)
* **VTabs:** keep slider narrow when used without inset (eb9477c), closes #22363
* **VTextField:** check autofocus intersection on input wrapper element (0409cde), closes #22373

**:test_tube: Labs**

* **VStepperVertical:** avoid semi-transparent items with `non-linear` (99a68e5), closes #22369

---

### v3.11.3

**:wrench: Bug Fixes**

* **fields:** clean up aria attributes (#22418) (054dbf4)
* **types:** support strict TS checks in templates (#22395) (02710a6)
* **v-ripple:** remove mousedown and keydown listeners on unmount (278a7e9)
* **VAppBar:** prevent navbar pop-up when reaching page bottom (#22224) (8da1495), closes #20352
* **VAutocomplete, VCombobox:** skip subheader for `auto-select-first` (#22402) (9edd98c), closes #22398
* **VBtn:** keep all styles within CSS layer (c794da1)
* **VColorPicker:** render inner outlines in forced-colors mode (#22317) (c61c0d3)
* **VDataTable:** selecting group should respect selectable prop (#22410) (e295fa6), closes #22409
* **VDataTable:** typo in header field `intent` » `indent` (f44b2fd)
* **VDataTableFooter:** correct placement of aria label (#22359) (137cb95), closes #20896
* **VDatePicker:** correct year and month for jalali (41067af), closes #22417
* **VDatePicker:** correct next year button disabled condition (04a4608), closes #22408
* **VHotkey:** avoid build errors when customizing VKbd sass variables (fa1fb4f), closes #22372
* **VInput:** prioritize slots over prepend/append icons (#22406) (2a998ee), closes #22332
* **VNumberInput:** clean up listeners on unmount (045bbaf)
* **VOtpInput:** apply rounded prop to inner fields (#21499) (f49803a), closes #20286
* **VOverlay:** clean up focus trap listeners and data on unmount (497ae4b), closes #22397
* **VSelect:** don't skip continuing keyboard lookup match (f1f3c45), closes #22423
* **VSelects:** no closable chips when `readonly` or `disabled` (#22368) (21c85eb), closes #22349
* **VSlider:** clean up listeners on unmount (f2621a3)
* **VTextarea:** avoid placeholder obstructing the label (27e854f), closes #22416
* **VTextArea/VSelects:** help screen readers read field labels (#20339) (04b6725), closes #19155 #19156
* **VTimePicker:** don't inherit defaults from VTextField (3ffa749), closes #22407
* **VTimePicker:** clean up listeners on unmount (60183d7)
* **VTooltip:** should be dismissable by default (#22419) (c5ae129), closes #21501
* **VVirtualScroll:** show more than 1 element when min height is 0 (#22420) (08550fd)
* **VWindow:** set transition-duration css variable (4676b6d)

**:test_tube: Labs**

* **VVideo:** clean up listeners on unmount (0d37af0)

---

### v3.11.4

**:wrench: Bug Fixes**

* **fields:** keep `inert` on root element (8dea3bc)
* **VSelect:** clear on backspace (#22435) (f90f8ab), closes #22422
* **VSelects:** restore `appendInnerIcon` rendering (#22431) (5e9fa29), closes #22429
* **VSlider:** pass `aria-` attributes to thumb element (#22444) (83b55f5), closes #22432

**:microscope: Code Refactoring**

* **styles:** replace `if()` with `@if` (5391930), closes #22421

**:test_tube: Labs**

* **VColorInput, VDateInput:** add `picker-props` (#22437) (ea6d861), closes #22436
* **VDateInput,VMaskInput:** add specific classes (#22447) (f539630), closes #22334
* **VDateInput:** make `prepend-icon` unfocusable (#22445) (c917533), closes #22333

---

### v3.11.5

**:wrench: Bug Fixes**

* **VDataTableVirtual:** show index from virtualized items (#22324) (29e3f09), closes #19108
* **VList, VTreeview:** item should be selectable when `disabled` changes (#22464) (d6ca166), closes #22366
* **VNumberInput:** respect `error` prop (69862ea), closes #22451
* **VOtpInput:** hide placeholder on focus (0852c8c)
* **VTreeview:** bypass disabled when loading selection state (#22465) (70dd313), closes #22353
* **VTreeview:** prevent selection of disabled nodes (0de4599), closes #22352

**:test_tube: Labs**

* **VDateInput:** keep focus on input when opened with year view (b58e361), closes #22323
* **VDateInput:** hide empty prepend slot (28fe71e), closes #22456
* **VDateInput:** clickable prepend icon when handler exists (776a462)
* **VStepperVertical:** restore default opacity of item title (f30a081), closes #22467

---

### v3.11.6

**:wrench: Bug Fixes**

* **VCalendar:** wrap unclamped timeToY (3b4b5e6), closes #22413
* **VCalendar:** extend start of event on following day (4f7cc6a), closes #22480
* **VColorPicker:** disable swatches (#22472) (8dbacad), closes #22471
* **VDatePicker:** accept custom `control-height` (#22479) (b47a4ce), closes #22478

---

### v4.0.0-alpha.0

**:rocket: Features**

* **display:** reduce default breakpoint sizes (#19759) (853ce33)
* **nested:** add branch select strategy (4fcb72c), closes #22404
* **styles:** always use css layers (f7123c6), closes #3400 #20232
* **styles:** flatten layer names (#22460) (47bc400), closes #22443
* **styles:** possibility to opt-out from misc styles (#22405) (77d02f3)
* **styles:** add separate entry points (#22396) (f00902c), closes #20100
* **styles:** cut down CSS reset (#20960) (ae3e8c9), closes #17633
* **styles:** remove overflow-y from reset (27868d5), closes #1197
* **theme:** change default theme to 'system' (9c8506c)
* **theme:** support transparent colors (bb49662), closes #10299
* **theme:** remove unimportant option (e8845ff)
* **VDataIterator:** add `items-length` prop (#22360) (290836c), closes #19486
* **VDatePicker:** only emit start and end range values (#20621) (eef80ad), closes #9098 #18701 #20599
* **VForm:** unref values in slot props (f92ae7a), closes #18355
* **VImg:** pass attributes to the underlying `<img>` (#22439) (71e01aa), closes #18860 #18907
* **VInput:** add `indent-details` prop (#21265) (f483092), closes #16679
* **VList:** add `navigation-strategy` to control focused item (#22328) (3815eee)
* **VListItem:** expose `isDisabled` in slot props (9d92638)
* **VNumberInput:** do not clamp value on mounted (#21826) (4b4bfa5)
* **VOtpInput:** add `density` prop (#22401) (aca7d30)
* **VSelect/Autocomplete/Combobox:** rename item to internalItem (2c1ac25), closes #18354
* **VSnackbar:** remove `multi-line` prop (#22212) (1371aba), closes #15996
* **VWindow:** add support for keyboard controls (#22430) (ab5b671), closes #11544

**:wrench: Bug Fixes**

* **styles:** skip VRow/VCol styles when using only VContainer or VSpacer (f899803)
* **theme:** re-merge default variables when themes is set (a14c763)
* **theme:** helpers should override theme base (2690877)
* **theme:** override automatic text color with classes (#22475) (59b11d5)
* **theme:** .text- classes always override color from .bg- (7edf33a), closes #21787
* **VContainer:** drop dependency on utility class (47ca5c8)
* **VCounter:** inherit color (aligns with VMessages) (#22424) (ecd07b9)
* **VField:** append/prepend should fill height (add5d2d)
* **VOverlay:** apply scrollbar offset to body and VNavigationDrawer (ec926d7)

**:microscope: Code Refactoring**

* **styles:** replace !important with layers (7484c81)
* **VBtn:** remove default text transform (#21079) (712bdd6)
* **VBtn:** convert display from grid to flex (41b7768)
* **VField:** convert display from grid to flex (#21035) (b213e3b)

</details>

## What's Next{ .mt-4 }

January kicks off with continued development on Vuetify 4, incorporating feedback from the alpha release. We're targeting additional alpha releases throughout Q1 2026 as we refine the CSS layers architecture and modernize remaining components.

The v3.11.x branch will continue receiving maintenance releases with bug fixes and minor improvements. VCommandPalette is nearing [labs](/labs/introduction/) release, and we're expanding v0 with additional headless primitives for forms and data display.

The CLI will gain additional commands for component generation and project management, while the MCP server continues to evolve with new tools for AI-assisted development.

Thank you for being part of the Vuetify community. Here's to an incredible 2026!

---

*Stay connected with Vuetify updates through our GitHub repository, Discord community, and follow @vuetifyjs for the latest announcements. The best is yet to come!*
