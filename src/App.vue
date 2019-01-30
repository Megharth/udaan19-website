<template>
    <div id="app">
        <!-- CURSOR -->
        <div class="cursor"></div>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      let cursor = document.querySelector('.cursor')
      document.addEventListener('mousemove', function(e) {
        cursor.setAttribute("style", "top:" + e.pageY + "px; left:" + e.pageX + "px;")
      })

      document.addEventListener('click', function(e) {
        cursor.classList.add('click')

        setTimeout(() => {
          cursor.classList.remove('click')
        }, 500)
      })
    }
  }
</script>

<style lang="sass">
@import ./sass/app
</style>
