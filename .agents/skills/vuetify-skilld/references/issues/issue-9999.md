---
number: 9999
title: "[Bug Report] warning with VueJS 2.6.11"
type: bug
state: closed
created: 2019-12-18
url: "https://github.com/vuetifyjs/vuetify/issues/9999"
reactions: 136
comments: 41
labels: "[T: bug, upstream, C: VCalendar, C: VIcon]"
---

# [Bug Report] warning with VueJS 2.6.11

### Environment
**Vuetify Version:** 2.1.15
**Vue Version:** 2.6.11
**Browsers:** Chrome 79.0.3945.79
**OS:** Linux x86_64

### Steps to reproduce
Use a `VCalendar`

https://codepen.io/pen/?&editable=true&editors=101

### Expected Behavior
No warning expected

### Actual Behavior
A warning is displayed:

```
[Vue warn]: The .native modifier for v-on is only valid on components but it was used on <div>.

found in

---> <VCalendarMonthly>
       <VCalendar>
         <VSheet>
           <VApp>
             <Root>
```

### Reproduction Link
<a href="https://codepen.io/sshenron/pen/povRRgj?&editable=true&editors=101#anon-signup" target="_blank">https://codepen.io/sshenron/pen/povRRgj?&editable=true&editors=101#anon-signup</a>

### Other comments
No warning with VueJS in 2.6.10.




---

## Top Comments

**@saidattax** (+46):


Not a workaround, but just too hide it: 

It was too annyoing so I went into the vue folder in node_modules, project search and removed the following 

```
// removed this line
warn(("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),context);
```

**@Mondal10** (+39):

Although the warning was intentional as mentioned above by @icleolion. We can handle the Vue Warnings from `main.js` something like this
```js
const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}
```

**Not the best way** ...

**@icleolion** (+18):

Seeing this also on VIcon

```
[Vue warn]: The .native modifier for v-on is only valid on components but it was used on <svg>.

found in

---> <VIcon>
       <VListItem>
         <RouterLink>
           <VList>
             <ThemeProvider>
               <VMenu>
```

I'm assuming it's related to https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VIcon/VIcon.ts#L194