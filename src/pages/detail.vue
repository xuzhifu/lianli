<style>

</style>

<template>
    <div class="module-detail">
        <div class="ui-breadcrumb" flex="cross:center">
            <a class="cell-back"><i class="icon-back"></i>返回</a>
            <span>项目 <i class="icon-details"></i></span>
            <a>XXXXXXXXXXXXXXX</a>
        </div>

        <el-carousel :interval="400000" type="card" arrow="always" trigger="click">
            <el-carousel-item>
                <div class="cell-thumb" style="background-image:url(http://wakakay.com/images/swipe.png)"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="cell-thumb" style="background-image:url(http://wakakay.com/images/swipe.png)"></div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="cell-thumb" style="background-image:url(http://wakakay.com/images/swipe.png)"></div>
            </el-carousel-item>
        </el-carousel>

        <div class="ui-detail">
            <div class="ui-news">
                <h3>度心设计师严选定制装饰品牌体验店</h3>
                <p><span>义乌</span><span>2019-03-03</span></p>
                <div class="ui-content">
                    <p>度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店</p>
                    <p>度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店</p>
                    <p>度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店度心设计师严选定制装饰品牌体验店</p>
                </div>
            </div>

            <div class="ui-collapse-box">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="细节" name="1">
                        <ul>
                            <li v-for="item in productList" :key="item.id">
                                <div class="cell-thumb">
                                    <img :src="item.thumb" />
                                </div>
                            </li>
                        </ul>
                    </el-collapse-item>
                    <el-collapse-item title="相关项目" name="2">
                        <ul>
                            <li v-for="item in productList" :key="item.id">
                                <div class="cell-thumb">
                                    <img :src="item.thumb" />
                                </div>
                            </li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>

</template>

<script>
    import elCarousel from '../components/carousel'
    import elCarouselItem from '../components/carousel-item'

    export default {
        name: "detail",

        components:{
            elCarousel,
            elCarouselItem
        },

        data() {
            return {
                activeName: '2',
                productList: [
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-01.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-02.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-03.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-04.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-05.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-06.png'}
                ]
            };
        },

        methods: {

        }
    }
</script>
