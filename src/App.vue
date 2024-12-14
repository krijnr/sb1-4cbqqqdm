<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-primary-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-white font-bold">PTC App</router-link>
          </div>
          <div class="flex">
            <router-link v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              class="text-white hover:bg-primary-700 px-3 py-2 rounded-md text-sm font-medium">
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { name: 'Messages', path: '/messaging' },
  { name: 'Directory', path: '/directory' },
  { name: 'Reimbursement', path: '/reimbursement' },
  { name: 'Budget', path: '/budget' },
  { name: 'Calendar', path: '/calendar' },
]
</script>