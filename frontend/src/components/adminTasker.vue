<template>
    <div>
        <div class="flex">
            <div class="w-full bg-maryjane ">
                <div class="py-5 bg-black text-maryjane relative -left-3 -top-3 border-2 border-maryjane">
                    <h1 class="font-Karantina font-bold text-center text-6xl">
                        ADMIN TASK
                    </h1>
                </div>
            </div>
        </div>

        <div class="py-20">
            <div class="bg-black">
                <div class="bg-black px-5 py-3 mt-3 relative -left-4 -top-4 border-2 border-maryjane">
                    <div class="flex justify-start space-x-2 mt-4 pl-5">
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                    </div>
                    <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4 text-maryjane">
                        <h1>~/www/root</h1>
                    </div>
                </div>
                <div>
                    <div class="bg-black px-5 relative -left-4 -top-4 border-b-4 border-r-4 border-l-4 border-maryjane text-maryjane py-20 space-y-14">
                        <div class="flex">
                            <div class="flex justify-start pl-20">
                                <div class="bg-maryjane">
                                    <div
                                        class="px-44 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-6xl font-bold">
                                            AUTOMATION TRANSACTION CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active />
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex justify-start pl-20">
                                <div class="bg-maryjane">
                                    <div
                                        class="px-44 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-6xl font-bold">
                                            AUTOMATION TRANSACTION CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active />
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex justify-start pl-20">
                                <div class="bg-maryjane">
                                    <div
                                        class="px-44 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-6xl font-bold">
                                            AUTOMATION TRANSACTION CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active />
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex justify-start pl-20">
                                <div class="bg-maryjane">
                                    <div
                                        class="px-44 py-8 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-6xl font-bold">
                                            AUTOMATION TRANSACTION CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import active from "../components/activeDeactive.vue"
export default {
    components: {
        active
    },
    data (){
        return {
            fols: true,
            tru: false
        }
    },
    methods: {
        active(){
            this.fols = false
            this.tru = true
        },
        deactive(){
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