
class Users {
  constructor(){
    this.users =[]
  }

  addUser (id, name, room){
    var user = {id, name, room };
    this.users.push(user);
    return user

  }

  removeUser(id){
    // getting back a user object from the
    var foundUser = this.getUser(id)
    // if we have a valid user then trim down the array
    if (foundUser){
    this.users =  this.users.filter((allUsers)=>allUsers.id !== id)
    }

    return foundUser;


  }

   getUser(id){
    return this.users.filter((instance)=>instance.id === id)[0]



  }

  getUserList(room){
    // returns a users array if the room is equal to the room on each array instance
      var users = this.users.filter((user)=>user.room === room)
    // returning an array of the names
      var namesArray = users.map((user)=> user.name)
      return namesArray;


  }


}

//
var newUser = new Users
newUser.addUser(1234, "Mark", "testRoom")
newUser.addUser(456, "Mark", "testRoom")

console.log(newUser.getUser(1))
// newUser.addUser(4567, "Keri", "testRoom")
// newUser.addUser(8888, "Sam", "testRoom")
// // console.log(newUser.getUserList("testRoom"))
// // console.log(newUser.getUser(1234))
// newUser.removeUser(1234)
// console.log(newUser.getUserList("testRoom"))






module.exports= {
  Users
}




//*********************************************************************

// uppercase = conventaion
// class Person {
//   constructor(name, age){
//   // instance of the class
//   // constructor fucntion = specific to class and auto fires to iniatlise
//   // constructor called by defult
//     this.name = name;
//     this.age = age;
//
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old `
//   }
//
//
//
//
//
// }
//
//
//
// var me = new Person("mark", 27)
// console.log(me.age)
//
// var userDescription = me.getUserDescription()
// console.log(userDescription)
