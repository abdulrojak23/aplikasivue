<template>
  <div class="home">
   <HeaderShayna/>
   <HeroShayna/>
   <Women/>
   <insta/>
   <Logo/>
   <fotter/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from "@/components/HeaderShayna.vue";
import HeroShayna from "@/components/HeroShayna.vue";
import insta from "@/components/insta.vue";
import Logo from "@/components/Logo.vue";
import fotter from "@/components/fotter.vue";

import Women from "@/components/Women.vue";


export default {
  name: "Home",

  components: {
    HeaderShayna,
    HeroShayna,
    Women,
    insta,
    Logo,
    fotter
    
  }
}
</script>
