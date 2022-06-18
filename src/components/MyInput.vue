<template>
  <el-form-item class="wrapper">
    <span class="prefix">
      <slot name="prefix"></slot>
    </span>
    <el-input ref="rawInput" :placeholder="placeholder" :name="name" :type="type"
              :tabindex="tabindex" :auto-complete="autoComplete" :prop="prop"
              :model-value="text"
              @input="updateText"
              class="my-input"/>
    <span class="suffix">
      <slot name="suffix"></slot>
    </span>
  </el-form-item>
</template>

<script>

export default {
  name: "MyInput",
  props: {
    placeholder: String,
    name: String,
    type: String,
    tabindex: String,
    autoComplete: String,
    text: String,
    prop: String
  },
  emits: ["update:text"],
  data() {
    return {
      input: ""
    }
  },
  methods: {
    updateText(val) {
      this.$emit('update:text', val)
    },
    focus() {
      this.$refs.rawInput.focus();
    }
  }
}
</script>
<style lang="scss">
.el-input__wrapper {
  display: block !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
</style>

<style lang="scss">
$dark_gray: #889aa4;
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

.prefix {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.suffix {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}

@supports (-webkit-mask: none) and (not (caret-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.my-input {
  display: inline-block;
  height: 47px;
  width: 85%;

  input {
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
    caret-color: $cursor;

    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px $bg inset !important;
      -webkit-text-fill-color: $cursor !important;
    }
  }

  input::placeholder {
    color: #ffffff;
  }
}

.wrapper {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

</style>