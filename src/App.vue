<template>
    <div id="app">
        <Navigation />
        <footer>
            {{ businessName }}
        </footer>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { businessName } from './constants'

export default {
    name: 'App',
    data: () => ({
        businessName,
    }),
    components: {
        Navigation,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

footer {
    width: 100%;
    padding: 10px;
    background-color: #eee;
    position: absolute;
    bottom: 0;
}
</style>
