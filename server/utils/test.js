




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


testFunct(188888)
