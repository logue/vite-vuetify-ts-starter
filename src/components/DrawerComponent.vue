<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  setup() {
    // display drawer menu
    const items: Ref<Array<Record<string, any>>> = ref([]);
    return {
      items,
    };
  },
});
</script>

<template>
  <v-list>
    <v-list-item link to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <div v-for="item in items" :key="item.title">
      <!-- メニュー項目 -->
      <v-list-item v-if="!item.items" :to="item.to" :disabled="!item.to">
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <!-- サブメニュー -->
      <v-list-group
        v-else
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>
        <!-- サブメニュー項目 -->
        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
          :disabled="!subItem.to"
          link
        >
          <v-list-item-icon v-if="subItem.icon">
            <v-icon v-text="subItem.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>
