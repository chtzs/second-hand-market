<template>
  <el-main>
    <el-row>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="120" class-name="ellipsis"/>
        <el-table-column prop="phoneNumber" label="手机号" width="120" class-name="ellipsis"/>
        <el-table-column prop="nickname" label="昵称" class-name="ellipsis"/>
        <el-table-column prop="password" label="密码" width="180" class-name="ellipsis"/>
        <el-table-column prop="salt" label="盐" width="180" class-name="ellipsis"/>
        <el-table-column prop="avatar" label="头像" class-name="ellipsis"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="identity" label="身份"/>
        <el-table-column prop="registerDate" label="注册时间"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="showDetail(scope.$index, scope.row)">显示商品明细</el-button>
            <el-button
                size="small"
                type="danger"
                @click="deleteUser(scope.row)"
            >删除
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

  <el-dialog v-model="dialogTableVisible" title="商品详细信息">
    <el-form :model="form">
      <el-form-item label="ID" :label-width="labelWidth">
        <el-input disabled v-model="form.id" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="手机号" :label-width="labelWidth">
        <el-input v-model="form.phoneNumber" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="昵称" :label-width="labelWidth">
        <el-input v-model="form.nickname" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码" :label-width="labelWidth">
        <el-input v-model="form.password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="盐" :label-width="labelWidth">
        <el-input v-model="form.salt" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="头像" :label-width="labelWidth">
        <el-input v-model="form.avatar" autocomplete="off"/>
      </el-form-item>
      <el-image style="width: 100px; height: 100px" src="/img/me.png" fit="contain"/>
      <el-form-item label="性别" :label-width="labelWidth">
        <el-input v-model="form.gender" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="身份" :label-width="labelWidth">
        <el-input v-model="form.identity" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="注册时间" :label-width="labelWidth">
        <el-input disabled v-model="form.registerDate" autocomplete="off"/>
      </el-form-item>
      <el-row justify="end">
        <el-button type="danger" style="margin-left: 10px;" @click="cancel">取消</el-button>
        <el-button type="success" @click="update">更新</el-button>
      </el-row>
    </el-form>
  </el-dialog>
  <el-dialog
      v-model="deleteDialogVisible"
      title="删除确认"
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
  name: "UserManagement",
  data() {
    return {
      tableData: [],
      page: {
        total: 0,
        current: 1,
        size: 10
      },
      form: {},
      searchContent: "",
      labelWidth: "100px",
      dialogTableVisible: false,
      deleteDialogVisible: false
    }
  },
  created() {
    this.load();
  },
  methods: {
    cellClassName() {
      return "ellipsis";
    },
    handleCurrentChange(pageNum) {
      this.page.current = pageNum;
      this.load();
    },

    // eslint-disable-next-line no-unused-vars
    showDetail(index, row) {
      this.form = row;
      this.dialogTableVisible = true;
    },

    load() {
      this.$axios.get("user/list",
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

    cancel() {
      this.dialogTableVisible = false;
    },

    update() {
      this.$axios.post("user/admin/update", {
        user: this.form
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
        this.dialogTableVisible = false;
      }).catch();
    },

    deleteUser(row) {
      this.deleteDialogVisible = true;
      this.form = row;
    },

    confirmDelete() {
      this.$axios.get("user/admin/delete", {
        params: {
          userId: this.form.id
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

<style lang="scss">
.ellipsis {
  .cell {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }
}
</style>