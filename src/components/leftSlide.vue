<template>
	<div>
		<div class="home">
		    <Layout>
		        <Sider ref="side" hide-trigger collapsible >
		        	<Menu theme="dark" width='auto' class='menu'>
		                <Submenu name="1">
		                    <template slot="title">
		                        <Icon type="ios-paper"></Icon>
		                        <span>内容管理</span>
		                    </template>
		                    <MenuItem :name="1-(index+2)" v-for='(item,index) in items' @click.native='go(item)'>{{item.title}}</MenuItem>
		                </Submenu>
		            </Menu>
		        </Sider>
		    </Layout>
	    </div>
	    <div class='title'>
	    	<Tag type="border" color="blue" @click.native='returnHome'>首页</Tag>
	    	<Tag type="border" closable color="blue" v-show="showFlag" v-for='(title,index) in titles' @click.native='go(title)' @on-close="handleClose2">{{title.title}}</Tag>
	    </div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			items:[
				{
					title:'轮播',
					name:'lunbo'
				},
				{
					title:'注册',
					name:'zhuce'
				},
				{
					title:'登陆',
					name:'denglu'
				}
			],
			showFlag:false,
			titles:[]
		}
	},
  methods:{
	    go(item){
	    	if(this.titles.find(itemes=>itemes.title===`${item.title}`)){return this.routers(item)}
	    		this.titles.push({title:`${item.title}`,name:`${item.name}`})
	    		console.log(this.titles)
	    		this.showFlag=true
		    	this.routers(item)
	    },
	    routers(item){
	    	this.$router.push(
		    	{
		    		path:`/Home/${item.name}`
		    	}
	    	)
	    },
	    handleClose2 (event, title) {
            const index = this.titles.indexOf(title);
            this.titles.splice(index, 1);
            this.$router.push(
		    	{
		    		path:`/Home`
		    	}
	    	)
        },
        returnHome(){
        	this.$router.push({
        		path:`/Home`
        	})
        }
	},
	computed:{
            
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.home{
		position: absolute;
		bottom:0;
		left:0;
		top:64px;
		background: #495060;
	}
	.menu{
		text-align: left;
		font-size: 16px;
	}
	.ivu-icon{
		color:#fff;
	}
	.title{
		margin-left: 210px;
    	text-align: left;
	}
</style>
