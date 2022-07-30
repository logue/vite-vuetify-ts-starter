/**
 * Vitest setup function
 */
export async function setup() {
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  };

  console.log('📝 vitest globalSetup2.');
  // console.log("CSS.support:" + CSS.supports("selector(:focus-visible)"));
}

/**
 * Vitest Teardown function
 */
export async function teardown() {
  console.log('📝 vitest globalTeardown');
}
