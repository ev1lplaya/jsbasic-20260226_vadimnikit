function namify(users) {
 let UserNames = []
 users.forEach(user => {
  UserNames.push(user.name)
 })
 return UserNames
}
