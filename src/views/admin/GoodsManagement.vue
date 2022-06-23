<template>
  <data-table-template show-detail-text="商品详情"
                       detail-title="商品详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :data-type="goods"
                       :table-data="tableData"
                       :disable-list="disableList"
                       @handleCurrentChange="handleCurrentChange"
                       @updateItem="updateItem"
                       @deleteItem="deleteItem">
    <template #updateItem="scope">
      <el-form-item :label="scope.label" :label-width="scope.labelWidth">
        <el-input :disabled="scope.disabled" v-model="scope.updateData[scope.item]" autocomplete="off"/>
      </el-form-item>
    </template>
  </data-table-template>
</template>

<script>
import DataTableTemplate from "@/views/admin/DataTableTemplate";

export default {
  name: "GoodsManagement",
  components: {DataTableTemplate},
  data() {
    return {
      tableData: [],
      goods: {
        id: "ID",
        sellerId: "卖家id",
        name: "商品名称",
        image: "商品图片",
        description: "描述",
        fakePrice: "假价格",
        actualPrice: "真价格",
        functionality: "功能性",
        goodsCondition: "成色",
        postDate: "发布日期",
        viewCount: "浏览次数",
        wantedCount: "想要次数",
        status: "状态"
      },
      disableList: ['id', 'sellerId', 'postDate'],
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
      this.$axios.get("goods/list",
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

    updateItem(newItem) {
      console.log(newItem)
      this.$axios.post("goods/admin/update", {
        goods: newItem
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
        this.dialogTableVisible = false;
      }).catch();
    },

    deleteItem(newItem) {
      console.log(newItem.id);
      this.$axios.get("goods/admin/delete", {
        params: {
          goodsId: newItem.id
        }
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
      }).catch();
      this.deleteDialogVisible = false;
    }
  }
}
</script>

<style scoped>

</style>