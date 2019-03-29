<template>
    <div>
        <div class="banner-box banner-box-3">
            <p><img src="../assets/img/wedding-text.png"/></p>
        </div>
        <div class="car-tab">
            <div class="tab-item" v-for="(item,index) in mealList" :key="index">
                <div class="tab-left">
                    <p class="title">套餐{{item.mealNum}}</p>
                    <p class="price">&yen;{{item.price}}</p>
                </div>
                <div class="tab-right">
                    <div class="car-info" v-for="(carInfoItem,carInfoIndex) in item.carInfo" :key="carInfoIndex">
                        <p>
                            <i>X{{carInfoItem.multiple}}</i>
                            <img src="../assets/img/25.png">
                        </p>
                        <p class="title">{{carInfoItem.title}}<span><i></i>{{carInfoItem.user}}</span></p>
                        <p>{{carInfoItem.type}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                mealList:[
                    {
                        mealNum:'01',
                        price:'26,888',
                        carInfo:[
                            {
                                multiple:1,
                                car:'',
                                title:'法拉利',
                                user:'01',
                                type:'LAMBORGHINI HURACAN'
                            },
                            {
                                multiple:1,
                                car:'',
                                title:'法拉利',
                                user:'01',
                                type:'LAMBORGHINI HURACAN'
                            },
                        ],
                    },
                    {
                        mealNum:'02',
                        price:'26,888',
                        carInfo:[
                            {
                                multiple:1,
                                car:'',
                                title:'法拉利',
                                user:'01',
                                type:'LAMBORGHINI HURACAN'
                            },
                            {
                                multiple:1,
                                car:'',
                                title:'法拉利',
                                user:'01',
                                type:'LAMBORGHINI HURACAN'
                            },
                        ],
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
