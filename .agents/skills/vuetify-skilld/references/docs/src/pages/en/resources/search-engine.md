---
meta:
  title: Search Engine
  description: Add Vuetify as a search engine to your Chrome browser for quick access to the documentation
  keywords: search engine, vuetify search engine, vuetify chrome search engine, vuetify chrome extension
related:
  - /getting-started/installation/
  - /introduction/why-vuetify/
---

# Search engine

Add Vuetify as a browser search engine for quick access to the documentation.

<PageFeatures />

<PromotedEntry />

## Setup

The Vuetify documentation supports being a search engine for your browser. This allows you to query directly from the url bar without having to navigate to the site first. To add Vuetify as a search engine, follow the steps below:

### For Chrome

1. Open Chrome settings
  
2. Search for "Manage search engines and site search"
  
3. Scroll down to "Site search" and click the <v-kbd>Add</v-kbd> button to add a new search engine
  
4. Enter the following information into the "Add search engine" dialog:

* Search engine: `Vuetify` { .ms-4 }
* Shortcut: `vt` (or whatever you prefer) { .ms-4 }
* URL with %s in place of query: `https://vuetifyjs.com/?search=%s` { .ms-4 }

5. Hit the <v-kbd>Add</v-kbd> button to save the search engine
6. Open your browster and type `vt` into the url bar followed by a space or tab:
  
7. Type your search query and hit enter to search the Vuetify documentation
  

### For Edge

1. Open Edge Settings
  
2. Search for "Address bar and search"
  
3. Click the <v-kbd>Add</v-kbd> button to add a new search engine
  
4. Entry the following information into the "Add search engine" dialog:

* Search engine: `Vuetify` { .ms-4 }
* Shortcut: `vt` (or whatever you prefer) { .ms-4 }
* URL with %s in place of query: `https://vuetifyjs.com/?search=%s` { .ms-4 }



5. Hit the <v-kbd>Add</v-kbd> button to save the search engine
6. Open your browster and type `vt` into the url bar followed by a space or tab:
  
7. Type your search query and hit enter to search the Vuetify documentation
  

### For Firefox

Vuetify documentation website includes `/search.xml` with OpenSearch description that allows Firefox users to add a custom search engine. If you don't see an option in the address bar you might need to restore dedicated search field (it can be hidden afterwards).

**Note**: when using browser based on Firefox (like Zen or Waterfox) please check the settings page first as they might include <v-kbd>Add</v-kbd> button under the list of enabled search engines. When present, you can follow regular instructions for Chrome.
