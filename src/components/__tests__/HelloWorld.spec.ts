import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import HelloWorld from '../HelloWorld.vue';

import vuetify from '@/plugins/vuetify';

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
