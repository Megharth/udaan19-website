<template>
    <div id="main">
        <section>
            <div id="landing">
                <div class="pin-scene">
                    <div class="heading"><h1>Some Text</h1></div>
                    <div class="bg-image"></div>
                    <!--<div class="demantadors">-->
                    <!--<div class="demantador">-->
                    <!--<ul>-->
                    <!--<li></li>-->
                    <!--<li></li>-->
                    <!--<li></li>-->
                    <!--<li></li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </section>
        <section>
            <div id="about">
                <aboutComponent class="aboutComponent"></aboutComponent>
                <div class="particles">
                    <div class="particle" v-for="n in 50"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import aboutComponent from '../components/aboutComponent'

  export default {
    name: "Main",
    components: {
      aboutComponent
    },
    mounted() {
      let t1 = new this.$gsap.TimelineMax()
      t1.from('.bg-image', 0.5, {
        scale: 1.5,
        autoAlpha: 0,
        ease: Power1.easeOut
      })

      let controller = new this.$scrollmagic.Controller()

      //LANDING COMPONENT SCROLL
      let landingScrollTl = new this.$gsap.TimelineMax().add([
        TweenMax.to('#landing .heading', 4, {
          autoAlpha: 0,
          scale: 2,
          y: 100
        }),
        TweenMax.to('.bg-image', 4, {
          scale: 1.5
        }),
        TweenMax.to('.demantador', 4, {
          x: 100,
          scale: 0.5,
          autoAlpha: 0
        })
      ])

      let scrollLanding = new this.$scrollmagic.Scene({
        triggerElement: '.pin-scene',
        triggerHook: 0,
        duration: '120%'
      })
        .setTween(landingScrollTl)
        .setPin('.pin-scene')
        .addTo(controller)

      //  ABOUT COMPONENT SCROLL

      let aboutScrollTl = new this.$gsap.TimelineMax().add([
        TweenMax.to('.bg-image', 4, {
          autoAlpha: 0
        }),
        TweenMax.staggerTo('.particle', 4, {
          cycle: {
            x: function (i) {
              if (i % 2 === 0)
                return (Math.random() * (-100) + 1)
              else
                return (Math.random() * (100) + 1)
            },
            y: function (i) {
              if (i % 2 === 0)
                return (Math.random() * (-100) + 1)
              else
                return (Math.random() * (100) + 1)
            },
            scale: function () {
              return Math.random() * 5
            },
            backgroundColor: function () {
              return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
            }
          },
          autoAlpha: 0
        }, 0.4),
        TweenMax.from('#about', 4, {
          autoAlpha: 0
        }),
        TweenMax.from('.aboutComponent', 8, {
          autoAlpha: 0
        })
      ])

      let scrollAbout = new this.$scrollmagic.Scene({
        triggerHook: 0,
        triggerElement: '#about',
        duration: '50%'
      })
        .setTween(aboutScrollTl)
        .setPin('#about')
        .addTo(controller)
    }
  }
</script>

<style scoped lang="sass">
    @import ../sass/main
</style>