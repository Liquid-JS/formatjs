# FormatJS

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status](https://travis-ci.org/formatjs/formatjs.svg?branch=master)](https://travis-ci.org/formatjs/formatjs)
[![Slack FormatJS](https://img.shields.io/badge/slack-@f-fjs-green.svg?logo=slack)](https://join.slack.com/t/formatjs/shared_invite/enQtNjM2MjM4NjE4ODIxLTMyMWE0YTNhMTlmMzZlNzJlNjEzMWY0YjM2ODUxYjlmNDE2YzQyMDIxZDg3Y2Q5YWNlMzhhYzRiNDk0OGQwNGI)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/formatjsproject.svg)](https://saucelabs.com/u/formatjsproject)

This repository is the home of [FormatJS](http://formatjs.io/) and related libraries.

## Development

Development is currently being done against the latest Node LTS. This repository leverages [Lerna][] for package management.

Releases can be done with the following steps:

```js
> lerna publish
```

## Published Packages

| Package                                                                                                  | Version                                                                  | Changelog                                                     | License                                               |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------- | ----------------------------------------------------- |
| [@f-fjs/babel-plugin-react-intl](https://www.npmjs.com/package/@f-fjs/babel-plugin-react-intl)                         | ![version](https://badgen.net/npm/v/@f-fjs/babel-plugin-react-intl)             | [CHANGELOG](packages/babel-plugin-react-intl/CHANGELOG.md)    | [BSD](packages/babel-plugin-react-intl/LICENSE.md)    |
| [@f-fjs/cli](https://www.npmjs.com/package/@f-fjs/cli)                                             | ![version](https://badgen.net/npm/v/@f-fjs/cli)                       | [CHANGELOG](packages/cli/CHANGELOG.md)                        | [MIT](packages/cli/LICENSE.md)                        |
| [@f-fjs/eslint-plugin-formatjs](https://www.npmjs.com/package/@f-fjs/eslint-plugin-formatjs)                           | ![version](https://badgen.net/npm/v/@f-fjs/eslint-plugin-formatjs)              | [CHANGELOG](packages/eslint-plugin-formatjs/CHANGELOG.md)     | [MIT](packages/eslint-plugin-formatjs/LICENSE.md)     |
| [@f-fjs/extract-cldr-data](https://www.npmjs.com/package/@f-fjs/extract-cldr-data)                   | ![version](https://badgen.net/npm/v/@f-fjs/extract-cldr-data)          | [CHANGELOG](packages/extract-cldr-data/CHANGELOG.md) | [BSD](packages/extract-cldr-data/LICENSE.md) |
| [@f-fjs/intl-format-cache](https://www.npmjs.com/package/@f-fjs/intl-format-cache)                                     | ![version](https://badgen.net/npm/v/@f-fjs/intl-format-cache)                   | [CHANGELOG](packages/intl-format-cache/CHANGELOG.md)          | [BSD](packages/intl-format-cache/LICENSE.md)          |
| [@f-fjs/intl-locales-supported](https://www.npmjs.com/package/@f-fjs/intl-locales-supported)                           | ![version](https://badgen.net/npm/v/@f-fjs/intl-locales-supported)              | [CHANGELOG](packages/intl-locales-supported/CHANGELOG.md)     | [BSD](packages/intl-locales-supported/LICENSE.md)     |
| [@f-fjs/intl-listformat](https://www.npmjs.com/package/@f-fjs/intl-listformat)                     | ![version](https://badgen.net/npm/v/@f-fjs/intl-listformat)           | [CHANGELOG](packages/intl-listformat/CHANGELOG.md)            | [MIT](packages/intl-listformat/LICENSE.md)            |
| [@f-fjs/intl-messageformat](https://www.npmjs.com/package/@f-fjs/intl-messageformat)                                   | ![version](https://badgen.net/npm/v/@f-fjs/intl-messageformat)                  | [CHANGELOG](packages/intl-messageformat/CHANGELOG.md)         | [BSD](packages/intl-messageformat/LICENSE.md)         |
| [@f-fjs/intl-messageformat-parser](https://www.npmjs.com/package/@f-fjs/intl-messageformat-parser)                     | ![version](https://badgen.net/npm/v/@f-fjs/intl-messageformat-parser)           | [CHANGELOG](packages/intl-messageformat-parser/CHANGELOG.md)  | [BSD](packages/intl-messageformat-parser/LICENSE.md)  |
| [@f-fjs/intl-pluralrules](https://www.npmjs.com/package/@f-fjs/intl-pluralrules)                   | ![version](https://badgen.net/npm/v/@f-fjs/intl-pluralrules)          | [CHANGELOG](packages/intl-pluralrules/CHANGELOG.md)           | [MIT](packages/intl-pluralrules/LICENSE.md)           |
| [@f-fjs/intl-relativetimeformat](https://www.npmjs.com/package/@f-fjs/intl-relativetimeformat)     | ![version](https://badgen.net/npm/v/@f-fjs/intl-relativetimeformat)   | [CHANGELOG](packages/intl-relativetimeformat/CHANGELOG.md)    | [MIT](packages/intl-relativetimeformat/LICENSE.md)    |
| [@f-fjs/intl-unified-numberformat](https://www.npmjs.com/package/@f-fjs/intl-unified-numberformat) | ![version](https://badgen.net/npm/v/@f-fjs/intl-unified-numberformat) | [CHANGELOG](packages/intl-unified-numberformat/CHANGELOG.md)  | [MIT](packages/intl-unified-numberformat/LICENSE.md)  |
| [@f-fjs/intl-utils](https://www.npmjs.com/package/@f-fjs/intl-utils)                               | ![version](https://badgen.net/npm/v/@f-fjs/intl-utils)                | [CHANGELOG](packages/intl-utils/CHANGELOG.md)                 | [MIT](packages/intl-utils/LICENSE.md)                 |
| [@f-fjs/macro](https://www.npmjs.com/package/@f-fjs/macro)                                         | ![version](https://badgen.net/npm/v/@f-fjs/macro)                     | [CHANGELOG](packages/macro/CHANGELOG.md)                      | [MIT](packages/macro/LICENSE.md)                      |
| [@f-fjs/ts-transformer](https://www.npmjs.com/package/@f-fjs/cli)                                  | ![version](https://badgen.net/npm/v/@f-fjs/cli)                       | [CHANGELOG](packages/cli/CHANGELOG.md)                        | [MIT](packages/cli/LICENSE.md)                        |
| [@f-fjs/intl-displaynames](https://www.npmjs.com/package/@f-fjs/intl-displaynames)                 | ![version](https://badgen.net/npm/v/@f-fjs/intl-displaynames)         | [CHANGELOG](packages/intl-displaynames/CHANGELOG.md)          | [MIT](packages/intl-displaynames/LICENSE.md)          |

## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][saucelabs]

[lerna]: https://lerna.js.org/
[saucelabs]: https://saucelabs.com

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/pyrocat101"><img src="https://avatars0.githubusercontent.com/u/541540?v=4" width="100px;" alt=""/><br /><sub><b>Linjie Ding</b></sub></a><br /><a href="#infra-pyrocat101" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/formatjs/formatjs/commits?author=pyrocat101" title="Tests">⚠️</a> <a href="https://github.com/formatjs/formatjs/commits?author=pyrocat101" title="Code">💻</a></td>
    <td align="center"><a href="https://medium.com/@longho"><img src="https://avatars1.githubusercontent.com/u/198255?v=4" width="100px;" alt=""/><br /><sub><b>Long Ho</b></sub></a><br /><a href="#infra-longlho" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/formatjs/formatjs/commits?author=longlho" title="Tests">⚠️</a> <a href="https://github.com/formatjs/formatjs/commits?author=longlho" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
