const MongoClient = require('mongodb').MongoClient;

const mongoClient = new MongoClient('mongodb://localhost:9005/', { useNewUrlParser: true });

let USERS;
let QUAL;

mongoClient.connect((err, client) => {
   if (err) {
      return global.console.log(err);
   }
   const db = client.db('AuthApp');
   USERS = db.collection('users');
   QUAL = db.collection('qualification');
});

class DatabaseForUsers {
   async addUsers(users) {
      USERS.insertMany(users);
   }

   async addUser(user) {
      USERS.insertOne(user);
   }

   async getAllUsers() {
      return USERS.find().toArray();
   }

   async getUser(login) {
      return USERS.findOne({ login });
   }

   async deleteUser(login) {
      return USERS.deleteOne({ login });
   }

   async updateUser(login, data) {
      USERS.updateOne({ login }, { $set: data });
   }
}

class DatabaseForQualification {
   async getQualification(role) {
      return QUAL.findOne({ role });
   }

   async getQuestion(role, id) {
      const params = await QUAL.findOne({ role });
      return params.questions[id];
   }

   async getAllQuestion(role) {
      const params = await QUAL.findOne({ role });
      if (params == undefined) return [];
      return params.questions;
   }

   async getAnswer(role, id) {
      const params = await QUAL.findOne({ role });
      return params.answers[id];
   }
}

const forUsers = new DatabaseForUsers();
const forQualification = new DatabaseForQualification();

module.exports.Users = forUsers;
module.exports.Qualification = forQualification;
