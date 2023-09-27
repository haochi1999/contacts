<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header flex middle">
                <span class="title">通讯录管理系统</span>
                <div class="flex fluid right">
                    <el-button class="logout" link type="primary" @click="handleLogout">退出登录</el-button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu class="menus"  
                        router   
                        active-text-color="#ffd04b"
                        background-color="#545c64"
                        text-color="#fff"
                        :default-active="activeMenu">
                        <el-menu-item index="dashboard">
                            <el-icon><DataLine /></el-icon>数据概览
                        </el-menu-item>
                        <el-menu-item index="contacts">
                            <el-icon><Collection /></el-icon>通讯录管理
                        </el-menu-item>
                        <el-menu-item index="person">
                            <el-icon><Phone /></el-icon>联系人管理
                        </el-menu-item>
                        <el-menu-item index="information">
                            <el-icon><UserFilled /></el-icon>个人信息管理
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import router from '../router'
import {ref, watch} from 'vue'

const activeMenu = ref('dashboard')

const handleLogout = () => {
    sessionStorage.removeItem('username')
    router.push({name: 'login'})
}

console.log()

watch(() => router.currentRoute.value.name, name => activeMenu.value = name, {immediate: true})
</script>

<style lang="scss">

.menus {
    width: 100%;
    height: 100vh;
}

.header {
    background-color: #444;
    height: 66px;
    .title {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin-left: 66px;
    }
    .logout {
        margin-right: 40px;
    }
}
</style>