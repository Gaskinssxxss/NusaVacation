<template>
    <div v-if="!user">
        <forbiddenPage />
    </div>

    <div v-if="user" class="bg-black py-10">
        <div class="px-14 pb-100">
            <transaction />
        </div>
    </div>
</template>

<script>
import transaction from "../components/adminUserTransaction.vue";
import forbiddenPage from '@/components/forbiddenPage.vue';

export default {
    components: {
        transaction,
        forbiddenPage
    }, computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>