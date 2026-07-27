// --- PART 1: The Date Gatekeeper ---
const dateInput = document.getElementById('date-input');
const enterBtn = document.getElementById('enter-btn');
const introPage = document.getElementById('intro-page');
const errorMsg = document.getElementById('error-msg');

// Force the date input to be completely empty every time the page loads/refreshes
dateInput.value = '';

// Now you can use your DD-MM-YYYY format!
const TARGET_DATE = '02-08-2026';

enterBtn.addEventListener('click', () => {
  // 1. Get the standard YYYY-MM-DD value from the input
  const rawDate = dateInput.value; 

  // 2. Split it apart, reverse the order, and join it back together with hyphens
  // This turns "2026-08-02" into "02-08-2026"
  const formattedDate = rawDate.split('-').reverse().join('-');

  // 3. Compare the reformatted date to your target
  if (formattedDate === TARGET_DATE) {
    // Hide the error message if it was showing
    errorMsg.style.display = 'none';
    
    // Trigger the CSS fade out
    introPage.classList.add('fade-out-intro');

    // Remove the intro page from the DOM completely after the fade
    setTimeout(() => {
      introPage.style.display = 'none';
    }, 1500);
    
  } else {
    // Show error message if date is wrong
    errorMsg.style.display = 'block';
  }
});

// --- PART 2: Section Fade-In on Scroll ---
const sections = document.querySelectorAll('#main-page section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -15% 0px',
});

sections.forEach(section => sectionObserver.observe(section));
