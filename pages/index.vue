<template>
<TheTop/> 
  <div class="center">
    <h1>{{ greeting }}</h1>
    <h2>{{ message }}</h2>
<nuxt-link :to='{name: "about"}'>about</nuxt-link> 
  </div>
      <TheFooter /> 
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome | Nuxt 3",
    };
  },
  data() {
    return {
      greeting: "Hello Nuxt 3!",
      message: "Welcome to the world!",
    };
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);

  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
