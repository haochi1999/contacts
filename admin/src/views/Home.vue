<template>
    <div class="container">
        <div class="flex full no-wrap">
            <el-menu class="menus">
                <el-menu-item index="1">1管理</el-menu-item>
                <el-menu-item index="2">2管理</el-menu-item>
                <el-menu-item index="3">3管理</el-menu-item>
            </el-menu>
            <div class="content flex vertical">
                <div class="header flex middle">
                    <!-- <span class="title">通讯录管理系统</span> -->
                    <div class="flex fluid right">
                        <el-button class="logout" link type="primary" @click="handleLogout">退出登录</el-button>
                    </div>
                </div>
                <div class="window">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '../router'

const handleLogout = () => {
    sessionStorage.removeItem('username')
    router.push({name: 'login'})
}
</script>

<style lang="scss">

.menus {
    width: 120px;
    height: 100vh;
    background: #fff;
}

.content {
    width: 100%;
    height: 100vh;
    .header {
        height: 80px;
        background-color: #444;
        width: 100%;
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
    .window {
        flex: 1;
        width: 100%;
    }
}
</style>