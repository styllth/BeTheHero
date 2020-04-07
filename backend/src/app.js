import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import Youch from 'youch';

import routes from './routes';

class App {
	constructor() {
		this.server = express();

		this.cors();
		this.middlewares();
		this.routes();
		this.exceptionValidators();
		this.exceptionHandler();
	}

	cors() {
		this.server.use(cors());
		/* set optional cors
    {
      origin:'http://host'
    }
    */
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		this.server.use(routes);
	}

	exceptionHandler() {
		this.server.use(async (err, req, res, next) => {
			if (process.env.NODE_ENV === 'development') {
				const errors = await new Youch(err, req).toJSON();

				return res.status(500).json(errors);
			}

			return res.status(500).json({ error: 'Internal server error' });
		});
	}

	exceptionValidators() {
		this.server.use(errors());
	}
}

export default new App().server;
