<template>
    <main class="project-page">
      <h1>My Projects</h1>
  
      <div v-if="isLoading">
        <!-- <img src="../assets/Loading.gif" alt="loading picture" width="250" /> -->
      </div>
  
      <div v-else class="projects-list">
        <repo-component 
          v-for="project in repoData" 
          :key="project.id" 
          :title="getFormattedTitle(project.name)" 
          :html_url="project.html_url"
        />
      </div>
    </main>
  </template>
  
  <script>
  import githubService from '../services/GithubService';
  import RepoComponent from '@/components/RepoComponent.vue';
  
  export default {
    components: { RepoComponent },
    data() {
      return {
        isLoading: true,
        repoData: []
      };
    },
    created() {
      githubService.getRepos()
        .then((response) => {
          this.repoData = response.data;
          setTimeout(() => (this.isLoading = false), 2000);
          this.isLoading = false;
        });
    },
    methods: {
      getFormattedTitle(name) {
        switch (name) {
          case 'nasa-fullstack':
            return 'NASA API';
          case 'flavor-finder':
            return 'Flavor Finder';
          case 'translation-game':
            return 'Translation App';
          case 'weather-fullstack-app':
            return 'Weather API';
          default:
            return name;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .project-page {
    margin: 20px;
    text-align: center;
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .repos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .repo-component {
    background-color: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .repo-component h3 {
    font-size: 1.4rem;
    color: #0077b5;
    margin-bottom: 10px;
  }
  
  .repo-component a {
    text-decoration: none;
    color: #0077b5;
  }
  
  .repo-component a:hover {
    text-decoration: underline;
  }
  
  .repo-component p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .projects-list {
      grid-template-columns: 1fr;
    }
  
    h1 {
      font-size: 1.8rem;
    }
  }
  </style>
  