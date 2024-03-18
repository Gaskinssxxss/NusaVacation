<template>
  <div class="px-2 py-2">
    <div class="bg-sunny border-4 border-black">
      <div>
        <navGateLogin />
      </div>

      <div class="px-2 pb-10 -ml-4">
        <jpg />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import jpg from '@/components/imgCollect.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    jpg
  },
}
</script>