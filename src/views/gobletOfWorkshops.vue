<template>
    <div id="gobletOfEntertainment">
        <div class="goblet">
             <div class="flame">
                <span v-for="n in 100" :style="{'--n':n, '--rnd': Math.random()}"></span>
            </div>
            <img src="../assets/goblet.png" alt="goblet" class="img-fluid">
        </div>
        <div class="events">
            <div class="event">Some text</div>
            <div class="event">some Text</div>
            <div class="event">some text</div>
            <div class="event">Some Text</div>
            <div class="event">Some Text</div>
            <div class="event">Some Text</div>
        </div>


    </div>
</template>

<script>
    import events from '../events'

  export default {
    name: "gobletOfEntertainment",
    created() {

    },
    mounted() {
      let t1 = new this.$gsap.TimelineMax()
      t1.staggerFrom('.event', 2, {
        // y: -1000,
        autoAlpha: 0,
        scale: 0
      }, 0.1)
      t1.staggerTo('.event', 1, {
        cycle: {
          rotation: function() {
            return Math.random() * 45 - 20
          }
        },
        autoAlpha: 1
      }, 0.1, "-=1.2")
    }
  }
</script>

<style scoped lang="sass">
@import "../sass/gobletOfWorkshops"

</style>