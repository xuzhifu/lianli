
<template>
    <div class="module-detail">
        <div class="ui-breadcrumb" flex="cross:center">
            <a class="cell-back" @click="$router.go(-1)"><i class="icon-back"></i>返回</a>
            <span>项目 <i class="icon-details"></i></span>
            <a>XXXXXXXXXXXXXXX</a>
        </div>

        <el-carousel :height="swipeHeight" :interval="interval" type="card" arrow="always"  trigger="click">
            <el-carousel-item v-for="(item, index) in swipeList" :key="index">
                <div class="cell-thumb" :style="'background-image:url('+ item.url +')'"></div>
            </el-carousel-item>
        </el-carousel>

        <div class="ui-swipe" :style="'height:'+swipeHeight" :auto="interval">
            <mt-swipe>
                <mt-swipe-item v-for="(item, index) in swipeList" :key="index">
                    <div class="cell-thumb" :style="'background-image:url('+ item.url +')'"></div>
                </mt-swipe-item>
            </mt-swipe>
        </div>


        <div class="ui-detail">
            <div class="ui-news">
                <h3>度心设计师严选定制装饰品牌体验店</h3>
                <p><span>义乌</span><span>2019-03-03</span></p>
                <div class="ui-content-box">
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
                isPc: () => {
                    let userAgentInfo = navigator.userAgent;
                    let Agents = ["Android", "iPhone",
                        "SymbianOS", "Windows Phone",
                        "iPad", "iPod"];
                    let flag = true;
                    for (var v = 0; v < Agents.length; v++) {
                        if (userAgentInfo.indexOf(Agents[v]) > 0) {
                            flag = false;
                            break;
                        }
                    }
                    return flag;
                },
                interval: 5000, // 轮番图自动播播放的间隔时间
                activeName: '2',
                swipeHeight: '0px',
                swipeList: [
                    {url: 'https://lotus-carp.com/images/201945031978.jpg'},
                    {url: 'https://lotus-carp.com/images/201945031220.jpg'},
                    {url: 'https://lotus-carp.com/images/201945031906.jpg'},
                    {url: 'https://lotus-carp.com/images/201945031355.jpg'},
                    {url: 'https://lotus-carp.com/images/20194503165.jpg'}
                ],
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

        mounted() {
            let self = this
            self.__preload()
        },

        methods: {
            __preload() {
                let self = this
                let count = self.swipeList.length
                let imagesInfo = []

                for (let img of self.swipeList) {
                    let image = new Image()
                    image.src = img.url
                    image.onload = (info) => {
                        imagesInfo.push({
                            width: info.path[0].width,
                            height: info.path[0].height
                        })
                        count--
                        if(!count) {
                            let max = _.max(imagesInfo, (item) => {
                                return item.width;
                            })

                            if (!self.isPc()) {
                                self.swipeHeight = Math.ceil((window.innerWidth / max.width) * max.height) + 'px'
                            } else {
                                self.swipeHeight = Math.ceil((window.innerWidth / 2 / max.width) * max.height) + 'px'
                            }
                        }
                    }
                }
            }
        }
    }
</script>
