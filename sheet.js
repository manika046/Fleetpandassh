function validateform() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isvalid = true;

    if (name === null || name === "") {
        document.getElementById('nameerror').innerText = "Name is required";
        isvalid = false;
    } else {
        document.getElementById('nameerror').innerText = "";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailerror").innerText = "Email is required.";
        isvalid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailerror").innerText = "Invalid email format.";
        isvalid = false;
    } else {
        document.getElementById("emailerror").innerText = "";
    }

    if (message === null || message === "") {
        document.getElementById('merror').innerText = "Message is required";
        isvalid = false;
    } else {
        document.getElementById('merror').innerText = "";
    }

    if (isvalid) {
        document.getElementById("form").onsubmit
    }

    const formdata = {
        name: name,
        email: email,
        message: message,
    };
    alert(JSON.stringify(formdata));
}

function Login(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var isValid = true;

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

    if (password === null || password === "") {
        document.getElementById('perror').innerText = "Enter password";
        isValid = false;
    } else {
        document.getElementById('perror').innerText = "";
    }

    if (isValid) {
        // const formdata = {
        //     email: email,
        //     password: password,
        // };
        // alert(JSON.stringify(formdata));
        alert("login");
        // document.getElementById("form").submit(); // Submit the form programmatically if validation is successful

        window.location = "index.html";
    }
    
}
