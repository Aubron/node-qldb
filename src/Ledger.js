import AWS from 'aws-sdk'

class Ledger {
  constructor(name, client) {
    this.name = name;
    this.client = client;
    this.properties = {
      name
    }
    this.sessions = [];
  }

  setProperties(properties) {
    // merge properties object
    // TODO: restrict to known props

    this.properties = {
      ...this.properties,
      ...properties
    }
  }

  query(query) {

  }

  async _getSession() {
    for (let i = 0; i < this.sessions.length; i += 1) {
      let session = sessions[i];
      if (session.available) {
        return session;
      }
    }
    return await this._createSession();
  }

  _createSession() {

  }
}

export default Ledger