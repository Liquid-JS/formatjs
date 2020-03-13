# `intl-pluralrules`

A spec-compliant polyfill/ponyfill for [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules) fully tested by the [official ECMAScript Conformance test suite](https://github.com/tc39/test262)

[![npm Version][npm-badge]][npm]
![size](https://badgen.net/bundlephobia/minzip/@f-fjs/intl-pluralrules)

## Installation

```
npm install @f-fjs/intl-pluralrules
```

# Usage

```tsx
import '@f-fjs/intl-pluralrules/polyfill';
import '@f-fjs/intl-pluralrules/dist/locale-data/en'; // locale-data for en
```

TO polyfill w/ ALL locales:

```tsx
import '@f-fjs/intl-pluralrules/polyfill-locales';
```

[npm]: https://www.npmjs.org/package/@f-fjs/intl-pluralrules
[npm-badge]: https://img.shields.io/npm/v/@f-fjs/intl-pluralrules.svg?style=flat-square
