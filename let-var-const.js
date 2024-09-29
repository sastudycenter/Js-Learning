function run() {
  var foo = "Foo";
  let bar = "Bar";
  const more = "more"

  console.log(foo, bar,more); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    const cat = "cat"
    console.log(moo, baz,cat); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
  console.log(cat);
}

run();