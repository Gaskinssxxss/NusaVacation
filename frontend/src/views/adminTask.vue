<template>
    <div v-if="!user">
        <forbiddenPage />
    </div>

    <div v-if="user" class="bg-black pt-4 pb-10">
        <div class="px-20 py-5">
            <task />
        </div>
    </div>
</template>

<script>
import task from "../components/adminTasker.vue"
import forbiddenPage from '@/components/forbiddenPage.vue';

export default {
    components: {
        task,
        forbiddenPage,
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
}
</script>