<template>
    <div id="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import myHeader from './components/myHeader'
    import myFooter from './components/myFooter'
    export default {
        components:{
            myHeader,
            myFooter
        },
    }
</script>

<style>

</style>
