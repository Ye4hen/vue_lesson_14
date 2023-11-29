<template>
    <main-master-page :shop="shopInfo" class="selector__container">
        <selector-items />
        <selected-list />
    </main-master-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SelectedList from '../components/SelectedList.vue'
import SelectorItems from '../components/SelectorItems.vue'
import MainMasterPage from '../masterpages/MainMasterPage.vue'

export default {
    name: 'SelectorView',
    components: { SelectorItems, SelectedList, MainMasterPage },

    computed: {
        ...mapGetters(['shopInfo']),
    },

    created() {
        this.setShopInfo()
        this.setProductsList()
        this.setProvidersData()
    },

    methods: {
        ...mapActions(['setProductsList', 'setProvidersData', 'setShopInfo']),
    },
}
</script>

<style lang="scss" scoped>
</style>