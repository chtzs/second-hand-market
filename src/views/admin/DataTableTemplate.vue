<template>
  <el-main>
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <slot name="table"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="showDetail(scope.$index, scope.row)">{{ showDetailText }}</el-button>
            <el-button
                size="small"
                type="danger"
                @click="deleteItem(scope.$index, scope.row)"
            >{{deleteText}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-main>
  <!--分页-->
  <el-footer class="footer">
    <el-row justify="center">
      <el-pagination background layout="prev, pager, next"
                     v-bind:currentPage="page.current"
                     :total="page.total"
                     @current-change="handleCurrentChange"
                     :page-size="page.size"
      />
    </el-row>
  </el-footer>

  <el-dialog v-model="dialogTableVisible" :title="detailTitle">
    <el-form :model="form">
      <slot name="update"/>
      <el-row justify="end">
        <el-button type="danger" style="margin-left: 10px;" @click="this.dialogTableVisible = false">取消</el-button>
        <el-button type="success" @click="updateItem">更新</el-button>
      </el-row>
    </el-form>
  </el-dialog>
  <el-dialog
      v-model="deleteDialogVisible"
      :title="confirmDeleteTitle"
      width="30%"
  >
    <span>你确定？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">还是算了吧</el-button>
        <el-button type="primary" @click="confirmDelete">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "DataTableTemplate",
  props: {
    showDetailText: String,
    detailTitle: String,
    deleteText: String,
    confirmDeleteTitle: String,
    page: {
      current: Number,
      total: Number,
      size: Number
    }
  },
  emits: ["showDetail", "deleteItem", "handleCurrentChange", "confirmDelete", "updateItem"],
  data() {
    return {
      tableData: [],
      form: {},
      dialogTableVisible: false,
      deleteDialogVisible: false
    }
  },
  methods: {
    showDetail(index, row) {
      this.$emit("showDetail", index, row);
    },
    deleteItem(index, row) {
      this.$emit("deleteItem", index, row);
    },
    handleCurrentChange() {
      this.$emit("handleCurrentChange");
    },
    confirmDelete() {
      this.$emit("confirmDelete");
    },
    updateItem() {
      this.$emit("updateItem");
    }
  }
}
</script>

<style scoped>

</style>