<template>
    <div class="font-Karantina text-black text-5xl font-bold pl-10 pt-10">
        <h1>SATISFIED CUSTOMER</h1>
    </div>
    <div class="flex items-center pl-6 3xl:pl-0">
        <div v-show="opens" id="1" class="grid grid-cols-4 w-auto pb-10">
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="openMinded" id="2" class="grid grid-cols-4 w-auto pb-10">
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex py-10 px-5 3xl:px-10">
                    <div class="bg-black">
                        <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                            <h1 class="font-Karantina text-3xl font-bold">
                                MR. SATAN
                            </h1>
                            <rate :length="5" class="viaSlot" id="icon" />
                            <div class="font-Karantina text-black text-xl 3xl:text-2xl font-bold pl-5 3xl:pl-10">
                                <h1>txttxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxtxt</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="-mt-8">
            <div v-show="ops" @click="openWar" class="pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

            <div v-show="cls" @click="closedWar" class="pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMinded: false,
            opens: true,
            ops: true,
            cls: false
        }
    },
    methods: {
        openWar() {
            this.openMinded = !this.openMinded
            this.opens = false
            this.ops = false
            this.cls = true
        },
        closedWar() {
            this.openMinded = !this.openMinded
            this.opens = true
            this.ops = true
            this.cls = false
        }
    }
}
</script>

<style>
.RateCustom.viaSlot #icon {
    width: 1000px;
    height: 1000px;
}

.Rate.viaSlot .Rate__star.filled {
    color: #813d1a;
}

.Rate.viaSlot .Rate__star.hover {
    color: #E67136;
}
</style>