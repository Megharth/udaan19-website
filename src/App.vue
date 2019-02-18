<template>
    <div id="app">
        <!-- CURSOR -->
        <!--<div class="cursor"></div>-->
        <!--<menuComponent></menuComponent>-->
        <router-view/>
    </div>
</template>

<script>
  import menuComponent from './components/menuComponent'

  export default {
    name: 'app',
    components: {
      menuComponent
    },
    mounted() {
      /*let cursor = document.querySelector('.cursor')
      document.addEventListener('mousemove', function (e) {
        cursor.setAttribute("style", "top:" + e.pageY + "px; left:" + e.pageX + "px;")
      })

      document.addEventListener('click', function (e) {
        cursor.classList.add('click')

        setTimeout(() => {
          cursor.classList.remove('click')
        }, 500)
      })*/
    }
  }
</script>

<style lang="sass">
    @import ./sass/app
</style>
