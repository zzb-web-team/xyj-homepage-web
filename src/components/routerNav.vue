<template>
<div class="xy_header">
    <div class="xy_header_con">
        <div class="xy_logo">
            <img src="../assets/images/pc_logo.png" alt="" @click="golink4()">
        </div>
        <div class="nav_router">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="../assets/images/timg1.png" alt="" width="50" height="50" style="cursor: pointer;">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item icon="el-icon-plus" @click.native="golink()">我的收益</el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting" @click.native="golink1()">西柚机管理</el-dropdown-item>
                <el-dropdown-item icon="el-icon-user-solid" @click.native="golink2()">个人中心</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-release" @click.native="golink3()">退出登录</el-dropdown-item> -->
                    <el-dropdown-item @click.native="golink()">{{$t("routerNav.item_nav1")}}</el-dropdown-item>
                    <el-dropdown-item @click.native="golink1()">{{$t("routerNav.item_nav2")}}</el-dropdown-item>
                    <el-dropdown-item @click.native="golink2()">{{$t("routerNav.item_nav3")}}</el-dropdown-item>
                    <el-dropdown-item @click.native="golink3()">{{$t("routerNav.item_nav4")}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</div>
</template>

<script>
import {
    logout
} from '../common/js/api.js'
export default {
    data() {
        return {

        }
    },
    mounted: function () {
        this.$i18n.locale = localStorage.getItem('langActive')
        if (this.$i18n.locale == null) {
            this.$i18n.locale = "zh"
        }

    },
    methods: {
        //路由跳转
        golink() {
            this.$router.push({
                path: "/myincome"
            })
        },
        golink1() {
            this.$router.push({
                path: "/management"
            })
        },
        golink2() {
            this.$router.push({
                path: "/userinfo"
            })
        },
        golink4() {
            this.$router.push({
                path: "/"
            })
        },
        golink3() {

            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.logout_type = 2

            logout(param).then(res => {
                if (res.status = -17) {
                    let loginStatus = ""
                    localStorage.setItem('loginStatus', loginStatus)
                    this.$router.push({
                        path: "/"
                    })
                } else if (res.status = 0) {
                    let loginStatus = ""
                    localStorage.setItem('loginStatus', loginStatus)
                    this.$router.push({
                        path: "/"
                    })
                }

            }).catch(error => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                }

            })

        },

    }
}
</script>

<style lang="less">
.management {
    .management_nav {
        width: 100%;
        height: 80px;
        background: #999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(242, 245, 247);

        // .nav_logo {
        //     height: 46px;
        //     width: 125px;
        //     float: left;
        //     background: url(../assets/images/logo.png)no-repeat center;
        //     margin-left: 27px;

        // }

        .nav_router {
            margin-right: 50px;
            cursor: pointer;

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
        width: 1150px;
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
            font-size: 0.18rem;
            margin-right: 30px;
            cursor: pointer;
        }
    }
}
</style>
