var generateMessage = (from, text)=>{
    
    
    return {
        from,
        text,
        createdAt : new Date().getTime()
    }
    
}


module.exports ={
        generateMessage
    
}



//console.log(generateMessage("Mark", "CBA going tonight"))