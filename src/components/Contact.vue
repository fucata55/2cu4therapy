<template>
    <div class="main-content content-wrapper">
        <h3>ADDRESS</h3>
        <p>4480 Riverside Dr. Ste 3</p>
        <p>Macon, GA</p>
        <p>31210</p>
        <h3>CELLPHONE</h3>
        <p>{{ phoneNumber }}</p>
        <p>Text only please. Leave your name and desired appointment times.</p>
        <h3>EMAIL</h3>
        <p>2CU4MassageTherapy@gmail.com</p>
        <div>
            <iframe
                height="450"
                width="650"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG39WDbj484gRwFQEZF_74eU&key=AIzaSyDofyDbpjYUoCcTX9524wb1JAZ_NRNNgck"
                allowfullscreen
            ></iframe>
        </div>
        <iframe
            class="md-image"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdt--g3xKYHmKAR5RRKg2trtSc4Pf9pU8CTkUkdJnMJvyyaUQ/viewform?embedded=true"
            width="640"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Loading…</iframe
        >
    </div>
</template>

<script>
/* eslint-disable */
import { phoneNumber } from '../constants'

export default {
    name: 'Contact',
    data: () => ({
        phoneNumber,
        name: 'Stephen ',
        email: 'abc@gmail.com',
        phone: 123456,
        subject: 'test subject',
        message: 'test message',
        service: null,
    }),
    methods: {
        submitForm: function(e) {
            e.preventDefault()
            // this.service.sendEmail(this.message)
        },
    },
    created: function() {
        console.log('created runs')
        // this.service = new GmailService()
        // const service = new GmailService()
        // service.handleClientLoad()
    },
}
</script>

<style scoped>
.md-image {
    height: 1001px;
}
</style>
