<template >
<main>
    <div v-if="loading" class="loader">
        <Loader />
    </div>

    <div v-if="error">You spelled something wrong, try again!</div>
    <div v-if="toMany">You problably used the api to many times. Please try again later</div>

    <div class="amiibo" v-for="amiibo in amiibos" v-bind:key="amiibo.name">
        <figure><img v-bind:src="amiibo.image" :alt="amiibo.character" /> </figure>
        <h3>Character: {{amiibo.character}}</h3>
        <p>GameSerie: {{amiibo.gameSeries}}</p>
        <p>name: {{amiibo.name}}</p>
    </div>


</main>
</template>

<script>
import Loader from '../../general/loader.vue';


export default {
    name: 'AllAmiibo',
    components: {
        Loader
    },
    props: ['text'],
    data() {
        return {
            loading: false,
            amiibos: null,
            error: false,
            toMany: false
        }
    },
    watch: {
        'text'() {
            this.fetchAmiibos(this.text);
        }
    },
    methods: {
        fetchAmiibos(text) {
            let url = `https://www.amiiboapi.com/api/amiibo/`;
            if (text)
                url = `https://www.amiiboapi.com/api/amiibo/?character=${text}`;
            this.loading = true;
            this.error = false;
            this.toMany = false;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.amiibos = data.amiibo;
                    this.loading = false;
                    if (data.code === 404) {
                        this.error = true;
                    }
                    if (data.code === 429) {
                        this.toMany = true;
                    }
                })
                .catch(error => {
                    /* eslint-disable no-console */
                    console.log('Something went ewrong', error)
                    this.error = true;
                })
        }
    },
    mounted: function() {
        this.fetchAmiibos()
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';

main {
    span {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }

    .loader {
        margin: 0 auto;
    }
    .amiibo {
        background: white;
        padding: 10px;
        margin: 10px;
        figure {
            height: 100px;
            width: 100px;
            position: relative;
            img {
                position: absolute;
                object-fit: contain;
                height: 100%;
            }
        }
        h3 {
            background: black;
            margin-top: auto;
            color: white;
        }

    }
}
</style>
