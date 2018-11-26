
var numbers = document.querySelectorAll(".number");
var result = document.querySelector(".result");
var leftOperation = null;
var operation = null;
var rightOperation = null;
// console.log(numbers);

numbers.forEach(el => {
    el.addEventListener('click', function(){
      if(Number.isInteger(+this.innerHTML)){
        if(+result.innerHTML === 0){
            result.innerHTML = this.innerHTML;
        }else {
            result.innerHTML = result.innerHTML + this.innerHTML;
            rightOperation = this.innerHTML;
        }
    }
    if(this.innerHTML ==='C'){
        result.innerHTML = 0;
    }
    if(this.innerHTML === '+' ||
        this.innerHTML === '-' ||
        this.innerHTML === '/' ||
        this.innerHTML === '*')
        {
            leftOperation = result.innerHTML;
            operation = this.innerHTML;
            result.innerHTML = leftOperation + this.innerHTML;
            // console.log(curentOperation);
            
    }
    if(this.innerHTML === '='){
        console.log(rightOperation);
        
       var resultOperation;
       switch(operation){
           case '+':
           resultOperation = +leftOperation + +rightOperation;
           break;
           case '-':
           resultOperation = +leftOperation - +rightOperation;
           break;
           case '*':
           resultOperation = +leftOperation * +rightOperation;
           break;
           case '/':
           resultOperation = +leftOperation / +rightOperation;
           break;
       }
       
       result.innerHTML = resultOperation;

       leftOperation = null;
       operation = null;
    }
});  
    })
    


