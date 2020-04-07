import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

/**
 * TIPOS DE REQUISIÇÕES HTTP:
 *
 * GET:     Buscar/Listar uma informação de Back-end
 * POST:    Criar uma informação no Back-end
 * PUT:     Alterar uma informação no Back-end
 * DELETE:  Deletar uma informação no Back-end
 *
 */

/**
 * TIPOS DE PARAMETROS:
 *
 * Query Params: Parametros nomeados enviados na rota após "?" geralmente para (filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
 *
 */

const routes = new Router();

routes
	.post('/sessions', SessionController.store)

	.get('/ongs', OngController.index)

	.post(
		'/ongs',
		celebrate({
			[Segments.BODY]: Joi.object().keys({
				name: Joi.string().required().min(2),
				email: Joi.string().required().email(),
				whatsapp: Joi.string().required().min(10).max(11),
				city: Joi.string().required(),
				uf: Joi.string().required().length(2),
			}),
		}),
		OngController.store
	)

	.get(
		'/profile',
		celebrate({
			[Segments.HEADERS]: Joi.object({
				authorization: Joi.string().required(),
			}).unknown(),
		}),
		ProfileController.index
	)

	.get(
		'/incidents',
		celebrate({
			[Segments.QUERY]: Joi.object().keys({
				page: Joi.number(),
			}),
		}),
		IncidentController.index
	)
	.post(
		'/incidents',
		celebrate({
			[Segments.BODY]: Joi.object().keys({
				title: Joi.string().required(),
				description: Joi.string().required(),
				value: Joi.number().required(),
				ong_id: Joi.string().required(),
			}),
		}),
		IncidentController.store
	)

	.delete(
		'/incidents/:id',
		celebrate({
			[Segments.PARAMS]: Joi.object().keys({
				id: Joi.number().required(),
			}),
		}),
		IncidentController.destroy
	);

export default routes;
