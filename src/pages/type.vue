<template>
    <div>
        <div class="banner-box banner-box-2">
            <p><img src="../assets/img/type-text.png"/></p>
        </div>
        <div class="car-list">
            <div class="car-item" v-for="(item,index) in typeList" :key="index">
                <p><img src="../assets/img/6.png"></p>
                <p class="title">{{item.title}}<span><i></i>{{item.user}}</span></p>
                <p>{{item.type}}</p>
                <p>{{item.desc}}</p>
                <p class="price">&yen;{{item.dayPrice}}/1天</p>
                <p class="price">&yen;{{item.weekPrice}}/1周</p>
                <p class="price">&yen;{{item.monthPrice}}/1月</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                typeList:[
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                    {
                        src:'',
                        title:'法拉利',
                        user:'02',
                        type:'LAMBORGHINI HURACAN',
                        desc:'LP 580-2',
                        dayPrice:'8,800',
                        weekPrice:'58,800',
                        monthPrice:'208,800'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
