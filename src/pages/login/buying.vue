<template>
<div class="login_active">
    <div class="login_active_text">
        <headers></headers>
        <div class="buying">
          
            <div class="buying_con">
             {{$t("buying.item_con1_nav1")}}
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
    mountod: function () {},
    methods: {

    },
    components: {
        headers: headers,
        footers: footers

    }

};
</script>

<style lang="less" scoped>
.buying {
    width: 1150px;
    height: auto;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;

    .buying_title {
        width: 1200px;
        height: 150px;
        line-height: 150px;
        color: #000000;
        font-size: 42px;
        text-align: center;
    }

    .buying_con {
        width: 1150px;
        height: 400px;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

     
    }

}
</style>
