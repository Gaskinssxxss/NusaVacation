<template>
  <div class="bg-sunny">
    <div class="flex justify-start pl-6 sm:pl-20 text-sunny">
      <div>
        <div class="flex mt-2">
          <div class="bg-black">
            <div
              class="flex space-x-6 sm:space-x-24 pl-2 sm:pl-4 py-1 sm:py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
              <div>
                <h1 class="font-Karantina text-lg sm:text-2xl font-bold">
                  CATEGORIES
                </h1>
              </div>
              <div v-show="down" @click="show" class="pr-2 sm:pr-10 mt-1 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 md:w-8 h-5 md:h-8 mx-auto stroke-2 stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div v-show="up" @click="showi" class="pr-2 sm:pr-10 mt-1 md:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 md:w-8 h-5 md:h-8 mx-auto stroke-2 stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div v-show="shot">
          <div class="bg-black">
            <div
              class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div>
                <h1
                  class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Tambora
                </h1>
              </div>
            </div>
          </div>
          <div class="bg-black">
            <div
              class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div>
                <h1
                  class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Tambora
                </h1>
              </div>
            </div>
          </div>
          <div class="bg-black">
            <div
              class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
              <div>
                <h1
                  class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                  Tambora
                </h1>
              </div>
            </div>
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