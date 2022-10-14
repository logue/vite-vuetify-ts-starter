import webFontLoader, { load } from 'webfontloader';
/**
 * Webfont loader
 *
 * @see {@link https://github.com/typekit/webfontloader | Webfontloader documentation}
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

  /** Webfont Config */
  const WebFontConfig = {
    google: {
      families: [
        'Roboto:100,300,400,500,700,900&display=swap',
        /*
        // if you use Noto Sans, replace bellow lines.
        'Noto+Sans:100,300,400,500,700,900&display=swap',
        'Noto+Sans+JP:100,300,400,500,700,900',
        'Noto+Sans+KR:100,300,400,500,700,900',
        'Noto+Sans+Mono:100,300,400,500,700,900',
        */
        // Emoji Fix
        'Noto+Colr+Emoji+Glyf:400',
      ],
    },
    active: () => {
      sessionStorage.fonts = true;
    },
    inactive: () => {
      sessionStorage.fonts = false;
    },
  };

  if (typeof webFontLoader === 'object' || !sessionStorage.fonts) {
    load(WebFontConfig);
  }
}
