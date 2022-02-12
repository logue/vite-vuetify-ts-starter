<script setup lang="ts">
import { Ref, ref } from 'vue';

/** Drawer menu items */
const items: Ref<Array<Record<string, any>>> = ref([
  {
    title: 'About',
    icon: 'mdi-flower',
    to: { name: 'About' },
  },
]);
</script>

<template>
  <v-list>
    <v-list-item link :to="{ name: 'Home' }" prepend-icon="mdi-home">
      Home
    </v-list-item>
    <v-divider />
    <div v-for="item in items" :key="item.title">
      <!-- Menu Item -->
      <v-list-item
        v-if="!item.items"
        :to="item.to"
        :disabled="!item.to"
        :prepend-icon="item.icon"
        link
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
          link
          v-text="subItem.title"
        />
      </v-list-group>
    </div>
  </v-list>
</template>
