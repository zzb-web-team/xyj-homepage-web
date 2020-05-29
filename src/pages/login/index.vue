<template>
<div class="xy_con" id="comment4">
    <div class="xy_con_text">
        <div class="xy_header">
            <div class="xy_header_con">
                <div class="xy_logo">
                    <img src="../../assets/images/pc_logo.png" alt="">
                </div>
                <div class="xy_logo_nav">
                    <div class="item" @click="returnCom5">{{$t("index.hear_nav1")}}</div>
                    <div class="item item_active1" @click="returnCom">{{$t("index.hear_nav2")}}</div>
                    <div class="item" @click="returnCom7">{{$t("index.hear_nav3")}}</div>
                    <div class="item" @click="returnCom1">{{$t("index.hear_nav4")}}</div>
                    <div class="item" @click="returnCom4">{{$t("index.hear_nav5")}}</div>

                    <div class="item" @click="returnCom6">{{$t("index.hear_nav6")}}</div>
                    <div class="item" v-show="!loginStatus" @click="returnCom3">{{$t("index.hear_nav7")}}</div>
                    <div class="item item_active" v-show="loginStatus" @click="goUsercenter()">
                        <img src="../../assets/images/timg1.png" width="50" height="50">
                        <!-- <div>{{this.username}}</div> -->
                    </div>
                    <div class="item">
                        <el-dropdown trigger="click" @command="handleCommand">
                            <span class="el-dropdown-link">
                                {{nowlangActive}}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="zh">简体中文</el-dropdown-item>
                                <el-dropdown-item command="en">English</el-dropdown-item>

                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <!-- <headers></headers> -->
        <div class="buy_con">
            <div class="item_con">
                <div class="item_l">{{$t("index.buy_nav1")}}</div>
                <div class="item_r">
                    <div class="p1" @click="goParam()">{{$t("index.buy_nav2")}}</div>
                    <div class="p2 active" @click="goBuying()">{{$t("index.buy_nav3")}}</div>
                </div>
            </div>
        </div>
        <div class="banner_con">
            <div class="banner_con_item">
                <div class="item_con">
                    <div class="item_p  item_p_active1">
                        <p class="p1"> {{$t("index.banner1_nav1")}}</p>
                        <p class="p2"> {{$t("index.banner1_nav2")}}</p>
                        <p class="p3"> {{$t("index.banner1_nav3")}}</p>
                    </div>

                </div>
            </div>
            <div class="banner_con_item1" id="comment">
                <div class="item_con">
                    <div class="item_h"> {{$t("index.banner2_nav1")}}</div>
                    <div class="item_text item_text_active1">
                        <p>{{$t("index.banner2_nav2")}}</p>
                        <p>{{$t("index.banner2_nav3")}}</p>
                        <p>{{$t("index.banner2_nav4")}}</p>
                        <P>{{$t("index.banner2_nav5")}}</p>

                    </div>
                </div>
            </div>
            <div class="banner_con_item2">
                <div id="my_video_icon"><img src="../../assets/images/play_icon1.png" alt="" @click="dialogVisible = true"></div>
            </div>
            <div class="banner_con_item3">
                <div class="item_con">
                    <div class="item_p">

                        <div class="item_h">{{$t("index.banner3_nav1")}}</div>
                        <div class="item_text">
                            <p>{{$t("index.banner3_nav2")}} </p>
                            <p>{{$t("index.banner3_nav3")}}</p>
                            <p>{{$t("index.banner3_nav4")}}</p>
                            <P>{{$t("index.banner3_nav5")}}</p>

                        </div>

                    </div>
                </div>

            </div>
            <div class="banner_con_item5">
                <div class="item_con">
                    <div class="item_p">
                        <div class="item_h">{{$t("index.banner4_nav1")}}</div>
                        <div class="item_text">
                            <p>{{$t("index.banner4_nav2")}}</p>
                            <p>{{$t("index.banner4_nav3")}}</p>
                            <p>{{$t("index.banner4_nav4")}}</p>
                            <P>{{$t("index.banner4_nav5")}}</p>
                            <p class="active"><a href="#" style="font-weight: bold" @click="goIncome()">{{$t("index.banner4_nav6")}}</a></p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="banner_con_item4">
                <div class="item_con">
                    <div class="item_p">
                        <div class="item_h">{{$t("index.banner5_nav1")}}</div>
                        <div class="item_text">
                            <p>{{$t("index.banner5_nav1")}}</p>
                            <p>{{$t("index.banner5_nav2")}}</p>
                            <p>{{$t("index.banner5_nav3")}}</p>
                            <P>{{$t("index.banner5_nav4")}}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class=" banner_con_item6" id="banner_con_item6">
                <div class="item_con">
                    <div class="item_p">
                        <div class="item_h">{{$t("index.banner6_nav1")}}</div>
                        <div class="item_text">
                            <p>{{$t("index.banner6_nav2")}}</p>
                            <p>{{$t("index.banner6_nav3")}}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div class="banner_con_item7" id="comment1">
                <div class="item_con">
                    <div class="item_p">
                        <div class="item_h">{{$t("index.banner7_nav1")}}</div>
                        <div class="item_text">
                            <p>{{$t("index.banner7_nav2")}}</p>
                            <p>{{$t("index.banner7_nav3")}}</p>
                        </div>
                        <div class="code">
                            <div class="code_l">
                                <img src="../../assets/images/xy_pc_bg08.png" alt="" v-if="iponestatus">
                                <img src="../../assets/images/code_01.png" alt="" v-if="androidstatus">

                            </div>
                            <div class="code_r" style="margin-left:50px;">
                                <div class="code_r_con" v-bind:class="{ active22: androidstatus }">
                                    <p> <img src="../../assets/images/ios-icon1.png" alt="" v-if="androidstatus"></p>
                                    <p> <img src="../../assets/images/ios-icon.png" alt="" v-if="iponestatus"></p>
                                    <p class="p_text" @click="changecode()">{{$t("index.banner7_nav4")}}</P>
                                </div>
                                <div class="code_r_con" v-bind:class="{ active11: iponestatus }">
                                    <p> <img v-if="androidstatus" src="../../assets/images/android-icon1.png" alt=""></p>
                                    <p> <img v-if="iponestatus" src="../../assets/images/android-icon.png" alt=""></p>
                                    <p class="p_text" @click="changecode1()">{{$t("index.banner7_nav5")}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        <div id="comment3">
            <footers></footers>
        </div>

    </div>
    <el-dialog :visible.sync="dialogVisible" id="my_dialog">
        <div class="video_con">
            <video width="100%" height="100%" controls>
                <source src="../../assets/images/test.mp4" type="video/mp4">

            </video>
        </div>
    </el-dialog>

</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
export default {
    data() {
        return {
            _dom: "",

            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: false,
            loginStatus: false,
            username: "",
            dialogVisible: false,
            iponestatus: true,
            androidstatus: false,
            nowlangActive: "简体中文"

        };
    },
    created: function () {
        this.$nextTick(() => {
            this.getlocal()
        })
    },
    mounted: function () {

        this.nowlangActive = localStorage.getItem('nowlangActive')
        if (this.nowlangActive == null) {
            this.nowlangActive = "简体中文"
        }
        this.$i18n.locale = localStorage.getItem('langActive')
        if (this.$i18n.locale == null) {
            this.$i18n.locale = "zh"
        }

        let that = this;
        that.$nextTick(function () {
            window.addEventListener('scroll', that.handleScroll)
        })

        window.addEventListener('scroll', this.handleScroll, true)

        $(function () {
            $(".xy_con .banner_con .banner_con_item .item_con .item_p p").addClass("item_p1_active1")

        })
        this.loginStatus = localStorage.getItem('loginStatus')
        if (this.loginStatus == null) {
            this.loginStatus = false
        }
        this.username = localStorage.getItem('nowusername')
        this.$forceUpdate()

    },
    methods: {
        //选择语言
        handleCommand(command) {
            console.log(command)
            let langActive = command
            localStorage.setItem('langActive', langActive)
            //langActive = this.$i18n.locale === 'zh' ? 'en' : 'zh'
            // this.$i18n.locale = langActive
            if (langActive == "zh") {
                this.nowlangActive = "简体中文"
                localStorage.setItem('nowlangActive', this.nowlangActive)

            } else {
                this.nowlangActive = "English"
                localStorage.setItem('nowlangActive', this.nowlangActive)

            }
            this.$i18n.locale = langActive

        },
        lang(locale) {

            // this.msg = this.$t('common.msg')
        },
        changecode() {
            this.iponestatus = false
            this.androidstatus = true
        },
        changecode1() {
            this.iponestatus = true
            this.androidstatus = false
        },
        handleScroll(e) {
            // console.log(e.target.scrollTop)

            if (e.target.scrollTop >= 900) {
                // .ification .colors0 img .ification .colors0 .dis
                $(".xy_con .banner_con .banner_con_item1 .item_h").addClass("item_h_active1");
                $(".xy_con .banner_con .banner_con_item1 .item_text p").addClass("new_active1");

                // $(".ification .colors0 .dis").css("margin-right", "0");
            } else {
                $(".xy_con .banner_con .banner_con_item1 .item_h").removeClass("item_h_active1");
                $(".xy_con .banner_con .banner_con_item1 .item_text p").removeClass("new_active1");

            }
            if (e.target.scrollTop >= 2300) {
                $(".xy_con .banner_con .banner_con_item3 .item_con .item_p").addClass("new_active2");

            } else {
                $(".xy_con .banner_con .banner_con_item3 .item_con .item_p").removeClass("new_active2");

            }
            if (e.target.scrollTop >= 3500) {
                //$(".xy_con .banner_con .banner_con_item1 .item_text p").addClass("new_active1");
                $(".xy_con .banner_con .banner_con_item5 .item_con .item_p").addClass("new_active5");

            } else {
                //$(".xy_con .banner_con .banner_con_item1 .item_text p").removeClass("new_active1");
                $(".xy_con .banner_con .banner_con_item5 .item_con .item_p").removeClass("new_active5");

            }
            if (e.target.scrollTop >= 4100) {
                $(".xy_con .banner_con .banner_con_item4 .item_con .item_p").addClass("new_active4");

            } else {
                $(".xy_con .banner_con .banner_con_item4 .item_con .item_p").removeClass("new_active4");

            }
            if (e.target.scrollTop >= 5300) {
                $(".xy_con .banner_con .banner_con_item6 .item_con .item_p").addClass("new_active5");

            } else {
                $(".xy_con .banner_con .banner_con_item6 .item_con .item_p").removeClass("new_active5");

            }
            if (e.target.scrollTop >= 6500) {
                $(".xy_con .banner_con .banner_con_item7 .item_con .item_p").addClass("new_active7");

            } else {
                $(".xy_con .banner_con .banner_con_item7 .item_con .item_p").removeClass("new_active7");

            }
        },
        playClick() {
            this._dom = document.getElementById('myvideo');
            this.isPlay = !this.isPlay;
            this._dom.play();
        },
        closeSoundClick() {
            this.isMute = !this.isMute;
            if (this.isMute) {
                this.muteStatus = '';
            } else {
                this.muteStatus = 'muted';
            }
        },
        goUsercenter() {
            this.$router.push({
                path: "/management"
            })

        },

        returnCom() {
            const returnEle = document.querySelector("#comment");
            if (!!returnEle) {
                returnEle.scrollIntoView(true);
            }
        },
        returnCom1() {
            const returnEle = document.querySelector("#comment1");
            if (!!returnEle) {
                returnEle.scrollIntoView(true);
            }
        },
        returnCom6() {
            const returnEle = document.querySelector("#comment3");
            if (!!returnEle) {
                returnEle.scrollIntoView(true);
            }
        },
        returnCom2() {
            this.$router.push({
                path: "/problem"
            })
        },
        returnCom3() {
            this.$router.push({
                path: "/loginactive"
            })
        },
        goParam() {
            this.$router.push({
                path: "/parameter"
            })
        },
        returnCom4() {
            this.$router.push({
                path: "/param"
            })
        },
        returnCom5() {
            this.$router.push({
                path: "/"
            })
        },
        goIncome() {
            this.$router.push({
                path: "/param"
            })
        },
        goBuying() {
            this.$router.push({
                path: "/buying"

            })
        },
        returnCom7() {
            this.$router.push({
                path: "/promotion"

            })

        },
        getlocal() {
            //找到锚点id

            let selectId = localStorage.getItem("toId");
            let toElement = document.getElementById(selectId);
            if (toElement == null) {
                return false;
            }
            //如果对应id存在，就跳转
            if (selectId) {
                toElement.scrollIntoView()
            }
        },

    },
    //   destroyed() {
    //         localStorage.setItem("toId", '')
    //     },
    components: {
        headers: headers,
        footers: footers
    }
};
</script>

<style lang="less" scoped>
.el-dialog__wrapper {
    background: #000000;

}

.el-dialog__body {
    padding: 0px !important;
    padding-top: 20px !important;
}

#my_dialog {
    width: 100%;
    height: 100%;

}

.el-dialog {
    width: 100%;
}

.video_con {
    width: 100%;
    height: 100%;
}

.publicbetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.xy_con {
    width: 100%;
    height: 100%;
    overflow: auto;
    text-align: center;

    .xy_con_text {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

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

    .banner_con {
        width: 100%;
        height: auto;
        overflow: hidden;

        .banner_con_item {
            width: 100%;
            height: 1012px;
            background: url(../../assets/images/xy_pc_bg01.jpg) no-repeat center;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {
                    float: left;
                    text-align: left;
                    //  opacity: 0;
                    //    margin-left: -600px;

                    .p1 {
                        color: #000000;
                        font-size: 96px;
                        margin-top: 200px;
                        margin-left: -400px;
                        transition: 1s all ease-in;
                        opacity: 0;
                        font-size: 68px;

                    }

                    .p2 {
                        color: #444445;
                        font-size: 34px;
                        margin-top: 50px;
                        margin-left: -400px;
                        opacity: 0;
                        transition: 1s all ease-in;
                        font-weight: 100;

                    }

                    .p3 {
                        color: #000000;
                        font-size: 60px;
                        margin-top: 90px;
                        margin-left: -400px;
                        opacity: 0;
                        transition: 1s all ease-in;

                    }

                    // &.item_p_active1{

                    // }
                }

            }

        }

        .banner_con_item1 {
            width: 100%;
            height: 625px;
            background: #ffffff;
            overflow: hidden;

            .item_h {
                color: #010101;
                font-size: 48px;
                margin-top: 0px;
                transition: 1s all ease-in;
                opacity: 0;
            }

            .item_text {
                margin-top: 70px;

                p {
                    color: #444445;
                    font-size: 30px;
                    margin-top: 10px;
                    opacity: 0;
                    transition: 1s all ease-in;
                    font-weight: 100;
                }
            }
        }

        .banner_con_item2 {
            width: 1920px;
            height: 733px;
            background: #b1bdd1 url(../../assets/images/xy_pc_bg02.jpg) no-repeat center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;

            .my_video_icon {
                cursor: pointer;
            }

        }

        .banner_con_item3 {
            width: 100%;
            height: 1190px;
            background: url(../../assets/images/xy_pc_bg03.jpg) no-repeat center;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {
                    float: right;
                    text-align: left;
                    margin-right: -300px;
                    transition: 1s all ease-in;
                    opacity: 0;

                    .item_h {
                        color: #000000;
                        font-size: 48px;
                        margin-top: 165px;
                        //margin-right: 200px;
                    }

                    .item_text {
                        margin-top: 60px;

                        p {
                            color: #444445;
                            font-size: 30px;
                            margin-top: 15px;
                            font-weight: 100;
                        }
                    }
                }
            }

        }

        .banner_con_item5 {
            width: 100%;
            height: 1194px;
            background: url(../../assets/images/xy_pc_bg05.jpg) no-repeat center;
            overflow: hidden;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {
                    // float: right;
                    // text-align: left;
                    // margin-right: -300px;
                    transition: 1s all ease-in;
                    opacity: 0;
                    margin: 0 auto;
                    overflow: hidden;

                    .item_h {
                        color: #000000;
                        font-size: 48px;
                        margin-top: 0px;
                        overflow: hidden;
                    }

                    .item_text {
                        margin-top: 60px;

                        p {
                            color: #444445;
                            font-size: 30px;
                            margin-top: 15px;
                            font-weight: 100;

                            &.active {
                                margin-top: 30px;

                                a {
                                    font-size: 24px;
                                    color: #383838;
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }

        }

        .banner_con_item4 {
            width: 100%;
            height: 936px;
            background: url(../../assets/images/xy_pc_bg04.jpg) no-repeat center;
            overflow: hidden;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {
                    float: left;
                    text-align: left;
                    margin-left: -300px;
                    transition: 1s all ease-in;
                    opacity: 0;

                    .item_h {
                        color: #000000;
                        font-size: 48px;
                        margin-top: 165px;
                    }

                    .item_text {
                        margin-top: 60px;

                        p {
                            color: #444445;
                            font-size: 30px;
                            margin-top: 15px;
                            font-weight: 100;
                        }
                    }
                }
            }

        }

        .banner_con_item6 {
            width: 100%;
            height: 1140px;
            background: url(../../assets/images/bg_06_active.jpg) no-repeat center;
            overflow: hidden;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {
                    // float: right;

                    // text-align: center;

                    transition: 1s all ease-in;
                    opacity: 0;
                    margin: 0 auto;

                    .item_h {
                        color: #000000;
                        font-size: 48px;
                        margin-top: 10px;
                    }

                    .item_text {
                        margin-top: 60px;

                        p {
                            color: #444445;
                            font-size: 30px;
                            margin-top: 15px;
                            font-weight: 100;
                        }
                    }
                }
            }

        }

        .banner_con_item7 {
            width: 100%;
            height: 1036px;
            background: url(../../assets/images/xy_pc_bg07_active.png) no-repeat center;
            overflow: hidden;

            .item_con {
                width: 1150px;
                margin: 0 auto;

                .item_p {

                    float: left;
                    width: 580px;
                    text-align: left;
                    margin-left: -300px;
                    transition: 1s all ease-in;
                    opacity: 0;

                    .item_h {
                        color: #000000;
                        font-size: 48px;
                        margin-top: 260px;
                    }

                    .item_text {
                        margin-top: 50px;

                        p {
                            color: #444445;
                            font-size: 30px;
                            margin-top: 15px;
                            font-weight: 100;
                        }
                    }

                    .code {
                        margin-top: 90px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;

                        .code_r {
                            // display: flex;
                            // justify-content: space-between;
                            // align-items: flex-start;
                            // flex-direction: column;
                        }

                        .code_r_con {
                            width: 230px;
                            height: 60px;
                            border: 2px solid rgba(43, 43, 43, 1);
                            border-radius: 10px;
                            display: flex;
                            background: #ffffff;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            margin-top: 24px;

                            .p_text {
                                color: #000000;
                                font-size: 26px;
                            }
                        }

                        .active11 {
                            background: #000000;

                            .p_text {
                                color: #ffffff;
                                font-size: 26px;
                            }

                        }

                        .active22 {
                            background: #000000;

                            .p_text {
                                color: #ffffff;
                                font-size: 26px;
                            }

                        }
                    }
                }
            }

        }

    }

    .xy_footer {
        width: 7.5rem;
        height: 6.4rem;
        background: #242424;
        flex-direction: column;

        .item {
            width: 50%;
            height: auto;
            float: left;
            overflow: hidden;
            margin-top: 0.7rem;

            .item_h2 {
                font-size: 0.26rem;
                color: #808080;
                text-align: left;
                padding-left: 1rem;
                box-sizing: border-box;
            }

            .item_con {
                font-size: 0.2rem;
                color: #F7F7F7;
                text-align: left;
                padding-left: 1rem;
                box-sizing: border-box;
                font-weight: 100;
                margin-top: 0.1rem;

                .kf_button {
                    width: 1.87rem;
                    height: 0.55rem;
                    border: 1px solid rgba(206, 206, 206, 1);
                    color: #FFFFFF;
                    border-radius: 27px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    cursor: pointer;

                    img {
                        width: 0.44rem;
                        height: 0.44rem;
                    }
                }
            }

        }
    }
}

.publicbetween {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.xy_header {
    width: 100%;
    height: 80px;
    background: rgba(36, 36, 36, 1);

    .xy_header_con {
        width: 1340px;
        height: 80px;
        margin: 0 auto;
        .publicbetween;
    }

    .xy_logo {
        cursor: pointer;
    }

    .xy_logo_nav {
        .publicbetween;

        .item {
            color: #D9D9D9;
            font-size: 18px;
            margin-right: 30px;
            cursor: pointer;

        }

        .item_active {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            img {
                margin-right: 10px;
            }
        }
    }
}

.item_p1_active1 {
    margin-left: 0px !important;
    //  opacity: 1;
    transition: 1s all ease-in;
    opacity: 1 !important;
}

.item_h_active1 {
    margin-top: 136px !important;
    transition: 1s all ease-in;
    opacity: 1 !important;
}

.new_active1 {
    transition: 1s all ease-in;
    opacity: 1 !important;
}

.new_active2 {
    transition: 1s all ease-in;
    opacity: 1 !important;
    margin-right: 0px !important;
}

.new_active3 {
    transition: 1s all ease-in;
    opacity: 1 !important;
    margin-right: 0px !important;
}

.new_active4 {
    transition: 1s all ease-in;
    opacity: 1 !important;
    margin-left: 0px !important;
}

.new_active5 {
    margin-top: 136px !important;
    transition: 1s all ease-in;
    opacity: 1 !important;
}

.new_active6 {
    transition: 1s all ease-in;
    opacity: 1 !important;
    margin-right: 0px !important;
}

.new_active7 {
    transition: 1s all ease-in;
    opacity: 1 !important;
    margin-left: 0px !important;
}
</style>
