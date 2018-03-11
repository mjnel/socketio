// [{
//   id:
//   name:
//   room:
//
// }]

// addUser(id,name,room)

// remove user (id)
// get user (id)

//getUserList(room)
// returen an array of names


class Users {
  constructor(){
    this.users =[]
  }

  addUser (id, name, room){
    var user = {id, name, room };
    this.users.push(user);
    return user

  }

}


var newUser = new Users
newUser.addUser(1234, "Mark", "testRoom")

console.log(newUser);




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
