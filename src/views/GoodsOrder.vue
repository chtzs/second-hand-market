<template>
  <div class="order-content">
    <el-card>
      <el-row style="padding: 5px 0;">
        <el-col :span="12">
          <div class="image">
            <img :src="goods.image" alt="商品图片"/>
          </div>
        </el-col>
        <el-col :span="12">
          <el-row>
            <span>订单编号：{{ order.id }}</span>
          </el-row>
          <el-row>
            <span>预计送达时间：{{ new Date() }}</span>
          </el-row>
          <el-row>
            <description-item circle="当前状态" :rect="order.deliveryStatus"/>
          </el-row>
          <el-row>
            <description-item circle="快递公司" rect="EMS"/>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <div class="pay-footer">
      <el-card>
        <el-row>
          <el-col :span="10" class="seller">
            <description-item circle="商家头像" rect="商家姓名"/>
            <div class="rect">信誉分</div>
            <div class="rect">信誉分</div>
          </el-col>

          <el-col :span="14">
            <div style="width: 100%; height: 100%; background-color: antiquewhite">
              评论
            </div>
          </el-col>
        </el-row>
        <el-button style="width: 100%; margin-top: 10px" type="success">立刻上当！</el-button>
      </el-card>
    </div>
  </div>

</template>

<script>
import DescriptionItem from "@/components/DescriptionItem";

export default {
  name: "GoodsOrder",
  components: {DescriptionItem},
  data() {
    return {
      goods: {
        id: 0,
        sellerId: 0,
        name: "汉堡",
        description: "蟹堡王的汉堡，十分地珍贵",
        image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        fakePrice: 100,
        actualPrice: 0,
        functionality: "Good",
        goodsCondition: "全新",
        postDate: new Date(),
        viewCount: 0,
        wantedCount: 0
      },
      order: {
        id: 0,
        goodsId: 0,
        buyerId: 0,
        payDate: new Date(),
        actualPay: 0,
        deliveryStatus: "运输中"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.order-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.image {
  width: 300px;
  height: 300px;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}

.description-item {
  width: 100%;
  padding: 10px;
}

.pay-footer {
  display: flex;
  background-color: black;
  align-self: end;
  width: 100%;

  .el-card {
    width: 100%;
  }
}

.seller {
  border-right: 1px solid black;

  .rect {
    padding: 5px 0;
    margin: 10px 0;
    border-radius: 12px;
    border: 1px solid #409eff;
    box-shadow: 0 0 10px #409eff;
  }
}
</style>