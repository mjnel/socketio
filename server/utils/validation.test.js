const expect = require('expect');
const {isRealString} = require("./validation.js")




describe("isRealString", ()=>{
  it('should reject non-string values', ()=>{
    var fakeString = 3
    var res = isRealString(fakeString)
    expect(res).toBeFalsy()
  })



  it('should reject string with only spaces', ()=>{
    var fakeString = "     ";
    var res = isRealString(fakeString)
    expect(res).toBeFalsy()
  })

  it('should accept a string', ()=>{
    var str = "Markk";
    var res = isRealString(str)
    expect(res).toBeTruthy()
  })


})

// import isreal string

// should reject non string values
// should reject sting with only spaces
// should allow strings with non space characters
