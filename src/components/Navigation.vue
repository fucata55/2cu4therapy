<template>
    <div>
        <md-tabs v-if="false" md-alignment="centered">
            <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
            <md-tab id="tab-techniques" md-label="Techniques" to="/techniques" exact></md-tab>
            <md-tab id="tab-services" md-label="Services" to="/services" exact></md-tab>
            <md-tab id="tab-gifts" md-label="Gifts" to="/gifts" exact></md-tab>
            <md-tab id="tab-contact" md-label="Contact" to="/contact" exact></md-tab>
        </md-tabs>
        <md-toolbar v-else class="md-primary">
            <div class="md-toolbar-section-start">
                <span class="md-title">{{ businessName }}</span>
            </div>
            <div class="md-toolbar-section-end">
                <md-button class="md-icon-button" @click="showNavigation = true">
                    <md-icon>menu</md-icon>
                </md-button>
            </div>
        </md-toolbar>
        <md-drawer class="md-right" :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">{{ businessName }}</span>
            </md-toolbar>
            <md-list>
                <md-list-item to="/" exact @click="showNavigation = false">
                    <md-icon>home</md-icon>
                    <span class="md-list-item-text">Home</span>
                </md-list-item>

                <md-list-item to="/techniques" exact @click="showNavigation = false">
                    <md-icon>airline_seat_flat</md-icon>
                    <span class="md-list-item-text">Techniques</span>
                </md-list-item>

                <md-list-item to="/services" exact @click="showNavigation = false">
                    <md-icon>room_service</md-icon>
                    <span class="md-list-item-text">Services</span>
                </md-list-item>

                <md-list-item to="/gifts" exact @click="showNavigation = false">
                    <md-icon>card_giftcard</md-icon>
                    <span class="md-list-item-text">Gifts</span>
                </md-list-item>

                <md-list-item to="/contact" exact @click="showNavigation = false">
                    <md-icon>phone</md-icon>
                    <span class="md-list-item-text">Contact</span>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
import { businessName } from '../constants'

export default {
    name: 'Navigation',
    data: () => ({
        showNavigation: false,
        businessName,
    }),
}
</script>

<style scope>
.router-exact-active .md-icon.md-theme-default.md-icon-font {
    color: inherit;
}
</style>
