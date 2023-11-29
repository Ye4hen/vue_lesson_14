<template>
    <div class="card">
        <div class="card__image">
            <img :src="card.img" :alt="card.name" />
        </div>
        <h4 class="card__name">
            {{ card.name }}
        </h4>
        <slot name="card-middle">
            <strong class="card__middle"> {{ card.price }}грн. </strong>
        </slot>
        <button class="card__button">Купити</button>
    </div>
</template>

<script>
export default {
    name: 'CardData',

    props: {
        card: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
</style>