# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 10.1.2 (2020-03-13)


### Bug Fixes

* remove redundant checks, k? ([9b0f7a3](https://github.com/formatjs/formatjs/commit/9b0f7a3adea8af97c969b29efd2c6294e2edeb2c))






## [10.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.1.0...@f-fjs/extract-cldr-data@10.1.1) (2020-01-27)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





# [10.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.0.4...@f-fjs/extract-cldr-data@10.1.0) (2020-01-22)


### Features

* **@f-fjs/intl-displaynames:** initial commit ([#469](https://github.com/formatjs/formatjs/issues/469)) ([137b994](https://github.com/formatjs/formatjs/commit/137b994846526b02de80b024c860b2771868f236))





## [10.0.4](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.0.3...@f-fjs/extract-cldr-data@10.0.4) (2020-01-09)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [10.0.3](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.0.2...@f-fjs/extract-cldr-data@10.0.3) (2020-01-08)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [10.0.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.0.1...@f-fjs/extract-cldr-data@10.0.2) (2020-01-06)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** fix cases where {number} or {0} is in the middle of the pattern ([3ca49d8](https://github.com/formatjs/formatjs/commit/3ca49d8f93a9acc1ea3908ffd9e367b21aa97248))
* **@f-fjs/intl-unified-numberformat:** fix currency compact form having special plural rules ([b0a6d4f](https://github.com/formatjs/formatjs/commit/b0a6d4f3120386a81ceb05fac09c56307b561e91))





## [10.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@10.0.0...@f-fjs/extract-cldr-data@10.0.1) (2019-12-27)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





# [10.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.10.0...@f-fjs/extract-cldr-data@10.0.0) (2019-12-26)


### Bug Fixes

* **@f-fjs/intl-unified-numberformat:** add more tests ([5122cdc](https://github.com/formatjs/formatjs/commit/5122cdc340f2fcbf05c093075dd97c459cc5709c))
* **@f-fjs/intl-unified-numberformat:** fix more processing stuff ([b4f0e4a](https://github.com/formatjs/formatjs/commit/b4f0e4a6140586967d996b3b99c5f6d1acb107d0))
* **@f-fjs/intl-unified-numberformat:** fix unit issue ([8feb8e7](https://github.com/formatjs/formatjs/commit/8feb8e702736bf6c33974d9ae69dd2ac09d4bc37))
* **@f-fjs/intl-unified-numberformat:** more fixes on data extraction ([8c68d8a](https://github.com/formatjs/formatjs/commit/8c68d8adc085c81e97dc5ae170c578ad66de3a5e))
* **@f-fjs/intl-unified-numberformat:** more work on currency formatting ([5a5b8e6](https://github.com/formatjs/formatjs/commit/5a5b8e63783d48c86a87a9836e45415e27e38b26))
* **@f-fjs/intl-unified-numberformat:** more work on fixing currency pattern ([6cb0d67](https://github.com/formatjs/formatjs/commit/6cb0d6760404be8079361230537f1de1a4dd8c6e))
* **@f-fjs/intl-unified-numberformat:** move currency processing to lazy ([6e1d621](https://github.com/formatjs/formatjs/commit/6e1d62189373dc4fdf71614c78a353f96e28c8ed))
* **@f-fjs/intl-unified-numberformat:** use CLDR symbol instead of ISO code for currencySymbol ([4db663d](https://github.com/formatjs/formatjs/commit/4db663dbcf6066923781413b90ee0ce56dfff69f))


### Features

* **@f-fjs/intl-unified-numberformat:** add currency support and currency matching algo ([786858d](https://github.com/formatjs/formatjs/commit/786858dc07cf82c4c6d0be968b3192e50f189567))
* **@f-fjs/intl-unified-numberformat:** add currency-digits extractions ([8261383](https://github.com/formatjs/formatjs/commit/82613832782e7dc7acf511fc911d910152d047e6))
* **@f-fjs/intl-unified-numberformat:** initial work on adding more stage 3 functionalities ([fc09006](https://github.com/formatjs/formatjs/commit/fc0900653586cd933a4b95c3c129ecad4010beed))
* **@f-fjs/intl-unified-numberformat:** more work on stage-3 APIs ([3f510ca](https://github.com/formatjs/formatjs/commit/3f510cac1906682db5a0fb721d62431e7ec0cb7d))
* **@f-fjs/intl-unified-numberformat:** more work on stage-3 APIs ([2ebf471](https://github.com/formatjs/formatjs/commit/2ebf4716131122ce9f5370c7cf8064a481460c5a))
* **@f-fjs/intl-unified-numberformat:** more work on stage-3 APIs ([a727599](https://github.com/formatjs/formatjs/commit/a727599ee0de1b01d15f488d70d5b3f7b3d602a6))
* **@f-fjs/intl-utils:** add InternalSlotToken enum ([dab275a](https://github.com/formatjs/formatjs/commit/dab275afe512dfd71d844e94f43f15f012316fba))
* **@f-fjs/extract-cldr-data:** extract raw numbers ([6fa5f3f](https://github.com/formatjs/formatjs/commit/6fa5f3f68f61ad65f1a3c3b9c54f60da140fd802))
* **@f-fjs/extract-cldr-data:** pull collapsing ldml to utils ([68d9d96](https://github.com/formatjs/formatjs/commit/68d9d96a02e0820f05a3b10badcda1a100aaa045))


### BREAKING CHANGES

* **@f-fjs/intl-unified-numberformat:** Although API remains the same, the CLDR distributed data has changed





# [9.10.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.8...@f-fjs/extract-cldr-data@9.10.0) (2019-12-02)


### Features

* **@f-fjs/intl-unified-numberformat:** add currencyDisplay… ([#332](https://github.com/formatjs/formatjs/issues/332)) ([0cf8629](https://github.com/formatjs/formatjs/commit/0cf862992cae62a162d6935797ffd7c0848cf3ea))





## [9.9.8](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.7...@f-fjs/extract-cldr-data@9.9.8) (2019-12-01)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.9.7](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.6...@f-fjs/extract-cldr-data@9.9.7) (2019-11-26)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.9.6](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.5...@f-fjs/extract-cldr-data@9.9.6) (2019-11-25)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.9.5](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.4...@f-fjs/extract-cldr-data@9.9.5) (2019-11-23)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.9.4](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.3...@f-fjs/extract-cldr-data@9.9.4) (2019-11-21)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.9.3](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.2...@f-fjs/extract-cldr-data@9.9.3) (2019-11-20)


### Bug Fixes

* **lint:** fix lint config and rerun ([041eb99](https://github.com/formatjs/formatjs/commit/041eb99706164048b5b8ce7079955897ce27ed70))





## [9.9.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.1...@f-fjs/extract-cldr-data@9.9.2) (2019-11-10)


### Bug Fixes

* **@f-fjs/intl-messageformat:** pass raw locales down to individual formatters ([3a74c2e](https://github.com/formatjs/formatjs/commit/3a74c2e7c6592de3a4f5ca182c5846fe095abe55)), closes [#255](https://github.com/formatjs/formatjs/issues/255)





## [9.9.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.9.0...@f-fjs/extract-cldr-data@9.9.1) (2019-10-23)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





# [9.9.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.8.0...@f-fjs/extract-cldr-data@9.9.0) (2019-10-01)


### Features

* **@f-fjs/intl-utils:** add IE11-safe getCanonicalLocales, ([b5f37c4](https://github.com/formatjs/formatjs/commit/b5f37c4)), closes [#200](https://github.com/formatjs/formatjs/issues/200)





# [9.8.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.7.2...@f-fjs/extract-cldr-data@9.8.0) (2019-09-27)


### Features

* **@f-fjs/intl-listformat:** add Intl.ListFormat polyfill ([6e5d476](https://github.com/formatjs/formatjs/commit/6e5d476))
* **@f-fjs/intl-utils:** add list-format types ([066d95b](https://github.com/formatjs/formatjs/commit/066d95b))





## [9.7.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.7.1...@f-fjs/extract-cldr-data@9.7.2) (2019-09-20)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.7.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.7.0...@f-fjs/extract-cldr-data@9.7.1) (2019-09-15)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





# [9.7.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.6.2...@f-fjs/extract-cldr-data@9.7.0) (2019-09-13)


### Bug Fixes

* **@f-fjs/intl-utils:** consolidate parent lookup ([bac2eae](https://github.com/formatjs/formatjs/commit/bac2eae))
* **@f-fjs/extract-cldr-data:** fix parent deduping logic ([138860b](https://github.com/formatjs/formatjs/commit/138860b))


### Features

* **@f-fjs/extract-cldr-data:** dedupe relative data, reduce relative time data by 40% ([db12bf3](https://github.com/formatjs/formatjs/commit/db12bf3))
* **@f-fjs/extract-cldr-data:** dont embed parentLocale everywhere ([10bca2f](https://github.com/formatjs/formatjs/commit/10bca2f))
* **@f-fjs/extract-cldr-data:** even smaller locale data ([66a0313](https://github.com/formatjs/formatjs/commit/66a0313))
* **@f-fjs/extract-cldr-data:** expose getting parent locale hierarchy ([778998b](https://github.com/formatjs/formatjs/commit/778998b))





## [9.6.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.6.1...@f-fjs/extract-cldr-data@9.6.2) (2019-09-03)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.6.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.6.0...@f-fjs/extract-cldr-data@9.6.1) (2019-09-03)


### Bug Fixes

* **@f-fjs/intl-utils:** add polyfill-utils like getOption/toObject ([7cf1cc4](https://github.com/formatjs/formatjs/commit/7cf1cc4))





# [9.6.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.5.0...@f-fjs/extract-cldr-data@9.6.0) (2019-08-19)


### Features

* **@f-fjs/extract-cldr-data:** fix unit extraction ([7e54a0b](https://github.com/formatjs/formatjs/commit/7e54a0b))





# [9.5.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.4.2...@f-fjs/extract-cldr-data@9.5.0) (2019-08-16)


### Features

* **@f-fjs/extract-cldr-data:** polyfill units ([e291eeb](https://github.com/formatjs/formatjs/commit/e291eeb))





## [9.4.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.4.1...@f-fjs/extract-cldr-data@9.4.2) (2019-08-12)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.4.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.4.0...@f-fjs/extract-cldr-data@9.4.1) (2019-08-11)


### Bug Fixes

* generate lib instead of mjs ([05e63b3](https://github.com/formatjs/formatjs/commit/05e63b3))





# [9.4.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.3.3...@f-fjs/extract-cldr-data@9.4.0) (2019-08-09)


### Features

* **@f-fjs/intl-relativetimeformat:** add aliases support ([a2aec8c](https://github.com/formatjs/formatjs/commit/a2aec8c))





## [9.3.3](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.3.2...@f-fjs/extract-cldr-data@9.3.3) (2019-08-06)


### Bug Fixes

* generate .mjs instead of lib ([0c34ee4](https://github.com/formatjs/formatjs/commit/0c34ee4))





## [9.3.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.3.1...@f-fjs/extract-cldr-data@9.3.2) (2019-07-23)

**Note:** Version bump only for package @f-fjs/extract-cldr-data





## [9.3.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.3.0...@f-fjs/extract-cldr-data@9.3.1) (2019-07-12)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

# [9.3.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.2.3...@f-fjs/extract-cldr-data@9.3.0) (2019-07-12)

### Features

- **@f-fjs/intl-messageformat-parser:** add printer to print AST to string ([ec0eaa2](https://github.com/formatjs/formatjs/commit/ec0eaa2))

## [9.2.3](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.2.2...@f-fjs/extract-cldr-data@9.2.3) (2019-07-09)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

## [9.2.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.2.1...@f-fjs/extract-cldr-data@9.2.2) (2019-07-08)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

## [9.2.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.2.0...@f-fjs/extract-cldr-data@9.2.1) (2019-06-28)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

# [9.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.1.1...@f-fjs/extract-cldr-data@9.2.0) (2019-06-27)

### Features

- **@f-fjs/intl-messageformat:** allow passing in formatters ([#107](https://github.com/formatjs/formatjs/issues/107)) ([3605693](https://github.com/formatjs/formatjs/commit/3605693))

## [9.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.1.0...@f-fjs/extract-cldr-data@9.1.1) (2019-06-26)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

# [9.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.0.2...@f-fjs/extract-cldr-data@9.1.0) (2019-06-27)

### Features

- **intl-utils:** Add intl-utils ([#98](https://github.com/formatjs/formatjs/issues/98)) ([2329c57](https://github.com/formatjs/formatjs/commit/2329c57))

## [9.0.2](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.0.1...@f-fjs/extract-cldr-data@9.0.2) (2019-06-18)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

## [9.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@9.0.0...@f-fjs/extract-cldr-data@9.0.1) (2019-06-18)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

# [9.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@8.0.1...@f-fjs/extract-cldr-data@9.0.0) (2019-06-18)

### Features

- **@f-fjs/extract-cldr-data:** migrate to TS ([#91](https://github.com/formatjs/formatjs/issues/91)) ([c012d6e](https://github.com/formatjs/formatjs/commit/c012d6e))

### BREAKING CHANGES

- **@f-fjs/extract-cldr-data:** Export main function via `default` in index file.
  If you're using `require('@f-fjs/extract-cldr-data')`, change it to
  `require('@f-fjs/extract-cldr-data').default`.

## [8.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/extract-cldr-data@8.0.0...@f-fjs/extract-cldr-data@8.0.1) (2019-06-12)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

# [8.0.0](https://github.com/yahoo/@f-fjs/extract-cldr-data/compare/@f-fjs/extract-cldr-data@6.1.3...@f-fjs/extract-cldr-data@8.0.0) (2019-06-03)

### Features

- **@f-fjs/extract-cldr-data:** add quarter data ([#53](https://github.com/yahoo/@f-fjs/extract-cldr-data/issues/53)) ([e37a242](https://github.com/yahoo/@f-fjs/extract-cldr-data/commit/e37a242))
- **@f-fjs/extract-cldr-data:** rm plural ([#52](https://github.com/yahoo/@f-fjs/extract-cldr-data/issues/52)) ([62a6de4](https://github.com/yahoo/@f-fjs/extract-cldr-data/commit/62a6de4))

### BREAKING CHANGES

- **@f-fjs/extract-cldr-data:** Remove plural extraction since we rely on native
  Intl.PluralRules

* Upgrade CLDR to v35
* Extract `*-narrow` rules for relative fields
* Remove es-AR since as of CLDRv35 it cannot be de-duped

# [7.0.0](https://github.com/yahoo/@f-fjs/extract-cldr-data/compare/@f-fjs/extract-cldr-data@6.1.3...@f-fjs/extract-cldr-data@7.0.0) (2019-06-03)

### Features

- **@f-fjs/extract-cldr-data:** add quarter data ([#53](https://github.com/yahoo/@f-fjs/extract-cldr-data/issues/53)) ([e37a242](https://github.com/yahoo/@f-fjs/extract-cldr-data/commit/e37a242))
- **@f-fjs/extract-cldr-data:** rm plural ([#52](https://github.com/yahoo/@f-fjs/extract-cldr-data/issues/52)) ([62a6de4](https://github.com/yahoo/@f-fjs/extract-cldr-data/commit/62a6de4))

### BREAKING CHANGES

- **@f-fjs/extract-cldr-data:** Remove plural extraction since we rely on native
  Intl.PluralRules

* Upgrade CLDR to v35
* Extract `*-narrow` rules for relative fields
* Remove es-AR since as of CLDRv35 it cannot be de-duped

## [6.1.3](https://github.com/yahoo/@f-fjs/extract-cldr-data/compare/@f-fjs/extract-cldr-data@6.1.2...@f-fjs/extract-cldr-data@6.1.3) (2019-05-31)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

## [6.1.2](https://github.com/yahoo/@f-fjs/extract-cldr-data/compare/@f-fjs/extract-cldr-data@6.1.1...@f-fjs/extract-cldr-data@6.1.2) (2019-05-28)

**Note:** Version bump only for package @f-fjs/extract-cldr-data

## [6.1.1](https://github.com/yahoo/@f-fjs/extract-cldr-data/compare/@f-fjs/extract-cldr-data@6.1.1...@f-fjs/extract-cldr-data@6.1.1) (2019-05-28)
