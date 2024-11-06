<script setup lang="ts"></script>

<template>
  <header>
    <h3>admin 模板表頭</h3>
    <NuxtLink to="/">前台首頁</NuxtLink> | 
    <NuxtLink to="/about">前台 About</NuxtLink> | 
    <NuxtLink to="/admin">後台首頁</NuxtLink> | 
    <NuxtLink to="/admin/order">後台 Order</NuxtLink> | 
  </header>

  <slot />

  <footer><h3>admin 模板表尾</h3></footer>
</template>

<style scoped></style>
