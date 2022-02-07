<script setup lang="ts">
import { Ref, ref } from 'vue';

/** Drawer menu items */
const items: Ref<Array<Record<string, any>>> = ref([
  {
    title: 'Test',
    icon: 'mdi-flower',
  },
]);
</script>

<template>
  <v-list>
    <v-list-item link to="/" prepend-icon="mdi-home">Home</v-list-item>
    <v-divider />
    <div v-for="item in items" :key="item.title">
      <!-- Menu Item -->
      <v-list-item
        v-if="!item.items"
        :to="item.to"
        :disabled="!item.to"
        :prepend-icon="item.icon"
        v-text="item.title"
      />
      <!-- Sub menu -->
      <v-list-group
        v-else
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template #activator>
          <v-list-item :prepend-icon="item.icon" v-text="item.title" />
        </template>
        <!-- Sub menu item -->
        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
          :disabled="!subItem.to"
          :prepend-icon="subItem.icon"
          v-text="subItem.title"
          link
        />
      </v-list-group>
    </div>
  </v-list>
</template>
