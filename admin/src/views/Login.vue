<template>
    <div class="login container flex center middle">
        <el-card class="login-box">
            <div class="title flex full">登录</div>
            <el-form class="form" label-position="top" :model="loginForm" :rules="rules" ref="formRef">
                <el-form-item label="用户名：" prop="username">
                    <el-input v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="loginForm.password" type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn flex full" :loading="loginLoading" type="primary" @click="submitForm(formRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {qeuryUserInfo} from '../api'
import {ElMessage} from 'element-plus'
import router from '../router/index'

const formRef = ref()
const loginLoading = ref(false)
const loginForm = reactive({
    username: '',
    password: '',
})
const rules = reactive({
    username: [{required: true, message: '请填写用户名', trigger: 'blur'}],
    password: [{required: true, message: '请填写密码', trigger: 'blur'}],
})

const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate(async valid => {
        if (valid) {
            loginLoading.value = true
            try {
                await qeuryUserInfo(loginForm).then(resp => {
                    if (resp && resp.code === 200) {
                        ElMessage.success('登录成功')
                        sessionStorage.setItem('username', loginForm.username)
                        router.push({name: 'home'})
                    }
                })
            } finally {
                loginLoading.value = false
            }
        }
    })
}

</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url('../images/login-bg.jpg') no-repeat;
    background-size: 100% 100%;
    .login-box {
        width: 360px;
        .form {
            margin-top: 20px;
        }

        .login-btn {
            margin-top: 10px;
        }
    }
    .title {
        font-size: 16px;
        font-weight: bold;
    }
}

</style>