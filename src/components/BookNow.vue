<template>
    <md-card class="md-accent">
        <md-card-header><h3>Get 25% off! Text for Appointments!</h3></md-card-header>
        <md-card-content>
            <h3>APPOINTMENT LINE:</h3>
            <p>{{ phoneNumber }}</p>
            <p>Text your name and desired appointment times.</p>
            <p>Gift Certificates available!</p>
        </md-card-content>
    </md-card>
</template>

<script>
import { phoneNumber } from '../constants'

export default {
    name: 'BookNow',
    data: () => ({
        phoneNumber,
    }),
}
</script>

//
<style scoped lang="scss">
.md-accent {
}
</style>
