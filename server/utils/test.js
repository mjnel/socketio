//*************************************************************************************************
// test try/catch function
var testFunct = (number)=>{

try{
    if(number %5 === 0){
        return console.log(`${number} is divisle by 5!`)
    } else{

    throw number
    }

}catch(error){
    return console.log(`Sorry! the number is not divisle into 5, it is ${error}`);

}
}
// testFunct(5)


//*************************************************************************************************
// Test Promise

var asyncAdd = (a, b) =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a === `number` && typeof b === `number`){
                resolve (a+b);
            }else{
                reject("Arguments must be numbers")
            }
        },3000)
    })
}




//   asyncAdd(4,6).then((res1)=>{
//     console.log(res1)
//     return asyncAdd(res1, 40)}).then((res2)=>{
//     console.log(`should be 50:`,res2);
//
// }).catch((errormessage)=>{
//     console.log(errormessage);
// })


//*************************************************************************************************
//Test Callback


//  var getuser = (id, callback)=>{
//    var user  = {
//     id: id,
//     name: `Mark`
//
// }
// callback(user);
//  };
//
//
// getuser(26, function(param_to_be_passed_in){
//     console.log(param_to_be_passed_in);
//   })



var testFunction = (number1, number2, callback)=>{
var number3 = number1 + number2

callback(number3)
}


testFunction(2,3,(log_out)=>{
  console.log(log_out)
})




























// setTimeout(function(){
//
//  }, 3000);
//
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
