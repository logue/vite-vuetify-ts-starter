<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

/** Drawer Menu Item Interface */
interface Item {
  /** Item Name */
  title: string | '-';
  /** Item Icon */
  icon?: string;
  /** Router Location */
  to?: RouteLocationRaw;
  /** is active */
  active?: boolean;
  /** Sub Items */
  items?: Item[];
}

/** Drawer menu items */
const items: Ref<Item[]> = ref([
  {
    title: 'Home',
    icon: 'mdi-home',
    to: { name: 'Home' },
  },
  {
    title: '-', // Divider
  },
  {
    title: 'About',
    icon: 'mdi-information',
    to: { name: 'About' },
  },
]);
</script>

<template>
  <v-list v-for="item in items" :key="item.title">
    <v-divider v-if="item.title === '-'" />
    <template v-else>
      <!-- Menu Item -->
      <v-list-item v-if="!item.items" :to="item.to" :disabled="!item.to" link>
        <template #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <!-- Sub menu -->
      <v-list-group v-else v-model="item.active" no-action>
        <template #activator>
          <v-list-item link>
            <template #prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <!-- Sub menu item -->
        <template v-if="item.items">
          <v-divider v-if="item.title === '-'" />
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.to"
            :disabled="!subItem.to"
            link
          >
            <template #prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>
