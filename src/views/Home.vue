<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold text-gray-900">Welcome to PTC App</h1>
    <p class="text-gray-600">
      Stay connected with your Parent Teacher Club community.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="card hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold text-gray-900 mb-2">{{ link.name }}</h2>
        <p class="text-gray-600">{{ link.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  {
    name: 'Directory',
    path: '/directory',
    description: 'View committees and members'
  },
  {
    name: 'Messages',
    path: '/messaging',
    description: 'Send messages to groups'
  },
  {
    name: 'Reimbursement',
    path: '/reimbursement',
    description: 'Submit reimbursement requests'
  },
  {
    name: 'Budget',
    path: '/budget',
    description: 'View PTC budget details'
  },
  {
    name: 'Calendar',
    path: '/calendar',
    description: 'See upcoming events'
  }
]
</script>