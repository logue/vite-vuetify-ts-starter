---
number: 2384
title: "[Feature Request] Snackbar queue"
type: feature
state: closed
created: 2017-10-31
url: "https://github.com/vuetifyjs/vuetify/issues/2384"
reactions: 236
comments: 51
labels: "[T: feature, framework, C: VSnackbar, P: elite sponsor, C: VSnackbarQueue]"
---

# [Feature Request] Snackbar queue

### New Functionality
Currently it is not easy to handle interaction of multiple snackbar messages. They can overlap and hide each other. Moreover, because they are added as components inside other components, if parent component is removed (for example, because of a route change), snackbar message also disappears or is even not shown.

### Improvements
I would propose that there is a global queue of snackbar messages. Maybe by sending a Vue event. Some options could then be to display messages one after the other, or display them stacked, up to some number.

### Bugs or Edge Cases it Helps Avoid
Currently it seems one has to manually implement whole logic how to handle interaction between multiple snackbar messages.

EDIT: I have made a NPM package with this functionality @tozd/vue-snackbar-queue.


    

---

## Top Comments

**@KaelWD** [maintainer] (+39):

I think it'd make sense to allow the `v-snackbar` to handle the message queue internally. 

**@nekosaur** [maintainer] (+25):

The reason for not currently supporting multiple snackbar messages is that MD spec specifies that only one snackbar should be displayed at a time.

However, several people have made similar requests previously. And I think there is some merit to at least include basic support for displaying consecutive snackbar messages. Not a fan of providing a global queue in vuetify though.

Will leave this open for discussion.

**@tafel** (+20):

One could create a component (say SnackDisplayer) and, using Vuex and stores, displaying the snackbar outside of any component (well... except the 1st level component containing the v-app tag).

I tried this with a quite successful result. Here is a fiddle that demonstrate this:
http://jsfiddle.net/13uc6mu5/

With this configuration (check fiddle source), one can call `this.$store.commit('msg/set', { message: 'hello' })` in any component and the snack pop up.

One thing that can be improved is indeed the possibility to have consecutive snackbars.