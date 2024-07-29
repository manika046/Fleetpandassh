function validateform() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  let isValid = true;

  if (name === null || name.trim() === "") {
    document.getElementById('nameerror').innerText = "Name is required";
    isValid = false;
  } else {
    document.getElementById('nameerror').innerText = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailerror").innerText = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailerror").innerText = "Invalid email format.";
    isValid = false;
  } else {
    document.getElementById("emailerror").innerText = "";
  }

  if (message === null || message.trim() === "") {
    document.getElementById('merror').innerText = "Message is required";
    isValid = false;
  } else {
    document.getElementById('merror').innerText = "";
  }

  if (isValid) {
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    alert(JSON.stringify(formData));

    return true;
  } else {
    return false;
  }
}
document.getElementById('form').onsubmit = validateform;
