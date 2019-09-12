/* eslint-disable no-console */
const QLDB = require('../lib');
const Ledger = require('../lib/Ledger')

const main = async () => {
  const client = new QLDB();
  const ledger = await client.getLedger('vehicle-registration')
  console.log(ledger);
}

main();