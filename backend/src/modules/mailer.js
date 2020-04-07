import 'dotenv/config';
import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

import { env } from 'process';

const options = {
	viewEngine: {
		extname: '.html', // handlebars extension
		layoutsDir: path.resolve('./src/resources/mail'), // location of handlebars templates
		partialsDir: path.resolve('./src/resources/mail'), // location of your subtemplates aka. header, footer etc
		defaultLayout: false, // name of main template
	},
	viewPath: path.resolve('./src/resources/mail'),
	extName: '.html',
};

const transport = nodemailer.createTransport({
	host: env.MAIL_HOST,
	port: env.MAIL_PORT,
	// secure: true, // true for 465, false for other ports
	auth: {
		user: env.MAIL_USERNAME,
		pass: env.MAIL_PASSWORD,
	},
	// proxy: env.MAIL_PROXY,
	// ssl: true,
});

transport.use('compile', hbs(options));

export default transport;
