<template>
    <div id="orderOfOhms">
        <!--<div class="heading"><p>Order of Ohms</p></div>-->
        <div class="events">
            <div class="event" v-for="event in deptEvents" @click="eventsDetail = event">{{ event.eventName }}</div>
        </div>
        <transition name="fade">
            <div class="eventDescription" v-if="eventsDetail">
                <div class="eventName">{{ eventsDetail.eventName }}</div>
                <div class="tagline">{{ eventsDetail.tagline }}</div>
                <div class="event-content">
                    <div class="rounds">
                        <div class="round" v-for="(round, index) in eventsDetail.rounds"><span class="roundIndice">Round {{index + 1}} : </span>{{ round}}</div>
                    </div>
                    <div class="managers">
                        <div class="manager" v-for="manager in eventsDetail.managers">
                            <div class="name">{{manager.name}}</div>
                            <div class="contact">{{manager.phone}}</div>
                        </div>
                    </div>
                </div>
                <div class="warning">
                    <div>Approach With Extreme Caution!</div>
                    <div>Do not attempt to use magic in this event</div>
                </div>
                <div class="back" @click="eventsDetail = null">Back</div>
            </div>
        </transition>
    </div>
</template>

<script>
    import events from '../events'
    export default {
        name: "orderOfOhms",
        data() {
            return {
                events,
                deptEvents: [],
                eventsDetail: null
            }
    },
    mounted() {

        let t2 = new this.$gsap.TimelineMax()

        t2.to('.events', 0.5, {
            autoAlpha: 1
        }, "+=2")

        let tl = new this.$gsap.TimelineMax({
            repeat: -1,
            yoyo: true
        })

        Array.from(document.querySelector('.events').children, (event) => {
            let letters = event.innerHTML.split("")
            let blockLetters = []
            letters.forEach((letter) => {
                if (letter === " ")
                    blockLetters.push("<div class=\"letter\"> &nbsp; </div>")
                else
                    blockLetters.push("<div class=\"letter\">" + letter + "</div>")
            })
            event.innerHTML = blockLetters.join("")
        })

        let letters = document.querySelectorAll('.letter')
        letters.forEach(function (letter) {
            letter.style.display = "inline-block"
        })

        tl.staggerTo(".letter", 0.5, {
            scale: 1.2
        }, 0.1)

        tl.staggerTo(".letter", 0.5, {
            scale: 1
        }, 0.1, 0)
    },
    created() {
        let self = this
        this.events.forEach(function (event) {
            if (event.department === "ee")
                self.deptEvents.push(event)
        })
    }
    }
</script>

<style scoped lang="sass">
    @import ../sass/orderOfOhms
</style>