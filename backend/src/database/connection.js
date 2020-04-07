import knex from 'knex';
import configuration from '../../knexfile';

class Database {
	constructor() {
		this.config =
			process.env.NODE_ENV === 'test'
				? configuration.test
				: configuration.development;
		this.init();
	}

	init() {
		this.connection = knex(this.config);
	}
}
export default new Database().connection;
