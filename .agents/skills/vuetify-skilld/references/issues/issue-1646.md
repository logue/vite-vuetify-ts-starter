---
number: 1646
title: "[Feature Request] Date Range Picker"
type: question
state: closed
created: 2017-09-09
url: "https://github.com/vuetifyjs/vuetify/issues/1646"
reactions: 264
comments: 46
labels: "[help wanted, T: feature, C: New Component, C: VDatePicker]"
---

# [Feature Request] Date Range Picker



A component that facilitates the selection of a pair of dates, which can be implemented as generic start and end dates.

### What will it allow you to do that you can't do today?

The current `v-date-picker` only allows for selection of a single date at a time. A date range picker will facilitate the selection of a pair of dates.

### How will it make current work-arounds straightforward?

Currently two separate `v-date-picker`s will have to be used with code to facilitate synchronising their dates. Here's an example of a crude workaround utilising `v-date-picker` that I have implemented for a recent project:



### Inspiration

Element UI's datepicker's functionality serves as inspiration:



Specific features requested:

- Displaying more than one calendar month at a time
- Synchronised paging of months
- Scoped slots for save and cancel, and scoped slots for predefined actions and date ranges (eg to add action buttons to select "next 30 days",  "last year", etc)




---

## Top Comments

**@renztoygwapo** (+31):

any updates for the date picker range request?

**@praveenpuglia** (+16):

This may seem like promoting it but till the time a fully built one comes in vuetify, I made up my own solution. It's not perfect but it does the job. 

Feel free to help it make better. :)

https://github.com/praveenpuglia/vuetify-daterange-picker

**@jmauerhan** (+15):

I'd like this for time ranges as well!