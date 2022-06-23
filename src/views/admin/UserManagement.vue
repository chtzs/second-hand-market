<template>
  <data-table-template show-detail-text="用户详情"
                       detail-title="用户详情"
                       delete-text="删除"
                       confirm-delete-title="删除确认"
                       :current="page.current"
                       :total="page.total"
                       :size="page.size"
                       :data-type="user"
                       :table-data="tableData"
                       :disable-list="disableList"
                       @handleCurrentChange="handleCurrentChange"
                       @updateItem="updateUser"
                       @deleteItem="deleteUser">
    <template #updateItem="scope">
      <el-form-item :label="scope.label" :label-width="scope.labelWidth">
        <el-input :disabled="scope.disabled" v-model="scope.updateData[scope.item]" autocomplete="off"/>
      </el-form-item>
      <el-image v-if="scope.item === 'avatar'" style="width: 100px; height: 100px" src="/img/me.png" fit="contain"/>
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
      user: {
        id: "用户id",
        phoneNumber: "手机号",
        nickname: "昵称",
        password: "密码",
        salt: "盐",
        avatar: "头像",
        gender: "性别",
        identity: "身份",
        registerDate: "注册时间"
      },
      disableList: ['id', 'registerDate'],
      page: {
        total: 0,
        current: 1,
        size: 10
      },
      searchContent: ""
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

    updateUser(newItem) {
      this.$axios.post("user/admin/update", {
        user: newItem
      }).then((res) => {
        this.notifySucceed(res.msg);
        this.load();
        this.dialogTableVisible = false;
      }).catch();
    },

    deleteUser(newItem) {
      this.$axios.get("user/admin/delete", {
        params: {
          userId: newItem.id
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
</style>