// =========================
// Variables
// =========================
const discountBtn = document.getElementById('discount-btn');
const heroSection = document.querySelector('.img');
const aboutSection = document.getElementById('about');
const whatIsSection = document.getElementById('what-is');
const backToTopBtn = document.createElement('button');

// =========================
// Discount Button Click
// =========================
if(discountBtn){
  discountBtn.addEventListener('click', function(e){
    e.preventDefault();
    alert('Your 10% discount code is: AIRALO10');

    // Change background
    heroSection.style.backgroundImage = "url('../image/1.webp')";
  });
}

// =========================
// Scroll Animations
// =========================
function scrollReveal(element, offset = 150){
  const scrollPos = window.scrollY;
  const triggerPos = element.offsetTop - window.innerHeight + offset;
  if(scrollPos > triggerPos){
    element.style.opacity = 1;
    element.style.transform = "translateY(0)";
  }
}

window.addEventListener('scroll', () => {
  if(aboutSection) scrollReveal(aboutSection);
  if(whatIsSection) scrollReveal(whatIsSection);

  // Show back to top button
  if(window.scrollY > 400){
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// =========================
// Back to Top Button
// =========================
backToTopBtn.textContent = "↑ Top";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.right = "20px";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.fontSize = "16px";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.background = "#4f46e5";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.zIndex = "999";

document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================
// Smooth Scroll for internal links
// =========================
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// Social icons hover effect
// =========================
const socialIcons = document.querySelectorAll('footer #social a img');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "0.3s";
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = "scale(1)";
  });
});

// Intro Screen
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');

  setTimeout(() => {
    intro.style.opacity = 0; // fade out
    setTimeout(() => {
      intro.style.display = 'none'; // بعد fade out يخفي div
    }, 1000);
  }, 2000); // مدة ظهور intro 2 ثواني
});
