// console.log("vaibahv");
// let a = {
//   name: "vaibhav",
//   passion: "stocktrading",
// };
// console.log(a)

// let p = {
//   run: () => {
//     alert("program run");
//   },
// };
// a.__proto__ = p;
// a.run();

// (1....User)
function User(name){
  this.name = name;
  
  console.log(this);
}

User.prototype.printName = function(){
console.log(this.name)
}


let vaibhav = new User("vaibhav")
vaibhav.printName()


console.log(User.__proto__)

console.log(vaibhav.__proto__ === User.prototype) 

console.log(User.prototype.isPrototypeOf(vaibhav))

User.prototype.species = "Homo Sapiens"

