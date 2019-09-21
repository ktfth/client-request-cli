const url = require('url');
const http = require('http');
const https = require('https');
const args = process.argv.slice(2);
const rawOptions = url.parse(args[0]);
const options = {
    hostname: rawOptions.host,
    port: rawOptions.port || (rawOptions.host.indexOf('https') > -1 ? 443 : 80),
    path: rawOptions.path,
};
const request = rawOptions.host.indexOf('https') > -1 ? https.request : http.request;
const req = request(options, res => {
    if (args.length === 1) {
        res.pipe(process.stdout);
    } else if (args.length === 2 && args[1] === '--status-code') {
        console.log(`Status code: ${res.statusCode}`);
    }
}); req.end();
