<template>
    <div>
        <div class="pl-26 pr-16 pb-20">
            <div class="bg-black">
                <div class="bg-ocean px-5 mt-3 relative -left-3 -top-3 border-2 border-black">
                    <div class="py-[0.5px]">
                        <div class="flex justify-start space-x-2 mt-4 pl-12">
                            <div class="bg-sunny rounded-full px-4 py-4 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-4 py-4 border-2 border-black"></div>
                        </div>
                        <div class="text-center text-sunny -mt-10 font-Karantina text-4xl font-medium pb-4">
                            <h1>~imgCollections</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-black">
                    <div class="bg-sunny px-20 py-14 relative -left-3 -top-3 border-2 border-black">
                        <div class="flex justify-between space-x-8">
                            <div class="flex">
                                <div class=" bg-black">
                                    <div class="bg-sunny border-2 border-black relative -top-3 -left-3 ">
                                        <img class="w-120 h-110" :src="getImageSrc" alt="">
                                    </div>
                                </div>
                                <div class="flex items-center -ml-20" @click="toggleImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-14 3xl:w-14 h-14 mx-auto stroke-[3px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                            <div class="pl-16 -mt-4">
                                <h1 class="font-Karantina text-6xl 3xl:text-8xl font-bold">{{ currentData.name }}</h1>
                                <p class="pt-4">{{ currentData.Details }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div @click="toggleData" class="-mt-[375px] mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-14 3xl:w-14 h-14 mx-auto stroke-[3px] stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
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
