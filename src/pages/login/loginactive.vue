<template>
<div class="login_active">
    <div class="login_active_text">
        <headers></headers>
        <div class="newlogin">
            <div class="problem_banner">
                <div class="login_con">
                    <div class="login_con_text">
                        <div class="item_l">
                            <p class="p1">{{$t("loginactive.item_nav1")}}</p>
                            <p class="p2">{{$t("loginactive.item_nav2")}}</p>
                        </div>
                        <div class="item_r">
                            <div class="item_r_con">
                                <div class="xy_login_h2">{{$t("loginactive.item_nav3")}}</div>
                                <div class="xy_input_item">
                                    <input type="text" :placeholder="$t('loginactive.item_nav4')" v-model="user_tel" maxlength="11">
                                </div>
                                <div class="xy_input_item">
                                    <input type="text" class="active" maxlength="6" :placeholder="$t('loginactive.item_nav5')" v-model="user_passwd">
                                    <div v-show="show" class="login_yzm" @click="getCode">{{$t("loginactive.item_nav6")}}</div>
                                    <div v-show="!show" class="login_yzm">{{count}} s</div>

                                </div>
                                <div class="xy_input_item">
                                    <div class="login_sumit" @click="goUsercenter()">{{$t("loginactive.item_nav7")}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>

    </div>
</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
import {
    get_code,
    login,
    get_user_info
} from '../../common/js/api.js'
export default {
    data() {
        return {
            activeNames: [],
            show: true,
            count: '',
            timer: null,
            user_tel: "",
            user_passwd: "",
            username: ""
        };
    },
    mountod: function () {},
    methods: {
        goUsercenter() {
            let param = new Object()
            param.user_passwd = this.user_passwd
            param.login_type = 2
            param.user_name = this.user_tel
            if (this.user_passwd == "") {
                this.$message({
                    message: this.$t('prompt.item_nav6'),
                    type: 'error'
                });
                return false;
            }
            login(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: this.$t('prompt.item_nav4'),
                        type: 'error'
                    });
                } else {

                    let loginStatus = true
                    let userToken = res.data.login_token

                    localStorage.setItem('userInfo', this.user_tel)
                    localStorage.setItem('loginStatus', loginStatus)
                    localStorage.setItem('userToken', userToken)
                    this.getuserInfo()

                    this.$router.push({
                        path: "/management"
                    })
                }

            }).catch(error => {

                this.$message({
                    message: this.$t('prompt.item_nav4'),
                    type: 'error'
                });

            })
        },
        getCode() {
            let param = new Object()
            param.user_tel = this.user_tel
            param.change_telnum_flag = 2,
                param.login_token = ""
            if (this.user_tel == "") {
                this.$message({
                    message: this.$t('prompt.item_nav5'),

                    type: 'error'
                });
                return false;
            }
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.user_tel))) {
                this.$message({
                    message: this.$t('prompt.item_nav5'),
                    type: 'error'
                });
                return false;
            }
            get_code(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: this.$t('prompt.item_nav4'),
                        type: 'error'
                    });
                } else {
                    const TIME_COUNT = 60;
                    if (!this.timer) {
                        this.count = TIME_COUNT;
                        this.show = false;
                        this.timer = setInterval(() => {
                            if (this.count > 0 && this.count <= TIME_COUNT) {
                                this.count--;
                            } else {
                                this.show = true;
                                clearInterval(this.timer);
                                this.timer = null;
                            }
                        }, 1000)
                    }
                }

            }).catch(error => {

                this.$message({
                    message: this.$t('prompt.item_nav4'),
                    type: 'error'
                });

            })

        },
        getuserInfo() {
            let param = new Object()
            let nowArr = ["user_name", "user_tel", "user_sex"]
            param.login_token = localStorage.getItem('userToken')
            param.login_type = 2
            param.col_name = nowArr

            get_user_info(param).then(res => {
                console.log(res)
                if (res.status != 0) {
                    this.$message({
                        message: this.$t('prompt.item_nav4'),
                        type: 'error'
                    });
                } else {
                    let nowusername = res.data.col_value[0]
                    localStorage.setItem('nowusername', nowusername)
                    let userToken = res.data.login_token
                    localStorage.setItem('userToken', userToken)

                }

            }).catch(error => {
                this.$message({
                    message: this.$t('prompt.item_nav4'),
                    type: 'error'
                });

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
.login_active {
    width: 100%;
    height: auto;
    margin: 0 auto;

    .login_active_text {
        width: 100%;
        height: auto;
        margin: 0 auto;

        .problem_banner {
            background: #bcc0d4 url(../../assets/images/pc_login.jpg) no-repeat center;
            width: 100%;
            height: 889px;

            overflow: hidden;

            .login_con {
                width: 1200px;
                height: auto;
                overflow: hidden;
                margin: 0 auto;
                margin-top: 200px;

                .login_con_text {
                    width: 1000px;
                    height: auto;
                    float: right;
                    display: flex;
                    justify-content: space-between;

                    .item_l {
                        width: 500px;

                        p {
                            color: #000000;
                            font-size: 72px;
                        }

                        .p2 {
                            color: #444445;
                            font-size: 36px;
                            margin-top: 45px;
                        }
                    }

                    .item_r {
                        width: 413px;
                        height: 351px;
                        background: rgba(255, 255, 255, 1);

                        .item_r_con {
                            width: 340px;
                            height: auto;
                            margin: 0 auto;

                            .xy_login_h2 {
                                color: #242424;
                                font-size: 30px;
                                text-align: center;
                                margin: 35px auto;

                            }

                            .xy_input_item {
                                width: 340px;
                                height: auto;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-top: 25px;

                                input {
                                    width: 338px;
                                    height: 45px;
                                    // border: none;
                                    border: 1px solid rgba(81, 81, 81, 1);
                                    // border-radius: 0.05rem;
                                    text-indent: 10px;
                                    font-size: 16px;

                                    &.active {
                                        width: 240px;
                                        border-right: none;
                                    }
                                }

                                .login_yzm {
                                    width: 108px;
                                    height: 45px;
                                    background: #515151;
                                    font-size: 16px;
                                    color: #ffffff;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    outline: 1px solid rgba(81, 81, 81, 1);
                                    cursor: pointer;
                                }

                                .login_sumit {
                                    width: 340px;
                                    height: 45px;
                                    background: #515151;
                                    font-size: 16px;
                                    color: #ffffff;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    cursor: pointer;
                                }

                            }
                        }
                    }
                }
            }
        }

    }

}
</style>
