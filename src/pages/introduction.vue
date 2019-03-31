<template>
    <div class="ui-content">
        <div class="introduction-box">
            <div class="desc-box">
                <img class="desc-right" src="../assets/img/team.png"/>
                <div class="desc-left">
                    <h2>主创</h2>
                    <p class="desc-p">
                        莲鲤致力于新创品牌商业零售空间设计与策略，自然更加频繁地与之交集。因为它不
                        仅代表新的消费势力，也代表着新的发展趋势，致力于研究新消费势力，探索新发展
                        趋势，从品牌定位入手针对性空间设计。
                        深圳市建筑建材类行业协会联合党委第一书记胡捷，深圳市室内装饰行业协会会长/深
                        圳大学陈设艺术设计研究所所长侯佳彤，深圳市室内装饰行业协会党支部书记/居众装
                        饰集团运营总监陈子建等嘉宾与会，发表致辞，共同祝福峰会顺利召开。此外，活动
                        感谢聚设汇、瀚能设计师俱乐部、深圳商报、晶报、新浪家居、腾讯家居、太平洋家
                        居、设计邦等媒体对本届峰会的大力支持。
                    </p>
                    <p>
                        紧接着，深圳市室内装饰行业协会秘书长曾文健在会上从党建活动、学习交流、分支
                        机构、协会大奖，四大方面对协会2018年工作进行总结汇报，发布2019年工作计划。
                        2019年协会新增补九大副会长，以扁平化、多点化、精细化的运营思路，开辟家居、
                        软装、精装、别墅、消防等专业分支机构，提升协会的链接和服务作用。
                    </p>
                </div>
            </div>
            <div class="team-box">
                <h2>团队活动</h2>
                <ul>
                    <li @click="showHandle">
                        <img src="../assets/img/team-1.png"/>
                        <div class="team-bottom">
                            <h3>2019深圳时尚家居设计周发布会隆重召开</h3>
                            <span>2018.01.15</span>
                            <p>1月15日，由深圳市经济贸易和信息化委员会主办、深圳市家具行业协会和深圳时尚创意产业联盟协会、深圳市德赛展览公司承办、深圳家具研究开发院作为产业技术支持单位…</p>
                        </div>
                    </li>
                    <li @click="showHandle">
                        <img src="../assets/img/team-2.png"/>
                        <div class="team-bottom">
                            <h3>“新势能X新创变”深圳市室内装饰行业…</h3>
                            <span>2018.01.15</span>
                            <p>Shirli zamir 设计工作室近日为OTOMA 完成了办公室的室内设计，OTOMA是一家金融科技创业公司，办公室地址位于特拉维夫“midtown（市中心）”建筑物的21层。设计者从城市独特的都市景观与天际线中吸取灵感，通过一面三维立体的不对称通透隔断墙在工作空间中融入了办公室窗外建筑物的节奏感。</p>
                        </div>
                    </li>
                    <li @click="showHandle">
                        <img src="../assets/img/team-3.png"/>
                        <div class="team-bottom">
                            <h3>SCALES</h3>
                            <span>2018.01.15</span>
                            <p>SCALESは「成長をはかる物差し」をコンセプトに、物差しをモチーフにしたサイン計画です。エントランスには連続するRC柱を定規に見立て、9つの寸法単位（mm,cm,m,yard,feet,inch,寸,尺,間）の巨大なものさしを設置しました。この入り口で子どもたちは自分の身長を様々な単位で測る事ができ…</p>
                        </div>
                    </li>
                    <li @click="showHandle">
                        <img src="../assets/img/team-4.png"/>
                        <div class="team-bottom">
                            <h3>SCALES</h3>
                            <span>2018.01.15</span>
                            <p>SCALESは「成長をはかる物差し」をコンセプトに、物差しをモチーフにしたサイン計画です。エントランスには連続するRC柱を定規に見立て、9つの寸法単位（mm,cm,m,yard,feet,inch,寸,尺,間）の巨大なものさしを設置しました。この入り口で子どもたちは自分の身長を様々な単位で測る事ができ…</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div :class="['dialog-detail',{'dialog-show':dialogShow}]">
            <div class="dialog-detail-content">
                <div class="close" @click="closeHandle">×</div>
                <div class="dialog-detail-title">
                    <h2>2019深圳时尚家居设计周发布会隆重召开</h2>
                    <span>2018.01.15</span>
                </div>
                <div class="dialog-detail-desc">
                    <p>
                        1月15日，由深圳市经济贸易和信息化委员会主办、深圳市家具行业协会和深圳时尚创意产业联盟协会、深圳市德赛展览公司承办、深圳
                        家具研究开发院作为产业技术支持单位、赛德检测作为产品品质监控单位的2019深圳时尚家居设计周暨第34届深圳国际家具展（以下简
                        称“深圳展”）新闻发布会，在深圳市家具行业协会总部基地隆重召开。
                    </p>
                    <p>
                        深圳市经济贸易和信息化委员会副主任高林先生、深圳市家具行业协会主席侯克鹏先生、深圳时尚家居设计周总裁兼首席执行官 Jacob
                        Vogelsang、深圳市家具行业协会秘书长洪小惠女士、法国驻广州总领事馆文化教育合作处文化领事雷思涛先生、芬兰国家商务促进局南
                        中国区负责人史亚睿先生、瑞士文化基金会上海办公室负责人鲁昱熙女士、深圳时尚家居设计周创意总监Ms. Ana Rio等领导出席本次发布
                        会，就2019深圳时尚家居设计周的战略意义及总体规划进行详细介绍，共同拉开2019深圳时尚家居设计周的序幕。
                    </p>
                </div>
                <div class="dialog-detail-img">
                    <img src="../assets/img/team-detail.png"/>
                    <p>法国驻广州总领事馆文化教育合作处文化领事雷思涛先生宣布中法之约合作正式开始</p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data () {
            return {
                dialogShow:false,
            }
        },
        methods:{
            showHandle(){
                this.dialogShow = true;
            },
            closeHandle(){
                this.dialogShow = false;
            },
        },
    }
</script>

<style scoped>

</style>
