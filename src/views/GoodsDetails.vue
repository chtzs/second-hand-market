<template>
  <h1>{{ goods.name }}</h1>
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
          <el-button style="width: 100%" type="success" @click="offer(goods.id)">出价！</el-button>
        </el-col>
      </el-row>
      <div class="description">
        {{ goods.description }}
      </div>
    </el-col>
  </el-row>
  <div class="black"></div>
</template>

<script>
import DescriptionItem from "@/components/DescriptionItem";
import {ElMessageBox} from 'element-plus'

export default {
  name: "GoodsDetails",
  components: {DescriptionItem},
  created() {
    const parameters = this.$url.getParameters(location.search);
    // console.log(parameters);
    if (parameters['id']) {
      this.goodsId = parameters['id'];
    }
    this.$axios.get("goods/detail",
        {
          params: {
            goodsId: this.goodsId
          }
        }).then((res) => {
      this.goods = res.data;
    }).catch();
  },
  data() {
    return {
      goodsId: 0,
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
  },
  methods: {
    offer(goodsId) {
      ElMessageBox.prompt('你想出个什么价？', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      })
          .then(({value}) => {
            this.$axios.get("bid/offer", {
              params: {
                goodsId: goodsId,
                price: value
              }
            })
                .then((res) => {
                  this.notifySucceed(res.msg);
                })
          })
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