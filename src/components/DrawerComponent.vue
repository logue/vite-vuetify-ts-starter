<script setup lang="ts">
import { ref, type Ref } from 'vue';

/** Drawer menu items */
const items: Ref<Array<Record<string, any>>> = ref([
  {
    title: 'About',
    icon: 'mdi-information',
    to: { name: 'About' },
  },
]);
</script>

<template>
  <v-list nav dense density="compact">
    <v-list-item link :to="{ name: 'Home' }">
      <v-list-item-avatar left>
        <v-icon>mdi-home</v-icon>
      </v-list-item-avatar>
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
    <v-divider />
    <div v-for="item in items" :key="item.title">
      <!-- Menu Item -->
      <v-list-item v-if="!item.items" :to="item.to" :disabled="!item.to" link>
        <v-list-item-avatar v-if="item.icon" left>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-title v-text="item.title" />
      </v-list-item>
      <!-- Sub menu -->
      <v-list-group v-else v-model="item.active" no-action>
        <template #activator>
          <v-list-item link>
            <v-list-item-avatar v-if="item.icon" left>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </template>
        <!-- Sub menu item -->
        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
          :disabled="!subItem.to"
          link
        >
          <v-list-item-avatar v-if="item.icon" left>
            <v-icon v-text="subItem.icon" />
          </v-list-item-avatar>
          <v-list-item-title v-text="subItem.title" />
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>
