<template>
    <div class="px-10">
        <div class="grid grid-cols-3 gap-16">
            <div v-for="packagex in filteredPackageList" :key="packagex.idx" class="w-auto bg-black">
                <div class="bg-maryjane relative -left-3 -top-3">
                    <div class="bg-maryjane px-5 py-3 border-2 border-black">
                        <div class="flex justify-start space-x-2">
                            <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                        </div>
                    </div>
                    <div class="bg-maryjane border-2 border-black">
                        <div class="px-4 3xl:px-8 py-5">
                            <div class="bg-sunny border-2 border-black">
                                <img :src="getFullImagePath(packagex.MainImg)" alt="">
                            </div>
                        </div>
                        <div @click="details(packagex.idx)"
                            class="flex justify-end py-2 3xl:py-5 pr-7 3xl:pr-10 -mt-10 pb-4">
                            <div
                                class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110 text-3xl font-bold">
                                <button
                                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-7 py-2 3xl:py-2 bg-red-700 relative -left-1 -top-1 border-2 border-black">
                                    <h1 class="font-Karantina text-xl 3xl:text-3xl text-sunny">
                                        DETAILS
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showArrows">
        <div @click="upper" v-show="shw" class="pt-5 3xl:pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-14 h-14 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
        </div>
        <div @click="downer" v-show="shww" class="pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-14 h-14 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
export default {
    props: {
        showArrows: {
            type: Boolean,
            default: true
        },
        showHiddenPackages: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            packageList: [],
            showPackageFourFive: false,
            shw: true,
            shww: false,
        }
    },
    mounted() {
        this.packageData();
    },
    methods: {
        async packageData() {
            try {
                const response = await Api.get('packages');
                this.packageList = response.data.data.map(packages => ({
                    ...packages,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        getFullImagePath(MainImg) {
            return `http://localhost:3000${MainImg}`;
        },
        upper() {
            this.showPackageFourFive = !this.showPackageFourFive;
            this.shw = false;
            this.shww = true;
        },
        downer() {
            this.showPackageFourFive = !this.showPackageFourFive;
            this.shw = true;
            this.shww = false;
        },
        async details(idx) {
            console.log("idx:", idx);
            await this.$router.push({ name: 'detail', params: { idx } });
        }
    },
    computed: {
        filteredPackageList() {
            if (this.showPackageFourFive) {
                return this.packageList;
            } else if (this.showHiddenPackages) {
                return this.packageList;
            } else {
                return this.packageList.filter(packagex => packagex.idx !== 4 && packagex.idx !== 5);
            }
        }
    }
}
</script>
