class Roles {
   constructor() {
      this.roles = ['FrontEnd developer', 'tester', 'BackEnd developer'];
      this.users = [{ login: '123', role: 0 }];
      this.isExistRole = role => {
         return this.roles.includes(role);
      };
      this.addRole = (login, role) => {
         this.users.push({ login, role: this.roles.indexOf(role) });
         console.log(this.users);
      };
      this.getRole = login => {
         for (let i = 0; i < this.users.length; i++) {
            if (login == this.users[i].login) {
               return this.roles[this.users[i].role];
            }
         }
      };
   }
}

module.exports = Roles;
