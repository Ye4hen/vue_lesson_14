<template>
    <div class="selectors">
        <div class="selectors__items">
            <div class="selectors__item">
                <label>
                    Product Name
                    <select v-model="selector.productId">
                        <option v-for="product in productsList.productsList" :key="product.id" :value="product.id">
                            {{ product.name }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="selectors__item">
                <label>
                    Provider Name
                    <select v-model="selector.providerId">
                        <option v-for="provider in providersList.providersList" :key="provider.id" :value="provider.id">
                            {{ provider.title }}
                        </option>
                    </select>
                </label>
            </div>
        </div>
        <button class="editor__button" @click="onAdd">Add</button>
        <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SelectorItems',
    data() {
        return {
            selector: {},
        }
    },
    computed: {
        ...mapGetters(['productsList', 'providersList', 'selectedList', 'errorMessage']),
    },

    methods: {
        ...mapActions(['addSelectedItem', 'setErrorMessage']),

        onAdd() {
            if (this.selector) {
                this.addSelectedItem(this.selector)
                this.selector = {}
                this.setErrorMessage(null)
            } else {
                this.setErrorMessage('error')
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>