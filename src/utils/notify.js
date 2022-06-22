let notify = {
    succeed (msg) {
        this.$notify({
            title: "成功",
            message: msg,
            type: "success",
            offset: 100
        });
    },
    error (msg) {
        this.$notify.error({
            title: "错误",
            message: msg,
            offset: 100
        });
    }
}

export default notify;