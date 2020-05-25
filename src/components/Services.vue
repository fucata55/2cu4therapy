<template>
    <div class="main-content content-wrapper">
        <img src="../assets/service.jpg" alt="3 vase" />
        <h3>SERVICES</h3>
        <md-list>
            <md-list-item>Head to toe</md-list-item>
            <md-list-item>Deep tissue</md-list-item>
            <md-list-item>Swedish</md-list-item>
            <md-list-item>Sciatica</md-list-item>
            <md-list-item>Reflexology</md-list-item>
            <md-list-item>Cupping</md-list-item>
            <md-list-item>Hot gel therapy</md-list-item>
            <md-list-item>Stretching</md-list-item>
        </md-list>
        <h2>WALK-INS WELCOME !!!</h2>
        <BookNow />
    </div>
</template>

<script>
import BookNow from './BookNow'

export default {
    name: 'Services',
    components: {
        BookNow,
    },
}
</script>

<style></style>
