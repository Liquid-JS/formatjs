# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 4.2.22 (2020-03-13)


### Bug Fixes

* generate .mjs instead of lib ([0c34ee4](https://github.com/formatjs/formatjs/commit/0c34ee46f87459853ceef3a92309e77a5dd4b82c))
* generate lib instead of mjs ([05e63b3](https://github.com/formatjs/formatjs/commit/05e63b3aa2544c961087415b44ad6ba1572a659c))
* remove redundant checks, k? ([9b0f7a3](https://github.com/formatjs/formatjs/commit/9b0f7a3adea8af97c969b29efd2c6294e2edeb2c))


### Features

* **intl-format-cache:** fix TS definition ([71ae9eb](https://github.com/formatjs/formatjs/commit/71ae9eb7069ba297fcc52b852ce30a5cbe768e38))
* **intl-format-cache:** mark the package as side-effects free ([767f0a1](https://github.com/formatjs/formatjs/commit/767f0a18fcebe8da4ff948d626e901d3f5e27b04))
* **intl-messageformat:** allow passing in formatters ([#107](https://github.com/formatjs/formatjs/issues/107)) ([3605693](https://github.com/formatjs/formatjs/commit/3605693e3ddbad4c964578222945f82f5dfe80e2))
* **intl-messageformat:** rm bundled intl-pluralrules ([a8526c3](https://github.com/formatjs/formatjs/commit/a8526c3d5697911790d3c08bfb513ec9de217c2c))
* **intl-messageformat-parser:** add printer to print AST to string ([ec0eaa2](https://github.com/formatjs/formatjs/commit/ec0eaa2370ff06db573483d5ee408108d67c5d1f))
* **intl-messageformat-parser:** Rewrite grammar ([#112](https://github.com/formatjs/formatjs/issues/112)) ([093de35](https://github.com/formatjs/formatjs/commit/093de3564852bf01c0a9b95d658aaf6d613baf53))
* **intl-relativetimeformat:** make intl-relativetimeformat test262-compliant ([#95](https://github.com/formatjs/formatjs/issues/95)) ([91669a3](https://github.com/formatjs/formatjs/commit/91669a3f75421c95601d010136507b6314e089ca))
* **intl-utils:** Add intl-utils ([#98](https://github.com/formatjs/formatjs/issues/98)) ([2329c57](https://github.com/formatjs/formatjs/commit/2329c5707d4c42162ac0b20ef92b0b0aebc1173b))
* add package intl-relativetimeformat ([#51](https://github.com/formatjs/formatjs/issues/51)) ([48c0f43](https://github.com/formatjs/formatjs/commit/48c0f43cf3231a8c8ba997c9e1083b6714cd60ea))


### BREAKING CHANGES

* **intl-messageformat-parser:** This completely changes the AST produced by the parser

Before:
```
complex_msg AST length 12567
normal_msg AST length 2638
simple_msg AST length 567
string_msg AST length 288
complex_msg x 3,405 ops/sec ±5.44% (81 runs sampled)
normal_msg x 27,513 ops/sec ±2.14% (87 runs sampled)
simple_msg x 113,043 ops/sec ±1.20% (89 runs sampled)
string_msg x 147,838 ops/sec ±0.78% (90 runs sampled)
```

After:
```
complex_msg AST length 2053
normal_msg AST length 410
simple_msg AST length 79
string_msg AST length 36
complex_msg x 3,926 ops/sec ±2.37% (90 runs sampled)
normal_msg x 27,641 ops/sec ±3.93% (86 runs sampled)
simple_msg x 100,764 ops/sec ±5.35% (79 runs sampled)
string_msg x 120,362 ops/sec ±7.11% (74 runs sampled)
```

* feat: normalize hashtag token in plural

* feat(intl-messageformat): adapt to new AST

* feat(babel-plugin-react-intl): adapt to new AST
* **intl-messageformat:** We no longer include intl-pluralrules in our main index
file. Consumer should polyfill accordingly.






## [4.2.21](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.20...@f-fjs/intl-format-cache@4.2.21) (2020-01-27)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.20](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.19...@f-fjs/intl-format-cache@4.2.20) (2020-01-22)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.19](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.18...@f-fjs/intl-format-cache@4.2.19) (2020-01-09)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.18](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.17...@f-fjs/intl-format-cache@4.2.18) (2020-01-08)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.17](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.16...@f-fjs/intl-format-cache@4.2.17) (2020-01-06)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.16](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.15...@f-fjs/intl-format-cache@4.2.16) (2019-12-27)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.15](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.14...@f-fjs/intl-format-cache@4.2.15) (2019-12-27)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.14](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.13...@f-fjs/intl-format-cache@4.2.14) (2019-12-26)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.13](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.12...@f-fjs/intl-format-cache@4.2.13) (2019-12-02)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.12](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.11...@f-fjs/intl-format-cache@4.2.12) (2019-12-01)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.11](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.10...@f-fjs/intl-format-cache@4.2.11) (2019-11-26)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.10](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.9...@f-fjs/intl-format-cache@4.2.10) (2019-11-25)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.9](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.8...@f-fjs/intl-format-cache@4.2.9) (2019-11-23)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.8](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.7...@f-fjs/intl-format-cache@4.2.8) (2019-11-21)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.7](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.6...@f-fjs/intl-format-cache@4.2.7) (2019-11-20)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.6](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.5...@f-fjs/intl-format-cache@4.2.6) (2019-11-10)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.5](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.3...@f-fjs/intl-format-cache@4.2.5) (2019-10-30)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.3...@f-fjs/intl-format-cache@4.2.4) (2019-10-30)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.2...@f-fjs/intl-format-cache@4.2.3) (2019-10-23)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.1...@f-fjs/intl-format-cache@4.2.2) (2019-10-01)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.2.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.2.0...@f-fjs/intl-format-cache@4.2.1) (2019-09-27)

**Note:** Version bump only for package @f-fjs/intl-format-cache





# [4.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.22...@f-fjs/intl-format-cache@4.2.0) (2019-09-20)


### Features

* **@f-fjs/intl-format-cache:** mark the package as side-effects free ([767f0a1](https://github.com/formatjs/formatjs/commit/767f0a1))





## [4.1.22](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.21...@f-fjs/intl-format-cache@4.1.22) (2019-09-17)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.21](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.20...@f-fjs/intl-format-cache@4.1.21) (2019-09-15)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.20](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.19...@f-fjs/intl-format-cache@4.1.20) (2019-09-13)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.19](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.18...@f-fjs/intl-format-cache@4.1.19) (2019-09-03)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.18](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.17...@f-fjs/intl-format-cache@4.1.18) (2019-09-03)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.17](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.16...@f-fjs/intl-format-cache@4.1.17) (2019-09-03)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.16](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.15...@f-fjs/intl-format-cache@4.1.16) (2019-08-29)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.15](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.14...@f-fjs/intl-format-cache@4.1.15) (2019-08-19)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.14](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.13...@f-fjs/intl-format-cache@4.1.14) (2019-08-21)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.13](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.12...@f-fjs/intl-format-cache@4.1.13) (2019-08-19)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.12](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.11...@f-fjs/intl-format-cache@4.1.12) (2019-08-16)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.11](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.10...@f-fjs/intl-format-cache@4.1.11) (2019-08-16)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.10](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.9...@f-fjs/intl-format-cache@4.1.10) (2019-08-12)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.9](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.8...@f-fjs/intl-format-cache@4.1.9) (2019-08-11)


### Bug Fixes

* generate lib instead of mjs ([05e63b3](https://github.com/formatjs/formatjs/commit/05e63b3))





## [4.1.8](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.7...@f-fjs/intl-format-cache@4.1.8) (2019-08-10)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.7](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.6...@f-fjs/intl-format-cache@4.1.7) (2019-08-09)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.6](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.5...@f-fjs/intl-format-cache@4.1.6) (2019-08-06)


### Bug Fixes

* generate .mjs instead of lib ([0c34ee4](https://github.com/formatjs/formatjs/commit/0c34ee4))





## [4.1.5](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.4...@f-fjs/intl-format-cache@4.1.5) (2019-08-02)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.3...@f-fjs/intl-format-cache@4.1.4) (2019-07-29)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.2...@f-fjs/intl-format-cache@4.1.3) (2019-07-25)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.1...@f-fjs/intl-format-cache@4.1.2) (2019-07-23)

**Note:** Version bump only for package @f-fjs/intl-format-cache





## [4.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.1.0...@f-fjs/intl-format-cache@4.1.1) (2019-07-12)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [4.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.0.1...@f-fjs/intl-format-cache@4.1.0) (2019-07-12)

### Features

- **@f-fjs/intl-messageformat-parser:** add printer to print AST to string ([ec0eaa2](https://github.com/formatjs/formatjs/commit/ec0eaa2))

## [4.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@4.0.0...@f-fjs/intl-format-cache@4.0.1) (2019-07-09)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [4.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.3.2...@f-fjs/intl-format-cache@4.0.0) (2019-07-08)

### Features

- **@f-fjs/intl-messageformat-parser:** Rewrite grammar ([#112](https://github.com/formatjs/formatjs/issues/112)) ([093de35](https://github.com/formatjs/formatjs/commit/093de35))

### BREAKING CHANGES

- **@f-fjs/intl-messageformat-parser:** This completely changes the AST produced by the parser

Before:

```
complex_msg AST length 12567
normal_msg AST length 2638
simple_msg AST length 567
string_msg AST length 288
complex_msg x 3,405 ops/sec ±5.44% (81 runs sampled)
normal_msg x 27,513 ops/sec ±2.14% (87 runs sampled)
simple_msg x 113,043 ops/sec ±1.20% (89 runs sampled)
string_msg x 147,838 ops/sec ±0.78% (90 runs sampled)
```

After:

```
complex_msg AST length 2053
normal_msg AST length 410
simple_msg AST length 79
string_msg AST length 36
complex_msg x 3,926 ops/sec ±2.37% (90 runs sampled)
normal_msg x 27,641 ops/sec ±3.93% (86 runs sampled)
simple_msg x 100,764 ops/sec ±5.35% (79 runs sampled)
string_msg x 120,362 ops/sec ±7.11% (74 runs sampled)
```

- feat: normalize hashtag token in plural

- feat(@f-fjs/intl-messageformat): adapt to new AST

- feat(@f-fjs/babel-plugin-react-intl): adapt to new AST

## [3.3.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.3.1...@f-fjs/intl-format-cache@3.3.2) (2019-06-28)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [3.3.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.3.0...@f-fjs/intl-format-cache@3.3.1) (2019-07-02)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [3.3.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.2.1...@f-fjs/intl-format-cache@3.3.0) (2019-06-27)

### Features

- **@f-fjs/intl-messageformat:** allow passing in formatters ([#107](https://github.com/formatjs/formatjs/issues/107)) ([3605693](https://github.com/formatjs/formatjs/commit/3605693))

## [3.2.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.2.0...@f-fjs/intl-format-cache@3.2.1) (2019-06-26)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [3.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.1.2...@f-fjs/intl-format-cache@3.2.0) (2019-06-27)

### Features

- **intl-relativetimeformat:** make intl-relativetimeformat test262-compliant ([#95](https://github.com/formatjs/formatjs/issues/95)) ([91669a3](https://github.com/formatjs/formatjs/commit/91669a3))
- **intl-utils:** Add intl-utils ([#98](https://github.com/formatjs/formatjs/issues/98)) ([2329c57](https://github.com/formatjs/formatjs/commit/2329c57))

## [3.1.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.1.1...@f-fjs/intl-format-cache@3.1.2) (2019-06-18)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [3.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.1.0...@f-fjs/intl-format-cache@3.1.1) (2019-06-18)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [3.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.0.2...@f-fjs/intl-format-cache@3.1.0) (2019-06-18)

### Features

- **@f-fjs/intl-format-cache:** fix TS definition ([71ae9eb](https://github.com/formatjs/formatjs/commit/71ae9eb))

## [3.0.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.0.1...@f-fjs/intl-format-cache@3.0.2) (2019-06-12)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [3.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@3.0.0...@f-fjs/intl-format-cache@3.0.1) (2019-06-05)

**Note:** Version bump only for package @f-fjs/intl-format-cache

# [3.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.9...@f-fjs/intl-format-cache@3.0.0) (2019-06-05)

### Features

- add package intl-relativetimeformat ([#51](https://github.com/formatjs/formatjs/issues/51)) ([48c0f43](https://github.com/formatjs/formatjs/commit/48c0f43))
- **@f-fjs/intl-messageformat:** rm bundled intl-pluralrules ([a8526c3](https://github.com/formatjs/formatjs/commit/a8526c3))

### BREAKING CHANGES

- **@f-fjs/intl-messageformat:** We no longer include intl-pluralrules in our main index
  file. Consumer should polyfill accordingly.

## [2.2.9](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.7...@f-fjs/intl-format-cache@2.2.9) (2019-06-03)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.8](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.7...@f-fjs/intl-format-cache@2.2.8) (2019-06-03)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.7](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.6...@f-fjs/intl-format-cache@2.2.7) (2019-05-31)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.6](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.5...@f-fjs/intl-format-cache@2.2.6) (2019-05-31)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.5](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.4...@f-fjs/intl-format-cache@2.2.5) (2019-05-29)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.4](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.2...@f-fjs/intl-format-cache@2.2.4) (2019-05-28)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.3](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.2...@f-fjs/intl-format-cache@2.2.3) (2019-05-28)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.2](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.1...@f-fjs/intl-format-cache@2.2.2) (2019-05-28)

**Note:** Version bump only for package @f-fjs/intl-format-cache

## [2.2.1](https://github.com/formatjs/formatjs/compare/@f-fjs/intl-format-cache@2.2.1...@f-fjs/intl-format-cache@2.2.1) (2019-05-28)
