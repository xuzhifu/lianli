<template>
    <div>
        <div class="my-header">
            <div class="my-header-box">
                <div class="logo">
                    <router-link to="/index" v-if="showLogo" class="logo-mob"><img src="../assets/img/logo.png" /></router-link>
                    <router-link to="/index" class="logo-pc"><img src="../assets/img/logo.png" /></router-link>
                    <!--<span class="cell-menu-btn" @click="showMenu=!showMenu" v-if="!showMenu"><i class="icon-menu"></i></span>
                    <span class="cell-menu-btn" @click="showMenu=!showMenu" v-if="showMenu"><i class="icon-close"></i></span>-->
                    <span class="cell-menu-btn" @click="showMenu=!showMenu;showLogo=!showLogo" v-if="!showMenu">
                    <img src="../assets/img/icon-menu.png"/>
                </span>
                    <span class="cell-menu-btn" @click="showMenu=!showMenu;showLogo=!showLogo" v-if="showMenu">
                    <img src="../assets/img/icon-close.png"/>
                </span>
                </div>

                <div :class="['menu-box',{'active':showMenu}]">
                    <ul @click="showMenu=!showMenu;showLogo=!showLogo">
                        <li><router-link exact to="/index"><img class="menu-1" src="../assets/img/menu-1.png"/>项目</router-link></li>
                        <li><router-link exact to="/introduction"><img class="menu-2" src="../assets/img/menu-2.png"/>莲鲤</router-link></li>
                        <li><router-link exact to="/contact"><img class="menu-3" src="../assets/img/menu-3.png"/>联系</router-link></li>
                    </ul>
                    <img class="logo-2" src="../assets/img/logo2.png" />
                </div>
            </div>
        </div>
        <div class="fixed-mob"></div>
        <div class="menu-desc" v-if="$route.meta!='首页'"><span>{{$route.meta}}</span></div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                showMenu:false,
                showLogo:true,
            }
        },
    }
</script>

<style scoped>

</style>
