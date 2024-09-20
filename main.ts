//explict type casting
let myName:unknown="ziaa";

let namev:string =myName as string //explicit type casting k liay as lagty hy
//console.log((myName as string).length);

// explicit krny ka dosra tareka
let namev2:string=<string>myName;
console.log((<string>myName).length);//length ka matlb string k sat letter count krta
