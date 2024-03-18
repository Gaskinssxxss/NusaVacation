<template>
    <div class="mx-20">
        <nav class="flex justify-between pr-16 py-14 font-Karantina font-extrabold text-2xl">
            <router-link to="/">
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="border-2 border-black px-6 py-2 bg-sunny relative -left-1 -top-1">
                        <h1>Logos</h1>
                    </div>
                </div>
            </router-link>

            <div class="flex space-x-4 -mr-20 3xl:-mr-0">
                <div>
                    <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <div class="border-2 border-black px-6 py-2 bg-sunny relative -left-1 -top-1">
                            <h1>Our Services</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="px-6">
                        <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div class="border-2 border-black px-10 py-2 bg-sunny relative -left-1 -top-1">
                                <h1>Menu</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script>
export default {
    name: "NavigationComp",
    data() {
        return {
            shw: false,
            showi: true,
            showe: false
        }
    },
    methods: {
        opens() {
            this.shw = true
            this.showi = true
        },
        openx() {
            this.showi = true
            this.shw = false
        },
    },
}
</script>