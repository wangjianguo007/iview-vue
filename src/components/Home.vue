<template>
  <div class="home">
    <Header></Header>
    <leftSlide></leftSlide>
    <h1 v-if="this.$route.path==='/Home'">welcome</h1>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import leftSlide from '@/components/leftSlide'
export default {
  data(){
    return {
      
    }
  },
  components:{
    Header,
    leftSlide
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    margin-left: 200px;
  }
  h1{
    margin-left: 200px;
  }
</style>
