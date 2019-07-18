class Roles {
   constructor() {
      this.roles = ['front end', 'tester', 'back end'];
      this.users = [{ login: '123', role: 'front end' }];
      this.isExistRole = role => {
         return this.roles.includes(role);
      };
      this.addRole = (login, role) => {
         this.users.push({ login, role });
      };
   }
}

module.exports = Roles;
