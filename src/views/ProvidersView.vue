<template>
    <div>
        <main-master-page :shop="shopInfo" class="providers__container">
            <template #title>
                <h1>Оберіть постачальника</h1>
            </template>
            <ul class="cards__list">
                <card-data
                    v-for="provider in providersList.providersList"
                    :key="provider.id"
                    :card="{
                        img: provider.img,
                        name: provider.title,
                    }"
                >
                    <template #card-middle>
                        <div class="card__middle card__middle-icons">
                            <div v-for="icon in provider.icons" :key="icon.id">
                                <img :src="icon.img" alt="icon" />
                            </div>
                        </div>
                    </template>
                </card-data>
            </ul>
            <template #left-footer>
                Найбільш популярний: <span class="footer-span">{{ providersList.popular }}</span>
            </template>
            <template #right-footer>
                Статус: <span class="footer-span">{{ providersList.status }}</span>
            </template>
        </main-master-page>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardData from '../components/CardData.vue'
import MainMasterPage from '../masterpages/MainMasterPage.vue'

export default {
    name: 'ProvidersView',
    components: { MainMasterPage, CardData },

    computed: {
        ...mapGetters(['providersList', 'shopInfo']),
    },

    created() {
        this.setShopInfo()
        this.setProvidersData()
    },

    methods: {
        ...mapActions(['setProvidersData', 'setShopInfo']),
    },
}
</script>

<style lang="scss" scoped>
</style>