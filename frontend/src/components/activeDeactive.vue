<template>
    <div @click="active" v-show="fols" class="flex justify-start space-x-2 pl-20">
        <div class="bg-maryjane w-full transition-transform duration-300 ease-in-out transform hover:scale-90">
            <div
                class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-20 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                <h1 class="font-Karantina text-6xl font-bold text-black text-stroke-3 ">
                    DEACTIVE
                </h1>
            </div>
        </div>
    </div>
    <div @click="deactive" v-show="tru" class="flex justify-start space-x-2 pl-20">
        <div class="bg-maryjane w-full transition-transform duration-300 ease-in-out transform hover:scale-90">
            <div
                class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-24 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                <h1 class="font-Karantina text-6xl font-bold text-maryjane ">
                    ACTIVE
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fols: true,
            tru: false
        }
    },
    methods: {
        active() {
            this.fols = false
            this.tru = true
        },
        deactive() {
            this.fols = true
            this.tru = false
        }
    }
}
</script>

<style>
.text-stroke-3 {
    -webkit-text-stroke: 2px #AAE73D;
}
</style>