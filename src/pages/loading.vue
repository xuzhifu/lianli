<template>
    <div class="ui-content">
        <div :class="['loading',{'fadeOut':fadeOut}]">
            <img class="loading-logo" src="../assets/img/logo.png"/>
            <img class="loading-logo2" src="../assets/img/logo2.png"/>
            <p>&nbsp;莲鲤文化传播有限公司</p>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                fadeOut:false,
            }
        },
        created(){
            this.fadeOut=true;
            setTimeout(item=>{this.$router.replace('/index')},2000)
        },
    }
</script>

<style scoped>

</style>
