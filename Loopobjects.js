const MyTeam = {
    name:"Ahamed",
    age:12,
    address:"MKN Road"
}

//For
for(const key in MyTeam){
    console.log(`Key:${key} Values:${MyTeam[key]}`);
}

//Object Keys

console.log(Object.keys(MyTeam));

Object.keys(MyTeam).forEach(cat=>{
    console.log(`Key:${cat} Values:${MyTeam[cat]}`);
})


console.log("Object.entries(MyTeam)",Object.entries(MyTeam));
console.log("Object.entries(MyTeam)",Object.entries(MyTeam)[0]);

for(const [key,value] of Object.entries(MyTeam)){
    console.log(`Key:${key} Values:${value}`)
}


//Object.values

console.log(Object.values(MyTeam))

Object.values(MyTeam).forEach(v=>{
    console.log(`Values:${v} Type:${typeof v}`);
})