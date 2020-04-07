import connection from '../database/connection';
import { randomBytes } from 'crypto';

// Gerar novo ID único
function genareteUniqueId() {
	return checkId(randomBytes(4).toString('HEX'));
}

async function checkId(id) {
	// Vai retornar verdadeiro se o id existir
	const ongWithIdExist = await connection('ongs')
		.select('*')
		.where({ id: id })
		.first();

	while (ongWithIdExist) {
		id = genareteUniqueId();
	}

	return id;
}

export default () => genareteUniqueId();
