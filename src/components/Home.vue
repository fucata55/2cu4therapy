<template>
    <div class="content-wrapper">
        <div>
            <img :src="currentImage.src" :alt="currentImage.alt" />
        </div>
        <div class="main-content">
            <h1>Welcome to 2CU 4 Massage Therapy !</h1>
            <p>We are glad to have the opportunity to provide relaxing and refreshing Chinese Reflexology service in a peaceful and family-oriented environment.</p>
            <p>
                Come and feel your stress, pains and aches melt away as we apply the ancient healing techniques from China and re-balance your entire body through your feet, hands and back. Your feet
                carry all the body's burdens of life.
            </p>
            <p>Spoil your feet for once with us. Soothe your soles and feel the rebirth!</p>
            <h2>WALK-INS WELCOME !!!</h2>
            <h3>BUSINESS HOURS</h3>
            <p>Monday - Saturday</p>
            <p>08:00 am - 10:00 pm</p>
            <p>Outside normal business hours and on Sundays we are open by appointments only.</p>
            <BookNow />
        </div>
    </div>
</template>

<script>
import BookNow from './BookNow'

export default {
    name: 'Home',
    data: () => ({
        images: [
            { src: require('../assets/hand_massage.jpg'), alt: 'hand massage' },
            { src: require('../assets/feet_massage.jpg'), alt: 'feet massage' },
            { src: require('../assets/feet_massage_2.jpg'), alt: 'feet massage' },
        ],
        currentIndex: 0,
    }),
    computed: {
        currentImage() {
            return this.images[this.currentIndex]
        },
    },
    created: function() {
        setInterval(() => {
            this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : ++this.currentIndex
        }, 2000)
    },
    components: {
        BookNow,
    },
}
</script>

<style scoped></style>
