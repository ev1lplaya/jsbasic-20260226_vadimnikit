function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);
  
  const formattedStrings = filteredUsers.map(user => `${user.name}, ${user.balance}`);
  
  return formattedStrings.join('\n');
}
