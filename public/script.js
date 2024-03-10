document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    // Simulate form submission (replace with actual form submission)
    // For demonstration purposes, we'll just log the form data
    console.log('Form data:', Object.fromEntries(formData.entries()));

    // Clear form inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
