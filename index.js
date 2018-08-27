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