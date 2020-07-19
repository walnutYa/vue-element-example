<template>
  <div class="login-page">
    <div class="login-box">
      <!-- 头像区域 开始 -->
      <div class="avater-box">
        <img src="../../assets/logo.png" alt="">
      </div>
      <!-- 头像区域 结束 -->

      <!-- 登陆表单区域 开始 -->
      <el-form label-width="0px" class="login-form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登陆表单区域 结束 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    /**
     * 登录
     */
    login () {
      window.sessionStorage.setItem('token', 'ABCDEF')
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  background: #2b6b56;
  .login-box {
    width: 450px;
    height: 300px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avater-box {
      width: 130px;
      height: 130px;
      padding: 10px;
      border-radius: 50%;
      border: 1px solid #eee;
      box-shadow: 0 0 10px #ddd;
      background: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
