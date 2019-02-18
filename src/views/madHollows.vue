<template>
    <div id="madHollows">
        <div class="events">
            <div class="event" @click="openDetails">
                <span>Event Name</span>
            </div>
            <div class="event" @click="openDetails">
                <span>Event Name</span>
            </div>
            <div class="event">
                <span>Event Name</span>
            </div>
        </div>
        <div class="eventDescription">
            <div class="back" @click="tl.reverse()">Back</div>
        </div>
    </div>
</template>

<script>
    import events from '../events'

  export default {
    name: "madHollows",
    data() {
      return {
        events,
        tl: null
      }
    },
    methods: {
      openDetails() {
        console.log('wroking')
        this.tl = new this.$gsap.TimelineMax()
        this.tl.to('.events', 0.5, {
          scale: 0
        })

        this.tl.to('.eventDescription', 0.5, {
          scale: 1,
          opacity: 1,
          zIndex: 2,
          rotation: 360
        })
      }
    },
    mounted() {

      let tl1 = new this.$gsap.TimelineMax()
      tl1.from('.event', 2, {
        scale: 0,
      })
      let tl = new this.$gsap.TimelineMax({
        repeat: -1,
        yoyo: true
      })
      tl.staggerTo('.event', 2.5, {
        y: 10
      }, 0.6)
      tl.staggerTo('.event', 3, {
        y: -10
      }, 0.6)
    }

  }
</script>

<style scoped lang="sass">
@import ../sass/madHollows
</style>