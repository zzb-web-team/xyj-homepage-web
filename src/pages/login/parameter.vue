<template>
<div class="introduction">
    <headers></headers>
    <div class="buy_con">
        <div class="item_con">
            <div class="item_l">{{$t("index.buy_nav1")}}</div>
            <div class="item_r">
                <div class="p1" @click="goParam()">{{$t("index.buy_nav2")}}</div>
                <div class="p2 active" @click="goBuying()">{{$t("index.buy_nav3")}}</div>
            </div>
        </div>
    </div>
    <div class="parameter">
        <div class="item_con1">
            <div class="item_h2">{{$t("parameter.item_nav1")}}</div>
            <div class="item_img"><img src="../../assets/images/param_01.png" alt=""></div>
            <div class="item_xh">
                <div class="item_icon"></div>
                <div class="item_text">{{$t("parameter.item_nav2")}}</div>
            </div>
        </div>
        <div class="item_con2 item_con1">
            <div class="item_h2 active">{{$t("parameter.item1_nav1")}}</div>
            <div class="item_img">
                <div class="img_con" style="margin-top:20px;">
                    <div class="item_boador">
                        <p><img src="../../assets/images/cpu_icon1.png" alt=""></p>
                        <p class="text_active1">CPU</p>
                        <p class="text_active2">{{$t("parameter.item1_nav2")}}</p>
                    </div>
                    <div class="item_boador">
                        <p><img src="../../assets/images/cpu_icon1_01.png" alt=""></p>
                        <p class="text_active1">RAM</p>
                        <p class="text_active2">{{$t("parameter.item1_nav3")}}</p>
                    </div>
                    <div class="item_boador">
                        <p><img src="../../assets/images/cpu_icon1_02.png" alt=""></p>
                        <p class="text_active1">ROM</p>
                        <p class="text_active2">{{$t("parameter.item1_nav4")}}</p>
                    </div>
                </div>
                <div class="img_con">
                    <div class="item_boador">
                        <p><img src="../../assets/images/cpu_icon1_03.png" alt=""></p>
                        <p class="text_active1">GPU</p>
                        <p class="text_active2">{{$t("parameter.item1_nav4")}} </p>
                    </div>
                    <div class="item_boador">
                        <p><img src="../../assets/images/cpu_icon1_04.png" alt=""></p>
                        <p class="text_active1">HD</p>
                        <p class="text_active2">{{$t("parameter.item1_nav5")}}</p>
                    </div>
                    <div class="item_boador">
                        <p><img src="../../assets/images/hdmi_icon.png" alt=""></p>
                        <p class="text_active1">HDMI</p>
                        <p class="text_active2">{{$t("parameter.item1_nav6")}}</p>
                    </div>
                </div>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con1 item_con3 item_con2">
            <div class="item_h2">{{$t("parameter.item2_nav1")}}</div>
            <div class="item_img"><img src="../../assets/images/param_02active.png" alt=""></div>
            <div class="item_xh">
                <div class="item_text" style="white-space: nowrap;">{{$t("parameter.item2_nav2")}}1000g</div>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con1 item_con4 item_con2">
            <div class="item_h2">{{$t("parameter.item3_nav1")}}</div>
            <div class="item_img item_img_active">
                <div><img src="../../assets/images/param_03.png" alt=""></div>
                <div class="item_param">
                    <p>CPU<span>{{$t("parameter.item3_nav2")}}</span></p>
                    <p>GPU<span>Mali 450</span></p>
                    <p>RAM<span>2GB DDR3</span></p>

                </div>
            </div>

            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con5 item_con2">
            <div class="item_h2">{{$t("parameter.item4_nav1")}}</div>
            <div class="item_p">
                <p>RJ45x1<span>{{$t("parameter.item4_nav2")}}</span></p>
                <p>USB3.0 ×2<span>{{$t("parameter.item4_nav3")}}</span></p>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con5 item_con2">
            <div class="item_h2">{{$t("parameter.item5_nav1")}}</div>
            <div class="item_p">
                <p>{{$t("parameter.item5_nav2")}}<span>DC ∮5.5mm,12V/1.5A</span></p>
                <p>{{$t("parameter.item5_nav3")}}<span>{{$t("parameter.item5_nav4")}} </span></p>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con5 item_con2">
            <div class="item_h2">{{$t("parameter.item6_nav2")}}</div>
            <div class="item_p">
                <p>{{$t("parameter.item6_nav3")}}</p>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con5 item_con2">
            <div class="item_h2">{{$t("parameter.item7_nav1")}}</div>
            <div class="item_p">
                <p>Android7.1</p>
            </div>
            <div class="item_bottom">

            </div>
        </div>
        <div class="item_con5 ">
            <div class="item_h2">{{$t("parameter.item8_nav1")}}</div>
            <div class="item_p">
                <p>{{$t("index.banner1_nav3")}}</p>
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
        return {};
    },
    mountod: function () {},
    methods: {
        goParam() {
            this.$router.push({
                path: "/parameter"
            })
        },
        goBuying() {
            this.$router.push({
                path: "/buying"

            })
        }

    },
    components: {
        headers: headers,
        footers: footers
    }

};
</script>

<style lang="less" scoped>
.publicbetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.introduction {
    width: 100%;
    height: auto;
    overflow: hidden;

    .buy_con {
        width: 100%;

        height: 87px;
        background: rgba(250, 250, 250, 1);

        .item_con {
            width: 1150px;
            height: 87px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item_l {
                font-size: 30px;
                font-weight: bold;
                color: rgba(36, 36, 36, 1);
                line-height: 24px;
            }

            .item_r {
                color: #808080;
                font-size: 26px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                div {
                     margin-right: 50px;
                    cursor: pointer;
                    width: auto;
                    height: auto;
                    background: #ffffff;
                    border-radius: 22px;
                    font-size: 26px;
                    font-weight: bold;

                    line-height: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    margin-right: 50px;
                    padding: 10px;
                    overflow: hidden;

                    &:hover {
                        width: auto;
                        height: auto;
                        background: rgba(36, 36, 36, 1);
                        border-radius: 22px;
                        font-size: 26px;
                        font-weight: bold;
                        color: rgba(254, 254, 254, 1);
                        line-height: 24px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        margin-right: 50px;
                        padding: 10px;
                        overflow: hidden;

                    }
                }

            }
        }
    }
}

.parameter {
    width: 100%;
    height: auto;
    overflow: hidden;

    .item_con1 {
        width: 1150px;
        height: auto;
        margin: 0 auto;

        .item_bottom {
            width: 1150px;
            height: auto;
            background: rgba(144, 144, 144, 1);
            opacity: 0.5;
            margin: 0 auto;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;

        }

        .item_img {
            margin-bottom: 0.2rem;
            margin: 0 auto;
            text-align: center;

            img {
                // border: 1px dashed #999999;
            }

        }

        .item_h2 {
            color: #000000;

            font-size: 42px;
            margin: 0.5rem auto;
            margin-top: 50px;
            margin-bottom: 20px;

            &.active {
                font-size: 36px;
            }
        }

        .item_xh {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1.5rem;
            margin: 0 auto;
            margin-top: 30px;

            .item_icon {
                width: 0.39rem;
                height: 0.39rem;
                border: 1px solid rgba(100, 100, 100, 1);
                border-radius: 50%;
                background: #23221F;
            }

            .item_text {
                font-size: 0.24rem;
                font-weight: 400;
                color: rgba(128, 128, 128, 1);
            }
        }
    }

    .item_con2 {
        margin-top: 0.2rem;
        overflow: hidden;

        .item_img {
            .img_con {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 100px;
                margin-bottom: 100px;

                img {
                    width: 51px;
                    height: 51px;
                }

                .item_boador {
                    width: 204px;
                    height: 207px;
                    border: 1px solid rgba(128, 128, 128, 1);
                    border-radius: 0.04rem;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;

                    .text_active1 {
                        font-size: 28px;
                        margin-top: 30px;
                    }

                    .text_active2 {
                        font-size: 22px;
                    }
                }
            }
        }

        .item_bottom {
            width: 1150px;
            height: 1px;
            background: rgba(144, 144, 144, 1);
            opacity: 0.5;
            margin: 0 auto;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
        }
    }

    .item_con3 {
        .item_img {
            margin-bottom: 0.2rem;

            img {
                width: 509px;
                height: 449px;
            }

        }
    }

    .item_con4 {
        .item_img_active {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            .item_param {
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                align-items: flex-start;

                p {
                    margin-top: 50px;
                    color: #000000;
                    font-size: 30px;
                    margin-left: 90px;

                    span {
                        color: #808080;
                        margin-left: 40px;
                    }
                }
            }
        }
    }

    .item_con5 {
        width: 1150px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;

        .item_h2 {
            width: 1150px;
            color: #242424;
            font-size: 0.3rem;
            margin: 0.5rem 0rem;
            margin-bottom: 0px;

        }

        .item_p {
            width: 1150px;
            margin-bottom: 0.8rem;
            height: auto;
            overflow: hidden;

            p {

                color: #000000;
                font-size: 30px;
                margin-top: 30px;
                padding-left: 270px;

                span {
                    color: #808080;
                    margin-left: 0.2rem;

                }
            }
        }

        .item_bottom {
            width: 1150px;
            height: 1px;
            background: rgba(144, 144, 144, 1);
            opacity: 0.5;
            margin: 0 auto;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
        }
    }
}
</style>
