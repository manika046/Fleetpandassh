import { request } from "./request.js";

function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

const postId = getPostIdFromUrl();
console.log("Post ID from URL:", postId);

if (postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  console.log(url);

  request(url,"GET")
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return response.json();
    // })
    .then((response) => {
      console.log("API Response:", response);
      document.getElementById("post-title").innerText = response.blogTitle;
      document.getElementById("post-body").innerText = response.blogDescription;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
} else {
  console.error("No post ID found in URL");
}

document.getElementById("logout").onclick=function(){
  Logout();
}
function Logout() {
  localStorage.removeItem("email");
  window.location = "../index.html";
}