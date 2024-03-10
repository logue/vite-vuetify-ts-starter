import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

import HelloWorld from '../HelloWorld.vue';
const vuetify = createVuetify({
  components: { components, labsComponents },
  directives,
});

global.ResizeObserver = require('resize-observer-polyfill');

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld, {
    props: { msg: 'Hello Vitest' },
    global: {
      components: {
        HelloWorld,
      },
      plugins: [vuetify],
    },
  });

  it('mount component', async () => {
    expect(HelloWorld).toBeTruthy();

    expect(wrapper.text()).toContain('Welcome to the Vuetify');
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
