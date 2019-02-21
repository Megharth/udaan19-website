<template>
    <div id="scamandersSuitcase">
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event">
                <div>{{ event.eventName }}</div>
            </div>
        </div>
        <transition name="scale">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{eventsDetail.eventName}}</div>
                <div class="tagline">{{ eventsDetail.tagline}}</div>
                <div class="rounds">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds">
                        <span class="roundIndice">Round {{ index }} : </span>
                        {{round}}
                    </div>
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
    name: "scamandersSuitcase",
    data() {
      return {
        events,
        deptEvents: [],
        eventsDetail: null
      }
    },
    created() {
      let self = this
      this.events.forEach(function (event) {
        if (event.department === "non-tech")
          self.deptEvents.push(event)
      })
    },
    mounted() {
      let tl = new this.$gsap.TimelineMax()
      tl.staggerFrom('.event', 1, {
        // position: 'absolute',
        y: 1000,
        cycle: {
          x: function() {
            return Math.random() * 1000 + 10
          }
        },
        // left: 50 + '%',
        autoAlpha: 0
      }, 0.1)
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/scamandersSuitcase
</style>