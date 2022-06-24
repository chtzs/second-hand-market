<template>
  <data-table-template show-detail-text="订单详情"
                       detail-title="订单详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :data-type="order"
                       :table-data="tableData"
                       :disable-list="disableList"
                       :cell-width="()=>180"
                       @handleCurrentChange="handleCurrentChange">
    <template #additionalButton="scope">
      <el-button @click="pay(scope.row.id)">付款</el-button>
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
  name: "MyOrder",
  components: {DataTableTemplate},
  data() {
    return {
      tableData: [],
      order: {
        id: "ID",
        orderNumber: "订单编号",
        payDate: "支付时间",
        actualPay: "实付款",
        tradeStatus: "订单状态",
        alipayTradeNumber: "支付宝订单编号"
      },
      disableList: ['id', 'orderNumber', 'payDate', 'actualPay', 'tradeStatus', 'alipayTradeNumber'],
      page: {
        total: 0,
        current: 1,
        size: 10
      }
    }
  },
  created() {
    this.load();
  },
  methods: {
    handleCurrentChange(pageNum) {
      this.page.current = pageNum;
      this.load();
    },

    load() {
      this.$axios.get("order/list",
          {
            params: {
              current: this.page.current,
              size: this.page.size
            }
          }).then((res) => {
        this.tableData = res.data.records;
        this.page.total = res.data.total;
      });
    },

    pay(orderId) {
      this.$axios.get("pay/pay",
          {
            params: {
              orderId: orderId
            }
          }).then((res) => {
        let n = window.open();
        n.document.writeln(res.data);
      });
    }
  }
}
</script>

<style scoped>

</style>