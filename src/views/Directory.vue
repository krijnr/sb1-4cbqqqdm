<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Committee Directory</h1>
    
    <CommitteeFilter v-model="searchQuery" />
    
    <div v-if="filteredCommittees.length > 0">
      <CommitteeCard
        v-for="committee in filteredCommittees"
        :key="committee.id"
        :committee="committee"
      />
    </div>
    
    <div v-else class="text-center py-8">
      <p class="text-gray-500">No committees found matching your search.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommitteeCard from '@/components/directory/CommitteeCard.vue'
import CommitteeFilter from '@/components/directory/CommitteeFilter.vue'
import { useCommitteeSearch } from '@/composables/useCommitteeSearch'

const { searchQuery, filteredCommittees } = useCommitteeSearch()
</script>