# `intl-displaynames`

A ponyfill/polyfill for [`intl-displaynames`](https://tc39.es/proposal-intl-displaynames).

## Status

`intl-displaynames` is beta quality software that hasn't been tested thoroughly.

## Installation

```
npm install @f-fjs/intl-displaynames
```

# Features

Everything in <https://github.com/tc39/proposal-intl-displaynames>.

# Usage

To use the ponyfill, import it along with its data:

```ts
import {DisplayNames} from '@f-fjs/intl-displaynames';
DisplayNames.__addLocaleData(
  require('@f-fjs/intl-displaynames/dist/locale-data/en.json') // locale-data for en
);
DisplayNames.__addLocaleData(
  require('@f-fjs/intl-displaynames/dist/locale-data/zh.json') // locale-data for zh
);

new DisplayNames('zh', {type: 'currency'}).of('USD'); //=> "美元"
```

To use this as a polyfill, override `Intl.DisplayNames` as below:

```javascript
import '@f-fjs/intl-displaynames/polyfill';
import '@f-fjs/intl-displaynames/dist/locale-data/en'; // locale-data for en
import '@f-fjs/intl-displaynames/dist/locale-data/zh'; // locale-data for zh

new Intl.DisplayNames('en').of('zh-Hans'); //=> "Simplified Chinese"
new Intl.DisplayNames('zh', {type: 'currency'}).of('USD'); //=> "美元"
```
