<template>
  <div class="px-3 py-3">
    <div class="bg-sunny border-4 border-black">
      <div class="ml-4 3xl:-ml-0 px-4">
        <navGateLogin />
      </div>

      <div class="-mt-2 3xl:mt-5">
        <detailJpg />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-2 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>

<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import detailJpg from '@/components/detailJpg.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    detailJpg
  },
}
</script>