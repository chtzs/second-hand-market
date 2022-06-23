<template>
  <div v-infinite-scroll="addData">
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
            <el-row>
              <el-col :span="4" class="condition">
                <div>{{ goods.goodsCondition }}</div>
              </el-col>
              <el-col :span="20" class="description">
                <span>{{ goods.description.substring(0, Math.min(goods.description.length, 20)) }}</span>
              </el-col>
            </el-row>
            <el-row class="money-want-wrapper">
              <span class="money">￥{{ goods.actualPrice }}</span>
              <span class="want">{{ goods.wantedCount }}人想要</span>
            </el-row>
            <div style="padding: 14px">
              <span>{{ goods.name }}</span>
              <el-row justify="space-between">
                <div class="time">
                  <span>发布日期:{{ this.$dateFormat(new Date(goods.postDate), 'yyyy-MM-dd')}}</span>
                </div>
                <el-button type="success" class="button">让我看看</el-button>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
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
      page: {
        total: 0,
        current: 1,
        size: 10
      },
      goodsList: [],
      randomImage: "https://www.apple.com.cn/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg"
    }
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      this.$axios.get("goods/list",
          {
            params: {
              current: this.page.current,
              size: this.page.size
            }
          }).then((res) => {
        this.goodsList = this.goodsList.concat(res.data.records);
        this.page.total = res.data.total;
      });
    },
    addData() {
      if (this.page.current >= this.page.total) return;
      this.page.current++;
      this.load();
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
  margin: 20px 0;

  .image {
    width: 100%;
    display: block;
  }
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

.money-want-wrapper {
  display: flex;
  align-items: baseline;

  * {
    margin: 0 5px;
  }
}

.money {
  color: red;
  font-weight: bold;
  font-size: 2em;
}

.want {
  color: gray;
  font-size: 1em;
}

.time {
  flex: 1;
  display: flex;
  align-items: center;
  span {
    color: #cccccc;
  }
}
</style>