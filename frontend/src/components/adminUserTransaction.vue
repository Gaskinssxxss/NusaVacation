<template>
    <div class="flex">
        <div class="w-full bg-maryjane ">
            <div class="py-5 bg-black text-maryjane relative -left-4 -top-4 border-2 border-maryjane tracking-wider">
                <div class="pb-10">
                    <h1 class="font-Karantina font-bold text-center text-6xl">
                        ~/USER TRANSACTION
                    </h1>
                </div>
                <div class="border-t-2 border-maryjane pt-10 pb-5 px-10">
                    <div>
                        <div class="flex justify-between space-x-10 font-Karantina font-bold text-3xl">
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center py-4 px-10 ">
                                    <div>
                                        <h1>NO</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>USERNAME</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>PACKAGE NAME</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center py-4 px-10 ">
                                    <div>
                                        <h1>PAX</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>TOTAL COST</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>STATUS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div class="flex justify-between space-x-10 font-Karantina font-bold text-2xl pt-6">
                                    <div class="text-center">
                                        <div class="border-2 border-maryjane text-center py-4 px-12 ">
                                            <div>
                                                <h1>{{ no }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ username }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ pack }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="border-2 border-maryjane text-center py-4 px-14 ">
                                            <div>
                                                <h1>{{ pax }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>Rp. {{ totalCost }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div @click="note" class=" w-full text-center bg-sunny transition-transform duration-300 ease-in-out transform hover:scale-110">
                                        <div class="border-4 border-black text-center py-4 bg-maryjane relative -top-2 -left-2">
                                            <div class="flex justify-start px-10 ">
                                                <div class="bg-maryjane rounded-full px-5 py-5 border-4 border-black">
                                                </div>
                                                <div class="pt-2 text-black pl-10">
                                                    <h1>{{ status }}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-show="open" class="relative -top-72">
        <note
/>
    </div>
</template>

<script>
import note from "../components/transactionNote.vue"

export default {
    components: {
        note
    },
    data() {
        return {
            open: false,
            no: 1,
            username : "admin",
            pack : "tambora",
            pax : 1,
            totalCost : 666.666,
            status : "pending"
        }
    },
    methods: {
        note() {
            this.open = true
        }
    }
}
</script>