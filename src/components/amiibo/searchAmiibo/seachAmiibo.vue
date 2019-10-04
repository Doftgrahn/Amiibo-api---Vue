<template>
<section>
    <input v-model="text" v-on:keyup.enter="onEnter" placeholder="search for some amiibos!" />
    <button @click="sendInput">Search! </button>
</section>
</template>

<script>
export default {
    name: 'SearchAmiibo',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        sendInput() {
            this.$emit('sendInput', this.text);
            this.text = '';
        },
        onEnter() {
            this.sendInput();
        }
    }
}
</script>


<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    input {
        padding: 5px;
        width: 220px;
        margin: 10px;
    }
    button {
        width: 220px;
        margin: 10px;
    }
}
</style>
