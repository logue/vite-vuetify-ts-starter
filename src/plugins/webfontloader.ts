/**
 * Plugins/webfontloader.js
 *
 * Webfontloader documentation: https://github.com/typekit/webfontloader
 */
export async function loadFonts(): Promise<void> {
  /** dns-prefetch */
  const prefetch = document.createElement('link');
  prefetch.rel = 'dns-prefetch';
  prefetch.href = '//fonts.googleapis.com';
  document.head.appendChild(prefetch);

  /** Preconnect */
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  document.head.appendChild(preconnect);

  /** Loading Webfont */
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ 'webfontloader'
  );

  /** Webfont Config */
  const WebFontConfig = {
    google: {
      families: [
        'Roboto:100,300,400,500,700,900&display=swap',
        /*
        // if you use Noto Sans, replace bellow lines.
        'Noto+Sans:100,300,400,500,700,900',
        'Noto+Sans+JP:100,300,400,500,700,900',
        'Noto+Sans+KR:100,300,400,500,700,900',
        'Noto+Colr+Emoji+Glyf:100,300,400,500,700,900',
        'Noto+Sans+Mono:100,300,400,500,700,900',
        */
      ],
    },
    active: () => {
      sessionStorage.fonts = true;
    },
  };
  if (typeof webFontLoader === 'object') {
    webFontLoader.load(WebFontConfig);
  }
}
