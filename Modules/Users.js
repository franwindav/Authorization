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

   isExistUserToken(login, token) {
      const user = this.findUser(login);
      if (!user) return false;
      return user.tokens.includes(token);
   }

   addNewToken(token, login) {
      const user = this.findUser(login);
      if (user.tokens.unshift(token) > 10) {
         user.tokens.splice(10, 1);
      }
   }

   findUser(login) {
      for (let i = 0; i < this.users.length; i++) {
         if (login === this.users[i].login) {
            return this.users[i];
         }
      }
      return false;
   }

   getRole(login) {
      const { role } = this.findUser(login);
      return this.roles[role];
   }

   addUser(data) {
      const { login, password, role } = data;
      this.users.push({
         login,
         password,
         role,
         tokens: []
      });
   }

   isExistUser(login, password) {
      const user = this.findUser(login);
      if (!user) return false;
      return user.password == password;
   }
}

const USERS = new Users();

module.exports = USERS;
