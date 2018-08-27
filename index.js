const TortoiseDB = require('tortoisedb');
console.log(TortoiseDB);

const db = new TortoiseDB({
  name: 'todo-app',
  port: 4000,
  mongoURI: 'mongodb://localhost:27017',
  batchLimit: 1000
});

console.log(db);

db.start();

// Every 10 mins
setInterval(db.dropDB.bind(db), 600000);