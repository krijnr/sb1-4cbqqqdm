<template>
  <div class="mb-6">
    <label for="search" class="form-label">Search Committees</label>
    <input
      id="search"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="form-input"
      placeholder="Search by committee name or member name..."
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>