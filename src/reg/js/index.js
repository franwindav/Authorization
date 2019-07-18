window.onload = () => {
   const roles = document.querySelector('.roles');
   const radioRoles = document.querySelectorAll('.radio-role');
   document.addEventListener('click', e => {
      if (!document.querySelector('.mainRole').contains(e.target)) {
         roles.classList.remove('active');
      }
   });
   document.querySelector('.mainRole').addEventListener('click', () => {
      roles.classList.toggle('active');
   });

   for (let i = 0; i < radioRoles.length; i++) {
      radioRoles[i].addEventListener('click', function() {
         if (this.checked) document.querySelector('.chosen').innerText = this.value;
         roles.classList.toggle('active');
      });
   }
};
