/**
 * Vitest setup function
 */
export function setup(): void {
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
export function teardown(): void {
  console.log('📝 vitest globalTeardown');
}
