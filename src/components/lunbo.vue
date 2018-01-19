<template>
  <div>
  	<div class="slide-show" @mouseover='clearI' @mouseout='runIng'>
	    <div class="slide-img"> 
	        <img :src="slides[nowIndex].src">
	    </div>
	    <ul class="slide-pages">
	      <li @click='goto(prevIndex)'>&lt;</li>
	      <li v-for='(item,index) in slides' @click='goto(index)'>
	        <a :class='{active:index===nowIndex}'>{{item.title}}</a>
	      </li>
	      <li @click='goto(nextIndex)'>&gt;</li>
	    </ul>
	</div>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		slides: [
	        {
	          src: require('../assets/slideShow/pic1.jpg'),
	          title: 'pic1'
	        },
	        {
	          src: require('../assets/slideShow/pic2.jpg'),
	          title: 'pic2'
	        },
	        {
	          src: require('../assets/slideShow/pic3.jpg'),
	          title: 'pic3'
	        },
	        {
	          src: require('../assets/slideShow/pic4.jpg'),
	          title: 'pic4'
	        }
	    ],
	    nowIndex:0
  	}
  },
  computed:{
  	prevIndex(){
  		if(this.nowIndex===0){
  			return this.slides.length-1
  		}else{
  			return this.nowIndex-1
  		}
  	},
  	nextIndex(){
  		if(this.nowIndex===this.slides.length-1){
  			return 0
  		}else{
  			return this.nowIndex+1
  		}
  	}
  },
  mounted(){
  	this.runIng()
  },
  methods:{
  	goto(index){
  		this.nowIndex=index
  	},
  	runIng(){
  		this.clearIng=setInterval(()=>{
  			this.goto(this.nextIndex)
  		},2000)
  	},
  	clearI(){
  		clearInterval(this.clearIng);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.slide-show{
		width: 95%;
		margin:10px auto;
		position: relative;
	}
	.slide-img img{
		width:80%;
	}
	.slide-pages{
		position: absolute;
		bottom: -15px;
		right: 115px;
		background: rgba(0,0,0,.5)
	}
	.slide-pages li{
		display: inline-block;
  		padding: 0 10px;
  		cursor: pointer;
  		color:#fff;
	}
	.active{
		color: red;
	}
</style>
