function Login(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  var isValid = true;

  if (name === "") {
    isValid = false;
    document.getElementById('nameerror').innerText = 'Name is required';
  } else {
    document.getElementById('nameerror').innerText = '';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById('emailerror').innerText = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailerror').innerText = 'Invalid email format';
    isValid = false;
  } else {
    document.getElementById('emailerror').innerText = '';
  }

  // Uncomment and adjust the following lines if a password field is needed
  // var password = document.getElementById('password').value;
  // if (password === "") {
  //   isValid = false;
  //   document.getElementById('perror').innerText = 'Enter password';
  // } else {
  //   document.getElementById('perror').innerText = '';
  // }

  if (isValid) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.username === name && user.email === email
        );

        if (user) {
          window.location.href = './posts.html';
        } else {
          alert('Incorrect username or email');
        }
      })
      .catch((error) => console.log('Error:', error));
  }
}