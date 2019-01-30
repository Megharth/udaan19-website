<template>
    <div id="main">
        <section>
           <div id="landing">
               <div class="pin-scene">
                   <div class="heading"><h1>Some Text</h1></div>
                   <div class="bg-image"></div>
               </div>
           </div>
        </section>
        <section>
            <div id="about"></div>
        </section>
    </div>
</template>

<script>

  export default {
    name: "Main",
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
        TweenMax.to('.heading', 4, {
          autoAlpha: 0,
          scale: 2,
          y: 100
        }),
        TweenMax.to('.bg-image', 4, {
          scale: 1.5
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
        })
      ])

      let scrollAbout = new this.$scrollmagic.Scene({
        triggerHook: 0,
        triggerElement: '#about',
        duration: '30%'
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