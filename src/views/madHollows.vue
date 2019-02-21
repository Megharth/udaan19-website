<template>
    <div id="madHollows">
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event">
                <span>{{event.eventName}}</span>
            </div>
        </div>
        <transition name="swirl">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{ eventsDetail.eventName }}</div>
                <div class="tagline">{{ eventsDetail.tagline }}</div>
                <div class="rounds mx-auto">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds"><span class="roundIndice">Round {{index + 1}} :</span> {{ round }}</div>
                </div>
                <div class="managers">
                    <div class="manager" v-for="manager in eventsDetail.managers">
                        <div class="name">{{manager.name}}</div>
                        <div class="contact">{{manager.phone}}</div>
                    </div>
                </div>
                <div class="back" @click="eventsDetail = null">Back</div>
            </div>
        </transition>
    </div>
</template>

<script>
  import events from '../events'

  export default {
    name: "madHollows",
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null,
        tl: null
      }
    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "cultural")
          self.deptEvents.push(event)
      })
      console.log(this.deptEvents)
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