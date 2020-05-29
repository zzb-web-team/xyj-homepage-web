<template>
<div class="management">
    <routerNav></routerNav>
    <div class="management_title2">
        <el-row>
            <el-col :span="24">
                <div class="management_h1">{{$t("myincome.item_nav8")}}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="new_cont new_cont_active1" style="width:100%;">
                    <div class="item_one">{{dq_income}}</div>
                    <div class="item_two">{{$t("myincome.item_nav1")}}</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active2" style="width:100%;">
                    <div class="item_one">{{zr_income}}</div>
                    <div class="item_two">{{$t("myincome.item_nav2")}}</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active3" style="width:100%;">
                    <div class="item_one">{{all_income}}</div>
                    <div class="item_two">{{$t("myincome.item_nav3")}}</div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active4" style="width:100%;">
                    <div class="item_one">{{pj_income}}</div>
                    <div class="item_two">{{$t("myincome.item_nav4")}}</div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="management_con1">
        <el-row class="row_active">

            <el-col :span="24">
                <div class="echarts_div">
                    <div id="device_echars_r" class="device_echars_l"></div>
                </div>
            </el-col>
        </el-row>
    </div>
    <div></div>

</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
import routerNav from '../../components/routerNav'
import {
    query_user_profit_list
} from '../../common/js/api.js'
import echarts from 'echarts'
// import {
//     error
// } from 'util';

export default {
    components: {
        headers: headers,
        footers: footers,
        routerNav: routerNav
    },
    data() {
        return {
            dq_income: 0,
            zr_income: 0,
            all_income: 0,
            pj_income: 0,
            incomeArr: [],
            timeArr: []
        }
    },
    mounted: function () {

        //this.drawLine()
        this.queryInfo()
    },
    methods: {
        onchaneClass(index) {
            return "new_cont_active" + (index + 1);
        },
        drawColumn() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('device_echars_r'));
            let option = {
                title: {
                    //text: "最近7天收益走势(POC)",
                    text: this.$t('myincome.item_nav5'),

                    x: "center",
                    top: "10px"
                },
                tooltip: {
                    trigger: "axis"
                },
                // legend: {
                //     data: ["在线节点数"]
                // },
                grid: {
                    left: "1%",
                    right: "1%",
                    bottom: "2%",
                    containLabel: true
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: this.timeArr
                },
                yAxis: {
                    type: "value",
                    // axisLabel: {
                    //     formatter: "{value}("
                    // }
                },
                series: [{
                   // name: "当天收益",
                      text: this.$t('myincome.item_nav6'),
                    type: "line",
                    stack: "总量",
                    data: this.incomeArr
                }]
                // title: {
                //     text: "最近7天收益走势",
                //     x: "center"
                // },
                // // tooltip: {
                // //     trigger: "item",
                // //     formatter: "{a} <br/>{b} : {c}"
                // // },

                // xAxis: [{
                //     type: "category",
                //     name: "天",
                //     splitLine: {
                //         show: false
                //     },
                //     data: this.timeArr
                // }],
                // yAxis: [{
                //     type: "log",
                //     name: "M/s"
                // }],

                // //calculable: true,
                // series: [{
                //         name: "存储力指数",
                //         type: "line",

                //       data: ["65", "11.39", "58", "0", "12", "111", "10"]
                //          // data: ["65", "11.39", "58", "0", "12", "111", "10"]

                //     },

                // ]
            };

            myChart.setOption(option);

            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize', function () {
                myChart.resize()
            });
        },

        //查看详情

        handleClick() {
            this.$router.push({
                path: "/queryinfo"
            })
        },
        queryInfo() {
            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.query_type = 2,
            param.login_type = 2
                param.start_time = 1560873600,
                param.end_time = 1560960000,
                param.cur_page = 0

            query_user_profit_list(param).then(res => {
                if (res.status != 0) {

                } else {
                    let profitArr = []
                    let date_stamp_arr = []
                    if( res.data.user_profit_list.length>0){
                         let nowarr = res.data.user_profit_list
                    for (var i = 0; i < nowarr.length; i++) {

                        //this.incomeArr=[]
                        nowarr[i].user_total_profit = ((nowarr[i].user_total_profit) / 10000).toFixed(2)

                        profitArr.push(nowarr[i].user_total_profit)
                        console.log(nowarr[i].date_stamp)
                        date_stamp_arr.push(this.common.getTimess((nowarr[i].date_stamp)*1000))
                        //this.common.getTimes
                        // this.newtableData[i].date_stamp =this.common.getTimes(this.newtableData[i].date_stamp)
                    }
                    this.incomeArr = (profitArr.slice(0, 7)).reverse()
                    this.timeArr = ((date_stamp_arr).slice(0, 7)).reverse()
                    let all_num = 0
                    for (var i = 0; i < this.incomeArr.length; i++) {
                        all_num += parseFloat(this.incomeArr[i])

                    }
                    this.dq_income = profitArr.slice(0, 1).join(",")
                    this.zr_income = profitArr.slice(1, 2).join(",")
                    this.all_income = all_num.toFixed(2)
                    this.pj_income = (all_num / 7).toFixed(2)

                    this.drawColumn();

                    }
                    else{
                        this.dq_income = 0
                    this.zr_income = 0
                    this.all_income = 0
                    this.pj_income = 0
                    }
                   
                }

            }).catch(error => {

            })
        }
    }

}
</script>

<style lang="less">
.new_cont_active1 {
    background-image: linear-gradient(159deg, #b87cf6 0%, #903be7 100%),
        linear-gradient(#ffffff, #ffffff);
    background-blend-mode: normal, normal;
    box-shadow: 3px 0px 7px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

}

.new_cont_active2 {
    background-image: linear-gradient(-53deg, #3d5bd9 0%, #71a2e0 100%),
        linear-gradient(#ffffff, #ffffff);
    background-blend-mode: normal, normal;
    box-shadow: 3px 0px 7px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}

.new_cont_active3 {
    background-image: linear-gradient(-90deg, #fb9a8d 0%, #feb485 100%),
        linear-gradient(#ffffff, #ffffff);
    background-blend-mode: normal, normal;
    box-shadow: 3px 0px 7px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}

.new_cont_active4 {
    background-image: linear-gradient(-90deg, #ff463f 0%, #ff8157 100%),
        linear-gradient(#ffffff, #ffffff);
    background-blend-mode: normal, normal;
    box-shadow: 3px 0px 7px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
}

.el-col-6 {
    padding: 20px;
    padding-top: 0px;

}

.new_cont {
    padding: 30px 0px;
    color: #ffffff;
    font-size: 16px;
    text-align: center;

    .item_one {
        font-weight: bold;
        font-size: 18px;
        text-align: center;

    }

}

.management_title2 {
    width: 1150px;
    padding: 0px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #f8f8f8;
    margin-top: 30px;

}

#device_echars_r {
    width: 100%;
    height: 400px;
    margin: 0 auto;

}

#device_echars_l {
    width: 100%;
    height: 400px;
    margin: 0 auto;

}

.echarts_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.management_con1 {
    width: 1150px;
    height: auto;
    margin: 0 auto;
    padding: 0px 20px;
    background: #f8f8f8;

    box-sizing: border-box;
    margin-top: 30px;
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
