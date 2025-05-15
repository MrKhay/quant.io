<script setup lang="ts"></script>

<template>
  <div class="bg-gradient-to-b from-[#090909] to-[#1a1a1a]">
    <Navbar />
    <div class="flex flex-col min-h-screen pt-[100px]">
      <ClientOnly>
        <div class="fixed top-0 size-[800px] w-full overflow-hidden">
          <FlickeringGrid
            class="top-0 inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            :square-size="4"
            :grid-gap="6"
            color="#60A5FA"
            :max-opacity="0.5"
            :flicker-chance="0.1"
          />
        </div>
      </ClientOnly>

      <div class="px-[60px]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style></style>
