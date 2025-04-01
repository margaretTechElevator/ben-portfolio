<template>
    <div class="repo-card">
      <h3><a :href="html_url" target="_blank" rel="noopener noreferrer">{{ title }}</a></h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'html_url']
  };
  </script>
  
  <style scoped>
  .repo-card {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .repo-card h3 {
    font-size: 1.4rem;
    color: #0077b5;
  }
  
  .repo-card a {
    text-decoration: none;
    color: #0077b5;
  }
  
  .repo-card a:hover {
    text-decoration: underline;
  }
  </style>
  