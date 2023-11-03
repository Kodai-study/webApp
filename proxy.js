const fs = require('fs')
const https = require('https')
const httpProxy = require('http-proxy');

httpProxy.createProxyServer({
    target: {
        host: '0.0.0.0',
        port: 3000,
    },
    ssl: {
        key: fs.readFileSync('./private/server.key'),
        cert: fs.readFileSync('./private/server.crt')
    }
}).listen(443);