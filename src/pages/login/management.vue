<template>
<div class="management">
    <routerNav></routerNav>
    <div class="management_title1">
        <el-row>
            <el-col :span="24">
                <div class="management_h1">{{$t("management.item_nav17")}}</div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="new_cont new_cont_active1">
                    <div class="item_one">{{line_total}}</div>
                    <div class="item_two">{{$t("management.item_nav1")}}</div>

                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active2">
                    <div class="item_one">{{online_cnt}}</div>
                    <div class="item_two">{{$t("management.item_nav2")}}</div>

                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active3">
                    <div class="item_one">{{offline_cnt}}</div>
                    <div class="item_two">{{$t("management.item_nav3")}}</div>

                </div>
            </el-col>
            <el-col :span="6">
                <div class="new_cont new_cont_active4">
                    <div class="item_one">{{errorline_cnt}}</div>
                    <div class="item_two">{{$t("management.item_nav4")}}</div>

                </div>
            </el-col>
        </el-row>
    </div>
    <div class="management_con2">
        <el-row class="row_active">
            <el-col :span="12">
                <div class="echarts_div">
                    <div id="device_echars_l" class="device_echars_l"></div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="echarts_div">
                    <div id="device_echars_r" class="device_echars_l"></div>
                </div>
            </el-col>
        </el-row>
        <el-row class="row_active" style="margin-top:30px;margin-bottom:30px;">
            <el-col :span="24">
                <div>
                    <el-table :data="tableData" :highlight-current-row="true" border style="width: 100%" @row-click="openDetails">
                        <el-table-column prop="dev_name" :label="$t('management.item_nav10')">
                        </el-table-column>
                        <el-table-column prop="dev_type" :label="$t('management.item_nav11')">
                        </el-table-column>
                        <el-table-column prop="dev_sn" :label="$t('management.item_nav12')" width="300">
                        </el-table-column>
                        <el-table-column prop="dev_online_state" :label="$t('management.item_nav13')">
                        </el-table-column>
                        <el-table-column prop="dev_mac" :label="$t('management.item_nav14')" width="200">
                        </el-table-column>
                        <el-table-column prop="dev_ip" :label="$t('management.item_nav15')">
                        </el-table-column>
                        <el-table-column :label="$t('management.item_nav16')">
                            <template slot-scope="scope">
                                <el-button @click.stop="handleClick(scope.row)" type="text" size="small">{{$t("management.item_nav18")}}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>

</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
import routerNav from '../../components/routerNav'
import echarts from 'echarts'
import {
    query_bind_devinfo_list_by_user_id,
    query_node_profit_list,
    query_dev_phy_cap_hisgraph
} from '../../common/js/api.js'
export default {

    components: {
        headers: headers,
        footers: footers,
        routerNav: routerNav
    },
    data() {
        return {
            online_cnt: "",
            offline_cnt: "",
            errorline_cnt: "",
            line_total: "",
            storeArr: [],
            timeArr: [],
            testArr: [],
            sn_active: "",
            spaceArr1: [],
            spaceArr2: [],
            spaceArr3: [],

            tableData: []
        }
    },
    mounted: function () {
        //this.drawLine()
        this.queryInfo()
        this.getTimess()

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
                    text: this.$t('management.item_nav8'),
                    x: "center"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: [this.$t('management.item_nav9')],
                    top: "30px"
                },
                // grid: {
                //     left: "3%",
                //     right: "5%",
                //     bottom: "3%",
                //     containLabel: true
                // },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: this.testArr
                },
                yAxis: {
                    type: "value",
                    // axisLabel: {
                    //     //formatter: "{value}(个)"
                    // }
                },
                series: [{
                    // name: "存储力",
                    name: this.$t('management.item_nav9'),
                    type: "line",
                    stack: "总量",
                    data: this.storeArr
                }]

            };

            myChart.setOption(option);

            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize', function () {
                myChart.resize()
            });
        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('device_echars_l'));
            let option = {
                title: {
                    text: this.$t('management.item_nav5'),
                    x: 'center'

                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [this.$t('management.item_nav6'),this.$t('management.item_nav7'),],
                    top: "30px"
                },
                toolbox: {
                    show: true,
                    feature: {

                    }
                },
                calculable: true,
                xAxis: [{
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],
                yAxis: [{
                    type: 'category',
                    //data: ['2019-5-1', '2019-5-2', '2019-5-3', '2019-5-4', '2019-5-5', '2019-5-6', '2019-5-7', ]
                    data: this.spaceArr3
                }],
                series: [{
                        name: this.$t('management.item_nav6'),
                        type: 'bar',
                        //data: this.nowstoreArr2
                        data: this.spaceArr2
                    },
                    {
                        name: this.$t('management.item_nav7'),
                        type: 'bar',
                        data: this.spaceArr1
                    }
                ]

            };

            myChart.setOption(option);

            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize', function () {
                myChart.resize()
            });
        },
        //查看详情

        handleClick(item) {
            let dev_sn = item.dev_sn
            localStorage.setItem('dev_sn', dev_sn)
            this.$router.push({
                path: "/queryinfo"
            })
        },
        queryInfo() {
            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.page_num = 0
            param.login_type = 2
            param.page_cnt = 20
            query_bind_devinfo_list_by_user_id(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    if (res.err_code == 292) {
                        this.$message({
                            message: '用户暂未绑定设备',
                            type: 'error'
                        });
                    }
                    let nowarr = res.data.bind_devinfo_list
                    this.sn_active = nowarr[0].dev_sn
                    for (var i = 0; i < nowarr.length; i++) {
                        switch (nowarr[i].dev_type) {
                            case 1:
                                nowarr[i].dev_type = "初代西柚机"
                                break;
                        }
                        switch (nowarr[i].dev_online_state) {
                            case 1:
                                nowarr[i].dev_online_state = "在线"
                                break;
                            case 0:
                                nowarr[i].dev_online_state = "离线"
                                break;
                        }
                    }
                    this.tableData = res.data.bind_devinfo_list
                    this.online_cnt = res.data.online_cnt
                    this.errorline_cnt = res.data.exception_cnt
                    this.offline_cnt = res.data.offline_cnt
                    this.line_total = res.data.online_cnt + res.data.exception_cnt + res.data.offline_cnt
                    let userToken = res.token_info.login_token
                    localStorage.setItem('userToken', userToken)
                    this.firstgetinfo_power()
                    this.firstgetinfo_space()

                }

            }).catch(error => {

            })

        },
        openDetails(row) {

            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.start_time = 1560873600
            param.end_time = 1560960000
            param.dev_sn = row.dev_sn
            param.login_type = 2

            query_node_profit_list(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    this.storeArr = []

                    if (!res.data.dev_profit_list) {

                        let nowstoreArr = []
                        for (var i = 1; i <= 7; i++) {
                            nowstoreArr.push(0)
                        }
                        this.storeArr = nowstoreArr

                        this.drawColumn()
                    } else {

                        let nowArr = res.data.dev_profit_list
                        let nowstoreArr = []
                        for (var i = 0; i < nowArr.length; i++) {
                            nowstoreArr.push((nowArr[i].store_ability).toFixed(4))
                        }
                        this.storeArr = nowstoreArr
                        this.drawColumn()

                    }

                }

            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求',
                    type: 'error'
                });

            })

            let param1 = new Object()
            param1.login_token = localStorage.getItem('userToken')
            param1.start_ts = (Date.parse(new Date().toLocaleDateString()) / 1000 - 24 * 3600 * 7)

            param1.end_ts = Date.parse(new Date().toLocaleDateString()) / 1000;
            param1.dev_sn = row.dev_sn
            param1.login_type = 2

            query_dev_phy_cap_hisgraph(param1).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求2',
                        type: 'error'
                    });
                } else {
                    this.spaceArr1 = []
                    let nowArr = res.data.dev_phy_usage
                    let nowstoreArr1 = []
                    let nowstoreArr2 = []

                    let nowstoreArr3 = []

                    for (var i = 0; i < nowArr.length; i++) {
                        nowstoreArr1.push(((nowArr[i].total_cap) / 1024 / 1024 / 1024).toFixed(2))
                        nowstoreArr2.push(((nowArr[i].used_cap) / 1024 / 1024 / 1024).toFixed(2))
                        nowstoreArr3.push(this.common.getTimes(nowArr[i].ts * 1000))
                    }
                    this.spaceArr1 = nowstoreArr1
                    this.spaceArr2 = nowstoreArr2
                    this.spaceArr3 = nowstoreArr3

                    this.drawLine()
                    // }

                }

            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求1',
                    type: 'error'
                });

            })

        },
        firstgetinfo_power() {

            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.start_time = 1560873600
            param.end_time = 1560960000
            param.dev_sn = this.sn_active
            param.login_type = 2

            query_node_profit_list(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    this.storeArr = []

                    if (!res.data.dev_profit_list) {

                        let nowstoreArr = []
                        for (var i = 1; i <= 7; i++) {
                            nowstoreArr.push(0)
                        }
                        this.storeArr = nowstoreArr
                        this.drawColumn()
                    } else {

                        let nowArr = res.data.dev_profit_list
                        let nowstoreArr = []
                        for (var i = 0; i < nowArr.length; i++) {
                            nowstoreArr.push((nowArr[i].store_ability).toFixed(4))
                        }
                        this.storeArr = nowstoreArr
                        this.drawColumn()
                    }

                }

            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求',
                    type: 'error'
                });

            })

        },
        firstgetinfo_space() {

            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.start_ts = (Date.parse(new Date().toLocaleDateString()) / 1000 - 24 * 3600 * 7)

            param.end_ts = Date.parse(new Date().toLocaleDateString()) / 1000;

            param.dev_sn = this.sn_active
            param.login_type = 2

            query_dev_phy_cap_hisgraph(param).then(res => {
                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    this.spaceArr1 = []
                    let nowArr = res.data.dev_phy_usage
                    let nowstoreArr1 = []
                    let nowstoreArr2 = []

                    let nowstoreArr3 = []

                    for (var i = 0; i < nowArr.length; i++) {
                        nowstoreArr1.push(((nowArr[i].total_cap) / 1024 / 1024 / 1024).toFixed(2))
                        nowstoreArr2.push(((nowArr[i].used_cap) / 1024 / 1024 / 1024).toFixed(2))
                        nowstoreArr3.push(this.common.getTimes(nowArr[i].ts * 1000))
                    }
                    this.spaceArr1 = nowstoreArr1
                    this.spaceArr2 = nowstoreArr2
                    this.spaceArr3 = nowstoreArr3

                    this.drawLine()
                    // }

                }

            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求',
                    type: 'error'
                });

            })

        },
        getTimess() {
            let Polyline = Date.parse(new Date().toLocaleDateString()) / 1000; //获取当前年月日时间戳（当天零点）
            //var Date1 = new Date().getTime();
            let nowtimeArr = []
            let nowtimeArr1 = []
            for (let i = 1; i <= 7; i++) {

                nowtimeArr.push(Polyline - 24 * 3600 * i)

            }

            for (var i = 0; i < nowtimeArr.length; i++) {

                nowtimeArr1.push(this.common.getTimes(nowtimeArr[i] * 1000))
            }
            this.testArr = nowtimeArr1.reverse()

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

.management_title1 {
    width: 1300px;
    padding: 0px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #f8f8f8;
    margin-top: 30px;
    margin-bottom: 30px;
}

#device_echars_r {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding-top: 20px;

}

#device_echars_l {
    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding-top: 20px;

}

.echarts_div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.management_con2 {
    width: 1300px;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    padding: 0px 20px;
    box-sizing: border-box;
    background: #f8f8f8;
    margin-top: 30px;
    margin-bottom: 30px;

}

.management_h1 {
    height: 40px;
    line-height: 40px;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}

.el-table .cell {
    text-align: center
}
</style>
