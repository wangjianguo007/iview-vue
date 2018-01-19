<template>
	<div class='logo'>
		<Row>
			<Col span='8' offset="6">
				<Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
			        <FormItem label="密码" prop="passwd">
			            <Input type="password" v-model="formCustom.passwd"></Input>
			        </FormItem>
			        <FormItem label="确认密码" prop="passwdCheck">
			            <Input type="password" v-model="formCustom.passwdCheck"></Input>
			        </FormItem>
			        <FormItem label="年龄" prop="age">
			            <Input type="text" v-model="formCustom.age" number></Input>
			        </FormItem>
			        <FormItem label="邮箱" prop="names">
			            <Input type="text" v-model="formCustom.names"></Input>
			        </FormItem>
			        <FormItem label="手机号" prop="iphon">
			            <Input type="text" v-model="formCustom.iphon"></Input>
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
        	let iphon=new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/)
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入您的密码'));
                }else if(!regex.test(value)){
                	callback(new Error('密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符'));
                } else {
                	/*为了和第二密码框做对应*/
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入您的密码'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次输入的密码不匹配'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('输入的年龄为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('年龄必须大于18'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            const validateNames = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                } else if (!names.test(value)) {
                    callback(new Error("请输入正确的邮箱如:'web.blue@jb51.net'"));
                } else {
                    callback();
                }
            };
            const validateiphon = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else if (!iphon.test(value)) {
                    callback(new Error("手机号不正确请从新输入"));
                } else {
                    callback();
                }
            }
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: '',
                    names:'',
                    iphon:''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ],
                    names: [
                        { validator: validateNames, trigger: 'blur' }
                    ],
                    iphon: [
                        { validator: validateiphon, trigger: 'blur' }
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