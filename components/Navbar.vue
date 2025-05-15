<script lang="ts" setup></script>
<template>
  <nav class="fixed w-full top-4 z-40 px-5">
    <div class="flex justify-between items-center w-full">
      <NuxtLink to="/" class="text-2xl font-bold text-white">Quant.io</NuxtLink>

      <!-- Links -->
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="text-gray-300 hover:text-blue-500 text"
            >Showcase</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="text-gray-300 hover:text-blue-500 text"
            >Documentation</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contact" class="text-gray-300 hover:text-blue-500 text"
            >Example</NuxtLink
          >
        </li>
      </ul>

      <!-- Icons -->
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="text-gray-300 hover:text-blue-500 icon">
            <Icon name="mdi:github" class="icon" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="text-gray-300 hover:text-blue-500">
            <Icon name="ic:baseline-discord" class="icon"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="text-gray-300 hover:text-blue-500">
            <Icon name="ri:twitter-x-line" class="icon"
          /></NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
  .text {
    @apply label-small;
    transition: color 0.3s ease-in-out;
  }
  .text:hover {
    color: #1e90ff; /* Nice blue color for hover effect */
  }
  .icon {
    @apply label-large;
    transition: transform 0.3s ease-in-out;
  }
  .icon:hover {
    transform: scale(1.2); /* Slight zoom effect on hover */
  }
</style>
