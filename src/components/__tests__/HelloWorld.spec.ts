import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

// import { components } from '../../plugins/vuetify';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld, {
    // global: { plugins: [vuetify] },
    props: { msg: 'Hello Vitest' },
  });

  it('mount component', async () => {
    expect(HelloWorld).toBeTruthy();

    // const img = wrapper.findComponent(components.VImg);
    // expect(img).toBeTruthy();

    expect(wrapper.text()).toContain('Welcome to the Vuetify');
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
