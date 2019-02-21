<template>
    <div id="menu">
        <div class="icon" @click="openMenu()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="tabs" v-if="isOpen">
            <div class="tab" v-for="navigation in navigations" @click="$router.push(navigation.url)">{{ navigation.name }}</div>
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
        ]
      }
    },
    methods: {
      openMenu() {
        let tl = new this.$gsap.TimelineMax({
          paused: true
        })
        tl.to('#menu', 0.5, {
          x: 0,
          background: "#333333",
          boxShadow: "-4px 0 4px rgba(0,0,0,0.25)"
        })
        if(this.isOpen)
          tl.reverse()
        else
          tl.play()
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped lang="sass">
@import ../sass/menu
</style>