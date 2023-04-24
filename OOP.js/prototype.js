console.log("vaibahv");
let a = {
  name: "vaibhav",
  passion: "stocktrading",
};
console.log(a)

let p = {
  run: () => {
    alert("program run");
  },
};
a.__proto__ = p;
a.run();
