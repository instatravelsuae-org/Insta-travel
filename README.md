# Insta Travel 🌍✈️

**UAE Work Permit & Travel Documentation Assistance Website**

Insta Travel is a responsive web application designed to assist foreign nationals with **UAE work permits, employment visas, tourist visas, and travel documentation**. The project provides a clean, professional interface for showcasing services, FAQs, and contact infor 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Insta Travel | UAE Work Permit & Travel Documentation Assistance</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      margin: 0;
      background: #f5f7fb;
      color: #222;
      line-height: 1.6;
    }
    header {
      background: linear-gradient(rgba(11,45,92,0.9), rgba(11,45,92,0.9)),
                  url('https://source.unsplash.com/1600x600/?dubai,travel') no-repeat center/cover;
      color: #fff;
      padding: 80px 20px;
      text-align: center;
    }
    header h1 {
      font-size: 2.8rem;
      margin: 0;
    }
    header p {
      font-size: 1.2rem;
      margin: 10px 0 20px;
    }
    nav {
      background: #123f7a;
      padding: 12px;
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav a {
      color: #fff;
      margin: 0 15px;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #d4af37;
    }
    section {
      max-width: 1100px;
      margin: auto;
      padding: 60px 20px;
    }
    h2 {
      color: #0b2d5c;
      margin-bottom: 20px;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }
    .btn {
      display: inline-block;
      background: #d4af37;
      color: #000;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;
    }
    .btn:hover {
      background: #c19d2b;
    }
    footer {
      background: #0b2d5c;
      color: #fff;
      text-align: center;
      padding: 25px;
      font-size: 0.9rem;
    }
    /* Mobile responsiveness */
    @media (max-width: 768px) {
      header { padding: 60px 15px; }
      header h1 { font-size: 2rem; }
      header p { font-size: 1rem; }
      nav a { margin: 8px; font-size: 0.95rem; }
      section { padding: 40px 15px; }
      .cards { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      header { padding: 40px 10px; }
      header h1 { font-size: 1.6rem; }
      nav { padding: 8px; }
      nav a { margin: 6px; font-size: 0.85rem; }
      .btn { padding: 10px 18px; font-size: 0.9rem; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Insta Travel</h1>
    <p>UAE Work Permit & Travel Documentation Assistance for Foreign Applicants</p>
    <a class="btn" href="#contact">Apply Now</a>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#docs">Documents</a>
    <a href="#faq">FAQ</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about">
    <h2>About Us</h2>
    <p>Insta Travel assists international applicants with preparing and submitting travel and work-related documentation for UAE opportunities. We provide guidance throughout the application process. Final decisions are made by UAE authorities and employers.</p>
  </section>

  <section id="services">
    <h2>Services</h2>
    <div class="cards">
      <div class="card"><h3>Work Permit Assistance</h3><p>Step-by-step guidance for UAE work permits.</p></div>
      <div class="card"><h3>Employment Visa Documentation</h3><p>Complete support for employment visa paperwork.</p></div>
      <div class="card"><h3>Tourist Visa Assistance</h3><p>Quick and reliable tourist visa processing.</p></div>
      <div class="card"><h3>Document Review</h3><p>Ensure your documents meet UAE requirements.</p></div>
    </div>
  </section>

  <section id="docs">
    <h2>Typical Documents</h2>
    <ul>
      <li>Passport</li>
      <li>Passport Photo</li>
      <li>CV/Resume</li>
      <li>Educational Certificates (if required)</li>
      <li>Additional documents requested by employer or authorities</li>
    </ul>
  </section>

  <section id="faq">
    <h2>FAQ</h2>
    <p><b>Are approvals guaranteed?</b> No. Approvals depend on UAE authorities and employers.</p>
    <p><b>How long does processing take?</b> Usually 2–4 weeks depending on document readiness.</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: info@instatravelsuae.com<br>WhatsApp: +971 XX XXX XXXX</p>
    <a class="btn" href="mailto:info@instatravelsuae@gmail.com">Email Us</a>
  </section>

  <footer>© 2026 Insta Travel. All rights reserved.</footer>
</body>
</html>
