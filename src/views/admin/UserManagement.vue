<template>
  <data-table-template show-detail-text="用户详情"
                       detail-title="用户详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :table-data="tableData"
                       @showDetail="showDetail"
                       @handleCurrentChange="handleCurrentChange"
                       @updateItem="updateUser"
                       @deleteItem="deleteUser">
    <template v-slot:table>
      <el-table-column prop="id" label="ID" width="120" class-name="ellipsis"/>
      <el-table-column prop="phoneNumber" label="手机号" width="120" class-name="ellipsis"/>
      <el-table-column prop="nickname" label="昵称" class-name="ellipsis"/>
      <el-table-column prop="password" label="密码" width="180" class-name="ellipsis"/>
      <el-table-column prop="salt" label="盐" width="180" class-name="ellipsis"/>
      <el-table-column prop="avatar" label="头像" class-name="ellipsis"/>
      <el-table-column prop="gender" label="性别"/>
      <el-table-column prop="identity" label="身份"/>
      <el-table-column prop="registerDate" label="注册时间"/>
    </template>
    <template v-slot:update>
      <el-form-item label="ID" :label-width="labelWidth">
        <el-input disabled v-model="updateData.id" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="手机号" :label-width="labelWidth">
        <el-input v-model="updateData.phoneNumber" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="昵称" :label-width="labelWidth">
        <el-input v-model="updateData.nickname" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码" :label-width="labelWidth">
        <el-input v-model="updateData.password" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="盐" :label-width="labelWidth">
        <el-input v-model="updateData.salt" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="头像" :label-width="labelWidth">
        <el-input v-model="updateData.avatar" autocomplete="off"/>
      </el-form-item>
      <el-image style="width: 100px; height: 100px" src="/img/me.png" fit="contain"/>
      <el-form-item label="性别" :label-width="labelWidth">
        <el-input v-model="updateData.gender" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="身份" :label-width="labelWidth">
        <el-input v-model="updateData.identity" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="注册时间" :label-width="labelWidth">
        <el-input disabled v-model="updateData.registerDate" autocomplete="off"/>
      </el-form-item>
    </template>
  </data-table-template>
</template>

<script>
import DataTableTemplate from "@/views/admin/DataTableTemplate";

export default {
  name: "UserManagement",
  components: {DataTableTemplate},
  data() {
    return {
      tableData: [],
      updateData: {},
      page: {
        total: 0,
        current: 1,
        size: 10
      },
      searchContent: "",
      labelWidth: "100px",
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

    showDetail(index, row) {
      this.updateData = row;
    },

    updateUser(newItem) {
      this.$axios.post("user/admin/update", {
        user: newItem
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
        this.dialogTableVisible = false;
      }).catch();
    },

    deleteUser() {
      this.$axios.get("user/admin/delete", {
        params: {
          userId: this.updateData.id
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