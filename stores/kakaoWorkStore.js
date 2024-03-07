import { defineStore } from 'pinia'

export const useKakaoWorkStore = defineStore('kakaoWork', {
  state: () => ({
    link: null
  }),
  actions: {
    async fetchLink() {
      try {
        const response = await fetch('/api/kakaoWork')
        if (response.ok) {
          const data = await response.json()
          this.link = data
        } else {
          console.error('Failed to fetch the link from API')
        }
      } catch (error) {
        console.error('Error fetching link:', error)
      }
    }
  }
})
