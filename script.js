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
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(email)) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Thank you for contacting us! We’ll get back to you soon.";
    feedback.style.color = "green";
    this.reset();
  }
});

// 👉 Show / hide donation form
const showDonateFormBtn = document.getElementById("showDonateForm");
const donationForm = document.getElementById("donationForm");

if (showDonateFormBtn && donationForm) {
  showDonateFormBtn.addEventListener("click", function() {
    donationForm.style.display = (donationForm.style.display === "none") ? "block" : "none";
  });
}

// Paystack Donation
const paystackBtn = document.getElementById("paystackBtn");
if (paystackBtn) {
  paystackBtn.addEventListener("click", function() {
    let amount = document.getElementById("donationAmount").value;
    let donorEmail = document.getElementById("donorEmail").value.trim();

    if (!donorEmail || !/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(donorEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!amount || amount < 100) {
      alert("Please enter a valid amount (minimum ₦100).");
      return;
    }

    var handler = PaystackPop.setup({
      key: 'pk_test_144b15e8615f9c388772721de3eecf32596131b0', // 🔑 Replace with your Paystack PUBLIC KEY
      email: donorEmail,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // unique reference
      callback: function(response){
        alert('Thank you for donating! Payment reference: ' + response.reference);
      },
      onClose: function(){
        alert('Transaction cancelled.');
      }
    });
    handler.openIframe();
  });
}

// Toggle Bank Transfer Details
const bankToggle = document.getElementById("bankToggle");
const bankDetails = document.getElementById("bankDetails");

if (bankToggle && bankDetails) {
  bankToggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (bankDetails.style.display === "none") {
      bankDetails.style.display = "block";
      bankToggle.textContent = "Hide Bank Transfer Details";
    } else {
      bankDetails.style.display = "none";
      bankToggle.textContent = "Donate via Bank Transfer";
    }
  });
}


var typed = new Typed("#typed", {
  strings: [
    "Welcome to JED Foundation",
    "Empowering Communities",
    "Making a Bigger Impact"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

// Dropdown click toggle (for mobile)
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });
});
