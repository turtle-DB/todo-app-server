const TortoiseDB = require('tortoisedb');

const db = new TortoiseDB({
  name: 'todo-app',
  port: 4000,
  mongoURI: 'mongodb://localhost:27017',
  batchLimit: 1000
});

db.start();

// Every 10 mins
setInterval(db.dropDB.bind(db), 600000);

// Make server HTTPS with SSL and set up this server to be run 24/7 with PM2.
// https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04
// https://www.digitalocean.com/community/tutorials/how-to-install-an-ssl-certificate-from-a-commercial-certificate-authority

// (May need to go into tortoiseDB code to change it to get access to Express package for HTTPS/SSL stuff?)
// https://medium.com/@yash.kulshrestha/using-lets-encrypt-with-express-e069c7abe625
// https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca