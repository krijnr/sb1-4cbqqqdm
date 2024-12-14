<template>
  <div class="card mb-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ committee.name }}</h3>
    <div class="space-y-3">
      <div v-for="member in committee.members" 
           :key="member.email"
           class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
        <div>
          <h4 class="font-medium text-gray-900">{{ member.name }}</h4>
          <p class="text-sm text-gray-600">{{ member.role }}</p>
        </div>
        <a :href="`mailto:${member.email}`" 
           class="text-primary-600 hover:text-primary-700 text-sm mt-2 sm:mt-0">
          {{ member.email }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Committee } from '@/types/committee'

defineProps<{
  committee: Committee
}>()
</script>