<template>
    <div>
        <md-tabs v-if="false" md-alignment="centered">
            <md-tab id="tab-home" md-label="Home">Home</md-tab>
            <md-tab id="tab-techniques" md-label="Techniques">Techniques</md-tab>
            <md-tab id="tab-services" md-label="Services">Services</md-tab>
            <md-tab id="tab-gifts" md-label="Gifts">Gifts</md-tab>
            <md-tab id="tab-contact" md-label="Contact">Contact</md-tab>
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
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>
                    <span class="md-list-item-text">Inbox</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <span class="md-list-item-text">Sent Mail</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>delete</md-icon>
                    <span class="md-list-item-text">Trash</span>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
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

<style scoped></style>
