<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

nav a {
  padding: 0 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  font-size: 1rem;
}

nav a:hover {
  color: #007BFF;
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #007BFF;
}

@media (max-width: 768px) {
  nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav a {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
