import { load } from 'webfontloader';
/**
 * Webfont loader
 *
 * @see {@link https://github.com/typekit/webfontloader | Webfontloader documentation}
 */
export async function loadFonts(): Promise<void> {
  // https://www.igvita.com/2015/08/17/eliminating-roundtrips-with-preconnect/
  /** dns-prefetch */
  const prefetch = document.createElement('link');
  prefetch.rel = 'dns-prefetch';
  prefetch.href = '//fonts.googleapis.com';
  document.head.appendChild(prefetch);

  /** Preconnect */
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  preconnect.crossOrigin = 'crossorigin';
  document.head.appendChild(preconnect);

  // WebFont loader Promise fix
  // https://github.com/typekit/webfontloader/issues/359#issuecomment-956395022
  await new Promise<void>(resolve => {
    load(
      /** Webfont Config */
      {
        google: {
          families: [
            'Roboto:100,300,400,500,700,900',
            'Roboto+Mono:100,300,400,500,700,900',
            /*
            // if you use Noto Sans, replace bellow lines.
            'Noto+Sans:100,300,400,500,700,900',
            'Noto+Sans+JP:100,300,400,500,700,900',
            'Noto+Sans+KR:100,300,400,500,700,900',
            'Noto+Sans+Mono:100,300,400,500,700,900',
            */

            // Emoji Fix
            // (Only put `display=swap` on the last line.)
            'Noto+Color+Emoji&display=swap',
          ],
        },
        active: () => {
          resolve();
        },
      }
    );
  });
}
