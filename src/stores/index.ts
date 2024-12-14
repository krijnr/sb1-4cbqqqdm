import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const committees = ref([
    { id: 1, name: 'Executive Board', members: [
      { name: 'Jane Smith', role: 'President', email: 'jane@example.com' },
      { name: 'John Doe', role: 'Vice President', email: 'john@example.com' },
    ]},
    { id: 2, name: 'Fundraising Committee', members: [
      { name: 'Sarah Johnson', role: 'Chair', email: 'sarah@example.com' },
      { name: 'Mike Brown', role: 'Member', email: 'mike@example.com' },
    ]},
  ])

  const budget = ref({
    total: 50000,
    spent: 15000,
    remaining: 35000,
    categories: [
      { name: 'Events', allocated: 20000, spent: 5000 },
      { name: 'Supplies', allocated: 15000, spent: 7000 },
      { name: 'Programs', allocated: 15000, spent: 3000 },
    ]
  })

  const events = ref([
    {
      id: 1,
      title: 'Spring Festival',
      date: '2024-04-15',
      description: 'Annual spring celebration with games and activities',
    },
    {
      id: 2,
      title: 'Teacher Appreciation Week',
      date: '2024-05-01',
      description: 'Week-long celebration honoring our teachers',
    },
  ])

  return {
    committees,
    budget,
    events,
  }
})