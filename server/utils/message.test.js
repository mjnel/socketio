var expect  = require("expect")
var {generateMessage} = require("./message.js")


describe("generateMessage", ()=>{
    it('should generat us an object', ()=>{
    var from = "Mark";
    var text = "Some message";
    var result =  generateMessage(from, text);

    expect((result)=>{
            expect(result.from).toBe(from)
            expect(result.text).toBe(text)
            expext(result.createdAt).toBeA(number); 
        })
        
        
        
        
        
        
        
    })
    
})