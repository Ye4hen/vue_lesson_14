<template>
    <div>
        <header class="header">
            <div class="header__container">
                <nav class="header__nav">
                    <router-link :to="{ name: 'home' }" class="header__link">На головну </router-link>
                </nav>
            </div>
        </header>
        <main class="main">
            <slot> </slot>
        </main>
        <footer class="second-footer">
            <div class="second-footer__container">
                <h3>Галерея</h3>
                <div class="second-footer__gallery">
                    <div v-for="image in galleryList" :key="image.id" class="second-footer__gallery-img">
                        <img :src="image.img" alt="image" />
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'SecondaryMasterPage',

    computed: {
        ...mapGetters(['galleryList']),
    },

    created() {
        this.setGalleryData()
    },

    methods: {
        ...mapActions(['setGalleryData']),
    },
}
</script>

<style lang="scss" scoped>
</style>