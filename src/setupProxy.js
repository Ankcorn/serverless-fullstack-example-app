const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use('/api/*',
		createProxyMiddleware({
			target: `${process.env.REACT_APP_CONNECT || process.env.REACT_APP_HTTP_API_URL}`,
			changeOrigin: true,
			logLevel: 'debug',
			secure: false
		})
	);
};
