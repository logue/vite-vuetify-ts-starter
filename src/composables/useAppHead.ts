import { computed, onMounted, type ComputedRef } from 'vue';

import { useTheme } from 'vuetify';

/**
 * Manage document-level head values used by the app shell.
 */
export const useAppHead = (
  title: string,
  isDark: ComputedRef<'dark' | 'light'>
): { themeColor: ComputedRef<string> } => {
  const theme = useTheme();

  const themeColor: ComputedRef<string> = computed(() => {
    const primary = theme.computedThemes.value?.[isDark.value]?.colors?.primary;
    return typeof primary === 'string' ? primary : '#1976D2';
  });

  onMounted(() => {
    document.title = title;
  });

  return { themeColor };
};
