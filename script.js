document.getElementById('usernameForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var errorDiv = document.getElementById('error');
    errorDiv.innerHTML = '';

    // Check if username is between 4 and 34 characters, containing at least 3 letters and 1 digit
    var regex = /^(?=(.*[a-zA-Z]){3})(?=.*\d)[^]{4,34}$/;
    if (!regex.test(username)) {
        errorDiv.innerHTML = 'Username must be between 4 and 34 characters, containing at least 3 letters <br> and 1 digit';
        event.preventDefault();
    } else {
        // Prevent the default form submission which would cause a page reload
        event.preventDefault();

        // Get the CSRF token from the meta tag
        var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Make a POST request to the server
        fetch('/', {
            method: 'POST', // Specify the method
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Set the content type of the request
                'CSRF-Token': csrfToken // Include the CSRF token in the request header
            },
            body: 'username=' + encodeURIComponent(username), // Set the body of the request
        })
        .then(response => response.text()) // Extract the text from the response
        .then(data => {
            // Replace the content div with the response
            document.getElementById('content').innerHTML = data;
        });
    }
});

window.onload = function() {
    var promptWidth = document.getElementById('prompt').offsetWidth;
    document.getElementById('username').style.width = promptWidth + 'px';
    document.getElementById('errorContainer').style.width = promptWidth + 'px';
}

// Enjoying this callenge? We have 10 more challenges for you in the Secure Code Game. Play at gh.io/securecodegame