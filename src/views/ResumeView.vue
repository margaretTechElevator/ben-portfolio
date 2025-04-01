<template>
    <main class="resume-page">
      <div class="profile-image">
        <img src="@/assets/Profile B&W.jpg" alt="Profile Photo" class="profile-photo" />
      </div>
  
      <section class="contact-info">
        <h1>Ben Dulavitch</h1>
        <p>Pittsburgh, PA</p>
        <p>Email: <a href="mailto:bendulavitch93@gmail.com">bendulavitch93@gmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/ben-dulavitch/" target="_blank" rel="noopener">LinkedIn</a> | 
          <a href="https://github.com/bendulavitch" target="_blank" rel="noopener">GitHub</a>
        </p>
      </section>
  
      <section class="professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Creative and detail-oriented junior software developer with leadership and management experience. Dedicated to finding 
          sustainable solutions to enhance user experience. Seeking to expand skills as a full-stack developer.
        </p>
      </section>
  
      <section class="key-skills">
        <h2>Key Skills</h2>
        <ul>
          <li>Java | PHP | Python | HTML | CSS | JavaScript | PostgreSQL | Vue.js | React | Spring Boot | IntelliJ | Git | JSON | JDBC | Unit Testing | Responsive Design | Table Design | Agile</li>
        </ul>
      </section>
  
      <section class="projects">
        <h2>Projects and Technical Experience</h2>
        <div class="project">
          <h3>Flavor Finder Application</h3>
          <p>
            Created a restaurant finder application that enables users to search for nearby restaurants and share options with a 
            group for voting. Implemented a swipe feature to help users quickly narrow down choices. Used JavaScript and Vue.js, 
            with Google Places API for location-based search functionality and real-time data retrieval.
          </p>
        </div>
        <div class="project">
          <h3>Payment Service Application</h3>
          <p>
            Designed and developed a secure RESTful API and command-line application enabling users to register, log in, and 
            perform balance transfers. Used Java, Spring Boot, and PostgreSQL, with JSON and comprehensive unit testing.
          </p>
        </div>
        <div class="project">
          <h3>Translation Game Application</h3>
          <p>
            Built a multilingual translation game application that allows users to input English words, receive translations in 
            their selected languages. Used Java, Vue.js, and integrated the MyMemory Translation API.
          </p>
        </div>
      </section>
  
      <section class="professional-experience">
        <h2>Professional Experience</h2>
        <div class="experience">
          <h3>University of Iowa - Department of Cinematic Arts | Teaching Assistant</h3>
          <p>Iowa City, IA | Sep '18 - Dec '23</p>
          <ul>
            <li>Designed syllabi and facilitated discussion sections for more than 300 students across six different courses.</li>
            <li>Evaluated essay assignments and oversaw 100+ film and video projects while mentoring students one-on-one.</li>
          </ul>
        </div>
        <div class="experience">
          <h3>University of Iowa - Department of Cinematic Arts | Co-Producer/Assistant Director</h3>
          <p>Iowa City, IA | May '22 - Dec '22</p>
          <ul>
            <li> <em>My Life Is Wind (A Letter)</em> - short film (dir. Anahita Ghazvinizadeh, 2024)</li>
            <li>Researched project topic and networked with 20+ local businesses and refugee centers for casting and locations.</li>
            <li>Co-managed the film budget, secured housing and catering, and distributed daily call sheets for 40+ cast and crew.</li>
            <li>Served as assistant director for 12 days of production with directing, camera, sound, and production design units.</li>
          </ul>
        </div>
      </section>
  
      <section class="education">
        <h2>Education</h2>
        <div class="degree">
          <h3>Tech Elevator</h3>
          <p>Completed a full-stack coding program learning to build software systems using Java, PostgreSQL, and JavaScript.</p>
          <p>Iowa City, IA | Sep '24 - Dec '24</p>
        </div>
        <div class="degree">
          <h3>University of Iowa</h3>
          <p>PhD in Film Studies - All But Dissertation</p>
          <p>Iowa City, IA | Sep '18 - Dec '23</p>
        </div>
        <div class="degree">
          <h3>Boston University</h3>
          <p>MFA in Film and Television Studies</p>
          <p>Boston, MA | Sep '16 - May '18</p>
        </div>
        <div class="degree">
          <h3>Taylor University</h3>
          <p>BA in Film and Media Production, Summa Cum Laude</p>
          <p>Upland, IN | Sep '12 - May '16</p>
        </div>
      </section>
    </main>
  </template>
  
  <style scoped>
  .resume-page {
    margin: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  h1, h2, h3 {
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-info a {
    color: #0077b5;
  }
  
  .profile-image {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .profile-photo {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  section {
    margin-top: 30px;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  ul li {
    margin-left: 1.2rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
  }
  
  .project, .experience, .degree {
    margin-top: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  h3 {
    color: #444;
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 0.5rem;
  }
  
  .degree p {
    font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
    .resume-page {
      margin: 30px 50px;
    }
  
    h1 {
      font-size: 2.5rem;
    }
  
    h2 {
      font-size: 2rem;
    }
  
    h3 {
      font-size: 1.4rem;
    }
  
    p {
      font-size: 1.2rem;
    }
  
    .degree p, .experience p {
      font-size: 1.1rem;
    }
  
    .project, .experience, .degree {
      margin-top: 20px;
    }
  }
  </style>
  