<template>
    <div id="buidersOfAzkaban">

        <div class="heading">
            <p>Welcome to</p>
            <p>Builders of Azkaban</p>
        </div>
        <div class="eventTitle">
            <div>Events</div>
        </div>

        <div></div>
    </div>
</template>

<script>
    export default {
        name: "buildersOfAzkaban"
    }
</script>

<style scoped lang="sass">
@font-face
    font-family: Magic1
    src: url("../assets/MagicSchoolOne.ttf")
    
@keyframes upText
    100%
        transform: translateY(0)

@keyframes scaling1
    0%
        transform: scaleY(0)
    100%
        transform: scaleY(1)

#buidersOfAzkaban
    position: absolute
    width: 100%
    height: 100%
    background: url("../assets/Azkaban_concept_art.png") no-repeat center top
    background-size: cover

.heading
    font-family: Magic1
    font-size: 5rem
    overflow: hidden
    letter-spacing: 3px
    color: white
    left: 50%
    top: 50%
    margin: 0
    position: absolute
    transform: translate(-50%,-50%)
    text-align: center

.heading p
    margin: 0
    transform: scaleY(0)
    animation: scaling1 2.33s 2 alternate ease-out

.eventTitle
    font-family: Magic1
    font-size: 3.5rem
    overflow: hidden
    letter-spacing: 3px
    color: white
    left: 50%
    top: 20%
    position: absolute
    text-align: center
    transform: translate(-50%,-50%)

.eventTitle div
    margin: 0
    transform: translateY(10rem)
    animation: upText 1s 4s forwards ease-out


</style>