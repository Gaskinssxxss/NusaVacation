<template>
    <div class="px-2 py-2">
        <div class="bg-ocean border-4 border-black">
            <div>
                <navGateLogin />
            </div>
        </div>
        <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black pt-10">
            <fooTing />
        </div>
    </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';

export default {
    components: {
        navGateLogin,
        fooTing,
    },
    data() {
        return {
            shot: false,
            down: true,
            up: false,
        }
    },
    methods: {
        show() {
            this.shot = true
            this.down = false
            this.up = true
        },
        showi() {
            this.shot = false
            this.down = true
            this.up = false
        }
    }
}
</script>