<template>
  <el-main>
    <el-row>
      <el-table :data="myTableData" stripe style="width: 100%">
        <slot name="table"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="showDetail(scope.$index, scope.row)">{{ showDetailText }}</el-button>
            <el-button
                size="small"
                type="danger"
                @click="showDeleteDialog(scope.$index, scope.row)"
            >{{ deleteText }}
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
                     :page-size="page.size"
                     @current-change="handleCurrentChange"
      />
    </el-row>
  </el-footer>

  <el-dialog v-model="dialogTableVisible" :title="detailTitle">
    <el-form :model="myUpdateData">
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
        <el-button type="primary" @click="deleteItem">确定</el-button>
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
    current: Number,
    total: Number,
    size: Number,
    tableData: Array,
    updateData: Object
  },
  emits: ["showDetail", "deleteItem", "handleCurrentChange", "confirmDelete", "updateItem"],
  data() {
    return {
      myTableData: [],
      myUpdateData: {},
      dialogTableVisible: false,
      deleteDialogVisible: false,
      page: {
        current: 1,
        total: 0,
        size: 10
      }
    }
  },
  methods: {
    showDetail(index, row) {
      this.myUpdateData = row;
      this.dialogTableVisible = true;
      this.$emit("showDetail", index, row);
    },
    showDeleteDialog(index, row) {
      this.deleteDialogVisible = true;
      this.$emit("deleteItem", index, row);
    },
    handleCurrentChange(pageNum) {
      this.$emit("handleCurrentChange", pageNum);
    },
    updateItem(newItem) {
      this.dialogTableVisible = false;
      this.$emit("updateItem", newItem);
    },
    deleteItem() {
      this.deleteDialogVisible = false;
      this.$emit("confirmDelete");
    },
  },
  watch: {
    current(newValue) {
      this.page.current = newValue;
    },
    total(newValue) {
      this.page.total = newValue;
    },
    size(newValue) {
      this.page.size = newValue;
    },
    tableData(newValue) {
      this.myTableData = newValue;
    },
    updateData(newValue) {
      this.myUpdateData = newValue;
    }
  }
}
</script>

<style scoped>

</style>