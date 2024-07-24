function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

const postId = getPostIdFromUrl();
console.log("Post ID from URL:", postId);

if (postId) {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      console.log("API Response:", json);
      document.getElementById("post-title").innerText = json.title;
      document.getElementById("post-body").innerText = json.body;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
} else {
  console.error("No post ID found in URL");
}

function Logout() {
  localStorage.removeItem("email");
  alert("logged out");
  window.location = "../index.html";
}