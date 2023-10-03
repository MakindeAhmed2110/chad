const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


document.addEventListener('DOMContentLoaded', function() {
    const assistant = document.getElementById('assistant');
    const signInButton = document.querySelector('.sign_in');
    const signUpButton = document.querySelector('.sign_up');
    const getStarted = document.querySelector('.btn_1');

    let isHovered = false;

    function animateAssistant(targetButton, infoText) {
        // Move the assistant to the button
        const buttonRect = targetButton.getBoundingClientRect();
        assistant.style.transition = '0.5s';
        assistant.style.left = `${buttonRect.left}px`;
        assistant.style.top = `${buttonRect.bottom + 20}px`; // Adjusted top position

        // Show information
        assistant.innerHTML = infoText;
        assistant.style.display = 'block';
    }
  
  
 

    signInButton.addEventListener('mouseenter', function() {
        isHovered = true;
        animateAssistant(signInButton, "<img src='/images/icon.png' alt='Assistant Image'><br>This is a sign in button to login to existing accounts on chad.");
    });

    signUpButton.addEventListener('mouseenter', function() {
        isHovered = true;
        animateAssistant(signUpButton, "<img src='/images/icon.png' alt='Assistant Image'><br>This is a sign up button to create a new account on chad.");
    });

    signInButton.addEventListener('mouseleave', function() {
        isHovered = false;
        assistant.innerHTML = "Hello, I'm here to help"; // Set default message
    });

    signUpButton.addEventListener('mouseleave', function() {
        isHovered = false;
        if (!isHovered) {
            assistant.style.transition = '0.5s';
            assistant.style.right = '20px';
            assistant.style.top = 'calc(100% - 220px)';
             // Set default message
            assistant.innerHTML = "<img src='/images/icon.png' alt='Assistant Image'><br><p>Hello, I'm here to help, Try hovering over the signup button or  signin button to feel the effect</p><br>😉😎😃✨";
            assistant.style.height = '200px'
        }
    });
    signInButton.addEventListener('mouseleave', function() {
        isHovered = false;
        if (!isHovered) {
            assistant.style.transition = '0.5s';
            assistant.style.right = '-50px';
            assistant.style.top = 'calc(100% - 220px)';
             // Set default message
            assistant.innerHTML = "<img src='/images/icon.png' alt='Assistant Image'><br><p>Hello, I'm here to help, Try hovering over the signup button or  signin button to feel the effect</p><br>😉😎😃✨";
        }
    });

    // Slide up from main position
    assistant.style.transition = '0.5s';
    assistant.style.bottom = '20px';
    assistant.style.left = '80%' 
    assistant.style.height = '200px' // Adjusted bottom position


    // Set default message
    assistant.innerHTML = "<img src='/images/icon.png' alt='Assistant Image'><br><p>Hello, I'm here to help, Try hovering over the signup button or  signin button to feel the effect</p><br>😉😎😃✨";
});

