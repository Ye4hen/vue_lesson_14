<template>
    <div>
        <secondary-master-page>
            <div class="contacts__body body-contacts">
                <h3 class="body-contacts__title">Правила купівлі:</h3>
                <ul class="body-contacts__list">
                    <li class="body-contacts__item">*Купуємо багато</li>
                    <li class="body-contacts__item">*Платимо швидко</li>
                    <li class="body-contacts__item">* Насолоджуємось товаром</li>
                </ul>
            </div>
        </secondary-master-page>
    </div>
</template>

<script>
import SecondaryMasterPage from '../masterpages/SecondaryMasterPage.vue'
export default {
    components: { SecondaryMasterPage },
    name: 'RulesView',
}
</script>

<style lang="scss" scoped>
</style>