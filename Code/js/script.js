// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu label');
    const menuList = document.querySelector('.head ul');
    
    menuBtn.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.head')) {
            menuList.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Course card hover effect
document.querySelectorAll('.courses').forEach(course => {
    course.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });

    course.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

// Course data
const courses = [
    {
        title: "Web Development for beginners",
        description: "Learn the fundamentals of web development",
        link: "course-web-development.html",
        category: "Web Development"
    },
    {
        title: "App Development for beginners",
        description: "Start your journey in mobile app development",
        link: "course-app-development.html",
        category: "Mobile Development"
    },
    {
        title: "Full Stack Development",
        description: "Master both frontend and backend development",
        link: "course-full-stack.html",
        category: "Web Development"
    },
    {
        title: "Data Science for beginners",
        description: "Introduction to data science and analytics",
        link: "course-data-science.html",
        category: "Data Science"
    },
    {
        title: "AI and ML using Python",
        description: "Learn artificial intelligence and machine learning",
        link: "course-ai-ml.html",
        category: "AI/ML"
    },
    {
        title: "Cloud Computing - AWS",
        description: "Master cloud computing with AWS",
        link: "course-cloud-computing.html",
        category: "Cloud Computing"
    }
];

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('courseSearchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            searchResults.classList.remove('active');
            return;
        }

        const results = courses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm)
        );

        displayResults(results);
    });

    // Handle input changes
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            searchResults.classList.remove('active');
            return;
        }

        const results = courses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm)
        );

        displayResults(results);
    });

    // Display search results
    function displayResults(results) {
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No courses found</div>';
        } else {
            results.forEach(course => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                `;
                resultItem.addEventListener('click', function() {
                    window.location.href = course.link;
                });
                searchResults.appendChild(resultItem);
            });
        }
        
        searchResults.classList.add('active');
    }

    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchForm.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu label');
    const navLinks = document.querySelector('ul');
    const chk1 = document.getElementById('chk1');

    menuToggle.addEventListener('click', function() {
        chk1.checked = !chk1.checked;
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            chk1.checked = false;
        }
    });
});

// Course enrollment
document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically handle course enrollment
        alert('Course enrollment functionality would be implemented here.');
    });
}); 