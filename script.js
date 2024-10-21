$(document).ready(function() {
  $('.menu-toggle').on('click', function () {
    $('.nav').toggleClass('showing');
    
    // Toggle visibility of the theme class
    $('.theme').toggle(); // Hide if shown, show if hidden
  });
});
// JavaScript for sliding advertisements

;
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.wrapper');
    const signupLink = document.querySelector('.signup-link');
    const signinLink = document.querySelector('.signin-link');

    // When "Sign Up" link is clicked
    signupLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        wrapper.classList.remove('animate-signin'); // Remove 'animate-signin' class if it exists
        wrapper.classList.add('animate-signup'); // Add 'animate-signup' class to show sign-up form
    });

    // When "Sign In" link is clicked
    signinLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        wrapper.classList.remove('animate-signup'); // Remove 'animate-signup' class if it exists
        wrapper.classList.add('animate-signin'); // Add 'animate-signin' class to show sign-in form
    });
});
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
        // Add 'active' class to the saved font size
        document.querySelector(`.${savedFontSize}`).classList.add('active');
        applyFontSize(savedFontSize);
    }
});

// Handle font size change
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        // Remove the 'active' class from all sizes
        fontSizes.forEach(s => s.classList.remove('active'));
        // Add 'active' class to the clicked size
        size.classList.add('active');

        // Get the class of the clicked font size
        const selectedFontSizeClass = size.classList[0];

        // Apply the selected font size
        applyFontSize(selectedFontSizeClass);

        // Save the selected font size to localStorage
        localStorage.setItem('selectedFontSize', selectedFontSizeClass);
    });
});
// Get the color elements
const colors = document.querySelectorAll('.choose-color span');

// Function to apply the primary color
function applyColor(colorClass) {
    let primaryColor;
    if (colorClass === 'color-1') {
        primaryColor = '#008489';  // Example color
    } else if (colorClass === 'color-2') {
        primaryColor = 'hsl(52, 75%,60%)';  // Example color
    } else if (colorClass === 'color-3') {
        primaryColor = 'hsl(352, 75%,60%)';  // Example color
    } else if (colorClass === 'color-4') {
        primaryColor = 'hsl(152, 75%,60%)';  // Example color
    } else if (colorClass === 'color-5') {
        primaryColor = 'hsl(202, 75%,60%)';  // Example color
    }

    // Apply the primary color to the button and other elements
    document.querySelectorAll('.btn').forEach(button => {
        button.style.backgroundColor = primaryColor;
    });
    document.querySelector('.slider').style.backgroundColor = primaryColor;
    document.querySelector('header').style.backgroundColor = primaryColor;
    document.querySelector('footer').style.backgroundColor = primaryColor;
    document.querySelector('.theme').style.backgroundColor = primaryColor;
}

// Load saved color on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        // Add 'active' class to the saved color
        document.querySelector(`.${savedColor}`).classList.add('active');
        applyColor(savedColor);
    }
});

// Handle color change
colors.forEach(color => {
    color.addEventListener('click', () => {
        // Remove the 'active' class from all colors
        colors.forEach(c => c.classList.remove('active'));
        // Add 'active' class to the clicked color
        color.classList.add('active');

        // Get the class of the clicked color
        const selectedColorClass = color.classList[0];

        // Apply the selected color
        applyColor(selectedColorClass);

        // Save the selected color to localStorage
        localStorage.setItem('selectedColor', selectedColorClass);
    });
});

// Get the background elements
const backgrounds = document.querySelectorAll('.choose-bg div');

// Function to apply the background
function applyBackground(bgClass) {
    let primaryBgColor;
    if (bgClass === 'bg-1') {
        primaryBgColor = 'floralwhite';  // Facebook-like gradient
    } else if (bgClass === 'bg-2') {
        primaryBgColor = 'linear-gradient(to left, black, #333, black';  // Darker gradient
    } else if (bgClass === 'bg-3') {
        primaryBgColor = 'linear-gradient(to right, #333, #777, #333)';  // Another dark gradient
    }

    // Apply the gradient background to the whole page except specified sections
    document.querySelectorAll('.page-wrapper,.post-wrapper,.post, .main-content,.section-topic,.sidebar *,.section-topic *').forEach(element => {
        element.style.background = primaryBgColor;
    });

    // Change the color of all text based on the background color
    if (bgClass === 'bg-2' || bgClass === 'bg-3') {
        document.querySelectorAll('body *:not(.logo *):not(.background):not(.customize-theme h1):not(.customize-theme h2):not(.customize-theme h3):not(.customize-theme h4):not(.customize-theme h5):not(.customize-theme h6)').forEach(element => {
    element.style.color = 'white';  // Change text color to white
});
    } else {
        document.querySelectorAll('body *:not(.logo)').forEach(element => {
            element.style.color = '';  // Reset text color to default
        });
    }
}

// Load saved background on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('selectedBackground');
    if (savedBg) {
        // Add 'active' class to the saved background
        document.querySelector(`.${savedBg}`).classList.add('active');
        applyBackground(savedBg);
    }
});

// Handle background change
backgrounds.forEach(bg => {
    bg.addEventListener('click', () => {
        // Remove the 'active' class from all backgrounds
        backgrounds.forEach(b => b.classList.remove('active'));
        // Add 'active' class to the clicked background
        bg.classList.add('active');

        // Get the class of the clicked background
        const selectedBgClass = bg.classList[0];

        // Apply the selected background
        applyBackground(selectedBgClass);

        // Save the selected background to localStorage
        localStorage.setItem('selectedBackground', selectedBgClass);
    });
});
