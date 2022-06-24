<template>
  <data-table-template show-detail-text="报价详情"
                       detail-title="商品详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :data-type="bid"
                       :table-data="tableData"
                       :disable-list="disableList"
                       :cell-width="()=>180"
                       @handleCurrentChange="handleCurrentChange">
    <template #additionalButton="scope">
      <el-button @click="createOrder(scope.row.id)">就他了！</el-button>
    </template>
    <template #updateItem="scope">
      <el-form-item :label="scope.label" :label-width="scope.labelWidth">
        <el-input :disabled="scope.disabled" v-model="scope.updateData[scope.item]" autocomplete="off"/>
      </el-form-item>
    </template>
  </data-table-template>
</template>

<script>
import DataTableTemplate from "@/components/DataTableTemplate";

export default {
  name: "MyBid",
  components: {DataTableTemplate},
  created() {
    const parameters = this.$url.getParameters(location.search);
    if (parameters['id']) {
      this.goodsId = parameters['id'];
    }
    this.load();
  },
  data() {
    return {
      goodsId: 0,
      tableData: [],
      bid: {
        id: "ID",
        goodsId: "商品id",
        buyerId: "买家id",
        offer: "报价",
        createDate: "提交时间"
      },
      disableList: ['id', 'goodsId', 'buyerId', 'offer', 'createDate'],
      page: {
        total: 0,
        current: 1,
        size: 10
      }
    }
  },
  methods: {
    handleCurrentChange(pageNum) {
      this.page.current = pageNum;
      this.load();
    },

    load() {
      this.$axios.get("bid/list",
          {
            params: {
              current: this.page.current,
              size: this.page.size,
              goodsId: this.goodsId,
              column: "offer",
              order: "desc"
            }
          }).then((res) => {
        this.tableData = res.data.records;
        this.page.total = res.data.total;
      });
    },

    createOrder(bidId) {
      this.$axios.get("order/gen",
          {
            params: {
              bidId: bidId
            }
          }).then((res) => {
        this.notifySucceed(res.msg);
      });
    }
  }
}
</script>

<style scoped>

</style>