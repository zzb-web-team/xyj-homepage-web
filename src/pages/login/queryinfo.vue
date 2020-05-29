<template>
<div class="management">
    <routerNav></routerNav>
    <div class="management_title_active">
        <el-row>
            <el-col :span="24">
                <div class="management_h1">{{$t("queryinfo.item_nav1")}}</div>
            </el-col>
        </el-row>
    </div>
    <div class="queryinfo_con">
        <el-row>
            <el-col :span="24">
                <div class="queryinfo_input_con">
                    <el-input v-model="input" placeholder="请输入设备序列号"></el-input>

                </div>
            </el-col>
            <el-col class="my_cols" style="margin-top: 30px;">
                <el-radio-group v-model="tabPosition" @change="queryInfo1">
                    <el-radio-button label="top">{{$t("queryinfo.item_nav2")}}</el-radio-button>
                    <el-radio-button label="right">{{$t("queryinfo.item_nav3")}}</el-radio-button>
                    <el-radio-button label="bottom">{{$t("queryinfo.item_nav4")}}</el-radio-button>
                </el-radio-group>
                <div class="block" style="margin-left: 50px;">
                    <span class="demonstration">{{$t("queryinfo.item_nav5")}}</span>
                    <el-date-picker v-model="form.regDateBeg" @change="getSTimeOnlinestrat" type="date" placeholder="选择开始日期">
                    </el-date-picker>
                </div>
                <div class="block" style="margin-left: 20px;">
                    <el-date-picker v-model="form.regDateBeg1" type="date" @change="getSTimeOnlineend"  placeholder="选择结束日期">
                    </el-date-picker>
                </div>
                <el-button type="primary" style="margin-left:50px;" @click="queryInfo2()">{{$t("queryinfo.item_nav15")}}</el-button>
            </el-col>
        </el-row>
        <el-row class="row_active">
            <el-col :span="24">
                <div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="dev_name" :label="$t('queryinfo.item_nav6')">
                        </el-table-column>
                        <el-table-column prop="dev_sn" :label="$t('queryinfo.item_nav7')">
                        </el-table-column>
                        <el-table-column prop="date_stamp" :label="$t('queryinfo.item_nav8')">
                        </el-table-column>
                        <el-table-column prop="dev_profit" :label="$t('queryinfo.item_nav9')">
                             <template slot-scope="scope">
                                <div class="item_myactive">{{scope.row.dev_profit}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="store_ability" :label="$t('queryinfo.item_nav10')">
                        </el-table-column>
                        <el-table-column prop="user_space" :label="$t('queryinfo.item_nav11')">
                        </el-table-column>
                        <el-table-column prop="total_cap" :label="$t('queryinfo.item_nav12')">
                        </el-table-column>
                        <el-table-column prop="up_bandwidth":label="$t('queryinfo.item_nav13')">
                        </el-table-column>
                        <el-table-column prop="online_time" :label="$t('queryinfo.item_nav14')">
                        </el-table-column>

                    </el-table>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div style="float:right;margin-top:30px;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="pageTotal">
                    </el-pagination>
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
//import common from '../../common/js/util.js'
import common from '../../common/js/util.js'

import {
    query_node_info_list,
    query_node_profit_list
} from '../../common/js/api.js'
export default {
    components: {
        routerNav: routerNav,
        footers: footers
    },
    data() {
        return {
            currentPage1: 1,
            tabPosition: '',
            input: "",
            value1: '',
            value2: '',
            tableData: [],
            newtableData: [],
            pageTotal: 0,
            nowstarttime: "",
            nowendtime: "",
            form: {
                regDateBeg: "",
                regDateBeg1: ""

            }

        }
    },
    mounted: function () {
        this.querynodeinfolist()
        this.input = localStorage.getItem('dev_sn')
        //this.querynodeprofitlist()
        let nowDate = new Date();
        this.form.regDateBeg1= this.common.getTimess(nowDate);
       
         let befDate = new Date(nowDate.getTime() - 1 * 24 * 3600 * 1000);
   
        this.form.regDateBeg= this.common.getTimess(befDate);

    },
    methods: {
        getSTimeOnlinestrat(val) {
            this.form.regDateBeg = val;

        },
        getSTimeOnlineend(val) {
            this.form.regDateBeg1 = val;

        },
    
        handleSizeChange() {

        },
        handleCurrentChange(val) {
            //this.currentPage1=val-1
          
            this.querynodeinfolist()

        },
        handleClick() {
            this.$router.push({
                path: "/myincome"
            })
        },
        querynodeinfolist() {
            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            param.start_time = 1560873600
            param.end_time = 1560960000
            param.dev_sn = localStorage.getItem('dev_sn')
            param.cur_page = this.currentPage1 - 1
            param.login_type = 2
            query_node_info_list(param).then(res => {

                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    let userToken = res.data.token_info.token
                    localStorage.setItem('userToken', userToken)

                    this.newtableData = res.data.dev_info_list
                    //this.tableData = res.data.dev_info_list

                    let param = new Object()
                    param.login_token = localStorage.getItem('userToken')
                    param.start_time = 1560873600
                    param.end_time = 1560960000
                    param.dev_sn = localStorage.getItem('dev_sn')
                    param.cur_page = this.currentPage1 - 1
                    param.login_type = 2
                    query_node_profit_list(param).then(res => {
                        if (res.status != 0) {
                            this.$message({
                                message: '网络错误，请重新请求',
                                type: 'error'
                            });
                        } else {

                            let nowArr = res.data.dev_profit_list
                            for (var i = 0; i < this.newtableData.length; i++) {
                                if (this.newtableData[i].date_stamp == nowArr[i].date_stamp) {
                                    this.newtableData[i].dev_profit = ((nowArr[i].dev_profit) / 10000).toFixed(2) + "POC"
                                    this.newtableData[i].up_bandwidth = ((this.newtableData[i].up_bandwidth) / 1024 / 1024).toFixed(2) + "Mb/s"
                                    this.newtableData[i].dev_name = res.data.dev_name
                                    this.newtableData[i].online_time = ((this.newtableData[i].online_time) / 3600).toFixed(2) + "h"
                                    this.newtableData[i].store_ability = (nowArr[i].store_ability).toFixed(4) + "S/d"
                                    this.newtableData[i].user_space = ((this.newtableData[i].total_cap - this.newtableData[i].free_cap) / 1024 / 1024 / 1024).toFixed(2) + "GB"
                                    this.newtableData[i].total_cap = ((this.newtableData[i].total_cap) / 1024 / 1024 / 1024).toFixed(2) + "GB"
                                    this.newtableData[i].dev_sn = localStorage.getItem('dev_sn')
                                    this.newtableData[i].date_stamp=this.common.getTimess((this.newtableData[i].date_stamp)*1000)

                                }
                            }

                            this.pageTotal = (res.data.total_page) * 10
                            this.tableData = this.newtableData

                        }

                    }).catch(error => {

                    })

                }

            }).catch(error => {

            })
        },

        getuserInfo1() {
            let param = new Object()

            param.login_token = localStorage.getItem('userToken')
            param.start_time = this.nowstarttime
            param.end_time = this.nowendtime
            if (this.input == "") {
                this.$message({
                    message: '请输入SN查询',
                    type: 'error'
                });
                return false
            } else {
                param.dev_sn = this.input
            }

            param.cur_page = this.currentPage1 - 1
            param.login_type = 2
            //console.log(param.start_time+"**"+param.end_time)
            query_node_info_list(param).then(res => {

                if (res.status != 0) {
                    this.$message({
                        message: '网络错误，请重新请求',
                        type: 'error'
                    });
                } else {
                    let userToken = res.data.token_info.token
                    localStorage.setItem('userToken', userToken)

                    this.newtableData = res.data.dev_info_list
                    //this.tableData = res.data.dev_info_list

                    let param1 = new Object()
                    param1.login_token = localStorage.getItem('userToken')
                    param1.start_time = this.nowstarttime
                    param1.end_time = this.nowendtime
                    param1.dev_sn = this.input
                    param1.cur_page = this.currentPage1 - 1
                    param1.login_type = 2
                       // console.log(param1.start_time+"**"+param1.end_time)
                    query_node_profit_list(param1).then(res => {
                        if (res.status != 0) {
                            this.$message({
                                message: '网络错误，请重新请求111',
                                type: 'error'
                            });
                        } else {
                            if (res.data.dev_profit_list) {
                                let nowArr = res.data.dev_profit_list
                                for (var i = 0; i < this.newtableData.length; i++) {
                                    if (this.newtableData[i].date_stamp == nowArr[i].date_stamp) {
                                        this.newtableData[i].dev_profit = ((nowArr[i].dev_profit) / 10000).toFixed(2) + "POC"
                                        this.newtableData[i].up_bandwidth = ((this.newtableData[i].up_bandwidth) / 1024 / 1024).toFixed(2) + "Mb/s"
                                        this.newtableData[i].dev_name = res.data.dev_name
                                        this.newtableData[i].online_time = ((this.newtableData[i].online_time) / 3600).toFixed(2) + "h"
                                        this.newtableData[i].store_ability = (nowArr[i].store_ability).toFixed(4) + "S/d"
                                        this.newtableData[i].user_space = ((this.newtableData[i].total_cap - this.newtableData[i].free_cap) / 1024 / 1024 / 1024).toFixed(2) + "GB"
                                        this.newtableData[i].total_cap = ((this.newtableData[i].total_cap) / 1024 / 1024 / 1024).toFixed(2) + "GB"
                                        this.newtableData[i].dev_sn = localStorage.getItem('dev_sn')
                                         this.newtableData[i].date_stamp=this.common.getTimess((this.newtableData[i].date_stamp)*1000)

                                    }
                                }

                                this.pageTotal = (res.data.total_page) * 10
                                this.tableData = this.newtableData

                            } else {
                                this.tableData = []
                            }
                        }

                    }).catch(error => {
                        this.$message({
                            message: '网络错误，请重新请求',
                            type: 'error'
                        });

                    })
                }
            }).catch(error => {
                this.$message({
                    message: '网络错误，请重新请求',
                    type: 'error'
                });

            })

        },
        queryInfo1(val) {

            if (val == "top") {
                this.nowstarttime = (Date.parse(new Date().toLocaleDateString()) / 1000 - 24 * 3600 * 1)
                this.nowendtime = Date.parse(new Date().toLocaleDateString()) / 1000;
                this.getuserInfo1()

            } else if (val == "right") {
                this.nowstarttime = (Date.parse(new Date().toLocaleDateString()) / 1000 - 24 * 3600 * 7)
                this.nowendtime = Date.parse(new Date().toLocaleDateString()) / 1000;
                this.getuserInfo1()

            } else if (val == "bottom") {
                this.nowstarttime = (Date.parse(new Date().toLocaleDateString()) / 1000 - 24 * 3600 * 30)
                this.nowendtime = Date.parse(new Date().toLocaleDateString()) / 1000;
                this.getuserInfo1()

            }

        },
        queryInfo2() {

            let nowstarttimeActive = this.form.regDateBeg1
            var data1=new Date(nowstarttimeActive)
            let  nowendtimeActive  = this.form.regDateBeg
             var data2=new Date(nowendtimeActive)
            this.nowstarttime=data1.getTime()
            this.nowendtime=data2.getTime()
            if (this.nowstarttime -this.nowendtime   <= 0) {
                this.$message({
                    message: '结束时间应大于起始时间，请重新输入',
                    type: 'error'
                });
                return false;

            }
            this.getuserInfo1()

        }

    }

}
</script>

<style lang="less">
.item_myactive{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 125px;
    white-space: nowrap;
}
.new_cont {
    padding: 30px 0px;
    color: #ffffff;
    font-size: 16px;

    .item_one {
        font-weight: bold;
        font-size: 18px;

    }
}

.management_title_active {
    width: 1450px;
    padding: 0px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #f8f8f8;
    margin-top: 30px;

}

.management {
    width: 100%;

    box-sizing: border-box;

}

.management_con {
    width: 1150px;
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

.queryinfo_input_con {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 980px;
    margin: 0 auto;

    .el-button--primary {
        margin-left: 20px;
    }
}

.el-table td {
    padding: 5px 0px;
    text-align: center;
}

.el-table th>.cell {
    text-align: center;
}

.queryinfo_con {
    width: 1450px;
    padding: 0px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background: #f8f8f8;
    margin-bottom: 30px;
    padding-bottom: 30px;

    .my_cols {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .row_active {
        margin-top: 30px;
    }
}
</style>
