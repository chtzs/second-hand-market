<template>
  <h1>Hello!</h1>
  <el-row justify="space-between">
    <el-col :span="12">
      <h1>今日推荐</h1>
      <el-image :src="randomImage"/>
    </el-col>
    <el-col :span="10">
      <h1>一些消息</h1>
      <div class="info">
        <my-avatar :src="require('@/assets/me.png')"/>
        <my-avatar :src="require('@/assets/me.png')"/>
        <my-avatar :src="require('@/assets/me.png')"/>
      </div>
    </el-col>
  </el-row>
  <div class="goods-list">
    <h1>热门二手产品</h1>
    <el-row :gutter="20">
      <el-col v-for="goods in goodsList" :key="goods.id" :span="6">
        <el-card shadow="hover" class="goods-item" :body-style="{ padding: '0px' }">
          <!--            <p>{{ goods.name }}</p>-->
          <img
              :src="goods.image"
              class="image"
              :alt="goods.name"/>
          <el-row class="title">
            <el-col :span="4" class="condition">
              <div>{{ goods.goodsCondition }}</div>
            </el-col>
            <el-col :span="20" class="description">
              <span>{{ goods.description.substring(0, Math.min(goods.description.length, 20)) }}</span>
            </el-col>
          </el-row>
          <div style="padding: 14px">
            <span>{{ goods.name }}</span>
            <div class="bottom">
              <time class="time">{{ goods.postDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyAvatar from "@/components/MyAvatar";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {MyAvatar},
  data() {
    return {
      goodsList: [
        {
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
        }
      ],
      randomImage: "https://www.apple.com.cn/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg"
    }
  },
  beforeMount() {
    this.addData();
  },
  methods: {
    addData() {
      for (let i = 1; i < 10; i++) {
        this.goodsList.push(
            {
              id: i,
              sellerId: 0,
              name: "Apple" + i,
              description: "库克亲自送达",
              image: "https://www.apple.com.cn/v/macbook-pro-13/m/images/overview/modal/m2_power__ez08wn3y6qoi_medium_2x.jpg",
              fakePrice: 100,
              actualPrice: 0,
              functionality: "Good",
              goodsCondition: "全新",
              postDate: new Date(),
              viewCount: 0,
              wantedCount: 0
            }
        );
      }
      // this.$alert("Hello");
    }
  }
}
</script>

<style lang="scss" scoped>

.info {
  width: 100%;
  min-height: 300px;
  background-color: black;
}

.goods-list {
  width: 100%;
}

.goods-item {
  //display: flex;
  //justify-content: center;
  //justify-items: center;
  //padding: 0;
  //height: 200px;
  //width: 100%;
  //background-color: #42b983;
  margin: 20px 0;

  .image {
    width: 100%;
    display: block;
  }
}

.title {
}

.condition {
  width: 100%;

  div {
    width: 50px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    background-color: #409EFF;
    color: white;
    border-radius: 5px;
    vertical-align: middle;
    margin: 5px;
  }
}

.description {
  //flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px;
  }
}
</style>