<template>
    <div class="my-header">
        <div class="my-header-box">
            <div class="logo">
                <router-link to="/"><img src="../assets/img/logo.png" alt="YISHENG" title="YISHENG" /></router-link>
                <span class="cell-menu-btn" @click="showMenu=!showMenu" v-if="!showMenu"><i class="iconfont icon-menu"></i></span>
                <span class="cell-menu-btn" @click="showMenu=!showMenu" v-if="showMenu"><i class="iconfont icon-close"></i></span>
            </div>

            <div :class="['menu-box',{'active':showMenu}]">
                <ul @click="showMenu=!showMenu">
                    <li><router-link exact to="/">首页</router-link></li>
                    <li><router-link exact to="/type">汽车种类</router-link></li>
                    <li><router-link exact to="/wedding">婚庆套餐</router-link></li>
                    <li><span>联系我们</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                showMenu:false,
            }
        },
    }
</script>

<style scoped>

</style>
