import connection from '../../database/connection';
import generateUniqueId from '../../utils/generateUniqueId';
import mailer from '../../modules/mailer';

class OngController {
	async index(request, response) {
		try {
			const ongs = await connection('ongs').select('*');

			return response.json(ongs);
		} catch (error) {}
	}

	async store(request, response) {
		try {
			const { name, email, whatsapp, city, uf } = request.body;

			const id = await generateUniqueId();

			await connection('ongs').insert({
				id,
				name,
				email,
				whatsapp,
				city,
				uf,
			});

			await mailer.sendMail(
				{
					from: '"Be The Hero 🦸🏽‍♂️" <bethehero@email.com>', // sender address
					to: email,
					subject: 'ID de acesso', // Subject line
					template: 'ongs/sendOngId',
					context: { id, name },
				},
				(err) => {
					if (err) {
						throw err;
					}
				}
			);

			return response.json({ id });
		} catch (error) {}
	}

	async update(request, response) {
		return response.json({});
	}

	async destroy(request, response) {
		return response.json({});
	}
}

export default new OngController();
