fetch('https://jsonplaceholder.typicode.com/users')
  .then(result => {
    return result.json();
  })
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error(error);
  });
