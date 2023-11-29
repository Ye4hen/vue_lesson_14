<template>
    <div>
        <secondary-master-page>
            <div class="contacts__body body-contacts">
                <h3 class="body-contacts__title">Наші контакти:</h3>
                <ul class="body-contacts__list">
                    <li class="body-contacts__item">Адреса магазину: біля будинку Баби Галі</li>
                    <li class="body-contacts__item">Менеджер: Дід Петро</li>
                    <li class="body-contacts__item">Заступнки: Онука Софійка</li>
                </ul>
            </div>
        </secondary-master-page>
    </div>
</template>

<script>
import SecondaryMasterPage from '../masterpages/SecondaryMasterPage.vue'
export default {
    components: { SecondaryMasterPage },
    name: 'ContactsView',
}
</script>

<style lang="scss" scoped>
</style>