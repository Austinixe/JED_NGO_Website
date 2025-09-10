// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you for contacting us! We’ll get back to you soon.";
    feedback.style.color = "green";
    this.reset();
  }
});
