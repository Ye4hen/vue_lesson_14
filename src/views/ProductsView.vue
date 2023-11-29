<template>
    <div>
        <main-master-page :shop="shopInfo" class="products__container">
            <div class="products__nav">
                <router-link :to="{ name: 'product_editor-list' }" class="header__link">Product Editor</router-link>
                <router-link :to="{ name: 'products_selector' }" class="header__link">Product Selector</router-link>
                <router-view />
            </div>
            <template #title>
                <h1>Оберіть продукти</h1>
            </template>
            <ul class="cards__list">
                <card-data
                    v-for="product in productsList.productsList"
                    :key="product.id"
                    :card="{
                        img: product.img,
                        name: product.name,
                        price: product.price,
                    }"
                >
                </card-data>
            </ul>
            <template #right-footer>
                Статус: <span class="footer-span">{{ productsList.status }}</span>
            </template>
        </main-master-page>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardData from '../components/CardData.vue'
import MainMasterPage from '../masterpages/MainMasterPage.vue'

export default {
    name: 'ProductsView',
    components: { MainMasterPage, CardData },

    computed: {
        ...mapGetters(['productsList', 'shopInfo']),
    },

    created() {
        this.setShopInfo()
        this.setProductsList()
    },

    methods: {
        ...mapActions(['setProductsList', 'setShopInfo']),
    },
}
</script>

<style lang="scss" scoped>
</style>