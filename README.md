# Insta Travel 🌍✈️

**UAE Work Permit & Travel Documentation Assistance Website**

Insta Travel is a responsive web application designed to assist foreign nationals with **UAE work permits, employment visas, tourist visas, and travel documentation**. The project provides a clean, professional interface for showcasing services, FAQs, and contact information.

---

## 🚀 Features
- **Responsive Design**: Works seamlessly across desktop and mobile devices.
- **Hero Section**: Eye-catching background image with a call-to-action button.
- **Sticky Navigation Bar**: Easy access to sections while scrolling.
- **Service Cards**: Highlighted offerings with hover animations.
- **FAQ Section**: Clear answers to common questions.
- **Contact Section**: Email and WhatsApp details for quick communication.

---

## 📂 Project Structure
/* Base styles already defined above */

/* Mobile responsiveness */
@media (max-width: 768px) {
  header {
    padding: 50px 15px;
  }
  header h1 {
    font-size: 2rem;
  }
  header p {
    font-size: 1rem;
  }
  nav a {
    display: inline-block;
    margin: 8px;
    font-size: 0.95rem;
  }
  section {
    padding: 40px 15px;
  }
  .cards {
    grid-template-columns: 1fr; /* stack cards vertically */
  }
  .card {
    padding: 15px;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  header {
    padding: 40px 10px;
  }
  header h1 {
    font-size: 1.6rem;
  }
  nav {
    padding: 8px;
  }
  nav a {
    margin: 6px;
    font-size: 0.85rem;
  }
  a.button {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
}
