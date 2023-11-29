<template>
    <div>
        <main-master-page :shop="shopInfo" class="products__container">
            <ul class="products__list">
                <card-edit
                    v-for="(product, index) in productsList.productsList"
                    :key="product.id"
                    :cardEdit="{
                        img: product.img,
                        name: product.name,
                        price: product.price,
                        index: index,
                        id: product.id,
                    }"
                >
                </card-edit>
            </ul>
            <router-link :to="{ name: 'product_editor' }" class="editor__button">Add Product</router-link>
        </main-master-page>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardEdit from '../components/CardEdit.vue'
import MainMasterPage from '../masterpages/MainMasterPage.vue'

export default {
    name: 'ProductsListEditor',
    components: { MainMasterPage, CardEdit },

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