<<<<<<< HEAD
// var path = require('path');
=======
var path = require('path');

>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
<<<<<<< HEAD
// var db = require('bookshelf')(knex);
=======
//var db = require('bookshelf')(knex);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/myDatabase');
autoIncrement.initialize(connection);

var urlSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
});

urlSchema.plugin(timestamps);
urlSchema.plugin(autoIncrement.plugin, 'Link');


>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

<<<<<<< HEAD
// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('MongoDB connection is open')
})

module.exports = db;

































=======
var userSchema = new Schema ({
  username: String,
  password: String
});

userSchema.plugin(timestamps);
userSchema.plugin(autoIncrement.plugin, 'User');


// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
exports.Link = mongoose.model('Link', urlSchema);
exports.User = mongoose.model('User', userSchema);
>>>>>>> 4eb1b39158fce707e204f54d7fbc16559454e399
