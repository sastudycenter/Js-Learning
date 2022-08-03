let user1 = {name:"ABC",address:"North St"};
let user2 = structuredClone(user1);
user2.name="DEF";
console.log(user1);
console.log(user2);