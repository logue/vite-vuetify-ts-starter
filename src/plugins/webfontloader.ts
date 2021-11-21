/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */
export async function loadFonts(): Promise<void> {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ 'webfontloader'
  );
  // eslint require-jsdoc: off
  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  });
}
