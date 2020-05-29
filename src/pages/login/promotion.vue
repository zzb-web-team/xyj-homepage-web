<template>
<div class="login_active">
    <div class="login_active_text">
        <headers></headers>
        <div class="promotion">
            <div class="promotion_con"> {{$t("promotion.item_con1_nav1")}}</div>

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
.promotion {
    width: 1200px;
    height: auto;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 50px;

    .promotion_con {
        width: 1200px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }

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
            margin-top: 5px;
        }

        .p_h1 {
            font-size: 18px;
            font-weight: bold;
        }

    }

}
</style>
