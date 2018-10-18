<template>
  <div class="loginModule">
    <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-input v-model="userName" placeholder="请输入账号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-input type="password" v-model="passWord" placeholder="请输入密码"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-button type="primary" @click="loginBtn">登录</el-button>
  </div>
</template>
<script>
import * as service from "../../api/service.js";

export default {
  data() {
    return {
      userName: "yanglong",
      passWord: "123456"
    };
  },
  computed: {},
  components: {},
  methods: {
    loginBtn() {
      let params = {
        userName: this.userName,
        passWord: this.passWord
      };
      service.login(params).then(res => {
        console.log(res)
        this.$message({
          message: "登录成功！",
          type: "success",
          duration: 5 * 1000
        })
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.loginModule {
}
</style>
