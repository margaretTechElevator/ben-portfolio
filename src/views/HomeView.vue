<script setup>

</script>

<template>
  <main class="home-page">
    <div class="intro">
      <img src="@/assets/Ben B&W2.jpg" alt="Ben's Photo" class="profile-photo"/>

      <h1>Welcome to My Portfolio</h1>

      <p>
        Hi! I'm Ben Dulavitch, a passionate Junior Software Developer. 
        <br />
        This portfolio showcases my projects and provides information about my skills, background, and experience.
        <br />
        Feel free to <router-link to="/projects">check out my projects</router-link> and see what I've been working on!
      </p>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
}

.intro {
  margin-bottom: 2rem;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 4px solid #000;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-top: 1rem;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 0.5rem;
}

p a {
  color: #1e88e5;
  text-decoration: none;
}

p a:hover {
  text-decoration: underline;
}
</style>
