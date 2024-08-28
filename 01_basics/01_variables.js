const accountId=1122554
let accountEmail="Prashu@gmail.com"
var accountPassword="12345"
accountCity="Mumbai"
let accountState;  // variable is created but value is not given so this called as undefined

// accountId=2

accountEmail = "hc@hc.com"
accountPassword="165483"
accountCity="Bengaluru"

console.log(accountId)

/*
Prefer not to use var because of issue in block scopt and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

