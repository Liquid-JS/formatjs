# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.2.1 (2020-03-13)


### Bug Fixes

* remove redundant checks, k? ([9b0f7a3](https://github.com/formatjs/formatjs/commit/9b0f7a3adea8af97c969b29efd2c6294e2edeb2c))
* **@formatjs/intl-listformat:** don’t treat en-US-POSIX as en-US because they are different ([a37b091](https://github.com/formatjs/formatjs/commit/a37b091830ddc0ac9fd5771eb402f2b5c23c45f7))
* **@formatjs/intl-relativetimeformat:** add more side-effectful files ([03d2a10](https://github.com/formatjs/formatjs/commit/03d2a10d2692f80e10672da320b989b951b69a45))
* **@formatjs/intl-relativetimeformat:** pass in raw locales to lookup ([9c2af2a](https://github.com/formatjs/formatjs/commit/9c2af2a2d8f0f7fe44ecf5f8b9f34953480e7889))
* **@formatjs/intl-relativetimeformat:** use api-extractor to combine d.ts ([bd803dd](https://github.com/formatjs/formatjs/commit/bd803dd5fcd6f13994e686b8d08bd1b8be6a2e4b))
* **@formatjs/intl-unified-numberformat:** account for DecimalFormatNum in internal slots ([dc26b43](https://github.com/formatjs/formatjs/commit/dc26b434eabb4f629a821f7c12d5ae7570bd8cab))
* **@formatjs/intl-unified-numberformat:** add .npmignore ([3ebb117](https://github.com/formatjs/formatjs/commit/3ebb117d9a5c2688a47660670e91854bd5bfc39c))
* **@formatjs/intl-unified-numberformat:** add back unpackData so we get the correct locale hierarchy ([c778e19](https://github.com/formatjs/formatjs/commit/c778e19cc590dcbfed817a57501b6ef36c0c17cd))
* **@formatjs/intl-unified-numberformat:** add DEFAULT_LOCALE in locale lookup ([1f25453](https://github.com/formatjs/formatjs/commit/1f254539402d62297082f72fdb348c0d62027686))
* **@formatjs/intl-unified-numberformat:** add more tests ([5bb5924](https://github.com/formatjs/formatjs/commit/5bb592472fe216fecf7890b566f43ee489291f08))
* **@formatjs/intl-unified-numberformat:** add more tests ([5122cdc](https://github.com/formatjs/formatjs/commit/5122cdc340f2fcbf05c093075dd97c459cc5709c))
* **@formatjs/intl-unified-numberformat:** add more tests for compact notation ([0a5a180](https://github.com/formatjs/formatjs/commit/0a5a180db2813fc18f428113e6b7bc1165595868))
* **@formatjs/intl-unified-numberformat:** add some currency support, update test snapshots ([d603a3c](https://github.com/formatjs/formatjs/commit/d603a3c148412edc7d69257459a03485ae5db6e7))
* **@formatjs/intl-unified-numberformat:** address min2 grouping strategy for compact ([fd1b22d](https://github.com/formatjs/formatjs/commit/fd1b22d072213b2eee21c19166da38f5cf68dc8f))
* **@formatjs/intl-unified-numberformat:** bound format/formatToParts, fix test262 case ([a3a29e7](https://github.com/formatjs/formatjs/commit/a3a29e71405dd38ddf993693954335fceeea1735))
* **@formatjs/intl-unified-numberformat:** default to decimal symbol instead of currency ([9a99e91](https://github.com/formatjs/formatjs/commit/9a99e91f1a82a625aa499796d1817ce160233d8c))
* **@formatjs/intl-unified-numberformat:** dist polyfill with all locales ([f4c494a](https://github.com/formatjs/formatjs/commit/f4c494a83149780d21b7921956c0f67278f67f29))
* **@formatjs/intl-unified-numberformat:** export types as well ([99b886b](https://github.com/formatjs/formatjs/commit/99b886ba0f34bb7e83ab32ee88dd924a2009d8b8))
* **@formatjs/intl-unified-numberformat:** fix -0 case ([c9351c5](https://github.com/formatjs/formatjs/commit/c9351c54bd33f6e5c1869227a9a33802c56b1613))
* **@formatjs/intl-unified-numberformat:** fix [#376](https://github.com/formatjs/formatjs/issues/376) ([4b7e10a](https://github.com/formatjs/formatjs/commit/4b7e10a51ddf623fa0e7f52c8b4afc101b3c75da))
* **@formatjs/intl-unified-numberformat:** fix apostrophe escape in ILD extraction ([de1eb0a](https://github.com/formatjs/formatjs/commit/de1eb0a8e191d0a8669d2503c13d8d2f50de028f))
* **@formatjs/intl-unified-numberformat:** fix base log 10 and implement compact, fix [#370](https://github.com/formatjs/formatjs/issues/370) ([2a7f478](https://github.com/formatjs/formatjs/commit/2a7f4785456aaa5866675e28a4f208aa4e29bfd8))
* **@formatjs/intl-unified-numberformat:** fix cases where {number} or {0} is in the middle of the pattern ([3ca49d8](https://github.com/formatjs/formatjs/commit/3ca49d8f93a9acc1ea3908ffd9e367b21aa97248))
* **@formatjs/intl-unified-numberformat:** fix cases with compact for ko & zh ([eb3c3ac](https://github.com/formatjs/formatjs/commit/eb3c3ac3688957b5150acc081c2005542ea03e59))
* **@formatjs/intl-unified-numberformat:** fix cldr build ([3cb5dae](https://github.com/formatjs/formatjs/commit/3cb5daeffa072ee065a2b2c8e9ec768be21b0e46))
* **@formatjs/intl-unified-numberformat:** fix compact grouping regression ([9a02dcb](https://github.com/formatjs/formatjs/commit/9a02dcb1027f594a033301b043d1233bd6c381e1))
* **@formatjs/intl-unified-numberformat:** fix crash in numberformat ([e3115e2](https://github.com/formatjs/formatjs/commit/e3115e2462cb282edc98d4dbe71ffbf7eb3da5c8)), closes [#293](https://github.com/formatjs/formatjs/issues/293)
* **@formatjs/intl-unified-numberformat:** fix currency compact form having special plural rules ([b0a6d4f](https://github.com/formatjs/formatjs/commit/b0a6d4f3120386a81ceb05fac09c56307b561e91))
* **@formatjs/intl-unified-numberformat:** fix currency digits ([b624d54](https://github.com/formatjs/formatjs/commit/b624d5439610254a8c95afa00dde18022344738d))
* **@formatjs/intl-unified-numberformat:** fix decimal tests ([7cc56d0](https://github.com/formatjs/formatjs/commit/7cc56d05d1b70238d26016f943e7aa455883006e))
* **@formatjs/intl-unified-numberformat:** fix ILD lookup for currency name in compact mode ([76e8e5f](https://github.com/formatjs/formatjs/commit/76e8e5f8b71bccacfc430edf28d10f3ff9942c86))
* **@formatjs/intl-unified-numberformat:** fix moar test262 cases ([#464](https://github.com/formatjs/formatjs/issues/464)) ([c3bec6e](https://github.com/formatjs/formatjs/commit/c3bec6e9dda928a48c8ecda7a9e515da7790fde1))
* **@formatjs/intl-unified-numberformat:** fix more test262 cases ([0da0657](https://github.com/formatjs/formatjs/commit/0da065707579e454386af9fdc427939cc0e2ceaf))
* **@formatjs/intl-unified-numberformat:** fix more things ([ad046f3](https://github.com/formatjs/formatjs/commit/ad046f3e6567a94bc5fbaee1f5b4901d613eede8))
* **@formatjs/intl-unified-numberformat:** fix more things for test262 ([35c3c5a](https://github.com/formatjs/formatjs/commit/35c3c5acbe6591a383b208cf193b57b1f3e03712))
* **@formatjs/intl-unified-numberformat:** fix package.json ([5940281](https://github.com/formatjs/formatjs/commit/5940281a72eb303ae937f54d0155c758e715b9ac))
* **@formatjs/intl-unified-numberformat:** fix resolvedOptions ([8b3af26](https://github.com/formatjs/formatjs/commit/8b3af267c5c669a9b2892d13f1c244d2ebc50c94))
* **@formatjs/intl-unified-numberformat:** fix scientific notation for numbers < 1 ([8c71872](https://github.com/formatjs/formatjs/commit/8c71872f3ff22edffb4c2543a9d9d45b0fcba05d))
* **@formatjs/intl-unified-numberformat:** fix scientific pattern for decimal ([a0edba5](https://github.com/formatjs/formatjs/commit/a0edba547e33c488ddc63025f67f3d5450a28279))
* **@formatjs/intl-unified-numberformat:** fix some 262 test cases ([3e8e931](https://github.com/formatjs/formatjs/commit/3e8e931a9a7bc6901ac7c89f10f8bf19e9fa0fca))
* **@formatjs/intl-unified-numberformat:** fix unit issue ([8feb8e7](https://github.com/formatjs/formatjs/commit/8feb8e702736bf6c33974d9ae69dd2ac09d4bc37))
* **@formatjs/intl-unified-numberformat:** initialize PluralRules with the same opts as NumberFormat ([cd8a67c](https://github.com/formatjs/formatjs/commit/cd8a67c4d9d4a8cd31f5d96bf8bde440619bacd4))
* **@formatjs/intl-unified-numberformat:** memoize Intl.PluralRules ([429a7db](https://github.com/formatjs/formatjs/commit/429a7db52cc191c9b3036d5b87a2dcf84f25ffb0))
* **@formatjs/intl-unified-numberformat:** more currency fixes for scientific notation ([6835bb4](https://github.com/formatjs/formatjs/commit/6835bb47931669f89218485d46109ac54218bdc2))
* **@formatjs/intl-unified-numberformat:** more work on currency formatting ([5a5b8e6](https://github.com/formatjs/formatjs/commit/5a5b8e63783d48c86a87a9836e45415e27e38b26))
* **@formatjs/intl-unified-numberformat:** more work on fixing currency pattern ([6cb0d67](https://github.com/formatjs/formatjs/commit/6cb0d6760404be8079361230537f1de1a4dd8c6e))
* **@formatjs/intl-unified-numberformat:** move currency processing to lazy ([6e1d621](https://github.com/formatjs/formatjs/commit/6e1d62189373dc4fdf71614c78a353f96e28c8ed))
* **@formatjs/intl-unified-numberformat:** pass in raw locales to lookup ([719c6f2](https://github.com/formatjs/formatjs/commit/719c6f252bbea236d92803f3dc20663ce0ff1d1b))
* **@formatjs/intl-unified-numberformat:** pass tests for `unit` ([a9bbc74](https://github.com/formatjs/formatjs/commit/a9bbc74b2fc2fc8bce07cee5fa3b63dd995a7953))
* **@formatjs/intl-unified-numberformat:** reduce install size by dropping unicode-12.1.0 dependency ([#497](https://github.com/formatjs/formatjs/issues/497)) ([b84ddc2](https://github.com/formatjs/formatjs/commit/b84ddc2b4c464229540a2067df6a4bd92a0b9939))
* **@formatjs/intl-unified-numberformat:** refactor + fix apostrophe-escaped issue in pattern ([e45bc89](https://github.com/formatjs/formatjs/commit/e45bc89e6db34a8e3d3dd63e41ee2893f0743035))
* **@formatjs/intl-unified-numberformat:** rely on Intl.PluralRules supported locales instead of both PL & NumberFormat ([8c8578d](https://github.com/formatjs/formatjs/commit/8c8578d5374d3440a8c9d26288e2e08542e6f482))
* **@formatjs/intl-unified-numberformat:** rm side effects array due to build complication ([499df4f](https://github.com/formatjs/formatjs/commit/499df4f07475ff8254bc7b884aa7325cb1f8261d))
* **@formatjs/intl-unified-numberformat:** update snapshots ([917aa7e](https://github.com/formatjs/formatjs/commit/917aa7e3039637ff315a54ea506f1836104050e8))
* **@formatjs/intl-unified-numberformat:** use CLDR symbol instead of ISO code for currencySymbol ([4db663d](https://github.com/formatjs/formatjs/commit/4db663dbcf6066923781413b90ee0ce56dfff69f))
* **@formatjs/intl-unified-numberformat:** use locale-lookup from intl-utils ([7f5eb9e](https://github.com/formatjs/formatjs/commit/7f5eb9ef84b42b36ad17499b80200255ae9b81f0))
* **@formatjs/intl-unified-numberformat:** validate currency code, fix [#371](https://github.com/formatjs/formatjs/issues/371) ([03f8ee6](https://github.com/formatjs/formatjs/commit/03f8ee6f73023a9c12bebd04b3958f40ed7bab47))
* **@formatjs/intl-unified-numberformat:** validate unit, fix [#372](https://github.com/formatjs/formatjs/issues/372) ([a93c324](https://github.com/formatjs/formatjs/commit/a93c3248800b9191b34d287264dcd9ccee2cbcfa))
* **@formatjs/intl-utils:** change default quarter to false in selectUnit ([dadab10](https://github.com/formatjs/formatjs/commit/dadab1026d8a6f52f61063ea9ca6cbc513cddef6))
* **@formatjs/intl-utils:** consolidate parent lookup ([bac2eae](https://github.com/formatjs/formatjs/commit/bac2eae8ab4eb2361c8b2053237ac335a1f82680))
* **@formatjs/intl-utils:** fix getInternalSlot to prevent Object.prototype taint ([334441b](https://github.com/formatjs/formatjs/commit/334441b000c0206c77683f70a1f987d2793643cb))
* **@formatjs/intl-utils:** fix setNumberFormatDigitOptions ([cb21c1f](https://github.com/formatjs/formatjs/commit/cb21c1f7abcb32040ffc5108c37734e2fd43c117))
* **intl-messageformat:** use api-extractor to combine type definitions ([6c6af9d](https://github.com/formatjs/formatjs/commit/6c6af9d837d13938fa647cbbbaf2f417935908fd))
* **intl-unified-numberformat:** dist UMD ([f568cdc](https://github.com/formatjs/formatjs/commit/f568cdc18dadb6c928560273ab3dd18d0976efa5)), closes [#159](https://github.com/formatjs/formatjs/issues/159)


### Features

* **@formatjs/intl-displaynames:** initial commit ([#469](https://github.com/formatjs/formatjs/issues/469)) ([137b994](https://github.com/formatjs/formatjs/commit/137b994846526b02de80b024c860b2771868f236))
* **@formatjs/intl-unified-numberformat:** add correct typings to UnifiedNumberFormatOptions ([70b8baa](https://github.com/formatjs/formatjs/commit/70b8baafb2bd57ec30ab8d273391bd2c1561cc74))
* **@formatjs/intl-unified-numberformat:** add currency support and currency matching algo ([786858d](https://github.com/formatjs/formatjs/commit/786858dc07cf82c4c6d0be968b3192e50f189567))
* **@formatjs/intl-unified-numberformat:** add currency-digits extractions ([8261383](https://github.com/formatjs/formatjs/commit/82613832782e7dc7acf511fc911d910152d047e6))
* **@formatjs/intl-unified-numberformat:** add currencyDisplay… ([#332](https://github.com/formatjs/formatjs/issues/332)) ([0cf8629](https://github.com/formatjs/formatjs/commit/0cf862992cae62a162d6935797ffd7c0848cf3ea))
* **@formatjs/intl-unified-numberformat:** add polyfill option ([4c1d692](https://github.com/formatjs/formatjs/commit/4c1d692fee37c22ee702b2922434b9b939f0d697))
* **@formatjs/intl-unified-numberformat:** initial work on currency narrowSymbol ([e379236](https://github.com/formatjs/formatjs/commit/e379236d8f06c2f520a981fce78e11a3f207384e))
* **@formatjs/intl-unified-numberformat:** mark the package as side-effects free ([d05c293](https://github.com/formatjs/formatjs/commit/d05c293068981fffa5c2fc114f88b31950cb998a))
* **@formatjs/intl-unified-numberformat:** more work on stage-3 APIs ([3f510ca](https://github.com/formatjs/formatjs/commit/3f510cac1906682db5a0fb721d62431e7ec0cb7d))
* **@formatjs/intl-unified-numberformat:** more work on stage-3 APIs ([2ebf471](https://github.com/formatjs/formatjs/commit/2ebf4716131122ce9f5370c7cf8064a481460c5a))
* **@formatjs/intl-unified-numberformat:** rename __addUnitLocaleData to __addLocaleData ([d251733](https://github.com/formatjs/formatjs/commit/d251733961321907307a9cd984d782e2fe497527))
* **@formatjs/intl-unified-numberformat:** Update README with more examples, disable some tests ([35dd2f0](https://github.com/formatjs/formatjs/commit/35dd2f0b2d592198d973fb394c36d6c5538993d5))
* **@formatjs/intl-utils:** add IE11-safe getCanonicalLocales, ([b5f37c4](https://github.com/formatjs/formatjs/commit/b5f37c41bf0248bf8b8046407aa3ba232744ee5b)), closes [#200](https://github.com/formatjs/formatjs/issues/200)
* **@formatjs/intl-utils:** Add intl-unified-numberformat option types ([e6a32d6](https://github.com/formatjs/formatjs/commit/e6a32d6e6da5e10e4baad0ca02dffb8f56bb2c32))
* **formatjs-extract-cldr-data:** dedupe relative data, reduce relative time data by 40% ([db12bf3](https://github.com/formatjs/formatjs/commit/db12bf3c8838c503a7fd658b062117de75368545))
* **formatjs-extract-cldr-data:** even smaller locale data ([66a0313](https://github.com/formatjs/formatjs/commit/66a03139a3ad7b243aee032ed5623c839c9725df))
* **formatjs-extract-cldr-data:** extract raw numbers ([6fa5f3f](https://github.com/formatjs/formatjs/commit/6fa5f3f68f61ad65f1a3c3b9c54f60da140fd802))
* **formatjs-extract-cldr-data:** fix unit extraction ([7e54a0b](https://github.com/formatjs/formatjs/commit/7e54a0b35519be5e25f96e683024d3df2be6d5de))
* **formatjs-extract-cldr-data:** polyfill units ([e291eeb](https://github.com/formatjs/formatjs/commit/e291eebfc6233ef0ae2e3ee42976e2073ad5afc1))


### BREAKING CHANGES

* **@formatjs/intl-unified-numberformat:** Although API remains the same, the CLDR distributed data has changed
* **@formatjs/intl-unified-numberformat:** rename __addUnitLocaleData to __addLocaleData for
consistency with other polyfills
* **@formatjs/intl-unified-numberformat:** This package no longer comes with `en` by default






# [3.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.1.0...@f-fjs/intl-unified-numberformat@3.2.0) (2020-01-27)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** reduce install size by dropping unicode-12.1.0 dependency ([#497](https://github.com/formatjs/formatjs/issues/497)) ([b84ddc2](https://github.com/formatjs/formatjs/commit/b84ddc2b4c464229540a2067df6a4bd92a0b9939))


### Features

* **@f-fjs/intl-utils:** Add intl-unified-numberformat option types ([e6a32d6](https://github.com/formatjs/formatjs/commit/e6a32d6e6da5e10e4baad0ca02dffb8f56bb2c32))





# [3.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.0.4...@f-fjs/intl-unified-numberformat@3.1.0) (2020-01-22)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** fix moar test262 cases ([#464](https://github.com/formatjs/formatjs/issues/464)) ([c3bec6e](https://github.com/formatjs/formatjs/commit/c3bec6e9dda928a48c8ecda7a9e515da7790fde1))
* **@f-fjs/intl-unified-numberformat:** fix some 262 test cases ([3e8e931](https://github.com/formatjs/formatjs/commit/3e8e931a9a7bc6901ac7c89f10f8bf19e9fa0fca))


### Features

* **@f-fjs/intl-displaynames:** initial commit ([#469](https://github.com/formatjs/formatjs/issues/469)) ([137b994](https://github.com/formatjs/formatjs/commit/137b994846526b02de80b024c860b2771868f236))





## [3.0.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.0.3...@f-fjs/intl-unified-numberformat@3.0.4) (2020-01-09)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** address min2 grouping strategy for compact ([fd1b22d](https://github.com/formatjs/formatjs/commit/fd1b22d072213b2eee21c19166da38f5cf68dc8f))
* **@f-fjs/intl-unified-numberformat:** fix compact grouping regression ([9a02dcb](https://github.com/formatjs/formatjs/commit/9a02dcb1027f594a033301b043d1233bd6c381e1))
* **@f-fjs/intl-utils:** fix setNumberFormatDigitOptions ([cb21c1f](https://github.com/formatjs/formatjs/commit/cb21c1f7abcb32040ffc5108c37734e2fd43c117))





## [3.0.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.0.2...@f-fjs/intl-unified-numberformat@3.0.3) (2020-01-08)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [3.0.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.0.1...@f-fjs/intl-unified-numberformat@3.0.2) (2020-01-06)


### Bug Fixes

* **@f-fjs/intl-listformat:** don’t treat en-US-POSIX as en-US because they are different ([a37b091](https://github.com/formatjs/formatjs/commit/a37b091830ddc0ac9fd5771eb402f2b5c23c45f7))
* **@f-fjs/intl-unified-numberformat:** account for DecimalFormatNum in internal slots ([dc26b43](https://github.com/formatjs/formatjs/commit/dc26b434eabb4f629a821f7c12d5ae7570bd8cab))
* **@f-fjs/intl-unified-numberformat:** default to decimal symbol instead of currency ([9a99e91](https://github.com/formatjs/formatjs/commit/9a99e91f1a82a625aa499796d1817ce160233d8c))
* **@f-fjs/intl-unified-numberformat:** fix apostrophe escape in ILD extraction ([de1eb0a](https://github.com/formatjs/formatjs/commit/de1eb0a8e191d0a8669d2503c13d8d2f50de028f))
* **@f-fjs/intl-unified-numberformat:** fix cases where {number} or {0} is in the middle of the pattern ([3ca49d8](https://github.com/formatjs/formatjs/commit/3ca49d8f93a9acc1ea3908ffd9e367b21aa97248))
* **@f-fjs/intl-unified-numberformat:** fix cases with compact for ko & zh ([eb3c3ac](https://github.com/formatjs/formatjs/commit/eb3c3ac3688957b5150acc081c2005542ea03e59))
* **@f-fjs/intl-unified-numberformat:** fix currency compact form having special plural rules ([b0a6d4f](https://github.com/formatjs/formatjs/commit/b0a6d4f3120386a81ceb05fac09c56307b561e91))
* **@f-fjs/intl-unified-numberformat:** fix decimal tests ([7cc56d0](https://github.com/formatjs/formatjs/commit/7cc56d05d1b70238d26016f943e7aa455883006e))
* **@f-fjs/intl-unified-numberformat:** fix ILD lookup for currency name in compact mode ([76e8e5f](https://github.com/formatjs/formatjs/commit/76e8e5f8b71bccacfc430edf28d10f3ff9942c86))
* **@f-fjs/intl-unified-numberformat:** initialize PluralRules with the same opts as NumberFormat ([cd8a67c](https://github.com/formatjs/formatjs/commit/cd8a67c4d9d4a8cd31f5d96bf8bde440619bacd4))
* **@f-fjs/intl-unified-numberformat:** refactor + fix apostrophe-escaped issue in pattern ([e45bc89](https://github.com/formatjs/formatjs/commit/e45bc89e6db34a8e3d3dd63e41ee2893f0743035))
* **@f-fjs/intl-utils:** fix getInternalSlot to prevent Object.prototype taint ([334441b](https://github.com/formatjs/formatjs/commit/334441b000c0206c77683f70a1f987d2793643cb))





## [3.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@3.0.0...@f-fjs/intl-unified-numberformat@3.0.1) (2019-12-27)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





# [3.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.2.0...@f-fjs/intl-unified-numberformat@3.0.0) (2019-12-26)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** add back unpackData so we get the correct locale hierarchy ([c778e19](https://github.com/formatjs/formatjs/commit/c778e19cc590dcbfed817a57501b6ef36c0c17cd))
* **@f-fjs/intl-unified-numberformat:** add more tests ([5bb5924](https://github.com/formatjs/formatjs/commit/5bb592472fe216fecf7890b566f43ee489291f08))
* **@f-fjs/intl-unified-numberformat:** add more tests ([5122cdc](https://github.com/formatjs/formatjs/commit/5122cdc340f2fcbf05c093075dd97c459cc5709c))
* **@f-fjs/intl-unified-numberformat:** add more tests for compact notation ([0a5a180](https://github.com/formatjs/formatjs/commit/0a5a180db2813fc18f428113e6b7bc1165595868))
* **@f-fjs/intl-unified-numberformat:** add some currency support, update test snapshots ([d603a3c](https://github.com/formatjs/formatjs/commit/d603a3c148412edc7d69257459a03485ae5db6e7))
* **@f-fjs/intl-unified-numberformat:** bound format/formatToParts, fix test262 case ([a3a29e7](https://github.com/formatjs/formatjs/commit/a3a29e71405dd38ddf993693954335fceeea1735))
* **@f-fjs/intl-unified-numberformat:** fix -0 case ([c9351c5](https://github.com/formatjs/formatjs/commit/c9351c54bd33f6e5c1869227a9a33802c56b1613))
* **@f-fjs/intl-unified-numberformat:** fix [#376](https://github.com/formatjs/formatjs/issues/376) ([4b7e10a](https://github.com/formatjs/formatjs/commit/4b7e10a51ddf623fa0e7f52c8b4afc101b3c75da))
* **@f-fjs/intl-unified-numberformat:** fix base log 10 and implement compact, fix [#370](https://github.com/formatjs/formatjs/issues/370) ([2a7f478](https://github.com/formatjs/formatjs/commit/2a7f4785456aaa5866675e28a4f208aa4e29bfd8))
* **@f-fjs/intl-unified-numberformat:** fix currency digits ([b624d54](https://github.com/formatjs/formatjs/commit/b624d5439610254a8c95afa00dde18022344738d))
* **@f-fjs/intl-unified-numberformat:** fix more test262 cases ([0da0657](https://github.com/formatjs/formatjs/commit/0da065707579e454386af9fdc427939cc0e2ceaf))
* **@f-fjs/intl-unified-numberformat:** fix more things ([ad046f3](https://github.com/formatjs/formatjs/commit/ad046f3e6567a94bc5fbaee1f5b4901d613eede8))
* **@f-fjs/intl-unified-numberformat:** fix more things for test262 ([35c3c5a](https://github.com/formatjs/formatjs/commit/35c3c5acbe6591a383b208cf193b57b1f3e03712))
* **@f-fjs/intl-unified-numberformat:** fix resolvedOptions ([8b3af26](https://github.com/formatjs/formatjs/commit/8b3af267c5c669a9b2892d13f1c244d2ebc50c94))
* **@f-fjs/intl-unified-numberformat:** fix scientific notation for numbers < 1 ([8c71872](https://github.com/formatjs/formatjs/commit/8c71872f3ff22edffb4c2543a9d9d45b0fcba05d))
* **@f-fjs/intl-unified-numberformat:** fix scientific pattern for decimal ([a0edba5](https://github.com/formatjs/formatjs/commit/a0edba547e33c488ddc63025f67f3d5450a28279))
* **@f-fjs/intl-unified-numberformat:** fix unit issue ([8feb8e7](https://github.com/formatjs/formatjs/commit/8feb8e702736bf6c33974d9ae69dd2ac09d4bc37))
* **@f-fjs/intl-unified-numberformat:** more currency fixes for scientific notation ([6835bb4](https://github.com/formatjs/formatjs/commit/6835bb47931669f89218485d46109ac54218bdc2))
* **@f-fjs/intl-unified-numberformat:** more work on currency formatting ([5a5b8e6](https://github.com/formatjs/formatjs/commit/5a5b8e63783d48c86a87a9836e45415e27e38b26))
* **@f-fjs/intl-unified-numberformat:** more work on fixing currency pattern ([6cb0d67](https://github.com/formatjs/formatjs/commit/6cb0d6760404be8079361230537f1de1a4dd8c6e))
* **@f-fjs/intl-unified-numberformat:** move currency processing to lazy ([6e1d621](https://github.com/formatjs/formatjs/commit/6e1d62189373dc4fdf71614c78a353f96e28c8ed))
* **@f-fjs/intl-unified-numberformat:** pass tests for `unit` ([a9bbc74](https://github.com/formatjs/formatjs/commit/a9bbc74b2fc2fc8bce07cee5fa3b63dd995a7953))
* **@f-fjs/intl-unified-numberformat:** update snapshots ([917aa7e](https://github.com/formatjs/formatjs/commit/917aa7e3039637ff315a54ea506f1836104050e8))
* **@f-fjs/intl-unified-numberformat:** use CLDR symbol instead of ISO code for currencySymbol ([4db663d](https://github.com/formatjs/formatjs/commit/4db663dbcf6066923781413b90ee0ce56dfff69f))
* **@f-fjs/intl-unified-numberformat:** validate currency code, fix [#371](https://github.com/formatjs/formatjs/issues/371) ([03f8ee6](https://github.com/formatjs/formatjs/commit/03f8ee6f73023a9c12bebd04b3958f40ed7bab47))
* **@f-fjs/intl-unified-numberformat:** validate unit, fix [#372](https://github.com/formatjs/formatjs/issues/372) ([a93c324](https://github.com/formatjs/formatjs/commit/a93c3248800b9191b34d287264dcd9ccee2cbcfa))


### Features

* **@f-fjs/intl-unified-numberformat:** add currency support and currency matching algo ([786858d](https://github.com/formatjs/formatjs/commit/786858dc07cf82c4c6d0be968b3192e50f189567))
* **@f-fjs/intl-unified-numberformat:** add currency-digits extractions ([8261383](https://github.com/formatjs/formatjs/commit/82613832782e7dc7acf511fc911d910152d047e6))
* **@f-fjs/intl-unified-numberformat:** initial work on currency narrowSymbol ([e379236](https://github.com/formatjs/formatjs/commit/e379236d8f06c2f520a981fce78e11a3f207384e))
* **@f-fjs/intl-unified-numberformat:** more work on stage-3 APIs ([3f510ca](https://github.com/formatjs/formatjs/commit/3f510cac1906682db5a0fb721d62431e7ec0cb7d))
* **@f-fjs/intl-unified-numberformat:** more work on stage-3 APIs ([2ebf471](https://github.com/formatjs/formatjs/commit/2ebf4716131122ce9f5370c7cf8064a481460c5a))
* **@f-fjs/intl-unified-numberformat:** Update README with more examples, disable some tests ([35dd2f0](https://github.com/formatjs/formatjs/commit/35dd2f0b2d592198d973fb394c36d6c5538993d5))
* **@f-fjs/extract-cldr-data:** extract raw numbers ([6fa5f3f](https://github.com/formatjs/formatjs/commit/6fa5f3f68f61ad65f1a3c3b9c54f60da140fd802))


### BREAKING CHANGES

* **@f-fjs/intl-unified-numberformat:** Although API remains the same, the CLDR distributed data has changed





# [2.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.8...@f-fjs/intl-unified-numberformat@2.2.0) (2019-12-02)


### Features

* **@f-fjs/intl-unified-numberformat:** add currencyDisplay… ([#332](https://github.com/formatjs/formatjs/issues/332)) ([0cf8629](https://github.com/formatjs/formatjs/commit/0cf862992cae62a162d6935797ffd7c0848cf3ea))





## [2.1.8](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.7...@f-fjs/intl-unified-numberformat@2.1.8) (2019-12-01)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [2.1.7](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.6...@f-fjs/intl-unified-numberformat@2.1.7) (2019-11-26)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [2.1.6](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.5...@f-fjs/intl-unified-numberformat@2.1.6) (2019-11-25)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** fix crash in numberformat ([e3115e2](https://github.com/formatjs/formatjs/commit/e3115e2462cb282edc98d4dbe71ffbf7eb3da5c8)), closes [#293](https://github.com/formatjs/formatjs/issues/293)





## [2.1.5](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.4...@f-fjs/intl-unified-numberformat@2.1.5) (2019-11-23)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [2.1.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.3...@f-fjs/intl-unified-numberformat@2.1.4) (2019-11-21)


### Bug Fixes

* **@f-fjs/intl-relativetimeformat:** use api-extractor to combine d.ts ([bd803dd](https://github.com/formatjs/formatjs/commit/bd803dd5fcd6f13994e686b8d08bd1b8be6a2e4b))
* **@f-fjs/intl-messageformat:** use api-extractor to combine type definitions ([6c6af9d](https://github.com/formatjs/formatjs/commit/6c6af9d837d13938fa647cbbbaf2f417935908fd))





## [2.1.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.2...@f-fjs/intl-unified-numberformat@2.1.3) (2019-11-20)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [2.1.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.1...@f-fjs/intl-unified-numberformat@2.1.2) (2019-11-11)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [2.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.1.0...@f-fjs/intl-unified-numberformat@2.1.1) (2019-11-10)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





# [2.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.0.1...@f-fjs/intl-unified-numberformat@2.1.0) (2019-10-23)


### Features

* **@f-fjs/intl-unified-numberformat:** add correct typings to UnifiedNumberFormatOptions ([70b8baa](https://github.com/formatjs/formatjs/commit/70b8baafb2bd57ec30ab8d273391bd2c1561cc74))





## [2.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@2.0.0...@f-fjs/intl-unified-numberformat@2.0.1) (2019-10-23)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





# [2.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@1.0.1...@f-fjs/intl-unified-numberformat@2.0.0) (2019-10-01)


### Features

* **@f-fjs/intl-unified-numberformat:** rename __addUnitLocaleData to __addLocaleData ([d251733](https://github.com/formatjs/formatjs/commit/d251733))
* **@f-fjs/intl-utils:** add IE11-safe getCanonicalLocales, ([b5f37c4](https://github.com/formatjs/formatjs/commit/b5f37c4)), closes [#200](https://github.com/formatjs/formatjs/issues/200)


### BREAKING CHANGES

* **@f-fjs/intl-unified-numberformat:** rename __addUnitLocaleData to __addLocaleData for
consistency with other polyfills





## [1.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@1.0.0...@f-fjs/intl-unified-numberformat@1.0.1) (2019-09-27)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





# [1.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.5.2...@f-fjs/intl-unified-numberformat@1.0.0) (2019-09-20)


### Bug Fixes

* **@f-fjs/intl-relativetimeformat:** add more side-effectful files ([03d2a10](https://github.com/formatjs/formatjs/commit/03d2a10))
* **@f-fjs/intl-unified-numberformat:** rm side effects array due to build complication ([499df4f](https://github.com/formatjs/formatjs/commit/499df4f))


### Features

* **@f-fjs/intl-unified-numberformat:** mark the package as side-effects free ([d05c293](https://github.com/formatjs/formatjs/commit/d05c293))


### BREAKING CHANGES

* **@f-fjs/intl-unified-numberformat:** This package no longer comes with `en` by default





## [0.5.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.5.1...@f-fjs/intl-unified-numberformat@0.5.2) (2019-09-17)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [0.5.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.5.0...@f-fjs/intl-unified-numberformat@0.5.1) (2019-09-15)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





# [0.5.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.9...@f-fjs/intl-unified-numberformat@0.5.0) (2019-09-13)


### Bug Fixes

* **@f-fjs/intl-utils:** consolidate parent lookup ([bac2eae](https://github.com/formatjs/formatjs/commit/bac2eae))


### Features

* **@f-fjs/extract-cldr-data:** dedupe relative data, reduce relative time data by 40% ([db12bf3](https://github.com/formatjs/formatjs/commit/db12bf3))
* **@f-fjs/extract-cldr-data:** even smaller locale data ([66a0313](https://github.com/formatjs/formatjs/commit/66a0313))





## [0.4.9](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.8...@f-fjs/intl-unified-numberformat@0.4.9) (2019-09-03)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [0.4.8](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.7...@f-fjs/intl-unified-numberformat@0.4.8) (2019-09-03)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [0.4.7](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.6...@f-fjs/intl-unified-numberformat@0.4.7) (2019-09-03)


### Bug Fixes

* **@f-fjs/intl-relativetimeformat:** pass in raw locales to lookup ([9c2af2a](https://github.com/formatjs/formatjs/commit/9c2af2a))
* **@f-fjs/intl-unified-numberformat:** memoize Intl.PluralRules ([429a7db](https://github.com/formatjs/formatjs/commit/429a7db))
* **@f-fjs/intl-unified-numberformat:** pass in raw locales to lookup ([719c6f2](https://github.com/formatjs/formatjs/commit/719c6f2))
* **@f-fjs/intl-unified-numberformat:** rely on Intl.PluralRules supported locales instead of both PL & NumberFormat ([8c8578d](https://github.com/formatjs/formatjs/commit/8c8578d))





## [0.4.6](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.5...@f-fjs/intl-unified-numberformat@0.4.6) (2019-08-29)

**Note:** Version bump only for package @f-fjs/intl-unified-numberformat





## [0.4.5](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.4...@f-fjs/intl-unified-numberformat@0.4.5) (2019-08-30)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** fix cldr build ([3cb5dae](https://github.com/formatjs/formatjs/commit/3cb5dae))





## [0.4.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.3...@f-fjs/intl-unified-numberformat@0.4.4) (2019-08-30)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** export types as well ([99b886b](https://github.com/formatjs/formatjs/commit/99b886b))





## [0.4.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.2...@f-fjs/intl-unified-numberformat@0.4.3) (2019-08-29)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** fix package.json ([5940281](https://github.com/formatjs/formatjs/commit/5940281))





## [0.4.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.1...@f-fjs/intl-unified-numberformat@0.4.2) (2019-08-29)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** add .npmignore ([3ebb117](https://github.com/formatjs/formatjs/commit/3ebb117))





## [0.4.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.4.0...@f-fjs/intl-unified-numberformat@0.4.1) (2019-08-21)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** add DEFAULT_LOCALE in locale lookup ([1f25453](https://github.com/formatjs/formatjs/commit/1f25453))
* **@f-fjs/intl-unified-numberformat:** dist polyfill with all locales ([f4c494a](https://github.com/formatjs/formatjs/commit/f4c494a))
* **@f-fjs/intl-unified-numberformat:** use locale-lookup from intl-utils ([7f5eb9e](https://github.com/formatjs/formatjs/commit/7f5eb9e))
* **intl-unified-numberformat:** dist UMD ([f568cdc](https://github.com/formatjs/formatjs/commit/f568cdc)), closes [#159](https://github.com/formatjs/formatjs/issues/159)





# [0.4.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-unified-numberformat@0.2.0...@f-fjs/intl-unified-numberformat@0.4.0) (2019-08-19)


### Bug Fixes

* **@f-fjs/intl-utils:** change default quarter to false in selectUnit ([dadab10](https://github.com/formatjs/formatjs/commit/dadab10))


### Features

* **@f-fjs/intl-unified-numberformat:** add polyfill option ([4c1d692](https://github.com/formatjs/formatjs/commit/4c1d692))
* **@f-fjs/extract-cldr-data:** fix unit extraction ([7e54a0b](https://github.com/formatjs/formatjs/commit/7e54a0b))





# 0.2.0 (2019-08-16)


### Features

* **@f-fjs/extract-cldr-data:** polyfill units ([e291eeb](https://github.com/formatjs/formatjs/commit/e291eeb))
