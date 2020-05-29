<template>
<div class="login_active">
    <div class="login_active_text" id="problem_active4">
        <headers></headers>
        <div class="protocol">
            <div class="protocol_title">{{$t("protocol.item_nav1")}}</div>
            <div class="protocol_con">
                
                <p class="p_h1">{{$t("protocol.item_nav1")}}</p>

                <p> {{$t("protocol.item_nav3")}}</p>

                <p> {{$t("protocol.item_nav4")}}</p>

                <p class="p_h1">{{$t("protocol.item_nav5")}}</p>

                <p> {{$t("protocol.item_nav6")}}</p>

                <p> {{$t("protocol.item_nav7")}}</p>

                <p> {{$t("protocol.item_nav8")}}</p>

                <p> {{$t("protocol.item_nav9")}}</p>

                <p class="p_h1">{{$t("protocol.item_nav10")}}</p>

                <p> {{$t("protocol.item_nav11")}}</p>

                <p> {{$t("protocol.item_nav12")}}</p>

                <p> {{$t("protocol.item_nav13")}}</p>

                <p> {{$t("protocol.item_nav14")}}</p>

                <p class="p_h1">{{$t("protocol.item_nav15")}}</p>

                <p> {{$t("protocol.item_nav16")}}</p>

                <p>{{$t("protocol.item_nav7")}}</p>

                <p>{{$t("protocol.item_nav18")}}</p>

                <p>{{$t("protocol.item_nav19")}}</p>

                <p>{{$t("protocol.item_nav20")}}</p>

                <p> {{$t("protocol.item_nav21")}}</p>

                <p> {{$t("protocol.item_nav22")}}</p>

                <p> {{$t("protocol.item_nav23")}}</p>

                <p> {{$t("protocol.item_nav24")}}</p>

                <p>{{$t("protocol.item_nav25")}}</p>

                <p>{{$t("protocol.item_nav26")}}</p>

                <p>{{$t("protocol.item_nav27")}}</p>

                <p>{{$t("protocol.item_nav28")}}</p>

                <p>{{$t("protocol.item_nav29")}}</p>

                <p>{{$t("protocol.item_nav30")}}</p>

                <p>{{$t("protocol.item_nav31")}}</p>

                <p>{{$t("protocol.item_nav32")}}</p>

                <p> {{$t("protocol.item_nav33")}}</p>

                <p>{{$t("protocol.item_nav34")}}</p>

                <p> {{$t("protocol.item_nav35")}}</p>

                <p> {{$t("protocol.item_nav36")}}</p>

            </div>

        </div>
        <footers></footers>

    </div>
</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'

export default {
    data() {
        return {

        };
    },
   created: function () {
        this.$nextTick(() => {
            this.getlocal()
        })
    },
    mounted: function () {
        let that = this;
        that.$nextTick(function () {
            window.addEventListener('scroll', that.handleScroll)
        })
         document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
        // this.initVideo();
    },
    methods: {
        getlocal() {
            //找到锚点id
            let selectId = localStorage.getItem("toIds");
            let toElement = document.getElementById(selectId);
            //如果对应id存在，就跳转
            if (selectId) {
                toElement.scrollIntoView()
            }
        },
       

    },
     destroyed() {
            localStorage.setItem("toIds", '')
        },
    components: {
        headers: headers,
        footers: footers

    }

};
</script>

<style lang="less" scoped>
.protocol {
    width: 1150px;
    height: auto;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;

    .protocol_title {
        width: 1200px;
        height: 150px;
        line-height: 150px;
        color: #000000;
        font-size: 42px;
        text-align: center;
    }

    .protocol_con {
        width: 1150px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;

        p {
            font-size: 14px;
            margin-top: 10px;
        }
        .p_h1{
            font-size: 18px;
            font-weight: bold;
        }

    }

}
</style>
