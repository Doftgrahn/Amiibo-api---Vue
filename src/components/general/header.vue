<template>
<header>

    <nav>
        <router-link tag="a" v-for="route in routes" :to="route.path" :key="route.path" active-class="active">{{route.name}}</router-link>
    </nav>

</header >
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            routes: this.$router.options.routes,
        }
    }
}
</script>

<style lang="scss" scoped>
header {
padding: 0 20px;
.class {
    color:blue;
}

    nav {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        border-bottom: 5px solid #2c3e50;
        display: flex;
        justify-content: space-around;

        a {
            margin: 0 20px;
            //color: black;
            transition: 0.4s;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        .router-link-exact-active {
            text-decoration: underline;
            transform: scale(1.2);
        }
    }
}
</style>
