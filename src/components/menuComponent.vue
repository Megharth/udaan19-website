<template>
    <div id="menu">
        <div class="icon" @click="openMenu()">
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="tabs" v-if="isOpen">
            <div class="tab" v-for="navigation in navigations" @click="navigate(navigation.url)">{{ navigation.name }}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "menuComponent",
    data() {
      return {
        isOpen: false,
        navigations: [
          {
            name: 'Home',
            url: '/'
          },
          {
            name: "Builders Of Azkaban",
            url: 'boa'
          },
          {
            name: "Automotive Philosophers",
            url: 'automotivePhilosophers'
          },
          {
            name: "Chamber of Coders",
            url: 'chamberOfCoders'
          },
          {
            name: "Half Wave Prince",
            url: 'halfWavePrince'
          },
          {
            name: "M. A. D. Hollows",
            url: 'madHollows'
          },
          {
            name: "Scamander\'s Suitcase",
            url: 'scamandersSuitcase'
          },
          {
            name: "Order of Ohms",
            url: 'orderOfOhms'
          }
        ],
        tl: null
      }
    },
    mounted() {
      this.tl = new this.$gsap.TimelineMax({
        paused: true
      })
      this.tl.to('#menu', 0.5, {
        x: 0,
        background: "#333333",
        boxShadow: "-4px 0 4px rgba(0,0,0,0.25)"
      })

    },
    methods: {
      openMenu() {
        if(this.isOpen)
          this.tl.reverse()
        else
          this.tl.play()

        this.isOpen = !this.isOpen
      },
      navigate(url) {
        this.$router.push(url)
        this.openMenu()
      }
    }
  }
</script>

<style scoped lang="sass">
@import ../sass/menu
</style>