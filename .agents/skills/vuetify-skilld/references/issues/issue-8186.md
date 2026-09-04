---
number: 8186
title: "[Feature Request] Allowing to customize group keyword in column header when Grouping Rows In Datatable"
type: question
state: open
created: 2019-07-30
url: "https://github.com/vuetifyjs/vuetify/issues/8186"
reactions: 28
comments: 10
labels: "[help wanted, T: feature, S: maybe, C: VDataTable]"
---

# [Feature Request] Allowing to customize group keyword in column header when Grouping Rows In Datatable

### Problem to solve
Instead of text, I want to add an Icon, without overriding the entire header slot & re-writing the sort and other column logic.

### Proposed solution
The Expand Group/Collapse Group Icons in table body & Group keyword in column header should be customizable allowing text and icons, to be changed. 
Currently, there are slots for group header & summary but, I want to just change a few labels. Maintaining the default functionality



---

## Top Comments

**@johnleider** [maintainer] (+1):

> You can customize the "Group" column header text by using the #header.data-table-group slot. Here's how you can do it:
> 
>   <v-data-table
>     v-if="dataset"
>     :group-by="[{ key: '...'  }]"
>   >
>     <template #header.data-table-group>
>       {{ t('group') }}
>     </template>
>   </v-data-table>
> This approach allows you to define the header text for the group column as needed. It would be helpful if this solution were added to the official documentation for better visibility.

@eesayas @MajesticPotatoe could this be an example in the docs?

**@johnleider** [maintainer]:

@nekosaur Do you have a target milestone for this?

**@bmv87**:

I still see the same problem with the grouping switcрher localization in v-data-table-header-desktop component.
Can anyone make the following changes to at least fix the localization behavior?

Need edit method genGroupByToggle in v-data-table-header-desktop component and need add to locales modules localized values for key $vuetify.dataTable.ariaLabel.groupText
```
genGroupByToggle: function genGroupByToggle(header) {
      var _this = this;
      var groupKey ='$vuetify.dataTable.ariaLabel.groupText'
      var groupBtnText = _this.$vuetify.lang.t(groupKey); 

      if (groupBtnText === groupKey) {
         groupBtnText = 'group'
      }
      return this.$createElement('span', {
        on: {
          click: function click(e) {
            e.stopPropagation();

            _this.$emit('group', header.value);
          }
        }
      }, [groupBtnText]);
    },
```...