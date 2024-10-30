$(document).ready(function() {
  $('.menu-toggle').on('click', function () {
    $('.nav').toggleClass('showing');
    
    // Toggle visibility of the theme class
    $('.theme').toggle(); // Hide if shown, show if hidden
  });
});

// JavaScript for sliding advertisements

const theme = document.querySelector(".theme");
const themeModal = document.querySelector(".customize-theme");

// Fungura cyangwa fungura modal
const toggleThemeModal = () => {
  if (themeModal.style.display === 'grid') {
    themeModal.style.display = 'none';  // Ifunze
  } else {
    themeModal.style.display = 'grid';  // Ifunguwe
  }
}

// Fungura cyangwa fungura modal kuri click ya button ya theme
theme.addEventListener('click', toggleThemeModal);

// Gufunga modal iyo umuntu akanda ahandi hatari kuri modal
window.addEventListener('click', (e) => {
  if (e.target === themeModal) {
    themeModal.style.display = 'none';
  }
});

const fontSizes = document.querySelectorAll('.choose-size span');

// Function to apply the font size
function applyFontSize(sizeClass) {
    let fontSize;
    if (sizeClass === 'font-size-1') {
        fontSize = '10px';
    } else if (sizeClass === 'font-size-2') {
        fontSize = '13px';
    } else if (sizeClass === 'font-size-3') {
        fontSize = '16px';
    } else if (sizeClass === 'font-size-4') {
        fontSize = '18px';
    } else if (sizeClass === 'font-size-5') {
        fontSize = '19px';
    }
    // Apply the font size to the document body
    document.documentElement.style.fontSize = fontSize;
}

// Load saved font size on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedFontSize = localStorage.getItem('selectedFontSize');
    if (savedFontSize) {
        document.querySelector(`.${savedFontSize}`).classList.add('active');
        applyFontSize(savedFontSize);
    }
});

// Handle font size change
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        fontSizes.forEach(s => s.classList.remove('active'));
        size.classList.add('active');

        const selectedFontSizeClass = size.classList[0];
        applyFontSize(selectedFontSizeClass);
        localStorage.setItem('selectedFontSize', selectedFontSizeClass);
    });
});

// Get the color elements
const colors = document.querySelectorAll('.choose-color span');

// Function to apply the primary color
function applyColor(colorClass) {
    let primaryColor;
    if (colorClass === 'color-1') {
        primaryColor = '#008489';
    } else if (colorClass === 'color-2') {
        primaryColor = 'hsl(52, 75%, 60%)';
    } else if (colorClass === 'color-3') {
        primaryColor = 'hsl(352, 75%, 60%)';
    } else if (colorClass === 'color-4') {
        primaryColor = 'hsl(152, 75%, 60%)';
    } else if (colorClass === 'color-5') {
        primaryColor = 'hsl(202, 75%, 60%)';
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.style.backgroundColor = primaryColor;
    });
    document.querySelector('.slider').style.backgroundColor = primaryColor;
    document.querySelector('header').style.backgroundColor = primaryColor;
    document.querySelector('footer').style.backgroundColor = primaryColor;
    document.querySelector('.theme').style.backgroundColor = primaryColor;
    document.querySelector('.quick').style.backgroundColor = primaryColor;
    
}

// Load saved color on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        document.querySelector(`.${savedColor}`).classList.add('active');
        applyColor(savedColor);
    }
});

// Handle color change
colors.forEach(color => {
    color.addEventListener('click', () => {
        colors.forEach(c => c.classList.remove('active'));
        color.classList.add('active');

        const selectedColorClass = color.classList[0];
        applyColor(selectedColorClass);
        localStorage.setItem('selectedColor', selectedColorClass);
    });
});

// Get the background elements
const backgrounds = document.querySelectorAll('.choose-bg div');

// Function to apply the background
function applyBackground(bgClass) {
    let primaryBgColor;
    if (bgClass === 'bg-1') {
        primaryBgColor = 'floralwhite';
    } else if (bgClass === 'bg-2') {
        primaryBgColor = 'linear-gradient(to left, black, #333, black)';
    } else if (bgClass === 'bg-3') {
        primaryBgColor = 'linear-gradient(to right, #333, #777, #333)';
    }

    document.querySelectorAll('.page-wrapper, .post-wrapper, .post, .main-content, .section-topic, .sidebar *').forEach(element => {
        element.style.background = primaryBgColor;
    });

    if (bgClass === 'bg-2' || bgClass === 'bg-3') {
        document.querySelectorAll('body *:not(.logo *):not(.background):not(.customize-theme h1):not(.customize-theme h2):not(.customize-theme h3):not(.customize-theme h4):not(.customize-theme h5):not(.customize-theme h6)').forEach(element => {
            element.style.color = 'white';
        });
    } else {
        document.querySelectorAll('body *:not(.logo)').forEach(element => {
            element.style.color = '';
        });
    }
}

// Load saved background on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('selectedBackground');
    if (savedBg) {
        document.querySelector(`.${savedBg}`).classList.add('active');
        applyBackground(savedBg);
    }
});

// Handle background change
backgrounds.forEach(bg => {
    bg.addEventListener('click', () => {
        backgrounds.forEach(b => b.classList.remove('active'));
        bg.classList.add('active');

        const selectedBgClass = bg.classList[0];
        applyBackground(selectedBgClass);
        localStorage.setItem('selectedBackground', selectedBgClass);
    });
});

// Function to toggle the container visibility
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    if (!event.target.matches('.fa-chevron-down')) {
        dropdown.style.display = "none";
    }
};

// Fata footer na elements zo muri class ya quick
const footer = document.querySelector('footer');
const quickElements = document.querySelectorAll('.quick');

// Fungura Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            quickElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            quickElements.forEach(element => {
                element.style.display = 'block';
            });
        }
    });
}, {
    root: null,
    threshold: 0.5
});

// Reba footer na observer
observer.observe(footer);

// Shaka form n'input
const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector(".text-input");

// Fungura uburyo bwo gushakisha
searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchTerm = searchInput.value.toLowerCase();
  const posts = document.querySelectorAll(".main-content .post");

  posts.forEach(post => {
    const postContent = post.textContent.toLowerCase();
    post.style.display = postContent.includes(searchTerm) ? "block" : "none";
  });
});
    
    
    
 
