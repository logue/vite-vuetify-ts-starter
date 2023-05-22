/**
 * Vuetify3 Plugin
 */
// @ts-expect-error
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as labs from 'vuetify/labs/components';
// Translations provided by Vuetify
import { en } from 'vuetify/locale';

// Misc
import { loadFonts } from '@/plugins/webfontloader';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

await loadFonts();

/**
 * Vuetify Components
 *
 * Notice: This variable is used during development to load all components to speed up the display
 *         and to reduce the size during build.
 *
 * @see {@link https://vuetifyjs.com/en/labs/introduction/}
 */
const vuetifyComponents: VuetifyOptions = import.meta.env.DEV
  ? {
      // For development
      components: {
        components,
        ...labs,
      },
      directives,
    }
  : {
      // For production
      components: {
        components,
        ...labs,
      },
    };

export default createVuetify({
  ...vuetifyComponents,
  ...{
    // Global configuration
    // https://next.vuetifyjs.com/en/features/global-configuration/
    /*
  defaults: {
    global: {
      ripple: false,
    },
    VSheet: {
      elevation: 4,
    },
  },
  */
    // Icon Fonts
    // https://next.vuetifyjs.com/en/features/icon-fonts/
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    // Internationalization (i18n)
    // https://next.vuetifyjs.com/en/features/internationalization/#internationalization-i18n
    locale: {
      locale: 'en',
      fallback: 'en',
      messages: { en },
    },
    // Theme
    // https://next.vuetifyjs.com/en/features/theme/
    theme: {
      defaultTheme: 'light',
    },
  },
});

// Export for test.
export { components, directives };
