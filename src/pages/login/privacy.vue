<template>
<div class="login_active">
    <div class="login_active_text" id="problem_active3">
        <headers></headers>
        <div class="privacy">
            <div class="privacy_title">{{$t("privacy.item_nav1")}}</div>
            <div class="privacy_con">
             
                <p>{{$t("privacy.item_nav2")}}</p>

                <p>{{$t("privacy.item_nav3")}}</p>

                <p> {{$t("privacy.item_nav4")}}</p>

                <p>{{$t("privacy.item_nav5")}}</p>

                <p>{{$t("privacy.item_nav6")}}</p>

                <p>{{$t("privacy.item_nav7")}}</p>

                <p>{{$t("privacy.item_nav8")}}</p>

                <p>{{$t("privacy.item_nav9")}}</p>

                <p> {{$t("privacy.item_nav10")}}</p>

                <p> {{$t("privacy.item_nav11")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav12")}}</p>
                <p>{{$t("privacy.item_nav13")}}</p>

                <p> {{$t("privacy.item_nav14")}}</p>

                <p> {{$t("privacy.item_nav15")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav16")}}</p>

                <p> {{$t("privacy.item_nav17")}}</p>

                <p> {{$t("privacy.item_nav18")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav19")}}</p>
                <p> {{$t("privacy.item_nav20")}}</p>

                <p> {{$t("privacy.item_nav21")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav22")}}</p>

                <p> {{$t("privacy.item_nav23")}}</p>

                <p> {{$t("privacy.item_nav24")}}</p>

                <p> {{$t("privacy.item_nav25")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav26")}}</p>

                <p>{{$t("privacy.item_nav27")}}</p>

                <p> {{$t("privacy.item_nav28")}}</p>

                <p class="p_h1">{{$t("privacy.item_nav29")}}</p>

                <p> {{$t("privacy.item_nav30")}}</p>

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
.privacy {
    width: 1150px;
    height: auto;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;
    .privacy_title{
        width: 1200px;
        height: 150px;
        line-height: 150px;
        color: #000000;
        font-size: 42px;
        text-align: center;
    }
    .privacy_con{
        width: 1150px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        p{
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
