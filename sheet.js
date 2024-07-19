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

    if(isvalid){
        document.getElementById("form").onsubmit
    }

    const formdata= {
        name : name,
        email : email,
        message : message,
    };
    alert(JSON.stringify(formdata));
    console.log(formdata);
}
