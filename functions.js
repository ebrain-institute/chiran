// Function 

// older method
helloWorld();
function helloWorld(){
   // console.log('Hello world 1');
}



// new method (arrow function) ES6

const helloWorld2 = (x ='One', y='two')=>{
   console.log('xxxx')
   console.log(x)
   console.log(y)
}
//First call
// helloWorld2('Jhon', 'Smith');

//Seccond call
// helloWorld2();

const printData = (value)=>{

   console.log(value)
}

const handleData = (first, seccond) => {

         if(first>seccond){
            printData(first)
         }else{
            printData(seccond)
         }

}



