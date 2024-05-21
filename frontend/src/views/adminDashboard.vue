<template>
    <div v-if="!user">
        <forbiddenPage />
    </div>

    <div v-if="user" class="bg-black py-16">
        <div class="px-20 py-10">
            <dashboard />
        </div>
    </div>
</template>

<script>
import dashboard from '../components/adminDash.vue';
import forbiddenPage from '@/components/forbiddenPage.vue';

export default {
    components: {
        dashboard,
        forbiddenPage
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>