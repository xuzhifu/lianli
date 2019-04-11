
<template>
    <div class="module-main">
        <div class="ui-nav" flex="main:justify show:visible">
            <div class="ui-title">项目</div>
            <div class="ui-select-list">
                <p flex="cross:center" @click="getShowSelect">选择年份</p>
                <ul v-show="isShowSelect">
                    <li flex="main:justify cross:center"
                        :class="{'is-select': item.isSelected}"
                        v-for="item in yearList" :key="item.id"
                        @click="getSelectYear(item)">
                        <span>{{item.value}}</span> <span></span>
                    </li>
                </ul>
            </div>
        </div>


        <div class="ui-main-banner">
            <div class="ui-container" flex="cross:center">
                <div>
                    <h3>度心设计师严选定制装饰品牌体验店</h3>
                    <P>义乌</P>
                    <p><router-link to="/detail">探索更多</router-link></p>
                </div>
            </div>
        </div>
        <div class="ui-sub-banner">
            <div class="ui-container" flex="cross:top">
                <div>
                    <h3>度心设计师严选定制装饰品牌体验店</h3>
                    <P>义乌</P>
                    <p><router-link to="/detail">探索更多</router-link></p>
                </div>
            </div>
        </div>
        <div class="ui-sub-banner">
            <div class="ui-container" flex="cross:top">
                <div>
                    <h3>度心设计师严选定制装饰品牌体验店</h3>
                    <P>义乌</P>
                    <p><router-link to="/detail">探索更多</router-link></p>
                </div>
            </div>
        </div>

        <div class="ui-product-list">
            <div class="ui-title">库</div>
            <ul>
                <li v-for="item in productList" :key="item.id">
                    <div class="ui-box">
                        <div class="cell-thumb">
                            <img :src="item.thumb" />
                        </div>
                        <div class="cell-title" flex="main:center cross:center">{{item.title}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div :class="['loading',{'fadeOut':fadeOut},{'show':show}]">
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
                show:false,
                fadeOut:false,
                isShowSelect: false,
                yearList: [
                    {value: 2019, isSelected: true},
                    {value: 2018, isSelected: false},
                    {value: 2017, isSelected: false},
                    {value: 2016, isSelected: false},
                    {value: 2015, isSelected: false},
                    {value: 2014, isSelected: false},
                    {value: 2013, isSelected: false},
                    {value: 2012, isSelected: false},
                    {value: 2011, isSelected: false},
                    {value: 2010, isSelected: false}
                ],
                productList: [
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-01.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-02.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-03.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-04.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-05.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-06.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-07.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-08.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-09.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-10.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-11.png'},
                    {title: '上品优喜台州星光耀广场店', thumb: 'http://wakakay.com/images/product-12.png'}
                ]
            }
        },
        created(){
            if(!window.sessionStorage.loading){
                this.fadeOut=true;
                window.sessionStorage.setItem('loading', true)
                setTimeout(()=>{
                    this.show=true;
                },3000)
            }else{
                this.show=true;
            }
        },
        methods: {
            getShowSelect(type) {
                let self = this
                self.isShowSelect = !self.isShowSelect
            },
            getSelectYear(item) {
                let self = this
                item.isSelected = !item.isSelected
            }
        }
    }
</script>

