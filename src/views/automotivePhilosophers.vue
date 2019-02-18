<template>
    <div id="automotivePhilosophers">
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event">
                <span>{{event.eventName}}</span>
            </div>
        </div>

        <transition name="move">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{eventsDetail.eventName}}</div>
                <div class="tagline">{{eventsDetail.tagline}}</div>
                <div class="rounds">
                    <div class="round" v-for="(round, index) in eventsDetail.rounds">
                        <span class="roundIndice">Round {{index + 1}} : </span>
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
    name: "automotivePhilosophers",
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
        if (event.department === "mechProd")
          self.deptEvents.push(event)
      })
      console.log(this.deptEvents)
    }
  }
</script>

<style scoped lang="sass">
    @import "../sass/automotivePhilosophers"
</style>