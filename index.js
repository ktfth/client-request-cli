const requests = require('requests');
const args = process.argv.slice(2);

let req = requests(args[0], { streaming: true });

req.on('data', console.log.bind(console))
