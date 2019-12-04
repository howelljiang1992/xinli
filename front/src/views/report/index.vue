<template>
  <div class="report">
    <div class="jdm">
      <!-- 顶部 -->
      <header class="jdm-search">
        <!-- logo -->
        <a href="javascript:;" class="search-logo"></a>
        <!-- 搜索 -->
        <div class="search">
          	<i></i>
            <input type="text" placeholder="100万超级爆品疯抢">
        </div>
        <!-- 登录 -->
        <a href="javascript:;" class="jdm-login">登录</a>
      </header>
      <!-- 内容 -->
      <main class="content">
        <!-- 轮播图 -->
        <div class="slide">
          <ul>
            <li>
              <img src="" alt="">
            </li>
          </ul>
        </div>
      </main>
      <!-- 底部 -->
      <footer class="toolbar"></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report',
}
</script>

<style scoped lang="less">
  @import "./index.css";
</style>
