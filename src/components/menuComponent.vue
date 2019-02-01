<template>
    <div id="menu">
        <div class="icon">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "menuComponent",
    data() {
      return {
        isOpen: false
      }
    }
  }
</script>

<style scoped lang="sass">
@import ../sass/menu
</style>