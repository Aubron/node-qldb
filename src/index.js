import AWS from 'aws-sdk'
import Ledger from './Ledger'

class QLDB {
  constructor(options = {}) {
    this.options = options;

    //set default region
    if (!this.options.region) {
      this.options.region = 'us-east-1';
    }

    this.client = new AWS.QLDB(options);
  }

  async getLedger(name) {

    // Search for the QLDB Ledger
    // If ledger is not found, throw native AWS Client error
    const awsLedger = await this.client.describeLedger({
      Name: name
    }).promise()

    const ledger = new Ledger(name, this.client);
    ledger.setProperties({
      arn: awsLedger.Arn,
      state: awsLedger.State,
      creationDateTime: awsLedger.CreationDateTime,
      deletionProtection: awsLedger.DeletionProtection
    })
    return ledger;
  }

  async createLedger(name) {

  }


}

export default QLDB