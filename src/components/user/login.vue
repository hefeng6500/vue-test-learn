<template>
  <div class="loginModule">
    <div class="loginArea">
      <h1 class="title">用户登录</h1>
      
      <el-input class="userName" v-model="userName" placeholder="请输入账号"></el-input>
      <el-input class="password" type="password" v-model="passWord" placeholder="请输入密码"></el-input>
      <el-button class="loginBtn" type="primary" @click="loginBtn">登录</el-button>
    </div>
  </div>
</template>
<script>
import * as service from "../../api/service.js";
import md5 from "md5"
export default {
  data() {
    return {
      userName: "yanglong",
      passWord: "admin"
    };
  },
  computed: {},
  components: {},
  methods: {
    loginBtn() {
      let params = {
        userName: this.userName,
        passWord: md5(md5(this.passWord))
      };
      service.login(params).then(res => {
        console.log(res);
        if (res.status === 0) {
          this.$message({
            message: "登录成功！",
            type: "success",
            duration: 5 * 1000
          });
          this.$router.push({ path: "/index" });
        }else{
          this.$message({
            message: res.data.err,
            type: "error",
            duration: 5 * 1000
          });
        }
      });
    }
  },
  mounted() {


  }
};
</script>
<style scoped>
.loginModule {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #2d3a4b;
  /* background: #fff; */
}
.title {
  color: #eee;
  text-align: center;
}
.loginArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-150px, -150px);
  width: 300px;
  height: 300px;
  padding: 20px;
  /* background: rgb(168, 167, 255); */
}
.userName {
  margin-top: 30px;
}
.password {
  margin-top: 20px;
}
.loginBtn {
  margin-top: 20px;
  width: 100%;
}
</style>
