<template>
  <data-table-template show-detail-text="审核详情"
                       detail-title="审核详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :data-type="review"
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
  name: "ReviewManagement",
  components: {DataTableTemplate},
  data() {
    return {
      tableData: [],
      review: {
        id: "ID",
        goodsId: "商品id",
        status: "审核状态，0为待审核，1为通过"
      },
      disableList: ['id', 'goodsId'],
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
      this.$axios.get("review/list",
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
      this.$axios.get("review/update", {
        params: {
          reviewId: parseInt(newItem.id),
          status: parseInt(newItem.status)
        }
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
        this.dialogTableVisible = false;
      }).catch();
    },

    deleteItem() {
      this.notifyError("这玩意不能删");
    }
  }
}
</script>

<style scoped>

</style>