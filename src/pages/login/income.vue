<template>
<div class="xy_con">
    <div class="xy_con_text">
        <headers></headers>
        <div class="income">
            <div class="income_banner">
                <img src="../../assets/images/income_01.png" alt="">
            </div>
            <div class="item_con1">
                <div class="item_h">收益概述</div>
                <div class="item_text">西柚用户通过共享自身的资源（带宽和存储）给上游的企业来赚取收益，我们会统一通过西柚积分的形式进行收益发放。</div>
            </div>
            <div class="item_con1 item_con_active">
                <div class="item_h">为什么会有收益？</div>
                <div class="item_text">
                    <p>随着随着网络视频、在线直播、物联网、5G人工智能等行业的爆发式增长，处于该行业的企业或者公司对带宽和存储的需求也是指数级增长而专业运营商提供的带宽和存储由于价格和其他诸多因素并不能完全满足需求，另一方面大量普通互联网用户的带宽和存储资源并未充分利用而闲置下来。</p>
                    <p>而我们通过大量的西柚机将构建出一个全球性的分布式共享存储网络，西柚机就是桥接企业和西柚用户的物理纽带，将用户的闲置资源输出给需求企业，为企业节省的网络成本将返还到广大西柚用户手中实现共享的最终价值。</p>
                </div>
                <div class="item_img"><img src="../../assets/images/income_02.png" alt=""></div>
            </div>
            <div class="item_con1 item_con_active1">
                <div class="item_h">积分是什么？</div>
                <div class="item_text">
                    <p>西柚积分就是用户共享资源后的收益凭证。用户贡献闲置带宽和存储时均会产生西柚积分奖励奖励计量基本遵循多劳多得原则，贡献越多，奖励越高。我们将根据用户的网络带宽、存储空间、在线时长等多方面来确定最终的积分数值，并根据用户在全网用户总贡献值中的占比分配积分。</p>
                </div>
                <div class="item_img"><img src="../../assets/images/income_03.png" alt=""></div>
            </div>
            <div class="item_con1 item_con_active2">
                <div class="item_h">积分用途</div>
                <div class="item_text">
                    <p>用户的积分可通过我们西柚APP的专属兑换通道在任何时间进行积分兑换。积分兑换可兑换实物或者直接提现，也可参与公司的积分活动、红包、抽奖、商城折扣等，并享受公司价值生态体系内的多种付费服务。目前公司搭建的闲置共享经济体系正在逐步完善，积分可兑换的价值也将更加丰富多样</p>
                </div>
                <div class="item_img"><img src="../../assets/images/illustrations4.png" alt=""></div>
            </div>
             <div class="item_con1 item_con_active5">
                <div class="item_h" style="font-size:0.23rem;">注意事项</div>
                <div class="item_text">
                    <p  style="font-size:0.20rem;">西柚团队将会对设备及各测试点进行不间断扫描，一旦发现用户利用软件、硬件等相关漏洞，侵入、拦截、破坏、修改程序以及使用带有伪造、篡改相关功能信息的软/硬件，伪造上行带宽、闲置存储空间、在线时长、硬件能力等将会立刻将相关设备锁定或注销，用户将不可再获得积分。</p>
                </div>
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
        return {};
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

.income {
    width: 100%;
    height: auto;
    overflow: hidden;

    .income_banner {
        img {
            width: 7.5rem;
            height: 5.29rem;
        }
    }

    .item_con1 {
        width: 7.5rem;
        height: auto;
        overflow: hidden;

        box-sizing: border-box;

        .item_h {
            text-align: left;
            font-size: 0.35rem;
            color: #000000;
            margin: 0.37rem auto;
            width: 6.5rem;
        }

        .item_text {
            text-align: left;
            text-indent: 0.4rem;
            color: #808080;
            font-size: 0.28rem;
            margin: 0 auto;
            margin-bottom: 0.5rem;
            width: 6.5rem;

            p {
                margin-top: 0.3rem;
                line-height: 0.4rem;
            }
        }
    }

    .item_con_active {
        background: rgba(249, 249, 249, 1);

        .item_img {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;

            img {
                width: 7.06rem;
                height: 2.82rem;
            }
        }
    }

    .item_con_active1 {
        background: #ffffff;

        .item_img {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;

            img {
                width: 5.65rem;
                height: 3.55rem;
            }
        }
    }

    .item_con_active2 {
        background: rgba(249, 249, 249, 1);

        .item_img {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;

            img {
                width: 3.51rem;
                height: 4.81rem;
            }
        }
    }

}
</style>
