import { create, useStore } from 'zustand'

const searchParams = new URLSearchParams(window.location.search)
const searchParam = searchParams.get('category') ?? 'all'

type JobListStore = {
  filters: string
  searchValue: string
  actions: {
    setSearchValue: (value: string) => void
    clearSearchParam: () => void
    setFilters: (filters: string) => void
    clearFilters: () => void
  }
}

type ThemeStore = {
  theme: 'light' | 'dark'
  actions: {
    setTheme: (theme: 'light' | 'dark') => void
  }
}

const jobListStore = create<JobListStore>((set) => ({
  filters: searchParam,
  searchValue: '',
  actions: {
    setSearchValue: (value) => set({ searchValue: value }),
    clearSearchParam: () => set({ searchValue: '' }),
    setFilters: (filters) => set({ filters }),
    clearFilters: () => set({ filters: 'all' }),
  },
}))

const theme = document.querySelector('body')?.classList.contains('dark-theme')
  ? 'dark'
  : 'light'

const themeStore = create<ThemeStore>((set) => ({
  theme,
  actions: {
    setTheme: (theme) => set({ theme }),
  },
}))

export const useThemeValue = () => useStore(themeStore).theme
export const useThemeActions = () => useStore(themeStore).actions

export const useJobListSearchValue = () => useStore(jobListStore).searchValue
export const useJobListFilters = () => useStore(jobListStore).filters
export const useJobListActions = () => useStore(jobListStore).actions
