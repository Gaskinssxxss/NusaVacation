<template>
  <div class="px-2 py-2">
    <div class="bg-sunny border-t-4 border-l-4 border-r-4 border-black">
      <div>
        <navGateLogin />
      </div>
      <div class="bg-sunny pt-[110px] pb-44">
        <secBar />
      </div>
    </div>
    <div class="-mt-16">
      <bottomGate></bottomGate>
    </div>
    <div class="bg-sunny pt-20 px-10 pb-16 border-l-4 border-r-4 border-black">
      <packPack />
    </div>
    <div class="bg-sunny border-r-4 border-l-4 border-black">
      <viSion class="mx-5 border-t-4 border-black border-l-4 border-r-4" />
    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black pt-5">
      <reView />
    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-2 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import secBar from "../components/secBar.vue";
import bottomGate from '../components/bottomGate.vue';
import packPack from "../components/packPack.vue";
import viSion from "@/components/viSion.vue";
import reView from "@/components/reView.vue";
import fooTing from "@/components/fooTing.vue";

export default {
  components: {
    navGateLogin,
    secBar,
    bottomGate,
    packPack,
    viSion,
    reView,
    fooTing
  }
}
</script>