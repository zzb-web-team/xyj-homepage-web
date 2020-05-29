<template>
<div class="xy_header">
    <div class="xy_header_con">
        <div class="xy_logo">
            <img src="../assets/images/pc_logo.png" alt="" @click="returnComactive3">
        </div>
        <div class="xy_logo_nav">
            <div class="item" @click="goto('/','comment4')">{{$t("index.hear_nav1")}}</div>
            <div class="item item_active1" @click="goto('/','comment')">{{$t("index.hear_nav2")}}</div>
            <div class="item" @click="returnCom7">{{$t("index.hear_nav3")}}</div>
            <div class="item" @click="goto('/','comment1')">{{$t("index.hear_nav4")}}</div>
            <div class="item" @click="returnComactive2">{{$t("index.hear_nav5")}}</div>
            <div class="item" @click="goto('/','comment3')">{{$t("index.hear_nav6")}}</div>
            <div class="item" v-show="!loginStatus" @click="returnComactive1">{{$t("index.hear_nav7")}}</div>
            <div class="item item_active" v-show="loginStatus" @click="goUsercenter()">
                <img src="../assets/images/timg1.png" width="50" height="50">
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
</template>

<script>
export default {
    data() {
        return {
            loginStatus: false,
            username: "",
            nowlangActive: "简体中文"

        }
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
        goto(page, selectId) {
            var path = page;
            var selectId = selectId;
            localStorage.setItem("toId", selectId);
            this.$router.push({
                path: path
            })
        },

        returnComactive() {

        },
        returnComactive3() {
            this.$router.push({
                path: '/'
            })
        },
        returnCom10() {
            this.$router.push({
                path: '/problem'
            })
        },
        returnComactive1() {
            this.$router.push({
                path: "/loginactive"
            })
        },
        returnComactive2() {
            this.$router.push({
                path: "/param"
            })
        },
        returnCom7() {
            this.$router.push({
                path: "/promotion"

            })

        },
        goUsercenter() {
            this.$router.push({
                path: "/management"

            })
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
