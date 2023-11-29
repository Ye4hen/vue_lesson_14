<template>
    <div>
        <header class="header">
            <div class="header__container">
                <nav class="header__nav">
                    <router-link :to="{ name: 'home' }" class="header__link">Головна </router-link>
                    <router-link :to="{ name: 'products' }" class="header__link">Товари</router-link>
                    <router-link :to="{ name: 'providers' }" class="header__link">Постачальники</router-link>
                    <router-link :to="{ name: 'contacts' }" class="header__link">Контакти</router-link>
                    <router-link :to="{ name: 'rules' }" class="header__link">Правила</router-link>
                </nav>
            </div>
        </header>
        <main class="main">
            <slot name="title"> </slot>
            <slot> </slot>
        </main>
        <footer class="footer">
            <div class="footer__container">
                <slot name="left-footer">
                    <div>Рейтинг магазину: {{ shop.rating }}</div>
                </slot>
                <slot name="right-footer">
                    <div class="baba-galya">
                        Власник магазину: {{ shop.owner.name }} <img :src="shop.owner.img" :alt="shop.owner.name" />
                    </div>
                </slot>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'MainMasterPage',

    props: {
        shop: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
</style>