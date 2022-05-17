const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 app.get(
  '/api/users',
   createProxyMiddleware({
     target: 'http://localhost:3000',
     changeOrigin: true,
   })
 );
};
