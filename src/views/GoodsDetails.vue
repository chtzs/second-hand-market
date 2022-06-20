<template>
  <div></div>
</template>

<script>
export default {
  name: "GoodsDetails",
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
      }
    }
  }
}
</script>

<style scoped>

</style>