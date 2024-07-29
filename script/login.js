// function Login(event) {
//   event.preventDefault();
//   let isValid = false;
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   //   const password = document.getElementById("password").value;
//   //   const errorPassword = document.getElementById("error_password");
//   if (name === "") {
//     nameError.textContent = "Username is required.";
//   } else {
//     nameError.textContent = "";
//     isValid = true;
//   }
//   if (email === "") {
//     emailError.textContent = "Email is required.";
//   } else {
//     emailError.textContent = "";
//     isValid = true;
//   }
//   //   if (password === "") {
//   //     errorPassword.textContent = "Password is required.";
//   //     isValid = false;
//   //   } else if (password.length < 6) {
//   //     errorPassword.textContent = "Password must be at least 6 characters long.";
//   //     isValid = false;
//   //   } else {
//   //     errorPassword.textContent = "";
//   //   }
//   if (isValid) {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         const user = users.find(
//           (user) => user.username === name && user.email === email
//         );
//         if (user) {
//           alert("Loged in successfully");
//           localStorage.setItem("name", user.name);
//           localStorage.setItem("email", user.email);
//           window.location = "posts.html";
//         } else {
//           alert("Incorrect Username or Email");
//         }
//       })
//       .catch((error) => console.log(error));
//   }
// }

// import { SlowBuffer } from "buffer";
import { request } from "./request.js";


// import { request } from "./request.js";
// function Login(event) {
//   event.preventDefault();

//   let isValid = true;

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const nameerror = document.getElementById("namerrror");
//   const emailerror = document.getElementById("emailerror");

//   // nameerror.textContent = "";
//   // emailerror.textContent = "";
  
//   if (name === "") {
//     nameerror.textContent = "Username is required.";
//     isValid = false;
//   }
//   if (email === "") {
//     emailerror.textContent = "Email is required.";
//     isValid = false;
//   }
//   if (isValid) {
//     request("https://reqres.in/", "GET",  {
//       name,
//       email
//     });
//   }
// }
// document.getElementById("form").addEventListener("submit", Login);




// import request from "./request";

function Login(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

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
    const formData = {
      name,
      email,
      password,
    }
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
//     .then((users) => {
//       const user = users.find(
//         (user) => user.username === name && user.email === email
//       );

//       if (user) {
//         window.location.href = './posts.html';
//       } else {
//         alert('Incorrect username or email');
//       }
//     })
//     .catch((error) => console.log('Error:', error));
// }
// }
    request("https://reqres.in/api/login","POST",formData).then((data)=>{
      if(data && data.token){
        localStorage.setItem("token",data.token);
        // alert("Logged in");
        window.location="./posts.html";
      }
      else{
        alert("Incorrect email or password");
      }
    }).catch((error)=>console.log(error)
      );
    
    }  }  

document.getElementById("form").addEventListener("submit", Login);
