{
  var v = 1
  {
    var v = 2
    console.log(v) // 2
  }
  console.log(v) // 2(주의)
}

{
  let v = 1
  {
    let v = 2
    console.log(v) // 2
  }
  console.log(v) // 1
}
