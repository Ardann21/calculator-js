let calculation = localStorage.getItem('calculation');

      calcuVal();

        function calcuVal(){
          document.querySelector('.js-p').innerHTML = calculation;
        }

         

         function calcu(value){
            calculation += value;
          

          calcuVal();
          localStorage.setItem('calculation',calculation);
         }