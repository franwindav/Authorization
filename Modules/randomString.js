module.exports = () => {
   const rand = () =>
      Number(Math.random() * new Date().getTime())
         .toString(Math.random() * 20 + 16)
         .split('.');

   let res = [...rand()];
   res = [...rand(), ...res];
   res = [...rand(), ...res];
   const token = res.join('');
   return token;
};
