<template>
    <div id="buidersOfAzkaban">
        <div class="rain"></div>
        <div class="heading">
            <p>Welcome to <br>Builders of Azkaban</p>
        </div>
        <div class="eventTitle">
            <div>Events</div>
        </div>
        <div class="eventNames">
            <p>
                <a href="#">Event 1</a>
                <a href="#">Event 2</a><br>
                <a href="#">Event 3</a>
                <a href="#">Event 4</a>
            </p>
        </div>
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>

</template>

<script>
    export default {
        name: "buildersOfAzkaban",
        mounted() {
            let tl = new this.$gsap.TimelineMax()


        }
    }
</script>

<style scoped lang="sass">
@import ../sass/buildersOfAzkaban
</style>
