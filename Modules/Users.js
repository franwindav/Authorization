class Users {
   constructor() {
      this.users = [
         {
            login: '123',
            password: '123',
            tokens: [],
         },
      ];
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
   addUser(login, password) {
      this.users.push({
         login,
         password,
         tokens: [],
      });
   }
   isExistUser(login, password) {
      const user = this.findUser(login);
      if (!user) return false;
      return user.password == password;
   }
}

module.exports = Users;
