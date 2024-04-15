document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded
  
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (e.g., page refresh)
  
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1); // Remove the leading '#'
  
        // Hide all sections
        hideAllSections();
  
        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
      });
    });
  
    // Function to hide all sections
    function hideAllSections() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.display = 'none';
      });
    }
  });
  