const Database = require('./Database').Users;
class Users {
   constructor() {
      this.users = [
         {
            login: '123',
            password: '123',
            tokens: [],
            role: 0
         }
      ];
      this.roles = ['FrontEnd developer', 'tester', 'BackEnd developer'];
   }

   isExistRole(role) {
      return role < this.roles.length && role >= 0;
   }

   async isExistUserToken(login, token) {
      const user = await this.findUser(login);
      if (!user) return false;
      return user.tokens.includes(token);
   }

   async addNewToken(token, login) {
      const user = await this.findUser(login);
      if (!user) return false;
      if (!user.tokens) user.tokens = [];
      if (user.tokens.unshift(token) > 10) {
         user.tokens.splice(10, 1);
      }
      Database.updateUser(login, { tokens: user.tokens });
   }

   async findUser(login) {
      return Database.getUser(login);
   }

   async getRole(login) {
      const user = await this.findUser(login);
      if (!user) return false;
      return user.role;
   }

   async addUser(data) {
      const { login, password, role } = data;
      const user = {
         login,
         password,
         role,
         tokens: []
      };
      await Database.addUser(user);
      this.users.push(user);
   }

   async isExistUser(login, password) {
      const user = await this.findUser(login);
      if (!user) return false;
      return user.password == password;
   }

   async setQualAnswer(login, id, answer, mistakes) {
      const user = await Database.getUser(login);

      if (user.qualification == undefined) {
         user.qualification = {};
         user.qualification.answers = [];
      }

      const qual = user.qualification;

      if (user && (!qual.answers[id] || (qual.answers[id] && !qual.answers[id].checked))) {
         qual.answers[id] = { data: answer, mistakes, checked: true, mark: mistakes.some(e => e) ? 'error' : 'success' };
         Database.updateUser(login, { qualification: qual });
         return true;
      }
      return false;
   }

   async saveQualAnswer(login, id, answer) {
      const user = await Database.getUser(login);

      if (user.qualification == undefined) {
         user.qualification = {};
         user.qualification.answers = [];
      }

      const qual = user.qualification;

      if (user && (!qual.answers[id] || (qual.answers[id] && !qual.answers[id].checked))) {
         qual.answers[id] = { data: answer, mark: 'saved' };
         Database.updateUser(login, { qualification: qual });
         return true;
      }
      return false;
   }

   async deleteQualAnswer(login) {
      Database.updateUser(login, { qualification: undefined });
   }
}

const USERS = new Users();

module.exports = USERS;
