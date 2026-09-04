---
number: 7836
title: "[Feature Request] v-file-input: Allow drag and drop support"
type: other
state: closed
created: 2019-07-15
url: "https://github.com/vuetifyjs/vuetify/issues/7836"
reactions: 69
comments: 9
---

# [Feature Request] v-file-input: Allow drag and drop support

### Problem to solve
Allows dragging files from local computer onto component.

### Proposed solution
Allow drag and drop of files from local computer onto component.



---

## Top Comments

**@FloPrey** (+92):

For those who don't want to wait till this is in an official version, I just figured out how to achieve this quite easily.

Just add this to either the parent element of the v-file-input component or any other html-element where a file should be droppable:

`v-cloak @drop.prevent="addDropFile" @dragover.prevent`

And in the `addDropFile` function just access the dataTransfer object and set it to the same model as your v-file-input:

`addDropFile(e) {
      this.file = e.dataTransfer.files[0];
    }`

Hope this helps!

**@ivanvorona** (+47):

thank you @FloPrey - it works great. For those who need multiple files, addDropFile function should look like below.
It actually works for both single and multiple files.
```     
addDropFile(e) {
      this.files = Array.from(e.dataTransfer.files);
      },
```

**@MajesticPotatoe** [maintainer] (+14):

drag-and-drop functionality shouldn't be limited to just `v-file-input`. It should be available in a much broader scope as it can be applied to many components as well as enhance future components (for example having draggable/droppable layouts, dropzones, drag and drop lists, file input / file-upload).

@Raullllll We are currently not actively working on it, but it is a planned feature. We would enterain a draft for it in a broader scope, fine tune it, and get it to be a solid feature (and then we can start looking to adding it into components). Feel free to reach out to us on [Discord](htt...