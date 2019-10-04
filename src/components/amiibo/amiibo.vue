<template >
<main>
    <h1>My Amiibos!</h1>
    <img src="@/assets/nintendo.png" />

    <SearchAmiibo @sendInput="handleInput" />
    <AllAmiibo :text="this.textParent" />
</main>
</template>

<script>
import AllAmiibo from './allAmiibo.vue/allAmiibo.vue';
import SearchAmiibo from './searchAmiibo/seachAmiibo.vue';
export default {
    name: 'Amiibo',
    components: {
        AllAmiibo,
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
main {
    min-height: 100vh;
}
img {
    width: 50%;
    height: 100px;
    object-fit: contain;
    margin: 0 auto;
}
</style>
