function formvalidate(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rpassword = document.getElementById('rpassword').value;

    var valid = true;

    if (name=="") {
        valid = false;
        document.getElementById('nameerror').innerText = 'Name is required';
    } else {
        document.getElementById('nameerror').innerText = '';
    }

    if (!email) {
        valid = false;
        document.getElementById('emailerror').innerText = 'Email is required';
    } else {
        document.getElementById('emailerror').innerText = '';
    }

    if (!password) {
        valid = false;
        document.getElementById('perror').innerText = 'Password is required';
    } else {
        document.getElementById('perror').innerText = '';
    }

    if (password !== rpassword) {
        valid = false;
        document.getElementById('rperror').innerText = 'Passwords do not match';
    } else {
        document.getElementById('rperror').innerText = '';
    }

    if (valid) {
        document.getElementById('signin-form').submit();
    }
}

function cancelForm() {
    document.getElementById('signin-form').reset();
}