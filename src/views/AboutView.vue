<template>
  <div class="about">
    <h1>About Me</h1>
    <p>
      My passion lies in blending creativity with technology. I’ve spent years immersed in the world of filmmaking and group collaboration, always seeking to connect with others through creative projects. As an extrovert who thrives in group learning environments, I spent seven years as a teaching assistant in academia, where I fostered an appreciation for shared knowledge and teamwork.
    </p>
    <p>
      My transition into software development allows me to combine my love for the arts with my growing interest in technology. I believe that tech can enhance creativity, build communities, and make meaningful connections. My mission is to use my technical skills to bridge the gap between the creative arts and the tech world, creating projects that inspire and bring people together.
    </p>
    <p>
      I’m always eager to learn and collaborate with others. Whether it’s through filmmaking, tech, or simply having great conversations, I enjoy working with diverse teams to solve problems and bring ideas to life. In my free time, you’ll find me running outdoors, diving into a good book, or listening to music.
    </p>

    <div class="contact-info">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:bendulavitch93@gmail.com">bendulavitch93@gmail.com</a></p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/ben-dulavitch/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ben-dulavitch/</a>
      </p>
    </div>
    <p>
      I'm passionate about people and plan to bring a lot of joy into my career as a software developer. I believe that creating positive, collaborative experiences is essential in both tech and life!
    </p>
    <div class="photo-gallery">
      <img src="@/assets/photo-1.jpg" alt="Photo 1" class="photo" />
      <img src="@/assets/photo-7.jpg" alt="Photo 7" class="photo" />
      <img src="@/assets/photo-2.jpg" alt="Photo 2" class="photo" />
      <img src="@/assets/photo-5.jpg" alt="Photo 5" class="photo" />
      <img src="@/assets/photo-8.jpg" alt="Photo 8" class="photo" />
      <img src="@/assets/photo-4.jpg" alt="Photo 4" class="photo" />
      <img src="@/assets/photo-3.jpg" alt="Photo 3" class="photo" />
      <img src="@/assets/photo-6.jpg" alt="Photo 6" class="photo" />
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 1.2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 1rem;
  line-height: 1.6;
  max-width: 800px;
}

.contact-info {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #555;
}

.contact-info h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.contact-info a {
  color: #1e88e5;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 3rem;
  justify-items: center;
}

.photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.3rem;
    max-width: 1000px;
  }

  .photo-gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
