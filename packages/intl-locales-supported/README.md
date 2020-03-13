# @f-fjs/intl-locales-supported

Utility to help you determine if your runtime has modern Intl API & locales support. This specifically checks for `Intl.NumberFormat`, `Intl.PluralRules` & `Intl.RelativeTimeFormat` and is being used by `react-intl`.

[![npm Version](https://badgen.net/npm/v/@f-fjs/intl-locales-supported)](https://www.npmjs.org/package/@f-fjs/intl-locales-supported)
![size](https://badgen.net/bundlephobia/minzip/@f-fjs/intl-locales-supported)

## Usage

```js
const areIntlLocalesSupported = require('@f-fjs/intl-locales-supported');

const localesMyAppSupports = [
  /* list locales here */
];

// Determine if the built-in `Intl` has the locale data we need.
if (
  !areIntlLocalesSupported(localesMyAppSupports, [
    Intl.PluralRules,
    Intl.RelativeTimeFormat,
  ])
) {
  // `Intl` exists, but it doesn't have the data we need, so load the
  // polyfill and replace the constructors we need with the polyfill's.
  require('@f-fjs/intl-pluralrules/polyfill');
  require('@f-fjs/intl-pluralrules/dist/locale-data/de'); // Load de

  require('@f-fjs/intl-relativetimeformat/polyfill');
  require('@f-fjs/intl-relativetimeformat/dist/locale-data/de'); // Load de
}
```
