// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Initially display only the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
// Function to handle logout
function logout() {
    // Clear session or local storage if needed
    localStorage.removeItem("username");  // Example: remove username from localStorage

    // Optionally, redirect to the login page
    window.location.href = "login.html";  // Redirect to login page after logout
    
    // SweetAlert popup for logout confirmation
    Swal.fire({
        title: 'Logged Out!',
        text: 'You have successfully logged out.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
