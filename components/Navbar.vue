<script lang="ts" setup></script>

<template>
  <header
    class="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex items-center space-x-2">
          <div class="logo-icon">
            <span class="text-white font-bold text-sm">Q</span>
          </div>
          <span class="text-xl font-semibold text-white">Quant.io</span>
          <span class="version-badge">v2.1.0</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="nav-link">Documentation</a>
          <a href="#" class="nav-link">Examples</a>
          <a href="#" class="nav-link">Showcase</a>
          <a href="#" class="nav-link">GitHub</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
  .logo-icon {
    @apply w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center;
    transition: transform 0.3s ease-in-out;
  }

  .logo-icon:hover {
    transform: scale(1.1);
  }

  .version-badge {
    @apply text-xs bg-white/10 px-2 py-1 rounded-full text-gray-400;
  }

  .nav-link {
    @apply text-sm text-gray-300;
    transition: color 0.2s ease-in-out;
  }

  .nav-link:hover {
    @apply text-orange-500 underline;
  }
</style>
