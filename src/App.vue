<script setup></script>

<template>
  <div class="app">
    <div class="container py-4">
      <header class="pb-4 mb-4 border-bottom">
        <router-link to="/" class="text-dark text-decoration-none">
          <!-- 라우터 뷰의 주소를 슬러시 요청해서 홈주소로 간다 -->
          <b class="fs-4">Memo Application</b>
        </router-link>
      </header>

      <main>
        <router-view/>
      </main>

      <footer class="pt-4 mt-4 border-top">
        &copy; 2024. Memo. All right reserved.
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app .container {
  max-width: 576px;
}
</style>
