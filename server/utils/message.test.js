var expect  = require("expect")
var {generateMessage, generateLocationMessage} = require("./message.js")


describe("generateMessage", ()=>{
    it('should generat us an object', ()=>{
    var from = "Mark";
    var text = "Some message";
    var result =  generateMessage(from, text);

    expect((result)=>{
            expect(result.from).toBe(from)
            expect(result.text).toBe(text)
            expext(result.createdAt).toBeA('number');
        })

    })

})





    describe('generateLocationMessage', () => {
      it('should generate correct location object', () => {
        var from = 'Deb';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
      });
    });
