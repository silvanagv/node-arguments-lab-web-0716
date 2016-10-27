var password = ""
process.argv.shift()
process.argv.shift()
process.argv.forEach(function work(length, number){
  for (let i = 0;i < length;i++){
    password += "a"
  }
  console.log(password)
})
