<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in randomImageList" :key="item">
      <img class="carousel-img" :src="item" alt="轮播图">
    </el-carousel-item>
  </el-carousel>
  <el-row :gutter="10">
    <el-col :span="12">
      <div>
        <description-item circle="成色" :rect="goods.goodsCondition"></description-item>
        <description-item circle="功能性" :rect="goods.functionality"></description-item>
        <description-item circle="访问人数" :rect="goods.viewCount"></description-item>
        <description-item circle="想要人数" :rect="goods.wantedCount"></description-item>
      </div>
    </el-col>
    <el-col :span="12">
      <el-row justify="space-between" class="price-bid-wrapper">
        <el-col :span="6">
          <span>标价： </span>
          <del style="margin: 0 5px">
            <span style="color: gray;font-size: 1.5em">￥{{ goods.fakePrice }}</span>
          </del>
          <span style="color: red;font-weight: bold;font-size: 2em">￥{{ goods.actualPrice }}</span>
        </el-col>
        <el-col :span="16">
          <el-button style="width: 100%" type="success">出价！</el-button>
        </el-col>
      </el-row>
      <div class="description">
        球状闪电，俗称滚地雷。通常在雷暴时发生，为圆球形状的闪电。这是一种真实的物理现象。它十分亮，近圆球形，直径约15至40厘米不等。通常仅维持数秒，但也有维持了1至2分钟的记录。颜色除常见的橙色和红色外，还有黄色、紫色、蓝色、亮白色、幽绿色的光环，呈多种多样的色彩。
        球状闪电的危害较大，它可以随气流起伏在近地空中自在飘飞或逆风而行。它可以通过开着的门窗进入室内，常见的是穿过烟囱后进入建筑物。它甚至可以在导线上滑动，有时会悬停，有时会无声消失，有时又会因为碰到障碍物爆炸。
        球状闪电是形成雷电的电动趋势，在半击穿空气时产生的空气离子球。它其中携带能量，包裹相对稳定。当有导体破坏它的平衡时，它会和周围的空气中和，并释放出能量。
      </div>
    </el-col>
  </el-row>
  <div class="black"></div>
</template>

<script>
import DescriptionItem from "@/components/DescriptionItem";

export default {
  name: "GoodsDetails",
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
      randomImageList: [
        "/img/jp1.gif",
        "/img/jp2.gif",
        "/img/lightning1.jfif",
        // "https://api.ixiaowai.cn/api/api.php",
        // "https://api.ixiaowai.cn/mcapi/mcapi.php",
        // "https://api.ixiaowai.cn/gqapi/gqapi.php"
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.description-item {
  padding: 10px 0;
}

.black {
  background-color: black;
  width: 100%;
  height: 300px;
}

.carousel-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.description {
  margin-top: 20px;

}

.price-bid-wrapper {
  display: flex;
  align-items: baseline;
  flex-wrap: nowrap;
}

.price {
  margin: 0 10px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>