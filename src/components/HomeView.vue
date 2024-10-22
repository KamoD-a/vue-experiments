<template>
  <h2>Projects</h2>
  <div class="project-container">
  <button class="action-button" @click="goToAbout">Go to About</button>
  <button class="action-button" @click="goToFloating">Floating Objects</button>
</div>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    goToFloating() {
      this.$router.push('/floating')
    },
  },
}
</script>


<style>
.action-button {
    size: 10%;
    background-color: aquamarine;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bolder;
    border: none;
}

.action-button:hover {
    background-color: #2b58d2;
    transition: 0.7s;
    color: antiquewhite;
}

.action-button:active {
    background-color: #6f1bdd;
    transition: 0.2s;
}
</style>
