<template>
  <div class="px-2 py-2">
    <div class="bg-sunny border-4 border-black">
      <div>
        <navGateLogin />
      </div>

      <div class="-mt-4">
        <filterx />
      </div>

      <div class="pb-10 3xl:pt-0 px-10 pt-12">
        <packGrid :showArrows="false" :showHiddenPackages="true" />
      </div>

    </div>

    <div>
      <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black">
        <fooTing />
      </div>
    </div>
  </div>
</template>

<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import packGrid from '@/components/packPack.vue';
import filterx from '@/components/packageFilter.vue'

export default {
  components: {
    navGateLogin,
    fooTing,
    packGrid,
    filterx
  },
}
</script>