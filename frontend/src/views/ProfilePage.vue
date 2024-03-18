<template>
  <div class="px-3 py-3">
    <div class="bg-ocean border-4 border-black">
      <div>
        <navGateLogin />
      </div>

      <div class="pl-24">
        <profile />
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
import profile from '@/components/profileBar.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    profile
  },
}
</script>