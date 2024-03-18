<template>
    <div class="bg-black py-16">
        <div class="px-20 pt-5 pb-100">
            <transaction />
        </div>
    </div>
</template>

<script>
import transaction from "../components/adminUserTransaction.vue"

export default {
    components: {
        transaction
    }
}
</script>