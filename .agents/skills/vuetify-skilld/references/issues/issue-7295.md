---
number: 7295
title: "[Feature Request] Optimize controls for test automation"
type: docs
state: open
created: 2019-05-26
url: "https://github.com/vuetifyjs/vuetify/issues/7295"
reactions: 25
comments: 22
labels: "[T: enhancement, S: needs docs update, testing]"
---

# [Feature Request] Optimize controls for test automation

### Problem to solve
Test automation is key for DevOps. Whereas most (if not all) vuetify-components **are** automatable with selenium, ranorex, tosca & co, some do make live of a test automator unnecessary hard.
The wish is: make each component in every configuration as easy automatable as possible.

### Proposed solution
E.g. a select box:
```
v-select  id="contest_persons_groups" :items="registrationtypes" v-model=editedItem.type
                              label="Einzelperson oder Gruppe" item-text="value" item-value="ID"></v-select>
```
results in the following html code:
```
<div role="combobox" class="v-input v-text-field v-select v-input--is-label-active v-input--is-dirty v-input--is-focused theme--light primary--text">
    <div class="v-input__control">
        <div class="v-input__slot">
            <div class="v-select__slot">
                <label for="contest_persons_groups" class="v-label v-label--active theme--light primary--text" style="left: 0px; right: auto; position: absolute;">Einzelperson oder Gruppe</label>
                <div class="v-select__selections">
                    <div class="v-select__selection v-select__selection--comma">Einzelperson</div>
LOOK HERE -->         <input id="contest_persons_groups" readonly="readonly" type="text" autocomplete="on" aria-readonly="false">**
                </div>
                <div class="v-input__append-inner">
                    <div class="v-input__icon v-input__icon--append"><i aria-hidden="true" class="v-icon fas fa-caret-down theme--light primary--text"></i></div>
                </div>
            </div>
            <div class="v-menu"></div>
        </div>
        <div class="v-text-field__details">
            <div class="v-messages theme--light primary--text">
                <div class="v-messages__wrapper"></div>
            </div>
        </div>
    </div>
</div>
```
The id went to the input which is not clickable, as it is readonly. You had to sol...

---

## Top Comments

**@johnleider** [maintainer] (+5):

Just an update, this issue is currently in progress and will be resolved as part of a patch release under v2.3.

**@hcderaad** (+7):

> Just an update, this issue is currently in progress and will be resolved as part of a patch release under v2.3.

Thanks for your work on this. Is there any ETA on this issue? 

**@yuwu9145** [maintainer] (+1):

Need a solution as well for selenium end to end testing