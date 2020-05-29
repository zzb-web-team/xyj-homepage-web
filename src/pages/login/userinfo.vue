<template>
<div class="management">
    <routerNav></routerNav>
    <div class="management_title">
        <el-row>
            <el-col :span="24">
                <div class="management_h1">{{$t("userinfo.item_nav1")}}</div>
            </el-col>
        </el-row>
    </div>
    <div class="userinfo">
        <el-row>
            <el-col :span="24">
                <div>
                    <div class="item">
                        <p>{{$t("userinfo.item_nav2")}}</p>
                        <p class="p1">{{username}}</p>
                    </div>
                    <div class="item">
                        <p>{{$t("userinfo.item_nav3")}}</p>
                        <p class="p1">{{usersex}}</p>
                    </div>
                    <div class="item">
                        <p>{{$t("userinfo.item_nav4")}}</p>
                        <p class="p1">{{usertel}}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

</div>
</template>

<script>
import echarts from 'echarts'
import routerNav from '../../components/routerNav'
import footers from '../../components/footer'
import {
    get_user_info
} from '../../common/js/api.js'

export default {
    components: {
        routerNav: routerNav,
        footers: footers
    },
    data() {
        return {
            username: "",
            usersex: "",
            usertel: ""

        }
    },
    mounted: function () {
        this.getuserInfo()

    },
    methods: {
        handleClick() {
            this.$router.push({
                path: "/myincome"
            })
        },
        getuserInfo() {
            let param = new Object()
            let nowArr = ["user_name", "user_tel", "user_sex"]
            param.login_token = localStorage.getItem('userToken')
            param.col_name = nowArr
            param.login_type = 2
        

            get_user_info(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    this.username = res.data.col_value[0]
                    this.usersex = res.data.col_value[2]
                    this.usertel = res.data.col_value[1]
                }

            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求',
                    type: 'error'
                });

            })
        }

    }

}
</script>

<style lang="less">
.new_cont {
    padding: 30px 0px;
    color: #ffffff;
    font-size: 16px;

    .item_one {
        font-weight: bold;
        font-size: 18px;

    }
}

.management_title {
    width: 1150px;
    padding: 0px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #f8f8f8;
    margin-top: 30px;

}

.management {
    width: 100%;

    box-sizing: border-box;

    .userinfo {
        width: 1150px;
        height: auto;
        overflow: hidden;
        background: #f8f8f8;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 40px;
        padding-bottom: 40px;

        .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 30px;
            margin-left: 50px;
            font-size: 16px;

            .p1 {
                padding: 0 10px;
                border-radius: 5px;
                background: #999999;
            }
        }
    }

}

.management_con {
    width: 1450px;
    height: auto;
    margin: 0 auto;
    padding: 0px 20px;
    box-sizing: border-box;

}

.management_h1 {
    height: 40px;
    line-height: 40px;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}
</style>
