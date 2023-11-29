<template>
    <div class="edit-card">
        <div class="edit-card__info">
            <div class="edit-card__image">
                <img :src="cardEdit.img" :alt="cardEdit.name" />
            </div>
            <h5 class="edit-card__title">
                {{ cardEdit.name }}
            </h5>
            <strong class="edit-card__price"> {{ cardEdit.price }}грн. </strong>
        </div>
        <div class="edit-card__action">
            <button class="edit-card__button" @click="onEdit(cardEdit.id)">Edit</button>
            <button class="edit-card__button" @click="removeProduct(cardEdit.index, cardEdit.id)">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CardEdit',

    props: {
        cardEdit: {
            type: Object,
            required: true,
        },
    },

    methods: {
        ...mapActions(['removeProduct']),
        onEdit(id) {
            this.$router.push({
                name: 'product_editor',
                params: {
                    productId: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>