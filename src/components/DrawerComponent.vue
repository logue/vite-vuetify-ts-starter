<script setup lang="ts">
import type DrawerMenuItem from '@/interfaces/DrawerMenuItemInterface';

/** Drawer menu items */
const items: DrawerMenuItem[] = [
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
  {
    title: 'Disabled Item',
    icon: 'mdi-cancel',
    // empty `to` value becomes to disabled item
  },
];
</script>

<template>
  <v-list v-for="item in items" :key="item.title">
    <v-divider v-if="item.title === '-'" />
    <template v-else>
      <!-- Menu Item -->
      <v-list-item v-if="!item.items" :to="item.to" :disabled="!item.to" link>
        <template v-if="item.icon" #prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <!-- Sub menu -->
      <v-list-group v-else-if="item.items" v-model="item.active" no-action>
        <template #activator="{ props }">
          <v-list-item v-bind="props" link>
            <template v-if="item.icon" #prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
        <!-- Sub menu item -->
        <template v-for="subItem in item.items" :key="subItem.title">
          <v-divider v-if="subItem.title === '-'" />
          <template v-else>
            <v-list-item :to="subItem.to" :disabled="!subItem.to" link>
              <template v-if="subItem.icon" #prepend>
                <v-icon>{{ subItem.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>
