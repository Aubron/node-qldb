# QLDB for Node

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**An easy-to-use node client for QLDB** ✨

Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log ‎owned by a central trusted authority. Amazon QLDB tracks each and every application data change and maintains a complete and verifiable history of changes over time.

This database driver library allows for your node applications to take advantage of this SQL-like (PartiQL) serverless datastore, including handling ION hashing, etc.


# Installation

`yarn add node-qldb`
`npm install -S node-qldb`

# Usage

{Coming Soon, still experimenting with patterns}

First Idea:

```
const client = new QLDB({
  region: 'us-east-2'
});
const ledger = await client.getLedger('vehicle-registration')
const result = await ledger.query('SELECT * FROM vehicles');
console.log(result);
```

# TODO

- Session management

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.



# License

MIT © Aubron Wood

Boilerplated by `npm-module-boilerplate`
MIT © Dinesh Pandiyan
