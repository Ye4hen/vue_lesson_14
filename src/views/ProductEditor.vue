<template>
    <div class="editor">
        <div class="editor__item">
            <div class="editor__image">
                <img :src="currentProduct.img" :alt="currentProduct.name" />
            </div>
            <label>
                Image
                <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/jpg, image/svg"
                    @change="onFileChange"
                />
            </label>
        </div>
        <div class="editor__item">
            <label>
                Name
                <input v-model="currentProduct.name" type="text" />
            </label>
        </div>
        <div class="editor__item">
            <label>
                Price
                <input v-model="currentProduct.price" type="number" />
            </label>
        </div>
        <div class="editor__action">
            <button class="editor__button" @click="onAction">{{ actionButtonTitle }}</button>
            <router-link :to="{ name: 'product_editor-list' }" class="editor__button">Cancel</router-link>
        </div>
        <div v-if="errorMessage" class="err-msg">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductEditor',
    data() {
        return {
            currentProduct: {},
        }
    },

    computed: {
        ...mapGetters(['getProductById', 'errorMessage']),
        currentProductId() {
            return this.$route.params.productId
        },
        actionButtonTitle() {
            return this.currentProductId ? 'Зберегти' : 'Додати'
        },
    },

    created() {
        this.currentProduct = { ...this.getProductById(this.currentProductId) }
    },

    methods: {
        ...mapActions(['addProduct', 'updateProduct', 'setErrorMessage']),
        onAction() {
            if (this.currentProduct.name && this.currentProduct.price) {
                if (!this.currentProductId) this.addProduct(this.currentProduct)
                else this.updateProduct(this.currentProduct)
                this.$router.push({ name: 'product_editor-list' })
                this.setErrorMessage(null)
            } else {
                this.setErrorMessage("Заповнення всіх полів є обов'язковим")
                setTimeout(() => {
                    this.setErrorMessage(null)
                }, 2000)
            }
        },
        onFileChange(event) {
            const file = event.target.files[0]
            if (file) {
                this.currentProduct.img = URL.createObjectURL(file)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>