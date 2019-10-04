<template >
<main>
    <h1>My Amiibos!</h1>
    <img src="@/assets/nintendo.png" />

    <SearchAmiibo @sendInput="handleInput" />
    <OneAmiibo :text="this.textParent" />
</main>
</template>

<script>
import OneAmiibo from './allAmiibo.vue/allAmiibo.vue';
import SearchAmiibo from './searchAmiibo/seachAmiibo.vue';
export default {
    name: 'Amiibo',
    components: {
        OneAmiibo,
        SearchAmiibo
    },
    data() {
        return {
            textParent: ''
        }
    },
    methods: {
        handleInput(text) {
            this.textParent = text;
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 50%;
    height: 100px;
    object-fit: contain;
    margin: 0 auto;
}
</style>
