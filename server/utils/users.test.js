const expect = require('expect');

const {Users} = require(`./users.js`);





describe('Users', ()=>{
  var users;
  beforeEach(()=>{
    users = new Users();
    users.users=[{
      id: 1,
      name: "Mike",
      room: "Node Course"
    },{
      id: 2,
      name: "Jen",
      room: "React Course"
    },{
      id: 3,
      name: "Mark",
      room: "Node Course"
    },]

  })


    it(`should add new user`,()=>{
      var newUser = new Users();
      var user = {
        id: 1234,
        name: "Mark",
        room: "testRoom"

      }
      newUser.addUser(user.id, user.name, user.room)
      expect(newUser.users).toEqual([user])

    })


    it(`should return names for Node Course`, ()=>{
      var returnedUser = users.getUserList("Node Course")
      expect(returnedUser).toEqual(['Mike', 'Mark'])

    })


    it(`should return names for React Course`, ()=>{
      var returnedUser = users.getUserList("React Course")
      expect(returnedUser).toEqual(['Jen'])

})

    it(`should find user`,()=>{
      var userId = 2;
      var foundUser = users.getUser(userId)
      expect(foundUser.id).toBe(userId)

    })


    it(`should not find user`, ()=>{
      var userId = 99;
      var foundUser = users.getUser(userId)
      expect(foundUser).toNotExist();
    })

    it(`should remove a user`,()=>{
      var userID = 1;
      var removedUser = users.removeUser(userID)

      expect(removedUser.id).toBe(userID)
      expect(users.users.length).toBe(2);

})

      it(`should not remove a user`,()=>{
      var userID = 99;
      var removedUser = users.removeUser(userID)

      expect(removedUser).toNotExist();
      expect(users.users.length).toBe(3);
      })

})
