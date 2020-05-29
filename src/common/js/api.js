//import { get, post } from './http'
import axios from 'axios';

var href = window.location.href
if (href.indexOf('xyj.grapefruitcloud.com') >= 0) {
    var ownbase = 'http://xyj.grapefruitcloud.com' //PHP服务域名
} else {
    var ownbase = 'http://zzb.onezen.net' //PHP服务域名
}


// let ownbase='http://39.100.131.247'//本地接口


let ownbase1='http://zzb.onezen.net'//本地接口

const myPost = (api,params)=>{
    return new Promise((res,rej)=>{
        axios.post(`${ownbase}${api}`, params)
    })
}

//获取验证码
export const get_code= params => { return axios.post(`${ownbase}/ptfs_user_server/get_code`, params).then(res => res.data); };
//export const get_code= params => { return myPost(`/ptfs_user_server/get_code`, params).then(res => res.data); };

//登录/注册
export const login= params => { return axios.post(`${ownbase}/ptfs_user_server/login`, params).then(res => res.data); };

//获取西柚机管理信息
export const query_bind_devinfo_list_by_user_id= params => { return axios.post(`${ownbase}/miner_ctrl/query_bind_devinfo_list_by_user_id`, params).then(res => res.data); };

//获取设备收益
export const query_node_profit_list= params => { return axios.post(`${ownbase}/miner_earn/query_node_profit_list`, params).then(res => res.data); };

//获取设备详情

export const query_node_info_list= params => { return axios.post(`${ownbase}/miner_earn/query_node_info_list`, params).then(res => res.data); };

//我的收益
 export const query_user_profit_list= params => { return axios.post(`${ownbase}/miner_earn/query_user_profit_list`, params).then(res => res.data); };
//获取用户信息
export const get_user_info= params => { return axios.post(`${ownbase}/ptfs_user_server/get_user_info`, params).then(res => res.data); };

//获取存储空间
export const query_dev_phy_cap_hisgraph= params => { return axios.post(`${ownbase}/miner_ctrl/query_dev_phy_cap_hisgraph`, params).then(res => res.data); };

//退出登录
export const logout= params => { return axios.post(`${ownbase}/ptfs_user_server/logout`, params).then(res => res.data); };

//用户反馈问题提交
export const savequestion= params => { return axios.post(`${ownbase}/miner_earn/savequestion`, params).then(res => res.data); };



// export const queryAllNodesProfiles= params => { return axios.post(`${ownbase}/PTFSNodeManage/queryAllNodesProfiles`, params).then(res => res.data); };
// //获取验证码 
// export const login= params => { return axios.post(`${ownbase1}/login/getCode`, params).then(res => res.data); };
// //绑定矿机
// export const bindMiner= params => { return axios.post(`${ownbase1}/login/bindMiner`, params).then(res => res.data); };
// //设置用户名称
// export const setUserName= params => { return axios.post(`${ownbase1}/login/setUserName`, params).then(res => res.data); };


// //获取我的矿机
// export const getMiner= params => { return axios.post(`${ownbase1}/Minerinfo/getMiner`, params).then(res => res.data); };
// //获取我的矿机详情
// export const getMinerInfo= params => { return axios.post(`${ownbase1}/Minerinfo/getMinerInfo`, params).then(res => res.data); };
// //重启矿机
// export const reStart= params => { return axios.post(`${ownbase1}/Minerinfo/reStart`, params).then(res => res.data); };
// //关闭矿机
// export const reClose= params => { return axios.post(`${ownbase1}/Minerinfo/reClose`, params).then(res => res.data); };
// //解绑矿机
// export const reUntied= params => { return axios.post(`${ownbase1}/Minerinfo/reUntied`, params).then(res => res.data); };
// //矿机挖矿详情列表
// export const mininglist= params => { return axios.post(`${ownbase1}/Minerinfo/mininglist`, params).then(res => res.data); };
// //启动，暂停矿机
// export const setTing= params => { return axios.post(`${ownbase1}/Minerinfo/setTing`, params).then(res => res.data); };


// //我的矿机收益
// export const incomeList= params => { return axios.post(`${ownbase1}/MinerIncome/incomeList`, params).then(res => res.data); };
// //矿机排名
// export const rankList= params => { return axios.post(`${ownbase1}/MinerIncome/rankList`, params).then(res => res.data); };
// //我的收益
// export const myIncome= params => { return axios.post(`${ownbase1}/MinerIncome/myIncome`, params).then(res => res.data); };



