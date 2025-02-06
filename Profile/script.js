         const  MoonIcon = document.querySelector('.fa-moon');
         const container= document.querySelector('.container');

       MoonIcon.addEventListener('click',()=>{
           MoonIcon.classList.toggle('fa-moon');
           if(MoonIcon.classList.toggle('fa-sun')){
               container.classList.add('active')
           }
           else{
               container.classList.remove('active')
           }
       })
