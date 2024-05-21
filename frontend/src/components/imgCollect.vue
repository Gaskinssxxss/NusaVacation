<template>
    <div>
        <div class="pl-4 md:pl-26 pr-1 md:pr-16 pb-20">
            <div class="bg-black">
                <div class="bg-ocean px-2 sm:px-5 mt-3 relative -left-3 -top-3 border-2 border-black">
                    <div class="py-[0.5px]">
                        <div class="flex justify-start space-x-1 sm:space-x-2 mt-3 sm:mt-4 pl-1 sm:pl-12">
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                        </div>
                        <div
                            class="pl-2 sm:pl-0 text-center text-sunny -mt-7 sm:-mt-10 font-Karantina text-2xl sm:text-4xl font-medium pb-4">
                            <h1>~imgCollections</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-black">
                    <div class="bg-sunny px-2 sm:px-20 py-8 sm:py-14 relative -left-3 -top-3 border-2 border-black">
                        <div class="block md:flex justify-between space-x-1 sm:space-x-8">
                            <div class="flex pl-6 sm:pl-0">
                                <div class=" bg-black">
                                    <div class="bg-sunny border-2 border-black relative -top-3 -left-3 ">
                                        <img class="w-[900px] sm:w-[1500px] h-48 sm:h-110" :src="getImageSrc" alt="">
                                    </div>
                                </div>
                                <div class="flex items-center -ml-8 " @click="toggleImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="bg-black px-2 sm:px-3 py-2 sm:py-3 rounded-full w-10 sm:w-16 3xl:w-14 3xl:h-14 h-10 sm:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                            <div class="pl-4 sm:pl-12 3xl:pl-8 mt-2 sm:-mt-4 pr-0 sm:pr-10">
                                <h1 class="font-Karantina text-4xl sm:text-6xl 3xl:text-5xl mx-0 sm:-mx-20 font-bold">{{
                                    currentData.name
                                }}</h1>
                                <p class="pt-4 text-sm 3xl:text-5xl mx-0 sm:-mx-20">{{ currentData.Details }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div @click="toggleData" class="-mt-7 sm:-mt-[395px] 3xl:-mt-[465px] mr-32 sm:-mr-6 3xl:-mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="bg-black px-2 sm:px-3 py-2 sm:py-3 rounded-full w-10 sm:w-16 3xl:w-14 3xl:h-14 h-10 sm:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tambora: {
                name: 'Gunung Tambora',
                Details: 'Gunung Tambora adalah sebuah gunung berapi di Indonesia.',
                img: ['bima10.jpg', 'bima11.jpg', 'bima12.jpg', 'bima14.jpg', 'bima15.jpg', 'bima16.jpg'],
                currentImgIndex: 0
            },
            whaleShark: {
                name: 'Whale Shark',
                Details: 'Whale shark adalah mamalia laut yang sangat menggemaskan',
                img: ['sea1.jpg', 'sea2.jpg', 'sea3.jpg', 'sea4.jpg', 'sea5.jpg', 'sea6.jpg', 'sea7.jpg'],
                currentImgIndex: 0
            },
            sumba: {
                name: 'Sumba',
                Details: 'Sumba adalah sebuah gunung berapi di Indonesia',
                img: ['sumba2.jpg', 'sumba3.jpg', 'sumba4.jpg', 'sumba5.jpg', 'sumba6.jpg'],
                currentImgIndex: 0
            },
            currentData: {}
        }
    },
    methods: {
        toggleData() {
            if (this.currentData === this.tambora) {
                this.currentData = this.whaleShark;
            } else if (this.currentData === this.whaleShark) {
                this.currentData = this.sumba;
            } else {
                this.currentData = this.tambora;
            }
        },
        toggleImg() {
            this.currentData.currentImgIndex = (this.currentData.currentImgIndex + 1) % this.currentData.img.length;
        },
    },
    computed: {
        getImageSrc() {
            return require(`../../../public/img/${this.currentData.img[this.currentData.currentImgIndex]}`);
        }
    },
    created() {
        this.currentData = this.tambora;
    }
}
</script>
