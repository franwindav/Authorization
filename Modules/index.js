const randomString = require('./randomString');
const Authorization = require('./Authorization');
const Users = require('./Users');

const AllUsers = new Users();
const Auth = new Authorization(AllUsers);

module.exports.Users = AllUsers;
module.exports.Authorization = Auth;
module.exports.randomString = randomString;
