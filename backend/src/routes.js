import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes
	.post('/sessions', SessionController.store)

	.get('/ongs', OngController.index)
	.post('/ongs', OngController.store)

	.get('/profile', ProfileController.index)

	.get('/incidents', IncidentController.index)
	.post('/incidents', IncidentController.store)
	.delete('/incidents/:id', IncidentController.destroy);

export default routes;
