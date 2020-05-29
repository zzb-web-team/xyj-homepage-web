<template>
<div class="income">
    <headers></headers>
    <div class="income_con">
        <div class="banner">
            <div class="my_come_text">{{$t("param.banner1_nav1")}}</div>

        </div>
        <div class="income_text">
            <div class="item_top">
                <div class="text">
                    <div class="h2">{{$t("param.banner1_nav2")}}</div>
                    <div class="text_con">{{$t("param.banner1_nav3")}}</div>
                </div>
            </div>
            <div class="item_top_middle">
                <div class="item_h2">{{$t("param.banner2_nav1")}}</div>
                <div class="item_p">
                    <p> {{$t("param.banner2_nav2")}}</p>

                    <p>{{$t("param.banner2_nav3")}}</p>
                </div>
                <div class="item_img">
                    <img src="../../assets/images/pc_income_01.png" alt="">
                </div>
            </div>
        </div>
        <div class="income_text1">
            <div class="item_con">
                <div class="item_con_l">
                    <div class="h2">{{$t("param.banner3_nav1")}}</div>
                    <div class="item_l" style=" text-indent: 60px;width: 520px;">{{$t("param.banner3_nav2")}}</div>
                </div>
                <div class="item_con_r">
                    <img src="../../assets/images/pc_income_02.png" alt="">
                </div>
            </div>
        </div>
        <div class="income_text2">
            <div class="item_con">
                <div class="item_con_r">
                    <img src="../../assets/images/pc_income_03.png" alt="">
                </div>
                <div class="item_con_l" style="margin-left: 120px;">
                    <div class="h2">{{$t("param.banner4_nav1")}}</div>
                    <div class="item_l" style="width: 588px;text-indent: 60px;">{{$t("param.banner4_nav2")}}</div>
                </div>

            </div>

        </div>
        <div class="income_text3">
            <div class="item_con">
                <div class="item_con_l">
                    <div class="h2">{{$t("param.banner5_nav1")}}</div>
                    <div class="item_l" style=" text-indent: 50px;">{{$t("param.banner5_nav2")}}</div>
                </div>

            </div>

        </div>
    </div>
    <footers></footers>
</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
export default {
    data() {
        return {

        }
    },

    components: {
        headers: headers,
        footers: footers
    }

}
</script>

<style lang="less">
.income_con {
    width: 100%;
    height: auto;
    overflow: hidden;

    .banner {
        background: url(../../assets/images/myincome.jpg) no-repeat center;
        width: 100%;
        height: 676px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        .my_come_text{
            font-size: 90px;
            color: #000000;
            font-weight: 400;
        }
      
    }

    .income_text {
        height: auto;
        width: 100%;
        // background: #F9F9F9;

        .item_top {
            width: 1200px;
            height: 210px;
            background: #F9F9F9;
            box-shadow: 0px 4px 70px 0px rgba(40, 32, 25, 0.1);
            margin: 0 auto;
            overflow: hidden;
            margin-top: -120px;
            z-index: 10000;

            .h2 {
                color: #000000;
                font-size: 32px;
                margin-top: 30px;
            }

            .text {
                width: 1000px;
                height: auto;
                overflow: hidden;
                margin: 0 auto;

                .text_con {
                    color: #5C5C5C;
                    font-size: 24px;
                    margin-top: 25px;
                    line-height: 40px;
                }

            }
        }

        .item_top_middle {
            width: 1200px;
            height: auto;
            overflow: hidden;
            margin: 0 auto;
            text-align: center;
           // background: #F9F9F9;

            .item_h2 {
                color: #000000;
                font-size: 32px;
                margin-top: 140px;

            }

            .item_p {
                color: #3F3F3F;
                font-size: 24px;

                p {
                    margin-top: 50px;
                    line-height: 50px;
                }
            }

            .item_img {
                margin-top: 70px;
            }

        }
    }

    .income_text1 {
        width: 100%;
        height: auto;
        overflow: hidden;

        //  background: #ffffff;
        .item_con {
            width: 1200px;
            height: auto;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 180px;
            margin-bottom: 160px;

            .item_con_l {

                .h2 {
                    color: #000000;
                    font-size: 32px;
                }

                .item_l {
                    margin-top: 50px;
                    color: #808080;
                    font-size: 24px;
                    line-height: 45px;
                }
            }
        }

    }

    .income_text2 {
        width: 100%;
        height: auto;
        overflow: hidden;
        background: #F9F9F9;

        .item_con {
            width: 1000px;
            height: auto;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 180px;
            margin-bottom: 160px;

            .item_con_l {
                margin-left: 150px;
                .h2 {
                    color: #000000;
                    font-size: 32px;
                }

                .item_l {
                    margin-top: 50px;
                    color: #808080;
                    font-size: 24px;
                    line-height: 45px;
                }
            }
        }

    }
    .income_text3{
        width: 100%;
        height: 280px;
        background: #ffffff;
        .item_con{
            width: 1200px;
            height: auto;
            overflow: hidden;
            margin:0 auto;
            .h2{
                color: #000000;
                font-size: 30px;
                margin-top: 60px;

            }
            .item_l{
                color: #808080;
                font-size: 22px;
                margin-top: 20px;
            }
        }
    }
}
</style>
