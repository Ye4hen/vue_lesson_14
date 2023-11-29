<template>
    <ul class="selected__list">
        <li v-for="item in getSelectedList" :key="item.id" class="selected__item">
            <h4 class="selected__item-name">{{ item.productName }}</h4>
            ---
            <h4 class="selected__item-name">{{ item.providerName }}</h4>
            ---
            <button class="editor__button">Delete</button>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SelectedList',

    computed: {
        ...mapGetters(['getSelectedList']),
    },
}
</script>

<style lang="scss" scoped>
</style>