<script setup lang="ts">
import { Ref, ref } from 'vue';

/** Drawer menu items */
const items: Ref<Array<Record<string, any>>> = ref([]);
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
      <!-- Menu Item -->
      <v-list-item v-if="!item.items" :to="item.to" :disabled="!item.to">
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
      <!-- Sub menu -->
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
        <!-- Sub menu item -->
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
