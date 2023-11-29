<template>
    <div class="home">
        <main-master-page :shop="shopInfo">
            <template #title>
                <h1>Вітаємо!</h1>
            </template>
            <div>
                <p>Сподіваємось ви будете чемними і обов'язково щось купите</p>
            </div>
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },

    computed: {
        ...mapGetters(['shopInfo']),
    },

    created() {
        this.setShopInfo()
    },

    methods: {
        ...mapActions(['setShopInfo']),
    },
}
</script>
