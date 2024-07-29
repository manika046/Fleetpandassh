import { request } from './request.js';

const url = "https://jsonplaceholder.typicode.com/posts";

request(url, "GET")
  .then((data) => {
    let rows = "";

    data.map((post) => {
      rows += 
      `<div class="card">
        <h2 class="title">${post.blogTitle}</h2>
        <p>${post.blogDescription}</p>
        <button id="read" onclick="read(${post.postId})">Read</button>
      </div>`;
    });
    document.getElementById("container").innerHTML = rows;
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  document.getElementById("logout").onclick=function(){
    Logout();
  };
function Logout() {
  localStorage.removeItem("email");
  alert("Do you want to Log Out?");
  window.location = "../index.html";
}

function read(postId) {
  window.location = `post.html?id=${postId}`;
}

window.read = read;

