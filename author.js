$(document).ready(function() {
  const sidebar = $('#sidebar');
  sidebar.addClass('collapsed');
  
  // Toggle menu visibility
  $('.menu-toggle').on('click', function() {
    $('.nav').toggleClass('showing');
  });
  
  // Sidebar toggle
  window.toggleSidebar = function() {
    sidebar.toggleClass('collapsed');
  };
  
  // Toggle submenu on click
  document.querySelectorAll('.dropdown > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Close all submenus on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown > ul').forEach(submenu => {
        submenu.style.display = 'none';
      });
    }
  });
  
  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if (nav) {
        nav.classList.toggle('show');
      }
    });
  }
  
  // Menu item active state (move class="active" where clicked)
  const menuItems = document.querySelectorAll('.menu > li a');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Dashboard toggle with active class
  const dashboard = document.querySelector('.dashboard');
  const dashboardToggle = document.getElementById('dashboardToggle');
  
  if (dashboard && dashboardToggle) {
    dashboardToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Move active class to this toggle
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      // Show/hide dashboard
      dashboard.classList.toggle('active');
      courseContent.classList.remove('active'); // Hide courseContent
    });
    
    dashboard.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Course content toggle with active class
  const courseToggle = document.getElementById("courseToggle");
  const courseContent = document.getElementById("courseContent");
  
  courseToggle.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Move active class to this toggle
    menuItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
    
    // Show course content, hide dashboard
    courseContent.classList.toggle("active");
    dashboard.classList.remove("active");
  });
  
  courseContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  
  // Hide both on outside click
  document.addEventListener("click", function() {
    courseContent.classList.remove("active");
    dashboard.classList.remove("active");
  });
});

document.getElementById("search").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const posts = document.querySelectorAll(".post");
  
  posts.forEach(post => {
    const title = post.querySelector(".post-title");
    
    if (title) {
      // Sigarura original title mbere yo kongeramo highlight nshya
      const originalText = title.getAttribute('data-original') || title.textContent;
      title.setAttribute('data-original', originalText);
      
      const lowerOriginal = originalText.toLowerCase();
      
      if (searchTerm && lowerOriginal.includes(searchTerm)) {
        // Highlight keyword
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlighted = originalText.replace(regex, '<span style="background: yellow;">$1</span>');
        title.innerHTML = highlighted;
        
        post.style.display = "block";
        
        // Auto scroll to center of screen
        post.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        title.innerHTML = originalText; // Garura original title
        post.style.display = searchTerm ? "none" : "block";
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const folderLink = document.querySelector(".folder a");
  const adBox = document.querySelector(".ad");

  folderLink.addEventListener("click", function(event) {
    event.preventDefault(); // Wirinda ko a href ikora redirect
    adBox.style.display = "block";
    event.stopPropagation(); // Wirinda ko uyu click uba nk’uwakorewe kuri document
  });

  document.addEventListener("click", function() {
    adBox.style.display = "none";
  });

  adBox.addEventListener("click", function(event) {
    event.stopPropagation(); // Ibi bituma ukanda kuri ad ntibitume ihita ibura
  });
});
