require('dotenv').config();

module.exports = {
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
		EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
	},
};
