document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const target = this.getAttribute('data-target');

        // Hide all sections
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(target).classList.remove('hidden');
        document.getElementById(target).classList.add('active');
    };
});

// Show the login popup 5 seconds after the page loads
window.onload = function() {
    setTimeout(function() {
        document.getElementById('login-popup').classList.remove('hidden');
        document.getElementById('login-popup').style.display = 'block'; // Show the popup
    }, 5000); // 5000 milliseconds = 5 seconds
};

document.getElementById('login-button').onclick = function() {
    document.getElementById('login-popup').classList.remove('hidden');
    document.getElementById('login-popup').style.display = 'block'; // Make sure it is displayed
};

document.getElementById('close-popup').onclick = function() {
    document.getElementById('login-popup').classList.add('hidden');
    document.getElementById('login-popup').style.display = 'none'; // Hide it again
};

window.onclick = function(event) {
    if (event.target === document.getElementById('login-popup')) {
        document.getElementById('login-popup').classList.add('hidden');
        document.getElementById('login-popup').style.display = 'none'; // Hide it again
    }
};

// Handle form submission
document.querySelector('form').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values (if needed)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Clear form fields (optional)
    this.reset();

    // Show thank you message
    alert(`Thank you, ${name}, for submitting your information!`);

    // Close the popup
    document.getElementById('login-popup').classList.add('hidden');
    document.getElementById('login-popup').style.display = 'none';
};
