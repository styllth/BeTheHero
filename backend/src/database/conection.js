import knex from 'knex';
import configuration from '../../knexfile';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = knex(configuration.development);
  }
}
export default new Database().connection;
