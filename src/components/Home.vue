<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="">
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logOut">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409BFF"
          unique-opened
          router
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id" v-for="item in menuArr" :key="item.id">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>{{ item.title }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.path" v-for="subItem in item.childrens" :key="subItem.id" @click="saveNavState(subItem.path)">
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>{{ subItem.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      // 是否折叠
      isCollapse: false,
      // 侧边栏菜单
      menuArr: [
        {
          id: '1',
          path: '',
          title: '页面一',
          childrens: [
            {
              id: '1-1',
              path: '/page1',
              title: '模块一'
            }
          ]
        },
        {
          id: '2',
          path: '',
          title: '页面二',
          childrens: [
            {
              id: '2-1',
              path: '/page2',
              title: '模块一'
            }
          ]
        }
      ],
      // 被激活的链接地址
      activePath: '/page1'
    }
  },
  created () {
    console.log(process.env)
    this.activePath = window.sessionStorage.getItem('activePath') || this.activePath
  },
  mounted () {},
  methods: {
    /**
     * 退出登录
     */
    logOut () {
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('activePath')
      this.$router.push('/login')
    },

    /**
     * 点击按钮切换菜单的折叠与展开
     */
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },

    /**
     * 保存链接的激活状态
     */
    saveNavState (activePath) {
      if (activePath === this.activePath) return
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  .el-header {
    color: #fff;
    display: flex;
    justify-content: space-between;
    background: #373d41;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      font-size: 20px;
      img {
        width: 30px;
      }
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
    background: #333744;
    .toggle-button {
      background: #4A5064;
      font-size: 10px;
      line-height: 24px;
      color: #fff;
      text-align: center;
      letter-spacing: 0.2em;
      cursor: pointer;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background: #EAEDF1;
  }
}
</style>
