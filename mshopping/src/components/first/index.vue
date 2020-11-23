<template>
  <div>
    <v-footer></v-footer>
    <router-view></router-view>
    
  </div>
</template>

<script>
import vFooter from '../common/footer'
export default {
    components:{
        vFooter
    }
};
</script>

<style lang="" scoped>
</style>