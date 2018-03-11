const expect = require('expect');

const {users} = require(`./users.js`);
console.log(users)


describe('Users', ()=>{
    it(`should return a valid user array`,()=>{

      var newUser = new Users
      newUser.addUser(1234, "Mark", "testRoom")

      console.log(newUser);


    })


})
