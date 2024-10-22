<template>
    <h2>About</h2>
    <p>This is a private project to explore vue.js.</p>
    <button class="action-button" @click="goToHome">Back to Home</button>
</template>


<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}

</script>
