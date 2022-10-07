import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

describe('HelloWorld.ts', () => {
  it('mount component', async () => {
    const vuetify = createVuetify({ components, directives });

    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld as any, {
      global: {
        plugins: [vuetify],
      },
    });

    const img = wrapper.findComponent(components.VImg);
    expect(img).toBeTruthy();

    expect(wrapper.text()).toContain('Welcome to the Vuetify');
  });
});
