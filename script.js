$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $('.nav').toggleClass('showing');
    $('.theme').toggle(); // Toggle visibility of the theme class
  });
});

// JavaScript for sliding advertisements
const theme = document.querySelector(".theme");
const themeModal = document.querySelector(".customize-theme");

if (theme && themeModal) {
  const toggleThemeModal = () => {
    themeModal.style.display = themeModal.style.display === 'grid' ? 'none' : 'grid';
  };

  theme.addEventListener('click', toggleThemeModal);

  window.addEventListener('click', (e) => {
    if (e.target === themeModal) {
      themeModal.style.display = 'none';
    }
  });
}

const fontSizes = document.querySelectorAll('.choose-size span');
const colors = document.querySelectorAll('.choose-color span');
const backgrounds = document.querySelectorAll('.choose-bg div');
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-sidebar');
const mobileMenu = document.querySelector('.mobile-menu');

// Function to apply font size
function applyFontSize(sizeClass) {
  const fontSizes = {
    'font-size-1': '10px',
    'font-size-2': '13px',
    'font-size-3': '16px',
    'font-size-4': '18px',
    'font-size-5': '19px'
  };
  document.documentElement.style.fontSize = fontSizes[sizeClass] || '16px';
}

// Load saved font size
document.addEventListener('DOMContentLoaded', () => {
  const savedFontSize = localStorage.getItem('selectedFontSize');
  if (savedFontSize) {
    const activeSize = document.querySelector(`.${savedFontSize}`);
    if (activeSize) {
      activeSize.classList.add('active');
      applyFontSize(savedFontSize);
    }
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

// Function to apply color
function applyColor(colorClass) {
  const colorsMap = {
    'color-1': '#008489',
    'color-2': 'hsl(52, 75%, 60%)',
    'color-3': 'hsl(352, 75%, 60%)',
    'color-4': 'hsl(152, 75%, 60%)',
    'color-5': 'hsl(202, 75%, 60%)'
  };
  const primaryColor = colorsMap[colorClass] || '#000';

  document.querySelectorAll('.btn, .slider, header, footer, .theme, .quick, .screen').forEach(element => {
    element.style.backgroundColor = primaryColor;
  });
}

// Load saved color
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    const activeColor = document.querySelector(`.${savedColor}`);
    if (activeColor) {
      activeColor.classList.add('active');
      applyColor(savedColor);
    }
  }
});

// Handle color change
colors.forEach(color => {
  color.addEventListener('click', () => {
    colors.forEach(c => c.classList.remove('active'));
    color.classList.add('active');
    applyColor(color.classList[0]);
    localStorage.setItem('selectedColor', color.classList[0]);
  });
});

// Function to apply background
function applyBackground(bgClass) {
  const backgroundsMap = {
    'bg-1': 'floralwhite',
    'bg-2': 'linear-gradient(to left, black, #333, black)',
    'bg-3': 'linear-gradient(to right, #333, #777, #333)'
  };
  const primaryBgColor = backgroundsMap[bgClass] || 'white';

  document.querySelectorAll('.page-wrapper, .post-wrapper, .post, .main-content, .section-topic, .sidebar *').forEach(element => {
    element.style.background = primaryBgColor;
  });

  const textColor = (bgClass === 'bg-2' || bgClass === 'bg-3') ? 'white' : '';
  document.querySelectorAll('body *:not(.logo)').forEach(element => {
    element.style.color = textColor;
  });
}

// Load saved background
document.addEventListener('DOMContentLoaded', () => {
  const savedBg = localStorage.getItem('selectedBackground');
  if (savedBg) {
    const activeBg = document.querySelector(`.${savedBg}`);
    if (activeBg) {
      activeBg.classList.add('active');
      applyBackground(savedBg);
    }
  }
});

// Handle background change
backgrounds.forEach(bg => {
  bg.addEventListener('click', () => {
    backgrounds.forEach(b => b.classList.remove('active'));
    bg.classList.add('active');
    applyBackground(bg.classList[0]);
    localStorage.setItem('selectedBackground', bg.classList[0]);
  });
});

// Toggle sidebar display
if (toggleSidebar) {
  toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
}

// Toggle mobile menu display
if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (nav) {
      nav.classList.toggle('show');
    }
  });
}

// Toggle notifications
function toggleNotifications(event) {
  event.stopPropagation();

  const notificationBox = document.getElementById("notificationBox");
  const notificationCount = document.getElementById("notificationCount");

  if (notificationBox && notificationCount) {
    notificationBox.style.display = notificationBox.style.display === "none" ? "block" : "none";
    if (notificationBox.style.display === "block") {
      notificationCount.style.display = "none";
      localStorage.setItem("notificationCleared", "true");
    }
  }
}

window.onload = function() {
  const notificationCount = document.getElementById("notificationCount");
  if (notificationCount && localStorage.getItem("notificationCleared") === "true") {
    notificationCount.style.display = "none";
  }
};

document.addEventListener("click", function() {
  const notificationBox = document.getElementById("notificationBox");
  if (notificationBox) notificationBox.style.display = "none";
});

// Search function
function searchPosts() {
  let searchTerm = document.querySelector('input[name="search-term"]').value.toLowerCase();
  let posts = document.querySelectorAll('.main-content .post');

  posts.forEach(post => {
    post.style.display = post.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("myVideo");
  if (video) {
    video.muted = true;
    video.play();
  }
});

// Multi-step form handling
function nextStep(step) {
  const currentFormStep = document.getElementById(`step-${step}`);
  const nextFormStep = document.getElementById(`step-${step + 1}`);

  if (currentFormStep) currentFormStep.style.display = "none";
  if (nextFormStep) nextFormStep.style.display = "block";

  if (step === 5) {
    document.getElementById("confirmation-message").style.display = "block";
    document.getElementById("multi-step-form").reset();
  }
}
var depositDiv = document.getElementById("depositBox");
        var button = document.getElementById("dragBtn");

        // Kwerekana cyangwa guhisha deposit iyo button ikanditsweho
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Kubuza ko biza guhita bihisha ako kanya
            if (depositDiv.style.display === "none" || depositDiv.style.display === "") {
                depositDiv.style.display = "flex"; 
            } else {
                depositDiv.style.display = "none"; 
            }
        });

        // Guhisha deposit iyo ukoze ahandi hose kuri page
        document.addEventListener("click", function(event) {
            if (event.target !== button && event.target !== depositDiv) {
                depositDiv.style.display = "none";
            }
        });
        
        var depositBtn = document.getElementById("depositBtn");
    var fmContainer = document.querySelector(".fm-container");

    // Function yo kwerekana no guhisha fm-container
    function toggleDeposit() {
        if (fmContainer.style.display === "none" || fmContainer.style.display === "") {
            fmContainer.style.display = "block"; // Yigaragaze
        } else {
            fmContainer.style.display = "none"; // Yihishe
        }
    }

    // Iyo ukoze kuri button, ihita ifungura fm-container
    depositBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Kubuza guhita bifunga ako kanya
        toggleDeposit();
    });

    // Iyo ukoze ahandi hose, fm-container irihisha
    document.addEventListener("click", function(event) {
        if (event.target !== depositBtn && !fmContainer.contains(event.target)) {
            fmContainer.style.display = "none";
        }
    });
        
        var withdrawBtn = document.getElementById("withdrawBtn");
var continerDiv = document.querySelector(".continer"); // ✅ Koresha class ya "continer"

// Function yo kwerekana no guhisha continer
function toggleContiner() {
    if (continerDiv.style.display === "none" || continerDiv.style.display === "") {
        continerDiv.style.display = "block"; // ✅ "black" yahinduwe ikaba "flex" cyangwa "block"
    } else {
        continerDiv.style.display = "none"; // Yihishe
    };
}

// Iyo ukoze kuri button, continer iragaragara
withdrawBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Kubuza guhita bihisha ako kanya
    toggleContiner();
});

// Iyo ukoze ahandi hose kuri page, continer irihisha
document.addEventListener("click", function(event) {
    if (event.target !== withdrawBtn && !continerDiv.contains(event.target)) { // ✅ "contins" yahinduwe "contains"
        continerDiv.style.display = "none";
    } 
}); 

function googleTranslateElementInit() {
  try {
    if (typeof google !== "undefined" && google.translate && google.translate.TranslateElement) {
      // Initialize Google Translate
      new google.translate.TranslateElement({
        pageLanguage: 'rw',
        includedLanguages: 'en,rw,sw,fr,lg', // Include languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      // Combine selectors for main content
      const contentSelectors = ['.main-content', '.main-content.single'];
      contentSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(content => {
          content.addEventListener('mouseenter', () => toggleTranslate(true));
          content.addEventListener('mouseleave', () => toggleTranslate(false));
        });
      });
    } else {
      throw new Error("Google Translate widget is not available in this browser.");
    }
  } catch (error) {
    console.error("Error initializing Google Translate: ", error);
    alert("There was an issue initializing Google Translate. Please check for possible reasons.");
  }
}

// Toggle the visibility of the translate element
function toggleTranslate(shouldShow) {
  const element = document.getElementById("google_translate_element");
  if (element) {
    element.style.display = shouldShow ? "block" : "none";
  }
}
window.onload = function() {
    alert("Murakaza neza ku rubuga rwacu!\n\n  DORE UKO WAKORESHA URUBUGA \n\n Kugira ngo wemererwe gusoma inkuru zitandukanye, biragusaba kugura nes point. Igihe ugiye gusoma inkuru Kanda button ya read more(soma byose) inshuro imwe, utegereze Kugira ngo nés point zawe zidashirira ku nkuru imwe. Turabashimira kuba mwahisemo new talents stories group, ntimuzicwa n'irungu, turahabaye. \n\n HERE’S HOW TO USE THE WEBSITE: \n\n To be allowed to read different stories, you need to purchase  nes points. When you want to read a story, click the Read More button once and wait to ensure your points don’t run out on a single story. We thank you for choosing New Talents Stories Group—don’t feel left out, we’re here for you.");
};
