<template>
    <div class="bg-black py-16">
        <div class="px-20 pt-5 pb-100">
            <user />
        </div>
    </div>
</template>

<script>
import user from "../components/adminUserList.vue"

export default {
    components: {
        user
    }
}
</script>