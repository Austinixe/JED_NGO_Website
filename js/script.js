// ==================== FAQ Toggle ====================
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// ==================== Contact Form Validation ====================
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

// ==================== Donate Form Toggle ====================
const showDonateFormBtn = document.getElementById("showDonateForm");
const donationForm = document.getElementById("donationForm");

if (showDonateFormBtn && donationForm) {
  donationForm.style.display = "none"; // Hide by default
  showDonateFormBtn.addEventListener("click", function() {
    donationForm.style.display = (donationForm.style.display === "none") ? "block" : "none";
  });
}

// ==================== Paystack Donation ====================
const paystackBtn = document.getElementById("paystackBtn");
if (paystackBtn) {
  paystackBtn.addEventListener("click", function() {
    const amount = document.getElementById("donationAmount").value;
    const donorEmail = document.getElementById("donorEmail").value.trim();

    if (!donorEmail || !/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(donorEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!amount || amount < 100) {
      alert("Please enter a valid amount (minimum ₦100).");
      return;
    }

    const handler = PaystackPop.setup({
      key: 'pk_test_144b15e8615f9c388772721de3eecf32596131b0', // Replace with your Paystack PUBLIC KEY
      email: donorEmail,
      amount: amount * 100,
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
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

// ==================== Typed.js Hero ====================
new Typed("#typed", {
  strings: ["Welcome to JED Foundation", "Empowering Communities", "Making a Bigger Impact"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true
});

// ==================== Dropdown Toggle for Mobile ====================
document.querySelectorAll('.dropdown .dropbtn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });
});

// ==================== Blog Posts ====================
// Load blog posts from local JSON
function loadBlogPosts() {
  const blogSection = document.getElementById('blog');
  blogSection.innerHTML = `<h2>Our Blog</h2>`;

  fetch('data/posts.json')
    .then(response => response.json())
    .then(posts => {
      posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p class="blog-date">${post.date}</p>
          <p class="blog-content" id="post-${index}">
            ${post.content.substring(0, 150)}...
            <span class="read-more" onclick="toggleReadMore(${index})">Read More</span>
          </p>
        `;
        blogSection.appendChild(postDiv);
      });

      window.toggleReadMore = function(index) {
        const p = document.getElementById(`post-${index}`);
        if (p.dataset.expanded === "true") {
          p.innerHTML = posts[index].content.substring(0, 150) + `... <span class="read-more" onclick="toggleReadMore(${index})">Read More</span>`;
          p.dataset.expanded = "false";
        } else {
          p.innerHTML = posts[index].content + ` <span class="read-more" onclick="toggleReadMore(${index})">Show Less</span>`;
          p.dataset.expanded = "true";
        }
      };
    })
    .catch(err => {
      blogSection.innerHTML += `<p style="color:red;">Unable to load blog posts.</p>`;
      console.error("Error loading blog posts:", err);
    });
}

// Call the function to load posts
loadBlogPosts();
