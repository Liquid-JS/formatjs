# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.3](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@6.0.2...@f-fjs/babel-plugin-react-intl@6.0.3) (2020-03-16)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl






## 6.0.2 (2020-03-13)


### Bug Fixes

* remove redundant checks, k? ([9b0f7a3](https://github.com/formatjs/formatjs/commit/9b0f7a3adea8af97c969b29efd2c6294e2edeb2c))
* **babel-plugin-react-intl:** add back messages to `metadata`, fixes [#92](https://github.com/formatjs/formatjs/issues/92) ([643f8e5](https://github.com/formatjs/formatjs/commit/643f8e5968af9e0050f468075a4ed2724ceb45f3))
* **babel-plugin-react-intl:** check if `descriptorPath.id` is present in JSX element ([#150](https://github.com/formatjs/formatjs/issues/150)) ([5e2dffa](https://github.com/formatjs/formatjs/commit/5e2dffaef9a1774c03741d67297219cd14666a0a))
* **babel-plugin-react-intl:** dont trim ws ([f9f4e54](https://github.com/formatjs/formatjs/commit/f9f4e5457e9296af21bd4a5ddde0ca9784391354)), closes [#158](https://github.com/formatjs/formatjs/issues/158)
* **babel-plugin-react-intl:** return raw message without re-printing, fix [#160](https://github.com/formatjs/formatjs/issues/160) ([6897ca9](https://github.com/formatjs/formatjs/commit/6897ca91e251ed850467ccef5794eec0999ef95b))
* **lint:** fix lint config and rerun ([041eb99](https://github.com/formatjs/formatjs/commit/041eb99706164048b5b8ce7079955897ce27ed70))
* generate .mjs instead of lib ([0c34ee4](https://github.com/formatjs/formatjs/commit/0c34ee46f87459853ceef3a92309e77a5dd4b82c))
* generate lib instead of mjs ([05e63b3](https://github.com/formatjs/formatjs/commit/05e63b3aa2544c961087415b44ad6ba1572a659c))
* **relativePath:** path -> p ([a764377](https://github.com/formatjs/formatjs/commit/a764377d776ca5dc862c42353a301e2d4dc4a812))


### Features

* **@formatjs/cli:** A CLI for formatjs ([#234](https://github.com/formatjs/formatjs/issues/234)) ([1f57a0b](https://github.com/formatjs/formatjs/commit/1f57a0b0921e0228cf3fd4eff756b0cd17e28fb5))
* **@formatjs/cli:** add --outFile & --idInterpolationPattern ([0c5e675](https://github.com/formatjs/formatjs/commit/0c5e675ed38f18987674a875fa6ed908ce907fc9))
* **babel-plugin-react-intl:** add `extractFromFormatMessageCall` option to opt-in extracting from `intl.formatMessage`, fixes [#37](https://github.com/formatjs/formatjs/issues/37) ([#39](https://github.com/formatjs/formatjs/issues/39)) ([5d0bb43](https://github.com/formatjs/formatjs/commit/5d0bb434dfae7138c0539c3eee76e7c9c516ea86))
* **babel-plugin-react-intl:** Add enforceDefaultMessage ([#61](https://github.com/formatjs/formatjs/issues/61)) ([8dbb1c3](https://github.com/formatjs/formatjs/commit/8dbb1c32fe218f57ce4a2b1affcb0055a9edc3d2))
* **babel-plugin-react-intl:** allow parsing from @formatjs/macro ([196dcc4](https://github.com/formatjs/formatjs/commit/196dcc44faec56637f3b74db4ed2c13d6842bc61))
* **babel-plugin-react-intl:** remove enforceDescription and enforceDefaultMessage ([72ff434](https://github.com/formatjs/formatjs/commit/72ff4345170f9b240f7331aa6fa36df96a8c823b))
* **babel-plugin-react-intl:** rewrite using new babel 7 APIs ([#89](https://github.com/formatjs/formatjs/issues/89)) ([5bc18b0](https://github.com/formatjs/formatjs/commit/5bc18b056f92de07d10bfeb905ba660263d36001))
* **intl-messageformat:** allow passing in formatters ([#107](https://github.com/formatjs/formatjs/issues/107)) ([3605693](https://github.com/formatjs/formatjs/commit/3605693e3ddbad4c964578222945f82f5dfe80e2))
* **intl-messageformat-parser:** Add native support for parsing XML tag ([51c49fa](https://github.com/formatjs/formatjs/commit/51c49faa46880ae6e005125c59fa23b59f0e7083))
* **intl-messageformat-parser:** add printer to print AST to string ([ec0eaa2](https://github.com/formatjs/formatjs/commit/ec0eaa2370ff06db573483d5ee408108d67c5d1f))
* **intl-messageformat-parser:** Rewrite grammar ([#112](https://github.com/formatjs/formatjs/issues/112)) ([093de35](https://github.com/formatjs/formatjs/commit/093de3564852bf01c0a9b95d658aaf6d613baf53))
* **intl-utils:** Add intl-utils ([#98](https://github.com/formatjs/formatjs/issues/98)) ([2329c57](https://github.com/formatjs/formatjs/commit/2329c5707d4c42162ac0b20ef92b0b0aebc1173b))
* **test:** Add test suite. ([a7b611a](https://github.com/formatjs/formatjs/commit/a7b611a28b4281deac0a9e82ca9c8e36cec1ec06))


### Reverts

* Revert "Remove unsued babel-runtime dependency" ([b38ab3a](https://github.com/formatjs/formatjs/commit/b38ab3af9e36ba847eb5a313839ddd321daa7d6f))


### BREAKING CHANGES

* **intl-messageformat-parser:** This changes the AST and causes potential conflicts
with previous parser version
fix(eslint-plugin-formatjs): Adapt to new parser
chore(babel-plugin-react-intl): update package lock
* **babel-plugin-react-intl:** We want to move things like `enforceDescription` and
`enforceDefaultMessage` to the new eslint-plugin-formatjs instead of
using this babel plugin for linting.
feat(@formatjs/cli): Remove enforceDescription and enforceDefaultMessage
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






## [6.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@6.0.0...@f-fjs/babel-plugin-react-intl@6.0.1) (2020-03-05)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





# [6.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.17...@f-fjs/babel-plugin-react-intl@6.0.0) (2020-03-04)


### Features

* **@f-fjs/intl-messageformat-parser:** Add native support for parsing XML tag ([51c49fa](https://github.com/formatjs/formatjs/commit/51c49faa46880ae6e005125c59fa23b59f0e7083))


### BREAKING CHANGES

* **@f-fjs/intl-messageformat-parser:** This changes the AST and causes potential conflicts
with previous parser version
fix(@f-fjs/eslint-plugin-formatjs): Adapt to new parser
chore(@f-fjs/babel-plugin-react-intl): update package lock





## [5.1.18](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.17...@f-fjs/babel-plugin-react-intl@5.1.18) (2020-01-27)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.17](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.16...@f-fjs/babel-plugin-react-intl@5.1.17) (2020-01-22)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.16](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.15...@f-fjs/babel-plugin-react-intl@5.1.16) (2020-01-09)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.15](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.14...@f-fjs/babel-plugin-react-intl@5.1.15) (2020-01-08)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.14](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.13...@f-fjs/babel-plugin-react-intl@5.1.14) (2020-01-06)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.13](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.12...@f-fjs/babel-plugin-react-intl@5.1.13) (2019-12-27)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.12](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.11...@f-fjs/babel-plugin-react-intl@5.1.12) (2019-12-26)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.11](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.10...@f-fjs/babel-plugin-react-intl@5.1.11) (2019-12-04)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.10](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.9...@f-fjs/babel-plugin-react-intl@5.1.10) (2019-12-02)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.9](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.8...@f-fjs/babel-plugin-react-intl@5.1.9) (2019-12-01)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.8](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.7...@f-fjs/babel-plugin-react-intl@5.1.8) (2019-11-26)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.7](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.6...@f-fjs/babel-plugin-react-intl@5.1.7) (2019-11-25)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.6](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.5...@f-fjs/babel-plugin-react-intl@5.1.6) (2019-11-25)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.5](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.4...@f-fjs/babel-plugin-react-intl@5.1.5) (2019-11-23)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.4](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.3...@f-fjs/babel-plugin-react-intl@5.1.4) (2019-11-21)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.3](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.2...@f-fjs/babel-plugin-react-intl@5.1.3) (2019-11-20)


### Bug Fixes

* **lint:** fix lint config and rerun ([041eb99](https://github.com/formatjs/formatjs/commit/041eb99706164048b5b8ce7079955897ce27ed70))





## [5.1.2](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.1...@f-fjs/babel-plugin-react-intl@5.1.2) (2019-11-10)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [5.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.1.0...@f-fjs/babel-plugin-react-intl@5.1.1) (2019-11-05)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





# [5.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.0.0...@f-fjs/babel-plugin-react-intl@5.1.0) (2019-11-01)


### Features

* **@f-fjs/cli:** add --outFile & --idInterpolationPattern ([0c5e675](https://github.com/formatjs/formatjs/commit/0c5e675ed38f18987674a875fa6ed908ce907fc9))
* **@f-fjs/babel-plugin-react-intl:** allow parsing from @f-fjs/macro ([196dcc4](https://github.com/formatjs/formatjs/commit/196dcc44faec56637f3b74db4ed2c13d6842bc61))





## [5.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@5.0.0...@f-fjs/babel-plugin-react-intl@5.0.1) (2019-10-31)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





# [5.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.3.0...@f-fjs/babel-plugin-react-intl@5.0.0) (2019-10-31)


### Features

* **@f-fjs/babel-plugin-react-intl:** remove enforceDescription and enforceDefaultMessage ([72ff434](https://github.com/formatjs/formatjs/commit/72ff4345170f9b240f7331aa6fa36df96a8c823b))


### BREAKING CHANGES

* **@f-fjs/babel-plugin-react-intl:** We want to move things like `enforceDescription` and
`enforceDefaultMessage` to the new @f-fjs/eslint-plugin-formatjs instead of
using this babel plugin for linting.
feat(@f-fjs/cli): Remove enforceDescription and enforceDefaultMessage





# [4.3.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.21...@f-fjs/babel-plugin-react-intl@4.3.0) (2019-10-30)


### Features

* **@f-fjs/cli:** A CLI for formatjs ([#234](https://github.com/formatjs/formatjs/issues/234)) ([1f57a0b](https://github.com/formatjs/formatjs/commit/1f57a0b0921e0228cf3fd4eff756b0cd17e28fb5))





# [4.2.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.21...@f-fjs/babel-plugin-react-intl@4.2.0) (2019-10-30)


### Features

* **@f-fjs/cli:** A CLI for formatjs ([#234](https://github.com/formatjs/formatjs/issues/234)) ([1f57a0b](https://github.com/formatjs/formatjs/commit/1f57a0b0921e0228cf3fd4eff756b0cd17e28fb5))





## [4.1.21](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.20...@f-fjs/babel-plugin-react-intl@4.1.21) (2019-10-23)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.20](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.19...@f-fjs/babel-plugin-react-intl@4.1.20) (2019-10-01)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.19](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.18...@f-fjs/babel-plugin-react-intl@4.1.19) (2019-09-20)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.18](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.17...@f-fjs/babel-plugin-react-intl@4.1.18) (2019-09-15)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.17](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.16...@f-fjs/babel-plugin-react-intl@4.1.17) (2019-09-13)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.16](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.15...@f-fjs/babel-plugin-react-intl@4.1.16) (2019-09-03)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.15](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.14...@f-fjs/babel-plugin-react-intl@4.1.15) (2019-08-29)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.14](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.13...@f-fjs/babel-plugin-react-intl@4.1.14) (2019-08-19)


### Bug Fixes

* **@f-fjs/babel-plugin-react-intl:** return raw message without re-printing, fix [#160](https://github.com/formatjs/formatjs/issues/160) ([6897ca9](https://github.com/formatjs/formatjs/commit/6897ca9))





## [4.1.13](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.12...@f-fjs/babel-plugin-react-intl@4.1.13) (2019-08-21)


### Bug Fixes

* **@f-fjs/babel-plugin-react-intl:** dont trim ws ([f9f4e54](https://github.com/formatjs/formatjs/commit/f9f4e54)), closes [#158](https://github.com/formatjs/formatjs/issues/158)





## [4.1.12](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.11...@f-fjs/babel-plugin-react-intl@4.1.12) (2019-08-12)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.11](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.10...@f-fjs/babel-plugin-react-intl@4.1.11) (2019-08-11)


### Bug Fixes

* **@f-fjs/babel-plugin-react-intl:** check if `descriptorPath.id` is present in JSX element ([#150](https://github.com/formatjs/formatjs/issues/150)) ([5e2dffa](https://github.com/formatjs/formatjs/commit/5e2dffa))





## [4.1.10](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.9...@f-fjs/babel-plugin-react-intl@4.1.10) (2019-08-11)


### Bug Fixes

* generate lib instead of mjs ([05e63b3](https://github.com/formatjs/formatjs/commit/05e63b3))





## [4.1.9](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.8...@f-fjs/babel-plugin-react-intl@4.1.9) (2019-08-10)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.8](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.7...@f-fjs/babel-plugin-react-intl@4.1.8) (2019-08-08)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.7](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.6...@f-fjs/babel-plugin-react-intl@4.1.7) (2019-08-07)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.6](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.5...@f-fjs/babel-plugin-react-intl@4.1.6) (2019-08-06)


### Bug Fixes

* generate .mjs instead of lib ([0c34ee4](https://github.com/formatjs/formatjs/commit/0c34ee4))





## [4.1.5](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.4...@f-fjs/babel-plugin-react-intl@4.1.5) (2019-07-29)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.4](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.3...@f-fjs/babel-plugin-react-intl@4.1.4) (2019-07-29)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.3](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.2...@f-fjs/babel-plugin-react-intl@4.1.3) (2019-07-25)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.2](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.1...@f-fjs/babel-plugin-react-intl@4.1.2) (2019-07-23)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl





## [4.1.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.1.0...@f-fjs/babel-plugin-react-intl@4.1.1) (2019-07-12)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [4.1.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.0.1...@f-fjs/babel-plugin-react-intl@4.1.0) (2019-07-12)

### Features

- **@f-fjs/intl-messageformat-parser:** add printer to print AST to string ([ec0eaa2](https://github.com/formatjs/formatjs/commit/ec0eaa2))

## [4.0.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@4.0.0...@f-fjs/babel-plugin-react-intl@4.0.1) (2019-07-09)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [4.0.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.5.1...@f-fjs/babel-plugin-react-intl@4.0.0) (2019-07-08)

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

## [3.5.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.5.0...@f-fjs/babel-plugin-react-intl@3.5.1) (2019-06-28)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [3.5.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.4.1...@f-fjs/babel-plugin-react-intl@3.5.0) (2019-06-27)

### Features

- **@f-fjs/intl-messageformat:** allow passing in formatters ([#107](https://github.com/formatjs/formatjs/issues/107)) ([3605693](https://github.com/formatjs/formatjs/commit/3605693))

## [3.4.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.4.0...@f-fjs/babel-plugin-react-intl@3.4.1) (2019-06-26)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [3.4.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.3.3...@f-fjs/babel-plugin-react-intl@3.4.0) (2019-06-27)

### Features

- **intl-utils:** Add intl-utils ([#98](https://github.com/formatjs/formatjs/issues/98)) ([2329c57](https://github.com/formatjs/formatjs/commit/2329c57))

## [3.3.3](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.3.2...@f-fjs/babel-plugin-react-intl@3.3.3) (2019-06-18)

### Bug Fixes

- **@f-fjs/babel-plugin-react-intl:** add back messages to `metadata`, fixes [#92](https://github.com/formatjs/formatjs/issues/92) ([643f8e5](https://github.com/formatjs/formatjs/commit/643f8e5))

## [3.3.2](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.3.1...@f-fjs/babel-plugin-react-intl@3.3.2) (2019-06-18)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

## [3.3.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.3.0...@f-fjs/babel-plugin-react-intl@3.3.1) (2019-06-18)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [3.3.0](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.2.1...@f-fjs/babel-plugin-react-intl@3.3.0) (2019-06-18)

### Features

- **@f-fjs/babel-plugin-react-intl:** rewrite using new babel 7 APIs ([#89](https://github.com/formatjs/formatjs/issues/89)) ([5bc18b0](https://github.com/formatjs/formatjs/commit/5bc18b0))

## [3.2.1](https://github.com/formatjs/formatjs/compare/@f-fjs/babel-plugin-react-intl@3.2.0...@f-fjs/babel-plugin-react-intl@3.2.1) (2019-06-12)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [3.2.0](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.1.3...@f-fjs/babel-plugin-react-intl@3.2.0) (2019-06-05)

### Features

- **@f-fjs/babel-plugin-react-intl:** Add enforceDefaultMessage ([#61](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/issues/61)) ([8dbb1c3](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/commit/8dbb1c3))

## [3.1.3](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.1.1...@f-fjs/babel-plugin-react-intl@3.1.3) (2019-06-03)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

## [3.1.2](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.1.1...@f-fjs/babel-plugin-react-intl@3.1.2) (2019-06-03)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

## [3.1.1](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.1.0...@f-fjs/babel-plugin-react-intl@3.1.1) (2019-05-31)

**Note:** Version bump only for package @f-fjs/babel-plugin-react-intl

# [3.1.0](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.0.2...@f-fjs/babel-plugin-react-intl@3.1.0) (2019-05-28)

### Features

- **@f-fjs/babel-plugin-react-intl:** add `extractFromFormatMessageCall` option to opt-in extracting from `intl.formatMessage`, fixes [#37](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/issues/37) ([#39](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/issues/39)) ([5d0bb43](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/commit/5d0bb43))

## [3.0.2](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/compare/@f-fjs/babel-plugin-react-intl@3.0.2...@f-fjs/babel-plugin-react-intl@3.0.2) (2019-05-28)

### Bug Fixes

- **relativePath:** path -> p ([a764377](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/commit/a764377))

### Features

- **@f-fjs/babel-plugin-react-intl:** add `extractFromFormatMessageCall` option to opt-in extracting from `intl.formatMessage`, fixes [#37](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/issues/37) ([#39](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/issues/39)) ([5d0bb43](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/commit/5d0bb43))
- **test:** Add test suite. ([a7b611a](https://github.com/formatjs/@f-fjs/babel-plugin-react-intl/commit/a7b611a))
