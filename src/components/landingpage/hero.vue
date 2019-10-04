<template>
<main>

    <h1>My Vue App!</h1>

</main>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style lang="scss" scoped>
main {
    height: 100%;
    display: block;
    min-height: 100vh;
    background-image: url("~@/assets/zelda.jpg");
    background-position: center;
    background-size: contain;
    background-origin: border-box;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        margin: 0 auto;
    }
}
</style>
