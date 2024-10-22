<template>
  <h2>Projects</h2>
  <div class="project-container">
  <button @click="goToAbout">Go to About</button>
  <button @click="goToFloating">Floating Objects</button>
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


<style scoped>
.project-container button{
  margin: 2%;
  size: 10%;
    background-color: aquamarine;
    padding: 5px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bolder;
    border: none;
}
</style>
