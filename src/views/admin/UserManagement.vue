<template>
  <el-main>
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"/>
        <el-table-column prop="number" label="编号" width="180"/>
        <el-table-column prop="name" label="名称"/>
        <el-table-column prop="price" label="价格"/>
        <el-table-column prop="memo" label="备注"/>
        <el-table-column prop="imagePath" label="图片"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="showDetail(scope.$index, scope.row)">显示商品明细</el-button>
            <el-button
                size="small"
                type="danger"
            >加入购物车
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
</template>

<script>
export default {
  name: "UserManagement",
  data() {
    return {
      tableData: [],
      page: {
        total: 0,
        current: 1,
        size: 10
      },
    }
  }
}
</script>

<style scoped>

</style>