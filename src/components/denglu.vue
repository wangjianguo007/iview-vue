<template>
	<div class='logo'>
		<Row>
			<Col span='8' offset="6">
				<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="邮箱" prop="names">
                        <Input type="text" v-model="formCustom.names"></Input>
                    </FormItem>
			        <FormItem label="密码" prop="passwd">
			            <Input type="password" v-model="formCustom.passwd"></Input>
			        </FormItem>
			        <FormItem>
			            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
			            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
			        </FormItem>
			    </Form>
			</Col>
		</Row>
	</div>
</template>
<script>
    export default {
        data () {
        	let regex = new RegExp(/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/)
        	let names=new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ )
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入您的密码'));
                }else if(!regex.test(value)){
                	callback(new Error('密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符'));
                } else {
                    callback();
                }
            };
            const validateNames = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                } else if (!names.test(value)) {
                    callback(new Error("请输入正确的邮箱如:'web.blue@jb51.net'"));
                } else {
                    callback();
                }
            }
            
            return {
                formCustom: {
                    passwd: '',
                    names:''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    names: [
                        { validator: validateNames, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo{

  }
</style>