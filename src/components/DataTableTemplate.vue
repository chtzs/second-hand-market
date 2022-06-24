<template>
  <el-main>
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="操作" style="width: 100%; min-width: 200px">
          <template #default="scope">
            <el-button size="small" @click="showDetail(scope.$index, scope.row)">{{ showDetailText }}</el-button>
            <el-button
                size="small"
                type="danger"
                @click="showDeleteDialog(scope.$index, scope.row)"
            >{{ deleteText }}
            </el-button>
            <slot name="additionalButton" :row="scope.row"/>
          </template>
        </el-table-column>
        <el-table-column v-for="item in Object.keys(dataType)" :key="item" :prop="item" :label="dataType[item]"
                         :width="cellWidth(item)"
                         :class-name="isEllipsis(item) ? 'ellipsis' : ''"/>
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
    <el-form :model="updateData">
      <slot v-for="item in Object.keys(dataType)" :key="item"
            name="updateItem"
            :item="item"
            :label="dataType[item]"
            :label-width="labelWidth(item)"
            :disabled="disableList.includes(item)"
            :data="updateData[item]"
            :updateData="updateData">
      </slot>
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
    dataType: Object,
    tableData: Array,
    cellWidth: {
      type: Function,
      default: () => 120
    },
    isEllipsis: {
      type: Function,
      default: () => true
    },
    labelWidth: {
      type: Function,
      default: () => 120
    },
    disableList: Array
  },
  emits: ["showDetail", "deleteItem", "handleCurrentChange", "updateItem"],
  data() {
    return {
      myTableData: [],
      updateData: {},
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
      this.updateData = JSON.parse(JSON.stringify(row));
      this.dialogTableVisible = true;
      this.$emit("showDetail", index, row);
    },
    showDeleteDialog(index, row) {
      this.updateData = JSON.parse(JSON.stringify(row));
      this.deleteDialogVisible = true;
      this.$emit("confirmDelete", index, row);
    },
    handleCurrentChange(pageNum) {
      this.$emit("handleCurrentChange", pageNum);
    },
    updateItem() {
      this.dialogTableVisible = false;
      this.$emit("updateItem", this.updateData);
    },
    deleteItem() {
      console.log(this.updateData);
      this.deleteDialogVisible = false;
      this.$emit("deleteItem", this.updateData);
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
    }
  }
}
</script>

<style lang="scss">
.ellipsis {
  .cell {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }
}
</style>