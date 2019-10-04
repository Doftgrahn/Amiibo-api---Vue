<template>
<main>
<Hero/>
<Info/>

</main>
</template>

<script>
import Hero from './hero.vue';
import Info from './info.vue';
export default {
    name: 'Landingpage',
    components: { Hero, Info }
}
</script>

<style lang="scss" scoped>

</style>
