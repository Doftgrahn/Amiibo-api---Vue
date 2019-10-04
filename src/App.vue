<template>
<div id="app">
    <Header />
    <main>
        <transition name="slide-fade">
            <router-view />
        </transition>
    </main>
</div>
</template>

<script>
import Header from './components/general/header.vue';

export default {
    name: 'app',
    components: {
        Header
    }
}
</script>

<style lang="scss">
@import './styles/settings/colors.scss';
@import './styles/transition.scss';
@import './styles/general/general.scss';

#app {

    overflow-x: hidden;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: indianred;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    main {
        max-width: 1100px;
        width: 100%;
        margin: 20px auto;
    }

}
</style>
